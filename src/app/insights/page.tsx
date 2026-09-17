import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import { blogPosts } from './blog-posts';

export const metadata: Metadata = {
  title: 'Insights & Blog | R.K Digital Media Greater Noida',
  description: 'Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization. Real frameworks, real numbers, no fluff.',
  keywords: [
    'digital marketing blog Greater Noida',
    'SEO blog India',
    'Google Ads blog',
    'local SEO case studies',
    'AI automation blog',
    'digital marketing insights',
    'marketing agency blog',
  ],
  openGraph: {
    title: 'Insights & Blog | R.K Digital Media Greater Noida',
    description: 'Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization. Real frameworks, real numbers, no fluff.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in/insights',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Insights & Blog | R.K Digital Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Blog | R.K Digital Media Greater Noida',
    description: 'Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rkdigitalmedia.in/insights',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'R.K Digital Media Insights',
  description: 'Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization.',
  url: 'https://rkdigitalmedia.in/insights',
  publisher: {
    '@type': 'Organization',
    name: 'R.K Digital Media',
    logo: {
      '@type': 'ImageObject',
      url: 'https://rkdigitalmedia.in/logo.png',
    },
  },
  blogPosts: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `https://rkdigitalmedia.in/insights/${post.slug}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Rohit Kumar',
    },
    publisher: {
      '@type': 'Organization',
      name: 'R.K Digital Media',
    },
  })),
};

export default function InsightsPage() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--rkd-bg)] grid-pattern">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="font-montserrat font-black text-[var(--rkd-fg)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' }}>
            Frameworks That <span className="text-red-italic">Compound</span>
          </h1>
          <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Deep dives on SEO, Google Ads, AI automation, local search, and conversion optimization. Real frameworks, real numbers, no fluff.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="card-interactive group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 text-meta font-mono uppercase tracking-wider text-[var(--rkd-primary)] mb-4">
                  {post.category}
                </div>
                <h3 className="font-montserrat font-semibold text-[var(--rkd-fg)] mb-3 group-hover:text-[var(--rkd-primary)] transition-colors" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', lineHeight: '1.4' }}>
                  {post.title}
                </h3>
                <p className="text-body-sm text-[var(--rkd-fg-muted)] mb-4 line-clamp-2" style={{ lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-meta text-[var(--rkd-fg-subtle)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="btn-primary group inline-flex">
              Suggest a Topic
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}