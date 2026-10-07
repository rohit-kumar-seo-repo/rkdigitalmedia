import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, MotionHover } from '@/components/motion/MotionReveal';

export type CaseStudyMetric = { value: string; label: string };
export type CaseStudy = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  meta: string[];
  metrics: CaseStudyMetric[];
  problemTitle: string;
  problem: string[];
  solutionTitle: string;
  solution: string[];
  resultsTitle: string;
  results: string[];
  stack: string[];
  ctaTitle: string;
  ctaText: string;
  ctaHref?: string;
};

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className="rkd-case-study">
      <section className="relative overflow-hidden bg-[var(--rkd-bg)] border-b border-[var(--rkd-border)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_30%,rgba(232,40,43,0.12),transparent_34%)]" />
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-16 md:pb-24 relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--rkd-primary)] hover:text-[var(--rkd-fg)] transition-colors mb-16">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-20 items-end">
            <div>
              <div className="flex flex-wrap gap-3 mb-7">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-primary)] border border-[var(--rkd-primary)]/50 rounded-full px-3 py-1.5">{study.eyebrow}</span>
                {study.meta.map(item => <span key={item} className="font-mono text-[10px] uppercase tracking-widest text-[var(--rkd-fg-muted)] py-1.5">{item}</span>)}
              </div>
              <h1 className="hero-headline text-[var(--rkd-fg)] max-w-5xl">{study.title} <span className="text-red-italic">{study.accent}</span></h1>
            </div>
            <div>
              <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-xl">{study.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--rkd-card)] border-b border-[var(--rkd-border)]">
        <Stagger className="max-w-[80rem] mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4">
          {study.metrics.map((metric, i) => (
            <div key={metric.label} className={`py-8 md:py-10 pr-5 md:pr-10 ${i < study.metrics.length - 1 ? 'lg:border-r border-[var(--rkd-border)]' : ''} ${i > 1 ? 'border-t lg:border-t-0 border-[var(--rkd-border)]' : ''}`}>
              <div className="font-montserrat font-black text-4xl md:text-5xl text-[var(--rkd-primary)] tracking-tight">{metric.value}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--rkd-fg-muted)] mt-3">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <Reveal y={30} className="overflow-hidden rounded-2xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] shadow-2xl">
            <img src="/images/case-study-proof.svg" alt="Case study evidence framework showing problem, intervention and documented outcome." width="1600" height="760" loading="lazy" className="block w-full h-auto" />
            <figcaption className="px-4 py-3 border-t border-[var(--rkd-border)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--rkd-fg-muted)]">Evidence framework · R.K Digital Media</figcaption>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="section-label mb-4">// 01. THE PROBLEM</p>
              <h2 className="section-heading section-heading-h2">{study.problemTitle}</h2>
            </div>
            <div className="space-y-6 text-[var(--rkd-fg-muted)] text-body leading-relaxed">
              {study.problem.map((item, i) => <p key={i}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="section-label mb-4">// 02. THE INTERVENTION</p>
              <h2 className="section-heading section-heading-h2">{study.solutionTitle}</h2>
            </div>
            <div className="space-y-6">
              {study.solution.map((item, i) => <div key={i} className="border-t border-[var(--rkd-border)] pt-5 text-[var(--rkd-fg-muted)] text-body leading-relaxed"><span className="font-mono text-[10px] text-[var(--rkd-primary)] mr-3">0{i+1}</span>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="section-label mb-4">// 03. THE OUTCOME</p>
              <h2 className="section-heading section-heading-h2">{study.resultsTitle}</h2>
            </div>
            <div className="space-y-6 text-[var(--rkd-fg-muted)] text-body leading-relaxed">
              {study.results.map((item, i) => <p key={i}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div><p className="section-label mb-3">// IMPLEMENTATION</p><p className="text-sm text-[var(--rkd-fg-muted)]">Platforms, systems and disciplines used in this project.</p></div>
            <div className="flex flex-wrap gap-2">{study.stack.map(item => <span key={item} className="px-3 py-1.5 border border-[var(--rkd-border)] rounded-full font-mono text-[10px] uppercase tracking-wider text-[var(--rkd-fg-muted)]">{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <p className="section-label mb-5">// NEXT STEP</p>
            <h2 className="section-heading section-heading-h2 mb-6">{study.ctaTitle}</h2>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] leading-relaxed max-w-2xl mb-8">{study.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={study.ctaHref ?? "/contact"} className="btn-primary group">Explore Recovery Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              <Link href="/case-studies" className="btn-secondary">All Case Studies <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
