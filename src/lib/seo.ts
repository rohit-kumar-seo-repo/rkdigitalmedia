// SEO Utilities for R.K Digital Media
// Comprehensive SEO helpers for technical SEO, on-page SEO, and AI/GEO optimization

import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  twitterCard?: 'summary_large_image' | 'summary';
  noIndex?: boolean;
  noFollow?: boolean;
  schema?: Record<string, unknown>[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
    tags: string[];
  };
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://rkdigitalmedia.in';
  const fullCanonical = `${baseUrl}${config.canonical}`;
  const ogImage = config.ogImage ? `${baseUrl}${config.ogImage}` : '/og-image.jpg';

  const robots: Metadata['robots'] = {
    index: !config.noIndex,
    follow: !config.noFollow,
    googleBot: {
      index: !config.noIndex,
      follow: !config.noFollow,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };

  const schema: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (config.breadcrumbs || []).map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.url}`,
      })),
    },
  ];

  if (config.faq && config.faq.length > 0) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  if (config.article) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: config.title,
      description: config.description,
      image: `${baseUrl}${config.ogImage || '/og-image.jpg'}`,
      datePublished: config.article.publishedTime,
      dateModified: config.article.modifiedTime,
      author: {
        '@type': 'Person',
        name: config.article.author,
        url: 'https://rkdigitalmedia.in/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'R.K Digital Media',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rkdigitalmedia.in/logo.png',
        },
      },
      articleSection: config.article.section,
      keywords: config.article.tags.join(', '),
      inLanguage: 'en-IN',
    });
  }

  if (config.schema) {
    schema.push(...config.schema);
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'R.K Digital Media' }],
    creator: 'R.K Digital Media',
    publisher: 'R.K Digital Media',
    robots: {
      index: !config.noIndex,
      follow: !config.noFollow,
      googleBot: {
        index: !config.noIndex,
        follow: !config.noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: (config.ogType === 'service' ? 'website' : config.ogType) || 'website',
      locale: 'en_IN',
      url: `${baseUrl}${config.canonical}`,
      title: config.title,
      description: config.description,
      siteName: 'R.K Digital Media',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: config.twitterCard || 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImage],
      creator: '@rkdigitalmedia',
    },
    alternates: {
      canonical: fullCanonical,
      languages: {
        'en-IN': `${baseUrl}${config.canonical}`,
      },
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          ...(schema || []),
        ],
      }),
    },
  };
}

export const serviceKeywords = {
  'seo': [
    'SEO services Greater Noida',
    'SEO agency Noida',
    'local SEO Greater Noida',
    'technical SEO audit',
    'SEO company Greater Noida',
    'search engine optimization services',
    'Google ranking services',
    'organic traffic growth',
  ],
  'performance-marketing': [
    'Google Ads agency Greater Noida',
    'Meta Ads agency Noida',
    'PPC agency Greater Noida',
    'Google Ads management',
    'Facebook Ads agency',
    'lead generation services',
    'ROAS optimization',
    'paid advertising agency',
  ],
  'ai-automation': [
    'AI automation agency',
    'WhatsApp automation',
    'AI chatbot development',
    'CRM automation services',
    'n8n workflow automation',
    'AI voice agents',
    'lead qualification automation',
    'marketing automation agency',
  ],
  'web-development': [
    'web development agency Greater Noida',
    'Next.js development agency',
    'WordPress development',
    'e-commerce website development',
    'landing page design',
    'conversion rate optimization',
    'website redesign services',
    'custom web application development',
  ],
  'creative': [
    'creative agency Greater Noida',
    'ad creative production',
    'video production agency',
    'motion graphics services',
    'brand identity design',
    'social media content creation',
    'ad creatives for Meta Google',
    'UGC content creation',
  ],
  'crm': [
    'CRM implementation services',
    'GoHighLevel setup',
    'WhatsApp Business API integration',
    'sales pipeline automation',
    'lead management system',
    'revenue operations consulting',
    'marketing automation setup',
    'GoHighLevel agency',
  ],
};

export const locationKeywords = [
  'Greater Noida',
  'Noida',
  'Delhi NCR',
  'Delhi',
  'Ghaziabad',
  'Faridabad',
  'Gurugram',
  'India',
];

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  category: string;
  areaServed: string[];
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `https://rkdigitalmedia.in${service.url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://rkdigitalmedia.in/#localbusiness',
      name: 'R.K Digital Media',
    },
    category: service.category,
    areaServed: service.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    serviceType: service.category,
    ...(service.priceRange && { priceRange: service.priceRange }),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  section: string;
  tags: string[];
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `https://rkdigitalmedia.in${article.image}`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://rkdigitalmedia.in/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'R.K Digital Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rkdigitalmedia.in/logo.png',
      },
    },
    articleSection: article.section,
    keywords: article.tags.join(', '),
    inLanguage: 'en-IN',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rkdigitalmedia.in${article.url}`,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServicePageMetadata(service: {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  category: string;
  location: string[];
}) {
  const canonical = `/services/${service.slug}`;
  const title = `${service.name} Services | R.K Digital Media ${service.location.join(', ')}`;
  const description = `${service.description} Expert ${service.name.toLowerCase()} services for businesses in ${service.location.join(', ')}. Proven results, transparent pricing.`;
  
  return {
    title,
    description,
    keywords: [...service.keywords, ...service.location.map(loc => `${service.name.toLowerCase()} ${loc.toLowerCase()}`)],
    canonical,
    ogType: 'service' as const,
    schema: [generateServiceSchema({
      name: service.name,
      description: service.description,
      url: canonical,
      category: service.category,
      areaServed: service.location,
    })],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: canonical },
    ],
    faq: [
      { question: `How much does ${service.name.toLowerCase()} cost?`, answer: 'Pricing depends on scope, competition, and goals. We provide custom quotes after a free 30-minute audit.' },
      { question: `How long does ${service.name.toLowerCase()} take to show results?`, answer: 'Typically 30-90 days for initial results, depending on competition and current state. We provide realistic timelines during audit.' },
      { question: `Do you work with businesses outside ${service.location[0]}?`, answer: `Yes, we serve clients across ${service.location.join(', ')} and select clients nationwide. Remote collaboration works well for most engagements.` },
    ],
  };
}

export const siteWideKeywords = [
  'digital marketing agency',
  'SEO services',
  'performance marketing',
  'AI automation',
  'web development',
  'Google Ads management',
  'GMB optimization',
  'local SEO',
  'Greater Noida',
  'NCR',
  'India',
  'worldwide',
];

export function generateCanonicalUrl(path: string): string {
  return `https://rkdigitalmedia.in${path}`;
}

export function generateHreflangUrls(path: string) {
  return {
    'en-IN': `https://rkdigitalmedia.in${path}`,
    'x-default': `https://rkdigitalmedia.in${path}`,
  };
}