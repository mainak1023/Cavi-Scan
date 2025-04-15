
import React from 'react';
import { Brain, Search, Database, Workflow, Zap, LineChart } from 'lucide-react';
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-caviscan-blue" />,
    title: "AI-Powered Detection",
    description: "Utilizes deep learning neural networks to identify cavity patterns invisible to the human eye."
  },
  {
    icon: <Search className="h-8 w-8 text-caviscan-blue" />,
    title: "High Precision Analysis",
    description: "Achieve over 95% accuracy in cavity detection from standard dental images."
  },
  {
    icon: <Database className="h-8 w-8 text-caviscan-blue" />,
    title: "Comprehensive Dataset",
    description: "Trained on thousands of dental images covering diverse cavity types and presentations."
  },
  {
    icon: <Workflow className="h-8 w-8 text-caviscan-teal" />,
    title: "Streamlined Workflow",
    description: "Integrates easily into existing dental practice management software systems."
  },
  {
    icon: <Zap className="h-8 w-8 text-caviscan-teal" />,
    title: "Real-time Processing",
    description: "Process and analyze dental images in seconds for immediate clinical insights."
  },
  {
    icon: <LineChart className="h-8 w-8 text-caviscan-teal" />,
    title: "Progression Tracking",
    description: "Monitor cavity development over time with comparative analysis features."
  }
];

const Features = () => {
  return (
    <section className="section-container" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Machine Learning for Dental Diagnosis</h2>
        <p className="text-lg text-muted-foreground">
          Our state-of-the-art technology transforms dental imaging with intelligent cavity detection and analysis.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="p-6 border border-border hover:border-caviscan-blue/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 bg-caviscan-gray inline-block p-3 rounded-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
