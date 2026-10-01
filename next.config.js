/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/services/performance-marketing', destination: '/services/google-ads', permanent: true },
      { source: '/services/creative', destination: '/services', permanent: true },
      { source: '/services/crm', destination: '/services/ai-automation', permanent: true },
      { source: '/insights/ai-automation-lead-generation', destination: '/insights/ai-automation-lead-generation-5-workflows', permanent: true },
      { source: '/insights/seo-vs-paid-ads-greater-noida', destination: '/insights/seo-vs-paid-ads-2025-which-wins', permanent: true },
      { source: '/insights/google-ads-suspension-recovery-guide', destination: '/insights/google-ads-suspension-recovery-complete-guide', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
    ];
  },
};

module.exports = nextConfig;
