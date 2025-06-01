
import React, { useState } from 'react';
import { Globe, Smartphone, Zap, Map, ArrowDown, Phone, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;
  const [activeStep, setActiveStep] = useState({
    android: 0,
    iphone: 0
  });

  const icons = [
    <Globe className="h-10 w-10 text-travel-blue" />,
    <Smartphone className="h-10 w-10 text-travel-orange" />,
    <Zap className="h-10 w-10 text-travel-purple" />,
    <Map className="h-10 w-10 text-travel-teal" />
  ];

  // eSIM activation steps with images
  const androidSteps = [
    {
      title: language === 'ar' ? 'افتح الإعدادات' : language === 'fr' ? 'Ouvrez Paramètres' : 'Open Settings',
      description: language === 'ar' 
        ? 'انتقل إلى "الإعدادات" على هاتفك الأندرويد' 
        : language === 'fr' 
        ? 'Accédez à "Paramètres" sur votre téléphone Android' 
        : 'Navigate to "Settings" on your Android phone',
      image: '/assets/android-settings.jpg',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    },
    {
      title: language === 'ar' ? 'انتقل إلى الشبكة والإنترنت' : language === 'fr' ? 'Allez à Réseau et Internet' : 'Go to Network & Internet',
      description: language === 'ar' 
        ? 'اضغط على "الشبكة والإنترنت" أو "الاتصالات"' 
        : language === 'fr' 
        ? 'Appuyez sur "Réseau et Internet" ou "Connexions"' 
        : 'Tap on "Network & Internet" or "Connections"',
      image: '/assets/android-network.jpg',
      icon: <Globe className="h-8 w-8 text-travel-blue" />
    },
    {
      title: language === 'ar' ? 'اضغط على بطاقات SIM' : language === 'fr' ? 'Appuyez sur Cartes SIM' : 'Tap on SIM Cards',
      description: language === 'ar' 
        ? 'اختر "بطاقات SIM" أو "إدارة بطاقة SIM"' 
        : language === 'fr' 
        ? 'Sélectionnez "Cartes SIM" ou "Gestion des cartes SIM"' 
        : 'Select "SIM cards" or "SIM card manager"',
      image: '/assets/android-sim-cards.jpg',
      icon: <Phone className="h-8 w-8 text-travel-purple" />
    },
    {
      title: language === 'ar' ? 'أضف خطة البيانات' : language === 'fr' ? 'Ajouter un forfait de données' : 'Add Data Plan',
      description: language === 'ar' 
        ? 'اضغط على "إضافة خطة البيانات" أو "إضافة eSIM"' 
        : language === 'fr' 
        ? 'Appuyez sur "Ajouter un forfait de données" ou "Ajouter une eSIM"' 
        : 'Tap on "Add data plan" or "Add eSIM"',
      image: '/assets/android-add-esim.jpg',
      icon: <Zap className="h-8 w-8 text-travel-teal" />
    },
    {
      title: language === 'ar' ? 'مسح رمز QR' : language === 'fr' ? 'Scanner le code QR' : 'Scan QR Code',
      description: language === 'ar' 
        ? 'امسح رمز QR الخاص بـ ecoESIM أو أدخل الرمز يدويًا' 
        : language === 'fr' 
        ? 'Scannez le code QR ecoESIM ou entrez le code manuellement' 
        : 'Scan the ecoESIM QR code or enter the code manually',
      image: '/assets/android-scan-qr.jpg',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    }
  ];

  const iphoneSteps = [
    {
      title: language === 'ar' ? 'افتح الإعدادات' : language === 'fr' ? 'Ouvrez Paramètres' : 'Open Settings',
      description: language === 'ar' 
        ? 'انتقل إلى تطبيق "الإعدادات" على جهاز iPhone الخاص بك' 
        : language === 'fr' 
        ? 'Accédez à l\'application "Paramètres" sur votre iPhone' 
        : 'Navigate to the "Settings" app on your iPhone',
      image: '/assets/iphone-settings.jpg',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    },
    {
      title: language === 'ar' ? 'اضغط على الجوال' : language === 'fr' ? 'Appuyez sur Cellulaire' : 'Tap on Cellular',
      description: language === 'ar' 
        ? 'اختر "الجوال" أو "البيانات الخلوية"' 
        : language === 'fr' 
        ? 'Sélectionnez "Cellulaire" ou "Données cellulaires"' 
        : 'Select "Cellular" or "Mobile Data"',
      image: '/assets/iphone-cellular.jpg',
      icon: <Phone className="h-8 w-8 text-travel-blue" />
    },
    {
      title: language === 'ar' ? 'إضافة خطة بيانات الجوال' : language === 'fr' ? 'Ajouter un forfait de données' : 'Add Cellular Plan',
      description: language === 'ar' 
        ? 'اضغط على "إضافة خطة بيانات الجوال"' 
        : language === 'fr' 
        ? 'Appuyez sur "Ajouter un forfait de données"' 
        : 'Tap on "Add Cellular Plan"',
      image: '/assets/iphone-add-plan.jpg',
      icon: <Zap className="h-8 w-8 text-travel-purple" />
    },
    {
      title: language === 'ar' ? 'مسح رمز QR' : language === 'fr' ? 'Scanner le code QR' : 'Scan QR Code',
      description: language === 'ar' 
        ? 'امسح رمز QR الخاص بـ ecoESIM أو أدخل الرمز يدويًا' 
        : language === 'fr' 
        ? 'Scannez le code QR ecoESIM ou entrez le code manuellement' 
        : 'Scan the ecoESIM QR code or enter the code manually',
      image: '/assets/iphone-scan-qr.jpg',
      icon: <Globe className="h-8 w-8 text-travel-teal" />
    },
    {
      title: language === 'ar' ? 'تأكيد وتفعيل' : language === 'fr' ? 'Confirmer et activer' : 'Confirm and Activate',
      description: language === 'ar' 
        ? 'انقر على "تأكيد" وانتظر حتى يتم تنشيط eSIM الخاص بك' 
        : language === 'fr' 
        ? 'Appuyez sur "Confirmer" et attendez que votre eSIM soit activée' 
        : 'Tap "Confirm" and wait for your eSIM to be activated',
      image: '/assets/iphone-confirm.jpg',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    }
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

        {/* eSIM Activation Guide with Scrollable Images */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'ar' ? 'كيفية تفعيل بطاقة eSIM الخاصة بك' : 
             language === 'fr' ? 'Comment activer votre eSIM' : 
             'How to Activate Your eSIM'}
          </h3>

          <Tabs defaultValue="android" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="android" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> 
                  {language === 'ar' ? 'أندرويد' : 
                   language === 'fr' ? 'Android' : 
                   'Android'}
                </TabsTrigger>
                <TabsTrigger value="iphone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 
                  {language === 'ar' ? 'آيفون' : 
                   language === 'fr' ? 'iPhone' : 
                   'iPhone'}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Android Tab Content */}
            <TabsContent value="android" className="px-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-center text-travel-orange mb-6">
                  {language === 'ar' ? 'تفعيل eSIM على أندرويد' : 
                   language === 'fr' ? 'Activation de l\'eSIM sur Android' : 
                   'Android eSIM Activation'}
                </h4>
                
                <div className="max-w-4xl mx-auto">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {androidSteps.map((step, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-4">
                            <Card className="border-2 border-travel-orange/20 hover:border-travel-orange/40 transition-colors">
                              <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 rounded-full bg-travel-orange text-white flex items-center justify-center mr-3">
                                    {index + 1}
                                  </div>
                                  <h3 className="text-lg font-semibold text-travel-orange">{step.title}</h3>
                                </div>
                                
                                <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-[9/16] flex items-center justify-center">
                                  <img 
                                    src={step.image} 
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      e.currentTarget.nextElementSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="hidden w-full h-full bg-gradient-to-br from-travel-orange/10 to-travel-orange/20 flex-col items-center justify-center">
                                    {step.icon}
                                    <span className="text-xs text-gray-500 mt-2">Screenshot placeholder</span>
                                  </div>
                                </div>
                                
                                <p className="text-gray-600 text-sm">{step.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  
                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-travel-orange">
                        {language === 'ar' ? 'التقدم' : 
                         language === 'fr' ? 'Progression' : 
                         'Progress'}
                      </span>
                      <span className="text-sm font-medium text-travel-orange">
                        {androidSteps.length} {language === 'ar' ? 'خطوات' : 
                         language === 'fr' ? 'étapes' : 
                         'steps'}
                      </span>
                    </div>
                    <Progress 
                      value={100} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* iPhone Tab Content */}
            <TabsContent value="iphone" className="px-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-center text-travel-blue mb-6">
                  {language === 'ar' ? 'تفعيل eSIM على آيفون' : 
                   language === 'fr' ? 'Activation de l\'eSIM sur iPhone' : 
                   'iPhone eSIM Activation'}
                </h4>

                <div className="max-w-4xl mx-auto">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {iphoneSteps.map((step, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-4">
                            <Card className="border-2 border-travel-blue/20 hover:border-travel-blue/40 transition-colors">
                              <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 rounded-full bg-travel-blue text-white flex items-center justify-center mr-3">
                                    {index + 1}
                                  </div>
                                  <h3 className="text-lg font-semibold text-travel-blue">{step.title}</h3>
                                </div>
                                
                                <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-[9/16] flex items-center justify-center">
                                  <img 
                                    src={step.image} 
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      e.currentTarget.nextElementSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="hidden w-full h-full bg-gradient-to-br from-travel-blue/10 to-travel-blue/20 flex-col items-center justify-center">
                                    {step.icon}
                                    <span className="text-xs text-gray-500 mt-2">Screenshot placeholder</span>
                                  </div>
                                </div>
                                
                                <p className="text-gray-600 text-sm">{step.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  
                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-travel-blue">
                        {language === 'ar' ? 'التقدم' : 
                         language === 'fr' ? 'Progression' : 
                         'Progress'}
                      </span>
                      <span className="text-sm font-medium text-travel-blue">
                        {iphoneSteps.length} {language === 'ar' ? 'خطوات' : 
                         language === 'fr' ? 'étapes' : 
                         'steps'}
                      </span>
                    </div>
                    <Progress 
                      value={100} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
