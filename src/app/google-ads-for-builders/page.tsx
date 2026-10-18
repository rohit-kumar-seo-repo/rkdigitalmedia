import type { Metadata } from 'next';
import BuildersLandingPage from '@/components/BuildersLandingPage';
import type { CityData } from '@/components/BuildersBuyerMap';
import mumbai from '../../../public/builders-sample-mumbai.json';
import pune from '../../../public/builders-sample-pune.json';
import bengaluru from '../../../public/builders-sample-bengaluru.json';
import hyderabad from '../../../public/builders-sample-hyderabad.json';
import chennai from '../../../public/builders-sample-chennai.json';
import ahmedabad from '../../../public/builders-sample-ahmedabad.json';
import delhiNcr from '../../../public/builders-sample-delhi-ncr.json';

const cityData = { mumbai, pune, bengaluru, hyderabad, chennai, ahmedabad, 'delhi-ncr': delhiNcr } as unknown as Record<string, CityData>;

const pageTitle = 'Google Ads for Builders & Developers | R.K Digital Media';
const pageDescription = 'Google Ads for builders and developers in India. See what home buyers in your city actually search for, avoid rental and PG clicks, and track enquiries your sales team can use.';

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
    images: [{ url: '/images/builders-og.webp', width: 1200, height: 630, alt: 'Google Ads for builders and developers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/builders-og.webp'],
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
      areaServed: { '@type': 'Country', name: 'India' },
      url: 'https://rkdigitalmedia.in/google-ads-for-builders',
      description: pageDescription,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BuildersLandingPage cityData={cityData} />
    </>
  );
}
