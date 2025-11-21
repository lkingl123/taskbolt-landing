'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Mike Richardson',
    role: 'Owner',
    company: 'Richardson Plumbing',
    location: 'Salt Lake City, UT',
    image: '👨‍🔧',
    rating: 5,
    text: "I was losing at least 3-4 leads a week because I couldn't answer my phone while working. TaskBolt set up my automation in 2 days and I haven't missed a lead since. The follow-up system alone paid for itself in the first month.",
    results: 'Captured 40% more leads',
  },
  {
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Pristine Clean Services',
    location: 'Provo, UT',
    image: '👩‍💼',
    rating: 5,
    text: "Before TaskBolt, I spent 2 hours every evening responding to messages and scheduling appointments. Now it's all automated. I actually have time to grow my business instead of just running it. Best investment I've made.",
    results: 'Saves 12 hours per week',
  },
  {
    name: 'David Martinez',
    role: 'Operations Manager',
    company: 'Summit HVAC',
    location: 'Ogden, UT',
    image: '👨‍💻',
    rating: 5,
    text: "We were skeptical at first, but the team made it so easy. They handled everything from setup to training. Our payment collection rate went from 70% to 95% just from the automated reminders. Worth every penny.",
    results: '95% payment collection rate',
  },
  {
    name: 'Jennifer Torres',
    role: 'Owner',
    company: 'Elite Landscaping',
    location: 'Park City, UT',
    image: '👩‍🌾',
    rating: 5,
    text: "The review automation is a game changer. We went from 12 Google reviews to 87 in just 4 months. My phone rings constantly now because people see our reputation. TaskBolt literally transformed our business visibility.",
    results: '87 new 5-star reviews',
  },
  {
    name: 'Robert Kim',
    role: 'Owner',
    company: 'Spark Electric',
    location: 'Sandy, UT',
    image: '⚡',
    rating: 5,
    text: "I tried setting up automation myself with Zapier and gave up after a week. TaskBolt did in 2 days what I couldn't do in a month. Plus, when something needs adjusting, they fix it within hours. No more tech headaches.",
    results: 'Set up in 48 hours',
  },
  {
    name: 'Amanda Foster',
    role: 'Co-Owner',
    company: 'Foster & Sons Handyman',
    location: 'Draper, UT',
    image: '🔨',
    rating: 5,
    text: "The best part? We can focus on the work we love while TaskBolt handles the business side. Our customers love the quick responses, and we love not having to chase payments anymore. It's like having a full-time assistant for a fraction of the cost.",
    results: 'Eliminated payment chasing',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Service Businesses{' '}
            <span className="text-electric-blue">Across Utah</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses who stopped losing leads and started growing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
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
              <div className="flex items-center gap-4 pt-6 border-t border-navy-700">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            <span className="text-electric-yellow font-bold">50+ Utah businesses</span> trust
            TaskBolt to automate their operations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
