'use client';

import { BoltIcon } from '@heroicons/react/24/solid';
import { COMPANY_NAME, COMPANY_LOCATION, CONTACT_EMAIL } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/taskbolt_logo.png"
                alt="TaskBolt Logo"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lightning-fast automation for service businesses. Never miss a lead, forget a follow-up, or lose track of payments again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                  Get Free Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Based in {COMPANY_LOCATION}</li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-electric-blue transition-colors duration-300">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-electric-blue transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-electric-blue transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
