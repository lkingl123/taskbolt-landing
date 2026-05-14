// =====================================================================
// OLD AUTOMATION VERSION — preserved (do not delete)
// =====================================================================
/*
// URL Constants
export const CAL_URL = 'https://cal.com/taskbolt/15min';
// @deprecated Use CAL_URL instead
export const CALENDLY_URL = CAL_URL;
export const CONTACT_EMAIL = 'jake@taskbolt.work';
export const LEAD_CAPTURE_URL = 'https://app.taskbolt.work/api/lead-capture';

// Company Info
export const COMPANY_NAME = 'TaskBolt';
export const COMPANY_LOCATION = 'Utah';
export const COMPANY_TAGLINE = 'Lightning-Fast Automation for Service Businesses';

// Trust Indicators
export const TRUST_BADGES = [
  { text: 'Unlimited Fixes Included' },
  { text: 'No Long-Term Contracts' },
  { text: '100% Satisfaction Guarantee' },
  { text: 'Unlimited Support' },
];

// Response Time
export const RESPONSE_TIME = '2 hours during business hours';
export const BUSINESS_HOURS = 'Mon-Fri, 8am-6pm MT';

// Stats
export const STATS = {
  hoursSaved: '10+',
  leadsCaptured: '30%+',
};

// Social Links
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  linkedin: '#',
  instagram: '#',
};

// SEO
export const SEO = {
  title: 'TaskBolt - Business Automation for Service Businesses',
  description: 'Automated lead capture, follow-ups, and payment reminders for service businesses. Never miss a lead while you\'re on the job. We build it, you run your business.',
  keywords: 'business automation, lead capture, automated follow-ups, payment reminders, service business, workflow automation, HVAC automation, plumber automation, contractor automation',
  ogImage: '/og-image.jpg',
  twitterHandle: '@taskbolt',
  siteUrl: 'https://taskbolt.work',
};
*/

// =====================================================================
// LOCAL CONTRACT LABOR VERSION — active
// =====================================================================

// URL Constants
// CAL_URL points to the TaskBolt General Call event type (30-minute slot)
export const CAL_URL = 'https://cal.com/taskbolt/client-call';
/** @deprecated Use CAL_URL instead */
export const CALENDLY_URL = CAL_URL;
export const CONTACT_EMAIL = 'jake@taskbolt.work';
// Office phone number (tap-to-call links use the E.164 format; the display version is human-friendly)
export const CONTACT_PHONE_E164 = '+13856449992';
export const CONTACT_PHONE_DISPLAY = '(385) 644-9992';
// LEAD_CAPTURE_URL kept for backwards compatibility — no longer used by active components
export const LEAD_CAPTURE_URL = 'https://app.taskbolt.work/api/lead-capture';

// Company Info
export const COMPANY_NAME = 'TaskBolt';
export const COMPANY_LEGAL_NAME = 'Taskbolt LLC';
export const COMPANY_ENTITY_NUMBER = '14694324-0160';
export const COMPANY_ENTITY_STATE = 'Utah';
export const COMPANY_ENTITY_FORMED = 'May 13, 2026';
export const COMPANY_LOCATION = 'West Jordan, UT';
export const COMPANY_TAGLINE = 'Local Utah Contract Labor for Small Businesses';
export const SERVICE_RADIUS_MILES = 30;
export const SERVICE_AREAS = [
  'Salt Lake Valley',
  'Utah County (Lehi, Provo, Orem)',
  'Davis County',
  'Tooele',
  'Park City',
];

// Trust Indicators
export const TRUST_BADGES = [
  { text: 'Local Utah, Pickup Available' },
  { text: 'Per-Piece or Per-Project Pricing' },
  { text: 'US-Based, West Jordan, UT' },
  { text: 'No Minimums, No Long-Term Contracts' },
];

// Response Time
export const RESPONSE_TIME = 'same day during business hours';
export const BUSINESS_HOURS = 'Mon-Sat, 8am-8pm MT';

// Stats — kept structure for compatibility, repurposed for labor business
export const STATS = {
  hoursSaved: '24-72hr',
  leadsCaptured: '30mi',
};

// Social Links
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  linkedin: '#',
  instagram: '#',
};

// SEO
export const SEO = {
  title: 'TaskBolt | Local Utah Contract Labor for Small Businesses',
  description: 'The orders pile up. We make them go away. Local Utah contract labor: packing, assembly, kitting, prep work for small businesses. We pick up locally, get it done, bring it back. No shipping, no minimums.',
  keywords: 'utah contract labor, local fulfillment utah, small business help utah, packaging assembly utah, kitting utah, etsy fulfillment utah, subscription box assembly utah, salt lake city contract labor, west jordan small business help',
  ogImage: '/og-image.jpg',
  twitterHandle: '@taskbolt',
  siteUrl: 'https://taskbolt.work',
};
