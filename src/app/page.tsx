import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import About from '@/components/About';
import { GoogleReviews } from '@/components/GoogleReviews';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  alternates: { canonical: 'https://rkdigitalmedia.in/' },
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