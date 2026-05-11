'use client';

import React from 'react';
import { useRouter, type PageName } from './router';
import { useLanguage } from '@/lib/i18n/language-context';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  breadcrumb?: string;
}

export function PageHero({ title, breadcrumb }: PageHeroProps) {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-charcoal py-14 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Moving gradient background */}
      <div className="absolute inset-0 moving-gradient-bg" />

      {/* Gold overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.3) 10px, rgba(212,175,55,0.3) 11px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(212,175,55,0.3) 10px, rgba(212,175,55,0.3) 11px)`,
        }} />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gold-gradient" />

      {/* Decorative gold corner accents */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 w-10 md:w-12 h-10 md:h-12 border-t border-l border-gold/30" />
      <div className="absolute top-4 right-4 md:top-10 md:right-10 w-10 md:w-12 h-10 md:h-12 border-t border-r border-gold/30" />
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-10 md:w-12 h-10 md:h-12 border-b border-l border-gold/30" />
      <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-10 md:w-12 h-10 md:h-12 border-b border-r border-gold/30" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-4 animate-fade-in" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          {title}
        </h1>
        {/* Breadcrumb with gold chevron separators */}
        <div className="flex items-center gap-2 text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors min-h-[44px]"
          >
            <Home size={14} />
            {t.common.home}
          </button>
          {breadcrumb && (
            <>
              <ChevronRight size={14} className="text-gold/60" />
              <span className="text-gray-400">{breadcrumb}</span>
            </>
          )}
        </div>
        {/* Decorative gold line under breadcrumb */}
        <div className="mt-4 md:mt-6 w-16 h-0.5 bg-gold animate-line-expand" />
      </div>
    </section>
  );
}
