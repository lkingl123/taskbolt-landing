'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
