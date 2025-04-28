
import React from 'react';
import { Globe, Wifi, CreditCard, ShieldCheck, Clock, Zap } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Benefits = () => {
  const { language } = useLanguage();
  const t = translations[language].benefits;

  const icons = [
    <Globe className="h-6 w-6 text-travel-blue" />,
    <Wifi className="h-6 w-6 text-travel-orange" />,
    <CreditCard className="h-6 w-6 text-travel-purple" />,
    <ShieldCheck className="h-6 w-6 text-travel-teal" />,
    <Clock className="h-6 w-6 text-travel-blue" />,
    <Zap className="h-6 w-6 text-travel-orange" />
  ];

  return (
    <section id="benefits" className="section-padding" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-start">
                <div className="p-2 bg-gray-100 rounded-full mr-4">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
