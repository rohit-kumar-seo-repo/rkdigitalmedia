import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Suspension Recovery: Legacy Guide | R.K Digital Media',
  description: 'Legacy Google Ads suspension recovery guide. For current guidance, use the practical account review and appeal guide on this site.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://rkdigitalmedia.in/insights/google-ads-suspension-recovery-guide' },
  keywords: ['Google Ads suspended account recovery', 'Google Ads policy violation appeal', 'circumventing systems suspension fix', 'Google Ads reinstatement process'],
  openGraph: {
    title: 'Google Ads Suspension Recovery: Legacy Guide | R.K Digital Media',
    description: 'Step-by-step suspension recovery process: policy audit, landing page fixes, appeal templates, and post-reinstatement scaling. Used by 100+ accounts. Google Partner certified agency.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/google-ads-suspension-recovery-guide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Suspension Recovery Guide | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Suspension Recovery: Legacy Guide | R.K Digital Media',
    description: 'Step-by-step suspension recovery process: policy audit, landing page fixes, appeal templates, and post-reinstatement scaling. Used by 100+ accounts.',
    images: ['/og-image.jpg'],
  },
};

export default function PostPage() {
  return (
    <>

      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Google Ads Suspension Recovery
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Legacy guide. Recovery outcomes and timelines depend on the account, policy issue and Google's review; no reinstatement outcome is guaranteed.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Complete Recovery Process
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-[var(--rkd-fg-muted)] leading-relaxed">
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>1. Policy Audit</strong>
                </p>
                <p>
                  Full audit of your account structure, campaigns, keywords, match types,
                  extensions, bidding strategies, tracking setup, and policy compliance.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>2. Landing Page Fixes</strong>
                </p>
                <p>
                  Identify and fix policy violations on landing pages: misrepresentation,
                  circumventing systems, prohibited content, and consent requirements.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>3. Appeal Templates</strong>
                </p>
                <p>
                  Prepare documented appeal templates with correct legal language, evidence,
                  and step-by-step reinstatement requests submitted to Google Ads support.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>4. Post-Reinstatement Scaling</strong>
                </p>
                <p>
                  Once the account is restored: gradual budget ramp-up, conversion tracking
                  verification, audience expansion, and ROAS optimization to prevent re-suspension.
                </p>
              </li>
            </ol>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                Recovery depends on the policy issue, evidence, remediation and Google's review. No outcome or timeline is guaranteed.
              </p>
              <a href="/contact" className="btn-primary inline-flex mt-4">
                Book Free Audit
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5v7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}