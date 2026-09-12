import type { Metadata } from 'next';
import Process from '@/components/Process';

export const metadata: Metadata = {
  title: 'How We Work | R.K Digital Media',
  description: 'From audit to results in four moves: Audit → Strategy → Build → Compound. No black boxes. No 6-month retainers before you see movement.',
};

export default function ProcessPage() {
  return <Process />;
}