import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn how R.K Digital Media approaches Google Ads, SEO, Google Business Profile management, website development, suspension recovery and AI automation from Greater Noida.',
  alternates: { canonical: 'https://rkdigitalmedia.in/about' },
  openGraph: {
    title: 'About R.K Digital Media | Digital Marketing in Greater Noida',
    description: 'Learn how R.K Digital Media approaches Google Ads, SEO, Google Business Profile management, website development, suspension recovery and AI automation from Greater Noida.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/about',
    siteName: 'R.K Digital Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About R.K Digital Media | Digital Marketing in Greater Noida',
    description: 'Learn how R.K Digital Media approaches Google Ads, SEO, Google Business Profile management, website development and AI automation.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return <About />;
}