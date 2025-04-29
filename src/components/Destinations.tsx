
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { MapPin } from "lucide-react";

const Destinations = () => {
  const { language } = useLanguage();
  const t = translations[language].destinations;

  const destinations = [
    {
      name: language === 'ar' ? 'أوروبا' : 'France',
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 2.99
    },
    {
      name: language === 'ar' ? 'آسيا' : 'Thailand',
      image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 5.99
    },
    {
      name: language === 'ar' ? 'أمريكا الشمالية' : 'United States',
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 3.99
    },
    {
      name: language === 'ar' ? 'أمريكا الجنوبية' : 'Brazil',
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 1,
      startingPrice: 4.99
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
                <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">{t.explorePlans}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white">
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
