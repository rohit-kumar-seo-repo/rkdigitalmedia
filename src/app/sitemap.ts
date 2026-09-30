import { MetadataRoute } from 'next';
import { suspensionPolicies } from '@/data/suspension-policies';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rkdigitalmedia.in';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/services/google-ads`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/gmb`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/ai-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/web-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/google-ads-suspension-recovery`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...suspensionPolicies.map((policy) => ({
      url: `${base}/services/google-ads-suspension-recovery/policies/${policy.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/case-studies/local-seo-domination`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies/google-ads-recovery`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies/b2b-lead-gen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies/healthcare-clinic`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/industries/healthcare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/real-estate`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/education`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/industries/hospitality`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // Blog
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/insights/seo-vs-paid-ads-2025-which-wins`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights/google-ads-suspension-recovery-complete-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights/gmb-optimization-map-pack-checklist-50-steps`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights/ai-automation-lead-generation-5-workflows`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights/local-seo-strategy-greater-noida`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}