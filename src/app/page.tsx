import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import About from '@/components/About';
import { GoogleReviews } from '@/components/GoogleReviews';
import Contact from '@/components/Contact';

const title = 'Digital Marketing Agency in Noida & Greater Noida | R.K Digital Media';
const description = 'R.K Digital Media helps businesses in Noida, Greater Noida and Delhi NCR grow with SEO services, Google Ads management, Google Business Profile optimisation, website development and marketing automation.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://rkdigitalmedia.in/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/',
    siteName: 'R.K Digital Media',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@rkdigitalmedia',
  },
};

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <About />
      <GoogleReviews />
      <Contact />
    </main>
  );
}
