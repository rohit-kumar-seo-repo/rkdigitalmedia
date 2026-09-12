import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';
import { ArrowRight, Stethoscope, HeartPulse, Pill, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Digital Marketing | R.K Digital Media',
  description: 'Specialized digital marketing for clinics, hospitals, and healthcare providers. Local SEO, Google Ads, GMB optimization, and patient acquisition systems. Compliant, ethical, effective.',
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// INDUSTRY</p>
            <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              Healthcare <span className="text-red-italic">Digital Marketing</span>
            </h1>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Clinics, hospitals, and specialty practices. Patient acquisition systems that are compliant, ethical, and measurable.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="card-base max-w-3xl mx-auto">
              <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
                What We Deliver for Healthcare
              </h2>
              <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                <p>Multi-location GMB optimization for "dentist near me," "skin clinic," "physiotherapy" — map pack domination across NCR.</p>
                <p>Google Ads for high-intent treatments (implants, aligners, laser, IVF) with call tracking and appointment attribution.</p>
                <p>Location-specific landing pages with provider bios, treatment menus, online booking, and medical schema markup.</p>
                <p>Review generation systems compliant with medical advertising guidelines. Reputation management across Google, Practo, Justdial.</p>
                <p>HIPAA-aware analytics and lead handling. CRM integration for patient journey tracking.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--rkd-border)] grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Multi-location GMB', 'Treatment Landing Pages', 'Call Tracking', 'Review Engine'].map((tech) => (
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
            <p className="section-label mb-4">// CASE STUDY</p>
            <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
              3,500+ Appointments, 9× ROAS
            </h2>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Dental & skin clinic chain with 3 locations across Noida & Ghaziabad. Unified GMB, location pages, geo-targeted ads. Full case study available.
            </p>
            <a href="/case-studies/healthcare-clinic" className="btn-primary group inline-flex">
              Read Case Study
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}