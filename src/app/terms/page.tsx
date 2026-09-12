import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | R.K Digital Media',
  description: 'Terms of service for R.K Digital Media. Governing use of our website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern fade-in-up">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-4">// LEGAL</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Terms of <span className="text-red-italic">Service</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="card-base p-8 md:p-12">
            <div className="space-y-8 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
              <div className="fade-in-up-delay-1">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  1. Acceptance of Terms
                </h2>
                <p>By accessing and using rkdigitalmedia.in, you accept these Terms of Service. If you disagree, please do not use our website.</p>
              </div>

              <div className="fade-in-up-delay-2">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  2. Services
                </h2>
                <p>R.K Digital Media provides digital marketing services including SEO, Google Ads management, GMB optimization, web development, AI automation, creative services, and CRM implementation.</p>
                <p>Specific deliverables, timelines, and pricing are defined in individual proposals and service agreements.</p>
              </div>

              <div className="fade-in-up-delay-3">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  3. Client Responsibilities
                </h2>
                <p>Provide accurate business information, timely feedback, and access to necessary accounts (Google Ads, GMB, analytics, CMS).</p>
                <p>Ensure your business complies with applicable laws and platform policies.</p>
              </div>

              <div className="fade-in-up-delay-1">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  4. Intellectual Property
                </h2>
                <p>All work product, strategies, code, creative assets, and systems developed by R.K Digital Media remain our intellectual property until full payment is received.</p>
                <p>Upon full payment, client receives a perpetual license to use deliverables for their business operations.</p>
              </div>

              <div className="fade-in-up-delay-2">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  5. Confidentiality
                </h2>
                <p>Both parties agree to keep confidential all non-public business information, strategies, data, and trade secrets shared during engagement.</p>
              </div>

              <div className="fade-in-up-delay-3">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  6. Limitation of Liability
                </h2>
                <p>R.K Digital Media is not liable for indirect, incidental, or consequential damages. Maximum liability limited to fees paid in the preceding 12 months.</p>
                <p>We do not guarantee specific rankings, ROAS, or revenue outcomes — we guarantee honest effort, transparent reporting, and proven methodologies.</p>
              </div>

              <div className="fade-in-up-delay-1">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  7. Termination
                </h2>
                <p>Either party may terminate with 30 days' written notice. Outstanding fees for work completed are due immediately.</p>
                <p>We reserve the right to decline or terminate engagements where we cannot ethically or effectively deliver results.</p>
              </div>

              <div className="fade-in-up-delay-2">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  8. Governing Law
                </h2>
                <p>These terms governed by the laws of India. Jurisdiction: Courts at Ghaziabad, Uttar Pradesh.</p>
              </div>

              <div className="pt-8 border-t border-[var(--rkd-border)] fade-in-up-delay-3">
                <p className="text-meta text-[var(--rkd-fg-subtle)]">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}