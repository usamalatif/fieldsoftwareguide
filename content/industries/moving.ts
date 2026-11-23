import type { Industry } from '@/lib/industries'

/**
 * Moving: VERIFIED (researched 2026-11-23, batch 7 draft).
 * Workiz /industries/moving/: moving and storage leads, estimates in minutes, crew assignment by previous
 * and upcoming job, payment requests from office or field, QuickBooks; no inventory, cubic feet, hourly
 * billing or storage billing named. ServiceTitan and FieldPulse moving URLs 404; moving not in Jobber's
 * or Commusoft's industry lists; Housecall Pro help center has no moving collection. Moving CRMs:
 * SmartMoving (no prices; Smart Growth 3 office users, Smart Pro 10; 12, 24 or 36 month terms; binding,
 * non-binding and binding-not-to-exceed estimates; crews, trucks and equipment across branches; storage
 * billing; QuickBooks Online on Growth, "Coming soon" label on Pro so not claimed per plan). MoveitPro
 * per company: $449, $404 or $365 a month billed monthly on 12, 24 or 36 month agreements ($382, $343,
 * $310 prepaid), includes 2 office users and 1 branch; storage, dispatch, QuickBooks integration. Add-on
 * user thresholds mixed with Black Friday terms, so not used. Elromco Professional $289 (3 office users)
 * and Enterprise $399 (unlimited office users) a month, unlimited crew; cubic feet, hourly, flat-rate and
 * long-distance quotes; online booking with deposit; truck board; crew time clock; storage billing;
 * QuickBooks Online. Supermove: no prices (/pricing 404). Promotions ignored.
 */
