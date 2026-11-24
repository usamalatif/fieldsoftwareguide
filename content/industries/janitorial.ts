import type { Industry } from '@/lib/industries'

/**
 * Commercial cleaning (janitorial): VERIFIED (researched 2026-11-23, batch 9 draft). Residential cleaning
 * has its own page. None of the six FSM vendors has a janitorial page (ServiceTitan and Workiz indexes,
 * FieldPulse 404; Housecall Pro janitorial URL seen in search only; Jobber not fetched). Commusoft
 * building and facility maintenance pages: service contracts, recurring planned maintenance, inspection
 * forms, purchase orders, QuickBooks, but no cleaning wording. Janitorial tools: Swept priced by location
 * with unlimited users: Optimize from $150 and Scale from $225 a month for up to 15 locations, Accelerate
 * custom; scheduling and shifts, mobile clock in and out, GPS site verification, inspections with photo
 * proof and per-location checklists on all plans; client portal, supply requests from the field and work
 * orders on Scale; QuickBooks Online for payroll hours (pages disagree on which plans), customer invoicing
 * not confirmed. Janitorial Manager from $1,000 a month (priced by buildings, cleanable square footage
 * and features); ISSA 612-based bidding, weighted inspections with photos, time clock with GPS and
 * geofencing, QR or NFC clock-in, supply ordering, QuickBooks Online and Desktop. Otuvy (CleanTelligent's
 * pricing URL redirects there): QM Inspect $150 and QM Pro $250 a month billed annually (5 users),
 * Frontline time clock add-on $50 plus $7 per user, implementation fee not stated.
 */
