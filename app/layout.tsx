import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskBolt - Lightning-Fast Automation for Service Businesses",
  description: "Stop losing money to missed calls and forgotten follow-ups. TaskBolt automates your busiest tasks so you can focus on the job.",
  keywords: "automation, service business, plumbing automation, HVAC automation, contractor automation, lead capture, appointment scheduling",
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
