import type { Metadata } from 'next';
import InsightArticle from '@/components/InsightArticle';
import InsightVisual from '@/components/InsightVisual';

export const metadata: Metadata = {
  title: "AI Automation for Lead Generation: 5 Workflows Worth Automating | R.K Digital Media",
  description: "Five practical workflows for capturing, qualifying and following up with leads—plus where automation should stop and a human should take over.",
  openGraph: { title: "AI Automation for Lead Generation: 5 Workflows Worth Automating", description: "Five practical workflows for capturing, qualifying and following up with leads—plus where automation should stop and a human should take over.", type: 'article', locale: 'en_IN', url: "https://rkdigitalmedia.in/insights/ai-automation-lead-generation-5-workflows", siteName: 'R.K Digital Media' },
  alternates: { canonical: "https://rkdigitalmedia.in/insights/ai-automation-lead-generation-5-workflows" },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AI Automation for Lead Generation: 5 Workflows Worth Automating",
  description: "Five practical workflows for capturing, qualifying and following up with leads—plus where automation should stop and a human should take over.",
  url: "https://rkdigitalmedia.in/insights/ai-automation-lead-generation-5-workflows",
  dateModified: '2026-10-01',
  author: { '@type': 'Person', name: 'Rohit Kumar' },
  publisher: { '@type': 'Organization', name: 'R.K Digital Media', url: 'https://rkdigitalmedia.in' }
};

export default function PostPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <InsightArticle category="AI AUTOMATION" title="AI Automation for Lead Generation: 5 Workflows Worth Automating" intro="Five practical workflows for capturing, qualifying and following up with leads—plus where automation should stop and a human should take over." readTime="12 min" updated="October 1, 2026" toc={["What should actually be automated?","Instant lead response","Lead qualification","CRM routing","Follow-up sequences","Human handoff and measurement"]} sections={[{"label":"PRINCIPLE","title":"What should actually be automated?",visual:<InsightVisual kind="automation" variant={1} />, "paragraphs":["Automate repetitive movement of information before you automate judgment. A useful system can capture a lead, enrich a record, send a first response and create a follow-up task without pretending a bot can understand every commercial situation."]},{"label":"WORKFLOW 01","title":"Instant lead response","paragraphs":["When a form, WhatsApp message or ad lead arrives, create a CRM record, acknowledge the enquiry and route it to the right person. Speed matters, but the first message should set expectations rather than overwhelm the prospect."]},{"label":"WORKFLOW 02","title":"Lead qualification","paragraphs":["Use a short set of questions—service needed, location, budget range, timeline and preferred contact method—to separate obvious opportunities from enquiries that need more information. Keep an exit path to a human."]},{"label":"WORKFLOW 03","title":"CRM routing",visual:<InsightVisual kind="automation" variant={2} />, "paragraphs":["Assign leads by service, geography, language, business hours or salesperson. Store the source campaign and landing page so reporting can connect spend to actual enquiries."]},{"label":"WORKFLOW 04","title":"Follow-up sequences","paragraphs":["Build a small sequence around real customer questions rather than sending the same sales pitch repeatedly. Stop automated messages when the person replies, books a meeting or asks not to be contacted."]},{"label":"WORKFLOW 05","title":"Human handoff and measurement",visual:<InsightVisual kind="automation" variant={3} />, "paragraphs":["Define conditions that require a person: complaints, unusual requests, high-value opportunities, pricing negotiation or uncertainty. Measure response time, qualified leads, booked meetings and closed revenue—not just messages sent."]}]} />
  </>;
}