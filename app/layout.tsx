import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO, CONTACT_EMAIL, CONTACT_PHONE_E164, COMPANY_LOCATION, COMPANY_NAME } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "TaskBolt" }],
  creator: "TaskBolt",
  publisher: "TaskBolt",
  metadataBase: new URL(SEO.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.siteUrl,
    title: SEO.title,
    description: SEO.description,
    siteName: "TaskBolt",
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "TaskBolt | Local Utah Contract Labor for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: SEO.twitterHandle,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
      suppressHydrationWarning is applied at both <html> and <body> for two reasons:

      1. Browser extensions (Bitdefender, Grammarly, LastPass, dark-reader, etc.)
         inject attributes into <html>/<body> after SSR but before React hydration.
         These false-positive hydration warnings are noise.

      2. This site uses Framer Motion heavily with `useInView` / `variants` /
         `whileInView` patterns. Those produce slight inline-style differences
         between SSR and client first paint. The visual outcome is identical for
         users — the warnings are dev-only noise that doesn't impact production.

      IMPORTANT: This does NOT hide real bugs. It only suppresses the specific
      "server HTML didn't match client HTML on initial render" warning. Real
      JavaScript errors, type errors, render errors, etc. still surface normally.
    */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          LocalBusiness JSON-LD. Tells Google this is a Utah-based local
          contract labor business so it can surface in local search and Maps.
          Update fields here when LLC name / phone / address change.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: COMPANY_NAME,
              description: SEO.description,
              url: SEO.siteUrl,
              telephone: CONTACT_PHONE_E164,
              email: CONTACT_EMAIL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "1455 W 8230 S",
                addressLocality: "West Jordan",
                addressRegion: "UT",
                postalCode: "84088",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "West Jordan" },
                { "@type": "City", name: "Salt Lake City" },
                { "@type": "City", name: "Lehi" },
                { "@type": "City", name: "Provo" },
                { "@type": "City", name: "Orem" },
                { "@type": "AdministrativeArea", name: COMPANY_LOCATION },
              ],
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-20:00",
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
