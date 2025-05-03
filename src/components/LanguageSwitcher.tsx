
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, dir } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className="ml-4"
      dir="ltr" // Always keep the language switcher in LTR for consistency
    >
      {language === 'en' ? 'عربي' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;
