'use client';

import React, { useState, useCallback } from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('cookie-dismissed');
    }
    return false;
  });

  const [isLeaving, setIsLeaving] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      localStorage.setItem('cookie-dismissed', 'true');
      setVisible(false);
    }, 400);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] animate-slide-in-bottom ${isLeaving ? 'translate-y-full opacity-0 transition-all duration-400' : ''}`}
      role="banner"
      aria-label="Cookie consent"
    >
      {/* Gold accent border at top */}
      <div className="h-0.5 gold-gradient" />
      <div className="bg-charcoal-dark/95 dark:bg-charcoal-dark/95 backdrop-blur-sm text-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-xl">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-200 leading-snug text-center sm:text-start flex items-start gap-2">
            <Cookie size={14} className="text-gold shrink-0 mt-0.5" />
            <span>{t.cookie.description}</span>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDismiss}
              className="bg-gold hover:bg-gold-dark text-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] rounded-sm"
            >
              {t.cookie.acceptAll}
            </button>
            <button
              onClick={handleDismiss}
              className="border border-gray-600 dark:border-gray-500 text-gray-300 dark:text-gray-300 px-4 py-2 text-xs hover:border-gold hover:text-gold transition-colors min-h-[44px] rounded-sm"
            >
              {t.cookie.decline}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
