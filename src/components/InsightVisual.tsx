import React from 'react';

type Kind =
  | 'local'
  | 'automation'
  | 'gbp'
  | 'expert'
  | 'campaigns'
  | 'suspension';

const data = {
  local: {
    title: 'Local visibility system',
    steps: ['Business + service', 'Google Business Profile', 'Local relevance', 'Reviews + citations', 'Website + content', 'Qualified local leads'],
  },
  automation: {
    title: 'Lead automation flow',
    steps: ['Lead arrives', 'Capture + enrich', 'Qualify', 'Route to CRM', 'Follow up', 'Human handoff'],
  },
  gbp: {
    title: 'GBP optimization architecture',
    steps: ['Eligibility', 'Core category', 'Services', 'Business info', 'Reviews', 'Website + measurement'],
  },
  expert: {
    title: 'PPC management loop',
    steps: ['Business economics', 'Search intent', 'Campaign structure', 'Tracking', 'Landing page', 'Lead quality'],
  },
  campaigns: {
    title: 'Campaign format → job',
    steps: ['Search → active intent', 'PMax → multi-surface automation', 'Shopping → product demand', 'Display → awareness / remarketing', 'Video / Demand Gen → discovery'],
  },
  suspension: {
    title: 'Suspension recovery workflow',
    steps: ['Read notice', 'Identify policy', 'Audit account', 'Fix business / site', 'Document changes', 'Submit factual appeal'],
  },
} as const;

export default function InsightVisual({ kind }: { kind: Kind }) {
  const item = data[kind];
  return (
    <div className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-5 md:p-7 overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="section-label">// VISUAL FRAMEWORK</p>
        <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--rkd-fg-muted)]">R.K Digital Media</span>
      </div>
      <h3 className="font-montserrat font-extrabold text-[var(--rkd-fg)] text-xl md:text-2xl mb-6">{item.title}</h3>
      <div className="grid gap-2 md:grid-cols-3">
        {item.steps.map((step, i) => (
          <div key={step} className="relative min-h-[82px] rounded-lg border border-[var(--rkd-border)] bg-[var(--rkd-bg)] p-4">
            <span className="font-mono text-[10px] text-[var(--rkd-primary)]">{String(i + 1).padStart(2, '0')}</span>
            <p className="mt-2 text-sm font-semibold leading-5 text-[var(--rkd-fg)]">{step}</p>
            {i < item.steps.length - 1 && <span className="hidden md:block absolute -right-2 top-1/2 z-10 w-3 h-px bg-[var(--rkd-primary)]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
