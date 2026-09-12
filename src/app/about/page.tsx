import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Us | R.K Digital Media',
  description: 'Greater Noida-based growth agency built to replace fragmented vendors with one system that ships — SEO, Google Ads, GMB, and web development engineered as a single revenue engine.',
};

export default function AboutPage() {
  return <About />;
}