import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';
import VisualFramework from '@/components/VisualFramework';
import { ArrowRight, Utensils, Hotel, Coffee, Waves } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hospitality Digital Marketing for Hotels & Restaurants | R.K Digital Media",
  description: "Digital marketing for hotels, restaurants, cafes and cloud kitchens, covering Google Business Profile optimisation, local SEO, paid campaigns, review workflows and booking enquiries.",
  alternates: { canonical: 'https://rkdigitalmedia.in/industries/hospitality' },
  openGraph: {
    title: 'Hospitality Digital Marketing for Hotels & Restaurants | R.K Digital Media',
    description: 'Digital marketing for hotels, restaurants, cafes and cloud kitchens: Google Business Profile, local SEO, paid campaigns and booking enquiries.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/industries/hospitality',
    siteName: 'R.K Digital Media',
  },
};

export default function HospitalityIndustryPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// INDUSTRY</p>
            <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              Hospitality <span className="text-red-italic">Local Discovery</span>
            </h1>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Restaurants, cafes, cloud kitchens, and hotels. Local discovery, Google Maps domination, online ordering, and review management.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-[var(--rkd-bg)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><VisualFramework kind="industry" /></div></section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="card-base max-w-3xl mx-auto">
              <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
                What We Deliver for Hospitality
              </h2>
              <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                <p>GMB optimization for "best biryani Greater Noida," "cafe near me," "fine dining Noida" — map pack + photos + menu + ordering.</p>
                <p>Swiggy/Zomato optimization: menu photography, description SEO, rating management, promotional campaigns.</p>
                <p>Google Ads & Meta Ads for dine-in, takeaway, catering, events. Geo-fenced to 3-5km radius. UGC creative.</p>
                <p>Review engine: QR on tables, SMS follow-up, response templates. 4.5★+ maintenance across platforms.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--rkd-border)] grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Maps Pack Domination', 'Swiggy/Zomato SEO', 'Geo-targeted Ads', 'Review Engine'].map((tech) => (
                  <div key={tech} className="text-center p-4 bg-[var(--rkd-bg)] rounded-xl">
                    <p className="font-montserrat font-semibold text-[var(--rkd-fg)] text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// READY TO SCALE?</p>
            <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
              Fill Your Tables
            </h2>
            <a href="/contact" className="btn-primary group inline-flex">
              Book Free Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </section>
      <section className="py-16 md:py-20 bg-[var(--rkd-bg)] border-t border-[var(--rkd-border)]" aria-labelledby="related-services-heading">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RELATED RESOURCES</p>
          <h2 id="related-services-heading" className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.25' }}>Explore relevant services and guides</h2>
          <nav aria-label="Related services and guides" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link href="/services/gmb" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Google Business Profile Management<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/services/seo" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Local SEO Services<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/services/google-ads" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Google Ads Management<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/insights/gmb-optimization-map-pack-checklist-50-steps" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Google Business Profile Optimisation Checklist<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/contact" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Discuss Hospitality Marketing<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </nav>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}