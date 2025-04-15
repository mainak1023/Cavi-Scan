
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, FileText, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <section className="bg-caviscan-gray py-20" id="documentation">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Documentation</h2>
          <p className="text-lg text-muted-foreground">
            Explore our extensive documentation covering everything from technical details to implementation guides.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="guides">Usage Guides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-6">
                    <BookOpen className="h-8 w-8 text-caviscan-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                      <p className="text-muted-foreground mb-4">
                        Caviscan is a machine learning approach to detect dental cavities from images, providing dentists with an AI-powered tool to enhance diagnostic capabilities.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Introduction to dental cavity detection using ML</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Project goals and clinical applications</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Research methodology and validation</p>
                        </div>
                      </div>
                      
                      <Link to="/documentation">
                        <Button variant="link" className="px-0 mt-4 text-caviscan-blue">
                          Read full overview <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technical">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-6">
                    <Code className="h-8 w-8 text-caviscan-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Technical Documentation</h3>
                      <p className="text-muted-foreground mb-4">
                        Explore the technical architecture, machine learning models, and implementation details that power the Caviscan platform.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-teal rounded-full mr-2"></div>
                          <p>Neural network architecture and training methodology</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-teal rounded-full mr-2"></div>
                          <p>Data preprocessing and augmentation techniques</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-teal rounded-full mr-2"></div>
                          <p>Model performance metrics and validation</p>
                        </div>
                      </div>
                      
                      <Link to="/documentation#technical">
                        <Button variant="link" className="px-0 mt-4 text-caviscan-teal">
                          Explore technical docs <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="guides">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-6">
                    <FileText className="h-8 w-8 text-caviscan-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Implementation Guides</h3>
                      <p className="text-muted-foreground mb-4">
                        Step-by-step guides for integrating and utilizing the Caviscan technology in dental practice.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Setting up the Caviscan system</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Image acquisition and processing guidelines</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-caviscan-blue rounded-full mr-2"></div>
                          <p>Interpreting AI-generated results</p>
                        </div>
                      </div>
                      
                      <Link to="/documentation#usage">
                        <Button variant="link" className="px-0 mt-4 text-caviscan-blue">
                          View usage guides <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 flex justify-center">
            <Link to="/documentation">
              <Button className="btn-primary">
                Browse Full Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
