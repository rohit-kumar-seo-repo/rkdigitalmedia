import type { Metadata } from 'next';
import { ServicePillarPage, type ServicePillarData } from '@/components/ServicePillarPage';

export const metadata: Metadata = {
  title: "Google Business Profile Management in Noida | R.K Digital Media",
  description: "Google Business Profile management and optimisation in Noida covering categories, services, reviews, profile updates and local search visibility for businesses in Noida, Greater Noida and Delhi NCR.",
  alternates: { canonical: "https://rkdigitalmedia.in/services/gmb" },
  openGraph: {
    title: "Google Business Profile Management in Noida | R.K Digital Media",
    description: "Google Business Profile management and optimisation in Noida covering categories, services, reviews, profile updates and local search visibility for businesses in Noida, Greater Noida and Delhi NCR.",
    type: 'website',
    url: "https://rkdigitalmedia.in/services/gmb",
    siteName: 'R.K Digital Media',
  },
};

const data: ServicePillarData = {
  "number": "05",
  "label": "GOOGLE BUSINESS PROFILE MANAGEMENT",
  "title": "Google Business Profile Management in Noida for Stronger Local Visibility",
  "intro": "Google Business Profile optimisation and ongoing management for businesses in Noida, Greater Noida and Delhi NCR that depend on Google Maps, local discovery, calls, directions and enquiries.",
  "intent": "Google Business Profile management is one part of local SEO, but an important one. A strong profile needs accurate information, appropriate categories, useful services, legitimate reviews and alignment with the website and real-world business.",
  "outcomes": [
    "A more complete and accurately positioned Business Profile.",
    "Better alignment between categories, services, website content and the actual business.",
    "A repeatable review-response and profile-update process.",
    "Stronger local-search foundations alongside website and citation work."
  ],
  "capabilities": [
    [
      "Profile setup & optimisation",
      "Configure or improve core business information, categories, description, services and available profile fields for the local market."
    ],
    [
      "Category strategy",
      "Review primary and secondary categories against the actual business model and local search intent."
    ],
    [
      "Services & products",
      "Structure relevant services or products so visitors understand the offer."
    ],
    [
      "Reviews & responses",
      "Create a legitimate review-request process and respond consistently to feedback."
    ],
    [
      "Posts & profile updates",
      "Use relevant profile updates where they genuinely help customers understand offers or changes."
    ],
    [
      "Local SEO alignment",
      "Connect GBP work with location pages, on-page signals, citations and broader local SEO foundations so the profile and website support the same local search intent."
    ]
  ],
  "process": [
    [
      "Audit",
      "Review the profile, categories, services, information, reviews and website alignment."
    ],
    [
      "Optimise",
      "Correct profile structure and improve information customers use to evaluate the business."
    ],
    [
      "Manage",
      "Maintain updates, review responses and profile information according to scope."
    ],
    [
      "Measure",
      "Monitor local visibility and customer actions where data is available, then prioritise improvements."
    ]
  ],
  "useCases": [
    [
      "Clinics & healthcare",
      "Improve local discovery while keeping business information accurate."
    ],
    [
      "Home services",
      "Support searches where customers compare nearby providers and need a quick route to contact."
    ],
    [
      "Gyms & fitness",
      "Clarify services, location, hours and customer feedback."
    ],
    [
      "Restaurants & hospitality",
      "Keep core information and customer-facing profile content current."
    ],
    [
      "Professional services",
      "Strengthen local relevance for service-led businesses."
    ],
    [
      "Multi-location businesses",
      "Create a consistent process while keeping each location accurate and distinct."
    ]
  ],
  "included": [
    "GBP audit",
    "Category and service optimisation",
    "Business information review",
    "Review workflow and response guidance",
    "Profile update management",
    "Website-to-GBP alignment",
    "Local SEO recommendations",
    "Ongoing profile monitoring within agreed scope"
  ],
  "faqs": [
    [
      "Can you guarantee a Google Maps ranking?",
      "No. Local rankings depend on relevance, distance, prominence, competition and other signals. Optimisation improves the local presence but cannot guarantee a position."
    ],
    [
      "Can you manage reviews?",
      "We can establish a legitimate review-request process and manage responses. We do not recommend buying, fabricating or manipulating reviews."
    ],
    [
      "Do you provide Google Business Profile management outside Noida?",
      "Yes. The service can be delivered remotely, while Noida, Greater Noida and Delhi NCR are important local markets."
    ],
    [
      "Is GBP management enough for local SEO?",
      "Not always. Competitive local searches may also require website, location pages, reviews, citations and broader local relevance."
    ]
  ],
  "caseStudy": {
    "eyebrow": "Local SEO / documented project",
    "title": "Local SEO for a Home Services Business",
    "text": "The documented project combines GBP optimisation with location pages, review generation, citations and technical SEO rather than treating the profile as an isolated task.",
    "href": "/case-studies/local-seo-domination"
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://rkdigitalmedia.in/'},
      {'@type':'ListItem','position':2,'name':'Services','item':'https://rkdigitalmedia.in/services'},
      {'@type':'ListItem','position':3,'name':"Google Business Profile Management in Noida for Stronger Local Visibility",'item':"https://rkdigitalmedia.in/services/gmb"}
    ]},
    {'@type':'Service','name':"Google Business Profile Management for stronger local visibility",'serviceType':"Google Business Profile Management",'provider':{'@type':'LocalBusiness','name':'R.K Digital Media','url':'https://rkdigitalmedia.in/'},'areaServed':[{'@type':'City','name':'Noida'},{'@type':'City','name':'Greater Noida'},{'@type':'City','name':'Ghaziabad'},{'@type':'City','name':'Delhi'}],'url':"https://rkdigitalmedia.in/services/gmb"}
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
