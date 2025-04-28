
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Destinations from '@/components/Destinations';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatbotWrapper from '@/components/ChatbotWrapper';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Destinations />
      <Testimonials />
      <Footer />
      <ChatbotWrapper />
    </div>
  );
};

export default Index;
