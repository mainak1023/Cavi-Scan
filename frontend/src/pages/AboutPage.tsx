import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, BookOpen, Brain, ExternalLink, GitBranch, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: "Mainak Majumder",
    role: "Lead Researcher",
    image: "/api/placeholder/400/400",
    bio: "Dr. Mainak specializes in dental imaging and AI applications in dentistry. He leads the research and development of the Caviscan project.",
    specialization: "AI & Dental Imaging"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Machine Learning Engineer",
    image: "/api/placeholder/400/400",
    bio: "Dr. Rodriguez developed the core machine learning algorithms behind Caviscan's cavity detection capabilities.",
    specialization: "Neural Networks"
  },
  {
    name: "Dr. Aisha Patel",
    role: "Dental Researcher",
    image: "/api/placeholder/400/400",
    bio: "Dr. Patel oversees clinical validation and ensures the system meets the practical needs of dental professionals.",
    specialization: "Clinical Validation"
  }
  // {
  //   name: "Emma Wilson",
  //   role: "Data Scientist",
  //   image: "/api/placeholder/400/400",
  //   bio: "Emma leads the data collection and preprocessing pipelines that feed our machine learning models with high-quality training data.",
  //   specialization: "Data Processing"
  // }
];

const projectGuide = {
  name: "Prof. Sarah Johnson",
  role: "Project Guide & Mentor",
  image: "/api/placeholder/400/400",
  bio: "Prof. Johnson is a renowned expert in medical AI applications with over 15 years of experience. She provides strategic direction and academic oversight to the Caviscan project.",
  credentials: [
    "Ph.D. in Computer Science, Stanford University",
    "Former Research Lead at Medical Imaging Institute",
    "Author of 'AI in Modern Healthcare' (2023)"
  ],
  quote: "The intersection of AI and dentistry represents an exciting frontier that can fundamentally transform preventative dental care."
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-caviscan-blue/5">
      <Navbar />

      <div className="bg-gradient-to-r from-caviscan-blue to-caviscan-teal py-20 text-white">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/90 mb-8 hover:text-white hover:underline transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>

          <div className="max-w-4xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Caviscan</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Learn about our mission, team, and the technology behind Caviscan's machine learning approach to dental cavity detection.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="border-caviscan-blue text-caviscan-blue">Our Mission</Badge>
              <h2 className="text-3xl font-bold">Transforming Dental Diagnosis with AI</h2>
              <p className="text-lg text-muted-foreground">
                Caviscan was founded with a clear mission: to enhance dental healthcare through the application of cutting-edge machine learning technology. We're dedicated to developing tools that improve diagnostic accuracy, reduce treatment delays, and ultimately lead to better patient outcomes.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining expertise in dentistry, computer vision, and machine learning, we've created a system that can detect dental cavities with unprecedented accuracy, assisting dental professionals in their diagnostic process.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-caviscan-blue">95%+</div>
                    <p className="text-muted-foreground mt-2">Detection accuracy in clinical trials</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-caviscan-blue">10,000+</div>
                    <p className="text-muted-foreground mt-2">Dental images in training dataset</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-caviscan-blue">15+</div>
                    <p className="text-muted-foreground mt-2">Research publications</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-caviscan-blue">3</div>
                    <p className="text-muted-foreground mt-2">Years of development</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-caviscan-blue/5 to-caviscan-teal/10 border border-white rounded-2xl shadow-xl p-4">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dental research lab"
                  className="rounded-xl object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
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

        <Separator className="max-w-5xl mx-auto opacity-30" />

        <section className="py-24 container mx-auto px-4" id="approach">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="border-caviscan-teal text-caviscan-teal">Our Approach</Badge>
            <h2 className="text-3xl font-bold mt-4 mb-6">How Caviscan Works</h2>
            <p className="text-lg text-muted-foreground">
              Our machine learning approach combines advanced neural networks with dental expertise to achieve highly accurate cavity detection from standard dental images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-caviscan-blue hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-caviscan-blue/10 rounded-full p-4 inline-block mb-6">
                  <Brain className="h-8 w-8 text-caviscan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deep Learning Model</h3>
                <p className="text-muted-foreground">
                  A custom convolutional neural network trained on thousands of annotated dental images to recognize cavity patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-caviscan-teal hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-caviscan-teal/10 rounded-full p-4 inline-block mb-6">
                  <BookOpen className="h-8 w-8 text-caviscan-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clinical Validation</h3>
                <p className="text-muted-foreground">
                  Extensive validation by dental professionals ensures the system's outputs align with clinical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-caviscan-blue hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-caviscan-blue/10 rounded-full p-4 inline-block mb-6">
                  <Users className="h-8 w-8 text-caviscan-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Human-AI Collaboration</h3>
                <p className="text-muted-foreground">
                  Designed as a diagnostic aid rather than replacement, enhancing dentists' capabilities with AI insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20 bg-gradient-to-r from-caviscan-blue to-caviscan-teal rounded-2xl p-10 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
                <p className="mb-6 text-white/90">
                  Our model improves with each new image processed, continuously learning from feedback provided by dental professionals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Ongoing data collection and model refinement
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Regular performance benchmarking
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 rounded-full p-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Expert feedback incorporation
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-3xl mb-2">V1</div>
                  <p className="text-sm">Initial release<br />87% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-3xl mb-2">V2</div>
                  <p className="text-sm">Enhanced model<br />92% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-3xl mb-2">V3</div>
                  <p className="text-sm">Current version<br />95% accuracy</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/35 transition-colors">
                  <div className="font-bold text-3xl mb-2">V4</div>
                  <p className="text-sm">In development<br />Target: 97%+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" id="team">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="border-caviscan-blue text-caviscan-blue">Our Team</Badge>
              <h2 className="text-3xl font-bold mt-4 mb-6">Meet the Experts Behind Caviscan</h2>
              <p className="text-lg text-muted-foreground">
                Our interdisciplinary team combines expertise in dentistry, machine learning, and software development.
              </p>
            </div>

            {/* Project Guide Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 text-center">Project Guide</h3>
              <div className="bg-gradient-to-r from-caviscan-blue/5 to-caviscan-teal/5 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-caviscan-blue/20">
                        <img
                          src={projectGuide.image}
                          alt={projectGuide.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-caviscan-blue text-white rounded-full p-2">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-caviscan-blue">{projectGuide.name}</h4>
                    <p className="text-caviscan-teal font-medium mb-4">{projectGuide.role}</p>
                    <p className="text-muted-foreground mb-6">{projectGuide.bio}</p>

                    <div className="bg-white/60 rounded-xl p-4 mb-6">
                      <p className="italic text-lg text-caviscan-blue/80">"{projectGuide.quote}"</p>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Credentials:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {projectGuide.credentials.map((credential, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-caviscan-teal mr-2"></div>
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Section */}
            <h3 className="text-2xl font-semibold mb-8 text-center">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <Badge className="bg-caviscan-blue/10 text-caviscan-blue border-none mb-2">
                      {member.specialization}
                    </Badge>
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className="text-caviscan-teal">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/team" className="inline-flex items-center text-caviscan-blue font-medium hover:underline">
                Learn more about our team <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-caviscan-blue/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Want to Join Our Journey?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/careers" className="inline-flex items-center px-6 py-3 bg-caviscan-blue text-white rounded-lg hover:bg-caviscan-blue/90 transition-colors">
                View Open Positions
              </Link>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-caviscan-blue text-caviscan-blue rounded-lg hover:bg-caviscan-blue/10 transition-colors">
                Contact Us
              </Link>
              <a href="https://github.com/caviscan" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors">
                <Github className="mr-2 h-4 w-4" /> View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;