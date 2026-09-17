import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Type of Google Ads Campaigns: Which One Is Right for Your Business? | R.K Digital Media',
  description: 'Complete guide to types of Google Ads campaigns: Search, Display, Shopping, Video, and PMax. Statistics, pros & cons, and which campaign type works best for different business goals. Google Certified breakdown.',
  keywords: ['type of Google Ads campaigns', 'Google Ads campaign types', 'Search vs Display vs Shopping Google Ads', 'Google PMax campaign', 'Google Ads campaign selection guide', 'best Google Ads campaign type for small business'],
  openGraph: {
    title: 'Type of Google Ads Campaigns: Which One Is Right for Your Business? | R.K Digital Media',
    description: 'Complete guide to types of Google Ads campaigns: Search, Display, Shopping, Video, and PMax. Statistics, pros & cons, and which campaign type works best for different business goals. Google Certified breakdown.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/google-ads-campaign-types',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Type of Google Ads Campaigns | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type of Google Ads Campaigns: Which One Is Right for Your Business? | R.K Digital Media',
    description: 'Complete guide to types of Google Ads campaigns: Search, Display, Shopping, Video, and PMax. Statistics, pros & cons.',
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
            Type of Google Ads Campaigns
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Which campaign type is right for your business goals and budget.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Complete Guide to Google Ads Campaign Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">1. Search Campaigns</h3>
                <p>
                  <img src="/images/search-campaigns.svg" alt="Search campaign illustration" className="w-full mb-4 rounded-lg" />
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                    <li><strong>Best for:</strong> Lead generation, direct responses</li>
                    <li><strong>Ad format:</strong> Text ads on Google Search results</li>
                    <li><strong>Average CTR:</strong> 3.17% across industries</li>
                    <li><strong>Average CPC:</strong> ₹15-₹100+ depending on industry</li>
                    <li><strong>Best for:</strong> Local businesses, service companies, high-intent buyers</li>
                  </ul>
                </p>
              </div>

              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">2. Display Campaigns</h3>
                <p>
                  <img src="/images/display-campaigns.svg" alt="Display campaign illustration" className="w-full mb-4 rounded-lg" />
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                    <li><strong>Best for:</strong> Brand awareness, retargeting</li>
                    <li><strong>Ad format:</strong> Image/banner ads on Google Display Network</li>
                    <li><strong>Average CTR:</strong> 0.44% across industries</li>
                    <li><strong>Average CPM:</strong> ₹200-₹1000 depending on placement</li>
                    <li><strong>Best for:</strong> Brand awareness, retargeting, visual products</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">3. Shopping Campaigns</h3>
                <p>
                  <img src="/images/shopping-campaigns.svg" alt="Shopping campaign illustration" className="w-full mb-4 rounded-lg" />
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                    <li><strong>Best for:</strong> E-commerce product sales</li>
                    <li><strong>Ad format:</strong> Product listings in Google Shopping</li>
                    <li><strong>Average CPC:</strong> ₹40-₹200 depending on product niche</li>
                    <li><strong>Best for:</strong> Online stores, retail, product-based businesses</li>
                    <li><strong>Includes:</strong> Product image, price, store name in ads</li>
                  </ul>
                </p>
              </div>

              <div className="card-base p-6">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">4. Video Campaigns</h3>
                <p>
                  <img src="/images/video-campaigns.svg" alt="Video campaign illustration" className="w-full mb-4 rounded-lg" />
                  <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                    <li><strong>Best for:</strong> Brand awareness, video marketing</li>
                    <li><strong>Ad format:</strong> Ads on YouTube and Google Video Partner sites</li>
                    <li><strong>Average CPV:</strong> ₹0.10-₹0.30 per view</li>
                    <li><strong>Best for:</strong> Brand awareness, product demos, tutorial content</li>
                    <li><strong>Includes:</strong> In-stream, discovery, bumper ads</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
            <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-4">5. Performance Max (PMax) Campaigns</h3>
            <p>
              <img src="/images/pmax-campaigns.svg" alt="PMax campaign illustration" className="w-full mb-4 rounded-lg" />
              <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-3">
                <li><strong>Best for:</strong> Maximum conversion value across all Google channels</li>
                <li><strong>Ad format:</strong> Auto-optimized ads across Search, Display, YouTube, Discover, Gmail</li>
                <li><strong>Average ROAS:</strong> 8.5x typical for well-optimized campaigns</li>
                <li><strong>Best for:</strong> businesses wanting automated multi-channel presence</li>
                <li><strong>Requires:</strong> Asset groups, audience signals, feed optimization</li>
              </ul>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
            <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
              Google Certified · Campaign Analysis · ROI Focused
            </p>
            <a href="/contact" className="btn-primary inline-flex mt-4">
              Book Free Audit
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5v7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}