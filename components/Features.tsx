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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

function AnimatedConnection({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative w-12 h-8 flex items-center justify-center flex-shrink-0 -translate-y-3">
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full" />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-electric-blue shadow-lg shadow-electric-blue/50"
        initial={{ x: -20, opacity: 0 }}
        animate={{
          x: [-20, 20],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: delay,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-4 h-1 rounded-full bg-electric-blue/30 blur-sm"
        initial={{ x: -20, opacity: 0 }}
        animate={{
          x: [-20, 20],
          opacity: [0, 0.5, 0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: delay,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

function IconNode({
  icon: Icon,
  label,
  color,
  delay = 0
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  color: string;
  delay?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0 m-auto w-14 h-14 rounded-xl"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [1, 1.4, 1.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: delay,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="relative p-3.5 rounded-xl border-2 transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}40`,
          }}
          whileHover={{
            scale: 1.1,
            borderColor: color,
            boxShadow: `0 0 25px ${color}50`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: color }} />
        </motion.div>
      </div>
      <span className="text-xs text-gray-300 font-medium tracking-wide">{label}</span>
    </div>
  );
}

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
            <span className="text-sm text-electric-blue font-medium">Live Automation</span>
          </motion.div>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {automations.map((automation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-navy-900 to-navy-900/50 p-8 rounded-2xl border border-navy-700/50 hover:border-electric-blue/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{automation.title}</h3>
                <p className="text-sm text-gray-500">{automation.description}</p>
              </div>
              <div className="relative flex items-center justify-between">
                <IconNode
                  icon={automation.trigger.icon}
                  label={automation.trigger.label}
                  color={automation.trigger.color}
                  delay={index * 0.3}
                />
                <AnimatedConnection delay={index * 0.3} />
                <IconNode
                  icon={automation.action.icon}
                  label={automation.action.label}
                  color={automation.action.color}
                  delay={index * 0.3 + 0.5}
                />
                <AnimatedConnection delay={index * 0.3 + 0.5} />
                <IconNode
                  icon={automation.result.icon}
                  label={automation.result.label}
                  color={automation.result.color}
                  delay={index * 0.3 + 1}
                />
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
