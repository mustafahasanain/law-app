'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, type PageName } from './router';
import { useLanguage } from '@/lib/i18n/language-context';
import { Menu, X, Phone, Mail, Facebook } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const { currentPage, navigate, navigateToSection } = useRouter();
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS: { label: string; page: PageName }[] = [
    { label: t.header.home, page: 'home' },
    { label: t.header.about, page: 'about' },
    { label: t.header.practiceAreas, page: 'practice-areas' },
    { label: t.header.faq, page: 'faq' },
    { label: t.header.contact, page: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
    requestAnimationFrame(() => {
      setMobileMenuVisible(true);
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 300);
  }, []);

  const handleNavigate = useCallback((page: PageName) => {
    navigate(page);
    closeMobileMenu();
  }, [navigate, closeMobileMenu]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-charcoal dark:bg-charcoal-dark text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/share/1BNoDoR5sC/?mibextid=wwXIfr" target="_blank" rel="noreferrer noopener" className="text-gold hover:text-gold-light transition-colors"><Facebook size={14} /></a>
              <a href="mailto:info@baraa-alsamraie.com" className="text-gold hover:text-gold-light transition-colors"><Mail size={14} /></a>
            </div>
            <span className="text-gray-400">|</span>
            <a href="tel:07802233000" className="flex items-center gap-1 text-gray-300 hover:text-gold transition-colors">
              <Phone size={12} />
              <span dir="ltr" className="phone-ltr">07802233000</span>
            </a>
            <a href="mailto:info@baraa-alsamraie.com" className="flex items-center gap-1 text-gray-300 hover:text-gold transition-colors">
              <Mail size={12} />
              info@baraa-alsamraie.com
            </a>
          </div>
          <button
            onClick={() => navigateToSection('home', 'book-appointment')}
            className="bg-gold text-white px-4 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-all"
          >
            {t.header.freeConsultation}
          </button>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white dark:bg-charcoal-dark transition-all duration-300 border-b border-border-gray dark:border-gray-700 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex items-center gap-1 cursor-pointer">
            <span className="text-xl md:text-2xl font-semibold text-charcoal dark:text-white tracking-wider" style={{ fontFamily: isRTL ? 'var(--font-arabic), sans-serif' : 'var(--font-playfair), serif' }}>
              {t.header.logo}
            </span>
          </button>

          {/* Desktop Nav - hidden on mobile/tablet, shown on lg+ */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-gold'
                    : 'text-[#333333] dark:text-gray-300 hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile: theme toggle + hamburger menu button - visible only below lg */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  openMobileMenu();
                }
              }}
              className="p-2.5 text-charcoal dark:text-white hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-light-gray dark:hover:bg-charcoal z-[60] relative border border-border-gray dark:border-gray-700"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 lg:hidden ${
            mobileMenuVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-[300px] max-w-[85vw] bg-white dark:bg-charcoal-dark z-[60] lg:hidden shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuVisible
              ? 'translate-x-0'
              : isRTL
                ? '-translate-x-full'
                : 'translate-x-full'
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border-gray dark:border-gray-700">
            <span className="text-lg font-semibold text-charcoal dark:text-white tracking-wider" style={{ fontFamily: isRTL ? 'var(--font-arabic), sans-serif' : 'var(--font-playfair), serif' }}>
              {t.header.logo}
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-charcoal dark:text-white hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-light-gray dark:hover:bg-charcoal"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Contact info */}
          <div className="px-5 py-3 border-b border-border-gray dark:border-gray-700 bg-light-gray/50 dark:bg-charcoal/30">
            <div className="flex items-center gap-3 py-1.5">
                <a href="https://www.facebook.com/share/1BNoDoR5sC/?mibextid=wwXIfr" target="_blank" rel="noreferrer noopener" className="text-gold hover:text-gold-light transition-colors"><Facebook size={15} /></a>
              <a href="mailto:info@baraa-alsamraie.com" className="text-gold hover:text-gold-light transition-colors"><Mail size={15} /></a>
            </div>
            <a href="tel:07802233000" className="flex items-center gap-2 text-sm text-charcoal dark:text-gray-300 py-1.5">
              <Phone size={14} className="text-gold" /> <span dir="ltr" className="phone-ltr">07802233000</span>
            </a>
            <a href="mailto:info@baraa-alsamraie.com" className="flex items-center gap-2 text-sm text-charcoal dark:text-gray-300 py-1.5">
              <Mail size={14} className="text-gold" /> info@baraa-alsamraie.com
            </a>
          </div>

          {/* Navigation links */}
          <nav className="px-5 py-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`flex w-full items-center py-3 min-h-[44px] text-sm font-medium border-b border-border-gray dark:border-gray-700 ${
                  currentPage === item.page ? 'text-gold' : 'text-[#333333] dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA button */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-border-gray dark:border-gray-700 bg-white dark:bg-charcoal-dark">
            <button
              onClick={() => {
                navigateToSection('home', 'book-appointment');
                closeMobileMenu();
              }}
              className="w-full bg-gold text-white px-4 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all"
            >
              {t.header.freeConsultation}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
