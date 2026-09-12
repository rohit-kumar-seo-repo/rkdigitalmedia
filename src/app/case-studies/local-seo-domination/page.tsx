import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local SEO Domination for Home Services | Case Study | R.K Digital Media',
  description: 'How a home services business went from zero digital presence to dominating the map pack for 50+ high-intent keywords across Noida & Greater Noida. ₹45L+ attributed revenue, 12× ROAS.',
};

export default function LocalSEODominationPage() {
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
            <span className="text-[var(--rkd-fg-subtle)]">Local SEO Domination</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <span className="badge badge-red">LIVE</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">Home Services · Noida</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">12 months</span>
          </div>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Local SEO Domination <span className="text-red-italic">for Home Services</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl" style={{ lineHeight: '1.7' }}>
            A home services business with zero digital presence. We built their local SEO engine from scratch — GMB optimization, location pages, review generation, and citation building. Now dominating map pack for 50+ high-intent keywords across Noida & Greater Noida.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card-base text-center fade-in-up-delay-1">
              <TrendingUp className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">₹45L+</div>
              <div className="stat-label">Attributed Revenue</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-2">
              <Target className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">12×</div>
              <div className="stat-label">Peak ROAS</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-3">
              <Users className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">2,800+</div>
              <div className="stat-label">Leads Generated</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-1">
              <Zap className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">12</div>
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
                  Zero Digital Presence
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Established home services business (plumbing, electrical, AC repair) operating for 15+ years in Noida/Greater Noida with strong word-of-mouth but zero digital footprint.</p>
                  <p>No website, unclaimed GMB, no citations, no review strategy. Invisible on Google Maps for "plumber near me," "AC repair Noida," "electrician Greater Noida" — 50+ high-intent keywords.</p>
                  <p>Competitors with inferior service quality were capturing all digital demand.</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// SOLUTION</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Full Local SEO Engine
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p><strong>GMB Optimization:</strong> Claimed & optimized profile with services, areas, photos, Q&A, posts. Review generation system (QR cards, SMS follow-up).</p>
                  <p><strong>Location Pages:</strong> 12 service-area pages targeting "service + locality" keywords with schema markup, FAQs, and local content.</p>
                  <p><strong>Citation Building:</strong> 200+ niche & local citations with NAP consistency. Industry directories, local chambers, supplier listings.</p>
                  <p><strong>Review Engine:</strong> Automated review requests post-job. Response templates for 5-star & negative reviews. 4.9★ average achieved.</p>
                  <p><strong>Technical SEO:</strong> Site speed, mobile UX, Core Web Vitals, structured data for LocalBusiness, Service, FAQ.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="card-base fade-in-up-delay-1">
                <p className="section-label mb-4">// RESULTS</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Map Pack Domination in 6 Months
                </h3>
                <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Within 6 months: #1-3 map pack positions for 50+ "service + location" keywords across Noida, Greater Noida, Ghaziabad sectors.</p>
                  <p>GMB profile: 4.9★ from 340+ reviews (was 0). 15,000+ monthly profile views. 2,800+ direct calls & direction requests from Maps.</p>
                  <p>Website organic traffic: 0 → 8,500+/month. 65% of leads now from organic search (was 0%).</p>
                  <p>Attributed revenue: ₹45L+ in 12 months. Peak ROAS: 12× on organic channel (zero ad spend).</p>
                  <p>Client quote: "We used to wait for the phone to ring. Now we choose which jobs to take."</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// TECH STACK</p>
                <div className="flex flex-wrap gap-3">
                  {['Technical SEO', 'GMB Optimization', 'Review Automation', 'Local Citations', 'Schema Markup', 'Content Strategy'].map((tech) => (
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
            Want Your Business On The Map?
          </h2>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto fade-in-up-delay-2" style={{ lineHeight: '1.7' }}>
            Book a 30-minute local SEO audit. We'll check your current GMB, citations, and map pack positions — then show you exactly how to dominate.
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