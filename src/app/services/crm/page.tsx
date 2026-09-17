import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CRM & Growth Systems Services | R.K Digital Media Greater Noida',
  description: 'GoHighLevel setup, WhatsApp API, n8n workflows. 7-day launch, 90% lead response rate, 3× pipeline visibility.',
  keywords: [
    'CRM setup agency Greater Noida',
    'GoHighLevel implementation Noida',
    'WhatsApp Business API integration',
    'n8n workflow automation',
    'sales pipeline automation',
    'lead management system',
    'revenue operations agency',
    'CRM migration services',
    'marketing automation setup',
    'GoHighLevel expert Greater Noida',
  ],
  openGraph: {
    title: 'CRM & Growth Systems Services | R.K Digital Media Greater Noida',
    description: 'GoHighLevel setup, WhatsApp API, n8n workflows. 7-day launch, 90% lead response rate, 3× pipeline visibility.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/services/crm',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CRM & Growth Systems Services | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM & Growth Systems Services | R.K Digital Media Greater Noida',
    description: 'GoHighLevel setup, WhatsApp API, n8n workflows. 7-day launch, 90% lead response rate, 3× pipeline visibility.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/services/crm',
  },
};

const steps = [
  { num: '01', title: 'CRM Audit', desc: 'Current funnel, lead sources, sales process, tech stack. Identify leaks and manual work.' },
  { num: '02', title: 'Pipeline Design', desc: 'Stages, probabilities, custom fields, automation triggers, scoring rules, dashboards.' },
  { num: '03', title: 'Setup & Automate', desc: 'GoHighLevel setup, WhatsApp API, n8n workflows. Sandbox testing. Data migration.' },
  { num: '04', title: 'Train & Hand Over', desc: 'Team training, SOP docs, weekly office hours. You own the system — we just build it.' },
];

const included = [
  'GoHighLevel account setup + sub-account architecture',
  'Pipeline design: stages, probabilities, custom fields',
  'WhatsApp Business API integration (templates, automation)',
  'n8n workflows for lead routing, scoring, enrichment',
  'Email/SMS sequences (nurture, follow-up, re-engagement)',
  'Attribution dashboards (source → lead → revenue)',
  'Team training + recorded SOPs',
  '30 days post-launch support',
];

const stats = [
  { value: '7 days', label: 'To Go Live' },
  { value: '90%', label: 'Lead Response Rate' },
  { value: '3×', label: 'Pipeline Visibility' },
];

const faqItems = [
  { question: 'Which CRMs do you implement?', answer: 'We specialize in GoHighLevel (GHL) for SMBs and agencies. We also integrate with HubSpot, Pipedrive, and custom CRMs via n8n/API.' },
  { question: 'How long does CRM setup take?', answer: 'Standard GHL setup: 7 days to go live. Complex migrations with data cleanup: 2-3 weeks. We provide exact timeline after audit.' },
  { question: 'Do you provide team training?', answer: 'Yes — we deliver live training sessions, recorded SOPs, and 30 days of post-launch support with weekly office hours.' },
  { question: 'Can you integrate WhatsApp with CRM?', answer: 'Yes — we set up WhatsApp Business API (via Meta or 360dialog), create template messages, and build automated flows for lead qualification and follow-up.' },
  { question: 'What if we need custom workflows?', answer: 'We build custom n8n workflows for lead routing, scoring, enrichment, and cross-system sync. Any API-accessible tool can be connected.' },
];

