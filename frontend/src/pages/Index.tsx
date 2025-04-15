
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Documentation from '@/components/Documentation';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Documentation />
        <Demo />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
