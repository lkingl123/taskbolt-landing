'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import { CAL_URL } from '@/lib/constants';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
export default function CTA_OLD() {
  return (
    <section className="py-24 bg-gradient-to-br from-electric-yellow via-electric-blue to-electric-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BoltIcon className="w-16 h-16 text-navy-900 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Stop Losing Leads to Your Voicemail
          </h2>
          <p className="text-xl md:text-2xl text-navy-900 mb-10 opacity-90">
            Join service businesses saving 10+ hours per week with automation.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 bg-navy-900 text-electric-yellow font-bold rounded-lg text-xl"
          >
            Schedule Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================
export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-br from-electric-yellow to-electric-blue relative overflow-hidden">
      {/* Subtle background blobs (toned down from the original yellow-blue-yellow gradient) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <BoltIcon className="w-16 h-16 text-navy-900" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Stop Letting Backlog Ruin Your Week.
          </h2>

          <p className="text-xl md:text-2xl text-navy-900 mb-10 opacity-90">
            We pick up the work. We get it done. You move on.
          </p>

          {/* Promises (not stats — three honest commitments) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-navy-900/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-navy-900">
              <div className="text-lg md:text-xl font-bold text-navy-900 mb-1">Local Pickup</div>
              <div className="text-sm text-navy-900 opacity-80">We come to you</div>
            </div>
            <div className="bg-navy-900/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-navy-900">
              <div className="text-lg md:text-xl font-bold text-navy-900 mb-1">Quote Upfront</div>
              <div className="text-sm text-navy-900 opacity-80">No surprises</div>
            </div>
            <div className="bg-navy-900/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-navy-900">
              <div className="text-lg md:text-xl font-bold text-navy-900 mb-1">Fast Turnaround</div>
              <div className="text-sm text-navy-900 opacity-80">Most jobs in 24–72 hr</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-navy-900 text-electric-yellow font-bold rounded-lg text-xl hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get a Quote
            </a>
            <p className="mt-4 text-navy-900 opacity-80 text-lg">
              No commitment. Tell us about your backlog and get a quote.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
