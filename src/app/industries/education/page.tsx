import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Link from 'next/link';
import { ArrowRight, GraduationCap, School, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Education Digital Marketing | R.K Digital Media',
  description: 'Coaching centers, ed-tech, schools, and colleges. Student acquisition, local SEO, Google Ads, and admission funnel automation.',
};

export default function EducationIndustryPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
            <p className="section-label mb-4">// INDUSTRY</p>
            <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              Education <span className="text-red-italic">Student Acquisition</span>
            </h1>
            <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Coaching centers, ed-tech, schools, and colleges. Student acquisition, local SEO, Google Ads, and admission funnel automation.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
          <div className="max-w-[80rem] mx-auto px-4 md:px-6">
            <div className="card-base max-w-3xl mx-auto">
              <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
                What We Deliver for Education
              </h2>
              <div className="space-y-6 text-body text-[var(--rkd-fg-muted)]" style={{ lineHeight: '1.8' }}>
                <p>Local SEO for "JEE coaching Greater Noida," "CBSE school Sector 50" — map pack + organic for high-intent parent searches.</p>
                <p>Google Ads & Meta Ads for course enrollments. Lead forms, WhatsApp integration, demo class booking automation.</p>
                <p>Landing pages per course/batch with curriculum, faculty, results, testimonials, and instant enrollment.</p>
                <p>CRM + WhatsApp automation: inquiry → demo → enrollment → fee reminders → batch communication.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--rkd-border)] grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Local SEO', 'Course Landing Pages', 'Demo Booking Automation', 'Fee/CRM Systems'].map((tech) => (
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
              Fill Your Batches
            </h2>
            <a href="/contact" className="btn-primary group inline-flex">
              Book Free Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}