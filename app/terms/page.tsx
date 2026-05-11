'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_LOCATION } from '@/lib/constants';

// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
// (Original SaaS/automation Terms of Service moved here. Referenced
// monthly retainers, Stripe billing, automation uptime, custom workflow
// IP, and other SaaS-style terms. Replaced for the local contract labor
// pivot. See git history for full content.)

export default function TermsOfService_OLD() {
  const lastUpdated = 'November 28, 2025';
  return (
    <div className="min-h-screen bg-navy-900">
      // ... full SaaS terms preserved in git history ...
    </div>
  );
}
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================
export default function TermsOfService() {
  const lastUpdated = 'May 10, 2026';

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

        <div className="max-w-none space-y-8">
          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service apply when you use the {COMPANY_NAME} website at taskbolt.work or
              hire {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) for contract labor services. By using the
              website or engaging us for work, you agree to these terms.
            </p>
          </section>

          {/* What we do */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_NAME} is a Utah-based independent contractor offering hands-on labor services
              to small businesses. Services may include, but aren&apos;t limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Packaging and order fulfillment</li>
              <li>Kitting and assembly</li>
              <li>Tagging, polybagging, and prep work</li>
              <li>Inventory sorting and organization</li>
              <li>Local pickup and dropoff of work materials</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are <strong>not</strong> a 3PL, fulfillment center, or shipping carrier. We do not ship
              finished work to your customers. We pick up locally, complete the job, and return it to you.
            </p>
          </section>

          {/* Scope and Quoting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Scope and Quoting</h2>
            <p className="text-gray-300 leading-relaxed">
              Each job is quoted before work begins. The quote will specify:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>The work to be performed</li>
              <li>Pricing model (per-piece, per-project, or hourly)</li>
              <li>Estimated turnaround time</li>
              <li>Pickup and dropoff arrangement</li>
              <li>Payment terms</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Work that exceeds the quoted scope (different volume, additional steps, materials missing
              or damaged on arrival) may be re-quoted before continuing. We&apos;ll always communicate before
              billing more than originally agreed.
            </p>
          </section>

          {/* Service Area */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Service Area</h2>
            <p className="text-gray-300 leading-relaxed">
              We are local to {COMPANY_LOCATION}. We are willing to travel for pickup and dropoff
              within roughly the Salt Lake Valley and surrounding areas (Utah County, Davis County,
              Tooele, Park City, etc.). For locations beyond a comfortable drive, we may decline the
              job or charge a mileage fee disclosed at quote time.
            </p>
          </section>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">As a client, you agree to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Provide accurate counts and descriptions of materials/components</li>
              <li>Have all components ready at the agreed pickup time</li>
              <li>Provide clear written instructions if assembly or kitting requires it</li>
              <li>Disclose any handling sensitivities (fragile, perishable, hazardous, valuable)</li>
              <li>Pay invoices on the agreed schedule</li>
              <li>Not ask us to do anything unsafe, illegal, or beyond the scope quoted</li>
            </ul>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Payment is due per the terms specified in your quote (commonly Net 7 or due on completion)</li>
              <li>For new clients, we may require a 50% deposit before pickup</li>
              <li>For larger projects, we may invoice in milestones</li>
              <li>Payments are processed through Stripe, ACH, Venmo, or similar — agreed at quote time</li>
              <li>Late payments may incur a 1.5%/month finance charge</li>
            </ul>
          </section>

          {/* Materials and Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Handling of Your Materials</h2>
            <p className="text-gray-300 leading-relaxed">
              When you hand off product or components to us:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>We treat your materials with reasonable care</li>
              <li>We verify counts at pickup and at dropoff</li>
              <li>For high-value items, we may request inventory reconciliation in writing</li>
              <li>Our liability for any loss or damage caused by our negligence is limited to the wholesale replacement cost of the affected items, capped at the total amount paid to us for that job</li>
              <li>We are not liable for materials that arrive at pickup damaged, miscounted by you, or unsuitable for the work requested</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Insurance coverage is handled on a job-by-job basis. If your job requires us to carry specific coverage or provide a Certificate of Insurance, mention it at quote time and we will arrange it.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
            <p className="text-gray-300 leading-relaxed">
              We treat client work as confidential by default. We will not share details of your
              business, products, customers, or work with anyone outside our team. For sensitive jobs,
              we&apos;re happy to sign a written NDA before pickup.
            </p>
          </section>

          {/* Independent Contractor */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Independent Contractor Relationship</h2>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_NAME} is an independent contractor — not an employee, agent, partner, or joint
              venturer of yours. Nothing in our service relationship creates such a relationship.
              Each party is responsible for its own taxes, insurance, and business expenses.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              Anything you give us — designs, brand assets, packaging, products, customer lists —
              remains your property. We make no claim to it and will not use it outside the work
              you&apos;ve hired us for.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              We perform the work with reasonable care and skill. Beyond that, our services are
              provided &quot;as is&quot; without additional warranties, express or implied. We do not
              guarantee specific business outcomes (sales, customer reactions, etc.) from the work
              we complete.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by Utah law, {COMPANY_NAME}&apos;s total liability for any
              claim arising from these terms or our services is limited to the amount you paid us
              for the specific job giving rise to the claim. We are not liable for indirect,
              incidental, consequential, or special damages — including lost profits, lost sales,
              or business interruption.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cancellation and Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              Either party may cancel a job before work begins with no penalty (except return of
              materials). Once work has begun, you are responsible for paying for the work
              completed up to the point of cancellation, including any non-refundable materials
              already purchased on your behalf.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We may decline or stop work if: a job becomes unsafe, materials are misrepresented,
              the client behaves abusively, or invoices are unpaid.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms are governed by the laws of the State of Utah. Any dispute will be
              resolved in the state or federal courts located in Salt Lake County, Utah.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these terms over time. The &quot;Last updated&quot; date at the top reflects
              any changes. For active clients, the terms in effect at the time of your quote govern
              that engagement.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about these Terms?
            </p>
            <ul className="list-none text-gray-300 mt-4 space-y-2">
              <li><strong>Business:</strong> {COMPANY_NAME}</li>
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
