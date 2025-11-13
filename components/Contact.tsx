'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BoltIcon, CalendarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-yellow to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-electric-yellow">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a free 15-minute call or send us a message. Let's talk about your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://calendly.com/taskbolt/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 p-6 rounded-xl border border-electric-blue hover:border-electric-yellow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                  <CalendarIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-electric-blue transition-colors">Schedule a Call</h4>
                  <p className="text-gray-300 text-sm">Book your free 15-minute consultation</p>
                  <p className="text-electric-blue text-sm mt-1">Click to schedule →</p>
                </div>
              </div>
            </a>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Email Us</h4>
                  <a href="mailto:hello@taskbolt.com" className="text-gray-300 text-sm hover:text-electric-blue transition-colors">
                    hello@taskbolt.com
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Based in Utah</h4>
                  <p className="text-gray-300 text-sm">Serving businesses nationwide</p>
                  <p className="text-gray-400 text-sm mt-1">Local support, anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>24-48hr Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>Unlimited Support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
