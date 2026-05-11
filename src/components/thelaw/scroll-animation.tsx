'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || prefersReducedMotion) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function useCountAnimation(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    if (prefersReducedMotion) {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      const raf = requestAnimationFrame(() => {
        setCount(end);
        setIsComplete(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return { count, isComplete };
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
}

export function AnimatedSection({ children, className = '', delay = 0, animation = 'fade-up' }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses: Record<string, string> = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    'scale': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'fade': isVisible ? 'opacity-100' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        animationClasses[animation] || animationClasses['fade-up']
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface CounterItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

export function CounterItem({ icon, value, suffix, label, delay = 0 }: CounterItemProps) {
  const { ref, isVisible } = useScrollAnimation();
  const { count, isComplete } = useCountAnimation(value, 2000, isVisible);

  return (
    <div
      ref={ref}
      className={`text-center flex-1 py-2 md:py-0 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`text-gold mb-2 md:mb-4 flex justify-center transition-all duration-500 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {icon}
      </div>
      <div
        className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-3 transition-all duration-300 ${
          isComplete ? 'animate-gold-pulse' : ''
        }`}
      >
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-gray-300 text-xs md:text-base lg:text-lg uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ===== Parallax Background Hook ===== */
export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollPercent = rect.top / window.innerHeight;
      setOffset(scrollPercent * 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, offset };
}

/* ===== Keyboard Navigation Hook ===== */
export function useKeyboardNav(options: {
  onEscape?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  enabled?: boolean;
}) {
  const { onEscape, onArrowLeft, onArrowRight, enabled = true } = options;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enabled) return;

    if (e.key === 'Escape' && onEscape) {
      e.preventDefault();
      onEscape();
    }
    if (e.key === 'ArrowLeft' && onArrowLeft) {
      e.preventDefault();
      onArrowLeft();
    }
    if (e.key === 'ArrowRight' && onArrowRight) {
      e.preventDefault();
      onArrowRight();
    }
  }, [enabled, onEscape, onArrowLeft, onArrowRight]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
