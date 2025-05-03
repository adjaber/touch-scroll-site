
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, Leaf } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold text-gray-900">ecoESIM</span>
          </div>

          <nav className={`hidden md:flex items-center gap-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <a href="#home" className="text-gray-700 hover:text-travel-blue font-medium">{t.nav.home}</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-travel-blue font-medium">{t.nav.howItWorks}</a>
            <a href="#destinations" className="text-gray-700 hover:text-travel-blue font-medium">{t.nav.destinations}</a>
            <a href="#benefits" className="text-gray-700 hover:text-travel-blue font-medium">{t.nav.benefits}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-travel-blue font-medium">{t.nav.testimonials}</a>
            <LanguageSwitcher />
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.howItWorks}</a>
            <a href="#destinations" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.destinations}</a>
            <a href="#benefits" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.benefits}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.testimonials}</a>
            <LanguageSwitcher />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
