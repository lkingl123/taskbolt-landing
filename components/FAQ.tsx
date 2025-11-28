'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How quickly can you set this up?',
    answer: 'Most clients are live within 24-48 hours. We handle all the technical setup.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Unlimited fixes included in every plan. We typically resolve issues within hours.',
  },
  {
    question: 'Do I need technical skills?',
    answer: 'No. We handle 100% of the setup. If you can use a smartphone, you can use TaskBolt.',
  },
  {
    question: 'What tools do you integrate with?',
    answer: 'Google Calendar, Gmail, Stripe, QuickBooks, popular CRMs, and more.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long-term contracts, no cancellation fees. 30 days notice.',
  },
  {
    question: 'What happens on the free call?',
    answer: '15 minutes to identify where you can save time. Actionable insights even if you decide not to sign up.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="border-b border-navy-700 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-electric-blue transition-colors group"
      >
        <span className="font-semibold text-lg text-white group-hover:text-electric-blue transition-colors">
          {faq.question}
        </span>
        <ChevronDownIcon
          className={`w-6 h-6 flex-shrink-0 text-electric-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 pb-6 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-yellow to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-electric-yellow">FAQ</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-900 rounded-2xl border border-navy-700 p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">Still have questions?</p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-electric-blue text-navy-900 font-bold rounded-lg hover:bg-electric-yellow transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
