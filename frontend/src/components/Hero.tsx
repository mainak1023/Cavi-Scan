
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Search, Microscope } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-caviscan-gray to-white pt-20 overflow-hidden">
      {/* Blob decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-caviscan-light-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-caviscan-teal/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
          <div className="inline-flex items-center bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-caviscan-blue/20 text-sm font-medium text-caviscan-blue">
            <span className="bg-caviscan-blue/10 rounded-full p-1 mr-2">
              <Brain className="w-4 h-4 text-caviscan-blue" />
            </span>
            AI-Powered Dental Technology
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">Detect Dental Cavities</span> with Machine Learning
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            Cavi-Scan uses advanced machine learning algorithms to identify and analyze dental cavities from images with high precision and accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="btn-primary"
              onClick={() => {
                const demoSection = document.getElementById('demo');
                demoSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Try Cavi-Scan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="btn-outline">
              Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="flex items-start space-x-3">
              <div className="bg-caviscan-blue/10 rounded-lg p-2">
                <Search className="w-5 h-5 text-caviscan-blue" />
              </div>
              <div>
                <h4 className="font-medium">High Accuracy</h4>
                <p className="text-sm text-muted-foreground">Precision detection of cavity formations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-caviscan-teal/10 rounded-lg p-2">
                <Microscope className="w-5 h-5 text-caviscan-teal" />
              </div>
              <div>
                <h4 className="font-medium">Advanced Analysis</h4>
                <p className="text-sm text-muted-foreground">Detailed cavity classification</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Hero image placeholder - in production, replace with an actual dental scan image */}
            <div className="bg-gradient-to-br from-caviscan-blue/5 to-caviscan-teal/10 border border-white rounded-2xl shadow-lg p-4">
              <div className="bg-white/80 backdrop-blur rounded-xl overflow-hidden">
                <div className="bg-caviscan-gray h-6 flex items-center px-3 space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="p-4 aspect-[4/3] bg-white relative">
                  {/* Placeholder for cavity detection visualization */}
                  <div className="w-full h-full bg-gradient-to-br from-caviscan-gray/50 to-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-mono text-xs bg-caviscan-blue/10 py-1 px-3 rounded text-caviscan-blue inline-block mb-3">
                        CAVITY DETECTION IN PROGRESS
                      </div>
                      <div className="w-48 h-48 border-4 border-dashed border-caviscan-blue/30 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-36 h-36 bg-gradient-to-br from-caviscan-blue/20 to-caviscan-teal/20 rounded-full flex items-center justify-center relative">
                          <div className="absolute w-full h-full rounded-full animate-ping bg-caviscan-blue/10"></div>
                          <div className="w-6 h-6 bg-caviscan-blue rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
