
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, SmartphoneNfc, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompatiblePhones = () => {
  const { language, dir } = useLanguage();

  // Organize phones by brand
  const phones = {
    apple: {
      title: language === 'ar' ? 'أجهزة أبل' : 
             language === 'fr' ? 'Appareils Apple' : 'Apple Devices',
      icon: <Smartphone className="h-5 w-5 text-purple-600" />,
      devices: [
        'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
        'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13 mini', 'iPhone 13',
        'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12 mini', 'iPhone 12',
        'iPhone SE (2022)', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
        'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone SE (2020)'
      ]
    },
    samsung: {
      title: language === 'ar' ? 'أجهزة سامسونج' : 
             language === 'fr' ? 'Appareils Samsung' : 'Samsung Devices',
      icon: <SmartphoneNfc className="h-5 w-5 text-purple-600" />,
      devices: [
        'Galaxy S25 Series', 'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24',
        'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23',
        'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22',
        'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21', 'Galaxy S21 FE',
        'Galaxy Z Fold5', 'Galaxy Z Fold4', 'Galaxy Z Fold3',
        'Galaxy Z Flip5', 'Galaxy Z Flip4', 'Galaxy Z Flip3',
        'Galaxy Note 20 Ultra', 'Galaxy Note 20'
      ]
    },
    google: {
      title: language === 'ar' ? 'أجهزة جوجل' : 
             language === 'fr' ? 'Appareils Google' : 'Google Devices',
      icon: <Phone className="h-5 w-5 text-purple-600" />,
      devices: [
        'Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9',
        'Pixel 8 Pro', 'Pixel 8', 'Pixel 8a',
        'Pixel 7 Pro', 'Pixel 7', 'Pixel 7a',
        'Pixel 6 Pro', 'Pixel 6', 'Pixel 6a',
        'Pixel 5', 'Pixel 4a 5G', 'Pixel 4a', 'Pixel 4 XL', 'Pixel 4'
      ]
    },
    other: {
      title: language === 'ar' ? 'أجهزة أخرى' : 
             language === 'fr' ? 'Autres appareils' : 'Other Devices',
      icon: <Smartphone className="h-5 w-5 text-purple-600" />,
      devices: [
        'Huawei P50 Pro', 'Huawei P40 Pro', 'Huawei P40',
        'Oppo Find X5 Pro', 'Oppo Find X3 Pro',
        'OnePlus 10 Pro', 'OnePlus 9 Pro', 'OnePlus 9',
        'Xiaomi 13 Pro', 'Xiaomi 13', 'Xiaomi 12 Pro', 'Xiaomi 12',
        'Motorola Razr 40 Ultra', 'Motorola Edge 30 Pro',
        'Nothing Phone (2)', 'Nothing Phone (1)',
        'Sony Xperia 1 V', 'Sony Xperia 1 IV', 'Sony Xperia 1 III'
      ]
    }
  };

  return (
    <section id="compatible-phones" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'الأجهزة المتوافقة مع eSIM' : 
             language === 'fr' ? 'Appareils compatibles eSIM' :
             'eSIM Compatible Devices'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'قائمة بالهواتف والأجهزة التي تدعم تقنية eSIM حتى عام 2025'
              : language === 'fr'
              ? 'Liste complète des téléphones et appareils compatibles avec la technologie eSIM jusqu\'en 2025'
              : 'A comprehensive list of phones and devices supporting eSIM technology up to 2025'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(phones).map((brand, index) => (
            <Card key={index} className="border-purple-100 overflow-hidden">
              <CardContent className="p-6">
                <div className={`flex items-center gap-2 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  {brand.icon}
                  <h3 className="text-xl font-bold text-purple-800">{brand.title}</h3>
                </div>
                <ul className={`grid grid-cols-2 gap-x-4 gap-y-2 ${dir === 'rtl' ? 'text-right' : ''}`}>
                  {brand.devices.map((device, deviceIndex) => (
                    <li key={deviceIndex} className="text-gray-700">
                      <span className="text-purple-500 mr-1">✓</span> {device}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-purple-50 rounded-lg p-6 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              {language === 'ar'
                ? 'هل هاتفك غير مدرج؟'
                : language === 'fr'
                ? 'Votre téléphone n\'est pas listé ?'
                : 'Is your phone not listed?'}
            </h3>
            <p className="text-gray-700 mb-4">
              {language === 'ar'
                ? 'لا تقلق! معظم الهواتف الذكية الحديثة التي تم إطلاقها منذ عام 2020 تدعم تقنية eSIM. تحقق من التوافق عبر الدردشة.'
                : language === 'fr'
                ? 'Pas d\'inquiétude ! La plupart des smartphones récents sortis depuis 2020 prennent en charge la technologie eSIM. Vérifiez la compatibilité via le chat.'
                : 'Don\'t worry! Most modern smartphones released since 2020 support eSIM technology. Check compatibility via chat.'}
            </p>
            <Button 
              onClick={() => {
                // @ts-ignore
                if (window.launchChatbot) {
                  // @ts-ignore
                  window.launchChatbot();
                }
              }}
              className={`bg-purple-600 hover:bg-purple-700 ${dir === 'rtl' ? 'flex flex-row-reverse' : ''}`}
            >
              <Smartphone className={`h-4 w-4 ${dir === 'rtl' ? 'mr-0 ml-2' : 'ml-0 mr-2'}`} />
              {language === 'ar' ? 'تحقق من توافق هاتفك' : 
               language === 'fr' ? 'Vérifier la compatibilité de votre téléphone' :
               'Check Your Phone Compatibility'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatiblePhones;
