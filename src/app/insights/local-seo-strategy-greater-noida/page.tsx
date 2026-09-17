import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Strategy for Greater Noida: Rank Page 1 in 90 Days | R.K Digital Media',
  description: 'Technical SEO, GMB optimization, citations, content, and link building for Greater Noida service businesses. Exact framework we use for 50+ Map Pack keywords. Local SEO services Greater Noida.',
  keywords: ['local SEO Greater Noida', 'SEO services Greater Noida', 'Map Pack optimization', 'local business SEO strategy', 'Greater Noida local SEO', 'Map Pack ranking factors'],
  openGraph: {
    title: 'Local SEO Strategy for Greater Noida: Rank Page 1 in 90 Days | R.K Digital Media',
    description: 'Technical SEO, GMB optimization, citations, content, and link building for Greater Noida service businesses.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/local-seo-strategy-greater-noida',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Local SEO Strategy Greater Noida | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Strategy for Greater Noida: Rank Page 1 in 90 Days | R.K Digital Media',
    description: 'Technical SEO, GMB optimization, citations, content, and link building for Greater Noida service businesses.',
    images: ['/og-image.jpg'],
  },
};

const sectionImages = {
  'Days 1-10: Technical Audit & GMB Setup': '/technical-audit.svg',
  'Days 11-30: Citation Building & Content': '/citation-building.svg',
  'Days 31-60: Map Pack Push': '/map-pack-push.svg',
  'Days 61-90: Rank & Scale': '/rank-scaling.svg',
};

export default function PostPage() {
  return (
    <>

      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Local SEO Strategy
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Rank page 1 in Greater Noida Map Pack within 90 days using our proven framework.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Our 90-Day Framework
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-[var(--rkd-fg-muted)] leading-relaxed">
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>Days 1-10: Technical Audit & GMB Setup</strong>
                </p>
                <p>
                  <img src="/images/technical-audit.svg" alt="Technical SEO audit illustration" className="w-full mb-4 rounded-lg" />
                  Technical SEO audit: site speed, mobile-friendliness, structured data.
                  Complete GMB optimization: categories, attributes, description, services
                  menu, geo-tagged photos, and initial review generation setup.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>Days 11-30: Citation Building & Content</strong>
                </p>
                <p>
                  <img src="/images/citation-building.svg" alt="Citation building illustration" className="w-full mb-4 rounded-lg" />
                  Consistent NAP citations across 50+ directories. Content engine launch:
                  3 blog posts + service page updates with local keywords. Link building
                  outreach to local businesses and industry directories.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>Days 31-60: Map Pack Push</strong>
                </p>
                <p>
                  <img src="/images/map-pack-push.svg" alt="Map pack ranking illustration" className="w-full mb-4 rounded-lg" />
                  Review generation campaign (QR codes, SMS, email). GMB posts weekly.
                  Local link building from Greater Noida/NCR businesses. On-page optimization
                  for 50+ target Map Pack keywords.
                </p>
              </li>
              <li>
                <p className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-2">
                  <strong>Days 61-90: Rank & Scale</strong>
                </p>
                <p>
                  <img src="/images/rank-scaling.svg" alt="Rank tracking and reporting illustration" className="w-full mb-4 rounded-lg" />
                  Monthly rank grid tracking (5km-20km radius). Map Pack position reporting.
                  Additional citation cleanup. Expansion to secondary keywords. Client
                  dashboard setup with weekly performance reports.
                </p>
              </li>
            </ol>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                50+ Map Pack Keywords · 90-Day Guaranteed Movement · NAP Consistency
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