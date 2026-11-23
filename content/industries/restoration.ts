import type { Industry } from '@/lib/industries'

/**
 * Restoration: VERIFIED (researched 2026-11-23, batch 8 draft).
 * Workiz /industries/restoration/: generic restoration page, "AI answers every call", QuickBooks; no
 * water, fire, mold, drying logs, equipment, Xactimate or job costing named (CompanyCam and JB Warranties
 * logos only). ServiceTitan (27-trade index; restoration URL 404), FieldPulse (404; job costing and
 * QuickBooks feature links on its homepage) and Commusoft have no restoration page; Jobber and Housecall
 * Pro not confirmed. Restoration tools: Encircle Field Documentation $285 a month (photos, video, 360,
 * drying logs, moisture maps, contents inventories), priced by jobs per year with unlimited users on a
 * 12-month contract; Scope to Estimate adds AI scope and one-click Xactimate export (its price sat next
 * to an expired promotion label, so not quoted); water mitigation page calculates air movers and
 * dehumidifiers to IICRC S500; no QuickBooks or dispatch named. DASH (Cotality): photo and video
 * documentation, budget tracking, QuickBooks Online sync named in a linked resource; no prices. Xcelerate:
 * mobile notes and photos; no prices (pricing URL 404). Albi pricing page is password-protected;
 * Restoration Manager (Verisk) page did not render. No vendor documents 24/7 emergency dispatch.
 */
