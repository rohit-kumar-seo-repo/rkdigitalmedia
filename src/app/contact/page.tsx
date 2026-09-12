import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact & Free Audit | R.K Digital Media',
  description: 'Book a free 30-minute strategy audit. We\'ll analyze your current digital presence, identify the leaks, and show you exactly how we\'d move the needle. No pitch, no pressure.',
};

export default function ContactPage() {
  return <Contact />;
}