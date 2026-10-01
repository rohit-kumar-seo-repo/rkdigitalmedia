import type { MetadataRoute } from 'next';
import { suspensionPolicies } from '@/data/suspension-policies';
import { blogPosts } from '@/app/insights/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rkdigitalmedia.in';
  const now = new Date();

  const core = [
    ['', 'weekly', 1],
    ['/services', 'weekly', 0.9],
    ['/services/google-ads', 'monthly', 0.8],
    ['/services/seo', 'monthly', 0.8],
    ['/services/gmb', 'monthly', 0.8],
    ['/services/ai-automation', 'monthly', 0.8],
    ['/services/web-development', 'monthly', 0.8],
    ['/services/google-ads-suspension-recovery', 'monthly', 0.8],
    ['/case-studies', 'weekly', 0.9],
    ['/case-studies/local-seo-domination', 'monthly', 0.8],
    ['/case-studies/google-ads-recovery', 'monthly', 0.8],
    ['/case-studies/b2b-lead-gen', 'monthly', 0.8],
    ['/case-studies/healthcare-clinic', 'monthly', 0.8],
    ['/about', 'monthly', 0.7],
    ['/process', 'monthly', 0.7],
    ['/insights', 'weekly', 0.7],
    ['/contact', 'monthly', 0.8],
    ['/faq', 'monthly', 0.6],
    ['/industries/healthcare', 'monthly', 0.7],
    ['/industries/ecommerce', 'monthly', 0.7],
    ['/industries/real-estate', 'monthly', 0.7],
    ['/industries/education', 'monthly', 0.7],
    ['/industries/hospitality', 'monthly', 0.7],
    ['/privacy', 'yearly', 0.3],
    ['/terms', 'yearly', 0.3],
  ] as const;

  return [
    ...core.map(([path, changeFrequency, priority]) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...suspensionPolicies.map((policy) => ({
      url: `${base}/services/google-ads-suspension-recovery/policies/${policy.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
