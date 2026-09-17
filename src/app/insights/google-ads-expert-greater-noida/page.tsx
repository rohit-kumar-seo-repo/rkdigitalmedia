import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Expert in Greater Noida: Certified Specialist for Business Growth | R.K Digital Media',
  description: 'Certified Google Ads Expert in Greater Noida offering search, shopping, and PPC management services. 8.5x ROAS, suspension recovery, and campaign optimization. Google Partner certified agency serving Noida, Greater Noida, and Delhi NCR businesses.',
  keywords: ['Google Ads Expert in Greater Noida', 'Google Ads expert Greater Noida', 'Google Ads specialist Greater Noida', 'PPC expert Greater Noida', 'Certified Google Ads professional Greater Noida', 'Google Ads consultant Greater Noida', 'best Google Ads expert Greater Noida'],
  openGraph: {
    title: 'Google Ads Expert in Greater Noida: Certified Specialist for Business Growth | R.K Digital Media',
    description: 'Certified Google Ads Expert in Greater Noida offering search, shopping, and PPC management services. 8.5x ROAS, suspension recovery, and campaign optimization. Google Partner certified agency serving Noida, Greater Noida, and Delhi NCR businesses.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/google-ads-expert-greater-noida',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Expert in Greater Noida | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Expert in Greater Noida: Certified Specialist for Business Growth | R.K Digital Media',
    description: 'Certified Google Ads Expert in Greater Noida offering search, shopping, and PPC management services.',
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
            Google Ads Expert in Greater Noida
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Certified specialist helping Greater Noida businesses achieve 8.5x ROAS with targeted Google Ads campaigns.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Why Choose a Certified Google Ads Expert in Greater Noida?
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
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">Greater Noida Market Advantage</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li>Deep understanding of Greater Noida business landscape</li>
                  <li>Targeted campaigns for local service businesses in the region</li>
                  <li>Optimization for NCR and Delhi market proximity</li>
                  <li>Cost-effective PPC management for growing businesses</li>
                  <li>ROI-focused campaign structure with detailed analytics</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                8.5x ROAS · Google Partner · Greater Noida Specialist
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