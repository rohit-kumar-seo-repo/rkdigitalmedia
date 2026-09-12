import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Users, Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Ads Suspension Recovery & Scale | Case Study | R.K Digital Media',
  description: 'How we recovered a suspended Google Ads account and scaled from ₹0 to ₹15L/month at 8.5× ROAS in 4 months. ₹1.2Cr attributed revenue.',
};

export default function GoogleAdsRecoveryPage() {
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
            <span className="text-[var(--rkd-fg-subtle)]">Google Ads Recovery</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <span className="badge badge-red">LIVE</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">E-commerce · Delhi NCR</span>
            <span className="font-mono text-meta text-[var(--rkd-fg-subtle)]">8 months</span>
          </div>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Google Ads Suspension <span className="text-red-italic">Recovery & Scale</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl" style={{ lineHeight: '1.7' }}>
            Client had their Google Ads account suspended for "policy violations." We diagnosed root causes, rebuilt landing pages, fixed policy issues, and got the account reinstated. Scaled from ₹0 to ₹15L/month spend at 8.5× ROAS within 4 months.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card-base text-center fade-in-up-delay-1">
              <TrendingUp className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">₹1.2Cr</div>
              <div className="stat-label">Attributed Revenue</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-2">
              <Target className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">8.5×</div>
              <div className="stat-label">Peak ROAS</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-3">
              <Users className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">15,000+</div>
              <div className="stat-label">Leads Generated</div>
            </div>
            <div className="card-base text-center fade-in-up-delay-1">
              <Zap className="w-6 h-6 text-[var(--rkd-primary)] mx-auto mb-2" aria-hidden="true" />
              <div className="stat-value text-[var(--rkd-primary)]">8</div>
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
                  Account Suspended, Revenue Halted
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>E-commerce brand selling home & kitchen products. Google Ads account suspended for "circumventing systems" and "misrepresentation" — vague policy flags with no clear resolution path.</p>
                  <p>Previous agency couldn't resolve. Account dead for 60+ days. ₹0 revenue from paid channel. Organic couldn't fill the gap.</p>
                  <p>Needed: suspension appeal + full account rebuild + compliant landing pages + scaling strategy.</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// SOLUTION</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  Policy Audit → Rebuild → Scale
                </h3>
                <div className="space-y-4 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p><strong>Policy Audit:</strong> Deep-dive into landing pages, product feed, ad copy, business info. Found 12 policy violations across feed, site, and account settings.</p>
                  <p><strong>Landing Page Rebuild:</strong> New Next.js pages with clear pricing, shipping, returns, contact info, trust signals. Policy-compliant structure.</p>
                  <p><strong>Feed Cleanup:</strong> Fixed GTIN/MPN, pricing accuracy, image quality, shipping attributes. Removed disapproved products.</p>
                  <p><strong>Appeal & Reinstatement:</strong> Structured appeal with evidence. Account reinstated in 11 days.</p>
                  <p><strong>Campaign Architecture:</strong> PMax + Search + Shopping + YouTube. Smart bidding with profit-based targets. Creative testing framework.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="card-base fade-in-up-delay-1">
                <p className="section-label mb-4">// RESULTS</p>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25' }}>
                  From Suspended to ₹15L/Month at 8.5× ROAS
                </h3>
                <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                  <p>Month 1 (post-reinstatement): ₹2L spend, 4.2× ROAS. Proving compliance works.</p>
                  <p>Month 3: ₹8L spend, 6.8× ROAS. Creative winners identified, audience signals trained.</p>
                  <p>Month 4: ₹15L spend, 8.5× ROAS. Profitable scaling with new customer acquisition cost under target.</p>
                  <p>8 months total: ₹1.2Cr attributed revenue. 15,000+ orders. Email/SMS list grew 400%.</p>
                  <p>Client quote: "We thought the account was dead forever. You didn't just fix it — you made it our best channel."</p>
                </div>
              </div>

              <div className="card-base fade-in-up-delay-2">
                <p className="section-label mb-4">// TECH STACK</p>
                <div className="flex flex-wrap gap-3">
                  {['Google Ads', 'Policy Compliance', 'PMax', 'Shopping Ads', 'Next.js', 'GA4/GTM'].map((tech) => (
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
            Suspended Account? Low ROAS?
          </h2>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto fade-in-up-delay-2" style={{ lineHeight: '1.7' }}>
            Book a 30-minute Google Ads audit. We'll diagnose policy risks, account structure, and scaling ceiling — then show you the path to profitable growth.
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