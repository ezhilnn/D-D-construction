import { useState, useEffect } from 'react';
import { debounce } from '@utils/index';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Hook that tracks window scroll position.
 * Returns { x, y } coordinates.
 * 
 * Usage:
 *   const { y } = useWindowScroll();
 *   const isScrolled = y > 100;
 */
export default function useWindowScroll(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, 50);

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}