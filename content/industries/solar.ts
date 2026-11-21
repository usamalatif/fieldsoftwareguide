import type { Industry } from '@/lib/industries'

/**
 * Solar: VERIFIED (researched 2026-11-21, batch 5 draft).
 * None of the six FSM vendors has a solar page: ServiceTitan (/industries/solar-software and /solar
 * 404, not in its 27-trade index), Workiz (/industries/solar/ 404, not in its 23-industry index),
 * FieldPulse (/industries/solar 404), Housecall Pro help center search "solar" returns no articles,
 * Jobber's homepage list has no solar. Commusoft's Renewable Energy page names "solar panel
 * installation software tools", tracking "from initial site survey to final commissioning",
 * multi-stage projects and invoices, financing in quotes, customer equipment records, maintenance
 * plans and Fleet+ vehicle tracking; no prices; it references the UK MCS scheme, so it may be written
 * for UK installers. Solar design and sales tools: Aurora Solar Basic $159 per user a month ($135
 * billed annually) and Premium $259 ($220 annually), 50 projects a month, Enterprise custom; OpenSolar
 * free, paid for by partners, with workflow stages and project events for site visits, installs and
 * maintenance; Enerflo no published prices, install tracker to Permission to Operate, financing via
 * Lendflo. None of the three names dispatch, GPS, serial numbers or QuickBooks. Permitting claims are
 * kept to what each page says (Aurora plan sets as add-ons; OpenSolar permitting page not fetched).
 */
