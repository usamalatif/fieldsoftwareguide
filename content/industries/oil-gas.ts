import type { Industry } from '@/lib/industries'

/**
 * Oil & Gas — VERIFIED (researched 2026-07-08).
 * No major FSM vendor markets an oil & gas vertical (checked against each vendor's
 * industries page) — picks are framed as "adaptable", never "built for O&G".
 * Offline mode and custom safety-form claims verified against vendor docs.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates);
 * ServiceTitan, Workiz, FieldPulse, Commusoft are custom/quote → null (never guessed).
 * NOTE: "Field Pulse" by iNERG (inerg.com) is an unrelated O&G product — never cite it
 * as fieldpulse.com.
 */
export const oilGas: Industry = {
  slug: 'oil-gas',
  name: 'Oil & Gas',
  icon: '🛢️',
  category: 'Specialized',

  answer:
    'No major field service management vendor markets a dedicated oil & gas vertical (checked July 2026) — so the best FSM software for oil & gas service contractors is the tool whose verified capabilities fit the work: offline mobile access, buildable safety-inspection forms, and equipment tracking. By that measure, FieldPulse and ServiceTitan are the strongest fits for well servicing, tank cleaning, and valve and pump repair crews — both custom-quoted. Smaller service contractors can start on Jobber (from $29/month billed annually; $49 month-to-month) or Housecall Pro (from $59/month billed annually; $79 month-to-month) for scheduling, work orders, and same-day invoicing. Workiz and Commusoft are solid mid-market options, also on custom pricing. Oil & gas teams specifically need offline access for no-signal sites, JSA-style safety checklists, serial-level equipment tracking, and audit-ready records. Expect published plans of $29–$299/month with annual billing; enterprise platforms run higher once quoted.',

  intro:
    'Oil & gas field service runs on compliance, safety, and asset accountability across sites that often have no cell coverage. The right FSM software has to capture inspection and JSA (job safety analysis) checklists, track equipment by serial and location, keep a defensible audit trail for regulators, and work offline so crews at remote wellsites can log work and sync later. Because jobs are high-value and hazard-prone, upfront quoting, purchase-order handling, and integration with accounting matter as much as raw scheduling.',

  keyFeatures: [
    'Custom inspection & JSA-style safety checklist forms with photo and signature capture',
    'Offline mobile access for remote wellsites and pads with no cell signal',
    'Equipment & asset tracking by serial, location, and service history',
    'Audit-ready compliance records and exportable regulatory documentation',
    'Purchase-order and work-order workflows for high-value field jobs',
    'QuickBooks / ERP accounting sync for job costing across crews',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Most platforms suited to oil & gas work (ServiceTitan, FieldPulse, Workiz, Commusoft) are custom-quoted and scale with crews and assets. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller service contractors.',
    structured: false,
  },

  search: { monthlyVolume: 90, kd: 4, cpc: 34.06 },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best capability fit for oil & gas service contractors (offline + custom forms)', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large operators needing enterprise dispatch + reporting', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Strong on custom forms and recurring service contracts', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Offline mobile app + built-in comms for growing crews', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan for small contractors', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What field service software do oil & gas companies use?',
      answer:
        'No major FSM vendor markets an oil & gas vertical (checked July 2026). Service contractors typically adapt FieldPulse or ServiceTitan (both custom-quoted) for offline work, custom safety forms, and asset tracking, while smaller crews start on Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually).',
    },
    {
      question: 'Does oil & gas FSM software work offline at remote sites?',
      answer:
        'Yes. FieldPulse switches to offline mode automatically out of cell range, Workiz lets crews update jobs with no connectivity, and ServiceTitan’s mobile app works offline with some limits (real-time pricing and directions need signal). All three sync when crews reconnect.',
    },
    {
      question: 'How much does oil & gas field service software cost?',
      answer:
        'Platforms suited to enterprise oil & gas work — ServiceTitan, FieldPulse, Commusoft — are custom-quoted and scale with crews and assets. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing), which suit smaller service contractors.',
    },
    {
      question: 'Can it handle safety (JSA) and compliance inspections?',
      answer:
        'None of the major FSM tools ships a named JSA template, but FieldPulse, ServiceTitan, and Commusoft all include custom form builders with photo and signature capture — so you can build JSA-style safety checklists and inspections that produce audit-ready, exportable records.',
    },
    {
      question: 'Is ServiceTitan or FieldPulse better for oil & gas?',
      answer:
        'Neither markets to oil & gas specifically. ServiceTitan suits large, high-volume operators needing deep reporting and dispatch at scale, while FieldPulse fits growing service contractors that want strong asset tracking and offline custom forms at a lower quote. Both are custom-priced — demo both against your workflows.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'FieldPulse offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-07-08' },
    { name: 'ServiceTitan field mobile app FAQ (offline)', url: 'https://help.servicetitan.com/faq/servicetitan-field-mobile-app-faq', checked: '2026-07-08' },
    { name: 'Workiz mobile app (offline access)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-07-08' },
    { name: 'ServiceTitan custom forms', url: 'https://help.servicetitan.com/docs/forms', checked: '2026-07-08' },
    { name: 'Commusoft digital forms', url: 'https://www.commusoft.com/en-gb/features/digital-forms-software/', checked: '2026-07-08' },
  ],
}
