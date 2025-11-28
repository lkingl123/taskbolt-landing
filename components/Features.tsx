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
import { HiArrowRight } from 'react-icons/hi';

const automations = [
  {
    title: 'Lead Capture',
    trigger: { icon: SiTwilio, label: 'Twilio', color: '#F22F46' },
    action: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    result: { icon: SiGooglecalendar, label: 'Calendar', color: '#4285F4' },
  },
  {
    title: 'Team Alerts',
    trigger: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    action: { icon: SiSlack, label: 'Slack', color: '#4A154B' },
    result: { icon: SiGooglecalendar, label: 'Calendar', color: '#4285F4' },
  },
  {
    title: 'Payments',
    trigger: { icon: SiStripe, label: 'Stripe', color: '#635BFF' },
    action: { icon: SiGmail, label: 'Gmail', color: '#EA4335' },
    result: { icon: SiQuickbooks, label: 'QuickBooks', color: '#2CA01C' },
  },
  {
    title: 'Reviews',
    trigger: { icon: SiTwilio, label: 'Twilio', color: '#F22F46' },
    action: { icon: SiGoogle, label: 'Google', color: '#4285F4' },
    result: { icon: SiSlack, label: 'Slack', color: '#4A154B' },
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
    <section id="features" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-electric-blue">Automate</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your tools, connected and working 24/7
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {automations.map((automation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-sm font-semibold text-electric-blue mb-4 uppercase tracking-wide">
                {automation.title}
              </h3>
              
              <div className="flex items-center justify-between gap-3">
                {/* Trigger */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: automation.trigger.color + '20' }}
                  >
                    <automation.trigger.icon
                      className="w-7 h-7"
                      style={{ color: automation.trigger.color }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    {automation.trigger.label}
                  </span>
                </div>

                {/* Arrow */}
                <HiArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0" />

                {/* Action */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: automation.action.color + '20' }}
                  >
                    <automation.action.icon
                      className="w-7 h-7"
                      style={{ color: automation.action.color }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    {automation.action.label}
                  </span>
                </div>

                {/* Arrow */}
                <HiArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0" />

                {/* Result */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: automation.result.color + '20' }}
                  >
                    <automation.result.icon
                      className="w-7 h-7"
                      style={{ color: automation.result.color }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    {automation.result.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center items-center gap-8 mt-12 opacity-40"
        >
          <SiGmail className="w-6 h-6" style={{ color: '#EA4335' }} />
          <SiGooglecalendar className="w-6 h-6" style={{ color: '#4285F4' }} />
          <SiStripe className="w-6 h-6" style={{ color: '#635BFF' }} />
          <SiQuickbooks className="w-6 h-6" style={{ color: '#2CA01C' }} />
          <SiSlack className="w-6 h-6" style={{ color: '#4A154B' }} />
          <SiTwilio className="w-6 h-6" style={{ color: '#F22F46' }} />
        </motion.div>
      </div>
    </section>
  );
}
