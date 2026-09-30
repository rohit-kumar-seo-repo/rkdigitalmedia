import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "AI Automation Services for Lead Generation | R.K Digital Media",
  description: "Practical AI and workflow automation for lead capture, qualification, routing, CRM updates, follow-up and repetitive business processes.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/ai-automation" },
  openGraph: {
    title: "AI Automation Services for Lead Generation | R.K Digital Media",
    description: "Practical AI and workflow automation for lead capture, qualification, routing, CRM updates, follow-up and repetitive business processes.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/ai-automation",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "06",
  "label": "AI AUTOMATION SERVICES",
  "title": "AI Automation Services that remove repetitive lead-work",
  "intro": "Practical automation for lead capture, qualification, routing, follow-up and internal workflows — designed around the systems your business already uses.",
  "intent": "Automation is useful when a repeatable process costs people time or causes leads to fall through the cracks. The starting point is the workflow, not the technology: map what happens today, decide what should be automated and keep human review where judgement matters.",
  "outcomes": [
    "Faster response to new enquiries and clearer lead ownership.",
    "Less repetitive copying between forms, inboxes, spreadsheets and CRM systems.",
    "More consistent qualification and follow-up workflows.",
    "A visible audit trail for automated actions and human handoffs."
  ],
  "capabilities": [
    [
      "Lead capture & routing",
      "Connect forms, landing pages and inbound channels to a defined routing and ownership workflow."
    ],
    [
      "CRM automation",
      "Create or update contacts, opportunities, tags, tasks and status changes without repetitive entry."
    ],
    [
      "WhatsApp & messaging workflows",
      "Automate appropriate notifications and follow-ups while preserving human involvement for complex conversations."
    ],
    [
      "n8n workflows",
      "Build maintainable automation for APIs, webhooks, data transformation and system actions."
    ],
    [
      "AI-assisted qualification",
      "Use structured prompts and business rules to classify or summarise leads before routing."
    ],
    [
      "Monitoring & fallback",
      "Add error handling, logs, human escalation and clear failure paths."
    ]
  ],
  "process": [
    [
      "Map",
      "Document the current workflow, inputs, decisions, systems and failure points."
    ],
    [
      "Design",
      "Define what should be automated, what needs approval and where data should live."
    ],
    [
      "Build",
      "Implement workflows, integrations, rules, prompts and monitoring."
    ],
    [
      "Test & improve",
      "Run real scenarios, inspect failures and refine before expanding scope."
    ]
  ],
  "useCases": [
    [
      "Lead qualification",
      "Capture an enquiry, classify it and route the right information to sales."
    ],
    [
      "Follow-up",
      "Trigger reminders or appropriate messages when the next step is overdue."
    ],
    [
      "CRM hygiene",
      "Keep records, tags and statuses synchronised across systems."
    ],
    [
      "Reporting",
      "Collect operational data into repeatable summaries instead of manual compilation."
    ],
    [
      "Internal operations",
      "Automate recurring admin tasks that follow clear rules."
    ],
    [
      "Content workflows",
      "Move approved content or data between systems with defined checks and human approval."
    ]
  ],
  "included": [
    "Workflow mapping",
    "Automation architecture",
    "n8n workflow development where appropriate",
    "API and webhook integrations",
    "AI-assisted steps where useful",
    "Error handling and human handoffs",
    "Testing and documentation",
    "Post-launch monitoring recommendations"
  ],
  "faqs": [
    [
      "Will AI replace my sales team?",
      "The goal is usually to remove repetitive work, not remove the people responsible for selling. Automation can handle capture, routing, summarisation and routine follow-up while sales handles judgement."
    ],
    [
      "Can you connect my existing CRM?",
      "Where the CRM exposes suitable APIs, webhooks or supported integrations, it can usually be included. The exact approach depends on the system."
    ],
    [
      "Do you use n8n?",
      "n8n can be used for workflow orchestration where it fits the requirement. The tool is selected based on the workflow."
    ],
    [
      "How do you prevent automation mistakes?",
      "Workflows can include validation, confidence thresholds, logging, error handling and human escalation for cases where automation should not make the final decision."
    ]
  ],
  "caseStudy": {
    "eyebrow": "Automation / documented work",
    "title": "See the broader case-study library",
    "text": "Automation often connects with lead generation, CRM and paid acquisition rather than operating as an isolated feature. The case-study library shows the broader business-growth work available.",
    "href": "/case-studies"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"AI Automation Services that remove repetitive lead-work",'item':"https://rkdigitalmedia.in/services/ai-automation"}
    ]},
    {'@type':'Service','name':"AI Automation Services that remove repetitive lead-work",'serviceType':"AI Automation Services that remove repetitive lead-work",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/ai-automation"}
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': data.faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {'@type':'Answer','text':faq.answer},
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePillarPage data={data} />
    </>
  );
}
