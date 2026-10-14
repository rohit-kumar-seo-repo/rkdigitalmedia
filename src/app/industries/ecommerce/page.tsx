import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';
import VisualFramework from '@/components/VisualFramework';
import { ArrowRight, ShoppingCart, Package, CreditCard, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: "E-commerce Digital Marketing & Shopping Ads | R.K Digital Media",
  description: "E-commerce marketing for online stores and D2C brands, combining Google Shopping Ads, Performance Max, product-page SEO, conversion optimisation and retention workflows.",
  alternates: { canonical: 'https://rkdigitalmedia.in/industries/ecommerce' },
  openGraph: {
    title: 'E-commerce Digital Marketing & Shopping Ads | R.K Digital Media',
    description: 'E-commerce marketing for online stores and D2C brands: Shopping Ads, Performance Max, product SEO, conversion optimisation and retention.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/industries/ecommerce',
    siteName: 'R.K Digital Media',
  },
};

export default function EcommerceIndustryPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// INDUSTRY</p>
            <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              E-commerce <span className="text-red-italic">Growth</span>
            </h1>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              D2C brands and online stores. Shopping Ads, PMax, SEO for product pages, CRO, and retention systems. Scale profitably.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-[var(--rkd-bg)]"><div className="max-w-[80rem] mx-auto px-4 md:px-6"><VisualFramework kind="industry" /></div></section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="card-base max-w-3xl mx-auto">
              <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
                What We Deliver for E-commerce
              </h2>
              <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                <p>Google Shopping & PMax campaigns optimized for profit, not just revenue. Product feed optimization, merchant center health.</p>
                <p>SEO for 1,000+ product pages: technical foundation, schema markup, internal linking, content at scale.</p>
                <p>CRO: checkout optimization, upsell/cross-sell funnels, email/SMS automation (Klaviyo), retention cohorts.</p>
                <p>Creative testing at scale: UGC, product demos, lifestyle. AI pipeline for rapid iteration.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--rkd-border)] grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Shopping Ads / PMax', 'Product SEO', 'CRO & Retention', 'Creative Testing'].map((tech) => (
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
              Let\'s Audit Your Store
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
              <Link href="/services/google-ads" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Google Shopping and Performance Max Campaigns<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/services/seo" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">E-commerce SEO Services<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/services/web-development" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Website Development and Conversion Foundations<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/insights/google-ads-campaign-types" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Compare Google Ads Campaign Types<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/contact" className="rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-4 text-sm font-medium text-[var(--rkd-fg)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">Discuss E-commerce Growth<ArrowRight className="inline-block ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </nav>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}