import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, BookOpen, Brain, ExternalLink, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: "Mainak Majumder",
    role: "Lead Developer",
    image: "/assets/mainak.jpeg",
    bio: "Mainak is the lead developer of CaviScan, specializing in machine learning and front-end development. He oversees the technical aspects of the project, ensuring that the algorithms are efficient and effective.",
    specialization: "AI & Dental Imaging"
  },
  {
    name: "Shibam Mukherjee",
    role: "Student Researcher",
    image: "/assets/shibam.jpeg",
    bio: "Shibam is a student researcher focusing on data collection and preprocessing. He plays a key role in preparing the dataset for training our models.",
    specialization: "Neural Networks"
  },
  {
    name: "Smriti Roy",
    role: "Student Researcher",
    image: "/assets/smriti.jpeg",
    bio: "Smriti is a student researcher with a background in computer vision. She assists in developing the algorithms that power Caviscan's cavity detection.",
    specialization: "Computer Vision"
  }
];

const projectGuide = {
  name: "Prof. Dr. Pabitra Kumar Dey",
  role: "Project Guide & Mentor",
  image: "https://bcrec.ac.in/public/storage/dept_img/hod_image/DZg42fs6vwli4Zbz1zRud5KjvXZ8O9xyzuU1x2RI.jpg",
  bio: "Prof. Dey is a renowned expert in machine learning and its applications in healthcare. He provides guidance and mentorship to the Caviscan team, ensuring that our research aligns with the latest advancements in AI technology.",
  credentials: [
    "Ph.D. in Computer Science, Burdwan University",
    "Associate Professor & HOD of Computer Science, Dr. B.C. Roy Engineering College, MAKAUT.",
    "Researched in Machine Learning and its different sub-domains for over 16 years.",
  ],
  quote: "AI is transforming dental care from reactive to proactive, enabling earlier intervention and better outcomes."
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-caviscan-blue to-caviscan-teal py-12 md:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center text-white/90 mb-6 hover:text-white hover:underline transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>

          <div className="max-w-4xl">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">About Us</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Caviscan</h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl">
              Learn about our mission, team, and the technology behind Caviscan's machine learning approach to dental cavity detection.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Mission Section */}
        <section className="py-12 md:py-20 container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <Badge className="border-caviscan-blue text-caviscan-blue">Our Mission</Badge>
              <h2 className="text-2xl md:text-3xl font-bold">Transforming Dental Diagnosis with AI</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Caviscan was founded with a clear mission: to enhance dental healthcare through the application of cutting-edge machine learning technology. We're dedicated to developing tools that improve diagnostic accuracy, reduce treatment delays, and ultimately lead to better patient outcomes.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                By combining expertise in dentistry, computer vision, and machine learning, we've created a system that can detect dental cavities with unprecedented accuracy, assisting dental professionals in their diagnostic process.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-2xl md:text-4xl font-bold text-caviscan-blue">95%+</div>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">Detection accuracy in clinical trials</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-2xl md:text-4xl font-bold text-caviscan-blue">10,000+</div>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">Dental images in training dataset</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-2xl md:text-4xl font-bold text-caviscan-blue">15+</div>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">Research publications</p>
                  </CardContent>
                </Card>

                <Card className="border-caviscan-blue/20 bg-white/80">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-2xl md:text-4xl font-bold text-caviscan-blue">3</div>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">Years of development</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="bg-gradient-to-br from-caviscan-blue/5 to-caviscan-teal/10 border border-white rounded-2xl shadow-xl p-3 md:p-4">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dental research lab"
                  className="rounded-xl object-cover w-full h-64 md:h-80 lg:h-96"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-8 -left-4 md:-left-8 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-2 md:mb-3">
                  <div className="bg-caviscan-blue/10 rounded-full p-2">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-caviscan-blue" />
                  </div>
                  <span className="font-medium text-sm md:text-base">Award-winning research</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Recognized for innovation in dental diagnostics at the 2024 Medical AI Conference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto opacity-30" />

        {/* Approach Section */}
        <section className="py-12 md:py-20 container mx-auto px-4 sm:px-6" id="approach">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <Badge className="border-caviscan-teal text-caviscan-teal">Our Approach</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 md:mb-6">How Caviscan Works</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Our machine learning approach combines advanced neural networks with dental expertise to achieve highly accurate cavity detection from standard dental images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border border-border hover:border-caviscan-blue hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="bg-caviscan-blue/10 rounded-full p-3 md:p-4 inline-block mb-4 md:mb-6">
                  <Brain className="h-6 w-6 md:h-8 md:w-8 text-caviscan-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Deep Learning Model</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  A custom convolutional neural network trained on thousands of annotated dental images to recognize cavity patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-caviscan-teal hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="bg-caviscan-teal/10 rounded-full p-3 md:p-4 inline-block mb-4 md:mb-6">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-caviscan-teal" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Clinical Validation</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Extensive validation by dental professionals ensures the system's outputs align with clinical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-caviscan-blue hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="bg-caviscan-blue/10 rounded-full p-3 md:p-4 inline-block mb-4 md:mb-6">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-caviscan-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Human-AI Collaboration</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Designed as a diagnostic aid rather than replacement, enhancing dentists' capabilities with AI insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 md:mt-20 bg-gradient-to-r from-caviscan-blue to-caviscan-teal rounded-2xl p-6 md:p-10 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Continuous Improvement</h3>
                <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base">
                  Our model improves with each new image processed, continuously learning from feedback provided by dental professionals.
                </p>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
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
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-xl md:text-3xl mb-1 md:mb-2">V1</div>
                  <p className="text-xs md:text-sm">Initial release<br />87% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-xl md:text-3xl mb-1 md:mb-2">V2</div>
                  <p className="text-xs md:text-sm">Enhanced model<br />92% accuracy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/15 transition-colors">
                  <div className="font-bold text-xl md:text-3xl mb-1 md:mb-2">V3</div>
                  <p className="text-xs md:text-sm">Current version<br />95% accuracy</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/35 transition-colors">
                  <div className="font-bold text-xl md:text-3xl mb-1 md:mb-2">V4</div>
                  <p className="text-xs md:text-sm">In development<br />Target: 97%+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-20 bg-gray-50" id="team">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <Badge className="border-caviscan-blue text-caviscan-blue">Our Team</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 md:mb-6">Meet the Experts Behind Caviscan</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Our interdisciplinary team combines expertise in dentistry, machine learning, and software development.
              </p>
            </div>

            {/* Project Guide Section */}
            <div className="mb-12 md:mb-20">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Project Guide</h3>
              <div className="bg-gradient-to-r from-caviscan-blue/5 to-caviscan-teal/5 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-caviscan-blue/20">
                        <img
                          src={projectGuide.image}
                          alt={projectGuide.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-caviscan-blue text-white rounded-full p-2">
                        <Award className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-xl md:text-2xl font-bold text-caviscan-blue">{projectGuide.name}</h4>
                    <p className="text-caviscan-teal font-medium mb-3 md:mb-4 text-sm md:text-base">{projectGuide.role}</p>
                    <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{projectGuide.bio}</p>

                    <div className="bg-white/60 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                      <p className="italic text-base md:text-lg text-caviscan-blue/80">"{projectGuide.quote}"</p>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2 text-sm md:text-base">Credentials:</h5>
                      <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
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
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Team Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="h-36 sm:h-40 md:h-48 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 md:p-4 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 bg-white">
                    <Badge className="bg-caviscan-blue/10 text-caviscan-blue border-none mb-1 md:mb-2 text-xs">
                      {member.specialization}
                    </Badge>
                    <h4 className="text-base md:text-xl font-semibold">{member.name}</h4>
                    <p className="text-caviscan-teal text-sm md:text-base">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 md:mt-16 text-center">
              <Link to="/team" className="inline-flex items-center text-caviscan-blue font-medium hover:underline text-sm md:text-base">
                Learn more about our team <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-10 md:py-16 bg-caviscan-blue/5">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Want to Join Our Journey?</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/careers" className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-caviscan-blue text-white rounded-lg text-sm md:text-base hover:bg-caviscan-blue/90 transition-colors">
                View Open Positions
              </Link>
              <Link to="/contact" className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 border border-caviscan-blue text-caviscan-blue rounded-lg text-sm md:text-base hover:bg-caviscan-blue/10 transition-colors">
                Contact Us
              </Link>
              <a href="https://github.com/mainak1023/Cavi-Scan" className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded-lg text-sm md:text-base hover:bg-black/90 transition-colors">
                <Github className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" /> View GitHub
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