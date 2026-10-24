import type { Industry } from '@/lib/industries'

/**
 * Refrigeration / cold-chain field service — VERIFIED (researched 2026-07-08).
 * Only ServiceTitan and Commusoft have dedicated refrigeration vertical pages —
 * Housecall Pro and FieldPulse are HVAC-only (never imply otherwise). Per-asset
 * tracking verified for ServiceTitan, Commusoft, Workiz, Housecall Pro, FieldPulse —
 * NOT Jobber. EPA 608 logging is a buildable-custom-fields claim, not a named feature.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-24: Housecall Pro plans rechecked. Refrigerant rules from epa.gov: Section 608
 * (40 CFR 82 Subpart F) for ozone-depleting refrigerants, 50+ lb; AIM Act ER&R (40 CFR 84
 * Subpart C) for HFCs/substitutes with GWP > 53, 15+ lb, leak repair from 2026-01-01.
 */
export const refrigeration: Industry = {
  slug: 'refrigeration',
  name: 'Refrigeration',
  icon: '🧊',
  category: 'Trades',
  metaDescription:
    'Compare refrigeration field service tools for dispatch, maintenance, work orders and equipment history. Know where refrigerant tracking differs.',
  datePublished: '2026-07-08',

  answer:
    'The best refrigeration service management software in 2026 starts with the two vendors that market refrigeration-specific products: ServiceTitan (dedicated refrigeration vertical) and Commusoft (commercial refrigeration software with asset tracking and job costing), both custom-quoted. Smaller refrigeration shops can start on Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), though both market to HVAC rather than refrigeration, and Jobber has no native per-asset tracking. Workiz is a mid-market option with per-unit equipment tracking, also custom-priced. Refrigeration teams need fast emergency dispatch for warm-box calls, maintenance-agreement tracking for grocery and restaurant accounts, per-asset history with refrigerant details, and a way to record refrigerant added for EPA leak repair and recordkeeping rules. Published plans run $29–$299/month with annual billing; ServiceTitan and Commusoft are quoted separately.',

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
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
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

  bySize: [
    { size: 'Small shop, mostly reach-in and restaurant work', pick: 'Housecall Pro Basic ($59/mo) or Jobber Core ($29/mo)', why: 'Published prices and 14-day trials. Both market to HVAC rather than refrigeration, and Jobber has no native per-asset tracking.' },
    { size: 'Growing shop that needs per-unit history', pick: 'Workiz (custom quote)', why: 'Per-unit equipment tracking plus dispatch with built-in phone for emergency calls.' },
    { size: 'Commercial refrigeration contractor', pick: 'Commusoft (custom quote)', why: 'Dedicated commercial refrigeration product with asset maintenance records and job costing.' },
    { size: 'Large or multi-region operation', pick: 'ServiceTitan (custom quote)', why: 'Dedicated refrigeration vertical, installed-equipment records, and enterprise dispatch.' },
  ],

  extraSections: [
    {
      id: 'refrigerant-tracking',
      heading: 'Refrigeration service software vs refrigerant tracking',
      paragraphs: [
        'Field service software runs the service side: dispatching a technician to a down cooler, recording the work, and invoicing. Refrigerant compliance is a separate job, and the rules depend on the refrigerant. For ozone-depleting refrigerants, EPA Section 608 leak repair rules apply to appliances with a full charge of 50 pounds or more. Owners and operators keep servicing records showing the date, type of service, and refrigerant added, and technicians must give the owner an invoice showing the amount added. For HFCs and HFC substitutes with a global warming potential above 53, EPA’s AIM Act Emissions Reduction and Reclamation rule has applied leak repair requirements since January 1, 2026 to appliances with a full charge of 15 pounds or more; residential and light commercial air conditioning and heat pumps are excluded. Under both programs the leak-rate threshold for commercial refrigeration is 20%. New commercial refrigeration systems with a full charge of 1,500 pounds or more of those HFCs must also install automatic leak detection.',
        'An FSM tool can capture much of the record on the work order and invoice through asset records and custom fields: refrigerant type, full charge, and the amount added on each visit. What none of the major FSM tools ships is a named EPA compliance module that calculates leak rates across a fleet. If you manage many covered systems, ask in the demo how refrigerant added per appliance is reported over 12 months, or run a dedicated refrigerant tracking system alongside the FSM tool. EPA proposed changes to parts of the HFC rule in 2026, so check the current requirements for your equipment; this is general information, not compliance advice. If your team also does heating and comfort cooling, see our [HVAC field service management software](/by-industry/hvac) guide.',
      ],
    },
  ],

  mistakes: [
    'Assuming the FSM tool calculates EPA leak rates. None of the major FSM tools ships a named EPA compliance module; you record refrigerant added through asset records and custom fields.',
    'Assuming only 50-pound systems are covered. That threshold applies to ozone-depleting refrigerants; for HFCs with a GWP above 53, the AIM Act leak repair threshold is 15 pounds.',
    'Choosing a tool without per-unit equipment history. Jobber has no native asset tracking, and refrigeration work depends on each unit’s make, model, serial, and refrigerant type.',
    'Buying on HVAC marketing alone. Housecall Pro and FieldPulse market HVAC, not refrigeration; ServiceTitan and Commusoft have dedicated refrigeration pages.',
    'Leaving the refrigerant amount off the invoice. For ozone-depleting refrigerants, EPA Section 608 requires technicians to give the owner an invoice showing the refrigerant added, so make it a required field.',
  ],

  faqs: [
    {
      question: 'What FSM software do commercial refrigeration companies use?',
      answer:
        'ServiceTitan and Commusoft are the only major FSM vendors with dedicated commercial-refrigeration products (both custom-quoted). Smaller refrigeration shops often look at Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), which market to HVAC but cover scheduling, dispatch, and invoicing.',
    },
    {
      question: 'Can it handle 24/7 emergency and warm-box calls?',
      answer:
        'Yes. Workiz and ServiceTitan offer built-in call handling and fast dispatch so you can route an on-call tech to a down cooler quickly, which matters when inventory is at risk, and invoice from the field.',
    },
    {
      question: 'Does refrigeration software track EPA 608 refrigerant usage?',
      answer:
        'No major FSM tool ships a named EPA compliance module, but ServiceTitan, Commusoft, and FieldPulse let you log refrigerant type and charge per unit through asset records and custom form fields. Confirm the exported report format meets your needs during a demo.',
    },
    {
      question: 'Which EPA refrigerant leak rules apply to commercial refrigeration?',
      answer:
        'It depends on the refrigerant. Ozone-depleting refrigerants fall under EPA Section 608, with leak repair for appliances of 50 pounds or more. HFCs and substitutes with a GWP above 53 fall under the AIM Act rule, with leak repair for appliances of 15 pounds or more since January 1, 2026. Both use a 20% leak-rate threshold for commercial refrigeration. Check current EPA requirements for your equipment.',
    },
    {
      question: 'How much does refrigeration field service software cost?',
      answer:
        'The refrigeration-specific platforms, ServiceTitan and Commusoft, are custom-quoted. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing), which suit smaller refrigeration shops.',
    },
    {
      question: 'Can it manage recurring maintenance agreements?',
      answer:
        'Yes. ServiceTitan and Commusoft let you attach recurring maintenance agreements to grocery and restaurant accounts and schedule preventive maintenance visits. On Housecall Pro, Recurring Service Plans are part of the MAX plan ($299/month billed annually), not the $59 Basic plan.',
    },
  ],

  lastUpdated: '2026-10-24',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
    { name: 'EPA Section 608 leak repair requirements', url: 'https://www.epa.gov/section608/stationary-refrigeration-leak-repair-requirements', checked: '2026-10-24' },
    { name: 'EPA Section 608 recordkeeping and reporting', url: 'https://www.epa.gov/section608/recordkeeping-and-reporting-requirements-stationary-refrigeration', checked: '2026-10-24' },
    { name: 'EPA AIM Act Emissions Reduction and Reclamation fact sheet (HFC leak repair, ALD)', url: 'https://www.epa.gov/system/files/documents/2024-09/err-fact-sheet.pdf', checked: '2026-10-24' },
    { name: 'EPA reporting resources for the ER&R rule', url: 'https://www.epa.gov/hfcs/reporting-resources-emissions-reduction-reclamation-rule', checked: '2026-10-24' },
    { name: 'ServiceTitan refrigeration vertical', url: 'https://www.servicetitan.com/industries/refrigeration-software', checked: '2026-07-08' },
    { name: 'Commusoft commercial refrigeration vertical', url: 'https://www.commusoft.com/en-us/industries/refrigeration-software/', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-07-08' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
  ],
}
