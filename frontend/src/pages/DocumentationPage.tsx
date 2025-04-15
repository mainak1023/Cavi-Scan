
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, FileText, Code, BookOpen, Microscope, Beaker, BookOpen as BookOpenIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-caviscan-blue/10 py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-caviscan-blue mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive guides for understanding, implementing, and using the Caviscan machine learning technology for dental cavity detection.
          </p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <nav className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Getting Started</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#overview" className="text-caviscan-blue hover:underline">Project Overview</a>
                    </li>
                    <li>
                      <a href="#installation" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Installation Guide</a>
                    </li>
                    <li>
                      <a href="#quickstart" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Quick Start</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Technical Documentation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#technical" className="text-muted-foreground hover:text-caviscan-blue transition-colors">ML Architecture</a>
                    </li>
                    <li>
                      <a href="#dataset" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Dataset Information</a>
                    </li>
                    <li>
                      <a href="#training" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Model Training</a>
                    </li>
                    <li>
                      <a href="#evaluation" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Performance Evaluation</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">User Guide</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#usage" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Basic Usage</a>
                    </li>
                    <li>
                      <a href="#integration" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Integration Guide</a>
                    </li>
                    <li>
                      <a href="#api" className="text-muted-foreground hover:text-caviscan-blue transition-colors">API Reference</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Research</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#research" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Publications</a>
                    </li>
                    <li>
                      <a href="#methodology" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Methodology</a>
                    </li>
                    <li>
                      <a href="#future" className="text-muted-foreground hover:text-caviscan-blue transition-colors">Future Work</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-12">
                  <section id="overview" className="space-y-6">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-caviscan-blue" />
                      <h2 className="text-2xl font-bold">Project Overview</h2>
                    </div>
                    <p>
                      Caviscan is a machine learning approach to detect dental cavities from standard dental images. 
                      The project addresses the need for automated, accurate, and early detection of dental caries to 
                      improve patient outcomes and optimize dental professionals' workflow.
                    </p>
                    <p>
                      Using convolutional neural networks (CNNs) and advanced image processing techniques, Caviscan 
                      provides highly accurate identification of cavity formations that might be missed during routine 
                      visual examinations.
                    </p>
                    
                    <div className="bg-caviscan-gray p-6 rounded-lg">
                      <h3 className="font-semibold text-xl mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-caviscan-blue/20 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-caviscan-blue rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium">High Detection Accuracy</span>
                            <p className="text-muted-foreground mt-1">
                              Achieves over 95% accuracy in detecting dental cavities from standard dental images.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-caviscan-blue/20 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-caviscan-blue rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium">Early Detection</span>
                            <p className="text-muted-foreground mt-1">
                              Identifies early-stage cavities that might be missed in visual examination.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-caviscan-blue/20 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-caviscan-blue rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium">Integration Capabilities</span>
                            <p className="text-muted-foreground mt-1">
                              Easily integrates with existing dental imaging systems and workflows.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-caviscan-blue/20 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-caviscan-blue rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium">Clinical Decision Support</span>
                            <p className="text-muted-foreground mt-1">
                              Provides dentists with AI-assisted diagnostic insights.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <h3 className="font-semibold text-xl mt-8">Project Background</h3>
                    <p>
                      Dental caries (cavities) affect billions of people worldwide and are among the most common 
                      chronic diseases. Early detection and intervention are crucial for preventing progression, 
                      reducing treatment costs, and preserving dental health.
                    </p>
                    <p>
                      The Caviscan project was initiated in 2022 as a collaborative effort between dental researchers 
                      and machine learning specialists to develop an AI-powered solution for improving cavity detection 
                      accuracy and efficiency.
                    </p>
                    
                    <h3 className="font-semibold text-xl mt-8">Clinical Significance</h3>
                    <p>
                      By augmenting clinical decision-making with AI insights, Caviscan helps dental professionals:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-4 text-muted-foreground">
                      <li>Identify cavities at earlier stages when treatment is less invasive and more effective</li>
                      <li>Reduce the risk of missed diagnoses</li>
                      <li>Improve treatment planning and patient communication</li>
                      <li>Create objective documentation of cavity presence and progression</li>
                    </ul>
                  </section>
                  
                  <Separator />
                  
                  <section id="installation" className="space-y-6">
                    <h2 className="text-2xl font-bold">Installation Guide</h2>
                    <p>Detailed installation instructions for the Caviscan system...</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                      # Example installation commands would go here
                      pip install caviscan
                    </div>
                  </section>
                  
                  <Separator />
                  
                  <section id="quickstart" className="space-y-6">
                    <h2 className="text-2xl font-bold">Quick Start</h2>
                    <p>Get up and running with Caviscan in minutes...</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                      # Example quickstart code would go here
                      from caviscan import CavityScan
                      
                      # Initialize scanner
                      scanner = CavityScan()
                      
                      # Process an image
                      results = scanner.analyze("dental_image.jpg")
                      print(results)
                    </div>
                  </section>
                </div>
              </TabsContent>
              
              <TabsContent value="technical">
                <section id="technical" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-caviscan-teal" />
                    <h2 className="text-2xl font-bold">Technical Documentation</h2>
                  </div>
                  <p>
                    This section provides detailed technical information about the machine learning architecture, 
                    training methodology, and implementation details of the Caviscan system.
                  </p>
                  
                  <h3 className="font-semibold text-xl mt-8">Neural Network Architecture</h3>
                  <p>
                    Caviscan uses a modified U-Net architecture with attention mechanisms for cavity segmentation, 
                    coupled with a classification head for determining cavity presence and severity.
                  </p>
                  <div className="bg-caviscan-gray p-6 rounded-lg mt-4">
                    <h4 className="font-medium mb-3">Model Architecture Details</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Encoder: ResNet-50 backbone pretrained on ImageNet</li>
                      <li>• Decoder: Feature pyramid with skip connections</li>
                      <li>• Resolution: 512×512 pixels input size</li>
                      <li>• Output: Segmentation mask + cavity classification score</li>
                    </ul>
                  </div>
                  
                  {/* More technical content would go here */}
                </section>
              </TabsContent>
              
              <TabsContent value="usage">
                <section id="usage" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-caviscan-blue" />
                    <h2 className="text-2xl font-bold">Usage Guide</h2>
                  </div>
                  <p>
                    This section provides comprehensive guidance on using the Caviscan system in clinical practice, 
                    from image acquisition to result interpretation.
                  </p>
                  
                  <h3 className="font-semibold text-xl mt-8">Basic Usage</h3>
                  <p>
                    Learn how to use the Caviscan system for analyzing dental images and interpreting results.
                  </p>
                  
                  {/* Usage guide content would go here */}
                </section>
              </TabsContent>
              
              <TabsContent value="research">
                <section id="research" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Microscope className="h-6 w-6 text-caviscan-teal" />
                    <h2 className="text-2xl font-bold">Research Publications</h2>
                  </div>
                  <p>
                    Explore the academic publications and research papers related to the Caviscan project and its 
                    underlying machine learning approaches.
                  </p>
                  
                  {/* Research papers content would go here */}
                </section>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentationPage;
