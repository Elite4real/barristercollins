import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* ── DEFAULT FALLBACK SEO (overridden per page) ── */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Bar. James Scott Collins" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Default title & description (overridden per page) */}
        <title>Collins Law Firm | Houston Attorney | barristercollins.com</title>
        <meta name="description" content="Bar. James Scott Collins — Licensed Houston Assistant Attorney. Expert legal representation in criminal defense, civil litigation, corporate law, real estate & family law. Free consultation." />

        {/* Default Open Graph */}
        <meta property="og:site_name" content="Collins Law Firm" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.barristercollins.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Collins Law Firm — District of Houston" />

        {/* Default Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@barristercollins" />
        <meta name="twitter:image" content="https://www.barristercollins.com/og-image.jpg" />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#0d1b2a" />
        <meta name="msapplication-TileColor" content="#0d1b2a" />
        <meta name="application-name" content="Collins Law Firm" />
        <meta name="apple-mobile-web-app-title" content="Collins Law" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geo targeting — Houston TX */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston" />
        <meta name="geo.position" content="29.7604;-95.3698" />
        <meta name="ICBM" content="29.7604, -95.3698" />

        
      </Head>

      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}