'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How quickly can you get my automation up and running?',
    answer:
      "Most clients are fully operational within 24-48 hours. We start with a free audit call, build your custom automation immediately, and have you live the next day. No weeks of waiting, no endless meetings.",
  },
  {
    question: 'What if something breaks or stops working?',
    answer:
      "That's included in every plan - unlimited fixes, forever. If anything stops working, we fix it within 24-48 hours at no extra cost. Most issues are resolved within a few hours. You'll never pay extra for troubleshooting or adjustments.",
  },
  {
    question: 'Do I need technical skills or special software?',
    answer:
      "Absolutely not. We handle 100% of the technical setup and integration. You just keep using your phone and current tools - we make everything work together automatically. If you can use a smartphone, you can use TaskBolt.",
  },
  {
    question: 'What tools and systems do you integrate with?',
    answer:
      "We work with virtually everything: Google Calendar, Outlook, popular CRMs (Jobber, ServiceTitan, Housecall Pro), QuickBooks, Stripe, Square, Gmail, SMS, and more. If you use it, we can probably automate it. We'll discuss your specific tools on the free audit call.",
  },
  {
    question: 'How is this different from hiring a VA or doing it myself?',
    answer:
      "A VA costs $3-5K/month, needs training, takes breaks, and makes mistakes. DIY automation tools like Zapier require technical knowledge and hours of trial and error. TaskBolt gives you professional automation that works 24/7 for a fraction of the cost, with dedicated support included.",
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      "Yes, absolutely. No long-term contracts, no cancellation fees. We earn your business every month by delivering results. Most clients never leave because they see immediate ROI, but you're free to cancel anytime with 30 days notice.",
  },
  {
    question: 'What happens during the free audit?',
    answer:
      "It's a 15-minute call where we look at your current workflow and identify exactly where you're losing time and money. We'll show you specifically what we can automate and what results to expect. No sales pitch, just an honest assessment. Even if you don't sign up, you'll leave with actionable insights.",
  },
  {
    question: 'Will my customers notice any difference?',
    answer:
      "Yes - they'll notice better service! Faster responses, fewer missed calls, timely follow-ups, and professional communication. Your customers get a better experience, you get more leads and payments. It's a win-win. The automation is invisible; the results are not.",
  },
  {
    question: 'What if I have unique workflows or special requirements?',
    answer:
      "That's exactly what we specialize in. Every service business is different, which is why we custom-build each automation. Whether it's complex scheduling rules, specific customer segments, or unusual integrations - we've likely done it before. That's what the Custom package is for.",
  },
  {
    question: 'Do you offer ongoing support after setup?',
    answer:
      "Yes! Every plan includes ongoing support, monitoring, and optimization. We don't just set it and forget it. We actively monitor your automations, make improvements, and respond to any issues within 24-48 hours. Growth and Pro plans include monthly/weekly optimization reviews.",
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
          className={`w-6 h-6 flex-shrink-0 text-electric-blue transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
            Frequently Asked <span className="text-electric-yellow">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Book a free call.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-900 rounded-2xl border border-navy-700 p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* CTA at bottom */}
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
              Schedule Your Free Audit Call →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
