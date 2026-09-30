import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "SEO Services in Noida & Greater Noida | R.K Digital Media",
  description: "SEO services covering technical SEO, search-intent mapping, on-page optimisation, content and local SEO for businesses in Noida, Greater Noida and Delhi NCR.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/seo" },
  openGraph: {
    title: "SEO Services in Noida & Greater Noida | R.K Digital Media",
    description: "SEO services covering technical SEO, search-intent mapping, on-page optimisation, content and local SEO for businesses in Noida, Greater Noida and Delhi NCR.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/seo",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "04",
  "label": "SEO SERVICES",
  "title": "SEO Services built around search intent and useful pages",
  "intro": "Technical SEO, on-page optimisation, content strategy and local search work designed to earn visibility for searches that can matter to the business.",
  "intent": "SEO connects technical accessibility, search intent, useful content, internal linking, local relevance and authority. The starting point is understanding what people search for and whether the site gives them a strong answer.",
  "outcomes": [
    "Cleaner technical foundations for crawling and indexing.",
    "Pages mapped to distinct search intent instead of overlapping each other.",
    "More useful service, location and informational content.",
    "A clearer internal-linking and content structure supporting important pages."
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
    "Ongoing prioritised SEO recommendations"
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
      "Do you focus on local SEO?",
      "Yes. Local SEO is important for businesses whose customers search by city, area or proximity. It can include website pages, GBP and local relevance signals."
    ],
    [
      "Can you work with an existing SEO team?",
      "Yes. Technical audits, content mapping and specific workstreams can be scoped independently."
    ]
  ],
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
    {'@type':'Service','name':"SEO Services built around search intent and useful pages",'serviceType':"SEO Services built around search intent and useful pages",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/seo"}
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
