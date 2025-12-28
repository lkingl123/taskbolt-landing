'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Mike R.',
    role: 'Owner',
    company: 'Plumbing Company',
    image: '👨‍🔧',
    rating: 5,
    text: "The CRM tracks every lead from first contact to closed deal. I can see my whole pipeline at a glance and never forget a follow-up. TaskBolt changed how I run my business.",
    results: 'Captured 40% more leads',
  },
  {
    name: 'Sarah C.',
    role: 'Founder',
    company: 'Cleaning Services',
    image: '👩‍💼',
    rating: 5,
    text: "The client portal is a game-changer. My clients can see project updates, sign contracts, and pay invoices all in one place. They love the professional experience.",
    results: 'Saves 12 hours per week',
  },
  {
    name: 'David M.',
    role: 'Operations Manager',
    company: 'HVAC Company',
    image: '👨‍💻',
    rating: 5,
    text: "Project management + automated payment reminders took us from chaos to organized. Payment collection went from 70% to 95%. Everything is in one system now.",
    results: '95% payment collection',
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
            What Our <span className="text-electric-blue">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Service businesses running smarter with complete operations management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-electric-yellow" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                "{testimonial.text}"
              </p>

              {/* Results Badge */}
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
                  <span className="text-electric-blue font-semibold text-sm">
                    ⚡ {testimonial.results}
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-navy-700">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
