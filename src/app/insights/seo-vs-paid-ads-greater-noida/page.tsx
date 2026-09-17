import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO vs Paid Ads for Greater Noida Businesses: Which Wins in 2025? | R.K Digital Media',
  description: 'Compare SEO and Google Ads for local service businesses in Greater Noida. Real data on CAC, LTV, time-to-results, and when to use each channel. Digital marketing ROI analysis.',
  keywords: ['SEO vs PPC Greater Noida', 'SEO or Google Ads for local business', 'organic vs paid search', 'digital marketing ROI', 'SEO vs Google Ads Greater Noida', 'local business marketing SEO vs PPC'],
  openGraph: {
    title: 'SEO vs Paid Ads for Greater Noida Businesses: Which Wins in 2025? | R.K Digital Media',
    description: 'Compare SEO and Google Ads for local service businesses in Greater Noida. Real data on CAC, LTV, time-to-results, and when to use each channel.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/seo-vs-paid-ads-2025-which-wins',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO vs Paid Ads Comparison | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO vs Paid Ads for Greater Noida Businesses: Which Wins in 2025? | R.K Digital Media',
    description: 'Compare SEO and Google Ads for local service businesses in Greater Noida. Real data on CAC, LTV, time-to-results.',
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
            SEO vs Paid Ads
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Real data on which channel wins for Greater Noida businesses in 2025.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Head-to-Head Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">SEO (Organic)</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li><strong>Time to Results:</strong> 3-6 months for Map Pack, 6-12 months for organic rankings</li>
                  <li><strong>Cost:</strong> One-time setup + ongoing maintenance (no per-click cost)</li>
                  <li><strong>LTV Impact:</strong> High — compound traffic growth over time</li>
                  <li><strong>Credibility:</strong> Higher trust — users skip ads</li>
                  <li><strong>Sustainability:</strong> Assets you own; no platform dependency</li>
                </ul>
              </div>

              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">Google Ads (Paid)</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li><strong>Time to Results:</strong> Leads in 24-48 hours</li>
                  <li><strong>Cost:</strong> Per-click; ₹50K-₹1Cr+ monthly ad spend + management fee</li>
                  <li><strong>LTV Impact:</strong> Immediate but stops when budget stops</li>
                  <li><strong>Credibility:</strong> Some users trust less (ad label)</li>
                  <li><strong>Sustainability:</strong> Rental model — stops when you stop paying</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-4">
                The Real Winner: Depends on your goals
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-montserrat font-semibold mb-2">Choose SEO When:</p>
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                    <li>Long-term brand building</li>
                    <li>Limited ongoing ad budget</li>
                    <li>Want compounding ROI</li>
                    <li>High customer LTV</li>
                  </ul>
                </div>
                <div>
                  <p className="font-montserrat font-semibold mb-2">Choose Google Ads When:</p>
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                    <li>Need leads immediately</li>
                    <li>Testing new markets/services</li>
                    <li>High seasonal demand</li>
                    <li>Have budget for testing</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--rkd-border)]">
                <p className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">
                  Best Strategy: SEO + Google Ads Combined
                </p>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                  <li>Use Ads for immediate leads while SEO builds</li>
                  <li>Keyword data from Ads informs SEO content</li>
                  <li>Remarketing: Ad visitors → SEO retargeting</li>
                  <li>Dominate SERP: Own both organic & paid space</li>
                  <li>8.5× ROAS peak with proper PMax + SEO synergy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}