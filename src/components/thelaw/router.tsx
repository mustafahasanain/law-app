'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

export type PageName = 'home' | 'about' | 'practice-areas' | 'faq' | 'blog' | 'contact';

const VALID_PAGES: PageName[] = ['home', 'about', 'practice-areas', 'faq', 'blog', 'contact'];

interface RouterContextType {
  currentPage: PageName;
  navigate: (page: PageName) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
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

  const navigate = useCallback((page: PageName) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
