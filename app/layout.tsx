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
        alt: "TaskBolt - Lightning-Fast Automation for Service Businesses",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
