
import React from 'react';
import { Globe } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/b0a38b67-6687-4c50-9633-3fa5990c17ed.png" 
                alt="NewTech Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold">ecoESIM</span>
            </div>
            <p className="text-gray-400 mb-4">
              {language === 'ar' 
                ? 'حل الاتصال العالمي الخاص بك للسفر بدون متاعب'
                : 'Your global connectivity solution for hassle-free travel'
              }
            </p>
            <p className="text-gray-400 mb-4">
              A NewTech Corporate company
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">{t.links.home}</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">{t.links.howItWorks}</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white">{t.links.destinations}</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white">{t.links.benefits}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">{t.links.testimonials}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.resources}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">{t.links.faqs}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t.links.support}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t.links.blog}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t.links.compatibility}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t.links.coverage}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.contactUs}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>Email:</span> 
                <a href="mailto:adjebbar@zohomail.com" className="hover:text-white">adjebbar@zohomail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>{language === 'ar' ? 'الهاتف: ' : 'Phone: '}</span>
                <a href="tel:+213662417859" className="hover:text-white">+213 662 417 859</a>
              </li>
              <li>{language === 'ar' ? 'ساعات العمل: دعم على مدار 24/7' : 'Hours: 24/7 Customer Support'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NewTech Corporate. {t.rights}
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
              <a href="#" className="hover:text-white">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
              <a href="#" className="hover:text-white">{language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
