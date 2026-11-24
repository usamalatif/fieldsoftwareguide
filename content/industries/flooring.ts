import type { Industry } from '@/lib/industries'

/**
 * Flooring: VERIFIED (researched 2026-11-23, batch 9 draft).
 * None of the six FSM vendors has a flooring page: ServiceTitan, Workiz and FieldPulse /industries/flooring
 * 404; Commusoft not in its US list; Jobber and Housecall Pro not fetched. Flooring tools: Projul flooring
 * page: enter square footage and the calculator adds waste, field takeoffs, templates, order date and
 * delivery tracking (no inventory module confirmed), crew board, deposit plus final balance and milestone
 * billing, subfloor photos, QuickBooks sync; $199, $399, $599, $1,199 a month billed annually for 3, 10,
 * 20 or unlimited users (its flooring page's "no per-user fees" line not used). MeasureSquare 8 per user:
 * Retail $540 a year or $54 a month, Multi-family $1,640 or $164, Commercial $1,970 or $197; draws rooms,
 * lays out cuts on the roll and optimizes seams and waste; quotes, POs and work orders from diagrams;
 * exports to Roll Master, QFloors or Comp-U-Floor. MeasureSquare CRM per user per year $690, $990, $1,490:
 * installer schedules, progress billing, Stripe payments, photos, QuickBooks or Xero. RFMS Core (Cyncly):
 * flooring ERP with barcoded POs, roll-number picking, change orders, own accounting module, mobile
 * measuring; no prices. QFloors: core price not published; Installer View from $1,200 a year for up to 10
 * installers; resells MeasureSquare. FloorSight pages did not render.
 */
