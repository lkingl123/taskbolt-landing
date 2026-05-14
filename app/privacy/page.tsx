'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, COMPANY_LEGAL_NAME, COMPANY_ENTITY_NUMBER, CONTACT_EMAIL, COMPANY_LOCATION } from '@/lib/constants';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
// (Original SaaS/automation privacy policy moved here. References Stripe,
// Twilio, Google Workspace, Slack, QuickBooks integrations. Replaced for
// the local contract labor pivot. See git history for full content.)

export default function PrivacyPolicy_OLD() {
  const lastUpdated = 'November 28, 2025';
  return (
    <div className="min-h-screen bg-navy-900">
      // ... full SaaS privacy policy preserved in git history ...
    </div>
  );
}
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================
export default function PrivacyPolicy() {
  const lastUpdated = 'May 14, 2026';

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <header className="border-b border-navy-700">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/taskbolt_logo.png"
              alt="TaskBolt Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-white">{COMPANY_NAME}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: {lastUpdated}</p>

        <div className="max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_LEGAL_NAME} (&quot;{COMPANY_NAME},&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a Utah
              limited liability company (Entity #{COMPANY_ENTITY_NUMBER}) providing local hands-on
              services such as packaging, assembly, kitting, and prep work for small businesses in
              the Salt Lake Valley and surrounding areas.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Privacy Policy explains what information we collect when you visit our website
              taskbolt.work, contact us about our services, or work with us as a client. By using our
              website or services, you agree to the practices described here.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">When you contact us</h3>
            <p className="text-gray-300 leading-relaxed">
              If you reach out by email, phone, or through our scheduling tool (Cal.com), we may
              receive:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name (if applicable)</li>
              <li>A description of the work you need help with</li>
              <li>Your pickup/dropoff address (only if you become a client)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">When you become a client</h3>
            <p className="text-gray-300 leading-relaxed">
              In addition to the above, we may also handle:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Invoice and payment information (processed by Stripe or similar payment processors)</li>
              <li>Job-specific details (component lists, quantities, instructions)</li>
              <li>Any product or material you hand over to us for the work</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Website analytics</h3>
            <p className="text-gray-300 leading-relaxed">
              We may collect basic, anonymous information about how people use our website (browser
              type, pages visited, general location) to understand how our site is performing. This
              data is not tied to your identity.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">We use information you provide to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Respond to your inquiries and quote your job</li>
              <li>Coordinate pickup and dropoff for active client work</li>
              <li>Send invoices and process payments</li>
              <li>Communicate about ongoing or recurring work</li>
              <li>Comply with applicable laws (e.g., tax records)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do <strong>not</strong> sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services We Use</h2>
            <p className="text-gray-300 leading-relaxed">
              To run our business, we use a few standard third-party tools. When you interact with us
              through these channels, their own privacy policies also apply:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li><strong>Cal.com</strong> — for scheduling consultations</li>
              <li><strong>Email providers</strong> (such as Gmail / Google Workspace) — for direct correspondence</li>
              <li><strong>Stripe or similar payment processors</strong> — for invoicing and payment (when you become a paying client)</li>
              <li><strong>Vercel</strong> — for hosting this website</li>
            </ul>
          </section>

          {/* Confidentiality of Client Work */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality of Your Work</h2>
            <p className="text-gray-300 leading-relaxed">
              Most of our work involves handling another business&apos;s products, packaging, customer
              orders, or proprietary materials. We treat this as confidential by default. We will not:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Discuss the specifics of your business or your products with anyone outside our team</li>
              <li>Share photos or details of your work without your written permission</li>
              <li>Use customer or recipient information you provide for any purpose other than completing your job</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              For especially sensitive jobs, we&apos;re happy to sign your standard NDA before we begin.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We take reasonable care to protect the information you share with us. Personal contact
              info is stored in standard business tools (email, scheduling, accounting). Physical
              materials you hand off to us are kept in our local workspace, not shared, and returned
              to you when the job is complete.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              No system is perfectly secure, but we will not knowingly mishandle anything you trust
              us with.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We keep client records (job details, invoices, contact info) as long as needed to provide
              service and comply with legal/tax requirements. You may request deletion of your contact
              record at any time by emailing us.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You can ask us at any time to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li><strong>See</strong> what information we have about you</li>
              <li><strong>Correct</strong> anything that&apos;s wrong</li>
              <li><strong>Delete</strong> your contact record (excluding records we&apos;re required to keep for tax purposes)</li>
              <li><strong>Stop</strong> hearing from us</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Just email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric-blue hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              and we&apos;ll handle it.
            </p>
          </section>

          {/* Utah */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Utah Privacy Rights (UCPA)</h2>
            <p className="text-gray-300 leading-relaxed">
              As a Utah-based business, we comply with the Utah Consumer Privacy Act (UCPA). If you
              are a Utah resident, you have the rights described above (access, correction, deletion,
              portability, opt-out). We do not sell personal data and we do not use it for targeted
              advertising or profiling.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website uses minimal cookies — basic functionality and (potentially) anonymous
              analytics. You can disable cookies in your browser; the site will still work fine.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are intended for businesses, not minors. We do not knowingly collect
              information from children under 18.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this policy as our business evolves. The &quot;Last updated&quot; date at the top
              will reflect any changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about this Privacy Policy? Reach out:
            </p>
            <ul className="list-none text-gray-300 mt-4 space-y-2">
              <li><strong>Business:</strong> {COMPANY_LEGAL_NAME} (Utah Entity #{COMPANY_ENTITY_NUMBER})</li>
              <li><strong>Location:</strong> {COMPANY_LOCATION}</li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric-blue hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-navy-700">
          <Link
            href="/"
            className="text-electric-blue hover:underline inline-flex items-center gap-2"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
