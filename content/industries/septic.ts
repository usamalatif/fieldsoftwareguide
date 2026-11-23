import type { Industry } from '@/lib/industries'

/**
 * Septic: VERIFIED (researched 2026-11-23, batch 6 draft).
 * ServiceTitan /industries/septic-business-software: service agreement software for recurring
 * services, bulk booking of recurring appointments, reminders and dispatch notifications, equipment
 * details and service dates for commercial clients, last inspection date in the customer portal, route
 * optimization, QuickBooks Online and Desktop; no tank size, lid location, gallons or manifests.
 * FieldPulse /industries/septic: automatic scheduling from contract terms, renewal notifications, tank
 * location in job notes, inspection checklists and signatures, route planning; QuickBooks FAQ answer did
 * not render, so not claimed. Workiz and Commusoft septic URLs 404. Jobber septic page seen in search
 * only (not fetched). Housecall Pro: no septic help article. Septic tools: ServiceCore septic page:
 * pump-out-due emails to homeowners, tank records with lid map pin, size and pumping frequency, gallons
 * pumped and dump site, state manifest forms on the phone, inspection reports, route optimization with
 * dump stops, QuickBooks Online; pricing page did not render, so no price. PumpDocket $139 (1 to 3
 * trucks, 75 active customers), $329 (4 to 10 trucks), $649 (11+ trucks) a month, no per-user fees;
 * gallons and disposal at closeout on every plan; recurring reminders, manifests and QuickBooks sync on
 * Team. Tank Track: service-due reminders, waste manifests, inspections; its visible price and its
 * structured data conflict, so no Tank Track price is used. PumpDocket 30% intro offer ignored.
 */
