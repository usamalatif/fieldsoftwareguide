import type { Industry } from '@/lib/industries'

/**
 * HVAC — the anchor page (highest CPC target). VERIFIED (researched Jul 2026).
 * Prices checked against each vendor's own pricing page on 2026-07-08.
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse are custom/quote and recorded as null (never guessed).
 */
export const hvac: Industry = {
  slug: 'hvac',
  name: 'HVAC',
  icon: '❄️',
  category: 'Trades',

  answer:
    'The best field service management software for HVAC companies in 2026 depends on your size. For most small-to-midsize HVAC shops, Housecall Pro (from $59/month) and Jobber (from $29/month) are the top picks — both publish transparent pricing and cover scheduling, dispatch, invoicing, and payments. For larger commercial HVAC operations that need deep reporting, financing, and dispatch at scale, ServiceTitan is the enterprise standard, though it is custom-quoted rather than publicly priced. Workiz and FieldPulse are strong mid-market alternatives, also on custom pricing. HVAC businesses specifically need maintenance-agreement tracking, equipment/asset history, and QuickBooks sync. Expect to pay roughly $29–$299/month per plan for published tools, with ServiceTitan and other enterprise platforms typically higher once quoted.',

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
    note: 'Published plans run $29/mo (Jobber Core) to $299/mo (Housecall Pro MAX). ServiceTitan and other enterprise HVAC tools are custom-quoted and typically higher.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
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

  faqs: [
    {
      question: 'What FSM software do most HVAC companies use?',
      answer:
        'Small and midsize HVAC shops most often use Housecall Pro (from $59/month) or Jobber (from $29/month), while larger commercial HVAC operations tend to run ServiceTitan, which is custom-priced.',
    },
    {
      question: 'How much does HVAC field service software cost?',
      answer:
        'Published plans run from about $29/month (Jobber Core, 1 user) to $299/month (Housecall Pro MAX, up to 8 users). ServiceTitan, Workiz, and FieldPulse are quote-based and typically cost more, scaling with technicians.',
    },
    {
      question: 'Is ServiceTitan worth it for a small HVAC company?',
      answer:
        'ServiceTitan is built for larger commercial and high-volume residential HVAC operations. For a small HVAC shop with a handful of techs, Housecall Pro or Jobber usually deliver what you need at a lower, published price.',
    },
    {
      question: 'Does HVAC field service software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration so invoices and payments sync to your accounting without double entry. Confirm Online vs Desktop support for your setup.',
    },
    {
      question: 'Is there free field service software for HVAC businesses?',
      answer:
        'Most HVAC-grade tools are paid, but several offer free trials, and some lightweight tools have limited free tiers. For a true no-cost start, see our free FSM software guide — just expect fewer HVAC-specific features.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'ServiceTitan pricing', url: 'https://www.servicetitan.com/pricing', checked: '2026-07-08' },
    { name: 'Workiz pricing', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-07-08' },
    { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-07-08' },
  ],
}
