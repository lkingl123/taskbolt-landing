'use client';

import { motion } from 'framer-motion';
import { BoltIcon } from '@heroicons/react/24/solid';
import { CALENDLY_URL, TRUST_BADGES } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-yellow opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* TaskBolt logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="relative">
              <Image
                src="/taskbolt_logo.png"
                alt="TaskBolt Logo"
                width={180}
                height={180}
                quality={100}
                unoptimized
                className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] drop-shadow-lg"
                priority
              />
              <div className="absolute inset-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] animate-ping opacity-20">
                <Image
                  src="/taskbolt_logo.png"
                  alt="TaskBolt Logo"
                  width={180}
                  height={180}
                  quality={100}
                  unoptimized
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2"
          >
            Never Miss Another Lead{' '}
            <span className="text-electric-yellow">While You're on the Job</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto px-2"
          >
            Automated lead capture, instant follow-ups, and payment reminders.
            We build the systems that run your business while you work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 md:px-8 py-4 bg-electric-blue text-navy-900 font-bold rounded-lg text-base md:text-lg hover:bg-electric-yellow transition-all duration-300 transform hover:scale-105 glow-electric hover:glow-yellow text-center"
            >
              <span className="relative z-10">Schedule Free 15-Min Call</span>
              <div className="absolute inset-0 bg-electric-yellow opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto px-6 md:px-8 py-4 border-2 border-electric-blue text-electric-blue font-bold rounded-lg text-base md:text-lg hover:bg-electric-blue hover:text-navy-900 transition-all duration-300 text-center"
            >
              View Pricing
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-gray-400 mb-20 md:mb-0"
          >
            {TRUST_BADGES.slice(0, 3).map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span className="text-sm md:text-base">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
