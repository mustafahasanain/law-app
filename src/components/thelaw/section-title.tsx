'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, light = false, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-6 md:mb-8 ${className}`}>
      {/* Decorative line with diamond shapes */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {/* Left diamond + line */}
        <span className="w-2 h-2 bg-gold rotate-45 shrink-0" />
        <span className="w-10 h-0.5 bg-gold animate-line-expand" />
        {/* Subtitle text */}
        <span className={`text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gold`}>
          {subtitle || '\u00A0'}
        </span>
        {/* Right line + diamond */}
        <span className="w-10 h-0.5 bg-gold animate-line-expand" />
        <span className="w-2 h-2 bg-gold rotate-45 shrink-0" />
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-charcoal dark:text-white'} animate-fade-in`}
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        {title}
      </h2>
    </div>
  );
}
