'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
const faqs_OLD = [
  {
    question: 'How quickly can you set this up?',
    answer: 'Most clients are live within 24-48 hours. We handle all the technical setup - you just tell us what you need automated.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Unlimited fixes included in every plan. We typically resolve issues within hours, not days.',
  },
  {
    question: 'Do I need technical skills?',
    answer: 'No. We handle 100% of the setup. If you can use a smartphone, you can use the results of our automation.',
  },
  {
    question: 'What tools do you integrate with?',
    answer: 'Google Calendar, Gmail, Stripe, QuickBooks, most CRMs, and hundreds more. If it has an API, we can probably connect it.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long-term contracts, no cancellation fees. 30 days notice.',
  },
  {
    question: 'What happens on the free call?',
    answer: '15 minutes to identify where automation can save you the most time. You\'ll leave with actionable insights even if you decide not to sign up.',
  },
];
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================
const faqs = [
  {
    question: 'Where do you operate?',
    answer: "We're based in West Jordan, Utah, and we're happy to drive out for pickup and dropoff anywhere in the Salt Lake Valley or nearby (Utah County, Davis County, that kind of range). We work with what fits the drive. We don't ship, so this is local-only.",
  },
  {
    question: "What's your minimum?",
    answer: "No minimum. We've taken jobs as small as 50 units. If it's smaller than that, we'll just quote it as a flat project fee instead of charging per piece.",
  },
  {
    question: 'How fast is turnaround?',
    answer: "Most jobs are done in 24 to 72 hours after pickup. If you've got a real deadline, let us know when you book and we'll work around it. Rush turnaround is available.",
  },
  {
    question: 'Do you handle high-value items?',
    answer: "We can, but talk to us first. For jobs with high-value or fragile items, we'll go over written counts, handling notes, and any specific requirements (insurance, COI, etc.) before pickup so everyone's on the same page.",
  },
  {
    question: 'Do you sign NDAs?',
    answer: "Yes, before we touch anything sensitive. Send your standard NDA over and we'll sign it before pickup.",
  },
  {
    question: 'Can you ship the work back to us or our customers?',
    answer: "No, we don't ship. We're a local hands-on operation, so we pick up and drop off in person. If you need a 3PL that ships out to your customers, we're not the right fit. We finish the work and return it to you locally.",
  },
  {
    question: 'How do you charge?',
    answer: "Whatever fits the job best. Repetitive work like assembly, packaging, and kitting is usually per-piece. Bursty stuff like wedding favors or product launches is usually a flat project fee. We'll always quote you before any work starts.",
  },
  {
    question: 'Can you handle recurring weekly or monthly work?',
    answer: 'Yes. Some clients use us once for a rush, others have us on a regular rotation, like monthly subscription box assembly or weekly Etsy order packing. No long-term contract needed either way.',
  },
  {
    question: "What can't you take?",
    answer: "We're a solo operation working out of a home shop, so we stick to small-batch jobs that fit in a car. No pallets, no oversized freight, no perishable food, no hazardous materials, and nothing that needs a forklift. If you're not sure, just ask and we'll tell you straight up.",
  },
  {
    question: 'How big a job is too big?',
    answer: "Rule of thumb: if the work fits in a regular car's trunk and back seat, we can take it. A few hundred small items is comfortable. A few thousand depends on size. If it needs a truck, a warehouse, or a crew, we're not the right fit.",
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
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
