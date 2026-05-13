'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RouterProvider, useRouter } from '@/components/thelaw/router';
import { LanguageProvider, useLanguage } from '@/lib/i18n/language-context';
import { Header } from '@/components/thelaw/header';
import { Footer } from '@/components/thelaw/footer';
import { CookieBanner } from '@/components/thelaw/cookie-banner';
import { BackToTop } from '@/components/thelaw/back-to-top';
import { ScrollProgress } from '@/components/thelaw/scroll-progress';
import { PageSkeleton } from '@/components/thelaw/page-skeleton';
import { HomePage } from '@/components/pages/home-page';
import { AboutPage } from '@/components/pages/about-page';
import { PracticeAreasPage } from '@/components/pages/practice-areas-page';
import { FAQPage } from '@/components/pages/faq-page';
import { ContactPage } from '@/components/pages/contact-page';

const PAGE_COMPONENTS: Record<string, React.ComponentType> = {
  home: HomePage,
  about: AboutPage,
  'practice-areas': PracticeAreasPage,
  faq: FAQPage,
  contact: ContactPage,
};

function PageContent() {
  const { currentPage } = useRouter();
  const { dir } = useLanguage();
  const PageComponent = PAGE_COMPONENTS[currentPage] || HomePage;
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Global keyboard navigation: Escape closes any open dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open dialogs
        const dialogCloseButtons = document.querySelectorAll('[data-radix-collection-item], [role="dialog"] button[aria-label="Close"]');
        dialogCloseButtons.forEach((btn) => {
          if (btn instanceof HTMLElement) btn.click();
        });
        // Also try to close radix dialogs
        const radixOverlay = document.querySelector('[data-state="open"]');
        if (radixOverlay instanceof HTMLElement) {
          const closeBtn = radixOverlay.querySelector('button[aria-label="Close"]') as HTMLElement | null;
          if (closeBtn) closeBtn.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showSkeleton) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" dir={dir}>
      {/* Skip to Content Link - Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div
          key={currentPage}
          className="animate-[pageFadeIn_300ms_ease-out_forwards]"
        >
          <PageComponent />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <PageContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
