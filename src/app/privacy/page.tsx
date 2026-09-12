import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | R.K Digital Media',
  description: 'Privacy policy for R.K Digital Media. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern fade-in-up">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-4">// LEGAL</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Privacy <span className="text-red-italic">Policy</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="card-base p-8 md:p-12">
            <div className="space-y-8 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
              <div className="fade-in-up-delay-1">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  1. Information We Collect
                </h2>
                <p>We collect information you provide directly: name, email, phone, company, and message content when you submit our contact form or message us on WhatsApp.</p>
                <p>We also collect analytics data via GA4 and server logs: IP address, browser type, pages visited, referral source, and interaction events.</p>
              </div>

              <div className="fade-in-up-delay-2">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  2. How We Use Your Information
                </h2>
                <p>Contact form submissions: to respond to your inquiry, schedule audit calls, and send relevant service information.</p>
                <p>Analytics: to improve our website, understand visitor behavior, and optimize marketing performance.</p>
                <p>We do not sell your data. We do not use your data for unrelated marketing.</p>
              </div>

              <div className="fade-in-up-delay-3">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  3. Data Retention
                </h2>
                <p>Contact form data: retained for 24 months after last interaction, then deleted.</p>
                <p>Analytics data: retained per GA4 defaults (14 months for user data, 26 months for event data).</p>
              </div>

              <div className="fade-in-up-delay-1">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  4. Your Rights
                </h2>
                <p>You may request access, correction, or deletion of your personal data by emailing info@rkdigitalmedia.in.</p>
                <p>You may opt out of analytics tracking via browser settings or GA opt-out add-on.</p>
              </div>

              <div className="fade-in-up-delay-2">
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: '1.3' }}>
                  5. Contact
                </h2>
                <p>R.K Digital Media<br />5th Ave, Gaur City 1, Sector 4<br />Greater Noida, Ghaziabad, UP 201016<br />info@rkdigitalmedia.in</p>
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