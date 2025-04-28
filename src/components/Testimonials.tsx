
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      name: language === 'ar' ? 'سارة طومسون' : 'Sarah Thompson',
      location: language === 'ar' ? 'الولايات المتحدة' : 'United States',
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content: language === 'ar' 
        ? 'جعلت TraveleSIM رحلتي إلى أوروبا أسهل بكثير. لم أكن بحاجة للقلق بشأن العثور على WiFi أو شراء بطاقات SIM محلية. كان الإعداد بسيطًا للغاية، وكانت سرعة البيانات ممتازة طوال رحلتي.'
        : "TraveleSIM made my Europe trip so much easier. I never had to worry about finding WiFi or buying local SIMs. The setup was incredibly simple, and the data speed was excellent throughout my journey."
    },
    {
      name: language === 'ar' ? 'مايكل تشن' : 'Michael Chen',
      location: language === 'ar' ? 'أستراليا' : 'Australia',
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      content: language === 'ar'
        ? 'كمسافر رقمي، البقاء متصلاً أمر ضروري لعملي. كانت TraveleSIM بمثابة نقلة نوعية بالنسبة لي، حيث سمحت لي بالانتقال بسلاسة بين البلدان دون فقدان الاتصال.'
        : "As a digital nomad, staying connected is essential for my work. TraveleSIM has been a game-changer for me, allowing me to seamlessly transition between countries without ever losing connectivity."
    },
    {
      name: language === 'ar' ? 'إيلينا رودريغيز' : 'Elena Rodriguez',
      location: language === 'ar' ? 'إسبانيا' : 'Spain',
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      content: language === 'ar'
        ? 'كنت متشككة في البداية بشأن eSIMs، لكن TraveleSIM أقنعتني! كانت خدمة العملاء استثنائية عندما احتجت إلى المساعدة، وكانت التغطية مثالية خلال مغامرتي في جنوب شرق آسيا.'
        : "I was skeptical about eSIMs at first, but TraveleSIM converted me! The customer service was exceptional when I needed help, and the coverage was perfect during my Southeast Asia adventure."
    }
  ];

  return (
    <section id="testimonials" className="section-padding" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" className="mr-1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-travel-blue/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">{t.cta.title}</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="btn-primary">{t.cta.button}</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
