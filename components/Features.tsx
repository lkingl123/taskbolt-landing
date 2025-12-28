'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  BoltIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Lead Capture & Response',
    description: 'Never miss a lead even when you\'re on the job',
    icon: ChatBubbleLeftRightIcon,
    color: '#F59E0B',
    features: ['Instant text/email response', 'Web form capture', 'After-hours handling', 'Lead qualification'],
  },
  {
    title: 'Automated Follow-Ups',
    description: 'Stay top of mind without lifting a finger',
    icon: CalendarDaysIcon,
    color: '#3B82F6',
    features: ['Email sequences', 'SMS reminders', 'Quote follow-ups', 'Review requests'],
  },
  {
    title: 'Payment Automation',
    description: 'Get paid faster with automatic reminders',
    icon: CurrencyDollarIcon,
    color: '#10B981',
    features: ['Invoice reminders', 'Payment links', 'Overdue alerts', 'Receipt automation'],
  },
  {
    title: 'Custom Workflows',
    description: 'Automate any repetitive task in your business',
    icon: BoltIcon,
    color: '#8B5CF6',
    features: ['Job scheduling', 'Status updates', 'Document sending', 'Any integration'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-sm text-electric-blue font-medium">Automation That Works</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Business on <span className="text-electric-blue">Autopilot</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We build custom automation so you can focus on the work, not the busywork
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-navy-900 to-navy-900/50 p-8 rounded-2xl border border-navy-700/50 hover:border-electric-blue/50 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon and Title */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="relative grid grid-cols-2 gap-2 mt-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