export const solar: Industry = {
  slug: 'solar',
  name: 'Solar',
  icon: '☀️',
  category: 'Specialized',
  metaDescription:
    'Compare solar installer software for proposals, install tracking, maintenance, dispatch and QuickBooks, and why no big FSM tool has a solar page. Verified.',
  datePublished: '2026-11-21',

  answer:
    'No major field service tool we checked has a solar page: ServiceTitan, Workiz, FieldPulse, Housecall Pro and Jobber do not market to solar installers. Commusoft comes closest, with a renewable energy page for solar panel installation that tracks jobs from site survey to commissioning and covers maintenance plans (quote only, and written partly for UK installers). Most solar companies pair a design and sales tool with job software. Aurora Solar costs $159 or $259 per user a month ($135 or $220 billed annually), OpenSolar is free because partners pay for it, and Enerflo is quote only. None of these three names dispatch, GPS or QuickBooks, so plan for a separate tool to run install crews and service visits.',

  intro:
    'A solar company sells a designed system, gets it permitted, installs it over one or more days and then services it for years. The sales side needs roof design, proposals and financing; the field side needs install scheduling, crew dispatch, records of the panels and inverters installed, maintenance visits and invoicing. Solar design tools rarely do the field work, and field service tools rarely design systems, so check where one tool hands off to the other. If you mostly service existing systems, the field service side matters more than design.',

  keyFeatures: [
    'Site surveys and proposals with financing options',
    'Multi-stage install tracking from survey to commissioning',
    'Multi-day installs and crew scheduling',
    'Records of installed panels, inverters and other equipment',
    'Maintenance plans and recurring service visits',
    'Dispatch, vehicle tracking and QuickBooks sync',
  ],

  priceRange: {
    min: 59,
    max: null,
    note: 'Field service: Housecall Pro from $59/mo (Basic, 1 user) billed annually, with customer equipment tracking from Essentials ($149); Commusoft, Workiz and ServiceTitan are quote only. Solar design and sales: Aurora Solar $159 or $259 per user a month ($135 or $220 billed annually, 50 projects a month); OpenSolar free; Enerflo quote only.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'commusoft',
      positioning: 'Renewable energy page that names solar panel installation',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Installers that want one tool from site survey to commissioning and maintenance',
        strengths: [
          'Tracks progress from initial site survey to final commissioning, with multi-stage job invoices',
          'Quotes can include financing options; maintenance plans for recurring revenue',
          'Customer equipment records, skill-based dispatch and Fleet+ vehicle tracking',
        ],
        limitations: [
          'No published price; per-user licences on contract, monthly or daily terms',
          'Its renewable page references the UK MCS scheme and does not mention US permitting',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; equipment tracking and multi-day jobs for service work',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small solar service and maintenance companies that want a known monthly price',
        strengths: [
          'Customer equipment tracking, employee GPS and QuickBooks Online and Desktop on Essentials',
          'Recurring Service Plans and route optimization on MAX',
        ],
        limitations: [
          'No solar page and no solar articles in its help center',
          'No roof design or solar proposal tools; pair it with a design tool',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Equipment tracking and multi-day jobs on Ultimate',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Installers that need multi-day jobs and service plans in a general tool',
        strengths: [
          'Multi-day jobs, equipment tracking, service plans and sales proposals on Ultimate',
          'Team location and fleet tracking and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'No solar page (its solar URL returns not found); every plan is “Request pricing”',
          'No system design or financing tools',
        ],
      },
    },
  ],

  bySize: [
    { size: 'New installer selling a few systems a month', pick: 'OpenSolar (free)', why: 'Design, proposals, financing and project stages at no cost, because partners pay for the platform. Add job software for crews and invoicing.' },
    { size: 'Sales team that designs and proposes systems', pick: 'Aurora Solar Basic ($159/user/mo, or $135 billed annually)', why: 'Roof design, performance simulation and proposals, capped at 50 projects a month. It is not field service software.' },
    { size: 'Solar service and maintenance company', pick: 'Housecall Pro Essentials ($149/mo billed annually)', why: 'Published price with customer equipment tracking, employee GPS and QuickBooks; recurring plans on MAX.' },
    { size: 'Installer that wants survey to commissioning in one tool', pick: 'Commusoft (custom quote)', why: 'Its renewable energy page covers solar installs, multi-stage jobs, maintenance plans and vehicle tracking. Confirm US permitting needs in the demo.' },
    { size: 'Residential solar company with a sales and install pipeline', pick: 'Enerflo (custom quote)', why: 'Proposals, financing and an install tracker through Permission to Operate. Pair it with field service software for service visits.' },
  ],

  extraSections: [
    {
      id: 'solar-design-vs-field',
      heading: 'Design tools vs field service tools: how solar companies split the work',
      paragraphs: [
        'Solar software splits into two groups. Aurora Solar, OpenSolar and Enerflo design systems, build proposals and offer financing, and OpenSolar and Enerflo track project stages, but none of their pages names dispatch, GPS, a technician app or QuickBooks. Field service tools schedule crews, record equipment and bill service visits, but none of the six we cover has a solar page. Commusoft is the only one that names solar panel installation.',
        'Before you buy, map every step from sale to service. Decide which tool owns the survey, the permit, the install schedule, the equipment list and the maintenance plan, and check how data moves between them. Aurora caps Basic and Premium at 50 projects a month, and OpenSolar is free, so the field service tool is often the bigger monthly cost. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Expecting a design tool to run install crews. Aurora, OpenSolar and Enerflo do not name dispatch or GPS.',
    'Expecting a field service tool to design systems. None of the six we cover has solar design or a solar page.',
    'Skipping equipment records. Panels and inverters need a record per site for warranty and service calls.',
    'Forgetting the project cap. Aurora Basic and Premium include 50 projects a month.',
  ],

  faqs: [
    {
      question: 'What is the best software for a solar company?',
      answer:
        'Most solar companies pair a design tool with field service software. Aurora Solar ($159 or $259 per user a month) and OpenSolar (free) handle design and proposals. For the field side, Commusoft has a renewable energy page that covers solar installs, and Housecall Pro starts at $59 a month billed annually.',
    },
    {
      question: 'Does ServiceTitan, Jobber or Housecall Pro have solar software?',
      answer:
        'No solar page at any of them that we could find. ServiceTitan’s and Workiz’s solar URLs return not found and their industry lists have no solar, Jobber’s industry list has no solar, and Housecall Pro’s help center has no solar articles.',
    },
    {
      question: 'How much does solar software cost?',
      answer:
        'Aurora Solar Basic is $159 per user a month ($135 billed annually) and Premium is $259 ($220), with 50 projects a month. OpenSolar is free. Housecall Pro starts at $59 a month billed annually. Enerflo, Commusoft, Workiz and ServiceTitan are quote only.',
    },
    {
      question: 'Is OpenSolar really free?',
      answer:
        'OpenSolar says its software is free for solar professionals because product manufacturers, finance companies and distributors pay to be part of the platform. It lists no paid tiers.',
    },
    {
      question: 'Which solar software tracks installs from survey to commissioning?',
      answer:
        'Commusoft’s renewable energy page says it tracks progress from initial site survey to final commissioning. Enerflo has an install tracker with real-time status through Permission to Operate, and OpenSolar moves projects through workflow stages.',
    },
    {
      question: 'Which solar software works with QuickBooks?',
      answer:
        'None of the solar design tools we checked names QuickBooks. Housecall Pro lists QuickBooks Online and Desktop on Essentials, Workiz syncs with QuickBooks Online on every plan, and Commusoft links to a QuickBooks integration page.',
    },
  ],

  lastUpdated: '2026-11-21',
  dataVerified: true,
  sources: [
    { name: 'Commusoft renewable energy software', url: 'https://www.commusoft.com/en-us/industries/renewable-energy-software/', checked: '2026-11-21' },
    { name: 'Commusoft industries', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'ServiceTitan industries (no solar)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-21' },
    { name: 'Workiz industries (no solar)', url: 'https://www.workiz.com/industries/', checked: '2026-11-21' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse homepage industries (no solar)', url: 'https://www.fieldpulse.com/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help center (no solar articles)', url: 'https://help.housecallpro.com/en/', checked: '2026-11-21' },
    { name: 'Aurora Solar pricing', url: 'https://aurorasolar.com/pricing/', checked: '2026-11-21' },
    { name: 'OpenSolar', url: 'https://www.opensolar.com/', checked: '2026-11-21' },
    { name: 'OpenSolar: why it is free', url: 'https://www.opensolar.com/free/', checked: '2026-11-21' },
    { name: 'OpenSolar project management CRM', url: 'https://www.opensolar.com/project-management-crm/', checked: '2026-11-21' },
    { name: 'Enerflo', url: 'https://enerflo.com/', checked: '2026-11-21' },
  ],
}
