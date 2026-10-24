import type { Industry } from '@/lib/industries'

/**
 * HVAC — the anchor page (highest CPC target). VERIFIED (researched Jul 2026).
 * Prices checked against each vendor's own pricing page on 2026-07-08; Housecall Pro
 * plans rechecked 2026-10-24, Jobber Core standard annual rate rechecked 2026-10-22.
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse are custom/quote and recorded as null (never guessed).
 */
export const hvac: Industry = {
  slug: 'hvac',
  name: 'HVAC',
  icon: '❄️',
  category: 'Trades',
  metaDescription:
    'Compare HVAC field service management software for small and commercial HVAC companies: Jobber from $29/mo, Housecall Pro from $59/mo, and ServiceTitan.',
  datePublished: '2026-07-08',

  answer:
    'The best HVAC field service management software depends on how many technicians you run. Small HVAC businesses usually start with Housecall Pro (Basic from $59/month billed annually; $79 month-to-month) or Jobber (Core from $29/month billed annually; $49 month-to-month). Both publish their prices and cover scheduling, dispatch, invoicing, and payments. Larger commercial HVAC operations that need dispatch and reporting at scale typically evaluate ServiceTitan, which is custom-quoted. Workiz and FieldPulse are mid-market alternatives, also quote-based. Before you buy, check three HVAC needs: maintenance-agreement tracking, equipment history per customer site, and QuickBooks sync, which neither Jobber Core nor Housecall Pro Basic includes. Published plans run from $29/month to $299/month (Housecall Pro MAX, up to 8 users) with annual billing; ServiceTitan is quoted separately.',

  intro:
    'HVAC companies live and die by scheduling and recurring maintenance contracts. The right FSM software has to handle seasonal demand spikes, track equipment and warranty history per site, manage maintenance agreements, and get invoices out the same day a tech leaves the job. QuickBooks sync is non-negotiable for most shops, and a fast mobile app matters because your techs are on rooftops, not at desks.',

  keyFeatures: [
    'Maintenance-agreement / service-contract tracking for recurring HVAC visits',
    'Equipment & asset history per customer site (model, serial, warranty)',
    'Scheduling and dispatch built for seasonal demand spikes',
    'Mobile app for techs in the field (photos, estimates, capture signatures)',
    'QuickBooks / accounting sync to avoid double entry',
    'Upfront quoting with good/better/best options and financing',
  ],

  priceRange: {
    min: 29,
    max: 299,
    note: 'Published plans run $29/mo (Jobber Core, annual billing; $49 month-to-month) to $299/mo (Housecall Pro MAX, up to 8 users, annual billing; $329 month-to-month). ServiceTitan, Workiz, and FieldPulse are custom-quoted.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
    structured: true,
  },

  search: { monthlyVolume: 720, kd: 19, cpc: 192.44 },

  providers: [
    { slug: 'servicetitan', positioning: 'Best for larger / commercial HVAC operations', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best overall for small-to-midsize HVAC shops', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan', monthlyFromUsd: 29 },
    { slug: 'workiz', positioning: 'Strong on dispatch + built-in phone/CRM', monthlyFromUsd: null },
    { slug: 'fieldpulse', positioning: 'Good for growing multi-crew HVAC teams', monthlyFromUsd: null },
  ],

  bySize: [
    { size: 'Solo HVAC technician', pick: 'Jobber Core ($29/mo)', why: 'Lowest published entry price. QuickBooks sync starts on the higher Connect plan, so budget more if you need it.' },
    { size: 'Small shop, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Includes QuickBooks Online sync. Housecall Pro also supports QuickBooks Desktop; confirm which plan includes it.' },
    { size: 'Growing shop, up to 8 users', pick: 'Housecall Pro MAX ($299/mo, up to 8 users)', why: 'Highest published plan in this comparison; extra users are $35/mo each.' },
    { size: 'Mid-size, multiple crews', pick: 'Workiz or FieldPulse (custom quote)', why: 'Neither publishes a price. Get quotes for your technician count and compare them with Housecall Pro MAX.' },
    { size: 'Commercial or high-volume', pick: 'ServiceTitan (custom quote)', why: 'Built for larger commercial and high-volume residential operations; expect a sales-led demo and quote.' },
  ],

  extraSections: [
    {
      id: 'hvac-small-business',
      heading: 'Best HVAC software for small business',
      paragraphs: [
        'For a small HVAC business, the practical shortlist is Jobber and Housecall Pro. They are the two vendors in this comparison that publish prices, and both offer a 14-day free trial with no credit card. Jobber Core is the cheapest way in at $29/month billed annually for one user. Housecall Pro Basic is $59/month billed annually and includes review tools and online booking on the entry plan.',
        'The catch for HVAC shops is accounting: neither entry plan includes QuickBooks sync. If you need it, compare Jobber Connect (QuickBooks Online only) with Housecall Pro Essentials (QuickBooks Online; confirm the plan for Desktop) in our guide to [FSM software that works with QuickBooks](/quickbooks). For the head-to-head decision, read [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro). Running a different trade too? See [field service software for small business](/for-small-business).',
      ],
    },
  ],

  mistakes: [
    'Buying an entry plan and finding out later that QuickBooks sync is not included. It is not on Jobber Core or Housecall Pro Basic.',
    'Paying for an enterprise platform too early. Custom-quoted tools such as ServiceTitan are built around larger teams, so a two- or three-technician shop can end up paying for features it does not use.',
    'Skipping maintenance-agreement and equipment-history workflows during the trial or demo. These are the HVAC-specific features that separate tools, and support can vary by plan.',
    'Comparing an annual price with a month-to-month price. Housecall Pro Basic is $59/month billed annually but $79 month-to-month.',
  ],

  faqs: [
    {
      question: 'What field service software do HVAC companies use?',
      answer:
        'Small and midsize HVAC shops commonly evaluate Housecall Pro (from $59/month billed annually) and Jobber (from $29/month billed annually), while larger commercial HVAC operations tend to evaluate ServiceTitan, which is custom-priced.',
    },
    {
      question: 'What is the best HVAC software for a small business?',
      answer:
        'For most small HVAC businesses, start with Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually). Both publish prices and offer 14-day trials without a credit card. If you need QuickBooks sync, budget for Jobber Connect or Housecall Pro Essentials ($149/month billed annually for up to 5 users).',
    },
    {
      question: 'How much does HVAC field service software cost?',
      answer:
        'Published plans run from $29/month (Jobber Core, 1 user, billed annually; $49 month-to-month) to $299/month (Housecall Pro MAX, up to 8 users, billed annually; $329 month-to-month). ServiceTitan, Workiz, and FieldPulse are quote-based and scale with the number of technicians.',
    },
    {
      question: 'Is ServiceTitan worth it for a small HVAC company?',
      answer:
        'ServiceTitan is built for larger commercial and high-volume residential HVAC operations. For a small HVAC shop with a handful of techs, Housecall Pro or Jobber usually deliver what you need at a lower, published price.',
    },
    {
      question: 'Does HVAC field service software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration, but not always on the entry plan: Jobber needs Connect (QuickBooks Online only) and Housecall Pro needs Essentials for QuickBooks Online (confirm the plan for Desktop). Confirm Online vs Desktop support for your setup.',
    },
    {
      question: 'Is there free field service software for HVAC businesses?',
      answer:
        'None of the major FSM vendors compared here offers a free plan (checked July 2026). Jobber and Housecall Pro both offer 14-day free trials without a credit card, which is the practical way to test HVAC workflows before paying.',
    },
  ],

  lastUpdated: '2026-10-24',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
    { name: 'Housecall Pro pricing (plans, users, Basic features)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
    { name: 'Housecall Pro QuickBooks (Online + Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-07-08' },
    { name: 'ServiceTitan pricing', url: 'https://www.servicetitan.com/pricing', checked: '2026-07-08' },
    { name: 'Workiz pricing', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-07-08' },
    { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-07-08' },
  ],
}
