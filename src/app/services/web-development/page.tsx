import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "Website Development Services in Noida | R.K Digital Media",
  description: "Conversion-focused website development for businesses in Noida and Delhi NCR with responsive UX, technical SEO foundations, analytics and clear enquiry paths.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/web-development" },
  openGraph: {
    title: "Website Development Services in Noida | R.K Digital Media",
    description: "Conversion-focused website development for businesses in Noida and Delhi NCR with responsive UX, technical SEO foundations, analytics and clear enquiry paths.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/web-development",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "02",
  "label": "WEBSITE DEVELOPMENT SERVICES",
  "title": "Website Development Services built for search, trust and conversion",
  "intro": "Business websites and landing pages designed to explain the offer clearly, load well, support SEO and make the next action obvious.",
  "intent": "A website is where search traffic, paid traffic, referrals and direct visitors decide whether to trust the business and act. Development therefore connects design, information architecture, technical SEO, analytics and conversion paths.",
  "outcomes": [
    "Clearer information architecture for visitors and search engines.",
    "Responsive pages that remain usable across mobile, tablet and desktop.",
    "Technical foundations supporting crawling, indexing, metadata and structured content.",
    "Clearer enquiry, call, booking or purchase paths with measurable events."
  ],
  "capabilities": [
    [
      "Business website development",
      "Build service-led websites that explain what the business does, who it serves and why visitors should continue."
    ],
    [
      "Landing pages",
      "Create focused pages for paid campaigns, local services, offers or specific search intent."
    ],
    [
      "Next.js & modern builds",
      "Use a modern component-based stack where it improves performance and maintainability."
    ],
    [
      "Technical SEO foundations",
      "Set up clean URLs, metadata, headings, internal linking, canonicalisation and crawl-friendly structures."
    ],
    [
      "Analytics & conversion tracking",
      "Connect relevant analytics and conversion events so meaningful actions can be measured."
    ],
    [
      "Maintenance & iteration",
      "Improve the site after launch through content updates, technical fixes, landing pages and conversion work."
    ]
  ],
  "process": [
    [
      "Discovery",
      "Clarify audience, services, conversion goals, existing traffic and technical constraints."
    ],
    [
      "Architecture",
      "Plan sitemap, page hierarchy, content sections, internal links and conversion paths."
    ],
    [
      "Design & build",
      "Create responsive components with performance and accessibility in the implementation."
    ],
    [
      "Launch & improve",
      "Test key paths, indexing and analytics, then use real data to guide improvements."
    ]
  ],
  "useCases": [
    [
      "Service businesses",
      "Build around services, locations, trust signals and enquiries."
    ],
    [
      "Local businesses",
      "Create location and service architecture that complements GBP and local SEO."
    ],
    [
      "E-commerce brands",
      "Improve product discovery, landing pages and conversion paths."
    ],
    [
      "B2B companies",
      "Turn complex services into clearer pages supporting search and sales."
    ],
    [
      "Campaign landing pages",
      "Give paid traffic a destination designed around the campaign."
    ],
    [
      "Website rebuilds",
      "Replace an outdated site without unnecessarily losing useful search foundations."
    ]
  ],
  "included": [
    "Sitemap and page architecture",
    "Responsive UI implementation",
    "Core service and landing pages",
    "Technical SEO foundations",
    "Analytics and conversion setup",
    "Contact / enquiry paths",
    "Basic performance and QA checks",
    "Launch support"
  ],
  "faqs": [
    [
      "Do you build websites for SEO?",
      "Yes. URLs, headings, metadata, internal links, crawlability and page structure are considered during architecture and development. Rankings still depend on the broader SEO system."
    ],
    [
      "Can you rebuild an existing website?",
      "Yes. A rebuild can preserve useful URLs while improving information architecture and reducing avoidable SEO and conversion losses."
    ],
    [
      "Do you provide content too?",
      "Service and page copy can be planned as part of the project. Larger SEO content programs can be scoped separately."
    ],
    [
      "Can the website connect to ads and analytics?",
      "Yes. Relevant analytics, conversion events and campaign landing pages can be incorporated into the build."
    ]
  ],
  "caseStudy": {
    "eyebrow": "Website + acquisition",
    "title": "See the documented case-study library",
    "text": "Website work often overlaps with SEO, paid acquisition and local visibility. The case-study library shows projects where the website is part of the wider acquisition system.",
    "href": "/case-studies"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"Website Development Services built for search, trust and conversion",'item':"https://rkdigitalmedia.in/services/web-development"}
    ]},
    {'@type':'Service','name':"Website Development Services built for search, trust and conversion",'serviceType':"Website Development Services built for search, trust and conversion",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/web-development"}
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
