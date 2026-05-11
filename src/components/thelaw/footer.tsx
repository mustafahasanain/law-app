'use client';

import React from 'react';
import { useRouter, type PageName } from './router';
import { useLanguage } from '@/lib/i18n/language-context';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  const FOOTER_LINKS: { label: string; page: PageName }[] = [
    { label: t.footer.quickLinks.about, page: 'about' },
    { label: t.footer.quickLinks.faq, page: 'faq' },
    { label: t.footer.quickLinks.practiceArea, page: 'practice-areas' },
  ];

  return (
    <footer className="bg-charcoal-dark dark:bg-[#111111] text-gray-300 mt-auto transition-colors duration-300">
      {/* Gold gradient line at top */}
      <div className="h-0.5 gold-gradient" />
      {/* We're Here to Help Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 text-center relative overflow-hidden">
          {/* Subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
          <p className="text-gray-200 text-xs md:text-sm uppercase tracking-widest mb-2 relative z-10">{t.footer.hereToHelp}</p>
          <a href="tel:07802233000" dir="ltr" className="phone-ltr text-gold text-3xl md:text-4xl lg:text-6xl font-bold hover:text-gold-light transition-colors relative z-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            07802233000
          </a>
          <p className="text-gray-400 text-xs md:text-sm mt-2 relative z-10">{t.footer.freeConsultation}</p>
        </div>
      </div>

      {/* Working hours & contact bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Working Hours */}
          <div className="md:border-r md:border-gray-700 md:pe-6">
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">{t.footer.workingHours.title}</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300"><Clock size={14} className="text-gold" /> {t.footer.workingHours.weekdays}</span>
                <span className="text-gold text-sm">{t.footer.workingHours.weekdayHours}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300"><Clock size={14} className="text-gold" /> {t.footer.workingHours.saturday}</span>
                <span className="text-gold text-sm">{t.footer.workingHours.saturdayHours}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300"><Clock size={14} className="text-gold" /> {t.footer.workingHours.sunday}</span>
                <span className="text-gold text-sm">{t.footer.workingHours.sundayHours}</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:border-r md:border-gray-700 md:pe-6">
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <div>
              <p className="text-gray-300 text-sm">{t.footer.contact.addressLabel}</p>
                  <p className="text-white text-sm">{t.footer.contact.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{t.footer.contact.telLabel}</p>
                  <p dir="ltr" className="phone-ltr text-white text-sm">{t.footer.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{t.footer.contact.emailLabel}</p>
                  <p className="text-white text-sm">{t.footer.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">{t.footer.quickLinks.title}</h4>
            <div className="flex flex-col items-start space-y-1 md:space-y-2">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className="w-full text-left text-gray-300 dark:text-gray-300 hover:text-gold dark:hover:text-gold transition-colors text-sm md:text-base footer-link-hover min-h-[44px] flex items-center"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <p className="text-gray-400 text-xs md:text-sm">
          {t.footer.copyright}
        </p>
        <div className="flex items-center gap-3 md:gap-4">
          <a href="#" title="Facebook" className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Facebook size={20} /></a>
          <a href="#" title="Twitter" className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Twitter size={20} /></a>
          <a href="#" title="LinkedIn" className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Linkedin size={20} /></a>
          <a href="#" title="Instagram" className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Instagram size={20} /></a>
          <a href="#" title="Email" className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Mail size={20} /></a>
          <span className="text-gray-600 mx-1 hidden md:inline">|</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors flex items-center gap-1 text-xs md:text-sm min-h-[44px]"
          >
            <ArrowUp size={14} />
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
