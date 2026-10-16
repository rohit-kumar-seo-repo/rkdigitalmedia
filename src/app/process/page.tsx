import type { Metadata } from 'next';
import Process from '@/components/Process';

export const metadata: Metadata = {
  title: 'How We Work | R.K Digital Media',
  description: 'From audit to results in four moves: Audit → Strategy → Build → Compound. No black boxes. No 6-month retainers before you see movement.',
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | R.K Digital Media',
    description: 'See how R.K Digital Media moves from audit to strategy, implementation and ongoing optimization.',
    images: ['/og-image.jpg'],
    creator: '@rkdigitalmedia',
  },
  alternates: { canonical: 'https://rkdigitalmedia.in/process' },
  openGraph: {
    title: 'How We Work | R.K Digital Media',
    description: 'From audit to results in four moves: Audit → Strategy → Build → Compound. No black boxes. No 6-month retainers before you see movement.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/process',
    siteName: 'R.K Digital Media',
  },
};

export default function ProcessPage() {
  return <Process />;
}
