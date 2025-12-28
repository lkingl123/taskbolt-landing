'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { CALENDLY_URL } from '@/lib/constants';

const packages = [
  {
    name: 'Starter',
    setup: '$497',
    monthly: '$97',
    description: 'Essential automation for solo operators',
    features: [
      'Lead capture forms',
      'Auto-response emails',
      'Basic follow-up sequences',
      'Payment reminders',
      'Unlimited support',
      '48hr response time',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    setup: '$997',
    monthly: '$197',
    description: 'Full automation for growing businesses',
    features: [
      'Everything in Starter',
      'SMS + email automation',
      'Multi-step workflows',
      'Review request automation',
      'Calendar integration',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    setup: '$1,997',
    monthly: '$297',
    description: 'Advanced automation for busy teams',
    features: [
      'Everything in Growth',
      'Custom integrations',
      'Complex workflows',
      'Dedicated account manager',
      'Weekly strategy calls',
      'Same-day support',
    ],
    popular: false,
  },
  {
    name: 'Custom',
    setup: 'Custom',
    monthly: 'Custom',
    description: 'Tailored solutions for unique needs',
    features: [
      'Everything in Pro',
      'Custom development',
      'API integrations',
      'Multi-location support',
      'Custom reporting',
      'On-demand support',
    ],
    popular: false,
    isCustom: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24 bg-navy-900 relative overflow-hidden">
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
            Simple, Transparent <span className="text-electric-yellow">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the package that fits your business. All plans include unlimited fixes,
            guaranteed uptime, and no long-term contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative bg-navy-800 rounded-2xl p-6 md:p-8 border-2 ${
                pkg.popular
                  ? 'border-electric-yellow shadow-2xl shadow-electric-yellow/20 md:scale-105'
                  : 'border-navy-700 hover:border-electric-blue'
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-electric-yellow text-navy-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{pkg.description}</p>

                <div className="mb-3 md:mb-4">
                  <div className="text-gray-400 text-xs md:text-sm mb-1">One-time setup</div>
                  <div className="text-3xl md:text-4xl font-bold text-electric-blue">{pkg.setup}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs md:text-sm mb-1">Then</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">{pkg.monthly}</span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                </div>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 px-6 rounded-lg font-bold text-center transition-all duration-300 mb-8 ${
                  pkg.popular
                    ? 'bg-electric-yellow text-navy-900 hover:bg-electric-blue glow-yellow'
                    : 'bg-navy-700 text-white hover:bg-electric-blue hover:text-navy-900'
                }`}
              >
                Schedule a Call
              </a>

              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-4 h-4 text-electric-blue" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 text-gray-400"
        >
          <p className="text-sm">
            All plans include: Unlimited fixes • 24-48hr response • Customer satisfaction guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
