import { useEffect } from 'react';

/**
 * Binds ArrowUp / ArrowDown keys to scroll one slide at a time inside
 * the snap container identified by `id="section-scroll"`.
 */
export function useSlideKeyNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      // Don't hijack if user is typing inside an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      const container = document.getElementById('section-scroll');
      if (!container) return;

      e.preventDefault();

      const slideHeight = container.clientHeight;
      container.scrollBy({
        top: e.key === 'ArrowDown' ? slideHeight : -slideHeight,
        behavior: 'smooth',
      });
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
}
