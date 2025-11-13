'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  PhoneIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  StarIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: PhoneIcon,
    title: 'Instant Lead Capture',
    description: 'Never miss a call again. Automatically capture and respond to every lead, 24/7.',
  },
  {
    icon: CalendarIcon,
    title: 'Smart Scheduling',
    description: 'Automated appointment booking that syncs with your calendar in real-time.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Follow-Up Automation',
    description: 'Automatic customer follow-ups that actually happen. No more lost opportunities.',
  },
  {
    icon: CreditCardIcon,
    title: 'Payment Reminders',
    description: 'Get paid faster with automated invoice and payment reminder systems.',
  },
  {
    icon: StarIcon,
    title: 'Review Requests',
    description: 'Build your reputation automatically with timely review request automation.',
  },
  {
    icon: BoltIcon,
    title: 'Custom Workflows',
    description: 'Tailored automation that fits your unique business process perfectly.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-electric-blue">Automate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Focus on your craft while we handle the busy work. Our automation solutions
            cover every aspect of your customer journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-navy-900 p-8 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-electric-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
