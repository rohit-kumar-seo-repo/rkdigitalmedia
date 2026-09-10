export const metadata = {
  title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
  description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and local marketing solutions. 1200+ clients served.',
  keywords: ['digital marketing agency Greater Noida', 'SEO services Noida', 'Google Ads management', 'GMB optimization', 'website development Noida'],
  authors: [{ name: 'R.K Digital Media' }],
  creator: 'R.K Digital Media',
  publisher: 'R.K Digital Media',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rkdigitalmedia.in',
    title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and local marketing solutions.',
    siteName: 'R.K Digital Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'R.K Digital Media - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R.K Digital Media | Digital Marketing Agency in Greater Noida',
    description: 'Leading digital marketing agency in Greater Noida offering SEO, Google Ads, GMB optimization, website development, and local marketing solutions.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neogen-bg text-neogen-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}