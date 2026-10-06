import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "SEO Company in Noida | SEO Services & Local SEO | R.K Digital Media",
  description: "SEO company in Noida providing SEO services, local SEO, technical SEO, on-page optimisation and content strategy for businesses in Noida, Greater Noida and Delhi NCR.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/seo" },
  openGraph: {
    title: "SEO Company in Noida | SEO Services & Local SEO | R.K Digital Media",
    description: "SEO company in Noida providing SEO services, local SEO, technical SEO, on-page optimisation and content strategy for businesses in Noida, Greater Noida and Delhi NCR.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/seo",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "04",
  "label": "SEO SERVICES",
  "title": "SEO Company in Noida for Search Growth and Local Visibility",
  "intro": "SEO services in Noida covering technical SEO, on-page optimisation, content strategy and local search work designed to earn visibility for searches that can matter to the business.",
  "intent": "SEO connects technical accessibility, search intent, useful content, internal linking, local relevance and authority. For businesses in Noida, Greater Noida and Delhi NCR, the work also needs clear service and location architecture so important commercial pages can earn visibility without competing with one another. We start with what customers search for, which page should satisfy each intent and what is preventing that page from performing.",
  "outcomes": [
    "Cleaner technical foundations for crawling and indexing.",
    "Pages mapped to distinct search intent instead of overlapping each other.",
    "More useful service, location and informational content.",
    "A clearer internal-linking and content structure supporting important commercial pages.",
    "Better alignment between service pages, local intent and supporting informational content.",
    "A measurable optimisation cycle using Search Console, analytics and page-level evidence."
  ],
  "capabilities": [
    [
      "Technical SEO",
      "Review crawling, indexing, canonicalisation, redirects, metadata and other technical foundations."
    ],
    [
      "Keyword & intent mapping",
      "Group queries by commercial, local, informational and navigational intent and map them to the right page."
    ],
    [
      "On-page optimisation",
      "Improve titles, headings, copy structure, internal links and relevance without keyword stuffing."
    ],
    [
      "Content strategy",
      "Identify useful topics, supporting pages and content gaps based on customer questions and search demand."
    ],
    [
      "Local SEO",
      "Improve local landing pages, GBP alignment and location relevance for businesses serving defined areas."
    ],
    [
      "Measurement & iteration",
      "Use Search Console, analytics and page-level signals to decide what should be improved next."
    ]
  ],
  "process": [
    [
      "Audit",
      "Establish the current technical, content, indexing and search-visibility baseline."
    ],
    [
      "Map",
      "Connect services and customer journeys to search themes and existing or new URLs."
    ],
    [
      "Optimise",
      "Fix technical issues and improve pages with the clearest opportunity and intent."
    ],
    [
      "Measure & expand",
      "Monitor indexing, queries and page performance, then expand based on evidence."
    ]
  ],
  "useCases": [
    [
      "Local service businesses",
      "Build location and service relevance around high-intent local searches."
    ],
    [
      "B2B businesses",
      "Develop commercial service pages and supporting content for longer research journeys."
    ],
    [
      "E-commerce",
      "Improve category, product and supporting content architecture around commercial intent."
    ],
    [
      "Professional services",
      "Turn expertise and customer questions into useful search-led pages."
    ],
    [
      "New websites",
      "Establish technical and information architecture foundations early."
    ],
    [
      "Stagnant websites",
      "Diagnose why pages are not gaining visibility before publishing more content blindly."
    ]
  ],
  "included": [
    "Technical SEO audit",
    "Keyword and search-intent mapping",
    "On-page optimisation",
    "Internal-linking recommendations",
    "Content opportunity mapping",
    "Local SEO support where relevant",
    "Search Console and analytics review",
    "Ongoing prioritised SEO recommendations",
    "Commercial service-page and location-page optimisation",
    "Content-cluster and internal-linking planning",
    "Search Console and analytics-led iteration"
  ],
  "faqs": [
    [
      "How long does SEO take?",
      "Timelines vary by competition, site condition, authority, content quality and demand. A responsible plan identifies priorities rather than promising a fixed ranking date."
    ],
    [
      "Do you guarantee Google rankings?",
      "No. Search results are dynamic and influenced by competition, algorithms, location and many other factors. We measure visibility, qualified traffic and business actions."
    ],
    [
      "Do you provide local SEO services in Noida?",
      "Yes. Local SEO is important for businesses in Noida and nearby areas whose customers search by city, area or proximity. It can include service pages, location relevance, GBP alignment and internal linking."
    ],
    [
      "Can you work with an existing SEO team?",
      "Yes. Technical audits, content mapping and specific workstreams can be scoped independently."
    ]
  ],
  "relatedResources": [
    {
      "eyebrow": "LOCAL SEO",
      "title": "Local SEO Strategy for Greater Noida",
      "text": "A practical local-search framework covering location relevance, website structure and Google Business Profile alignment.",
      "href": "/insights/local-seo-strategy-greater-noida",
      "label": "Read the guide"
    },
    {
      "eyebrow": "GBP + LOCAL SEARCH",
      "title": "Google Business Profile Map Pack Checklist",
      "text": "Use the GBP checklist alongside website and local SEO work when Google Maps visibility is part of the acquisition path.",
      "href": "/insights/gmb-optimization-map-pack-checklist-50-steps",
      "label": "Read the checklist"
    },
    {
      "eyebrow": "SEARCH STRATEGY",
      "title": "SEO vs Paid Ads",
      "text": "Compare organic and paid acquisition based on intent, timeline, measurement and the role each channel can play.",
      "href": "/insights/seo-vs-paid-ads-2025-which-wins",
      "label": "Read the comparison"
    }
  ],
  "relatedService": {
    "eyebrow": "LOCAL SEARCH SUPPORT",
    "title": "Need stronger Google Maps visibility too?",
    "text": "SEO and Google Business Profile work are stronger when the website, local profile and search intent are aligned.",
    "href": "/services/gmb",
    "label": "Explore GBP Management"
  },
  "caseStudy": {
    "eyebrow": "Local SEO / documented project",
    "title": "Local SEO for a Home Services Business",
    "text": "The documented project combines GBP optimisation, location pages, review generation, citations and technical SEO around local search demand.",
    "href": "/case-studies/local-seo-domination"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"SEO Services built around search intent and useful pages",'item':"https://rkdigitalmedia.in/services/seo"}
    ]},
    {'@type':'Service','name':"SEO Company in Noida",'serviceType':"SEO Services",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/seo"}
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
