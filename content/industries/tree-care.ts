import type { Industry } from '@/lib/industries'

/**
 * Tree care: VERIFIED (researched 2026-11-23, batch 7 draft). Landscaping has its own page.
 * Jobber: tree care is in its homepage industries list (page not fetched). Housecall Pro help center
 * lists "Tree service" among Google Local Services Ads industries. ServiceTitan (27-trade index, Landscape
 * page has no tree mention), Workiz (/industries/tree-service/ 404) and FieldPulse have no tree page;
 * Commusoft only has a UK tree surgeon customer story. Tree tools: ArboStar Starter $149 and Growing $249
 * a month (yearly rate; monthly billing costs more), 1 office licence + 1 crew login on Starter, extra
 * office licence $95 and crew login $20; tree inventory and QuickBooks sync (US plans) on Starter; map
 * with hazards and linked photos; equipment management on Enterprise. SingleOps (Granum) Essential $200,
 * Plus $350, Premier $500 a month billed annually ($220, $385, $550 monthly), crew users free; mapping
 * and options proposals on Plus, route optimization on Premier; tree profiles with species, health and
 * risk history; QuickBooks Online and Desktop listed (tier not stated). ArborNote Essential $240 and
 * Enterprise $350 a month with 1 user (+$130/+$150 per user), crew app $75 per crew leader; GPS tree
 * inventory, PHC module, crew and equipment scheduling, QuickBooks Online and Desktop; multi-year
 * maintenance plans on Enterprise. Arborgold: annual contract required, Starter listed at $129 or $149
 * a month (page does not label which is annual); tree inventory mapping on Enterprise. Multi-day jobs
 * not confirmed for any tree tool; ArboStar PHC and SingleOps tree inventory tier from snippets, not used.
 * Promotions (SingleOps, ArboStar struck-through prices) ignored.
 */
