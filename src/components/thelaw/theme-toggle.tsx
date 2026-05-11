'use client';

import React, { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button
        className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md"
        aria-label="Toggle theme"
      >
        <Sun size={20} className="text-medium-gray" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-light-gray dark:hover:bg-charcoal transition-colors group"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          className="absolute inset-0 text-charcoal dark:text-gray-400 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
        />
        <Moon
          size={20}
          className="absolute inset-0 text-gold transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        />
      </div>
    </button>
  );
}
