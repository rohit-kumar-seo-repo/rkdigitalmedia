import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-16">
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