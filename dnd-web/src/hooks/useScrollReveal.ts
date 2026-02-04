import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@utils/index';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Returns a ref to attach to any element and a boolean `isVisible`.
 * When the element scrolls into view, isVisible becomes true.
 * 
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <div ref={ref} className={isVisible ? 'animate-in' : ''}>...</div>
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, skip animation entirely
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible] as const;
}