'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    // Check if cookie banner is visible
    const checkCookieBanner = () => {
      const dismissed = localStorage.getItem('cookie-dismissed');
      setCookieVisible(!dismissed);
    };

    checkCookieBanner();

    // Listen for storage changes (when cookie banner is dismissed)
    const handleStorage = () => {
      checkCookieBanner();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('storage', handleStorage);

    // Also check periodically since dismiss happens in same tab
    const interval = setInterval(checkCookieBanner, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Position higher when cookie banner is visible to avoid overlap
  const bottomPosition = cookieVisible ? 'bottom-28' : 'bottom-6';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${bottomPosition} ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ backgroundColor: '#D4AF37' }}
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  );
}
