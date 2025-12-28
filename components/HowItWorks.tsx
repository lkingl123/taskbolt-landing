'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, pain points, and goals. What\'s eating your time? Where are leads slipping through?',
  },
  {
    number: '02',
    title: 'Custom Setup',
    description: 'We build your CRM, client portal, and automation workflows tailored to how you actually work.',
  },
  {
    number: '03',
    title: 'Go Live',
    description: 'Your complete system goes live. Track leads, manage projects, and delight clients from day one.',
  },
  {
    number: '04',
    title: 'Ongoing Partnership',
    description: 'We don\'t disappear after launch. Unlimited support, updates, and optimization included.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-electric-yellow">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with TaskBolt in four simple steps. No technical expertise required.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[47px] md:left-[47px] top-24 w-0.5 h-24 bg-gradient-to-b from-electric-blue to-transparent hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-electric-yellow flex items-center justify-center text-navy-900 font-bold text-2xl shadow-lg glow-electric">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3 text-electric-yellow">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
