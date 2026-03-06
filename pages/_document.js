import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme */}
        <meta name="theme-color" content="#0d1b2a" />
        <meta name="msapplication-TileColor" content="#0d1b2a" />

        {/* Default OG */}
        <meta property="og:image" content="https://www.barristercollins.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Collins Law Firm" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.barristercollins.com/og-image.jpg" />

        {/* Smartsupp Live Chat */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = '9a203807171b7553cc404f996b06131988f867f7';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';
                s.parentNode.insertBefore(c,s);
              })(document);
            `,
          }}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Collins Law Firm",
              "alternateName": "Barrister Collins Law Firm District of Houston",
              "description": "Bar. James Scott Collins — Houston Assistant Attorney providing expert legal representation across criminal defense, civil litigation, corporate law, real estate, family law, and estate planning.",
              "url": "https://www.barristercollins.com",
              "logo": "https://www.barristercollins.com/logo.png",
              "image": "https://www.barristercollins.com/og-image.jpg",
              "telephone": "+1-713-000-0000",
              "email": "Bar.collins231@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.7604",
                "longitude": "-95.3698"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "areaServed": { "@type": "City", "name": "Houston" },
              "founder": {
                "@type": "Person",
                "name": "James Scott Collins",
                "jobTitle": "Houston Assistant Attorney",
                "identifier": "656678HS"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criminal Defense" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil Litigation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Law" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Law" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Law" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Planning" } }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/barristercollins",
                "https://www.linkedin.com/company/barristercollins"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noreferrer">Smartsupp</a>
        </noscript>
      </body>
    </Html>
  );
}