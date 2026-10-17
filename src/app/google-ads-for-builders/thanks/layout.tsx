import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request received | R.K Digital Media',
  robots: { index: false, follow: false },
};

export default function BuildersThanksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
