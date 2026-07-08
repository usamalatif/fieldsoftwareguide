import type { Industry } from '@/lib/industries'

/**
 * Electrical — VERIFIED (researched 2026-07-08).
 * All six vendors have dedicated electrical vertical pages (URLs in sources).
 * Estimating + job costing confirmed for all six. Permit/compliance tracking is the
 * honest differentiator: ONLY Commusoft documents permit-tracking forms + NEC
 * compliance checklists; ServiceTitan handles permits via workarounds + the iPermit
 * marketplace integration; the other four document nothing for permits.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const electrical: Industry = {
  slug: 'electrical',
  name: 'Electrical',
  icon: '⚡',
  category: 'Trades',

  answer:
    'All six major FSM vendors market electrical-contractor products, so pick by estimating depth, job costing, and — if you pull permits — compliance support. For most small-to-midsize electrical shops, Housecall Pro (from $59/month billed annually; $79 month-to-month) leads with dedicated electrical estimating and job-costing reports. Larger commercial electrical contractors run ServiceTitan (custom-quoted), which has electrical-specific estimating and job-cost tracking at scale. The honest differentiator is permits: Commusoft (custom-quoted) is the only major FSM vendor that documents permit-tracking forms and NEC compliance checklists; ServiceTitan covers permits through its iPermit marketplace integration; Jobber, Housecall Pro, Workiz, and FieldPulse document nothing for permit tracking. Jobber (from $29/month billed annually; $49 month-to-month) is the cheapest published entry with automatic job profitability tracking. Expect published plans of $29–$299/month with annual billing.',

  intro:
    'Electrical work is estimate-driven: wins and losses happen at the quote, and margins die in untracked labor and materials. The right FSM software for an electrical contractor has to produce professional multi-option estimates fast, track job costs (labor, materials, overhead) against the quote, schedule crews across service calls and longer projects, and keep the paper trail — permits, inspections, compliance checklists — attached to the job. Very few FSM tools handle the permit side, so if inspections and NEC documentation matter to your work, that requirement should drive the shortlist.',

  keyFeatures: [
    'Multi-option estimates (good/better/best) built in the field',
    'Job costing: labor, materials, and overhead tracked against the quote',
    'Permit tracking and NEC compliance checklists (rare — see FAQ)',
    'Crew scheduling across service calls and multi-day projects',
    'QuickBooks / accounting sync with purchase orders for materials',
    'Mobile app with job photos and customer sign-off',
  ],

  priceRange: {
    min: 29,
    max: 299,
    note: 'Published plans run $29/mo (Jobber Core, annual billing; $49 month-to-month) to $299/mo (Housecall Pro MAX, annual billing; $329 month-to-month). ServiceTitan, Workiz, FieldPulse, and Commusoft are custom-quoted.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    { slug: 'housecall-pro', positioning: 'Best overall for small-to-midsize electrical shops — estimating + job-costing reports', monthlyFromUsd: 59 },
    { slug: 'servicetitan', positioning: 'Best for commercial electrical — electrical estimating + job costs at scale; permits via iPermit', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Only vendor documenting permit-tracking forms + NEC compliance checklists', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan — automatic job profitability tracking', monthlyFromUsd: 29 },
    { slug: 'fieldpulse', positioning: 'On-site estimate builder + labor/material cost monitoring', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Electrical estimating + per-tech labor rates in job margins', monthlyFromUsd: null },
  ],

  faqs: [
    {
      question: 'What FSM software do electrical contractors use?',
      answer:
        'Small and midsize electrical shops most often use Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), while larger commercial electrical contractors run ServiceTitan, which is custom-priced. All six major vendors market electrical-specific products.',
    },
    {
      question: 'Can FSM software track electrical permits and inspections?',
      answer:
        'Mostly no — this is the biggest gap in the category. Commusoft is the only major FSM vendor that documents permit-tracking forms and NEC compliance checklists. ServiceTitan handles permits through its iPermit marketplace integration and custom workflows. Jobber, Housecall Pro, Workiz, and FieldPulse document no permit-tracking features.',
    },
    {
      question: 'Which electrical software has real job costing?',
      answer:
        'All six document job costing: Jobber calculates profitability automatically from labor and materials, Housecall Pro reports labor/materials/commissions and margins, ServiceTitan tracks job costs for commercial electrical, Workiz factors per-tech labor rates into job margins, FieldPulse monitors labor, materials, and overhead, and Commusoft pulls labor from timesheets and materials from purchase orders.',
    },
    {
      question: 'How much does electrical contractor software cost?',
      answer:
        'Published plans run from $29/month (Jobber Core, 1 user, billed annually; $49 month-to-month) to $299/month (Housecall Pro MAX, up to 8 users, billed annually; $329 month-to-month). ServiceTitan, Workiz, FieldPulse, and Commusoft are quote-based and scale with technicians.',
    },
    {
      question: 'Does electrical FSM software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration so estimates, invoices, and payments sync to accounting. Commusoft and FieldPulse also sync with QuickBooks — confirm Online vs Desktop support for your setup.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber electrical contractor software', url: 'https://www.getjobber.com/industries/electrical-contractor-software/', checked: '2026-07-08' },
    { name: 'Housecall Pro electrical contractor software', url: 'https://www.housecallpro.com/industries/electrical-contractor-software/', checked: '2026-07-08' },
    { name: 'ServiceTitan electrical software', url: 'https://www.servicetitan.com/industries/electrical-software', checked: '2026-07-08' },
    { name: 'Workiz electrical contractor software', url: 'https://www.workiz.com/industries/electrical-contractor/', checked: '2026-07-08' },
    { name: 'FieldPulse electrical solution', url: 'https://www.fieldpulse.com/solutions/electrical', checked: '2026-07-08' },
    { name: 'Commusoft electrical contractor software', url: 'https://www.commusoft.com/en-us/industries/electrical-contractor-software/', checked: '2026-07-08' },
    { name: 'Commusoft permit tracking + NEC checklists', url: 'https://www.commusoft.com/en-us/campaigns/electrician-software/', checked: '2026-07-08' },
    { name: 'ServiceTitan electrical estimating', url: 'https://www.servicetitan.com/industries/electrical-software/estimating', checked: '2026-07-08' },
    { name: 'iPermit for ServiceTitan (marketplace)', url: 'https://marketplace.servicetitan.com/partner/ipermit', checked: '2026-07-08' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