export const janitorial: Industry = {
  slug: 'janitorial',
  name: 'Janitorial',
  icon: '🏢',
  category: 'Field Services',
  metaDescription:
    'Compare janitorial software for commercial cleaning: GPS time clocks, site inspections, cleaning checklists, supply requests, bids and QuickBooks.',
  datePublished: '2026-11-24',

  answer:
    'Commercial cleaning companies manage people across many buildings at night, so GPS time clocks, site inspections and checklists matter more than routing. None of the six big field service tools we cover has a janitorial page; Commusoft’s building maintenance pages cover service contracts and inspections but not cleaning. Janitorial tools fill the gap. Swept is priced by location with unlimited users, from $150 a month for up to 15 locations, with a GPS-verified clock and photo inspections. Otuvy (formerly CleanTelligent) runs quality inspections from $150 a month billed annually. Janitorial Manager, from $1,000 a month, adds ISSA 612-based bidding, a geofenced time clock and supply ordering.',

  intro:
    'A janitorial company cleans the same offices, schools and medical buildings on a nightly or weekly schedule, often with large, changing crews. The software has to bid new buildings by square footage and production rates, schedule shifts, prove that cleaners were on site, run quality inspections that clients can see and handle supply requests. Contract billing is usually a fixed monthly amount per site. Check whether a tool invoices clients itself or only sends hours to payroll.',

  keyFeatures: [
    'Bids by square footage and production rates',
    'Nightly and weekly shift scheduling per site',
    'GPS or geofenced time clock for cleaners',
    'Site inspections with photos and client reports',
    'Supply requests from the field',
    'Contract billing, payroll hours and QuickBooks sync',
  ],

  priceRange: {
    min: 150,
    max: null,
    note: 'Janitorial tools: Swept from $150 (Optimize) or $225 (Scale) a month for up to 15 locations, unlimited users, annual saves more; Otuvy QM Inspect $150 and QM Pro $250 a month billed annually, time clock add-on $50 plus $7 per user; Janitorial Manager from $1,000 a month. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed janitorial page. Commusoft is quote only.',
    source: { name: 'Swept pricing', url: 'https://www.sweptworks.com/pricing', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'commusoft',
      positioning: 'Building and facility maintenance pages with contracts and inspections',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Facility service companies that combine cleaning with building maintenance',
        strengths: [
          'Service contract management and recurring planned maintenance',
          'Inspection forms in the mobile app, purchase orders and QuickBooks integration',
        ],
        limitations: [
          'No janitorial page; its pages describe maintenance, not cleaning',
          'No published price; no geofenced time clock or cleaning bids confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; employee GPS and recurring plans',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small commercial cleaners with a handful of accounts',
        strengths: [
          'Employee GPS and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans on MAX',
        ],
        limitations: [
          'We could not check its janitorial page',
          'No site inspections, geofencing or supply requests confirmed',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; lists cleaning among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Cleaning companies that do mostly residential work with a few offices',
        strengths: [
          'Published plans from $29/month billed annually; quotes on every plan',
          'Checklists, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'No janitorial page confirmed',
          'No inspections, geofenced clock or supply requests confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Small company with a few buildings', pick: 'Swept Optimize (from $150/mo, up to 15 locations)', why: 'Unlimited users, shift scheduling, mobile clock in with GPS site verification and photo inspections per location.' },
    { size: 'Company that wants client portals and supply requests', pick: 'Swept Scale (from $225/mo)', why: 'Adds a client portal, supply requests from the field, work orders and profit and loss by location.' },
    { size: 'Contractor focused on quality audits', pick: 'Otuvy QM Inspect ($150/mo billed annually, 5 users)', why: 'Unlimited inspections and locations with client report access. The time clock is an add-on.' },
    { size: 'Large contractor that bids by production rates', pick: 'Janitorial Manager (from $1,000/mo)', why: 'ISSA 612-based bidding, weighted inspections, a geofenced time clock, supply ordering and QuickBooks Online and Desktop.' },
    { size: 'Facility services company', pick: 'Commusoft (custom quote)', why: 'Service contracts, planned maintenance and inspection forms for buildings, though it does not market cleaning.' },
  ],

  extraSections: [
    {
      id: 'janitorial-clock-inspections',
      heading: 'Time clocks, inspections and billing: what to test',
      paragraphs: [
        'Start with proof of work. Swept verifies by GPS that crews were on site, Janitorial Manager pairs its time clock with GPS and geofencing and supports QR or NFC tag clock-in, and Otuvy’s Frontline add-on includes clock in and out. Then run a site inspection: Swept, Janitorial Manager and Otuvy all score inspections, attach photos and share results with clients, and Otuvy can turn deficiencies into work orders automatically.',
        'Then check the money side. Janitorial Manager bids with ISSA 612 production rates, while Swept offers a separate job costing calculator. Swept sends approved hours to QuickBooks Online for payroll, but we could not confirm that it invoices clients, so ask how each tool bills a monthly contract. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Trusting paper timesheets. A GPS or geofenced clock proves cleaners were on site.',
    'Losing accounts over quality. Run regular inspections and share the results with clients.',
    'Bidding by guesswork. Use square footage and production rates so bids match labor hours.',
    'Assuming payroll sync means invoicing. Check how each tool bills your monthly contracts.',
  ],

  faqs: [
    {
      question: 'What is the best software for a janitorial company?',
      answer:
        'Janitorial tools fit best. Swept starts at $150 a month for up to 15 locations, Otuvy (formerly CleanTelligent) at $150 a month billed annually and Janitorial Manager at $1,000 a month. None of the six big field service tools we cover has a janitorial page.',
    },
    {
      question: 'How much does commercial cleaning software cost?',
      answer:
        'Swept is from $150 or $225 a month for up to 15 locations with unlimited users. Otuvy QM Inspect is $150 and QM Pro $250 a month billed annually. Janitorial Manager starts at $1,000 a month. Jobber starts at $29 a month billed annually.',
    },
    {
      question: 'Which janitorial software has a GPS time clock?',
      answer:
        'Swept verifies by GPS that crews were on site on every plan. Janitorial Manager pairs its time clock with GPS and geofencing, and Otuvy’s Frontline add-on ($50 plus $7 per user a month) adds clock in and out.',
    },
    {
      question: 'Which janitorial software runs site inspections?',
      answer:
        'Swept includes inspections with photo proof on all plans, Janitorial Manager offers weighted inspection scoring with photos, and Otuvy runs unlimited inspections with client report access and automatic work orders for deficiencies.',
    },
    {
      question: 'Can janitorial software bid by square footage?',
      answer:
        'Janitorial Manager bids using ISSA 612 production rates. Swept offers a separate job costing calculator. We could not confirm square-footage bidding in the generalist tools.',
    },
    {
      question: 'Which janitorial software works with QuickBooks?',
      answer:
        'Janitorial Manager lists QuickBooks Online and Desktop. Swept sends approved hours to QuickBooks Online for payroll. Commusoft lists a QuickBooks integration, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-24',
  dataVerified: true,
  sources: [
    { name: 'Commusoft building maintenance software', url: 'https://www.commusoft.com/en-us/industries/building-maintenance-software/', checked: '2026-11-23' },
    { name: 'Commusoft facility maintenance software', url: 'https://www.commusoft.com/en-us/industries/facility-maintenance-software/', checked: '2026-11-23' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans, checklists, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Swept pricing', url: 'https://www.sweptworks.com/pricing', checked: '2026-11-23' },
    { name: 'Swept QuickBooks integration', url: 'https://sweptworks.com/quickbooks-integration', checked: '2026-11-23' },
    { name: 'Janitorial Manager pricing', url: 'https://www.janitorialmanager.com/pricing', checked: '2026-11-23' },
    { name: 'Janitorial Manager bidding', url: 'https://www.janitorialmanager.com/work-management-system/janitorial-bidding-software/', checked: '2026-11-23' },
    { name: 'Janitorial Manager inspections', url: 'https://www.janitorialmanager.com/work-management-system/janitorial-inspections-app/', checked: '2026-11-23' },
    { name: 'Janitorial Manager time tracking', url: 'https://www.janitorialmanager.com/work-management-system/janitorial-time-tracking/', checked: '2026-11-23' },
    { name: 'Janitorial Manager partners (QuickBooks)', url: 'https://www.janitorialmanager.com/partners/', checked: '2026-11-23' },
    { name: 'Otuvy pricing', url: 'https://www.otuvy.com/pricing', checked: '2026-11-23' },
    { name: 'Otuvy', url: 'https://www.otuvy.com/', checked: '2026-11-23' },
  ],
}
