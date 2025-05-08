
import React, { useState } from 'react';
import { Globe, Smartphone, Zap, Map, ArrowDown, Phone } from "lucide-react";
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

  // eSIM activation steps
  const androidSteps = [
    {
      title: language === 'ar' ? 'افتح الإعدادات' : language === 'fr' ? 'Ouvrez Paramètres' : 'Open Settings',
      description: language === 'ar' 
        ? 'انتقل إلى "الإعدادات" على هاتفك الأندرويد' 
        : language === 'fr' 
        ? 'Accédez à "Paramètres" sur votre téléphone Android' 
        : 'Navigate to "Settings" on your Android phone',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    },
    {
      title: language === 'ar' ? 'انتقل إلى الشبكة والإنترنت' : language === 'fr' ? 'Allez à Réseau et Internet' : 'Go to Network & Internet',
      description: language === 'ar' 
        ? 'اضغط على "الشبكة والإنترنت" أو "الاتصالات"' 
        : language === 'fr' 
        ? 'Appuyez sur "Réseau et Internet" ou "Connexions"' 
        : 'Tap on "Network & Internet" or "Connections"',
      icon: <Globe className="h-8 w-8 text-travel-blue" />
    },
    {
      title: language === 'ar' ? 'اضغط على بطاقات SIM' : language === 'fr' ? 'Appuyez sur Cartes SIM' : 'Tap on SIM Cards',
      description: language === 'ar' 
        ? 'اختر "بطاقات SIM" أو "إدارة بطاقة SIM"' 
        : language === 'fr' 
        ? 'Sélectionnez "Cartes SIM" ou "Gestion des cartes SIM"' 
        : 'Select "SIM cards" or "SIM card manager"',
      icon: <Phone className="h-8 w-8 text-travel-purple" />
    },
    {
      title: language === 'ar' ? 'أضف خطة البيانات' : language === 'fr' ? 'Ajouter un forfait de données' : 'Add Data Plan',
      description: language === 'ar' 
        ? 'اضغط على "إضافة خطة البيانات" أو "إضافة eSIM"' 
        : language === 'fr' 
        ? 'Appuyez sur "Ajouter un forfait de données" ou "Ajouter une eSIM"' 
        : 'Tap on "Add data plan" or "Add eSIM"',
      icon: <Zap className="h-8 w-8 text-travel-teal" />
    },
    {
      title: language === 'ar' ? 'مسح رمز QR' : language === 'fr' ? 'Scanner le code QR' : 'Scan QR Code',
      description: language === 'ar' 
        ? 'امسح رمز QR الخاص بـ ecoESIM أو أدخل الرمز يدويًا' 
        : language === 'fr' 
        ? 'Scannez le code QR ecoESIM ou entrez le code manuellement' 
        : 'Scan the ecoESIM QR code or enter the code manually',
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
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    },
    {
      title: language === 'ar' ? 'اضغط على الجوال' : language === 'fr' ? 'Appuyez sur Cellulaire' : 'Tap on Cellular',
      description: language === 'ar' 
        ? 'اختر "الجوال" أو "البيانات الخلوية"' 
        : language === 'fr' 
        ? 'Sélectionnez "Cellulaire" ou "Données cellulaires"' 
        : 'Select "Cellular" or "Mobile Data"',
      icon: <Phone className="h-8 w-8 text-travel-blue" />
    },
    {
      title: language === 'ar' ? 'إضافة خطة بيانات الجوال' : language === 'fr' ? 'Ajouter un forfait de données' : 'Add Cellular Plan',
      description: language === 'ar' 
        ? 'اضغط على "إضافة خطة بيانات الجوال"' 
        : language === 'fr' 
        ? 'Appuyez sur "Ajouter un forfait de données"' 
        : 'Tap on "Add Cellular Plan"',
      icon: <Zap className="h-8 w-8 text-travel-purple" />
    },
    {
      title: language === 'ar' ? 'مسح رمز QR' : language === 'fr' ? 'Scanner le code QR' : 'Scan QR Code',
      description: language === 'ar' 
        ? 'امسح رمز QR الخاص بـ ecoESIM أو أدخل الرمز يدويًا' 
        : language === 'fr' 
        ? 'Scannez le code QR ecoESIM ou entrez le code manuellement' 
        : 'Scan the ecoESIM QR code or enter the code manually',
      icon: <Globe className="h-8 w-8 text-travel-teal" />
    },
    {
      title: language === 'ar' ? 'تأكيد وتفعيل' : language === 'fr' ? 'Confirmer et activer' : 'Confirm and Activate',
      description: language === 'ar' 
        ? 'انقر على "تأكيد" وانتظر حتى يتم تنشيط eSIM الخاص بك' 
        : language === 'fr' 
        ? 'Appuyez sur "Confirmer" et attendez que votre eSIM soit activée' 
        : 'Tap "Confirm" and wait for your eSIM to be activated',
      icon: <Smartphone className="h-8 w-8 text-travel-orange" />
    }
  ];

  const handleStepChange = (device, direction) => {
    if (device === 'android') {
      if (direction === 'next' && activeStep.android < androidSteps.length - 1) {
        setActiveStep({...activeStep, android: activeStep.android + 1});
      } else if (direction === 'prev' && activeStep.android > 0) {
        setActiveStep({...activeStep, android: activeStep.android - 1});
      }
    } else {
      if (direction === 'next' && activeStep.iphone < iphoneSteps.length - 1) {
        setActiveStep({...activeStep, iphone: activeStep.iphone + 1});
      } else if (direction === 'prev' && activeStep.iphone > 0) {
        setActiveStep({...activeStep, iphone: activeStep.iphone - 1});
      }
    }
  };

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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'ar' ? 'كيفية تفعيل بطاقة eSIM الخاصة بك' : 
             language === 'fr' ? 'Comment activer votre eSIM' : 
             'How to Activate Your eSIM'}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Android Activation Guide */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-6 w-6 text-travel-orange" />
                <h4 className="text-xl font-bold">
                  {language === 'ar' ? 'أجهزة Android' : 
                   language === 'fr' ? 'Appareils Android' : 
                   'Android Devices'}
                </h4>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="android-steps">
                  <AccordionTrigger className="text-travel-orange hover:text-travel-orange">
                    {language === 'ar' ? 'عرض الخطوات التفصيلية' : 
                     language === 'fr' ? 'Voir les étapes détaillées' : 
                     'View Detailed Steps'}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-2 mb-4">
                      <Progress value={(activeStep.android / (androidSteps.length - 1)) * 100} className="h-2 bg-gray-200" />
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>{language === 'ar' ? 'البداية' : language === 'fr' ? 'Début' : 'Start'}</span>
                        <span>{language === 'ar' ? 'النهاية' : language === 'fr' ? 'Fin' : 'End'}</span>
                      </div>
                    </div>

                    <div className="py-4 min-h-[200px]">
                      <div className="flex items-center gap-4 mb-4">
                        {androidSteps[activeStep.android].icon}
                        <h5 className="font-bold">{androidSteps[activeStep.android].title}</h5>
                      </div>
                      <div className="mb-4">
                        <p className="text-gray-600 ml-12">{androidSteps[activeStep.android].description}</p>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleStepChange('android', 'prev')} 
                        disabled={activeStep.android === 0}
                        className={language === 'ar' ? 'flex flex-row-reverse' : ''}
                      >
                        <ArrowDown className={`h-4 w-4 rotate-90 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                        {language === 'ar' ? 'السابق' : 
                         language === 'fr' ? 'Précédent' : 
                         'Previous'}
                      </Button>
                      <Button 
                        size="sm"
                        variant={activeStep.android === androidSteps.length - 1 ? "outline" : "default"}
                        onClick={() => handleStepChange('android', 'next')} 
                        disabled={activeStep.android === androidSteps.length - 1}
                        className={`bg-travel-orange hover:bg-travel-orange/90 ${language === 'ar' ? 'flex flex-row-reverse' : ''}`}
                      >
                        {language === 'ar' ? 'التالي' : 
                         language === 'fr' ? 'Suivant' : 
                         'Next'}
                        <ArrowDown className={`h-4 w-4 -rotate-90 ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* iPhone Activation Guide */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-travel-blue" />
                <h4 className="text-xl font-bold">
                  {language === 'ar' ? 'أجهزة iPhone' : 
                   language === 'fr' ? 'Appareils iPhone' : 
                   'iPhone Devices'}
                </h4>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="iphone-steps">
                  <AccordionTrigger className="text-travel-blue hover:text-travel-blue">
                    {language === 'ar' ? 'عرض الخطوات التفصيلية' : 
                     language === 'fr' ? 'Voir les étapes détaillées' : 
                     'View Detailed Steps'}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-2 mb-4">
                      <Progress value={(activeStep.iphone / (iphoneSteps.length - 1)) * 100} className="h-2 bg-gray-200" />
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>{language === 'ar' ? 'البداية' : language === 'fr' ? 'Début' : 'Start'}</span>
                        <span>{language === 'ar' ? 'النهاية' : language === 'fr' ? 'Fin' : 'End'}</span>
                      </div>
                    </div>
                    
                    <div className="py-4 min-h-[200px]">
                      <div className="flex items-center gap-4 mb-4">
                        {iphoneSteps[activeStep.iphone].icon}
                        <h5 className="font-bold">{iphoneSteps[activeStep.iphone].title}</h5>
                      </div>
                      <div className="mb-4">
                        <p className="text-gray-600 ml-12">{iphoneSteps[activeStep.iphone].description}</p>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleStepChange('iphone', 'prev')} 
                        disabled={activeStep.iphone === 0}
                        className={language === 'ar' ? 'flex flex-row-reverse' : ''}
                      >
                        <ArrowDown className={`h-4 w-4 rotate-90 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                        {language === 'ar' ? 'السابق' : 
                         language === 'fr' ? 'Précédent' : 
                         'Previous'}
                      </Button>
                      <Button 
                        size="sm"
                        variant={activeStep.iphone === iphoneSteps.length - 1 ? "outline" : "default"}
                        onClick={() => handleStepChange('iphone', 'next')} 
                        disabled={activeStep.iphone === iphoneSteps.length - 1}
                        className={`bg-travel-blue hover:bg-travel-blue/90 ${language === 'ar' ? 'flex flex-row-reverse' : ''}`}
                      >
                        {language === 'ar' ? 'التالي' : 
                         language === 'fr' ? 'Suivant' : 
                         'Next'}
                        <ArrowDown className={`h-4 w-4 -rotate-90 ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