export const moving: Industry = {
  slug: 'moving',
  name: 'Moving',
  icon: '📦',
  category: 'Field Services',
  metaDescription:
    'Compare moving company software for inventory and cubic foot estimates, binding quotes, crews and trucks, storage, time clocks and QuickBooks. Verified.',
  datePublished: '2026-11-23',

  answer:
    'Movers need estimates built from inventory or cubic feet, scheduling for crews and trucks, hourly time tracking and often storage billing, which general field service tools rarely cover. Workiz is the only big field service tool we checked with a moving page (quote only), and it does not name inventory estimates or storage. Moving CRMs do. Elromco publishes prices of $289 or $399 a month, with cubic foot, hourly and long-distance quotes, a crew time clock and storage billing. MoveitPro costs $365 to $449 a month on 12 to 36 month agreements. SmartMoving, the only one that confirms binding and non-binding estimates, is quote only.',

  intro:
    'A moving company quotes from an inventory of rooms and items, turns that into cubic feet, hours or weight, then books a crew and the right trucks for the day. Local moves usually bill by the hour, long-distance moves follow tariffs and delivery windows, and many movers rent storage too. The software has to handle leads from many sources, take a deposit, clock crew hours and post closed jobs to accounting. Most moving CRMs run on 12 to 36 month terms, so read the contract length before you sign.',

  keyFeatures: [
    'Estimates from inventory, cubic feet, hours or weight',
    'Binding and non-binding estimates and tariffs',
    'Lead capture and online booking with deposits',
    'Crew and truck scheduling on one board',
    'Crew time clock for hourly moves',
    'Storage billing, payments and QuickBooks sync',
  ],

  priceRange: {
    min: 289,
    max: null,
    note: 'Moving CRMs: Elromco $289 a month (3 office users) or $399 (unlimited office users), billed monthly; MoveitPro $449, $404 or $365 a month billed monthly on 12, 24 or 36 month agreements, including 2 office users and 1 branch; SmartMoving and Supermove are quote only. Generalist FSM: Jobber from $29/mo and Housecall Pro from $59/mo, billed annually, with no moving page. Workiz, which has a moving page, is quote only.',
    source: { name: 'Elromco pricing', url: 'https://www.elromco.com/pricing', checked: '2026-11-23' },
    structured: false,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  reviewedCount: 10,

  providers: [
    {
      slug: 'workiz',
      positioning: 'Only big FSM tool we checked with a moving page',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Small movers that also do other services and want one field service tool',
        strengths: [
          'Moving and storage lead handling and estimates in minutes',
          'Crew assignment by previous and upcoming jobs; team location tracking on every plan',
          'Payment requests from office or field; QuickBooks integration',
        ],
        limitations: [
          'Every plan is “Request pricing”',
          'Its moving page names no inventory or cubic foot estimates, hourly billing or storage billing',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published generalist price; no moving page',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Very small moving or junk-and-moving operators that need quotes and invoices',
        strengths: [
          'Published plans from $29/month billed annually; quotes and online booking on every plan',
          'Automatic payments and QuickBooks Online from Connect',
        ],
        limitations: [
          'Moving is not in its industry list',
          'No inventory estimates, truck scheduling or storage billing confirmed',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published price; no moving page',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Owner-operators with one truck that want online booking at a known price',
        strengths: [
          'Online booking from Basic; employee GPS and QuickBooks Online and Desktop on Essentials',
        ],
        limitations: [
          'No moving page or moving help articles found',
          'No inventory estimates, truck scheduling or storage billing confirmed',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Owner-operator with one truck', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo), billed annually', why: 'Quotes, online booking and invoicing at a low price, but no inventory estimates or storage billing.' },
    { size: 'Local mover with a small office', pick: 'Elromco Professional ($289/mo, 3 office users)', why: 'Cubic foot and hourly quotes, online booking with a deposit, a truck board, crew time clock and QuickBooks Online, with unlimited crew.' },
    { size: 'Mover with storage and a bigger office', pick: 'Elromco Enterprise ($399/mo, unlimited office users)', why: 'Adds unlimited office users; storage units, tenants and recurring storage bills are on both plans.' },
    { size: 'Mover that wants a fixed multi-year price', pick: 'MoveitPro ($365 to $449/mo by term)', why: 'Priced per company with 2 office users and 1 branch included, plus storage management, dispatch and QuickBooks.' },
    { size: 'Multi-branch or interstate mover', pick: 'SmartMoving (custom quote)', why: 'Binding, non-binding and binding-not-to-exceed estimates, state tariffs, crews and trucks across branches and storage billing.' },
  ],

  extraSections: [
    {
      id: 'moving-estimates-contracts',
      heading: 'Estimates, trucks and contracts: what to check before you sign',
      paragraphs: [
        'Start with estimates. SmartMoving creates binding, non-binding and binding-not-to-exceed estimates from a detailed inventory, with crew and truck needs set by weight or volume. Elromco quotes by cubic feet, hourly, flat rate or long distance, and can build an inventory from customer photos. MoveitPro estimates account for trucks, crew, hours and materials. Workiz offers quick estimates but does not mention inventory. Ask each vendor how it handles your state’s tariff rules.',
        'Then read the contract. MoveitPro and SmartMoving sell 12, 24 and 36 month terms, and MoveitPro’s monthly price drops from $449 to $365 on the longest term. Elromco bills monthly. Count office users too: Elromco Professional includes 3 and MoveitPro includes 2, while crew access is unlimited on Elromco. Compare published plans in our [field service software pricing](/pricing) guide.',
      ],
    },
  ],

  mistakes: [
    'Using general job software for interstate moves. Only SmartMoving confirms binding and non-binding estimates.',
    'Estimating by guesswork. Build quotes from an inventory so crew size and truck count match the job.',
    'Locking into a long contract without a trial run. MoveitPro and SmartMoving sell 12 to 36 month terms.',
    'Billing storage by hand. Elromco, SmartMoving and MoveitPro all include storage management.',
  ],

  faqs: [
    {
      question: 'What is the best software for a moving company?',
      answer:
        'Moving CRMs fit best. Elromco costs $289 or $399 a month, MoveitPro $365 to $449 a month by term, and SmartMoving is quote only. Workiz is the only big field service tool we checked with a moving page, but it does not mention inventory estimates.',
    },
    {
      question: 'How much does moving company software cost?',
      answer:
        'Elromco is $289 a month for 3 office users or $399 for unlimited office users. MoveitPro is $449, $404 or $365 a month on 12, 24 or 36 month agreements, or $382, $343 or $310 prepaid. SmartMoving and Supermove do not publish prices.',
    },
    {
      question: 'Which moving software creates binding estimates?',
      answer:
        'SmartMoving says it creates binding, non-binding and binding-not-to-exceed estimates and supports state tariff groups. We could not confirm binding estimates for MoveitPro, Elromco or Supermove on their own pages.',
    },
    {
      question: 'Can moving software estimate by cubic feet?',
      answer:
        'Elromco quotes long-distance moves by tariffs, cubic feet, pounds and delivery windows, and SmartMoving sets crew and truck needs by weight or volume. Workiz’s moving page does not mention cubic feet.',
    },
    {
      question: 'Which moving software handles storage billing?',
      answer:
        'Elromco covers storage units, tenants and recurring storage bills on both plans. SmartMoving offers multi-warehouse management and automated storage billing, and MoveitPro lists storage management on every plan.',
    },
    {
      question: 'Which moving software works with QuickBooks?',
      answer:
        'Elromco posts every closed job to QuickBooks Online, and MoveitPro lists a QuickBooks integration. SmartMoving lists QuickBooks Online on its Smart Growth plan. Workiz says it fully integrates with QuickBooks.',
    },
  ],

  lastUpdated: '2026-11-23',
  dataVerified: true,
  sources: [
    { name: 'Workiz moving software', url: 'https://www.workiz.com/industries/moving/', checked: '2026-11-23' },
    { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
    { name: 'Jobber pricing (plans, quotes, QuickBooks)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
    { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
    { name: 'Commusoft industries (no moving)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-21' },
    { name: 'SmartMoving pricing', url: 'https://www.smartmoving.com/pricing', checked: '2026-11-23' },
    { name: 'SmartMoving estimates', url: 'https://www.smartmoving.com/smart-estimates', checked: '2026-11-23' },
    { name: 'MoveitPro', url: 'https://www.moveitpro.com/', checked: '2026-11-23' },
    { name: 'MoveitPro pricing', url: 'https://www.moveitpro.com/pricing', checked: '2026-11-23' },
    { name: 'Elromco pricing', url: 'https://www.elromco.com/pricing', checked: '2026-11-23' },
    { name: 'Supermove', url: 'https://www.supermove.com/', checked: '2026-11-23' },
  ],
}
