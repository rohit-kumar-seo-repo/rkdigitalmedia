import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Services | R.K Digital Media',
  description: 'Explore our complete suite of digital marketing services: Performance Marketing, SEO & Search Growth, AI Automation, Web Development, Creative & Content, and CRM & Growth Systems.',
  openGraph: {
    title: 'Services | R.K Digital Media',
    description: 'Explore our complete suite of digital marketing services: Performance Marketing, SEO & Search Growth, AI Automation, Web Development, Creative & Content, and CRM & Growth Systems.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top" className="pt-16">
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}