"use client";

import React from "react";
import { useRouter, type PageName } from "./router";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  ArrowUp,
} from "lucide-react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.54 0 .21 5.32.21 11.86c0 2.09.54 4.13 1.57 5.93L.12 23.85l6.22-1.63a11.87 11.87 0 0 0 5.73 1.46h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.14-3.42-8.34ZM12.08 21.68a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.69.97.99-3.6-.23-.37a9.84 9.84 0 0 1-1.51-5.24c0-5.42 4.4-9.83 9.82-9.83 2.62 0 5.09 1.02 6.94 2.88a9.76 9.76 0 0 1 2.88 6.95c-.01 5.42-4.42 9.82-9.84 9.82Zm5.39-7.37c-.29-.14-1.73-.85-2-.94-.27-.1-.47-.14-.66.14-.2.29-.76.94-.94 1.13-.17.19-.34.21-.63.07-.29-.14-1.21-.45-2.31-1.44a8.68 8.68 0 0 1-1.6-1.99c-.17-.28-.02-.43.13-.57.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.59-.91-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.43 0 1.43 1.05 2.81 1.2 3.01.14.19 2.06 3.15 5 4.41.7.3 1.24.48 1.67.61.7.22 1.33.19 1.83.12.56-.08 1.73-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.55-.33Z" />
    </svg>
  );
}

export function Footer() {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  const FOOTER_LINKS: { label: string; page: PageName }[] = [
    { label: t.footer.quickLinks.about, page: "about" },
    { label: t.footer.quickLinks.faq, page: "faq" },
    { label: t.footer.quickLinks.practiceArea, page: "practice-areas" },
  ];

  return (
    <footer className="bg-charcoal-dark dark:bg-[#111111] text-gray-300 mt-auto transition-colors duration-300">
      {/* Working hours & contact bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Working Hours */}
          <div className="md:border-r md:border-gray-700 md:pe-6">
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              {t.footer.workingHours.title}
            </h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <Clock size={14} className="text-gold" />{" "}
                  {t.footer.workingHours.weekdays}
                </span>
                <span className="text-gold text-sm">
                  {t.footer.workingHours.weekdayHours}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <Clock size={14} className="text-gold" />{" "}
                  {t.footer.workingHours.saturday}
                </span>
                <span className="text-gold text-sm">
                  {t.footer.workingHours.saturdayHours}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <Clock size={14} className="text-gold" />{" "}
                  {t.footer.workingHours.sunday}
                </span>
                <span className="text-gold text-sm">
                  {t.footer.workingHours.sundayHours}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:border-r md:border-gray-700 md:pe-6">
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              {t.footer.contact.title}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {t.footer.contact.addressLabel}
                  </p>
                  <p className="text-white text-sm">
                    {t.footer.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {t.footer.contact.telLabel}
                  </p>
                  <p dir="ltr" className="phone-ltr text-white text-sm">
                    {t.footer.contact.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {t.footer.contact.emailLabel}
                  </p>
                  <p className="text-white text-sm">{t.footer.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">
              {t.footer.quickLinks.title}
            </h4>
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
        <p className="text-gray-400 text-xs md:text-sm">{t.footer.copyright}</p>
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="https://www.facebook.com/share/1BNoDoR5sC/?mibextid=wwXIfr"
            title="Facebook"
            className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/_lawyer_baraa?igsh=bTJmZXgzMWswOGhk"
            title="Instagram"
            className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/9647802233000"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            aria-label="Contact us on WhatsApp"
            className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href="#"
            title="Email"
            className="text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Mail size={20} />
          </a>
          <span className="text-gray-600 mx-1 hidden md:inline">|</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
