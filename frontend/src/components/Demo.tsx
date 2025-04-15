import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Check, AlertCircle } from 'lucide-react';

const Demo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  // Track actual rendered image dimensions for accurate region mapping
  useEffect(() => {
    if (imageRef.current && preview) {
      const updateDimensions = () => {
        setImageDimensions({
          width: imageRef.current.clientWidth,
          height: imageRef.current.clientHeight
        });
      };

      // Initial update
      updateDimensions();
      
      // Update on window resize
      window.addEventListener('resize', updateDimensions);
      
      // Clean up
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, [preview, imageRef.current]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      processFile(droppedFile);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      processFile(selectedFile);
    }
  };

  const processFile = (file) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setPreview(e.target.result);
        
        // Get original image dimensions for region mapping
        const img = new Image();
        img.onload = () => {
          setImageDimensions({
            originalWidth: img.width,
            originalHeight: img.height
          });
        };
        img.src = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!file || !preview) return;
    
    setIsAnalyzing(true);
    setResult(null);
    setError(null);
    
    try {
      // Create form data to send to backend
      const formData = new FormData();
      formData.append('file', file);
      
      // Send to your FastAPI backend
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to analyze image');
      }
      
      const data = await response.json();
      
      // Process the response
      setResult({
        hasCavity: data.hasCavity,
        confidence: data.confidence,
        regions: data.regions || [],
        cure: data.cure,
        suggestions: data.suggestions || ["Regular dental check-ups", "Proper brushing and flossing"]
      });
      
    } catch (err) {
      console.error("Error analyzing image:", err);
      setError(err.message || "Failed to analyze image");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetDemo = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  // Helper function to render cavity regions based on actual image dimensions
  const renderRegions = () => {
    if (!result || !result.hasCavity || !result.regions || result.regions.length === 0 || 
        !imageRef.current || !imageDimensions.width) {
      return null;
    }
    
    return result.regions.map((region, index) => {
      // Convert percentage-based coordinates to actual pixels in the rendered image
      const pixelX = (region.x / 100) * imageDimensions.width;
      const pixelY = (region.y / 100) * imageDimensions.height;
      const pixelWidth = (region.width / 100) * imageDimensions.width;
      const pixelHeight = (region.height / 100) * imageDimensions.height;
      
      return (
        <div 
          key={index}
          className="absolute border-2 border-red-500 bg-red-500/20 pointer-events-none"
          style={{
            left: `${pixelX}px`,
            top: `${pixelY}px`,
            width: `${pixelWidth}px`,
            height: `${pixelHeight}px`
          }}
        >
          <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
            Area {index + 1}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="section-container" id="demo">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Cavi-Scan</h2>
        <p className="text-lg text-muted-foreground">
          Upload a dental image to see how our AI model detects issues and provides intelligent analysis.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="border border-border shadow-md">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                {preview ? (
                  <div className="relative">
                    <img 
                      ref={imageRef}
                      src={preview} 
                      alt="Preview" 
                      className="w-full h-auto rounded-lg object-cover max-h-80 mx-auto"
                      onLoad={() => {
                        if (imageRef.current) {
                          setImageDimensions({
                            width: imageRef.current.clientWidth,
                            height: imageRef.current.clientHeight
                          });
                        }
                      }}
                    />
                    {renderRegions()}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={resetDemo}
                    >
                      Change image
                    </Button>
                  </div>
                ) : (
                  <div 
                    className={`border-2 border-dashed rounded-lg p-10 h-64 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                      isDragging ? 'border-caviscan-blue bg-caviscan-blue/5' : 'border-border'
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-center text-muted-foreground mb-2">
                      Drag & drop an image here, or click to browse
                    </p>
                    <p className="text-center text-sm text-muted-foreground/70">
                      Supports JPG, PNG (max 5MB)
                    </p>
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileInput}
                    />
                  </div>
                )}

                {preview && !result && (
                  <div className="mt-4">
                    <Button 
                      onClick={analyzeImage} 
                      className="btn-primary w-full"
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? 'Analyzing with ML Model...' : 'Analyze Image with ML Model'}
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
                
                {isAnalyzing ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-10">
                    <div className="w-16 h-16 border-4 border-t-caviscan-blue border-caviscan-blue/30 rounded-full animate-spin mb-4"></div>
                    <p className="text-muted-foreground">Processing with our ML model...</p>
                  </div>
                ) : error ? (
                  <div className="flex-1 p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                      <div>
                        <h4 className="font-medium">Error</h4>
                        <p className="text-sm text-muted-foreground">{error}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={resetDemo}
                      variant="outline"
                      className="mt-4"
                    >
                      Try again
                    </Button>
                  </div>
                ) : result ? (
                  <div className="flex-1">
                    <div className={`p-4 rounded-lg mb-6 ${result.hasCavity ? 'bg-red-50' : 'bg-green-50'}`}>
                      <div className="flex items-center">
                        {result.hasCavity ? (
                          <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                        ) : (
                          <Check className="h-6 w-6 text-green-500 mr-3" />
                        )}
                        <div>
                          <h4 className="font-medium">
                            {result.hasCavity ? 'Dental Issues Detected' : 'Healthy Teeth Detected'}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Confidence: {Math.round(result.confidence * 100)}%
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {result.hasCavity && (
                        <div>
                          <h4 className="font-medium mb-2">Recommended Treatment:</h4>
                          <p className="text-muted-foreground">{result.cure}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-medium mb-2">AI-Generated Suggestions:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {result.suggestions && result.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                          ))}
                          {result.hasCavity && result.regions && result.regions.length > 0 && (
                            <li>Areas of concern: {result.regions.length} region(s) identified</li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Disclaimer:</h4>
                        <p className="text-sm text-muted-foreground">
                          Our ML model performs initial detection, while our AI generates detailed recommendations. 
                          This analysis is for informational purposes only and should not be used for actual diagnosis. 
                          Always consult with a qualified dental professional for proper evaluation and treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-10 border border-dashed rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <p className="mb-2">Upload an image and click "Analyze Image with ML Model"</p>
                      <p className="text-sm">Our model will analyze your dental image and provide insights</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Demo;