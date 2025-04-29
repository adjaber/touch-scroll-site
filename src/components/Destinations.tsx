
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { MapPin } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

const Destinations = () => {
  const { language } = useLanguage();
  const t = translations[language].destinations;
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

  const destinations = [
    {
      name: language === 'ar' ? 'أوروبا' : 'France',
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 2.99,
      plans: [
        { name: "Traveler Basic", data: "1GB", validity: "7 days", price: 2.99 },
        { name: "Traveler Plus", data: "3GB", validity: "15 days", price: 5.99 },
        { name: "Traveler Pro", data: "5GB", validity: "30 days", price: 9.99 }
      ]
    },
    {
      name: language === 'ar' ? 'آسيا' : 'Thailand',
      image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 5.99,
      plans: [
        { name: "Explorer Basic", data: "2GB", validity: "7 days", price: 5.99 },
        { name: "Explorer Plus", data: "5GB", validity: "15 days", price: 9.99 },
        { name: "Explorer Pro", data: "10GB", validity: "30 days", price: 15.99 }
      ]
    },
    {
      name: language === 'ar' ? 'أمريكا الشمالية' : 'United States',
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 3.99,
      plans: [
        { name: "USA Basic", data: "1GB", validity: "7 days", price: 3.99 },
        { name: "USA Plus", data: "3GB", validity: "15 days", price: 7.99 },
        { name: "USA Pro", data: "5GB", validity: "30 days", price: 12.99 }
      ]
    },
    {
      name: language === 'ar' ? 'أمريكا الجنوبية' : 'Brazil',
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 4.99,
      plans: [
        { name: "Brazil Basic", data: "1GB", validity: "7 days", price: 4.99 },
        { name: "Brazil Plus", data: "2GB", validity: "15 days", price: 8.99 },
        { name: "Brazil Pro", data: "5GB", validity: "30 days", price: 14.99 }
      ]
    }
  ];

  return (
    <section id="destinations" className="section-padding bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden card-hover border-none">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <MapPin className="h-4 w-4 text-travel-blue" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 text-sm">1GB / 7 days</span>
                  <span className="text-travel-blue font-bold">${destination.startingPrice}</span>
                </div>
                <Button 
                  className="w-full bg-travel-blue hover:bg-travel-blue/90"
                  onClick={() => setSelectedDestination(index)}
                >
                  {t.explorePlans}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white">
            {t.viewAll}
          </Button>
        </div>

        {/* Dialog for showing the plan details */}
        <Dialog open={selectedDestination !== null} onOpenChange={() => setSelectedDestination(null)}>
          {selectedDestination !== null && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{destinations[selectedDestination].name} {language === 'ar' ? 'خطط الـ eSIM' : 'eSIM Plans'}</DialogTitle>
                  <img 
                    src="/lovable-uploads/b0a38b67-6687-4c50-9633-3fa5990c17ed.png" 
                    alt="NewTech Logo" 
                    className="h-8 w-auto"
                  />
                </div>
                <DialogDescription>
                  {language === 'ar' ? 'اختر خطة البيانات المناسبة لرحلتك' : 'Choose a data plan suitable for your trip'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                {destinations[selectedDestination].plans.map((plan, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:border-travel-blue transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-lg">{plan.name}</h4>
                      <span className="text-travel-blue font-bold">${plan.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>{language === 'ar' ? 'بيانات' : 'Data'}: <span className="font-semibold">{plan.data}</span></div>
                      <div>{language === 'ar' ? 'صلاحية' : 'Validity'}: <span className="font-semibold">{plan.validity}</span></div>
                    </div>
                    <Button className="w-full mt-3 bg-travel-blue hover:bg-travel-blue/90">
                      {language === 'ar' ? 'اختر هذه الخطة' : 'Select This Plan'}
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                <div>
                  {language === 'ar' ? 'جميع الخطط تشمل تنشيط فوري والدعم على مدار 24/7' : 'All plans include instant activation and 24/7 support'}
                </div>
                <div>
                  <a href="tel:+213662417859" className="text-travel-blue hover:underline text-xs">+213 662 417 859</a>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Destinations;