export const flooring: Industry = {
  slug: 'flooring',
  name: 'Flooring',
  icon: '🪵',
  category: 'Trades',
  metaDescription:
    'Compare flooring contractor software for room measuring, seam and waste layouts, estimates, roll inventory, installer schedules and QuickBooks. Verified.',
  datePublished: '2026-11-24',

  answer:
    'Flooring contractors live on accurate takeoffs, so room measuring, waste and seam layouts, material orders and installer schedules matter most. None of the six big field service tools we checked has a flooring page, so flooring companies usually use flooring-specific software. MeasureSquare 8 draws rooms and optimizes seams and waste, from $54 per user a month or $540 a year, and its CRM adds installer schedules, progress billing and QuickBooks or Xero sync from $690 per user a year. Projul has a flooring page that adds waste to square footage automatically, from $199 a month billed annually for 3 users. RFMS and QFloors are flooring ERP systems for retailers, with prices on request.',

  intro:
    'A flooring job starts with a measure: rooms, closets and stairs, then seams, cut layouts and a waste factor that depends on the product. That takeoff becomes a quote, a material order and an install date for a crew that may need one to three days. Flooring retailers also track rolls and cartons in the warehouse. The software has to turn the measure into a priced estimate, order and track material, schedule installers, collect a deposit and bill the balance or milestones.',

  keyFeatures: [
    'Room measuring and diagrams from the field',
    'Seam, cut and waste optimization',
    'Estimates, purchase orders and work orders from the takeoff',
    'Roll and carton inventory for retailers',
    'Installer scheduling for multi-day installs',
    'Deposits, progress billing and QuickBooks sync',
  ],

  priceRange: {
    min: 54,
    max: null,
    note: 'Flooring tools: MeasureSquare 8 $54, $164 or $197 per user a month ($540, $1,640 or $1,970 a year); MeasureSquare CRM $690, $990 or $1,490 per user a year; Projul $199, $399, $599 or $1,199 a month billed annually for 3, 10, 20 or unlimited users; QFloors Installer View from $1,200 a year for up to 10 installers. RFMS and QFloors core prices are not published. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no confirmed flooring page.',
    source: { name: 'MeasureSquare 8 pricing', url: 'https://measuresquare.com/pricing/measuresquare-8/', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 10,

  providers: [
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; no flooring page',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small flooring repair or install businesses that need quotes and invoices',
        strengths: [
          'Published plans from $29/month billed annually; quotes on every plan',
          'Automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'No flooring page confirmed',
          'No room measuring, waste calculation or roll inventory',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; general tool with no flooring page',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Owner-operator installers that want scheduling and payments at a known price',
        strengths: [
          'Online booking from Basic; QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'We could not check a flooring page',
          'No room measuring, waste calculation or roll inventory',
        ],
      },
    },
    {
      slug: 'workiz',
      positioning: 'Multi-day jobs and proposals on Ultimate; no flooring page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Install crews that need multi-day jobs in a general tool',
        strengths: [
          'Multi-day jobs and sales proposals on Ultimate',
          'QuickBooks Online sync on every plan',
        ],
        limitations: [
          'No flooring page (its flooring URL returns not found); every plan is “Request pricing”',
          'No room measuring or waste calculation',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Installer who measures and quotes', pick: 'MeasureSquare 8 Retail ($54/user/mo or $540/yr)', why: 'Draws rooms, lays out cuts on the roll and optimizes seams and waste, then creates quotes and POs.' },
    { size: 'Contractor that wants estimating plus job management', pick: 'Projul Starter ($199/mo billed annually, 3 users)', why: 'Flooring page with automatic waste, a crew board, deposit and milestone billing, photos and QuickBooks sync. QuickBooks Online is on Core+ and up.' },
    { size: 'Installer company that bills in progress', pick: 'MeasureSquare CRM ($690 to $1,490 per user a year)', why: 'Installer schedules, progress billing, Stripe payments and QuickBooks or Xero, built on MeasureSquare diagrams.' },
    { size: 'Flooring retailer with a warehouse', pick: 'RFMS Core or QFloors (custom quote)', why: 'Flooring ERP with barcoded purchase orders and roll-number picking (RFMS); QFloors adds Installer View from $1,200 a year.' },
    { size: 'Small repair business', pick: 'Jobber Core ($29/mo billed annually)', why: 'Quotes, scheduling and invoicing at a low price, without flooring measuring.' },
  ],

  extraSections: [
    {
      id: 'flooring-takeoff-install',
      heading: 'Takeoffs, waste and installer scheduling: what to test',
      paragraphs: [
        'Measure a real house. MeasureSquare draws rooms, lays out cuts on the roll and optimizes seam location, layout direction and waste ratio, then creates quotes, purchase orders and work orders from the diagram. Projul adds the waste factor automatically when you enter square footage. RFMS and QFloors offer mobile measuring as part of retailer systems. The generalist field service tools we checked do none of this, so most flooring companies start with a flooring tool.',
        'Then follow the job to the install. Projul shows crews and active jobs on one board and supports a deposit plus final balance or milestone billing, and MeasureSquare CRM tracks in-house and subcontracted installers and builds progress billing documents. Retailers should test roll-number inventory: RFMS picks by bin location and roll number. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Guessing waste. Use a tool that calculates waste and seam layouts for each product.',
    'Retyping the measure into a quote. Choose software that builds the quote from the diagram.',
    'Starting installs without a deposit. Bill a deposit at approval and the balance or milestones after.',
    'Buying general job software for a flooring store. Retailers need roll and carton inventory.',
  ],

  faqs: [
    {
      question: 'What is the best software for a flooring contractor?',
      answer:
        'Flooring tools fit best. MeasureSquare handles measuring and waste from $54 per user a month, Projul has a flooring page from $199 a month billed annually, and RFMS and QFloors serve flooring retailers. None of the six big field service tools we checked has a flooring page.',
    },
    {
      question: 'How much does flooring software cost?',
      answer:
        'MeasureSquare 8 costs $54, $164 or $197 per user a month, or $540 to $1,970 a year. MeasureSquare CRM is $690 to $1,490 per user a year. Projul is $199 to $1,199 a month billed annually. RFMS and QFloors do not publish core prices.',
    },
    {
      question: 'Which flooring software calculates waste?',
      answer:
        'MeasureSquare optimizes seam location, layout direction and waste ratio from room diagrams. Projul adds waste automatically when you enter square footage.',
    },
    {
      question: 'Which flooring software schedules installers?',
      answer:
        'MeasureSquare CRM tracks in-house and subcontracted installers and their schedules, Projul shows crews and jobs on one board, and QFloors sells Installer View from $1,200 a year for up to 10 installers.',
    },
    {
      question: 'Which flooring software tracks roll inventory?',
      answer:
        'RFMS Core receives material with barcoded purchase orders and picks by bin location and roll number. We could not confirm an inventory module for Projul or MeasureSquare.',
    },
    {
      question: 'Which flooring software works with QuickBooks?',
      answer:
        'MeasureSquare CRM connects order forms to QuickBooks or Xero, and Projul syncs invoices and payments with QuickBooks. RFMS has its own accounting module, and MeasureSquare 8 exports to Roll Master, QFloors or Comp-U-Floor.',
    },
  ],

  lastUpdated: '2026-11-24',
  dataVerified: true,
  sources: [
    { name: 'Projul flooring contractor software', url: 'https://projul.com/industries/flooring-contractor/', checked: '2026-11-23' },
    { name: 'Projul pricing', url: 'https://projul.com/pricing/', checked: '2026-11-23' },
    { name: 'MeasureSquare 8 pricing', url: 'https://measuresquare.com/pricing/measuresquare-8/', checked: '2026-11-23' },
    { name: 'MeasureSquare 8', url: 'https://measuresquare.com/product/measuresquare-8/', checked: '2026-11-23' },
    { name: 'MeasureSquare CRM', url: 'https://measuresquare.com/product/crm/', checked: '2026-11-23' },
    { name: 'RFMS Core capabilities (Cyncly)', url: 'https://www.cyncly.com/en/products/rfms-core/capabilities', checked: '2026-11-23' },
    { name: 'RFMS mobile apps (Cyncly)', url: 'https://www.cyncly.com/en/products/rfms-core/mobile-apps', checked: '2026-11-23' },
    { name: 'QFloors pricing', url: 'https://www.qfloors.com/pricing/', checked: '2026-11-23' },
    { name: 'QFloors Installer View', url: 'https://www.qfloors.com/installer-view/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Jobber pricing (plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  ],
}
