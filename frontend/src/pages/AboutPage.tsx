
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, BookOpen, Brain } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Researcher",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    bio: "Dr. Chen specializes in dental imaging and AI applications in dentistry. She leads the research and development of the Caviscan project."
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Machine Learning Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Dr. Rodriguez developed the core machine learning algorithms behind Caviscan's cavity detection capabilities."
  },
  {
    name: "Dr. Aisha Patel",
    role: "Dental Researcher",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    bio: "Dr. Patel oversees clinical validation and ensures the system meets the practical needs of dental professionals."
  },
  {
    name: "Dr. James Wilson",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    bio: "Dr. Wilson specializes in medical image processing and leads the data preparation and augmentation efforts."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-caviscan-blue/10 py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-caviscan-blue mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Caviscan</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn about our mission, team, and the technology behind Caviscan's machine learning approach to dental cavity detection.
          </p>
        </div>
      </div>
      
      <main className="flex-grow">
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-caviscan-blue/10 px-3 py-1 rounded-full border border-caviscan-blue/20 text-sm font-medium text-caviscan-blue">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold">Transforming Dental Diagnosis with AI</h2>
              <p className="text-lg text-muted-foreground">
                Caviscan was founded with a clear mission: to enhance dental healthcare through the application of cutting-edge machine learning technology. We're dedicated to developing tools that improve diagnostic accuracy, reduce treatment delays, and ultimately lead to better patient outcomes.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining expertise in dentistry, computer vision, and machine learning, we've created a system that can detect dental cavities with unprecedented accuracy, assisting dental professionals in their diagnostic process.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold text-caviscan-blue">95%+</div>
                  <p className="text-muted-foreground mt-2">Detection accuracy in clinical trials</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-caviscan-blue">10,000+</div>
                  <p className="text-muted-foreground mt-2">Dental images in training dataset</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-caviscan-blue">15+</div>
                  <p className="text-muted-foreground mt-2">Research publications</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-caviscan-blue">3</div>
                  <p className="text-muted-foreground mt-2">Years of development</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-caviscan-blue/5 to-caviscan-teal/10 border border-white rounded-2xl shadow-lg p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Dental research lab" 
                  className="rounded-xl object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-caviscan-blue/10 rounded-full p-2">
                    <Award className="w-5 h-5 text-caviscan-blue" />
                  </div>
                  <span className="font-medium">Award-winning research</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recognized for innovation in dental diagnostics at the 2024 Medical AI Conference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-5xl mx-auto" />
        
        <section className="py-16 container mx-auto px-4" id="approach">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-caviscan-teal/10 px-3 py-1 rounded-full border border-caviscan-teal/20 text-sm font-medium text-caviscan-teal mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-4">How Caviscan Works</h2>
            <p className="text-lg text-muted-foreground">
              Our machine learning approach combines advanced neural networks with dental expertise to achieve highly accurate cavity detection from standard dental images.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-caviscan-blue/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-caviscan-blue/10 rounded-lg p-3 inline-block mb-4">
                  <Brain className="h-6 w-6 text-caviscan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Learning Model</h3>
                <p className="text-muted-foreground">
                  A custom convolutional neural network trained on thousands of annotated dental images to recognize cavity patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border hover:border-caviscan-blue/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-caviscan-teal/10 rounded-lg p-3 inline-block mb-4">
                  <BookOpen className="h-6 w-6 text-caviscan-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clinical Validation</h3>
                <p className="text-muted-foreground">
                  Extensive validation by dental professionals ensures the system's outputs align with clinical expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border hover:border-caviscan-blue/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-caviscan-blue/10 rounded-lg p-3 inline-block mb-4">
                  <Users className="h-6 w-6 text-caviscan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human-AI Collaboration</h3>
                <p className="text-muted-foreground">
                  Designed as a diagnostic aid rather than replacement, enhancing dentists' capabilities with AI insights.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-caviscan-blue to-caviscan-teal rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
                <p className="mb-4">
                  Our model improves with each new image processed, continuously learning from feedback provided by dental professionals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Ongoing data collection and model refinement
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Regular performance benchmarking
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Expert feedback incorporation
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold text-3xl mb-2">V1</div>
                  <p className="text-sm">Initial release<br />87% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold text-3xl mb-2">V2</div>
                  <p className="text-sm">Enhanced model<br />92% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold text-3xl mb-2">V3</div>
                  <p className="text-sm">Current version<br />95% accuracy</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="font-bold text-3xl mb-2">V4</div>
                  <p className="text-sm">In development<br />Target: 97%+</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-caviscan-gray" id="team">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-caviscan-blue/10 px-3 py-1 rounded-full border border-caviscan-blue/20 text-sm font-medium text-caviscan-blue mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-bold mb-4">Meet the Experts Behind Caviscan</h2>
              <p className="text-lg text-muted-foreground">
                Our interdisciplinary team combines expertise in dentistry, machine learning, and software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-caviscan-blue/10">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-caviscan-blue font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
