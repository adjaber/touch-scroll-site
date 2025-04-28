
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const launchChatbot = () => {
    // @ts-ignore
    if (window.launchChatbot) {
      // @ts-ignore
      window.launchChatbot();
    } else {
      // Fallback - try to find and click the typebot button
      const typebotButton = document.querySelector('typebot-bubble')?.shadowRoot?.querySelector('button');
      if (typebotButton) {
        typebotButton.click();
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {language === 'ar' ? 'ابق متصلاً حول العالم مع تقنية eSIM' : 'Stay Connected Worldwide with eSIM Technology'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {language === 'ar' ? 'اتصال بيانات فوري في أكثر من 190 دولة. لا حاجة لبطاقة SIM فعلية.' : 'Instant data connectivity in over 190+ countries. No physical SIM card needed.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-travel-blue hover:bg-travel-blue/90 text-white px-8 py-6 rounded-full text-lg"
              onClick={launchChatbot}
            >
              {language === 'ar' ? 'احصل على eSIM الآن' : 'Get Your eSIM Now'}
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full text-lg"
              onClick={() => scrollToSection('how-it-works')}
            >
              {language === 'ar' ? 'تعلم كيف يعمل' : 'Learn How It Works'}
            </Button>
          </div>

          <div className="mt-12 flex items-center">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/62.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <p className="ml-4 text-gray-200">
              <span className="font-bold">2,000+</span> {language === 'ar' ? 'مسافر متصل هذا الشهر' : 'travelers connected this month'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
