import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Ads Suspension Recovery Services | R.K Digital Media',
  description:
    'Google Ads suspension recovery service covering account, website, billing, ad and policy review, appeal preparation and post-reinstatement risk reduction.',
  alternates: { canonical: 'https://rkdigitalmedia.in/services/google-ads-suspension-recovery' },
  openGraph: {
    title: 'Google Ads Suspension Recovery Services | R.K Digital Media',
    description: 'Structured Google Ads suspension review, compliance fixes and appeal preparation.',
    type: 'website',
    url: 'https://rkdigitalmedia.in/services/google-ads-suspension-recovery',
  },
};

const checks = [
  'Account and policy-status review',
  'Website and landing-page compliance review',
  'Business identity, contact and transparency checks',
  'Ad, asset and destination review',
  'Merchant Center and product-data review where applicable',
  'Billing and account-structure checks',
  'Appeal evidence and explanation preparation',
  'Post-reinstatement risk-reduction checklist',
];

export default function GoogleAdsSuspensionRecoveryPage() {
  return (
    <main id="top">
      <section className="relative min-h-[68vh] flex items-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 py-28 md:py-36 w-full">
          <p className="section-label mb-5">// GOOGLE ADS POLICY & RECOVERY</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] max-w-5xl mb-7" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', lineHeight: '1.02' }}>
            Google Ads Suspension <span className="text-red-italic">Recovery Services</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-3xl leading-relaxed">
            When an Ads account is suspended, repeatedly appealing without understanding the underlying issue can waste time and make diagnosis harder. We review the account and its business destination systematically, identify likely policy and trust issues, help implement the required fixes, and prepare a clearer appeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link href="/contact" className="btn-primary">
              Request a Suspension Review <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies/google-ads-recovery" className="btn-secondary">
              See the Recovery Case Study
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['01', 'Diagnose first', 'We start with the suspension notice and inspect the connected parts of the advertising ecosystem.'],
              ['02', 'Fix the cause', 'The goal is not to disguise the problem. Relevant website, account, feed or business-information issues need to be addressed.'],
              ['03', 'Prepare the appeal', 'The appeal should clearly explain the business, the corrective actions and the supporting evidence.'],
            ].map(([num, title, text]) => (
              <div key={num} className="card-base p-7">
                <span className="font-mono text-[var(--rkd-primary)]">{num}</span>
                <h2 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-5 mb-3">{title}</h2>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="section-label mb-4">// WHAT WE REVIEW</p>
              <h2 className="font-montserrat font-bold text-[var(--rkd-fg)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
                A suspension is an <span className="text-red-italic">ecosystem problem.</span>
              </h2>
              <p className="mt-6 text-[var(--rkd-fg-muted)] leading-relaxed">
                Google Ads policy decisions can involve more than the ad itself. The review therefore considers the account, business information, destination experience and supporting product or billing systems that are relevant to the notice.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {checks.map((item) => (
                <div key={item} className="flex gap-3 p-5 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--rkd-primary)] mt-0.5" />
                  <span className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RECOVERY PROCESS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] max-w-3xl mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
            From suspension notice to a <span className="text-red-italic">cleaner account.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-px bg-[var(--rkd-border)]">
            {[
              ['01', 'Review', 'Collect the suspension notice, account context and business information.'],
              ['02', 'Audit', 'Inspect the relevant account, website, ads, destinations, feeds and policies.'],
              ['03', 'Correct', 'Implement the necessary fixes and document what changed.'],
              ['04', 'Appeal', 'Prepare a factual, evidence-based appeal and a post-reinstatement checklist.'],
            ].map(([num, title, text]) => (
              <div key={num} className="bg-[var(--rkd-bg-secondary)] p-7">
                <span className="font-mono text-[var(--rkd-primary)]">{num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-5 mb-3">{title}</h3>
                <p className="text-sm text-[var(--rkd-fg-muted)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// CASE STUDY</p>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}>
                Google Ads Suspension Recovery & Scale
              </h2>
              <p className="text-[var(--rkd-fg-muted)] max-w-3xl leading-relaxed">
                The documented case study covers an e-commerce account suspended for policy issues. The work included a policy review, landing-page rebuild, product-feed cleanup, structured appeal and campaign rebuild after reinstatement.
              </p>
            </div>
            <Link href="/case-studies/google-ads-recovery" className="btn-secondary whitespace-nowrap">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)] text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// NEED A REVIEW?</p>
          <h2 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: '1.05' }}>
            Stop guessing. <span className="text-red-italic">Find the policy risk.</span>
          </h2>
          <p className="text-[var(--rkd-fg-muted)] leading-relaxed mb-8">
            Share the suspension notice and relevant account context. We can assess whether the issue appears suitable for a structured recovery review and explain the next steps.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Suspension Review <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
