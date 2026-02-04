/**
 * Joins class names, filtering out falsy values.
 * Usage: cn('base', isActive && 'active', className)
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to a given element ID or top of page.
 */
export function scrollToSection(id: string, offset = 80): void {
  if (id === 'top' || id === '') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Checks if the device prefers reduced motion (accessibility).
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Formats a phone number string for display.
 * Input: "9159913330" → Output: "+91 915 991 3330"
 */
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return raw;
}

/**
 * Debounce a function call.
 */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Check if element is in the viewport (for scroll-triggered animations).
 */
export function isInViewport(el: Element, threshold = 0.15): boolean {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return rect.top < windowHeight * (1 - threshold);
}