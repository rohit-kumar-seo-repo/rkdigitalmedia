'use client';

import Script from 'next/script';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!measurementId) return null;

  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        (function () {
          // Keep Vercel preview/test hostnames out of production analytics.
          var allowedHosts = ['rkdigitalmedia.in', 'www.rkdigitalmedia.in'];
          if (!allowedHosts.includes(window.location.hostname)) return;

          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', {
            anonymize_ip: true,
            send_page_view: true
          });

          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=${measurementId}';
          document.head.appendChild(script);
        })();
      `}
    </Script>
  );
}
