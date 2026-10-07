'use client';

import { motion, useReducedMotion } from 'framer-motion';

type VisualKind = 'services' | 'case-studies' | 'industry';

const visuals: Record<VisualKind, { src: string; alt: string; label: string }> = {
  services: { src: '/images/service-system.svg', alt: 'R.K Digital Media service system connecting paid acquisition, SEO, local visibility, websites, recovery support and automation to business outcomes.', label: 'Service system' },
  'case-studies': { src: '/images/case-study-proof.svg', alt: 'Case study framework showing problem, intervention and documented outcome.', label: 'Evidence framework' },
  industry: { src: '/images/industry-growth.svg', alt: 'Industry growth funnel showing discovery, consideration, customer action, follow-up and measurement.', label: 'Growth funnel' },
};

export default function VisualFramework({ kind }: { kind: VisualKind }) {
  const visual = visuals[kind];
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={reduceMotion ? undefined : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className="overflow-hidden rounded-2xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] shadow-2xl"
    >
      <img src={visual.src} alt={visual.alt} width="1600" height="760" loading="lazy" className="block w-full h-auto" />
      <figcaption className="px-4 py-3 border-t border-[var(--rkd-border)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--rkd-fg-muted)]">{visual.label} · R.K Digital Media</figcaption>
    </motion.figure>
  );
}
