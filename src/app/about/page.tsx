import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn how R.K Digital Media approaches Google Ads, SEO, Google Business Profile management, website development, suspension recovery and AI automation from Greater Noida.',
};

export default function AboutPage() {
  return <About />;
}