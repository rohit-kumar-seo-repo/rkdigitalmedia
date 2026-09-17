import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Expert in Delhi: Certified Specialist for Business Growth | R.K Digital Media',
  description: 'Certified Google Ads Expert in Delhi offering search, shopping, and PPC management services. 8.5x ROAS, suspension recovery, and campaign optimization. Google Partner certified agency serving Delhi NCR businesses.',
  keywords: ['Google Ads Expert in Delhi', 'Google Ads expert Delhi', 'Google Ads specialist Delhi', 'PPC expert Delhi', 'Certified Google Ads professional Delhi', 'Google Ads consultant Delhi', 'best Google Ads expert Delhi'],
  openGraph: {
    title: 'Google Ads Expert in Delhi: Certified Specialist for Business Growth | R.K Digital Media',
    description: 'Certified Google Ads Expert in Delhi offering search, shopping, and PPC management services. 8.5x ROAS, suspension recovery, and campaign optimization. Google Partner certified agency serving Delhi NCR businesses.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/google-ads-expert-delhi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Expert in Delhi | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Expert in Delhi: Certified Specialist for Business Growth | R.K Digital Media',
    description: 'Certified Google Ads Expert in Delhi offering search, shopping, and PPC management services.',
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
            Google Ads Expert in Delhi
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Certified specialist helping Delhi businesses achieve 8.5x ROAS with targeted Google Ads campaigns.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Why Choose a Certified Google Ads Expert in Delhi?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">Google Certification</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li>Google Ads Search Certification</li>
                  <li>Google Ads Display Certification</li>
                  <li>Google Ads Video Certification</li>
                  <li>Google Ads Shopping Certification</li>
                  <li>Google Ads Measurement Certification</li>
                </ul>
                <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-3 mt-4">
                  <strong>Verified Status:</strong> Google Partner certified agency with specializations in Search, Shopping, and Video
                </p>
              </div>

              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">Delhi Market Advantage</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li>Deep understanding of Delhi business landscape</li>
                  <li>Targeted campaigns for diverse industries in Delhi NCR</li>
                  <li>Optimization for local and national market</li>
                  <li>Cost-effective PPC management for businesses of all sizes</li>
                  <li>ROI-focused campaign structure with detailed analytics</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                8.5x ROAS · Google Partner · Delhi Specialist
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