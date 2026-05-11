'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
const testimonials_OLD = [
  {
    name: 'Mike R.',
    role: 'Owner',
    company: 'Plumbing Company',
    image: '👨‍🔧',
    rating: 5,
    text: "I was losing leads because I couldn't answer my phone while working. Now every lead gets an instant response and automatic follow-ups. Haven't missed one since.",
    results: 'Captured 40% more leads',
  },
  {
    name: 'Sarah C.',
    role: 'Founder',
    company: 'Cleaning Services',
    image: '👩‍💼',
    rating: 5,
    text: "I spent 2 hours every evening responding to messages and scheduling. Now it's all automated. I actually have time to grow my business instead of just running it.",
    results: 'Saves 12 hours per week',
  },
  {
    name: 'David M.',
    role: 'Operations Manager',
    company: 'HVAC Company',
    image: '👨‍💻',
    rating: 5,
    text: "Payment collection went from 70% to 95% just from the automated reminders. They handled everything from setup to training. Best investment we've made.",
    results: '95% payment collection',
  },
];
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// "Built For" replaces testimonials until real ones are gathered
// =====================================================================
const builtFor = [
  {
    title: 'Etsy & Shopify Sellers',
    description: "Order volume spiking? We pack while you create. Hangtag, polybag, label, and box-prep your outgoing orders so you can stop drowning at the kitchen table.",
    examples: 'Soap makers, candle makers, jewelry, printables, paper goods',
  },
  {
    title: 'Small Subscription Box Brands',
    description: "If you ship 100 boxes a month or less and your monthly assembly day is eating your week, we can take it off your plate. Small-batch only.",
    examples: 'Snack boxes, pet treat boxes, self-care, faith-based',
  },
  {
    title: 'Local Utah Makers',
    description: "Weekend market vendors and boutique brands who need help between markets. Restocking, kit-prep, packaging refresh, we handle the boring stuff so you can keep making.",
    examples: 'Bath & body, home fragrance, paper goods, wellness',
  },
  {
    title: 'Print & Promo Shop Overflow',
    description: "Got a small finishing job that's killing your machine setup margins? Send small-batch work our way. Folding, bagging, hangtag attachment, light QC.",
    examples: 'Screen printers, embroiderers, sign shops, promo brokers',
  },
  {
    title: 'Small Wedding & Event Jobs',
    description: "Smaller weddings and events that need favors or small welcome gifts assembled. We knock out small-batch jobs fast so you can focus on the event itself.",
    examples: 'Wedding favors, welcome cards, small gift sets, place cards',
  },
  {
    title: 'Solo Founders & Side Hustles',
    description: "You started a brand, you sell on weekends, your day job eats your weekdays. We pick up your packing pile and hand it back ready to ship.",
    examples: 'Online shop owners, weekend market sellers, side businesses',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-electric-blue">Small Utah Operators</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whose backlog is killing their week
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {builtFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckBadgeIcon className="w-6 h-6 text-electric-yellow flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                {item.description}
              </p>

              <div className="pt-4 border-t border-navy-700">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Examples</div>
                <div className="text-sm text-electric-blue">{item.examples}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
