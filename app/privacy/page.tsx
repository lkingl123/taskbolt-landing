'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_LOCATION } from '@/lib/constants';

export default function PrivacyPolicy() {
  const lastUpdated = 'November 28, 2025';

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

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website taskbolt.work and use our automation services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Please read this privacy policy carefully. By using our services, you consent to the
              practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-300 leading-relaxed">
              When you use our contact form or request a free audit, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Information about your business needs and current workflows</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your
              device and usage patterns, including browser type, operating system, and pages visited.
              This helps us improve our website and services.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver the automation services you request</li>
              <li>Send you relevant communications about our services</li>
              <li>Improve our website and service offerings</li>
              <li>Process payments (when applicable)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              To provide our automation services, we integrate with various third-party platforms.
              Depending on your specific automation setup, these may include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li><strong>Stripe</strong> - Payment processing</li>
              <li><strong>Twilio</strong> - SMS and voice communications</li>
              <li><strong>Google Workspace</strong> - Gmail, Google Calendar integration</li>
              <li><strong>Slack</strong> - Team notifications</li>
              <li><strong>QuickBooks</strong> - Accounting integration</li>
              <li><strong>Calendly</strong> - Appointment scheduling</li>
              <li><strong>n8n</strong> - Workflow automation</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Each of these services has their own privacy policies. We encourage you to review
              their policies for information on how they handle your data.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>With service providers who assist us in operating our business</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this privacy policy, unless a longer retention period is required or
              permitted by law. When we no longer need your information, we will securely delete
              or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric-blue hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

          {/* California Residents */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">California Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know what personal information
              we collect, the right to delete your information, and the right to opt-out of the
              sale of your information. We do not sell personal information.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience on
              our website. You can control cookie settings through your browser preferences.
              Note that disabling cookies may affect certain features of our website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage
              you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-gray-300 mt-4 space-y-2">
              <li><strong>Company:</strong> {COMPANY_NAME}</li>
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
