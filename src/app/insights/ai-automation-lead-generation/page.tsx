import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
  description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates. Cut response time 80%, cost per lead 40%. AI automation services Greater Noida.',
  keywords: ['AI lead generation automation', 'WhatsApp AI agent setup', 'n8n workflow templates', 'CRM automation for small business', 'AI automation Greater Noida', 'WhatsApp business automation'],
  openGraph: {
    title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
    description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates. Cut response time 80%, cost per lead 40%.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights/ai-automation-lead-generation-5-workflows',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation for Lead Generation | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation for Lead Generation: 5 Workflows That Run 24/7 | R.K Digital Media',
    description: 'WhatsApp AI agents, voice bots, CRM automation, n8n workflows. Complete setup guide with templates.',
    images: ['/og-image.jpg'],
  },
};

export default function PostPage() {
  return (
    <>

      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center py-24">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            AI Automation for Lead Generation
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            5 workflows that run 24/7 to cut response time 80% and cost per lead 40%.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="font-montserrat font-bold text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              5 Powerful Workflows
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {/* Workflow 1 */}
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">WhatsApp AI Agent</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                  <li>Instant reply to inquiries</li>
                  <li>Qualify leads via conversational forms</li>
                  <li>Book appointments directly</li>
                  <li>24/7 coverage without human overhead</li>
                </ul>
              </div>

              {/* Workflow 2 */}
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">Voice Bot</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                  <li>Handle inbound calls automatically</li>
                  <li>Screen and route qualified leads</li>
                  <li>Collect information via voice</li>
                  <li>Reduce missed call rate</li>
                </ul>
              </div>

              {/* Workflow 3 */}
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">CRM Automation</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                  <li>Auto-create contacts from forms</li>
                  <li>Assign leads to sales reps</li>
                  <li>Trigger follow-up sequences</li>
                  <li>Track lead lifecycle stages</li>
                </ul>
              </div>

              {/* Workflow 4 */}
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">n8n Workflows</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                  <li>Lead routing and scoring</li>
                  <li>Cross-platform integration</li>
                  <li>Scheduled campaigns</li>
                  <li>Error handling and auditing</li>
                </ul>
              </div>

              {/* Workflow 5 */}
              <div className="card-base p-6 hover:scale-105 transition-transform">
                <h3 className="font-montserrat font-semibold text-[var(--rkd-primary)] mb-3">Human Handoff</h3>
                <ul className="list-disc list-inside text-[var(--rkd-fg-muted)] space-y-2">
                  <li>Seamless transfer to human agent</li>
                  <li>Conversation context preserved</li>
                  <li>Audit logs for compliance</li>
                  <li>Monthly optimization reviews</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--rkd-border)]">
              <p className="font-montserrat font-medium text-[var(--rkd-primary)] mb-2">
                80% Faster Response · 40% Lower Cost Per Lead · 24/7 Coverage
              </p>
              <a href="/contact" className="btn-primary inline-flex mt-4">
                Book Free Audit
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5v7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}