export const restoration: Industry = {
  slug: 'restoration',
  name: 'Restoration',
  icon: '🌊',
  category: 'Specialized',
  metaDescription:
    'Compare restoration software for water, fire and mold jobs: drying logs, moisture maps, equipment, photos, Xactimate, job costing and QuickBooks. Verified.',
  datePublished: '2026-11-23',

  answer:
    'Restoration contractors get paid when the insurance carrier accepts the file, so drying logs, moisture maps, photos and an Xactimate estimate matter as much as dispatch. Among the big field service tools, only Workiz has a restoration page, and it covers call answering and QuickBooks but not drying logs or Xactimate (quote only). Restoration tools fill the gap. Encircle publishes prices: Field Documentation costs $285 a month with drying logs, moisture maps and contents inventories, priced by jobs per year with unlimited users, and a higher plan adds one-click Xactimate export. DASH, Xcelerate and Albi are quote only. No tool we checked documents 24/7 emergency dispatch.',

  intro:
    'A restoration company answers water, fire and mold losses at any hour, then has to prove every step to an insurance adjuster. The software has to record moisture readings and drying progress each day, track the air movers and dehumidifiers on site, capture time-stamped photos, build a scope in Xactimate and keep job costs in line with what the carrier will pay. Most restoration companies run a documentation tool alongside job management and accounting, so check what each tool covers and how they connect.',

  keyFeatures: [
    'Moisture readings, drying logs and moisture maps',
    'Air mover and dehumidifier counts and tracking',
    'Time-stamped photo and video documentation',
    'Xactimate scopes and insurance-ready files',
    'Job costing against the approved estimate',
    'Dispatch for emergency calls and QuickBooks sync',
  ],

  priceRange: {
    min: 285,
    max: null,
    note: 'Restoration documentation: Encircle Field Documentation $285 a month, priced by jobs per year with unlimited users on a 12-month contract; its Scope to Estimate plan costs more. DASH, Xcelerate and Albi are quote only. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed restoration page. Workiz, which has a restoration page, is quote only.',
    source: { name: 'Encircle pricing', url: 'https://www.getencircle.com/pricing', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 9,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Only big FSM tool we checked with a restoration page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Restoration companies that need call answering, dispatch and invoicing',
        strengths: [
          'Restoration page says AI answers every call',
          'QuickBooks integration; online booking and team location tracking on every plan',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Its restoration page names no drying logs, moisture readings, Xactimate or job costing',
        ],
      },
    },
    {
      slug: 'fieldpulse',
      positioning: 'Job costing and QuickBooks; no restoration page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Contractors that want job costing and dispatch alongside a documentation tool',
        strengths: [
          'Job costing feature and a QuickBooks integration',
        ],
        limitations: [
          'No restoration page; seat-based pricing is not published',
          'No drying logs, equipment tracking or Xactimate confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; general tool with no restoration page',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small mitigation crews that want a known monthly price for scheduling and invoicing',
        strengths: [
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'No restoration page or restoration help articles found',
          'No drying logs, equipment tracking or Xactimate confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Mitigation company that needs better documentation', pick: 'Encircle Field Documentation ($285/mo)', why: 'Photos, drying logs, moisture maps and contents inventories, with unlimited users on a 12-month contract.' },
    { size: 'Company that writes its own Xactimate estimates', pick: 'Encircle Scope to Estimate (higher plan)', why: 'Adds AI-generated scopes and one-click export to Xactimate. Ask for the current price; we saw it next to an expired promotion.' },
    { size: 'Restoration company that wants full job management', pick: 'DASH or Xcelerate (custom quote)', why: 'Restoration job management with photo documentation; DASH adds budget tracking and links to QuickBooks Online sync.' },
    { size: 'Company that wants call answering and dispatch', pick: 'Workiz (custom quote)', why: 'Restoration page with AI call answering and QuickBooks; pair it with a documentation tool for drying logs.' },
    { size: 'Contractor focused on job costing', pick: 'FieldPulse (custom quote)', why: 'Job costing and QuickBooks integration, with documentation handled in a separate tool.' },
  ],

  extraSections: [
    {
      id: 'restoration-drying-xactimate',
      heading: 'Drying logs, equipment and Xactimate: what to test',
      paragraphs: [
        'Run a real water loss through the trial. Encircle captures readings from a photo of the meter, builds moisture maps and calculates air mover and dehumidifier requirements based on the IICRC S500 standard, with time-stamped meter photos to back up the file. Check that daily readings and equipment counts end up in a report the adjuster will accept.',
        'Then check the estimate and the money. Encircle exports to Xactimate on its Scope to Estimate plan, DASH tracks budgets with live data, and FieldPulse offers job costing. None of the general field service tools we checked documents drying logs or Xactimate, and no tool documents 24/7 emergency dispatch, so ask how calls at 2 a.m. reach the on-call tech. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Using job software without drying logs. Carriers want daily readings and equipment counts.',
    'Taking photos without time stamps. Time-stamped meter photos are harder for adjusters to dispute.',
    'Retyping scopes into Xactimate. Choose a tool that exports directly.',
    'Assuming emergency dispatch is built in. No tool we checked documents 24/7 dispatch.',
  ],

  faqs: [
    {
      question: 'What is the best software for a restoration company?',
      answer:
        'Most restoration companies pair a documentation tool with job management. Encircle covers drying logs, moisture maps and Xactimate export from $285 a month. DASH and Xcelerate are restoration job management tools (quote only), and Workiz has a restoration page for call answering and dispatch.',
    },
    {
      question: 'How much does restoration software cost?',
      answer:
        'Encircle Field Documentation costs $285 a month, priced by jobs per year with unlimited users on a 12-month contract. DASH, Xcelerate and Albi do not publish prices. Housecall Pro starts at $59 a month billed annually but has no restoration page.',
    },
    {
      question: 'Which restoration software records drying logs and moisture maps?',
      answer:
        'Encircle documents water jobs with drying logs and moisture maps, captures readings from a meter photo and adds drying equipment to the map. None of the general field service tools we checked names drying logs.',
    },
    {
      question: 'Which restoration software integrates with Xactimate?',
      answer:
        'Encircle’s Scope to Estimate plan includes one-click export to Xactimate. We could not confirm Xactimate support on the restoration pages of the big field service tools.',
    },
    {
      question: 'Can restoration software calculate drying equipment?',
      answer:
        'Encircle calculates air mover and dehumidifier requirements based on the IICRC S500 standard. Xcelerate publishes an article on equipment tracking but does not describe the feature on its homepage.',
    },
    {
      question: 'Which restoration software works with QuickBooks?',
      answer:
        'Workiz says it fully integrates with QuickBooks, FieldPulse has a QuickBooks integration, and DASH links to two-way QuickBooks Online syncing. Encircle does not mention QuickBooks on its pricing or water mitigation pages.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz restoration software', url: 'https://www.workiz.com/industries/restoration/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'FieldPulse homepage (job costing, QuickBooks)', url: 'https://www.fieldpulse.com/', checked: '2026-11-23' },
    { name: 'ServiceTitan industries (no restoration)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-23' },
    { name: 'Commusoft industries (no restoration)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Encircle pricing', url: 'https://www.getencircle.com/pricing', checked: '2026-11-23' },
    { name: 'Encircle water mitigation', url: 'https://www.getencircle.com/solutions/water-mitigation/', checked: '2026-11-23' },
    { name: 'DASH (Cotality)', url: 'https://www.cotality.com/products/dash', checked: '2026-11-23' },
    { name: 'Xcelerate restoration software', url: 'https://www.xlrestorationsoftware.com/', checked: '2026-11-23' },
  ],
}
