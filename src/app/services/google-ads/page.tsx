import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "Google Ads Services in Noida | Google Ads Management | R.K Digital Media",
  description: "Google Ads services and management in Noida for Search, Shopping, Performance Max and YouTube campaigns, with conversion tracking, search-term optimisation and landing-page alignment.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/google-ads" },
  openGraph: {
    title: "Google Ads Services in Noida | Google Ads Management | R.K Digital Media",
    description: "Google Ads management for Search, Shopping, Performance Max and YouTube campaigns with conversion tracking, optimisation and transparent reporting.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/google-ads",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "01",
  "label": "GOOGLE ADS SERVICES",
  "title": "Google Ads Services in Noida for measurable customer acquisition",
  "intro": "Google Ads management in Noida for Search, Shopping, Performance Max and YouTube campaigns, built around qualified demand, conversion tracking and disciplined optimisation — not simply higher click volume.",
  "intent": "Google Ads services work best when account structure, search intent, offer, landing page and conversion tracking are treated as one system. We manage the paid-search journey from keyword and query selection through landing-page alignment and conversion measurement for businesses in Noida, Greater Noida and Delhi NCR.",
  "outcomes": [
    "Clearer separation between high-intent and exploratory traffic.",
    "Better visibility into which campaigns, queries and landing pages generate meaningful conversions.",
    "More controlled budget use through search-term analysis, exclusions and campaign-level optimisation.",
    "Measurement that makes optimisation decisions easier to explain and audit."
  ],
  "capabilities": [
    [
      "Account & campaign strategy",
      "Review goals, conversion actions, budget allocation and campaign structure before recommending changes."
    ],
    [
      "Search campaigns",
      "Build or refine keyword groups, ads, match types, negatives and landing-page alignment around intent."
    ],
    [
      "Shopping & Performance Max",
      "Structure product or asset inputs, conversion goals and exclusions where the business model supports them."
    ],
    [
      "Conversion tracking",
      "Audit or implement meaningful conversion actions so decisions are based on useful business signals."
    ],
    [
      "Search-term optimisation",
      "Review actual queries, remove wasted spend and expand useful themes."
    ],
    [
      "Landing-page alignment",
      "Improve message match, clarity, trust signals and the path from paid click to enquiry or purchase."
    ]
  ],
  "process": [
    [
      "Audit",
      "Review account structure, tracking, campaigns, search terms, assets and landing pages."
    ],
    [
      "Plan",
      "Prioritise changes that can materially improve measurement, relevance or spend efficiency."
    ],
    [
      "Build",
      "Implement campaigns, ads, tracking and exclusions with a clear structure."
    ],
    [
      "Optimise",
      "Use conversion data and search behaviour to refine targeting, creative and budgets."
    ]
  ],
  "useCases": [
    [
      "Local services",
      "Generate calls, enquiries or booked consultations from high-intent local searches."
    ],
    [
      "E-commerce",
      "Combine product feeds and paid search with landing-page and conversion analysis."
    ],
    [
      "B2B lead generation",
      "Build campaigns around commercial intent and qualify leads beyond form volume."
    ],
    [
      "Multi-location businesses",
      "Separate geography, services and budgets where local intent differs."
    ],
    [
      "New accounts",
      "Build a measurement-first structure without unnecessary legacy complexity."
    ],
    [
      "Existing advertisers",
      "Audit accounts where spend is rising but business impact is unclear."
    ]
  ],
  "included": [
    "Campaign and account audit",
    "Keyword and search-intent research",
    "Campaign and ad-group structure",
    "Ad copy and asset recommendations",
    "Negative keyword and search-term management",
    "Conversion tracking review",
    "Landing-page recommendations",
    "Ongoing reporting and optimisation"
  ],
  "faqs": [
    [
      "What Google Ads campaigns do you manage?",
      "Depending on the business, we work with Search, Shopping, Performance Max and YouTube campaigns. The mix follows the offer, demand and conversion path."
    ],
    [
      "Do you guarantee a specific Google Ads ROI?",
      "No. Auction conditions, competition, offer quality, margins, website performance and tracking all affect results. We instead define measurable targets and an optimisation process."
    ],
    [
      "Can you audit an existing Google Ads account?",
      "Yes. An audit can review campaign structure, search terms, conversion actions, budgets, ads, assets, landing pages and the relationship between spend and business outcomes."
    ],
    [
      "Do you also work on landing pages?",
      "Yes. Landing-page recommendations are included where the experience materially affects paid traffic performance. Full development can be scoped separately."
    ]
  ],
  "relatedResources": [
    {
      "eyebrow": "GOOGLE ADS GUIDE",
      "title": "Google Ads Campaign Types",
      "text": "Understand how Search, Shopping, Performance Max and other campaign types fit different acquisition goals.",
      "href": "/insights/google-ads-campaign-types",
      "label": "Read the guide"
    },
    {
      "eyebrow": "NOIDA SEARCH",
      "title": "Google Ads Expert in Noida",
      "text": "See the local commercial considerations behind choosing and working with a Google Ads specialist in Noida.",
      "href": "/insights/google-ads-expert-noida",
      "label": "Read the guide"
    },
    {
      "eyebrow": "SUSPENSION SUPPORT",
      "title": "Need dedicated suspension recovery?",
      "text": "Account suspension and policy-recovery intent is handled by the specialist recovery site rather than this general Google Ads service.",
      "href": "https://adssuspensionrecovery.com/",
      "label": "Visit specialist site"
    }
  ],
  "relatedService": {
    "eyebrow": "PAID ACQUISITION SUPPORT",
    "title": "Need the website and landing pages aligned with your campaigns?",
    "text": "Paid traffic performs better when the destination is clear, fast and aligned with the search intent. Explore the website development service.",
    "href": "/services/web-development",
    "label": "Explore Website Development"
  },
  "caseStudy": {
    "eyebrow": "Google Ads / documented project",
    "title": "Google Ads Suspension Recovery & Scale",
    "text": "The existing case study documents a suspension-review and recovery project followed by campaign rebuilding. It shows how policy, website and paid acquisition work can connect.",
    "href": "/case-studies/google-ads-recovery"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"Google Ads Services in Noida",'item':"https://rkdigitalmedia.in/services/google-ads"}
    ]},
    {'@type':'Service','name':"Google Ads Services in Noida",'serviceType':"Google Ads Management Services",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/google-ads"}
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': data.faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq[0],
    'acceptedAnswer': {'@type':'Answer','text':faq[1]},
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
