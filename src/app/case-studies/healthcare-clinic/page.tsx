import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, Zap, ArrowLeft, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Location Clinic Digital Transformation | Case Study | R.K Digital Media',
  description: 'Dental & skin clinic with 3 locations, no unified digital strategy. Built location-specific landing pages, optimized all 3 GMB profiles, ran geo-targeted Google Ads. 3,500+ appointments, 9× ROAS.',
};

export default function HealthcareClinicPage() {
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
            <span className="text-[var(--rkd-fg-subtle)]">Healthcare Clinic</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <span className="badge badge-red">LIVE</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">Healthcare · Noida & Ghaziabad</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">10 months</span>
          </div>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Multi-Location Clinic <span className="text-red-italic">Digital Transformation</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl" style={{ lineHeight: '1.7' }}>
            Dental & skin clinic with 3 locations, no unified digital strategy. Built location-specific landing pages, optimized all 3 GMB profiles, ran geo-targeted Google Ads. 3,500+ appointments booked, 9× ROAS across all locations.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card-base text-center fade-in-up-delay-1">
              <TrendingUp className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">₹85L</div>
              <div className="stat-label">Attributed Revenue</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-2">
              <Target className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">9×</div>
              <div className="stat-label">Peak ROAS</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-3">
              <Users className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">3,500+</div>
              <div className="stat-label">Appointments Booked</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-1">
              <MapPin className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">3</div>
              <div className="stat-label">Locations Optimized</div>
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
                  Fragmented Digital Presence
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Dental & skin clinic chain with 3 locations (Sector 18 Noida, Greater Noida West, Indirapuram Ghaziabad).</p>
                  <p>Each location had separate GMB profiles — unclaimed, incomplete, no reviews. One generic website, no location pages.</p>
                  <p>Running generic Google Ads sending all traffic to homepage. High CPC, low conversion. No call tracking.</p>
                  <p>Competitors (single-location clinics) dominating local search for "dentist near me," "skin clinic Greater Noida."</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// SOLUTION</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Unified Local + Paid Engine
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p><strong>GMB Optimization (×3):</strong> Claimed & optimized all profiles. Service menus, photos, Q&A, posts. Review generation via QR at reception.</p>
                  <p><strong>Location Landing Pages:</strong> 3 dedicated pages with local schema, provider bios, treatment menus, online booking, local testimonials.</p>
                  <p><strong>Geo-Targeted Google Ads:</strong> Separate campaigns per location. Radius targeting 5-8km. Call extensions, location extensions, call tracking.</p>
                  <p><strong>SEO Foundation:</strong> Technical audit, Core Web Vitals, local citations per location, medical schema markup.</p>
                  <p><strong>Creative:</strong> Video testimonials, treatment explainers, provider intros. Used in ads & social.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="card-base fade-in-up-delay-1">
                <p className="section-label mb-4">// RESULTS</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  3,500+ Appointments, 9× ROAS Across All Locations
                </h3>
                <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>All 3 GMB profiles: 4.7-4.9★, 150-200+ reviews each. #1-2 map pack for "dentist + location," "skin clinic + location."</p>
                  <p>Google Ads: ₹12L spend over 10 months. 3,500+ tracked calls & form submissions. 9× blended ROAS. Cost per appointment dropped 55%.</p>
                  <p>Organic: Location pages rank #1-3 for 80+ local keywords. 40% of new patients now from organic search.</p>
                  <p>Website conversion rate: 1.2% → 4.8% (location pages + booking integration).</p>
                  <p>Client quote: "Patients now say 'I found you on Google Maps' instead of 'my friend referred me.' That's the shift."</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// TECH STACK</p>
                <div className="flex flex-wrap gap-3">
                  {['GMB Optimization', 'Google Ads', 'Local SEO', 'Next.js', 'Call Tracking', 'Online Booking'].map((tech) => (
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
            Multi-Location Practice? Invisible on Maps?
          </h2>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto fade-in-up-delay-2" style={{ lineHeight: '1.7' }}>
            Book a 30-minute local visibility audit. We'll check all your locations' GMB profiles, map pack rankings, and ad efficiency — then show you the unified playbook.
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