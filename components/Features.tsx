'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiGmail,
  SiGooglecalendar,
  SiStripe,
  SiQuickbooks,
  SiSlack,
  SiTwilio,
  SiGoogle
} from 'react-icons/si';
import {
  ArchiveBoxIcon,
  CubeIcon,
  TagIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
const automations = [
  {
    title: 'Lead Capture',
    description: 'Never miss a lead again',
    trigger: { icon: SiTwilio, label: 'Twilio', color: '#F22F46' },
    action: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    result: { icon: SiGooglecalendar, label: 'Calendar', color: '#4285F4' },
  },
  {
    title: 'Team Alerts',
    description: 'Keep everyone in the loop',
    trigger: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    action: { icon: SiSlack, label: 'Slack', color: '#611f69' },
    result: { icon: SiGooglecalendar, label: 'Calendar', color: '#4285F4' },
  },
  {
    title: 'Payments',
    description: 'Automate your finances',
    trigger: { icon: SiStripe, label: 'Stripe', color: '#635BFF' },
    action: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    result: { icon: SiQuickbooks, label: 'QuickBooks', color: '#2CA01C' },
  },
  {
    title: 'Reviews',
    description: 'Build your reputation',
    trigger: { icon: SiTwilio, label: 'Twilio', color: '#F22F46' },
    action: { icon: SiGoogle, label: 'Google', color: '#4285F4' },
    result: { icon: SiSlack, label: 'Slack', color: '#611f69' },
  },
];

// (Original Features component with integration animation preserved below)
function AnimatedConnection_OLD() { return null; }
function IconNode_OLD() { return null; }
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================

const services = [
  {
    icon: TruckIcon,
    title: 'Local Pickup Available',
    description: 'We drive to you. Salt Lake Valley and nearby. Small-batch work that fits in a car. No pallets, no oversized freight.',
    color: '#F5C518',
  },
  {
    icon: ArchiveBoxIcon,
    title: 'Packaging & Order Fulfillment',
    description: 'Pack orders, apply labels, prep boxes for outgoing shipments. Etsy, Shopify, eBay, whatever your platform is, we handle the boxes.',
    color: '#3DB8FF',
  },
  {
    icon: CubeIcon,
    title: 'Kitting & Assembly',
    description: 'Subscription boxes, welcome kits, wedding favors, corporate gift sets. You hand off the components, we hand back finished kits.',
    color: '#3DB8FF',
  },
  {
    icon: TagIcon,
    title: 'Tagging & Prep Work',
    description: 'Hangtags, polybagging, folding, FBA prep, light QC. All the tedious stuff that eats your week and your sanity.',
    color: '#F5C518',
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Sorting & Light QC',
    description: "Small-batch inventory counts, returns inspection, sorting items by SKU or condition. We bring the patience you don't have time for.",
    color: '#3DB8FF',
  },
  {
    icon: ClockIcon,
    title: 'Bursty or Recurring',
    description: 'One big crunch this week, or steady weekly help, your call. No minimum commitment, no long-term contract.',
    color: '#F5C518',
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
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
            <span className="text-sm text-electric-blue font-medium">What We Do</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Work We <span className="text-electric-blue">Take Off Your Hands</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hands-on labor for Utah small businesses. We do the boring, repetitive, time-consuming stuff so you can focus on what actually grows your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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

                <div className="relative">
                  <div
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
