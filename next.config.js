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
      { source: '/insights/google-ads-suspension-recovery-guide', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      // Redirect legacy URLs with historical Search Console impressions to the closest current equivalent.
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/best-digital-marketing-agency-in-noida', destination: '/', permanent: true },
      { source: '/gbp-management-services', destination: '/services/gmb', permanent: true },
      { source: '/google-ads-services', destination: '/services/google-ads', permanent: true },
      { source: '/google-ads-suspended-for-advertiser-verification', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/google-ads-suspended-for-circumventing-systems', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/portfolio', destination: '/case-studies', permanent: true },
      { source: '/seo-services-in-india', destination: '/services/seo', permanent: true },
      { source: '/top-10-seo-agencies-in-noida', destination: '/services/seo', permanent: true },
      { source: '/website-develoopment-services', destination: '/services/web-development', permanent: true },
      { source: '/why-google-keeps-rejecting-your-circumventing-systems-appeal-and-what-to-do-instead', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      // These legacy suspension pages now belong to the dedicated recovery site.
      { source: '/google-ads-suspended-for-suspicious-payments', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/google-ads-suspended-for-unacceptable-business-practices', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/google-ads-account-suspension-recovery-specialist', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/google-ads-suspended-circumventing-systems', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
      { source: '/google-ads-suspended', destination: 'https://adssuspensionrecovery.com/google-ads-suspended/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
