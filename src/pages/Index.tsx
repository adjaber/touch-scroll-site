
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Destinations from '@/components/Destinations';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatbotWrapper from '@/components/ChatbotWrapper';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { language } = useLanguage();
  
  const launchChatbot = () => {
    // @ts-ignore
    if (window.launchChatbot) {
      // @ts-ignore
      window.launchChatbot();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Destinations />
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-green-600" />
                <h2 className="text-2xl font-bold text-center">
                  {language === 'ar' ? 'مقارنة الأسعار' : 'Price Comparison'}
                </h2>
              </div>
              <div className="mb-4 bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-800">
                    {language === 'ar' 
                      ? 'بطاقات eSIM من ecoESIM تقلل النفايات البلاستيكية بنسبة 100٪ مقارنة بالبطاقات التقليدية'
                      : 'ecoESIM eSIMs reduce plastic waste by 100% compared to traditional SIM cards'}
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 text-left">{language === 'ar' ? 'الوجهة' : 'Destination'}</th>
                      <th className="py-2 px-4 text-left">
                        <div className="flex items-center gap-1">
                          <Leaf className="h-4 w-4 text-green-600" />
                          ecoESIM
                        </div>
                      </th>
                      <th className="py-2 px-4 text-left">Airalo</th>
                      <th className="py-2 px-4 text-left">GigSky</th>
                      <th className="py-2 px-4 text-left">Holafly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">{language === 'ar' ? 'فرنسا (1GB)' : 'France (1GB)'}</td>
                      <td className="py-2 px-4 font-bold text-travel-blue">$2.99</td>
                      <td className="py-2 px-4">$9.98</td>
                      <td className="py-2 px-4">$11.98</td>
                      <td className="py-2 px-4">$11.98</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">{language === 'ar' ? 'تايلاند (2GB)' : 'Thailand (2GB)'}</td>
                      <td className="py-2 px-4 font-bold text-travel-blue">$5.99</td>
                      <td className="py-2 px-4">$17.98</td>
                      <td className="py-2 px-4">$15.98</td>
                      <td className="py-2 px-4">$19.98</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">{language === 'ar' ? 'الولايات المتحدة (1GB)' : 'USA (1GB)'}</td>
                      <td className="py-2 px-4 font-bold text-travel-blue">$3.99</td>
                      <td className="py-2 px-4">$9.00</td>
                      <td className="py-2 px-4">$11.98</td>
                      <td className="py-2 px-4">$13.98</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-green-800">
                      {language === 'ar' ? 'أسعار حصرية عبر المحادثة!' : 'Exclusive Chat-Only Prices!'}
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      {language === 'ar' 
                        ? 'تحدث مع مساعدنا عبر الدردشة للحصول على عروض وخصومات خاصة غير متوفرة عبر موقعنا الإلكتروني. تصل إلى خصم 15%!'
                        : 'Chat with our assistant for special deals and discounts not available through our website. Up to 15% off!'}
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      {language === 'ar'
                        ? 'كل عملية شراء من خلال المحادثة تساهم في مبادرات الاستدامة البيئية الخاصة بنا'
                        : 'Every purchase through chat contributes to our environmental sustainability initiatives'}
                    </p>
                    <Button 
                      onClick={launchChatbot}
                      size="sm" 
                      className="mt-2 bg-green-600 hover:bg-green-700"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      {language === 'ar' ? 'احصل على سعر خاص الآن' : 'Get Your Special Price Now'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
      <ChatbotWrapper />
    </div>
  );
};

export default Index;