export const septic: Industry = {
  slug: 'septic',
  name: 'Septic',
  icon: '🚽',
  category: 'Specialized',
  metaDescription:
    'Compare septic software for pump-out reminders, tank and lid records, gallons and manifests, inspections, truck routes and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Septic companies live on repeat pump-outs and paperwork, so due-date reminders, tank records and manifests matter most. ServiceTitan and FieldPulse have septic pages with recurring service agreements, inspections or reports, and routes (quote only), but neither mentions gallons pumped or manifests. Septic-specific tools cover the compliance side. ServiceCore records each tank’s lid on a map, emails homeowners when a pump-out is due and turns your state manifest into a phone form (quote only). PumpDocket publishes prices by truck count: $139 a month for 1 to 3 trucks, $329 for 4 to 10 and $649 for 11 or more, with no per-user fees. Its manifests, reminders and QuickBooks sync start on the $329 plan.',

  intro:
    'A septic business pumps the same tanks every few years, inspects systems for home sales and hauls waste to approved disposal sites. The software has to remember when each tank is due, keep a record of where the lid is and how big the tank is, record gallons pumped and where they were dumped, and produce the manifest or county log your state requires. Pump trucks fill up mid-route, so routes need dump stops. Many companies also pump grease traps or portable toilets, so check which job types each tool supports.',

  keyFeatures: [
    'Pump-out due reminders and recurring schedules',
    'Tank records with size, lid location and history',
    'Gallons pumped and disposal site per job',
    'State manifests, pump reports and county logs',
    'Inspection checklists and reports',
    'Truck routes with dump stops, and QuickBooks sync',
  ],

  priceRange: {
    min: 139,
    max: null,
    note: 'Septic-specific: PumpDocket $139 a month for 1 to 3 trucks (up to 75 active customers), $329 for 4 to 10 trucks and $649 for 11 or more, no per-user fees; ServiceCore and Tank Track are not priced here. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, neither with a confirmed septic page. ServiceTitan and FieldPulse, which have septic pages, are quote only.',
    source: { name: 'PumpDocket pricing', url: 'https://pumpdocket.com/pricing', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'servicetitan',
      positioning: 'Septic page with service agreements, reminders, reports and QuickBooks Desktop',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger septic companies with an office, CSRs and many service agreements',
        strengths: [
          'Service agreement software that automates recurring services; bulk booking of recurring appointments',
          'Customers see their last septic inspection date in the portal; customizable reports',
          'Route optimization and QuickBooks Online and Desktop',
        ],
        limitations: [
          'No published price; packages are behind one “Get Pricing” button',
          'Its septic page does not mention tank size, lid location, gallons pumped or manifests',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Septic page with contract scheduling, inspection checklists and routes',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Septic service and inspection companies that run on contracts',
        strengths: [
          'Automatic scheduling based on each contract’s terms, with renewal notifications',
          'Inspection checklists, compliance documents and customer signatures on site',
          'Route planning; job notes carry the tank location and past findings',
        ],
        limitations: [
          'Seat-based pricing is not published',
          'Its septic page does not mention gallons pumped, manifests or lid GPS',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; equipment tracking and recurring plans',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small residential pumpers that want a general tool at a known price',
        strengths: [
          'Customer equipment tracking and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'No septic page or septic help articles found; no manifest or gallons tracking confirmed',
          'Recurring service plans need MAX ($299/mo billed annually)',
        ],
      },
    },
  ],

  bySize: [
    { size: 'One to three trucks', pick: 'PumpDocket Starter ($139/mo)', why: 'Drivers log gallons and disposal at closeout, with unlimited team members. Capped at 75 active customers; reminders and manifests need Team.' },
    { size: 'Four to ten trucks with state paperwork', pick: 'PumpDocket Team ($329/mo)', why: 'Adds recurring scheduling and reminders, trip tickets, FOG manifests for grease traps and QuickBooks sync.' },
    { size: 'Pumper that wants tank and lid records', pick: 'ServiceCore (custom quote)', why: 'Tank size, lid pin on a map, pump-out-due emails, gallons and dump site, state manifest forms and routes with dump stops.' },
    { size: 'Inspection-heavy septic company', pick: 'FieldPulse (custom quote)', why: 'Inspection checklists, compliance documents and signatures, with scheduling driven by contract terms.' },
    { size: 'Large company with CSRs and agreements', pick: 'ServiceTitan (custom quote)', why: 'Service agreement automation, bulk booking, reports and QuickBooks Desktop support.' },
  ],

  extraSections: [
    {
      id: 'septic-tanks-manifests',
      heading: 'Tank records, gallons and manifests: what to test in a demo',
      paragraphs: [
        'Bring a real pump ticket and your state form. ServiceCore turns a manifest, pump report or county log into a phone form with required fields and records gallons pumped and where they were dumped. PumpDocket logs gallons and disposal on every plan and adds trip tickets and FOG manifests on Team. Tank Track says it creates waste manifest reports as work is completed. ServiceTitan’s and FieldPulse’s septic pages do not mention manifests, so ask how they would handle yours.',
        'Then check tank records and reminders. ServiceCore stores tank size, pumping frequency and a lid pin on the map, and emails homeowners when a tank is due. FieldPulse keeps the tank location in job notes, and PumpDocket shows tank history on the driver’s job page. Count your trucks too: PumpDocket prices by truck range, while ServiceTitan and FieldPulse quote by package or seat. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Losing track of due tanks. Without pump-out reminders, repeat work goes to whoever calls first.',
    'Digging for lids. Record the lid location on a map so the next driver walks straight to it.',
    'Filling in manifests by hand. Choose a tool that captures gallons and disposal site on the phone.',
    'Assuming a general FSM tool covers compliance. ServiceTitan’s and FieldPulse’s septic pages do not mention manifests.',
  ],

  faqs: [
    {
      question: 'What is the best software for a septic company?',
      answer:
        'ServiceTitan and FieldPulse have septic pages with agreements, inspections and routes (quote only). For manifests and tank records, ServiceCore (quote only) and PumpDocket ($139 to $649 a month by truck count) are built for septic pumpers.',
    },
    {
      question: 'How much does septic software cost?',
      answer:
        'PumpDocket costs $139 a month for 1 to 3 trucks, $329 for 4 to 10 and $649 for 11 or more, with no per-user fees. ServiceTitan, FieldPulse and ServiceCore do not publish prices. Housecall Pro starts at $59 a month billed annually but has no septic page.',
    },
    {
      question: 'Which septic software tracks gallons pumped and manifests?',
      answer:
        'ServiceCore records gallons pumped and dump site and turns your state manifest into a phone form. PumpDocket logs gallons and disposal on every plan, with manifests on Team ($329). Tank Track creates waste manifest reports as work is completed.',
    },
    {
      question: 'Can septic software remind customers when a pump-out is due?',
      answer:
        'ServiceCore emails the homeowner automatically when the tank is due and lists who is due for your office. Tank Track sends service-due reminders by text and email, and PumpDocket includes recurring reminders on Team.',
    },
    {
      question: 'Can septic software record where the tank lid is?',
      answer:
        'ServiceCore lets you drop a pin on the map for the lid and stores tank size, pumping frequency, hose length and gate code. FieldPulse keeps the tank location in job notes for the next tech.',
    },
    {
      question: 'Which septic software works with QuickBooks?',
      answer:
        'ServiceTitan integrates with QuickBooks Online and Desktop. ServiceCore syncs customers, invoices and payments with QuickBooks Online, PumpDocket includes QuickBooks sync on Team, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'ServiceTitan septic business software', url: 'https://www.servicetitan.com/industries/septic-business-software', checked: '2026-11-23' },
    { name: 'FieldPulse septic service software', url: 'https://www.fieldpulse.com/industries/septic', checked: '2026-11-23' },
    { name: 'FieldPulse pricing (seat-based)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Workiz industries (no septic)', url: 'https://www.workiz.com/industries/', checked: '2026-11-21' },
    { name: 'Commusoft industries (no septic)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'ServiceCore septic business software', url: 'https://servicecore.com/septic-business-software/', checked: '2026-11-23' },
    { name: 'PumpDocket septic software', url: 'https://pumpdocket.com/', checked: '2026-11-23' },
    { name: 'PumpDocket pricing', url: 'https://pumpdocket.com/pricing', checked: '2026-11-23' },
    { name: 'Tank Track septic and grease trap software', url: 'https://tank-track.com/', checked: '2026-11-23' },
  ],
}
