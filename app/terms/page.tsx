'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_LOCATION } from '@/lib/constants';

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using the services provided by {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
              you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              These terms apply to all visitors, users, and clients who access or use our website
              at taskbolt.work and our automation services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_NAME} provides business automation services designed to help service businesses
              streamline their operations. Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Lead capture and follow-up automation</li>
              <li>Appointment scheduling integration</li>
              <li>Payment and invoicing automation</li>
              <li>Team notification systems</li>
              <li>Customer review collection</li>
              <li>Custom workflow automation</li>
            </ul>
          </section>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">As a client, you agree to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the security of your account credentials for integrated services</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Promptly notify us of any security breaches or unauthorized use</li>
              <li>Obtain necessary consents for any personal data processed through our automations</li>
            </ul>
          </section>

          {/* Third-Party Integrations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Integrations</h2>
            <p className="text-gray-300 leading-relaxed">
              Our automation services integrate with various third-party platforms (such as Stripe,
              Twilio, Google Workspace, Slack, QuickBooks, and others). By using our services, you
              acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>You are responsible for maintaining your own accounts with these third-party services</li>
              <li>Third-party services are subject to their own terms and conditions</li>
              <li>We are not responsible for the availability or functionality of third-party services</li>
              <li>Changes to third-party APIs may affect our automation services</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              For paid services:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Fees are as quoted during the consultation and project scoping process</li>
              <li>Payment is processed securely through Stripe</li>
              <li>Monthly retainer fees are billed at the beginning of each billing cycle</li>
              <li>Setup fees are due upon project commencement</li>
              <li>All fees are non-refundable unless otherwise specified in writing</li>
            </ul>
          </section>

          {/* Service Level */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Service Delivery</h2>
            <p className="text-gray-300 leading-relaxed">We commit to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>24-48 hour setup for standard automation packages</li>
              <li>Unlimited fixes and adjustments included with active subscriptions</li>
              <li>Responsive support during business hours (Mon-Fri, 8am-6pm MT)</li>
              <li>Reasonable efforts to maintain automation uptime and reliability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do not guarantee 100% uptime as our services depend on third-party platforms.
              We will work diligently to resolve any issues that arise.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality on our website, including but not limited
              to text, graphics, logos, and software, are the exclusive property of {COMPANY_NAME} and
              are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Custom automations created for your business remain your property upon full payment.
              However, we retain the right to use general automation patterns and techniques
              developed during our work.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
            <p className="text-gray-300 leading-relaxed">
              We understand that our services involve access to sensitive business information.
              We commit to maintaining strict confidentiality regarding:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Your business processes and workflows</li>
              <li>Customer and lead information processed through automations</li>
              <li>Financial information and transaction data</li>
              <li>Any other proprietary business information</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, {COMPANY_NAME} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but
              not limited to loss of profits, data, or business opportunities, arising out of
              or related to your use of our services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Our total liability for any claims arising from these terms or our services shall
              not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not warrant that our services will be uninterrupted,
              error-free, or completely secure.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              Either party may terminate the service agreement:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>At any time with 30 days written notice</li>
              <li>Immediately if the other party breaches these terms</li>
              <li>Immediately if required by law</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Upon termination, we will provide reasonable assistance in transitioning your
              automations, and any outstanding fees will become immediately due.
            </p>
          </section>

          {/* No Long-Term Contracts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">No Long-Term Contracts</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe in earning your business every month. Our services operate on a
              month-to-month basis with no long-term commitments required. You are free to
              cancel at any time following the termination procedures above.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless {COMPANY_NAME}, its officers, directors,
              employees, and agents from any claims, damages, losses, or expenses arising out
              of your use of our services, your violation of these terms, or your violation of
              any rights of a third party.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the State of Utah, without regard to its conflict of law provisions.
              Any disputes arising under these terms shall be resolved in the courts of Utah.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of
              significant changes by updating the &quot;Last updated&quot; date and, for active clients,
              by email notification. Your continued use of our services after changes constitutes
              acceptance of the modified terms.
            </p>
          </section>

          {/* Satisfaction Guarantee */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Satisfaction Guarantee</h2>
            <p className="text-gray-300 leading-relaxed">
              We stand behind our work with a 100% satisfaction guarantee. If you&apos;re not satisfied
              with our automation setup within the first 30 days, we&apos;ll work with you to make it
              right or provide a full refund of setup fees.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
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