export const treeCare: Industry = {
  slug: 'tree-care',
  name: 'Tree Care',
  icon: '🌳',
  category: 'Field Services',
  metaDescription:
    'Compare tree care software for tree inventory maps, arborist estimates, plant health care, crew and equipment scheduling and QuickBooks. Verified prices.',
  datePublished: '2026-11-23',

  answer:
    'Tree services sell from the property map, so tree inventory, map-based estimates and crew and equipment scheduling matter most. Jobber lists tree care among its industries, from $29 a month billed annually, but none of the other big field service tools we checked has a tree page. Arborist tools publish prices. ArboStar costs $149 a month on a yearly plan with tree inventory and QuickBooks sync included. SingleOps costs $200 to $500 a month billed annually, with free crew users. ArborNote costs $240 or $350 a month for one user, with GPS tree inventory, a plant health care module and equipment scheduling. No tool we checked documents multi-day job scheduling on its own pages.',

  intro:
    'A tree company prices work tree by tree: removals, pruning, stump grinding and plant health care treatments, often on large properties with many trees. The software has to map each tree with species, size and condition, build an estimate from that map, schedule crews and expensive equipment such as bucket trucks and cranes, and bring clients back for recurring treatments. Arborists also need records of what was applied and when. If you also do lawn and landscape maintenance, see our landscaping page, since several tools serve both.',

  keyFeatures: [
    'Tree inventory with species, size and condition',
    'Estimates built on a property map with photos',
    'Plant health care programs and recurring treatments',
    'Crew and equipment scheduling',
    'Treatment and chemical records',
    'Invoicing, payments and QuickBooks sync',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Generalist FSM: Jobber from $29/mo (Core, 1 user) and Housecall Pro from $59/mo (Basic, 1 user), billed annually. Arborist tools: ArboStar $149 or $249 a month at the yearly rate; SingleOps $200, $350 or $500 a month billed annually; ArborNote $240 or $350 a month for 1 user; Arborgold from $129 or $149 a month on an annual contract.',
    source: { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 10,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published price; lists tree care among its industries',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small tree services that want quotes, scheduling and invoicing at a known price',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Route optimization, checklists, automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Its tree care page blocked our checks, so we list no tree-specific Jobber feature',
          'No tree inventory or equipment scheduling confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; Google Local Services Ads covers tree service',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Residential tree services that want online booking and Google leads',
        strengths: [
          'Its Google Local Services Ads integration lists tree service among supported industries',
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials; recurring plans on MAX',
        ],
        limitations: [
          'We could not check a Housecall Pro tree page, so no tree feature is listed',
          'No tree inventory or equipment scheduling confirmed',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Equipment tracking and multi-day jobs on Ultimate; no tree page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Tree crews that need multi-day jobs in a general tool',
        strengths: [
          'Multi-day jobs, equipment tracking and service plans on Ultimate',
          'Recurring jobs, team location tracking and QuickBooks Online sync on every plan',
        ],
        limitations: [
          'No tree page (its tree service URL returns not found); every plan is “Request pricing”',
          'No tree inventory or property map features',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner-operator climber', pick: 'Jobber Core ($29/mo billed annually)', why: 'Quotes, online booking and invoicing at a low price. No tree inventory.' },
    { size: 'Small tree service that wants tree mapping', pick: 'ArboStar Starter ($149/mo, yearly rate)', why: 'Tree inventory, map-based site plans with photos, an offline crew app and QuickBooks sync, with 1 office licence and 1 crew login.' },
    { size: 'Company with several crews', pick: 'SingleOps Plus ($350/mo billed annually)', why: 'Crew users are free; Plus adds job site mapping, map-based scheduling and options-based proposals.' },
    { size: 'Arborist firm with plant health care', pick: 'ArborNote Essential ($240/mo, 1 user)', why: 'GPS tree inventories, a PHC module, crew and equipment scheduling and QuickBooks Online and Desktop.' },
    { size: 'Tree and landscape company with an annual budget', pick: 'Arborgold (from $129 or $149/mo, annual contract)', why: 'Route optimization and crew time tracking from Starter; plant and tree inventory mapping on Enterprise.' },
  ],

  extraSections: [
    {
      id: 'tree-inventory-equipment',
      heading: 'Tree maps, plant health care and equipment: what to test',
      paragraphs: [
        'Build an estimate on a real property. ArboStar annotates each tree and hazard on an interactive map with notes and photos, SingleOps stores species, health and risk history for each tree, and ArborNote creates proposals with GPS maps, photos and optional services. The general field service tools we checked do not map trees, so if you sell from tree inventories, start with an arborist tool.',
        'Then check plant health care and equipment. ArborNote has a PHC module for proposals, equipment scheduling and billing, and multi-year maintenance plans on Enterprise. Arborgold adds chemical tracking on Professional. ArboStar includes fleet and equipment management on Enterprise. No tool we checked documents multi-day job scheduling on its own pages, so test a two-day removal in the demo. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Estimating from memory. Map each tree with photos so crews know exactly which trees to work on.',
    'Double-booking the bucket truck. Choose a tool that schedules equipment as well as crews.',
    'Losing plant health care revenue. Set up recurring treatment programs so clients come back each season.',
    'Missing annual contracts. Arborgold requires a 12-month minimum with 60 days’ notice to cancel.',
  ],

  faqs: [
    {
      question: 'What is the best software for a tree care business?',
      answer:
        'For tree inventories and map-based estimates, ArboStar ($149 a month at the yearly rate), SingleOps ($200 a month billed annually) and ArborNote ($240 a month) are built for tree work. Jobber lists tree care among its industries from $29 a month billed annually.',
    },
    {
      question: 'How much does tree service software cost?',
      answer:
        'ArboStar is $149 or $249 a month at the yearly rate. SingleOps is $200, $350 or $500 a month billed annually, with free crew users. ArborNote is $240 or $350 a month for one user. Jobber starts at $29 a month billed annually.',
    },
    {
      question: 'Which tree software maps trees on a property?',
      answer:
        'ArboStar annotates trees and hazards on an interactive map, SingleOps stores tree profiles with species, health and risk history, and ArborNote offers unlimited GPS mapping and inventories. Arborgold includes tree inventory mapping on Enterprise.',
    },
    {
      question: 'Which tree software handles plant health care?',
      answer:
        'ArborNote’s PHC module supports proposals, equipment scheduling and billing for plant health care, and Enterprise adds multi-year maintenance plans. SingleOps markets to plant health care and arborist operations, and Arborgold adds chemical tracking on Professional.',
    },
    {
      question: 'Can tree software schedule equipment like bucket trucks?',
      answer:
        'ArborNote schedules equipment to prevent double-booking, ArboStar includes fleet and equipment management on Enterprise, and Arborgold tracks equipment maintenance on Enterprise. Workiz tracks equipment on Ultimate.',
    },
    {
      question: 'Which tree care software works with QuickBooks?',
      answer:
        'ArboStar includes QuickBooks sync on US plans, ArborNote syncs with QuickBooks Online and Desktop, and SingleOps lists QuickBooks Online and Desktop. Jobber offers QuickBooks Online from Connect, and Housecall Pro lists Online and Desktop on Essentials.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing (plans, quotes, routes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Jobber homepage (industries list includes tree care)', url: 'https://www.getjobber.com/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Housecall Pro help: Google Local Services Ads integration (industries incl. tree service)', url: 'https://help.housecallpro.com/en/articles/4005026-job-inbox-integration-with-google-local-service-ads', checked: '2026-11-23' },
    { name: 'Workiz industries (no tree service)', url: 'https://www.workiz.com/industries/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'ServiceTitan industries (no tree care)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-23' },
    { name: 'ArboStar pricing', url: 'https://www.arbostar.com/pricing', checked: '2026-11-23' },
    { name: 'ArboStar arborist software', url: 'https://arbostar.com/arborist-software', checked: '2026-11-23' },
    { name: 'SingleOps pricing (Granum)', url: 'https://granum.com/singleops/pricing/', checked: '2026-11-23' },
    { name: 'Granum tree care and PHC', url: 'https://granum.com/who-we-serve/tree-care-phc/', checked: '2026-11-23' },
    { name: 'ArborNote pricing', url: 'https://www.arbornote.com/pricing', checked: '2026-11-23' },
    { name: 'ArborNote product', url: 'https://www.arbornote.com/product/', checked: '2026-11-23' },
    { name: 'Arborgold pricing', url: 'https://www.arborgold.com/pricing', checked: '2026-11-23' },
  ],
}
