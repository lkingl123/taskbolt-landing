'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BoltIcon, CalendarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { CAL_URL, CONTACT_EMAIL, LEAD_CAPTURE_URL, RESPONSE_TIME, BUSINESS_HOURS, COMPANY_LOCATION, TRUST_BADGES } from '@/lib/constants';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    business_type: '',
    pain_point: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      ...formData,
      source: 'landing_page',
      status: 'new'
    };

    try {
      // Send to both DEV and PROD APIs in parallel
      const [prodResponse] = await Promise.all([
        fetch(LEAD_CAPTURE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }),
        // Also send to DEV for testing (fire and forget - don't fail if DEV fails)
        fetch('https://dev.taskbolt.work/api/lead-capture', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {})
      ]);

      if (prodResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company_name: '', email: '', phone: '', business_type: '', pain_point: '' });
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
              href={CAL_URL}
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
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-bold mb-2">Email Us</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-300 text-sm hover:text-electric-blue transition-colors break-all">
                    {CONTACT_EMAIL}
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
                  <h4 className="text-white font-bold mb-2">Based in {COMPANY_LOCATION}</h4>
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
                <label htmlFor="company_name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  required
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors"
                  placeholder="e.g. Smith Plumbing"
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
                  placeholder="8011234567"
                />
              </div>

              <div>
                <label htmlFor="business_type" className="block text-gray-300 mb-2 text-sm font-medium">
                  Type of Business *
                </label>
                <select
                  id="business_type"
                  name="business_type"
                  required
                  value={formData.business_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
                >
                  <option value="">Select your business type...</option>
                  {/* Home Services */}
                  <option value="Plumbing">Plumbing</option>
                  <option value="HVAC">HVAC / Heating & Cooling</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Roofing">Roofing</option>
                  <option value="General Contractor">General Contractor</option>
                  <option value="Remodeling">Remodeling / Renovation</option>
                  <option value="Painting">Painting</option>
                  <option value="Flooring">Flooring</option>
                  <option value="Concrete">Concrete / Masonry</option>
                  <option value="Fencing">Fencing</option>
                  <option value="Garage Door">Garage Door Services</option>
                  <option value="Windows & Doors">Windows & Doors</option>
                  <option value="Foundation Repair">Foundation Repair</option>
                  <option value="Waterproofing">Waterproofing / Basement</option>
                  <option value="Insulation">Insulation</option>
                  <option value="Drywall">Drywall</option>
                  <option value="Cabinets & Countertops">Cabinets & Countertops</option>
                  <option value="Handyman">Handyman</option>
                  {/* Outdoor Services */}
                  <option value="Landscaping">Landscaping</option>
                  <option value="Lawn Care">Lawn Care / Mowing</option>
                  <option value="Tree Service">Tree Service</option>
                  <option value="Irrigation">Irrigation / Sprinklers</option>
                  <option value="Pool & Spa">Pool & Spa Service</option>
                  <option value="Paving">Paving / Driveways</option>
                  <option value="Snow Removal">Snow Removal</option>
                  <option value="Pressure Washing">Pressure Washing</option>
                  <option value="Gutter Cleaning">Gutter Cleaning / Repair</option>
                  <option value="Deck & Patio">Deck & Patio</option>
                  {/* Cleaning & Maintenance */}
                  <option value="Cleaning">House Cleaning</option>
                  <option value="Commercial Cleaning">Commercial / Janitorial</option>
                  <option value="Carpet Cleaning">Carpet Cleaning</option>
                  <option value="Window Cleaning">Window Cleaning</option>
                  <option value="Chimney">Chimney Sweep / Repair</option>
                  <option value="Septic">Septic Services</option>
                  {/* Specialty Services */}
                  <option value="Pest Control">Pest Control</option>
                  <option value="Appliance Repair">Appliance Repair</option>
                  <option value="Locksmith">Locksmith</option>
                  <option value="Security & Alarm">Security & Alarm Systems</option>
                  <option value="Solar">Solar Installation</option>
                  <option value="Home Inspection">Home Inspection</option>
                  <option value="Moving">Moving Services</option>
                  <option value="Junk Removal">Junk Removal</option>
                  {/* Auto & Vehicle */}
                  <option value="Auto Repair">Auto Repair / Mechanic</option>
                  <option value="Auto Detailing">Auto Detailing</option>
                  <option value="Towing">Towing</option>
                  {/* Other */}
                  <option value="Other">Other Service Business</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="pain_point" className="block text-gray-300 mb-2 text-sm font-medium">
                  Tell us about your business
                </label>
                <textarea
                  id="pain_point"
                  name="pain_point"
                  rows={4}
                  value={formData.pain_point}
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
                  We'll respond within {RESPONSE_TIME} ({BUSINESS_HOURS})
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
              {TRUST_BADGES.slice(0, 3).map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BoltIcon className="w-5 h-5 text-electric-yellow" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
