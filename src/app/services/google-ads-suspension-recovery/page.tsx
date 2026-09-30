import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "Google Ads Suspension Recovery Services | R.K Digital Media",
  description: "Structured Google Ads suspension recovery covering account, website, billing, ad and policy review, corrective actions and appeal preparation.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/google-ads-suspension-recovery" },
  openGraph: {
    title: "Google Ads Suspension Recovery Services | R.K Digital Media",
    description: "Structured Google Ads suspension recovery covering account, website, billing, ad and policy review, corrective actions and appeal preparation.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/google-ads-suspension-recovery",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "03",
  "label": "GOOGLE ADS SUSPENSION RECOVERY",
  "title": "Google Ads Suspension Recovery Services built around diagnosis first",
  "intro": "A structured review of the account, website, billing, ads, assets and relevant business systems to identify policy risks before preparing a clearer appeal.",
  "intent": "A suspension is not normally solved by repeatedly submitting the same appeal. The useful first step is diagnosis: understand the notice, inspect relevant parts of the advertising ecosystem, correct genuine issues and document what changed.",
  "outcomes": [
    "A clearer picture of the policy or trust issue described by the suspension notice.",
    "A documented list of website, account, billing or advertising issues that need attention.",
    "A more evidence-based appeal rather than repeated generic submissions.",
    "A post-reinstatement checklist to reduce repeat risk."
  ],
  "capabilities": [
    [
      "Suspension notice review",
      "Analyse the stated reason and identify account-specific facts that need investigation."
    ],
    [
      "Website & landing-page review",
      "Check transparency, contact information, claims, destinations and relevant policy considerations."
    ],
    [
      "Account & ad review",
      "Inspect account structure, ads, assets and business information for inconsistencies or risky patterns."
    ],
    [
      "Billing & business identity",
      "Review relevant payment, business-information and account-ownership details where they relate to the issue."
    ],
    [
      "Corrective action plan",
      "Prioritise genuine changes and document what was changed before the appeal."
    ],
    [
      "Appeal preparation",
      "Prepare a factual explanation of the business, corrective actions and supporting evidence. Google makes the final decision."
    ]
  ],
  "process": [
    [
      "Collect",
      "Gather the suspension notice, account context, website details and relevant business documentation."
    ],
    [
      "Audit",
      "Review the parts of the account and destination relevant to the stated policy issue."
    ],
    [
      "Correct",
      "Implement appropriate website, account or advertising changes."
    ],
    [
      "Appeal & monitor",
      "Prepare the appeal, then maintain a post-reinstatement risk checklist."
    ]
  ],
  "useCases": [
    [
      "Account suspension",
      "When an active Ads account has been suspended and needs structured review."
    ],
    [
      "Repeated disapprovals",
      "When recurring ad or asset issues suggest a broader destination or policy problem."
    ],
    [
      "Website-related issues",
      "When the advertising account is connected to a website needing compliance or transparency work."
    ],
    [
      "E-commerce advertisers",
      "When product data, landing pages and Merchant Center context are relevant."
    ],
    [
      "Business-information concerns",
      "When account, billing or business identity information needs consistency checks."
    ],
    [
      "Pre-appeal review",
      "When the business wants corrective actions reviewed before submitting an appeal."
    ]
  ],
  "included": [
    "Suspension notice analysis",
    "Account and policy review",
    "Website and landing-page review",
    "Ad and asset checks",
    "Relevant billing / identity checks",
    "Corrective-action checklist",
    "Appeal preparation support",
    "Post-reinstatement risk checklist"
  ],
  "faqs": [
    [
      "Can you guarantee reinstatement?",
      "No. Google makes the final policy and account decision. The service focuses on diagnosis, corrective action and a clearer evidence-based appeal."
    ],
    [
      "Should I create a new Ads account after suspension?",
      "Creating replacement accounts can create additional policy or account-relationship complications. The appropriate next step depends on the suspension reason and account context."
    ],
    [
      "Do you need Ads account access?",
      "The exact access needed depends on the issue. A suspension notice and website can be enough for an initial review, while deeper diagnosis may require appropriate account access."
    ],
    [
      "Can you also fix the website?",
      "Yes. Where the website is part of the problem, corrective website work can be scoped alongside the recovery review."
    ]
  ],
  "caseStudy": {
    "eyebrow": "Google Ads / documented project",
    "title": "Google Ads Suspension Recovery & Scale",
    "text": "The documented project covers policy review, landing-page work, product-feed cleanup, appeal preparation and campaign rebuilding after reinstatement.",
    "href": "/case-studies/google-ads-recovery"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"Google Ads Suspension Recovery Services built around diagnosis first",'item':"https://rkdigitalmedia.in/services/google-ads-suspension-recovery"}
    ]},
    {'@type':'Service','name':"Google Ads Suspension Recovery Services built around diagnosis first",'serviceType':"Google Ads Suspension Recovery Services built around diagnosis first",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/google-ads-suspension-recovery"}
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
