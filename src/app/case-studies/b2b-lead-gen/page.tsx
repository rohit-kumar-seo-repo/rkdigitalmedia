import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'B2B Lead Generation for Industrial Supplier | Case Study | R.K Digital Media',
  description: 'How an industrial B2B supplier generated 1,200+ SQLs and ₹3.8Cr pipeline through SEO, Google Ads, and LinkedIn Ads targeting decision-makers. 6× ROAS over 18 months.',
};

export default function B2BLeadGenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-[var(--rkd-bg)] grid-pattern fade-in-up">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/case-studies" className="link-primary group text-body-sm">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to Case Studies
            </Link>
            <span className="text-[var(--rkd-fg-subtle)]">/</span>
            <span className="text-[var(--rkd-fg-subtle)]">B2B Lead Generation</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <span className="badge badge-red">LIVE</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">Manufacturing · Greater Noida</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">18 months</span>
          </div>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            B2B Lead Generation <span className="text-red-italic">for Industrial Supplier</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl" style={{ lineHeight: '1.7' }}>
            Industrial B2B supplier needed qualified leads, not traffic. Combined technical SEO for high-intent keywords with LinkedIn Ads targeting decision-makers. Built a lead scoring system in their CRM. 1,200+ SQLs generated, ₹3.8Cr pipeline attributed.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card-base text-center fade-in-up-delay-1">
              <TrendingUp className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">₹3.8Cr</div>
              <div className="stat-label">Pipeline Attributed</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-2">
              <Target className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">6×</div>
              <div className="stat-label">Peak ROAS</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-3">
              <Users className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">1,200+</div>
              <div className="stat-label">SQLs Generated</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-1">
              <Zap className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">18</div>
              <div className="stat-label">Months Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Results */}
      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-8">
              <div className="card-base fade-in-up-delay-1">
                <p className="section-label mb-4">// CHALLENGE</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Traffic ≠ Qualified Leads
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Industrial supplier of valves, fittings, and piping solutions. Website got traffic but {'<1%'} converted to sales conversations.</p>
                  <p>Previous agency focused on vanity keywords ("valve manufacturer") instead of buying-intent terms ("3-inch ball valve price Delhi NCR").</p>
                  <p>No CRM, no lead scoring, sales team wasting hours on unqualified inquiries.</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// SOLUTION</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Intent-First Search + LinkedIn ABM
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p><strong>Technical SEO:</strong> 200+ product-category pages targeting long-tail buying keywords with specs, pricing tiers, and RFQ forms.</p>
                  <p><strong>Google Ads:</strong> Search campaigns on high-intent SKU-level keywords. Negative keyword library 500+ terms.</p>
                  <p><strong>LinkedIn Ads:</strong> ABM targeting procurement managers, plant heads, MRO buyers at target accounts. Lead gen forms + retargeting.</p>
                  <p><strong>CRM + Scoring:</strong> GoHighLevel setup with lead scoring (firmographic + behavioral). Auto-routing to right sales rep.</p>
                  <p><strong>Content:</strong> Technical guides, comparison sheets, case studies for each vertical (oil & gas, pharma, water treatment).</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="card-base fade-in-up-delay-1">
                <p className="section-label mb-4">// RESULTS</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  1,200+ SQLs, ₹3.8Cr Pipeline in 18 Months
                </h3>
                <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Organic: 400+ SQLs from high-intent product pages. Zero ad spend on these.</p>
                  <p>Google Ads: 500+ SQLs at 7.2× ROAS. Cost per SQL dropped 60% YoY through optimization.</p>
                  <p>LinkedIn: 300+ SQLs from target accounts. 25% meeting-to-opportunity rate.</p>
                  <p>Sales cycle shortened 40% — reps now get pre-qualified specs and budget info before first call.</p>
                  <p>Client quote: "First time our sales team complains about too many good leads instead of too few."</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// TECH STACK</p>
                <div className="flex flex-wrap gap-3">
                  {['Technical SEO', 'Google Ads', 'LinkedIn Ads', 'GoHighLevel', 'Lead Scoring', 'ABM Strategy'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-meta font-mono uppercase tracking-wider text-[var(--rkd-fg-muted)] bg-[var(--rkd-bg-secondary)] border border-[var(--rkd-border)] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-4 fade-in-up">// NEXT STEP</p>
          <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8 fade-in-up-delay-1" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
            Need Qualified B2B Leads?
          </h2>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto fade-in-up-delay-2" style={{ lineHeight: '1.7' }}>
            Book a 30-minute B2B growth audit. We'll map your buyer journey, identify intent keywords, and show you how to fill your pipeline with SQLs — not traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-3">
            <a href="/contact" className="btn-primary group">
              Book Free Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="/case-studies" className="btn-secondary group">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              All Case Studies
            </a>
          </div>
        </div>
      </section>
    </>
  );
}