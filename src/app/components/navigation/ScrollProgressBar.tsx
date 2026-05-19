import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

interface ScrollProgressBarProps {
  /** Course accent color for the filled portion. Defaults to BF red. */
  accentColor?: string;
}

/**
 * A thin progress line that sits directly under the CourseNav and fills as
 * the user scrolls through the current section's slide deck.
 *
 * Section pages render their slides inside a scroll container with
 * `id="section-scroll"`. We attach a passive scroll listener to that element
 * and compute `scrollTop / (scrollHeight - clientHeight)`. On pages that have
 * no such container (Home, Objectives, Bibliography…) the bar simply stays at
 * 0% width and is invisible.
 *
 * The scroll container is remounted on every route change, so the listener is
 * re-attached whenever `location.pathname` changes. Because the new container
 * mounts a frame or two after this component re-renders, we retry the lookup
 * for a short window via requestAnimationFrame.
 */
export function ScrollProgressBar({ accentColor = '#ED1C24' }: ScrollProgressBarProps) {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    let container: HTMLElement | null = null;
    let raf = 0;
    let attempts = 0;
    const MAX_ATTEMPTS = 60; // ~1s at 60fps, then give up (page has no deck)

    const update = () => {
      if (!container) return;
      const max = container.scrollHeight - container.clientHeight;
      const ratio = max <= 0 ? 0 : container.scrollTop / max;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };

    const attach = () => {
      container = document.getElementById('section-scroll');
      if (container) {
        container.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
        return;
      }
      if (attempts++ < MAX_ATTEMPTS) {
        raf = requestAnimationFrame(attach);
      }
    };

    attach();

    return () => {
      cancelAnimationFrame(raf);
      container?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname]);

  return (
    <div className="h-[3px] w-full shrink-0 bg-transparent overflow-hidden" aria-hidden>
      <div
        className="h-full rounded-r-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%`, backgroundColor: accentColor }}
      />
    </div>
  );
}
