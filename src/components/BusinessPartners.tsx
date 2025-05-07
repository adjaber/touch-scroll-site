
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Globe, Users } from "lucide-react";

const BusinessPartners = () => {
  const { language, dir } = useLanguage();
  
  // Business partner benefits
  const benefits = [
    {
      icon: <Plane className="h-8 w-8 text-purple-600" />,
      title: language === 'ar' ? 'شركات الطيران' : 
             language === 'fr' ? 'Compagnies aériennes' : 'Airlines',
      description: language === 'ar' 
        ? 'قدم لمسافريك خدمة اتصال عالية الجودة أثناء السفر. زد من رضا العملاء وكن الناقل المفضل لديهم مع خدمة eSIM المتكاملة.'
        : language === 'fr'
        ? 'Offrez à vos passagers une connectivité de qualité supérieure pendant leurs voyages. Améliorez la satisfaction client et devenez leur transporteur préféré avec un service eSIM intégré.'
        : 'Offer your passengers high-quality connectivity during their travels. Increase customer satisfaction and become their preferred carrier with integrated eSIM service.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      title: language === 'ar' ? 'وكالات السفر' : 
             language === 'fr' ? 'Agences de voyage' : 'Travel Agencies',
      description: language === 'ar'
        ? 'عزز عروض الرحلات الخاصة بك مع بطاقات eSIM. أضف قيمة لباقاتك السياحية واكسب عمولات إضافية على كل بطاقة eSIM مباعة.'
        : language === 'fr'
        ? 'Enrichissez vos offres de voyage avec les eSIMs. Ajoutez de la valeur à vos forfaits touristiques et gagnez des commissions supplémentaires sur chaque eSIM vendue.'
        : 'Enhance your trip offerings with eSIMs. Add value to your travel packages and earn additional commissions on every eSIM sold.'
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: language === 'ar' ? 'منظمي الرحلات' : 
             language === 'fr' ? 'Tour-opérateurs' : 'Tour Operators',
      description: language === 'ar'
        ? 'قدم تجربة متصلة لمجموعات السياح. حلول مخصصة للمجموعات الكبيرة مع أسعار تنافسية وإدارة مبسطة.'
        : language === 'fr'
        ? 'Proposez une expérience connectée pour les groupes touristiques. Solutions sur mesure pour grands groupes avec tarifs compétitifs et gestion simplifiée.'
        : 'Provide a connected experience for tour groups. Custom solutions for large groups with competitive pricing and simplified management.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: language === 'ar' ? 'الشركات' : 
             language === 'fr' ? 'Voyages d\'affaires' : 'Corporate Travel',
      description: language === 'ar'
        ? 'اجعل سفر الأعمال أكثر سلاسة. خطط eSIM مخصصة لموظفيك المسافرين مع فواتير مركزية وتحكم في النفقات.'
        : language === 'fr'
        ? 'Simplifiez les voyages d\'affaires. Forfaits eSIM personnalisés pour vos collaborateurs en déplacement avec facturation centralisée et contrôle des dépenses.'
        : 'Make business travel more seamless. Custom eSIM plans for your traveling employees with centralized billing and expense control.'
    }
  ];
  
  return (
    <section id="business-partners" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شراكات قوية لشركات السفر' : 
             language === 'fr' ? 'Partenariats solides pour entreprises du voyage' : 
             'Strong Partnerships for Travel Companies'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'عزز عروض خدماتك وزد من إيراداتك من خلال شراكة مع ecoESIM'
              : language === 'fr'
              ? 'Améliorez vos services et augmentez vos revenus grâce à un partenariat avec ecoESIM'
              : 'Enhance your service offerings and increase your revenue with an ecoESIM partnership'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-purple-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-purple-800 mb-4">
                  {benefit.title}
                </h3>
                <p className={`text-gray-600 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-purple-50 rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            {language === 'ar' ? 'برنامج شركاء الأعمال من ecoESIM' : 
             language === 'fr' ? 'Programme Partenaires d\'ecoESIM' : 
             'ecoESIM Business Partner Program'}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'ar'
              ? 'برنامج الشراكة المرن الذي يتكيف مع احتياجات عملك. انضم إلى شبكة شركائنا المتنامية واستفد من الفرص الجديدة للنمو والإيرادات.'
              : language === 'fr'
              ? 'Un programme de partenariat flexible qui s\'adapte aux besoins de votre entreprise. Rejoignez notre réseau de partenaires en pleine expansion et bénéficiez de nouvelles opportunités de croissance et de revenus.'
              : 'A flexible partnership program that adapts to your business needs. Join our growing partner network and benefit from new opportunities for growth and revenue.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => {
                // @ts-ignore
                if (window.launchChatbot) {
                  // @ts-ignore
                  window.launchChatbot();
                }
              }}
              size="lg"
              className={`bg-purple-600 hover:bg-purple-700 ${dir === 'rtl' ? 'flex flex-row-reverse' : ''}`}
            >
              {language === 'ar' ? 'تواصل مع فريق الشراكات' : 
               language === 'fr' ? 'Contacter l\'équipe partenaires' : 
               'Connect with Partnership Team'}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`border-purple-600 text-purple-600 hover:bg-purple-50 ${dir === 'rtl' ? 'flex flex-row-reverse' : ''}`}
            >
              {language === 'ar' ? 'تحميل كتيب الشراكة' : 
               language === 'fr' ? 'Télécharger la brochure partenaire' : 
               'Download Partnership Brochure'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
