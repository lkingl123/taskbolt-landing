'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BoltIcon, CalendarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://jakelokeai.app.n8n.cloud/webhook/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Website Contact Form',
          priority: 'High'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-navy-800 relative overflow-hidden">
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
            Ready to <span className="text-electric-yellow">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a free 15-minute call or send us a message. Let's talk about your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://calendly.com/taskbolt/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 p-6 rounded-xl border border-electric-blue hover:border-electric-yellow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                  <CalendarIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-electric-blue transition-colors">Schedule a Call</h4>
                  <p className="text-gray-300 text-sm">Book your free 15-minute consultation</p>
                  <p className="text-electric-blue text-sm mt-1">Click to schedule →</p>
                </div>
              </div>
            </a>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Email Us</h4>
                  <a href="mailto:hello@taskbolt.com" className="text-gray-300 text-sm hover:text-electric-blue transition-colors">
                    hello@taskbolt.com
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Based in Utah</h4>
                  <p className="text-gray-300 text-sm">Serving businesses nationwide</p>
                  <p className="text-gray-400 text-sm mt-1">Local support, anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 bg-navy-900 p-8 rounded-2xl border border-navy-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Or Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
                ✓ Thanks! We'll contact you within 2 hours during business hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2 text-sm font-medium">
                  Type of Business *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Handyman">Handyman</option>
                  <option value="Other">Other Service Business</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Tell us about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors resize-none"
                  placeholder="What automation challenges are you facing?"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-electric-blue text-navy-900 font-bold rounded-lg hover:bg-electric-yellow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Get Your Free Audit →'}
                </button>
                <p className="text-gray-400 text-sm text-center mt-3">
                  We'll respond within 2 hours during business hours (Mon-Fri, 8am-6pm MT)
                </p>
              </div>
            </form>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>24-48hr Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-electric-yellow" />
                <span>Unlimited Support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
