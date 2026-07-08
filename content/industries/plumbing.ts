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
 */
export const plumbing: Industry = {
  slug: 'plumbing',
  name: 'Plumbing',
  icon: '🔧',
  category: 'Trades',

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
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
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

  faqs: [
    {
      question: 'What FSM software do most plumbing companies use?',
      answer:
        'Small and midsize plumbing shops most often use Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually), while larger residential and commercial plumbing operations run ServiceTitan, which is custom-priced. All six major vendors market plumbing-specific products.',
    },
    {
      question: 'Which plumbing software has flat-rate price books?',
      answer:
        'ServiceTitan (native + Pricebook Pro), Housecall Pro (native price book + Profit Rhino prebuilt books at $199/month extra), FieldPulse, and Workiz (Price Book Pro) all offer real flat-rate pricebooks. Commusoft supports a custom pricebook. Jobber is the only major FSM vendor without a dedicated flat-rate pricebook — it handles flat rates as line items only.',
    },
    {
      question: 'How much does plumbing field service software cost?',
      answer:
        'Published plans run from $29/month (Jobber Core, 1 user, billed annually; $49 month-to-month) to $299/month (Housecall Pro MAX, up to 8 users, billed annually; $329 month-to-month). ServiceTitan, Workiz, FieldPulse, and Commusoft are quote-based and scale with technicians.',
    },
    {
      question: 'Can plumbers invoice and take payment on site?',
      answer:
        'Yes — all six major vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) let technicians generate the invoice on site and take card or mobile payment in the field from the mobile app, with job photos attached to the work order.',
    },
    {
      question: 'Does plumbing FSM software integrate with QuickBooks?',
      answer:
        'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all offer QuickBooks integration so invoices and payments sync to accounting without double entry. Confirm QuickBooks Online vs Desktop support for your setup.',
    },
  ],

  lastUpdated: '2026-07-08',
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
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
