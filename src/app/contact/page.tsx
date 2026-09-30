import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact R.K Digital Media | Start a Project',
  description: 'Contact R.K Digital Media about Google Ads, SEO, Google Business Profile management, website development, suspension recovery or AI automation.',
};

export default function ContactPage() {
  return <Contact />;
}