'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n/language-context';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: 'English', nativeLabel: 'EN', flag: '🇺🇸' },
    { code: 'ar' as const, label: 'العربية', nativeLabel: 'AR', flag: '🇸🇦' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-charcoal dark:text-gray-300 hover:text-gold dark:hover:text-gold transition-colors rounded-md hover:bg-light-gray dark:hover:bg-charcoal min-h-[36px]"
        aria-label={`Current language: ${currentLang.label}. Click to change language.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={16} className="text-gold" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          {currentLang.nativeLabel}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[70]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div
            className="absolute top-full mt-1 end-0 z-[80] bg-white dark:bg-charcoal-dark border border-border-gray dark:border-gray-700 shadow-lg rounded-md overflow-hidden min-w-[140px] animate-fade-in"
            role="listbox"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm transition-colors ${
                  language === lang.code
                    ? 'bg-gold/10 text-gold font-semibold'
                    : 'text-charcoal dark:text-gray-300 hover:bg-light-gray dark:hover:bg-charcoal hover:text-gold'
                }`}
                role="option"
                aria-selected={language === lang.code}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
                {language === lang.code && (
                  <span className="ms-auto w-1.5 h-1.5 bg-gold rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
