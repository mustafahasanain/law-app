'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { type Language, type TranslationKeys, translations } from './translations';

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  dir: 'ltr',
  setLanguage: () => {},
  t: translations.en as unknown as TranslationKeys,
  isRTL: false,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('thelaw-language') as Language | null;
      if (saved && (saved === 'en' || saved === 'ar')) {
        return saved;
      }
    }
    return 'en';
  });

  // Update document dir and lang attributes
  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Add/remove RTL class for CSS targeting
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('thelaw-language', lang);
  }, []);

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language] as unknown as TranslationKeys;
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, dir, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}
