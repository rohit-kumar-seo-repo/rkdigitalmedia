import type { Metadata, Viewport } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Script from 'next/script';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rkdigitalmedia.in/#organization',
  name: 'R.K Digital Media',
  alternateName: 'RK Digital Media',
  url: 'https://rkdigitalmedia.in',
  logo: 'https://rkdigitalmedia.in/icon.svg',
  sameAs: [
    'https://facebook.com/rkdigitalmedia',
    'https://instagram.com/rkdigitalmedia',
    'https://linkedin.com/company/rkdigitalmedia',
    'https://twitter.com/rkdigitalmedia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-82875-33237',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
    hoursAvailable: 'Mo-Fr 09:00-18:00',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Ave, Gaur City 1, Sector 4',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201016',
    addressCountry: 'IN',
  },
  foundingDate: '2016',
  areaServed: [
    'Greater Noida', 'Noida', 'Delhi', 'Ghaziabad', 'Faridabad', 'Gurugram',
    'India', 'Worldwide'
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rkdigitalmedia.in/#localbusiness',
  name: 'R.K Digital Media',
  description: 'R.K Digital Media provides Google Ads, SEO, Google Business Profile management, website development, Google Ads suspension recovery and AI automation for businesses in Noida, Greater Noida and Delhi NCR.',
  url: 'https://rkdigitalmedia.in',
  telephone: '+91-82875-33237',
  email: 'info@rkdigitalmedia.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Ave, Gaur City 1, Sector 4',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5675,
    longitude: 77.3210,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 28.5675,
      longitude: 77.3210,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Google Ads Services', url: 'https://rkdigitalmedia.in/services/google-ads' },
      { '@type': 'Offer', name: 'Website Development Services', url: 'https://rkdigitalmedia.in/services/web-development' },
      { '@type': 'Offer', name: 'Google Ads Suspension Recovery', url: 'https://rkdigitalmedia.in/services/google-ads-suspension-recovery' },
      { '@type': 'Offer', name: 'SEO Services', url: 'https://rkdigitalmedia.in/services/seo' },
      { '@type': 'Offer', name: 'Google Business Profile Management Services', url: 'https://rkdigitalmedia.in/services/gmb' },
      { '@type': 'Offer', name: 'AI Automation Services', url: 'https://rkdigitalmedia.in/services/ai-automation' },
    ],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://rkdigitalmedia.in/#website',
  url: 'https://rkdigitalmedia.in',
  name: 'R.K Digital Media',
  description: 'R.K Digital Media provides Google Ads, SEO, Google Business Profile management, website development, Google Ads suspension recovery and AI automation for businesses in Noida, Greater Noida and Delhi NCR.',
  publisher: { '@id': 'https://rkdigitalmedia.in/#organization' },

  inLanguage: 'en-IN',
};

const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rkdigitalmedia.in'),
  title: {
    default: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    template: '%s | R.K Digital Media',
  },
  description: 'R.K Digital Media provides Google Ads, SEO, Google Business Profile management, website development, Google Ads suspension recovery and AI automation for businesses in Noida, Greater Noida and Delhi NCR.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'performance marketing',
    'AI automation',
    'web development',
    'Google Ads management',
    'GMB optimization',
    'local SEO',
    'Greater Noida',
    'NCR',
    'India',
    'worldwide',
  ],
  authors: [{ name: 'R.K Digital Media' }],
  creator: 'R.K Digital Media',
  publisher: 'R.K Digital Media',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in',
    siteName: 'R.K Digital Media',
    title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    description: 'R.K Digital Media provides Google Ads, SEO, Google Business Profile management, website development, Google Ads suspension recovery and AI automation for businesses in Noida, Greater Noida and Delhi NCR.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'R.K Digital Media - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    description: 'Google Ads, SEO, Google Business Profile management, website development, Google Ads suspension recovery and AI automation for businesses in Noida, Greater Noida and Delhi NCR.',
    images: ['/og-image.jpg'],
    creator: '@rkdigitalmedia',
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d0d0d' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable} scroll-smooth`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </head>
      <body className="bg-[var(--rkd-bg)] text-[var(--rkd-fg)] font-outfit antialiased">
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}