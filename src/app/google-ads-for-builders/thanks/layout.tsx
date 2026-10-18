import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Request received | R.K Digital Media' },
  description: 'Confirmation page for the Google Ads for builders enquiry form.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function BuildersThanksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
