import type { Industry } from '@/lib/industries'

/**
 * Oil & Gas — DRAFT (dataVerified: false, noindex).
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse, and Commusoft are custom/quote and recorded as null (never guessed).
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const oilGas: Industry = {
  slug: 'oil-gas',
  name: 'Oil & Gas',
  icon: '🛢️',
  category: 'Specialized',

  answer:
    'The best field service management software for oil & gas depends on how much compliance and asset depth you need. Enterprise operators serving wellsites, pipelines, and midstream facilities usually run FieldPulse or ServiceTitan for asset history, custom inspection forms, and dispatch across remote crews — both are custom-quoted rather than publicly priced. Smaller service contractors (well servicing, tank cleaning, valve and pump repair) can start on Jobber (from $29/month) or Housecall Pro (from $59/month) for scheduling, work orders, and same-day invoicing. Workiz and Commusoft are solid mid-market options, also on custom pricing. Oil & gas teams specifically need offline mobile access for no-signal sites, safety/JSA checklists, equipment and serial tracking, and audit-ready compliance records. Expect published plans around $29–$299/month, with enterprise platforms higher once quoted.',

  intro:
    'Oil & gas field service runs on compliance, safety, and asset accountability across sites that often have no cell coverage. The right FSM software has to capture inspection and JSA (job safety analysis) checklists, track equipment by serial and location, keep a defensible audit trail for regulators, and work offline so crews at remote wellsites can log work and sync later. Because jobs are high-value and hazard-prone, upfront quoting, purchase-order handling, and integration with accounting matter as much as raw scheduling.',

  keyFeatures: [
    'Custom inspection & JSA / safety checklist forms with photo and signature capture',
    'Offline mobile access for remote wellsites and pads with no cell signal',
    'Equipment & asset tracking by serial, location, and service history',
    'Audit-ready compliance records and exportable regulatory documentation',
    'Purchase-order and work-order workflows for high-value field jobs',
    'QuickBooks / ERP accounting sync for job costing across crews',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Most oil & gas-grade platforms (ServiceTitan, FieldPulse, Workiz, Commusoft) are custom-quoted and scale with crews and assets. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller service contractors.',
    structured: false,
  },

  search: { monthlyVolume: 90, kd: 4, cpc: 34.06 },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for oil & gas service contractors', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large operators needing enterprise dispatch + reporting', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Strong on compliance and recurring service contracts', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Good for growing crews wanting built-in comms', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan for small contractors', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What field service software do oil & gas companies use?',
      answer:
        'Larger operators and service contractors typically run FieldPulse or ServiceTitan (both custom-quoted) for asset tracking, inspections, and dispatch, while smaller crews start on Jobber (from $29/month) or Housecall Pro (from $59/month).',
    },
    {
      question: 'Does oil & gas FSM software work offline at remote sites?',
      answer:
        'Yes — offline mobile access is essential. FieldPulse, ServiceTitan, and Workiz let crews complete work orders, checklists, and photos with no signal, then sync automatically when they reconnect. Confirm offline depth during a demo.',
    },
    {
      question: 'How much does oil & gas field service software cost?',
      answer:
        'Enterprise platforms like ServiceTitan and FieldPulse are custom-quoted and scale with crews and assets. Published entry points are Jobber from $29/month and Housecall Pro from $59/month, though those suit smaller service contractors.',
    },
    {
      question: 'Can it handle safety (JSA) and compliance inspections?',
      answer:
        'Yes. FieldPulse, ServiceTitan, and Commusoft support custom inspection and JSA checklist forms with photo, signature, and timestamp capture, producing audit-ready records you can export for regulators.',
    },
    {
      question: 'Is ServiceTitan or FieldPulse better for oil & gas?',
      answer:
        'ServiceTitan suits large, high-volume operators needing deep reporting and dispatch at scale, while FieldPulse fits growing service contractors that want strong asset and inspection tracking at a lower quote. Both are custom-priced.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
