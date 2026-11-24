import { useEffect } from 'react';

/**
 * SmoothScrollManager
 * Adjusts scrolling speed from default 100% down to 85% (speedMultiplier: 0.85)
 * for a smoother, premium, controlled scrolling feel.
 */
export default function SmoothScrollManager({ speedMultiplier = 0.85 }) {
  useEffect(() => {
    // Respect user's system reduced-motion accessibility preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;

    const updateScroll = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        return;
      }

      // Smooth easing step
      currentY += diff * 0.12;
      window.scrollTo(0, currentY);
      requestAnimationFrame(updateScroll);
    };

    const handleWheel = (e) => {
      // Don't intercept inside modal bodies, mobile drawers, or chip carousels
      const target = e.target;
      if (
        target.closest('.modal-scroll-body') ||
        target.closest('.mobile-drawer') ||
        target.closest('.shop-sidebar') ||
        target.closest('.category-chips-scroll')
      ) {
        return;
      }

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Scaled to 85% of standard scroll delta (multiplier = 0.85)
      targetY = Math.max(0, Math.min(maxScroll, targetY + e.deltaY * speedMultiplier));

      if (!isRunning) {
        currentY = window.scrollY;
        isRunning = true;
        requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Sync targets when user drags native scrollbar or navigates
    const handleScroll = () => {
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speedMultiplier]);

  return null;
}
