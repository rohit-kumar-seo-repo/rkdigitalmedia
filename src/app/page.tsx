import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import About from '@/components/About';
import { GoogleReviews } from '@/components/GoogleReviews';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <About />
      <GoogleReviews />
      <Contact />
    </main>
  );
}