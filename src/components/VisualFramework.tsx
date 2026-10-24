'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Activity, BarChart3, Building2, ClipboardCheck, Compass, FileCheck2, Gauge, MessageSquare, MousePointerClick, Search, Target, Workflow, type LucideIcon } from 'lucide-react';

type VisualKind = 'services' | 'case-studies' | 'industry';
type FrameworkItem = { icon: LucideIcon; title: string; detail: string };

const frameworks: Record<VisualKind, { label: string; title: string; intro: string; items: FrameworkItem[] }> = {
  services: {
    label: 'Our approach',
    title: 'Strategy connected to execution',
    intro: 'A practical view of how the work moves from business context to measurable improvement.',
    items: [
      { icon: Compass, title: 'Understand the goal', detail: 'Start with the service, audience and business outcome that matter.' },
      { icon: Target, title: 'Focus the strategy', detail: 'Choose the right channels, priorities and next steps for the situation.' },
      { icon: Workflow, title: 'Put the work in motion', detail: 'Implement changes with clear ownership and a useful pace.' },
      { icon: BarChart3, title: 'Measure and refine', detail: 'Review real signals, explain what changed and improve from evidence.' },
    ],
  },
  'case-studies': {
    label: 'How to read the work',
    title: 'Context, action, evidence',
    intro: 'Each case study should make clear what was happening, what changed and what the available evidence shows.',
    items: [
      { icon: FileCheck2, title: 'The starting point', detail: 'The client context, challenge and constraints behind the work.' },
      { icon: ClipboardCheck, title: 'The actions taken', detail: 'The work completed and the decisions made along the way.' },
      { icon: Activity, title: 'The evidence', detail: 'The reported outcome, time period and source where available.' },
    ],
  },
  industry: {
    label: 'Industry growth path',
    title: 'Make each step easier to measure',
    intro: 'A clear path from being discovered to becoming a customer, adapted to the way each industry sells.',
    items: [
      { icon: Search, title: 'Be discovered', detail: 'Show up when people look for relevant products or services.' },
      { icon: Building2, title: 'Build confidence', detail: 'Give visitors useful details to compare and evaluate.' },
      { icon: MousePointerClick, title: 'Make enquiry simple', detail: 'Offer a clear next step on a fast, usable page.' },
      { icon: MessageSquare, title: 'Respond and qualify', detail: 'Help the team follow up and understand enquiry quality.' },
      { icon: Gauge, title: 'Learn what works', detail: 'Review the path and improve it using available performance data.' },
    ],
  },
};

export default function VisualFramework({ kind }: { kind: VisualKind }) {
  const framework = frameworks[kind];
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label={framework.label} className="rounded-2xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-5 shadow-xl sm:p-7 md:p-9">
      <div className="mb-7 max-w-2xl">
        <p className="section-label mb-3">// {framework.label}</p>
        <h2 className="section-heading section-heading-h2">{framework.title}</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--rkd-fg-muted)]">{framework.intro}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {framework.items.map(({ icon: Icon, title, detail }, index) => (
          <motion.article
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? undefined : { duration: 0.35, delay: index * 0.05 }}
            className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-bg)] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--rkd-primary)]">0{index + 1}</span>
              <Icon aria-hidden="true" className="h-5 w-5 text-[var(--rkd-primary)]" />
            </div>
            <h3 className="mt-5 font-semibold text-[var(--rkd-fg)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--rkd-fg-muted)]">{detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
