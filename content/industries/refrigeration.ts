import type { Industry } from '@/lib/industries'

/**
 * Refrigeration / cold-chain field service — VERIFIED (researched 2026-07-08).
 * Only ServiceTitan and Commusoft have dedicated refrigeration vertical pages —
 * Housecall Pro and FieldPulse are HVAC-only (never imply otherwise). Per-asset
 * tracking verified for ServiceTitan, Commusoft, Workiz, Housecall Pro, FieldPulse —
 * NOT Jobber. EPA 608 logging is a buildable-custom-fields claim, not a named feature.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const refrigeration: Industry = {
  slug: 'refrigeration',
  name: 'Refrigeration',
  icon: '🧊',
  category: 'Trades',

  answer:
    'The best field service management software for commercial refrigeration in 2026 starts with the two vendors that actually market refrigeration-specific products: ServiceTitan (dedicated refrigeration vertical) and Commusoft (commercial refrigeration software with asset tracking and job costing) — both custom-quoted. Smaller refrigeration shops can start on Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), though both market to HVAC rather than refrigeration specifically. Workiz is a solid mid-market option with per-unit equipment tracking, also custom-priced. Refrigeration teams specifically need 24/7 emergency dispatch for warm-box calls, maintenance-agreement tracking for grocery and restaurant accounts, per-asset history with refrigerant details, and EPA 608 record-keeping. Expect published plans of $29–$299/month with annual billing; enterprise platforms run higher once quoted. Because a warm cooler means lost inventory, response speed and asset history matter most.',

  intro:
    'Commercial refrigeration is unforgiving: a warm walk-in can spoil thousands of dollars of inventory in hours, so response speed and reliable service history define the business. The right FSM software has to route emergency "warm-box" calls fast, keep per-unit history (make, model, refrigerant type) for every cooler and ice machine, manage recurring maintenance agreements that keep grocery and restaurant accounts compliant, and support EPA 608 refrigerant record-keeping. Techs need a mobile app that logs readings and captures parts on site, and same-day invoicing keeps recurring-contract cash flowing.',

  keyFeatures: [
    '24/7 emergency dispatch for warm-box / down-cooler calls',
    'Maintenance-agreement tracking for recurring grocery and restaurant contracts',
    'Per-asset history with make, model, serial, and refrigerant details',
    'EPA 608 refrigerant record-keeping (usually via custom fields and forms)',
    'Mobile app to log readings, parts, and photos at each unit on site',
    'QuickBooks / accounting sync and fast same-day invoicing',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'The refrigeration-specific platforms (ServiceTitan, Commusoft) are custom-quoted and scale with technicians and contracts. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller refrigeration shops.',
    structured: false,
  },

  search: { monthlyVolume: 70, kd: 5, cpc: null },

  providers: [
    { slug: 'servicetitan', positioning: 'Best overall — dedicated refrigeration vertical + enterprise dispatch', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Dedicated commercial-refrigeration product with asset tracking + job costing', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small shops needing published pricing (HVAC-focused)', monthlyFromUsd: 59 },
    { slug: 'workiz', positioning: 'Strong dispatch + built-in phone for emergency calls; equipment tracking', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan (no native asset tracking)', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do commercial refrigeration companies use?',
      answer:
        'ServiceTitan and Commusoft are the only major FSM vendors with dedicated commercial-refrigeration products (both custom-quoted). Smaller refrigeration shops typically run Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), which are HVAC-focused but widely used for refrigeration work.',
    },
    {
      question: 'Can it handle 24/7 emergency and warm-box calls?',
      answer:
        'Yes. Workiz and ServiceTitan offer built-in call handling and fast dispatch so you can route an on-call tech to a down cooler quickly — critical when spoiling inventory is on the line — and invoice from the field.',
    },
    {
      question: 'Does refrigeration software track EPA 608 refrigerant usage?',
      answer:
        'No major FSM tool ships a named EPA 608 module, but ServiceTitan, Commusoft, and FieldPulse let you log refrigerant type and charge per unit through asset records and custom form fields. Confirm the exported report format meets your compliance needs during a demo.',
    },
    {
      question: 'How much does refrigeration field service software cost?',
      answer:
        'The refrigeration-specific platforms — ServiceTitan and Commusoft — are custom-quoted. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing), which suit smaller refrigeration shops.',
    },
    {
      question: 'Can it manage recurring maintenance agreements?',
      answer:
        'Yes. ServiceTitan, Commusoft, and Housecall Pro (from $59/month billed annually) let you attach recurring maintenance agreements to grocery and restaurant accounts, auto-scheduling PM visits so cold-chain units stay compliant.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'ServiceTitan refrigeration vertical', url: 'https://www.servicetitan.com/industries/refrigeration-software', checked: '2026-07-08' },
    { name: 'Commusoft commercial refrigeration vertical', url: 'https://www.commusoft.com/en-us/industries/refrigeration-software/', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-07-08' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
  ],
}
