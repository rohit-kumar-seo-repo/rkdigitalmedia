import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "Website Development Company in Noida | R.K Digital Media",
  description: "Website development company in Noida building responsive business websites, landing pages and SEO-ready web experiences for businesses in Noida, Greater Noida and Delhi NCR.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/web-development" },
  openGraph: {
    title: "Website Development Company in Noida | R.K Digital Media",
    description: "Website development company in Noida building responsive business websites, landing pages and SEO-ready web experiences for businesses in Noida, Greater Noida and Delhi NCR.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/web-development",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "02",
  "label": "WEBSITE DEVELOPMENT SERVICES",
  "title": "Website Development Company in Noida for Search, Trust and Conversion",
  "intro": "Website development in Noida for businesses that need a credible, responsive website with clean architecture, technical SEO foundations and clear enquiry paths.",
  "intent": "A business website is where search traffic, paid traffic, referrals and direct visitors decide whether to trust the company and take action. Our website development services in Noida connect design, information architecture, technical SEO, analytics and conversion paths so the site supports both acquisition and enquiries.",
  "outcomes": [
    "Clearer information architecture for visitors and search engines.",
    "Responsive pages that remain usable across mobile, tablet and desktop.",
    "Technical foundations supporting crawling, indexing, metadata and structured content.",
    "Clearer enquiry, call, booking or purchase paths with measurable events."
  ],
  "capabilities": [
    [
      "Business website development",
      "Build service-led websites for businesses in Noida and Delhi NCR that explain the offer clearly, support search visibility and guide visitors toward enquiry or booking."
    ],
    [
      "Landing pages",
      "Create focused landing pages for Google Ads, local services, offers and specific commercial search intent."
    ],
    [
      "Next.js & modern builds",
      "Use a modern component-based stack where it improves performance and maintainability."
    ],
    [
      "Technical SEO foundations",
      "Set up clean URLs, metadata, headings, internal linking, canonicalisation and crawl-friendly structures from the start."
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
      "Do you build SEO-ready websites in Noida?",
      "Yes. URLs, headings, metadata, internal links, crawlability and page structure are considered during architecture and development. Rankings still depend on the broader SEO system and ongoing content and authority work."
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
  "relatedResources": [
    {
      "eyebrow": "SEARCH FOUNDATION",
      "title": "SEO Services in Noida",
      "text": "A new website needs a search strategy as well as a technical foundation. See how the ongoing SEO service fits after development.",
      "href": "/services/seo",
      "label": "Explore SEO Services"
    },
    {
      "eyebrow": "PAID ACQUISITION",
      "title": "Google Ads Services in Noida",
      "text": "For campaign landing pages and paid acquisition, the website and advertising strategy need to work together.",
      "href": "/services/google-ads",
      "label": "Explore Google Ads"
    },
    {
      "eyebrow": "LOCAL SEARCH",
      "title": "Google Business Profile Management",
      "text": "Local businesses can connect website structure and local profile management to create a more consistent customer journey.",
      "href": "/services/gmb",
      "label": "Explore GBP Management"
    }
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
      {'@type':'ListItem','position':3,'name':"Website Development Company in Noida for Search, Trust and Conversion",'item':"https://rkdigitalmedia.in/services/web-development"}
    ]},
    {'@type':'Service','name':"Website Development Company in Noida for Search, Trust and Conversion",'serviceType':"Website Development Company in Noida for Search, Trust and Conversion",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/web-development"}
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
