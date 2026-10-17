import type { Metadata } from 'next';
import BuildersLandingPage from '@/components/BuildersLandingPage';

const pageTitle = 'Google Ads for Real Estate Builders & Developers | R.K Digital Media';
const pageDescription = 'A measurement-led Google Ads approach for real estate builders and developers: project-launch campaigns, buyer-intent search targeting, enquiry tracking and landing-page alignment.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: 'https://rkdigitalmedia.in/google-ads-for-builders' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://rkdigitalmedia.in/google-ads-for-builders',
    siteName: 'R.K Digital Media',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Google Ads for real estate builders and developers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/og-image.jpg'],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rkdigitalmedia.in/' },
        { '@type': 'ListItem', position: 2, name: 'Google Ads for Builders', item: 'https://rkdigitalmedia.in/google-ads-for-builders' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Google Ads for Real Estate Builders and Developers',
      serviceType: 'Google Ads campaign strategy, management and conversion measurement',
      provider: { '@type': 'Organization', name: 'R.K Digital Media', url: 'https://rkdigitalmedia.in/' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://rkdigitalmedia.in/google-ads-for-builders',
      description: pageDescription,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BuildersLandingPage />
    </>
  );
}
