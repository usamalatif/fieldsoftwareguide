import type { Industry } from '@/lib/industries'

/**
 * Plumbing — VERIFIED (researched 2026-07-08).
 * All six vendors have dedicated plumbing vertical pages (URLs in sources).
 * Flat-rate pricebooks verified: native for ServiceTitan / Housecall Pro / FieldPulse /
 * Workiz; Commusoft has a custom pricebook only; Jobber is the ONLY vendor without a
 * dedicated flat-rate pricebook (line items via Products & Services only).
 * Job photos + on-site invoicing/payment in the mobile app: confirmed for all six.
 * Housecall Pro's prebuilt flat-rate plumbing books come via Profit Rhino at $199/mo extra.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-24: Housecall Pro plans rechecked (Basic $59, Essentials $149 / 5 users, MAX $299 / 8 users).
 */
export const plumbing: Industry = {
  slug: 'plumbing',
  name: 'Plumbing',
  icon: '🔧',
  category: 'Trades',
  metaDescription:
    'Compare plumbing software for emergency dispatch, estimates, service scheduling and invoicing. See which tools fit small and growing teams.',
  datePublished: '2026-07-08',

  answer:
    'All six major FSM vendors market plumbing-specific products, so the choice comes down to flat-rate pricing support and company size. For most small-to-midsize plumbing shops, Housecall Pro (from $59/month billed annually; $79 month-to-month) is the top pick — native price book, plus prebuilt flat-rate plumbing books via its Profit Rhino partnership at $199/month extra. Larger residential and commercial operations run ServiceTitan (custom-quoted), which has the deepest native flat-rate pricebook plus a Pricebook Pro add-on with pre-built plumbing services. FieldPulse and Workiz both ship ready-made flat-rate catalogs (custom-quoted). Jobber (from $29/month billed annually; $49 month-to-month) is the cheapest published option but the only major vendor without a dedicated flat-rate pricebook. All six let techs capture job photos, invoice on site, and take payment in the field from the mobile app.',

  intro:
    'Plumbing runs on speed and price confidence: a tech standing in a flooded kitchen needs to quote a flat rate the customer trusts, get sign-off, do the work, and collect payment before leaving. The right FSM software has to make flat-rate pricing effortless, dispatch emergency calls to the nearest available tech, keep before/after photos attached to the job, and sync everything to accounting. Because most plumbing jobs are same-day, on-site invoicing and card/ACH payment in the mobile app matter more here than almost any other trade.',

  keyFeatures: [
    'Flat-rate pricebook (prebuilt or custom) with good/better/best options',
    'On-site invoicing and card / ACH payment from the mobile app',
    'Before/after job photos attached to the work order',
    'Emergency dispatch to the nearest available tech',
    'QuickBooks / accounting sync to avoid double entry',
    'Estimates with photos and customer sign-off in the field',
  ],

  priceRange: {
    min: 29,
    max: 299,
    note: 'Published plans run $29/mo (Jobber Core, annual billing; $49 month-to-month) to $299/mo (Housecall Pro MAX, annual billing; $329 month-to-month). ServiceTitan, Workiz, FieldPulse, and Commusoft are custom-quoted. Prebuilt flat-rate books (e.g. Profit Rhino for Housecall Pro) run ~$199/mo extra.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
    structured: true,
  },

  search: { monthlyVolume: null, kd: null, cpc: null },

  providers: [
    { slug: 'housecall-pro', positioning: 'Best overall for small-to-midsize plumbing shops — price book + Profit Rhino flat-rate books', monthlyFromUsd: 59 },
    { slug: 'servicetitan', positioning: 'Best for larger / commercial plumbing — native flat-rate pricebook + Pricebook Pro', monthlyFromUsd: null },
    { slug: 'fieldpulse', positioning: 'Flat-rate pricebook with good/better/best built in', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Price Book Pro ships ready-made flat-rate plumbing catalogs', monthlyFromUsd: null },
    { slug: 'jobber', positioning: 'Most affordable published plan (no dedicated flat-rate pricebook)', monthlyFromUsd: 29 },
    { slug: 'commusoft', positioning: 'Custom pricebook + strong recurring service contracts', monthlyFromUsd: null },
  ],

  bySize: [
    { size: 'Solo plumber', pick: 'Jobber Core ($29/mo)', why: 'Lowest published price. No dedicated flat-rate pricebook and no QuickBooks sync on Core.' },
    { size: 'Small shop, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Native price book, plus QuickBooks Online and Desktop sync from this plan. Prebuilt flat-rate plumbing books via Profit Rhino cost about $199/mo extra.' },
    { size: 'Growing shop, up to 8 users', pick: 'Housecall Pro MAX ($299/mo, up to 8 users)', why: 'Highest published plan in this comparison; extra users are $35/mo each.' },
    { size: 'Mid-size, multiple crews', pick: 'FieldPulse or Workiz (custom quote)', why: 'Both ship flat-rate pricebooks; Workiz Price Book Pro includes ready-made plumbing catalogs.' },
    { size: 'Large residential or commercial', pick: 'ServiceTitan (custom quote)', why: 'Deepest native flat-rate pricebook, plus the Pricebook Pro add-on with pre-built plumbing services.' },
  ],

  extraSections: [
    {
      id: 'plumbing-job-workflow',
      heading: 'From emergency call to payment: what to test in a plumbing demo',
      paragraphs: [
        'Run one realistic job through every tool on your shortlist: an emergency leak call comes in, you dispatch the nearest available tech, the tech presents flat-rate good/better/best options, gets the customer’s sign-off, attaches before-and-after photos, invoices on site, and takes a card payment before leaving. All six vendors compared here support on-site invoicing, field payments, and job photos in the mobile app, so the differences show up in pricing and accounting.',
        'Two steps separate the tools. First, flat-rate pricing: ServiceTitan, Housecall Pro, FieldPulse, and Workiz have real flat-rate pricebooks, Commusoft supports a custom pricebook, and Jobber handles flat rates as line items only. Second, accounting: neither Jobber Core nor Housecall Pro Basic includes QuickBooks sync, so check [which FSM tools work with QuickBooks](/quickbooks) before you pick a plan. Small shops deciding between the two published-price tools can read [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro) or our guide to [field service software for small business](/for-small-business).',
      ],
    },
  ],

  mistakes: [
    'Assuming every tool has a flat-rate pricebook. Jobber is the only major vendor here without a dedicated one; it handles flat rates as line items.',
    'Forgetting the cost of prebuilt flat-rate books. Profit Rhino’s plumbing books for Housecall Pro cost about $199/month on top of the plan.',
    'Buying an entry plan when you need QuickBooks. Sync is not included on Jobber Core or Housecall Pro Basic.',
    'Comparing an annual price with a month-to-month price. Housecall Pro Basic is $59/month billed annually but $79 month-to-month.',
  ],

  faqs: [
    {
      question: 'What field service software do plumbing companies use?',
      answer:
        'Small and midsize plumbing shops commonly evaluate Housecall Pro (from $59/month billed annually) and Jobber (from $29/month billed annually), while larger residential and commercial plumbing operations tend to evaluate ServiceTitan, which is custom-priced. All six major vendors market plumbing-specific products.',
    },
    {
      question: 'What is the best plumbing software for a small business?',
      answer:
        'For a solo plumber, Jobber Core ($29/month billed annually) is the cheapest published option but has no dedicated flat-rate pricebook. For a small shop that prices by flat rate or needs QuickBooks, Housecall Pro Essentials ($149/month billed annually for up to 5 users) includes a native price book and QuickBooks Online and Desktop sync.',
    },
    {
      question: 'Which plumbing software has flat-rate price books?',
      answer:
        'ServiceTitan (native + Pricebook Pro), Housecall Pro (native price book + Profit Rhino prebuilt books at $199/month extra), FieldPulse, and Workiz (Price Book Pro) all offer real flat-rate pricebooks. Commusoft supports a custom pricebook. Jobber is the only major FSM vendor without a dedicated flat-rate pricebook; it handles flat rates as line items only.',
    },
    {
      question: 'How much does plumbing field service software cost?',
      answer:
        'Published plans run from $29/month (Jobber Core, 1 user, billed annually; $49 month-to-month) to $299/month (Housecall Pro MAX, up to 8 users, billed annually; $329 month-to-month). ServiceTitan, Workiz, FieldPulse, and Commusoft are quote-based and scale with technicians.',
    },
    {
      question: 'Can plumbers invoice and take payment on site?',
      answer:
        'Yes. All six major vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) let technicians generate the invoice on site and take card or mobile payment in the field from the mobile app, with job photos attached to the work order.',
    },
    {
      question: 'Does plumbing FSM software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration, but not on every plan: Jobber needs Connect (QuickBooks Online only) and Housecall Pro needs Essentials (Online and Desktop). Confirm QuickBooks Online vs Desktop support for your setup.',
    },
  ],

  lastUpdated: '2026-10-24',
  dataVerified: true,
  sources: [
    { name: 'Jobber plumbing software', url: 'https://www.getjobber.com/industries/plumbing-software/', checked: '2026-07-08' },
    { name: 'Housecall Pro plumbing software', url: 'https://www.housecallpro.com/industries/plumbing-software/', checked: '2026-07-08' },
    { name: 'ServiceTitan plumbing software', url: 'https://www.servicetitan.com/industries/plumbing-software', checked: '2026-07-08' },
    { name: 'Workiz plumbing software', url: 'https://www.workiz.com/industries/plumbing/', checked: '2026-07-08' },
    { name: 'FieldPulse plumbing solution', url: 'https://www.fieldpulse.com/solutions/plumbing', checked: '2026-07-08' },
    { name: 'Commusoft plumbing software', url: 'https://www.commusoft.com/en-us/industries/plumbing/', checked: '2026-07-08' },
    { name: 'ServiceTitan flat-rate pricing (plumbing)', url: 'https://www.servicetitan.com/industries/plumbing-software/flat-rate', checked: '2026-07-08' },
    { name: 'Housecall Pro flat-rate pricing (plumbing)', url: 'https://www.housecallpro.com/industries/plumbing-software/flat-rate-pricing/', checked: '2026-07-08' },
    { name: 'FieldPulse flat-rate pricebook', url: 'https://www.fieldpulse.com/features/pricebook', checked: '2026-07-08' },
    { name: 'Workiz Price Book Pro', url: 'https://www.workiz.com/features/price-book-pro/', checked: '2026-07-08' },
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
    { name: 'Housecall Pro QuickBooks (Online + Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-07-08' },
  ],
}
