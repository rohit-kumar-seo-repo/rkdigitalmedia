'use client';

import { useEffect } from 'react';

/**
 * Shared, lightweight reveal system for the builders landing page.
 * Uses IntersectionObserver and CSS only; it does not add an animation dependency.
 */
export default function BuildersMotionSystem() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>('.builders-page');
    if (!page || typeof IntersectionObserver === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const targets = Array.from(page.querySelectorAll<HTMLElement>('[data-motion-reveal]'));
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-motion-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -6% 0px',
    });

    targets.forEach((target) => observer.observe(target));
    page.classList.add('builders-motion-ready');

    return () => {
      observer.disconnect();
      page.classList.remove('builders-motion-ready');
    };
  }, []);

  return null;
}
