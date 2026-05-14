'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

export type PageName = 'home' | 'about' | 'practice-areas' | 'faq' | 'contact';

const VALID_PAGES: PageName[] = ['home', 'about', 'practice-areas', 'faq', 'contact'];

interface RouterContextType {
  currentPage: PageName;
  navigate: (page: PageName) => void;
  navigateToSection: (page: PageName, sectionId: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
  navigateToSection: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function getInitialPage(): PageName {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '') as PageName;
    if (hash && VALID_PAGES.includes(hash)) {
      return hash;
    }
  }
  return 'home';
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageName>(getInitialPage);
  const initialized = useRef(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const attemptScroll = (attempt = 0) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (attempt < 20) {
        window.setTimeout(() => attemptScroll(attempt + 1), 50);
      }
    };

    attemptScroll();
  }, []);

  const navigate = useCallback((page: PageName) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const navigateToSection = useCallback((page: PageName, sectionId: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    scrollToSection(sectionId);
  }, [scrollToSection]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '') as PageName;
      if (newHash && VALID_PAGES.includes(newHash)) {
        setCurrentPage(newHash);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPage, navigate, navigateToSection }}>
      {children}
    </RouterContext.Provider>
  );
}
