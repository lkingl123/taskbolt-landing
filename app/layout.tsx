import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO } from "@/lib/constants";

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
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
