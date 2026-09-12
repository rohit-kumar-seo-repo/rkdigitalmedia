import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Case Studies | Results We Ship | R.K Digital Media',
  description: 'Real results from real campaigns. Campaigns, builds, and automation systems that moved real numbers — with the numbers still attached. Verified metrics, referenceable clients.',
  openGraph: {
    title: 'Case Studies | R.K Digital Media',
    description: 'Real results from real campaigns. Campaigns, builds, and automation systems that moved real numbers — with the numbers still attached.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top" className="pt-16">
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 overflow-hidden" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
          
          <div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
            <p className="font-mono text-[var(--color-accent)] text-heading-sm uppercase tracking-wider mb-6" style={{ 
              background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-hover))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              // Case Studies
            </p>
            <h1 className="font-mono font-semibold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}>
              Case Studies
            </h1>
            <p className="text-body-lg text-[var(--color-fg-muted)] max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Real results from real campaigns. Campaigns, builds, and automation systems that moved real numbers — with the numbers still attached.
            </p>
          </div>
        </section>

        <section className="relative py-20 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}>
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <a href="/case-studies/local-seo-domination" className="group block p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-card-hover)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium font-mono uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 rounded-full">LIVE</span>
                    <span className="font-mono text-caption text-[var(--color-fg-subtle)] uppercase tracking-widest">Home Services · Noida</span>
                  </div>
                  <h3 className="font-mono font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.3' }}>
                    Local SEO Domination for Home Services
                  </h3>
                  <p className="text-body text-[var(--color-fg-muted)] mb-4" style={{ lineHeight: '1.7' }}>
                    A home services business with zero digital presence. We built their local SEO engine from scratch — GMB optimization, location pages, review generation, and citation building. Now dominating map pack for 50+ high-intent keywords across Noida & Greater Noida.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">SEO</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">GMB</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Local Citations</span>
                  </div>
                </a>

                <a href="/case-studies/google-ads-recovery" className="group block p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-card-hover)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium font-mono uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 rounded-full">LIVE</span>
                    <span className="font-mono text-caption text-[var(--color-fg-subtle)] uppercase tracking-widest">E-commerce · Delhi NCR</span>
                  </div>
                  <h3 className="font-mono font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.3' }}>
                    Google Ads Suspension Recovery & Scale
                  </h3>
                  <p className="text-body text-[var(--color-fg-muted)] mb-4" style={{ lineHeight: '1.7' }}>
                    Client had their Google Ads account suspended for "policy violations." We diagnosed root causes, rebuilt landing pages, fixed policy issues, and got the account reinstated. Scaled from ₹0 to ₹15L/month spend at 8.5× ROAS within 4 months.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Google Ads</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Suspension Recovery</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Shopping Ads</span>
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <a href="/case-studies/b2b-lead-gen" className="group block p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-card-hover)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium font-mono uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 rounded-full">LIVE</span>
                    <span className="font-mono text-caption text-[var(--color-fg-subtle)] uppercase tracking-widest">Manufacturing · Greater Noida</span>
                  </div>
                  <h3 className="font-mono font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.3' }}>
                    B2B Lead Generation for Industrial Supplier
                  </h3>
                  <p className="text-body text-[var(--color-fg-muted)] mb-4" style={{ lineHeight: '1.7' }}>
                    Industrial B2B supplier needed qualified leads, not traffic. Combined technical SEO for high-intent keywords with LinkedIn Ads targeting decision-makers. Built a lead scoring system in their CRM. 1,200+ SQLs generated, ₹3.8Cr pipeline attributed.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">SEO</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Google Ads</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">LinkedIn Ads</span>
                  </div>
                </a>

                <a href="/case-studies/healthcare-clinic" className="group block p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-card-hover)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium font-mono uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 rounded-full">LIVE</span>
                    <span className="font-mono text-caption text-[var(--color-fg-subtle)] uppercase tracking-widest">Healthcare · Noida & Ghaziabad</span>
                  </div>
                  <h3 className="font-mono font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.3' }}>
                    Multi-Location Clinic Digital Transformation
                  </h3>
                  <p className="text-body text-[var(--color-fg-muted)] mb-4" style={{ lineHeight: '1.7' }}>
                    Dental & skin clinic with 3 locations, no unified digital strategy. Built location-specific landing pages, optimized all 3 GMB profiles, ran geo-targeted Google Ads. 3,500+ appointments booked, 9× ROAS across all locations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">GMB</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Website</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">Google Ads</span>
                    <span className="px-3 py-1 text-caption font-mono uppercase tracking-wider text-[var(--color-fg-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">SEO</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-body-sm font-medium font-mono uppercase tracking-wider text-white bg-[var(--color-accent)] rounded-xl transition-all duration-400 ease-expo hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.5)]">
                View All Case Studies
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}