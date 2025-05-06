
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
import { MessageSquare, Leaf, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const Index = () => {
  const { language, dir } = useLanguage();
  
  const launchChatbot = () => {
    // @ts-ignore
    if (window.launchChatbot) {
      // @ts-ignore
      window.launchChatbot();
    }
  };

  // Format price with thousands separator
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(Math.round(price));
  };

  // Updated prices with correct calculation: price in USD * 480 conversion rate to DZD
  const prices = {
    france: {
      eco: 0.9 * 480,
      airalo: 1.5 * 480,
      gigsky: 2.2 * 480,
      holafly: 4.0 * 480
    },
    thailand: {
      eco: 2.0 * 480,
      airalo: 2.5 * 480,
      gigsky: 3.3 * 480,
      holafly: 5.7 * 480
    },
    usa: {
      eco: 1.3 * 480,
      airalo: 1.7 * 480,
      gigsky: 2.5 * 480,
      holafly: 4.8 * 480
    },
    italy: {
      eco: 1.1 * 480,
      airalo: 1.8 * 480,
      gigsky: 2.3 * 480,
      holafly: 4.0 * 480
    },
    turkey: {
      eco: 1.3 * 480,
      airalo: 2.0 * 480,
      gigsky: 2.7 * 480,
      holafly: 3.8 * 480
    }
  }

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Destinations />
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-purple-100">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-center">
                  {language === 'ar' ? 'مقارنة مع المنافسين بالدينار الجزائري' : 'Competitor Comparison in Algerian Dinar'}
                </h2>
              </div>
              <div className="mb-4 bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <p className="text-sm text-purple-800">
                    {language === 'ar' 
                      ? 'بطاقات eSIM من ecoESIM تقلل النفايات البلاستيكية بنسبة 100٪ مقارنة بالبطاقات التقليدية'
                      : 'ecoESIM eSIMs reduce plastic waste by 100% compared to traditional SIM cards'}
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto" dir={dir}>
                <Table className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                  <TableHeader>
                    <TableRow className="bg-purple-100">
                      <TableHead className="py-2 px-4">{language === 'ar' ? 'الوجهة' : 'Destination'}</TableHead>
                      <TableHead className="py-2 px-4">
                        <div className="flex items-center gap-1">
                          <Leaf className="h-4 w-4 text-purple-600" />
                          ecoESIM
                        </div>
                      </TableHead>
                      <TableHead className="py-2 px-4">Airalo</TableHead>
                      <TableHead className="py-2 px-4">GigSky</TableHead>
                      <TableHead className="py-2 px-4">Holafly</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b">
                      <TableCell className="py-2 px-4">{language === 'ar' ? 'فرنسا (1GB)' : 'France (1GB)'}</TableCell>
                      <TableCell className="py-2 px-4 font-bold text-purple-600">{formatPrice(prices.france.eco)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.france.airalo)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.france.gigsky)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.france.holafly)} DZD</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell className="py-2 px-4">{language === 'ar' ? 'تايلاند (2GB)' : 'Thailand (2GB)'}</TableCell>
                      <TableCell className="py-2 px-4 font-bold text-purple-600">{formatPrice(prices.thailand.eco)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.thailand.airalo)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.thailand.gigsky)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.thailand.holafly)} DZD</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell className="py-2 px-4">{language === 'ar' ? 'الولايات المتحدة (1GB)' : 'USA (1GB)'}</TableCell>
                      <TableCell className="py-2 px-4 font-bold text-purple-600">{formatPrice(prices.usa.eco)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.usa.airalo)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.usa.gigsky)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.usa.holafly)} DZD</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell className="py-2 px-4">{language === 'ar' ? 'إيطاليا (1GB)' : 'Italy (1GB)'}</TableCell>
                      <TableCell className="py-2 px-4 font-bold text-purple-600">{formatPrice(prices.italy.eco)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.italy.airalo)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.italy.gigsky)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.italy.holafly)} DZD</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell className="py-2 px-4">{language === 'ar' ? 'تركيا (1GB)' : 'Turkey (1GB)'}</TableCell>
                      <TableCell className="py-2 px-4 font-bold text-purple-600">{formatPrice(prices.turkey.eco)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.turkey.airalo)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.turkey.gigsky)} DZD</TableCell>
                      <TableCell className="py-2 px-4">{formatPrice(prices.turkey.holafly)} DZD</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg" dir={dir}>
                <div className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <MessageSquare className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-purple-800">
                      {language === 'ar' ? 'اشترِ eSIM بأسعار حصرية عبر المحادثة!' : 'Buy eSIMs at Exclusive Chat-Only Prices!'}
                    </h3>
                    <p className="text-sm text-purple-700 mt-1">
                      {language === 'ar' 
                        ? 'تحدث مع مساعدنا عبر الدردشة للشراء فورًا والحصول على عروض وخصومات خاصة غير متوفرة عبر موقعنا الإلكتروني. وفر حتى 40٪!'
                        : 'Chat with our assistant to buy instantly and get special deals and discounts not available through our website. Save up to 40%!'}
                    </p>
                    <p className="text-xs text-purple-700 mt-1">
                      {language === 'ar'
                        ? 'كل عملية شراء من خلال المحادثة تساهم في مبادرات الاستدامة البيئية الخاصة بنا'
                        : 'Every purchase through chat contributes to our environmental sustainability initiatives'}
                    </p>
                    <Button 
                      onClick={launchChatbot}
                      size="sm" 
                      className={`mt-2 bg-purple-600 hover:bg-purple-700 ${dir === 'rtl' ? 'flex flex-row-reverse' : ''}`}
                    >
                      <MessageSquare className={`h-4 w-4 ${dir === 'rtl' ? 'mr-0 ml-2' : 'ml-0 mr-2'}`} />
                      {language === 'ar' ? 'اشترِ eSIM الآن' : 'Buy Your eSIM Now'}
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
