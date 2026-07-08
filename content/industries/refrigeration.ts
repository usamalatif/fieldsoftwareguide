import type { Industry } from '@/lib/industries'

/**
 * Refrigeration / cold-chain field service — DRAFT (dataVerified: false, noindex).
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse, Commusoft are custom/quote → null (never guessed).
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const refrigeration: Industry = {
  slug: 'refrigeration',
  name: 'Refrigeration',
  icon: '🧊',
  category: 'Trades',

  answer:
    'The best field service management software for commercial refrigeration depends on your size. Contractors servicing walk-ins, reach-ins, ice machines, and cold-chain systems for restaurants and grocery usually run FieldPulse or ServiceTitan for maintenance agreements, per-unit asset history, and emergency dispatch (both custom-quoted). Smaller refrigeration shops can start on Housecall Pro (from $59/month) or Jobber (from $29/month) for scheduling, work orders, and same-day invoicing. Workiz is a solid mid-market option, also on custom pricing. Refrigeration teams specifically need 24/7 emergency dispatch for warm-box calls, maintenance-agreement tracking, per-asset history with refrigerant and temperature logs, and EPA 608 refrigerant-tracking support. Expect published plans roughly $29–$299/month, with enterprise commercial platforms higher once quoted. Because a warm cooler means lost inventory, response speed and asset history matter most.',

  intro:
    'Commercial refrigeration is unforgiving: a warm walk-in can spoil thousands of dollars of inventory in hours, so response speed and reliable service history define the business. The right FSM software has to route emergency "warm-box" calls fast, keep per-unit history (make, model, refrigerant type, temperature readings) for every cooler and ice machine, manage recurring maintenance agreements that keep grocery and restaurant accounts compliant, and support EPA 608 refrigerant tracking. Techs need a mobile app that logs readings and captures parts on site, and same-day invoicing keeps recurring-contract cash flowing.',

  keyFeatures: [
    '24/7 emergency dispatch for warm-box / down-cooler calls',
    'Maintenance-agreement tracking for recurring grocery and restaurant contracts',
    'Per-asset history with refrigerant type, charge, and temperature logs',
    'EPA 608 refrigerant tracking and compliance record-keeping',
    'Mobile app to log readings, parts, and photos at each unit on site',
    'QuickBooks / accounting sync and fast same-day invoicing',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Commercial refrigeration platforms (ServiceTitan, FieldPulse, Workiz) are custom-quoted and scale with technicians and contracts. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller refrigeration shops.',
    structured: false,
  },

  search: { monthlyVolume: 70, kd: 5, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for commercial refrigeration contractors', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for larger cold-chain and multi-site operations', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small refrigeration shops needing published pricing', monthlyFromUsd: 59 },
    { slug: 'workiz', positioning: 'Strong on dispatch + built-in phone for emergency calls', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do commercial refrigeration companies use?',
      answer:
        'Refrigeration contractors often run FieldPulse or ServiceTitan (custom-quoted) for maintenance agreements and per-unit asset history, while smaller shops use Housecall Pro (from $59/month) or Jobber (from $29/month).',
    },
    {
      question: 'Can it handle 24/7 emergency and warm-box calls?',
      answer:
        'Yes. Workiz and ServiceTitan offer built-in call handling and fast dispatch so you can route an on-call tech to a down cooler quickly — critical when spoiling inventory is on the line — and invoice from the field.',
    },
    {
      question: 'Does refrigeration software track EPA 608 refrigerant usage?',
      answer:
        'Larger platforms like ServiceTitan and FieldPulse can log refrigerant type and charge per unit to support EPA 608 record-keeping. Confirm the exact reporting format meets your compliance needs during a demo.',
    },
    {
      question: 'How much does refrigeration field service software cost?',
      answer:
        'Commercial platforms like ServiceTitan and FieldPulse are custom-quoted. Published entry points are Jobber from $29/month and Housecall Pro from $59/month, which suit smaller refrigeration shops.',
    },
    {
      question: 'Can it manage recurring maintenance agreements?',
      answer:
        'Yes. FieldPulse, ServiceTitan, and Housecall Pro (from $59/month) let you attach recurring maintenance agreements to grocery and restaurant accounts, auto-scheduling PM visits so cold-chain units stay compliant.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
