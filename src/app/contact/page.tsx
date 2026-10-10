import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact R.K Digital Media | Start a Project',
  description: 'Contact R.K Digital Media about Google Ads, SEO, Google Business Profile management, website development, suspension recovery or AI automation.',
  alternates: { canonical: 'https://rkdigitalmedia.in/contact' },
  openGraph: {
    title: 'Contact R.K Digital Media | Start a Project',
    description: 'Contact R.K Digital Media about Google Ads, SEO, Google Business Profile management, website development, suspension recovery or AI automation.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/contact',
    siteName: 'R.K Digital Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact R.K Digital Media | Start a Project',
    description: 'Contact R.K Digital Media about Google Ads, SEO, Google Business Profile management, website development, suspension recovery or AI automation.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <Contact />;
}
