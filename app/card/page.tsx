"use client";

import Image from "next/image";

export default function BusinessCardPage() {
  const contact = {
    name: "Jake Loke",
    title: "Founder",
    company: "TaskBolt",
    tagline: "Lightning-Fast Automation for Local Businesses",
    email: "jake@taskbolt.work",
    phone: "+13853923207",
    phoneDisplay: "(385) 392-3207",
    website: "https://taskbolt.work",
    websiteDisplay: "taskbolt.work",
    photo: "/team/jake.jpg",
  };

  const handleAddContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
NOTE:${contact.tagline}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contact.name.replace(" ", "_")}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-navy-800 rounded-2xl shadow-2xl overflow-hidden border border-navy-700">
          {/* Header with electric accent */}
          <div className="bg-gradient-to-r from-electric-blue to-cyan-400 h-24 relative">
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
              <div className="w-28 h-28 bg-navy-800 rounded-full p-1 shadow-lg border-2 border-electric-blue">
                <Image
                  src={contact.photo}
                  alt={contact.name}
                  width={112}
                  height={112}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-18 pb-8 px-6 text-center" style={{ paddingTop: '4.5rem' }}>
            <h1 className="text-2xl font-bold text-white">{contact.name}</h1>
            <p className="text-electric-blue font-medium">{contact.title}</p>
            <p className="text-gray-400 font-semibold mt-1">{contact.company}</p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
              <svg className="w-4 h-4 text-electric-yellow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3L4 14h7v7l9-11h-7V3z" />
              </svg>
              {contact.tagline}
            </p>

            {/* Contact Actions */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-navy-700 hover:bg-navy-900 rounded-xl transition-colors border border-navy-700 hover:border-electric-blue"
              >
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white font-medium">{contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-navy-700 hover:bg-navy-900 rounded-xl transition-colors border border-navy-700 hover:border-electric-blue"
              >
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-medium">{contact.email}</span>
              </a>

              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-navy-700 hover:bg-navy-900 rounded-xl transition-colors border border-navy-700 hover:border-electric-blue"
              >
                <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-white font-medium">{contact.websiteDisplay}</span>
              </a>
            </div>

            {/* Save Contact Button */}
            <button
              onClick={handleAddContact}
              className="mt-6 w-full py-4 bg-electric-blue hover:bg-cyan-400 text-navy-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 glow-electric"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Save Contact
            </button>

            {/* Divider */}
            <div className="my-6 border-t border-navy-700"></div>

            {/* Learn More Section */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-3">See how we help service businesses</p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-electric-yellow hover:text-yellow-300 font-medium transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                </svg>
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Tap any field to connect
        </p>
      </div>
    </div>
  );
}
