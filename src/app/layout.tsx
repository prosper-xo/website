import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const timber = localFont({
  src: '../../assets/fonts/feudecamp-timber-webfont.woff2',
  variable: '--font-timber',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prosperxo.com'),
  title: {
    default: 'Prosper XO',
    template: '%s | Prosper XO',
  },
  description:
    "We're building something exciting to put artists back at the center of the industry.",
  openGraph: {
    title: 'Prosper XO',
    description:
      "We're building something exciting to put artists back at the center of the industry.",
    url: 'https://prosperxo.com',
    siteName: 'Prosper XO',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosper XO',
    description:
      "We're building something exciting to put artists back at the center of the industry.",
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32' },
      { url: '/assets/favicon/favicon-96x96.png', sizes: '96x96' },
      { url: '/assets/favicon/favicon-192x192.png', sizes: '192x192' },
    ],
    apple: [
      { url: '/assets/favicon/favicon-180x180.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${timber.variable} ${poppins.variable}`}>
      <head>
        {/* Netlify Identity Widget for CMS Authentication */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script id="netlify-identity" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/cms/";
                  });
                }
              });
            }
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics - Using Next.js recommended approach */}
        <GoogleAnalytics gaId="G-E00NWTHP4Q" />
      </body>
    </html>
  );
}