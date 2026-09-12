import type { Metadata, Viewport } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'R.K Digital Media',
  url: 'https://rkdigitalmedia.in',
  telephone: '+91-98715-30594',
  email: 'info@rkdigitalmedia.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Ave, Gaur City 1, Sector 4',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201016',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://facebook.com/rkdigitalmedia',
    'https://instagram.com/rkdigitalmedia',
  ],
  description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and AI automation.',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rkdigitalmedia.in'),
  title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
  description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and AI automation. 1200+ clients served, 500+ projects, 8+ years. Serving clients across India and worldwide.',
  keywords: ['digital marketing agency', 'SEO services', 'performance marketing', 'AI automation', 'web development', 'Greater Noida', 'NCR', 'India', 'worldwide'],
  authors: [{ name: 'R.K Digital Media' }],
  creator: 'R.K Digital Media',
  publisher: 'R.K Digital Media',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in',
    title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and AI automation.',
    siteName: 'R.K Digital Media',
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
    description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and AI automation.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[var(--rkd-bg)] text-[var(--rkd-fg)] font-outfit antialiased">
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}