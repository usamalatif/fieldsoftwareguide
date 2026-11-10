import type { Industry } from '@/lib/industries'

/**
 * Oil & Gas — VERIFIED (researched 2026-07-08).
 * None of the six FSM platforms reviewed markets an oil & gas vertical (checked against each
 * vendor's industries page) — picks are framed as "adaptable", never "built for O&G".
 * 2026-11-07: market claims narrowed to the six reviewed platforms (Workiz industries page
 * rechecked; no O&G page found for the others); Jobber offline support corrected per its
 * help center (timers, checklists, notes, attachments sync later); $299 ceiling removed.
 * Offline mode and custom safety-form claims verified against vendor docs.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates);
 * ServiceTitan, Workiz, FieldPulse, Commusoft are custom/quote → null (never guessed).
 * NOTE: Baker Hughes' 2016 production-analytics tool "FieldPulse" is unrelated to
 * fieldpulse.com (the FSM vendor) — never cite one as the other. (An earlier note named
 * iNERG; a 2026-10-24 search found no iNERG product by that name.)
 * Housecall Pro rechecked 2026-10-24; Jobber Core standard annual rate 2026-10-22.
 */
export const oilGas: Industry = {
  slug: 'oil-gas',
  name: 'Oil & Gas',
  icon: '🛢️',
  category: 'Specialized',
  metaDescription:
    'Compare field service and dispatch software for oil and gas service contractors: offline mobile apps, safety inspection forms, and verified pricing.',
  datePublished: '2026-07-08',

  answer:
    'None of the six platforms we review (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) markets a dedicated oil & gas vertical (rechecked November 2026), so the best field service and dispatch software for oil and gas service contractors is the tool whose verified capabilities fit the work: offline mobile access, buildable safety-inspection forms, and equipment tracking. By that measure, FieldPulse and ServiceTitan are the strongest fits for well servicing, tank cleaning, and valve and pump repair crews; both are custom-quoted. Smaller service contractors can start on Jobber (from $29/month billed annually; $49 month-to-month) or Housecall Pro (from $59/month billed annually; $79 month-to-month) for scheduling, work orders, and same-day invoicing, but check offline needs first: Jobber keeps timers, checklists (formerly called job forms), notes, and attachments working offline and syncs them later; checklists start on its Connect plan, while Housecall Pro documents offline viewing only. Workiz and Commusoft are mid-market options, also custom-priced. Published plans start at $29/month (Jobber Core) and $59/month (Housecall Pro Basic) with annual billing and rise with team size, up to $529/month for Jobber Plus with 15 users; quote-based platforms are priced separately.',

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
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-07' },
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

  bySize: [
    { size: 'Small contractor, mostly in cell coverage', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo)', why: 'Published prices and 14-day free trials. Jobber keeps timers, checklists, notes, and attachments working offline (checklists start on Connect, $99/mo); Housecall Pro documents offline viewing only (no editing).' },
    { size: 'Crews at no-signal sites', pick: 'FieldPulse or Workiz (custom quote)', why: 'Both document offline use that syncs when crews reconnect; FieldPulse switches to offline mode automatically.' },
    { size: 'Asset-heavy service work', pick: 'FieldPulse (custom quote)', why: 'Asset Management with serial numbers, warranties, and barcode scanning, plus custom forms for inspections.' },
    { size: 'Large operator, many crews', pick: 'ServiceTitan (custom quote)', why: 'Enterprise dispatch and reporting; its mobile app works offline with limits (real-time pricing and directions need signal).' },
  ],

  extraSections: [
    {
      id: 'oil-gas-dispatch',
      heading: 'Dispatch software for oil and gas service crews',
      paragraphs: [
        'Dispatching oil and gas crews differs from dispatching home-service technicians in one way that decides most shortlists: connectivity. Wellsites and pads often have no cell signal, so the dispatch tool has to let a crew open the job, record work offline, and sync when it reconnects. FieldPulse, Workiz, and ServiceTitan document offline use, and Jobber keeps timers, checklists (formerly called job forms), notes, and attachments working offline and syncs them later; checklists start on its Connect plan. Housecall Pro documents offline viewing only.',
        'In a demo, send a test job to a phone in airplane mode and check what the crew can still do: open the work order, complete a safety checklist, capture photos and signatures, and look up equipment by serial number. Then reconnect and confirm nothing is lost or duplicated. For a cross-trade view of scheduling and dispatch tools, see the [full FSM software comparison](/compare). If your crews also run trucking or fleet logistics, the [transportation guide](/by-industry/transportation) covers that side.',
      ],
    },
  ],

  mistakes: [
    'Shortlisting a tool for remote wellsites without checking what works offline. Jobber’s offline support covers timers, checklists, notes, and attachments, and Housecall Pro documents offline viewing only.',
    'Expecting a ready-made JSA template. None of the six platforms we review documents a named JSA template; you build JSA-style checklists with their custom form builders.',
    'Mixing up product names. Baker Hughes launched an unrelated production-analytics tool called FieldPulse in 2016; the FieldPulse in this guide is the field service platform at fieldpulse.com.',
    'Comparing quotes that cover different scopes. Custom-quoted tools scale with crews and assets, so ask every vendor to price the same number of users and the same modules.',
  ],

  faqs: [
    {
      question: 'What field service software do oil & gas companies use?',
      answer:
        'None of the six platforms we review markets an oil & gas vertical (rechecked November 2026). Service contractors typically adapt FieldPulse or ServiceTitan (both custom-quoted) for offline work, custom safety forms, and asset tracking, while smaller crews start on Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually).',
    },
    {
      question: 'What is the best dispatch software for oil and gas service companies?',
      answer:
        'For crews that work at no-signal sites, start with FieldPulse or Workiz, which document offline use that syncs on reconnect; ServiceTitan suits large operators and works offline with some limits. All three are custom-quoted. Contractors working mostly in coverage can trial Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually).',
    },
    {
      question: 'Does oil & gas FSM software work offline at remote sites?',
      answer:
        'Some does. FieldPulse switches to offline mode automatically out of cell range, Workiz lets crews update jobs with no connectivity, and ServiceTitan’s mobile app works offline with some limits (real-time pricing and directions need signal). All three sync when crews reconnect. Jobber keeps timers, checklists, notes, and attachments working offline and syncs them later (checklists start on Connect), while location-based timers need a connection. Housecall Pro documents offline viewing only.',
    },
    {
      question: 'How much does oil & gas field service software cost?',
      answer:
        'Platforms suited to larger oil & gas work, such as ServiceTitan, FieldPulse, and Commusoft, are custom-quoted and scale with crews and assets. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing), which suit smaller service contractors.',
    },
    {
      question: 'Can it handle safety (JSA) and compliance inspections?',
      answer:
        'None of the six platforms we review documents a named JSA template, but FieldPulse, ServiceTitan, and Commusoft all include custom form builders with photo and signature capture, so you can build JSA-style safety checklists and inspections that produce exportable records.',
    },
    {
      question: 'Is ServiceTitan or FieldPulse better for oil & gas?',
      answer:
        'Neither markets to oil & gas specifically. ServiceTitan suits large, high-volume operators needing deep reporting and dispatch at scale, while FieldPulse fits growing service contractors that want asset tracking and offline custom forms. Both are custom-priced, so demo both against your workflows.',
    },
  ],

  lastUpdated: '2026-11-07',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-07' },
    { name: 'Jobber app troubleshooting (offline use)', url: 'https://help.getjobber.com/hc/en-us/articles/360037203234-Troubleshooting-Tips-How-to-Help-Us-Help-You', checked: '2026-11-07' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-07' },
    { name: 'Workiz industries (no oil & gas)', url: 'https://www.workiz.com/industries/', checked: '2026-11-07' },
    { name: 'Housecall Pro mobile app (offline viewing)', url: 'https://www.housecallpro.com/features/mobile-app/', checked: '2026-07-08' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-22' },
    { name: 'Baker Hughes FieldPulse launch (unrelated product)', url: 'https://worldoil.com/news/2016/4/12/baker-hughes-introduces-model-based-predictive-analytics-software', checked: '2026-10-24' },
    { name: 'FieldPulse offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-07-08' },
    { name: 'ServiceTitan field mobile app FAQ (offline)', url: 'https://help.servicetitan.com/faq/servicetitan-field-mobile-app-faq', checked: '2026-07-08' },
    { name: 'Workiz mobile app (offline access)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-07-08' },
    { name: 'ServiceTitan custom forms', url: 'https://help.servicetitan.com/docs/forms', checked: '2026-07-08' },
    { name: 'Commusoft digital forms', url: 'https://www.commusoft.com/en-gb/features/digital-forms-software/', checked: '2026-07-08' },
  ],
}
