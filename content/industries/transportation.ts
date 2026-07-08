import type { Industry } from '@/lib/industries'

/**
 * Transportation / fleet maintenance field service — DRAFT (dataVerified: false, noindex).
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse, Commusoft are custom/quote → null (never guessed).
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const transportation: Industry = {
  slug: 'transportation',
  name: 'Transportation',
  icon: '🚚',
  category: 'Field Services',

  answer:
    'The best field service management software for transportation and fleet maintenance depends on how mobile your repair work is. Mobile mechanics, fleet-service contractors, and roadside/on-site repair teams usually run FieldPulse or ServiceTitan for asset history per vehicle, dispatch to the truck, and recurring PM scheduling (both custom-quoted). Smaller mobile-mechanic and trailer-repair shops can start on Jobber (from $29/month) or Housecall Pro (from $59/month) for scheduling, work orders, and same-day invoicing. Workiz is a strong mid-market option with built-in dispatch and comms, also on custom pricing. Transportation teams specifically need per-vehicle service history by VIN/unit number, preventive-maintenance intervals by mileage or hours, GPS/route-aware dispatch, and parts and inventory tracking. Expect published plans roughly $29–$299/month, with enterprise fleet platforms higher once quoted.',

  intro:
    'Transportation and fleet maintenance is about keeping vehicles on the road, so downtime is the enemy. Whether you run mobile mechanics, a trailer-repair operation, or on-site fleet servicing, the right FSM software has to track service history per vehicle (by VIN or unit number), trigger preventive maintenance by mileage or engine hours, dispatch the nearest tech to a breakdown, and keep parts and inventory in check. Fast mobile work orders and same-day invoicing keep cash flowing while trucks keep moving.',

  keyFeatures: [
    'Per-vehicle service history by VIN or unit number',
    'Preventive-maintenance intervals triggered by mileage or engine hours',
    'GPS / route-aware dispatch to send the nearest tech to a breakdown',
    'Parts and inventory tracking tied to each work order',
    'Mobile work orders, photos, and DVIR-style inspection capture in the field',
    'Accounting sync and fast same-day invoicing to reduce downtime cost',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Fleet-maintenance platforms (ServiceTitan, FieldPulse, Workiz) are custom-quoted and scale with technicians and vehicles. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller mobile-mechanic and trailer-repair shops.',
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 3, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for mobile mechanics and fleet-service contractors', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large fleet-maintenance operations at scale', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Strong on dispatch + built-in phone/CRM for roadside teams', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small mobile-repair shops needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What software do mobile mechanics and fleet-repair teams use?',
      answer:
        'Mobile mechanics and fleet-service contractors often run FieldPulse or ServiceTitan (custom-quoted) for per-vehicle history and dispatch, while smaller shops use Housecall Pro (from $59/month) or Jobber (from $29/month).',
    },
    {
      question: 'Can it track preventive maintenance by mileage or engine hours?',
      answer:
        'Yes. FieldPulse and ServiceTitan let you set PM intervals by mileage or engine hours per vehicle, so units are automatically flagged for service before they are due, cutting unplanned breakdowns.',
    },
    {
      question: 'How much does fleet maintenance field service software cost?',
      answer:
        'Fleet platforms like ServiceTitan and FieldPulse are custom-quoted and scale with techs and vehicles. Published entry points are Jobber from $29/month and Housecall Pro from $59/month for smaller mobile-repair operations.',
    },
    {
      question: 'Does it help dispatch techs to roadside breakdowns?',
      answer:
        'Yes. Workiz and ServiceTitan offer GPS and route-aware dispatch so you can send the nearest available technician to a breakdown, then track the job and invoice from the field once repairs are done.',
    },
    {
      question: 'Can I track parts and inventory on each work order?',
      answer:
        'Yes. FieldPulse and ServiceTitan tie parts and inventory to individual work orders, so used stock is deducted automatically and reorder points stay accurate as your mobile techs consume parts.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
