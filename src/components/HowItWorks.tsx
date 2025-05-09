
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

        {/* New eSIM Activation Guide */}
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
                  {/* Steps List */}
                  <ol className="relative">
                    {androidSteps.map((step, index) => (
                      <li key={index} className={`mb-10 ms-6 ${index === androidSteps.length - 1 ? '' : 'pb-8 border-s border-gray-200'}`}>
                        <div className={`absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 ring-4 ring-white ${index === activeStep.android ? 'bg-travel-orange text-white' : 'bg-gray-100'}`}>
                          {index === activeStep.android ? 
                            step.icon : 
                            <span className="text-gray-500 font-bold">{index + 1}</span>
                          }
                        </div>
                        <div 
                          className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-all ${
                            index === activeStep.android ? 'ring-2 ring-travel-orange' : ''
                          }`}
                          onClick={() => setActiveStep({...activeStep, android: index})}
                        >
                          <div className="flex items-center mb-1">
                            <h3 className="text-lg font-semibold text-travel-orange">{step.title}</h3>
                            {index < activeStep.android && (
                              <Check className="w-5 h-5 ml-2 text-green-500" />
                            )}
                          </div>
                          <p className="mb-2 text-gray-600">{step.description}</p>
                          {index === activeStep.android && (
                            <div className="mt-4 flex justify-between">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStepChange('android', 'prev');
                                }}
                                disabled={index === 0}
                                className="text-travel-orange border-travel-orange hover:bg-travel-orange/10"
                              >
                                <ArrowDown className="h-4 w-4 rotate-90 mr-1" />
                                {language === 'ar' ? 'السابق' : 
                                 language === 'fr' ? 'Précédent' : 
                                 'Previous'}
                              </Button>
                              
                              <Button 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStepChange('android', 'next');
                                }}
                                disabled={index === androidSteps.length - 1}
                                className="bg-travel-orange hover:bg-travel-orange/90"
                              >
                                {language === 'ar' ? 'التالي' : 
                                 language === 'fr' ? 'Suivant' : 
                                 'Next'}
                                <ArrowDown className="h-4 w-4 -rotate-90 ml-1" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-travel-orange">
                        {language === 'ar' ? 'التقدم' : 
                         language === 'fr' ? 'Progression' : 
                         'Progress'}
                      </span>
                      <span className="text-sm font-medium text-travel-orange">
                        {((activeStep.android + 1) / androidSteps.length * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Progress 
                      value={(activeStep.android / (androidSteps.length - 1)) * 100} 
                      className="h-2 bg-gray-200"
                      indicatorClassName="bg-travel-orange"
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
                  {/* Steps List */}
                  <ol className="relative">
                    {iphoneSteps.map((step, index) => (
                      <li key={index} className={`mb-10 ms-6 ${index === iphoneSteps.length - 1 ? '' : 'pb-8 border-s border-gray-200'}`}>
                        <div className={`absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 ring-4 ring-white ${index === activeStep.iphone ? 'bg-travel-blue text-white' : 'bg-gray-100'}`}>
                          {index === activeStep.iphone ? 
                            step.icon : 
                            <span className="text-gray-500 font-bold">{index + 1}</span>
                          }
                        </div>
                        <div 
                          className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-all ${
                            index === activeStep.iphone ? 'ring-2 ring-travel-blue' : ''
                          }`}
                          onClick={() => setActiveStep({...activeStep, iphone: index})}
                        >
                          <div className="flex items-center mb-1">
                            <h3 className="text-lg font-semibold text-travel-blue">{step.title}</h3>
                            {index < activeStep.iphone && (
                              <Check className="w-5 h-5 ml-2 text-green-500" />
                            )}
                          </div>
                          <p className="mb-2 text-gray-600">{step.description}</p>
                          {index === activeStep.iphone && (
                            <div className="mt-4 flex justify-between">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStepChange('iphone', 'prev');
                                }}
                                disabled={index === 0}
                                className="text-travel-blue border-travel-blue hover:bg-travel-blue/10"
                              >
                                <ArrowDown className="h-4 w-4 rotate-90 mr-1" />
                                {language === 'ar' ? 'السابق' : 
                                 language === 'fr' ? 'Précédent' : 
                                 'Previous'}
                              </Button>
                              
                              <Button 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStepChange('iphone', 'next');
                                }}
                                disabled={index === iphoneSteps.length - 1}
                                className="bg-travel-blue hover:bg-travel-blue/90"
                              >
                                {language === 'ar' ? 'التالي' : 
                                 language === 'fr' ? 'Suivant' : 
                                 'Next'}
                                <ArrowDown className="h-4 w-4 -rotate-90 ml-1" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-travel-blue">
                        {language === 'ar' ? 'التقدم' : 
                         language === 'fr' ? 'Progression' : 
                         'Progress'}
                      </span>
                      <span className="text-sm font-medium text-travel-blue">
                        {((activeStep.iphone + 1) / iphoneSteps.length * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Progress 
                      value={(activeStep.iphone / (iphoneSteps.length - 1)) * 100} 
                      className="h-2 bg-gray-200" 
                      indicatorClassName="bg-travel-blue"
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
