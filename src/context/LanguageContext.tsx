
import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar' | 'fr';
  setLanguage: (lang: 'en' | 'ar' | 'fr') => void;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar' | 'fr'>('en');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  // Update direction when language changes
  useEffect(() => {
    setDir(language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
