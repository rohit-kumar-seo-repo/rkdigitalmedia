import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'FAQ | R.K Digital Media',
  description: 'Frequently asked questions about our services, process, pricing, and how we work. Get quick answers before you reach out.',
  openGraph: {
    title: 'FAQ | R.K Digital Media',
    description: 'Frequently asked questions about our services, process, pricing, and how we work.',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you work with businesses outside Greater Noida?',
    a: 'Yes — we serve clients across Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram, and Delhi. For businesses outside NCR, we evaluate fit on a case-by-case basis.',
  },
  {
    q: 'What\'s the minimum commitment?',
    a: 'No long-term lock-ins. Most engagements start with a 3-month pilot so both sides can validate the partnership. After that, month-to-month with 30-day notice.',
  },
  {
    q: 'Can you recover a suspended Google Ads account?',
    a: 'Yes — this is a specialty. We diagnose root causes (policy, landing page, trust signals), fix them, and manage the appeal. Success rate is high for legitimate businesses.',
  },
  {
    q: 'How do you report results?',
    a: 'Live dashboard access + monthly Loom walkthrough + written summary. You see rankings, spend, leads, conversions, ROI — everything. No vanity metrics.',
  },
  {
    q: 'Do you build websites from scratch?',
    a: 'Yes — Next.js, WordPress, or Webflow. Performance-tuned, CRO-focused, SEO-ready from day one. We also redesign and migrate existing sites.',
  },
  {
    q: 'What\'s your typical response time?',
    a: 'Founder reads every inbound. Reply within 4 business hours with either a booking link or an honest "not a fit" referral. WhatsApp is fastest.',
  },
  {
    q: 'Do you offer AI automation for small businesses?',
    a: 'Yes — we scale AI automation to any size. Chatbots, WhatsApp automation, and lead qualification can start small and grow with you.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Pricing depends on scope. We don\'t do generic packages. After a discovery call, you get a scoped proposal with clear deliverables and pricing.',
  },
  {
    q: 'Can you help with Google Business Profile optimization?',
    a: 'Yes — GMB optimization is a core service. We handle profile setup, review management, posts, citations, and local SEO for map pack domination.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across Healthcare, E-commerce, Real Estate, Education, Hospitality, Manufacturing, Professional Services, and Home Services.',
  },
];

export default function FAQPage() {
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
              // FAQ
            </p>
            <h1 className="font-mono font-semibold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
            }}>
              Frequently Asked Questions
            </h1>
            <p className="text-body-lg text-[var(--color-fg-muted)] max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Quick answers to common questions. If yours isn\'t here, just ask on the contact form.
            </p>
          </div>
        </section>

        <section className="relative py-20 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}>
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <p className="font-mono text-[var(--color-fg-subtle)] text-caption uppercase tracking-widest mb-4 text-center">// FAQ</p>
            <h2 className="font-mono font-semibold text-[var(--color-fg)] mb-12 text-center" style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '1.25',
            }}>
              Before You Send It — Quick Answers
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-8 transition-all duration-500 ease-expo hover:bg-[var(--color-card-hover)] hover:border-[var(--color-border-hover)] hover:shadow-xl">
                  <h4 className="font-mono font-semibold text-[var(--color-fg)] mb-3" style={{
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.4',
                  }}>
                    {faq.q}
                  </h4>
                  <p className="text-body-sm text-[var(--color-fg-muted)]" style={{ lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-body-sm font-medium font-mono uppercase tracking-wider text-white bg-[var(--color-accent)] rounded-xl transition-all duration-400 ease-expo hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.5)]">
                Still Have Questions?
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