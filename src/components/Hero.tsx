
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Leaf, Recycle } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background image without overlay */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')" }}></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-purple-600/30 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 border border-purple-400/30">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-purple-300" />
              <span className="text-purple-100">Eco-Friendly Travel Connectivity</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {language === 'ar' ? 'ابق متصلاً حول العالم مع تقنية ecoESIM' : 'Stay Connected Worldwide with ecoESIM Technology'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {language === 'ar' ? 'اتصال بيانات فوري في أكثر من 190 دولة. لا حاجة لبطاقة SIM فعلية. صديق للبيئة 100٪.' : 'Instant data connectivity in over 190+ countries. No physical SIM card needed. 100% eco-friendly.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-800 px-8 py-6 rounded-full text-lg"
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
          
          <div className="mt-6 flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            <Recycle className="h-6 w-6 text-purple-300 flex-shrink-0" />
            <p className="text-sm text-purple-100">
              {language === 'ar' 
                ? 'لقد ساعدنا في توفير أكثر من 500 كجم من نفايات البلاستيك هذا العام من خلال eSIMs الخاصة بنا'
                : 'We\'ve helped save over 500kg of plastic waste this year through our eSIMs'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
