import type { Industry } from '@/lib/industries'

/**
 * Electrical — VERIFIED (researched 2026-07-08).
 * All six vendors have dedicated electrical vertical pages (URLs in sources).
 * Estimating + job costing confirmed for all six. Permit/compliance tracking is the
 * honest differentiator: ONLY Commusoft documents permit-tracking forms + NEC
 * compliance checklists; ServiceTitan handles permits via workarounds + the iPermit
 * marketplace integration; the other four document nothing for permits.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-27: vertical pages, Commusoft permit/NEC claim, and iPermit listing rechecked.
 * Plan gating corrected: Jobber job costing is Grow and Plus (not Core); Jobber checklists
 * and QuickBooks Online from Connect; Housecall Pro pricing page lists job costing from Basic
 * and Recurring Service Plans on MAX. Page now separates service FSM from electrical CAD /
 * design and construction takeoff software.
 * 2026-10-31: removed the $299 "ceiling" (Jobber publishes Grow/Plus tiers above it); pricing
 * now stated as starting prices plus labelled team-size examples.
 */
export const electrical: Industry = {
  slug: 'electrical',
  name: 'Electrical',
  icon: '⚡',
  category: 'Trades',

  metaDescription:
    'Compare electrical contractor field service software for scheduling, dispatch, estimates, inspections, invoicing and recurring maintenance, with plan prices.',
  datePublished: '2026-07-08',

  answer:
    'All six major vendors market electrical contractor field service software, so choose by estimates, job costing, recurring maintenance, and permit support. For most small-to-midsize electrical service shops, Housecall Pro (from $59/month billed annually; $79 month-to-month) is the top pick: its pricing page lists a price book and job costing from the Basic plan, and flat-rate pricing from Essentials. Larger commercial electrical contractors run ServiceTitan (custom-quoted) for electrical estimating and job costing at scale. Permits separate the field: Commusoft (custom-quoted) is the only vendor that documents permit-tracking forms and NEC compliance checklists, and ServiceTitan connects to iPermit through its marketplace. Jobber (from $29/month billed annually) is the cheapest published plan, but job costing starts on its Grow plan. These are service and dispatch tools, not electrical CAD, design, or takeoff software.',

  intro:
    'Electrical service work runs on the estimate and the schedule: a panel upgrade, EV charger install, troubleshooting call, or annual inspection has to be quoted fast, scheduled to the right licensed tech, documented with photos and checklists, and invoiced before margins slip. The right field service software for an electrical contractor produces multi-option estimates in the field, tracks labor and materials against the quote, schedules recurring maintenance, and keeps the permit and inspection paper trail attached to the job.',

  keyFeatures: [
    'Multi-option estimates (good/better/best) built in the field',
    'Job costing: labor, materials, and overhead tracked against the quote',
    'Inspection checklists with photos and customer sign-off',
    'Recurring maintenance plans for inspections and service agreements',
    'Permit tracking and NEC compliance checklists (rare: see FAQ)',
    'QuickBooks / accounting sync with purchase orders for materials',
  ],

  priceRange: {
    min: 29,
    // No ceiling: Jobber publishes tiers above $299 (e.g. Grow 15 users $399, Plus 15 users $529).
    max: null,
    note: 'Published plans start at $29/mo (Jobber Core, 1 user, annual billing; $49 month-to-month) and $59/mo (Housecall Pro Basic, 1 user). Prices rise with team size and features, for example Housecall Pro MAX at $299/mo for up to 8 users and Jobber Plus at $529/mo for 15 users (annual billing). ServiceTitan, Workiz, FieldPulse, and Commusoft are custom-quoted.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-31' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    { slug: 'housecall-pro', positioning: 'Best overall for small-to-midsize electrical shops: price book + job costing from Basic', monthlyFromUsd: 59 },
    { slug: 'servicetitan', positioning: 'Best for commercial electrical: electrical estimating + job costs at scale; permits via iPermit', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Only vendor documenting permit-tracking forms + NEC compliance checklists', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Lowest published plan; job costing from the Grow plan', monthlyFromUsd: 29 },
    { slug: 'fieldpulse', positioning: 'On-site estimate builder + labor/material/overhead cost monitoring', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Good/better/best estimates + per-tech labor rates in job margins', monthlyFromUsd: null },
  ],

  bySize: [
    { size: 'Solo electrician', pick: 'Housecall Pro Basic ($59/mo)', why: 'Price book and job costing are listed on Basic. Jobber Core is cheaper at $29/mo but has no job costing or QuickBooks sync.' },
    { size: 'Small shop, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Adds checklists, flat-rate pricing, and QuickBooks Online sync. Jobber Grow is $229/mo for 5 users if you prefer Jobber’s job costing.' },
    { size: 'Shop selling maintenance plans', pick: 'Housecall Pro MAX ($299/mo, up to 8 users)', why: 'The pricing page lists Recurring Service Plans on MAX; extra users are $35/mo each.' },
    { size: 'Permit-heavy or commercial work', pick: 'Commusoft or ServiceTitan (custom quote)', why: 'Commusoft documents permit-tracking forms and NEC checklists; ServiceTitan adds iPermit through its marketplace.' },
  ],

  extraSections: [
    {
      id: 'electrical-fsm-vs-design-software',
      heading: 'Electrical contractor software vs electrical design and takeoff software',
      paragraphs: [
        'Field service software runs an electrician’s service business: booking calls, dispatching techs, quoting in the field, documenting the job, invoicing, and scheduling the next maintenance visit. It is built for service calls and short installs such as panel upgrades, EV chargers, lighting retrofits, generator hookups, and inspections.',
        'Electrical CAD and design software (schematics, load calculations, power system analysis) and construction takeoff and bid software (counting devices and wire from plans for large projects) solve different problems, and none of the six tools here replaces them. Contractors who bid new construction often run takeoff software for bids and field service software for service and maintenance work.',
      ],
    },
    {
      id: 'electrical-service-workflow',
      heading: 'From service call to recurring inspection: what to test in a demo',
      paragraphs: [
        'Run one realistic job through each trial: a customer books a panel upgrade, the dispatcher assigns a licensed tech, the tech presents good/better/best options, gets sign-off, completes an inspection checklist with photos, records the permit number, invoices on site, and the customer is enrolled in an annual maintenance plan. Then check the job costing report against the original estimate.',
        'Plan gating changes the answer. Jobber includes checklists and QuickBooks Online from Connect ($99/month billed annually for 1 user) and job costing from Grow ($149/month for 1 user). Housecall Pro lists job costing on Basic, checklists and QuickBooks Online on Essentials, and Recurring Service Plans on MAX. For permits, only Commusoft documents permit-tracking forms and NEC checklists, ServiceTitan relies on iPermit, and the others need a custom field. Compare the two published-price tools in [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro), see the full plan list in [Housecall Pro pricing](/pricing/housecall-pro), and check [QuickBooks compatibility](/quickbooks) before you choose a plan. Electricians who also do HVAC work can compare [HVAC field service software](/by-industry/hvac).',
      ],
    },
  ],

  mistakes: [
    'Buying design or takeoff software to run service calls. CAD and bid tools do not dispatch techs, invoice, or schedule maintenance.',
    'Assuming job costing is on the cheapest plan. Jobber includes it from Grow, not Core.',
    'Expecting permit tracking everywhere. Only Commusoft documents permit-tracking forms; ServiceTitan uses iPermit, and the others need custom fields.',
    'Missing where recurring plans start. Housecall Pro lists Recurring Service Plans on MAX, so price the plan you need for maintenance agreements.',
  ],

  faqs: [
    {
      question: 'What is the best electrical contractor field service software?',
      answer:
        'For small and midsize electrical service shops, Housecall Pro (from $59/month billed annually) is the top pick, with a price book and job costing listed from Basic. Larger commercial electrical contractors run ServiceTitan, which is custom-priced. Commusoft is the pick if permit tracking matters, and Jobber (from $29/month billed annually) is the cheapest published plan.',
    },
    {
      question: 'Is electrical contractor software the same as electrical design software?',
      answer:
        'No. Field service software books, dispatches, quotes, documents, and invoices service work. Electrical CAD and design tools handle schematics and load calculations, and takeoff and bid tools estimate large construction projects from plans. None of the six FSM tools compared here replaces them.',
    },
    {
      question: 'Can FSM software track electrical permits and inspections?',
      answer:
        'Permits are the biggest gap. Commusoft is the only major vendor that documents permit-tracking forms and NEC compliance checklists, and ServiceTitan handles permits through the iPermit marketplace integration. For inspections, all six offer checklists or custom forms: Jobber from Connect, Housecall Pro from Essentials, plus ServiceTitan, FieldPulse, Workiz, and Commusoft.',
    },
    {
      question: 'Which electrical software has real job costing?',
      answer:
        'All six document job costing, on different plans. Jobber includes it from Grow ($149/month billed annually for 1 user), Housecall Pro lists it from Basic, Workiz factors each tech’s hourly rate into job margins, FieldPulse monitors labor, materials, and overhead, ServiceTitan tracks job costs for commercial work, and Commusoft pulls labor from timesheets and materials from purchase orders.',
    },
    {
      question: 'Can it schedule recurring electrical maintenance?',
      answer:
        'Yes. Jobber supports recurring jobs, ServiceTitan has memberships and service agreements, Workiz offers Service Plans, FieldPulse has maintenance agreements, and Commusoft sends automated reminders under service contracts. Housecall Pro lists Recurring Service Plans on its MAX plan ($299/month billed annually).',
    },
    {
      question: 'How much does electrical contractor software cost?',
      answer:
        'Published plans start at $29/month for Jobber Core (1 user, billed annually; $49 month-to-month) and $59/month for Housecall Pro Basic (1 user). Cost rises with team size and features: Housecall Pro MAX is $299/month for up to 8 users, and Jobber’s 15-user tiers run up to $529/month on Plus, both billed annually. ServiceTitan, Workiz, FieldPulse, and Commusoft are quote-based and scale with technicians.',
    },
    {
      question: 'Does electrical FSM software integrate with QuickBooks?',
      answer:
        'Yes, but not on every plan. Jobber includes QuickBooks Online from Connect, and Housecall Pro includes QuickBooks Online from Essentials (it also supports Desktop; confirm the plan). ServiceTitan, Workiz, FieldPulse, and Commusoft also offer QuickBooks integrations; confirm Online vs Desktop support for your setup.',
    },
  ],

  lastUpdated: '2026-10-31',
  dataVerified: true,
  sources: [
    { name: 'Jobber electrical contractor software', url: 'https://www.getjobber.com/industries/electrical-contractor-software/', checked: '2026-10-27' },
    { name: 'Housecall Pro electrical contractor software', url: 'https://www.housecallpro.com/industries/electrical-contractor-software/', checked: '2026-10-27' },
    { name: 'ServiceTitan electrical software', url: 'https://www.servicetitan.com/industries/electrical-software', checked: '2026-10-27' },
    { name: 'Workiz electrical contractor software', url: 'https://www.workiz.com/industries/electrical-contractor/', checked: '2026-10-27' },
    { name: 'FieldPulse electrical solution', url: 'https://www.fieldpulse.com/solutions/electrical', checked: '2026-10-27' },
    { name: 'Commusoft electrical contractor software', url: 'https://www.commusoft.com/en-us/industries/electrical-contractor-software/', checked: '2026-10-27' },
    { name: 'Commusoft permit tracking + NEC checklists', url: 'https://www.commusoft.com/en-us/campaigns/electrician-software/', checked: '2026-10-27' },
    { name: 'ServiceTitan electrical estimating', url: 'https://www.servicetitan.com/industries/electrical-software/estimating', checked: '2026-10-27' },
    { name: 'iPermit for ServiceTitan (marketplace)', url: 'https://marketplace.servicetitan.com/partner/ipermit', checked: '2026-10-27' },
    { name: 'Jobber pricing (team-size tiers up to $529/mo)', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-31' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-31' },
    { name: 'Housecall Pro job costing reports', url: 'https://help.housecallpro.com/en/articles/6596631-job-costing-reports', checked: '2026-10-27' },
    { name: 'Workiz technician labor rates in job costing', url: 'https://help.workiz.com/hc/en-us/articles/27408705930769', checked: '2026-10-27' },
    { name: 'ServiceTitan memberships', url: 'https://help.servicetitan.com/docs/memberships', checked: '2026-10-27' },
    { name: 'Workiz service plans', url: 'https://help.workiz.com/hc/en-us/articles/18053140845457', checked: '2026-10-27' },
    { name: 'Commusoft service contracts', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-10-27' },
  ],
}
