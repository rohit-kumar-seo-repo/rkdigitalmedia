import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO & Search Growth Services | R.K Digital Media Greater Noida',
  description: 'Technical SEO, local SEO, AEO/GEO, and link building engineered for compound organic growth in Greater Noida & NCR. Page 1 rankings in 90 days.',
};

const steps = [
  { num: '01', title: 'Technical Audit', desc: 'Site health, Core Web Vitals, indexing issues, crawl budget, schema gaps — we fix the foundation first.' },
  { num: '02', title: 'Keyword Strategy', desc: 'Commercial + informational intent mapping for Greater Noida. High-intent local + service keywords that convert.' },
  { num: '03', title: 'Content Engine', desc: 'Optimised pages, blogs, location pages, GMB posts. Written for humans, structured for search engines.' },
  { num: '04', title: 'Authority Building', desc: 'Link building, citations, digital PR. DR 30-60 sites, niche-relevant. Monthly momentum.' },
];

const included = [
  'Technical SEO audit + full fix implementation',
  'On-page optimisation for 20+ pages/month',
  'Local SEO: GMB optimisation, citation building, review generation',
  'AEO/GEO: structured data, entity optimisation for AI search (ChatGPT, Perplexity)',
  'Monthly rank tracking report with competitor gap analysis',
  'Backlink building (DR 30-60 sites, niche-relevant)',
  'Content calendar + 4 long-form articles/month',
  'Schema markup: LocalBusiness, Service, FAQ, Article',
];

const stats = [
  { value: '90', label: 'Days to Page 1 (Local)' },
  { value: '200%', label: 'Avg Organic Traffic Increase' },
  { value: '50+', label: 'Map Pack Keywords Per Client' },
];

export default function SEOPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// SERVICE</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            SEO & <span className="text-red-italic">Search Growth</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Technical, content, and local SEO engineered for compound organic growth. AI search (AEO/GEO) readiness built in.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Audit to Authority in <span className="text-red-italic">Four Phases</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-base p-6">
                <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-40">{step.num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// WHAT'S INCLUDED</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Every Engagement Includes
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                <svg className="w-5 h-5 text-[var(--rkd-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-body text-[var(--rkd-fg-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RESULTS YOU CAN EXPECT</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-base text-center p-8">
                <div className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--rkd-fg-muted)] font-outfit">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// READY TO SCALE?</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Let's Audit Your Search Presence
          </h2>
          <a href="/contact" className="btn-primary inline-flex">
            Book Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}