const graphSchemaString = '{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"Service","name":"CRM & Growth Systems Services","description":"GoHighLevel setup, WhatsApp API, n8n workflows. 7-day launch, 90% lead response rate, 3× pipeline visibility.","url":"https://rkdigitalmedia.in/services/crm","provider":{"@type":"LocalBusiness","@id":"https://rkdigitalmedia.in/#localbusiness","name":"R.K Digital Media"},"category":"CRM & Growth Systems","areaServed":[{"@type":"Place","name":"Greater Noida"},{"@type":"Place","name":"Noida"},{"@type":"Place","name":"Delhi NCR"},{"@type":"Place","name":"Ghaziabad"},{"@type":"Place","name":"Faridabad"},{"@type":"Place","name":"Gurugram"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which CRMs do you implement?","acceptedAnswer":{"@type":"Answer","text":"We specialize in GoHighLevel (GHL) for SMBs and agencies. We also integrate with HubSpot, Pipedrive, and custom CRMs via n8n/API."}},{"@type":"Question","name":"How long does CRM setup take?","acceptedAnswer":{"@type":"Answer","text":"Standard GHL setup: 7 days to go live. Complex migrations with data cleanup: 2-3 weeks. We provide exact timeline after audit."}},{"@type":"Question","name":"Do you provide team training?","acceptedAnswer":{"@type":"Answer","text":"Yes — we deliver live training sessions, recorded SOPs, and 30 days of post-launch support with weekly office hours."}},{"@type":"Question","name":"Can you integrate WhatsApp with CRM?","acceptedAnswer":{"@type":"Answer","text":"Yes — we set up WhatsApp Business API (via Meta or 360dialog), create template messages, and build automated flows for lead qualification and follow-up."}},{"@type":"Question","name":"What if we need custom workflows?","acceptedAnswer":{"@type":"Answer","text":"We build custom n8n workflows for lead routing, scoring, enrichment, and cross-system sync. Any API-accessible tool can be connected."}}]}]}';

const faqSchemaString = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which CRMs do you implement?","acceptedAnswer":{"@type":"Answer","text":"We specialize in GoHighLevel (GHL) for SMBs and agencies. We also integrate with HubSpot, Pipedrive, and custom CRMs via n8n/API."}},{"@type":"Question","name":"How long does CRM setup take?","acceptedAnswer":{"@type":"Answer","text":"Standard GHL setup: 7 days to go live. Complex migrations with data cleanup: 2-3 weeks. We provide exact timeline after audit."}},{"@type":"Question","name":"Do you provide team training?","acceptedAnswer":{"@type":"Answer","text":"Yes — we deliver live training sessions, recorded SOPs, and 30 days of post-launch support with weekly office hours."}},{"@type":"Question","name":"Can you integrate WhatsApp with CRM?","acceptedAnswer":{"@type":"Answer","text":"Yes — we set up WhatsApp Business API (via Meta or 360dialog), create template messages, and build automated flows for lead qualification and follow-up."}},{"@type":"Question","name":"What if we need custom workflows?","acceptedAnswer":{"@type":"Answer","text":"We build custom n8n workflows for lead routing, scoring, enrichment, and cross-system sync. Any API-accessible tool can be connected."}}]}';

export default function CRMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graphSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// SERVICE</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            CRM & <span className="text-red-italic">Growth Systems</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            End-to-end CRM setup, automation, and revenue operations. Lead management, pipeline, analytics, and team enablement.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// HOW IT WORKS</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            From Chaos to System in <span className="text-red-italic">Four Phases</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card-base p-6">
                <span className="font-montserrat font-black text-4xl text-[var(--rkd-primary)] opacity-40">{step.num}</span>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// WHAT'S INCLUDED</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Every Engagement Includes
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl">
                <svg className="w-5 h-5 text-[var(--rkd-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-body text-[var(--rkd-fg-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// RESULTS YOU CAN EXPECT</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-base text-center p-8">
                <div className="font-montserrat font-black text-5xl text-[var(--rkd-primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--rkd-fg-muted)] font-outfit">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// FAQ</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Common Questions About Our <span className="text-red-italic">CRM Services</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="group bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-montserrat font-semibold text-[var(--rkd-fg)]">
                  {faq.question}
                  <svg className="w-5 h-5 text-[var(--rkd-primary)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-[var(--rkd-fg-muted)] leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg)] text-center">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <p className="section-label mb-4">// READY TO SCALE?</p>
          <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Let's Systemize Your Revenue
          </h2>
          <a href="/contact" className="btn-primary inline-flex">
            Book Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}