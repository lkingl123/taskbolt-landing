'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { CAL_URL, CONTACT_EMAIL, COMPANY_LOCATION, CONTACT_PHONE_E164, CONTACT_PHONE_DISPLAY } from '@/lib/constants';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
// This included a full lead-capture form that POSTed to LEAD_CAPTURE_URL
// (https://app.taskbolt.work/api/lead-capture) — both DEV and PROD.
// Form fields: name, company_name, email, phone, business_type, pain_point.
// Removed for the labor pivot — we don't want random web leads going into
// the automation app's lead-capture pipeline. Cal.com booking + email + phone only.
//
// To restore the form: see git history of this file pre-pivot, or check
// the related useState/handleSubmit/form JSX block in the old version.
// =====================================================================

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// No form. Just three contact cards: Schedule / Email / Location.
// =====================================================================
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            Book a 30-minute call or just send us an email. Tell us what&apos;s piling up and we&apos;ll quote it on the spot.
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
            {/* Schedule a call */}
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
                  <p className="text-gray-300 text-sm">Book a 30-minute chat to talk through your backlog</p>
                  <p className="text-electric-blue text-sm mt-1">Click to schedule</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                  <EnvelopeIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-bold mb-2 group-hover:text-electric-blue transition-colors">Email Us</h4>
                  <span className="text-gray-300 text-sm break-all">
                    {CONTACT_EMAIL}
                  </span>
                  <p className="text-gray-400 text-sm mt-1">Response same day during business hours</p>
                </div>
              </div>
            </a>

            {/* Call us (tap-to-call on mobile, normal link on desktop) */}
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-electric-blue transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-bold mb-2 group-hover:text-electric-blue transition-colors">Call Us</h4>
                  <span className="text-gray-300 text-sm">{CONTACT_PHONE_DISPLAY}</span>
                  <p className="text-gray-400 text-sm mt-1">Based in {COMPANY_LOCATION}. Local pickup only.</p>
                </div>
              </div>
            </a>
          </div>

          {/* Bottom-of-section email CTA. The top card already has the Cal.com link;
              this one points to mailto so users get a clear "or just write us" path. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=TaskBolt%20%E2%80%94%20Job%20Inquiry`}
              className="inline-block px-12 py-5 bg-electric-blue text-white font-bold rounded-lg text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 glow-electric"
            >
              Tell Us What's Piling Up
            </a>
            <p className="mt-3 text-gray-400 text-sm">
              Opens an email to{' '}
              <span className="text-electric-blue">{CONTACT_EMAIL}</span>
            </p>
          </motion.div>

          {/* Trust signals were duplicated from the Hero — removed here to avoid repetition. */}
        </motion.div>
      </div>
    </section>
  );
}
