
import React from 'react';
import { Globe, Smartphone, Zap, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  const icons = [
    <Globe className="h-10 w-10 text-travel-blue" />,
    <Smartphone className="h-10 w-10 text-travel-orange" />,
    <Zap className="h-10 w-10 text-travel-purple" />,
    <Map className="h-10 w-10 text-travel-teal" />
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => (
            <Card key={index} className="card-hover border-none">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-gray-100 rounded-full">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
