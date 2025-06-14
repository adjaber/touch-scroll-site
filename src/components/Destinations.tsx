
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { MapPin, MessageSquare, Leaf, Globe, Recycle, TreeDeciduous } from "lucide-react";
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
      name: language === 'ar' ? 'فرنسا' : 'France',
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "Airalo",
      savingsPercentage: "40%",
      plans: [
        { name: "Traveler Basic", data: "1GB", validity: "7 days", savings: "40%", competitorName: "Airalo" },
        { name: "Traveler Plus", data: "3GB", validity: "15 days", savings: "35%", competitorName: "Airalo" },
        { name: "Traveler Pro", data: "5GB", validity: "30 days", savings: "30%", competitorName: "Airalo" }
      ],
      ecoImpact: "Saves ~2.5g plastic compared to physical SIM cards"
    },
    {
      name: language === 'ar' ? 'تايلاند' : 'Thailand',
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "Airalo",
      savingsPercentage: "40%",
      plans: [
        { name: "Explorer Basic", data: "2GB", validity: "7 days", savings: "40%", competitorName: "Airalo" },
        { name: "Explorer Plus", data: "5GB", validity: "15 days", savings: "35%", competitorName: "Airalo" },
        { name: "Explorer Pro", data: "10GB", validity: "30 days", savings: "30%", competitorName: "GigSky" }
      ],
      ecoImpact: "Reduces packaging waste by ~3g"
    },
    {
      name: language === 'ar' ? 'إيطاليا' : 'Italy',
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "Airalo",
      savingsPercentage: "35%",
      plans: [
        { name: "Italy Basic", data: "1GB", validity: "7 days", savings: "35%", competitorName: "Airalo" },
        { name: "Italy Plus", data: "3GB", validity: "15 days", savings: "30%", competitorName: "Airalo" },
        { name: "Italy Pro", data: "5GB", validity: "30 days", savings: "25%", competitorName: "GigSky" }
      ],
      ecoImpact: "Saves ~2.5g plastic compared to physical SIM cards"
    },
    {
      name: language === 'ar' ? 'اليابان' : 'Japan',
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "GigSky",
      savingsPercentage: "35%",
      plans: [
        { name: "Japan Basic", data: "1GB", validity: "7 days", savings: "35%", competitorName: "GigSky" },
        { name: "Japan Plus", data: "3GB", validity: "15 days", savings: "30%", competitorName: "GigSky" },
        { name: "Japan Pro", data: "5GB", validity: "30 days", savings: "25%", competitorName: "Holafly" }
      ],
      ecoImpact: "Reduces packaging waste by ~3g"
    },
    {
      name: language === 'ar' ? 'الإمارات' : 'UAE',
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "Airalo",
      savingsPercentage: "40%",
      plans: [
        { name: "UAE Basic", data: "1GB", validity: "7 days", savings: "40%", competitorName: "Airalo" },
        { name: "UAE Plus", data: "2GB", validity: "15 days", savings: "35%", competitorName: "Airalo" },
        { name: "UAE Pro", data: "5GB", validity: "30 days", savings: "30%", competitorName: "GigSky" }
      ],
      ecoImpact: "Saves ~2.5g plastic compared to physical SIM cards"
    },
    {
      name: language === 'ar' ? 'تركيا' : 'Turkey',
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      countries: 1,
      competitorName: "Holafly",
      savingsPercentage: "40%",
      plans: [
        { name: "Turkey Basic", data: "1GB", validity: "7 days", savings: "40%", competitorName: "Holafly" },
        { name: "Turkey Plus", data: "3GB", validity: "15 days", savings: "35%", competitorName: "Airalo" },
        { name: "Turkey Pro", data: "5GB", validity: "30 days", savings: "30%", competitorName: "GigSky" }
      ],
      ecoImpact: "Reduces packaging waste by ~3g"
    }
  ];

  const launchChatbot = () => {
    // @ts-ignore
    if (window.launchChatbot) {
      // @ts-ignore
      window.launchChatbot();
    }
  };

  return (
    <section id="destinations" className="section-padding bg-purple-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <TreeDeciduous className="h-6 w-6 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
          </div>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
          <div className="mt-4 bg-purple-100 p-4 rounded-lg inline-block">
            <p className="text-purple-800 font-semibold flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {language === 'ar' 
                ? 'أسعار حصرية متاحة عبر المحادثة فقط! وفر أكثر من 40% مقارنة بالمنافسين'
                : 'Exclusive prices available via chat only! Save over 40% compared to competitors'}
            </p>
          </div>
          <div className="mt-3 text-sm text-purple-700 flex justify-center items-center gap-1">
            <Leaf className="h-4 w-4" />
            {language === 'ar' 
              ? 'بطاقات eSIM صديقة للبيئة - لا بلاستيك، لا نفايات، الحل الأخضر للسفر'
              : 'Eco-friendly eSIM cards - No plastic, no waste, the green travel solution'}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden card-hover border-purple-200 shadow-sm hover:shadow-purple-100">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <MapPin className="h-4 w-4 text-purple-600" />
                </div>
                <div className="absolute bottom-2 left-2 bg-purple-100 px-2 py-1 rounded-full flex items-center gap-1">
                  <Leaf className="h-3 w-3 text-purple-600" />
                  <span className="text-xs text-purple-700 font-medium">
                    {language === 'ar' ? 'صديق للبيئة' : 'Eco-friendly'}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 bg-gradient-to-b from-white to-purple-50">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 text-sm">1GB / 7 days</span>
                  <div className="flex flex-col items-end">
                    <span className="text-purple-600 font-bold">
                      {language === 'ar' 
                        ? `وفر ${destination.savingsPercentage} مقارنة بـ` 
                        : `Save ${destination.savingsPercentage} vs.`} {destination.competitorName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => setSelectedDestination(index)}
                  >
                    {t.explorePlans}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={launchChatbot}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'أفضل سعر عبر المحادثة' : 'Best Price via Chat'}
                  </Button>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-purple-600">
                  <Recycle className="h-3 w-3" />
                  <span>{destination.ecoImpact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={launchChatbot} 
            className="bg-purple-600 hover:bg-purple-700 gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            {language === 'ar' ? 'تحدث معنا للحصول على أسعار أفضل' : 'Chat for Better Prices'}
          </Button>
          <p className="mt-4 text-sm text-purple-700 flex justify-center items-center gap-2">
            <Globe className="h-4 w-4" />
            {language === 'ar'
              ? 'كل eSIM يساعد في الحفاظ على البيئة من خلال تقليل استخدام البلاستيك والنفايات'
              : 'Every eSIM helps preserve the environment by reducing plastic use and waste'}
          </p>
        </div>

        {/* Dialog for showing the plan details */}
        <Dialog open={selectedDestination !== null} onOpenChange={() => setSelectedDestination(null)}>
          {selectedDestination !== null && (
            <DialogContent className="sm:max-w-md bg-gradient-to-b from-white to-purple-50 border-purple-200">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <TreeDeciduous className="h-5 w-5 text-purple-600" />
                    {destinations[selectedDestination].name} {language === 'ar' ? 'خطط الـ eSIM' : 'eSIM Plans'}
                  </DialogTitle>
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/b0a38b67-6687-4c50-9633-3fa5990c17ed.png" 
                      alt="NewTech Logo" 
                      className="h-8 w-auto mr-2"
                    />
                    <span className="text-sm font-medium">ecoESIM</span>
                  </div>
                </div>
                <DialogDescription>
                  {language === 'ar' ? 'اختر خطة البيانات المناسبة لرحلتك' : 'Choose a data plan suitable for your trip'}
                </DialogDescription>
                <div className="mt-1 text-xs text-purple-600 flex items-center gap-1">
                  <Leaf className="h-3 w-3" />
                  <span>
                    {language === 'ar'
                      ? 'حل صديق للبيئة - يقلل من النفايات البلاستيكية بنسبة 100%'
                      : 'Eco-friendly solution - reduces plastic waste by 100%'}
                  </span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                {destinations[selectedDestination].plans.map((plan, idx) => (
                  <div key={idx} className="border border-purple-200 rounded-lg p-4 hover:border-purple-500 transition-colors bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-lg">{plan.name}</h4>
                      <div className="flex flex-col items-end">
                        <span className="text-purple-600 font-bold">
                          {language === 'ar' 
                            ? `وفر ${plan.savings} مقارنة بـ` 
                            : `Save ${plan.savings} vs.`} {plan.competitorName}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>{language === 'ar' ? 'بيانات' : 'Data'}: <span className="font-semibold">{plan.data}</span></div>
                      <div>{language === 'ar' ? 'صلاحية' : 'Validity'}: <span className="font-semibold">{plan.validity}</span></div>
                    </div>
                    <div className="mt-3 flex justify-center">
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
                        onClick={launchChatbot}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {language === 'ar' ? 'احصل عليها عبر المحادثة' : 'Get Via Chat'}
                      </Button>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs text-purple-600 font-medium">
                        {language === 'ar' 
                          ? 'توفير أكثر من 40% مقارنة مع المنافسين!' 
                          : 'Save over 40% compared to competitors!'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                <div>
                  {language === 'ar' ? 'جميع الخطط تشمل تنشيط فوري والدعم على مدار 24/7' : 'All plans include instant activation and 24/7 support'}
                </div>
                <div>
                  <a href="tel:+213662417859" className="text-purple-600 hover:underline text-xs">+213 662 417 859</a>
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
