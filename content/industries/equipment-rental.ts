import type { Industry } from '@/lib/industries'

/**
 * Equipment Rental (rental asset service & delivery) — DRAFT (dataVerified: false, noindex).
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse, Commusoft are custom/quote → null (never guessed).
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const equipmentRental: Industry = {
  slug: 'equipment-rental',
  name: 'Equipment Rental',
  icon: '🏗️',
  category: 'Specialized',

  answer:
    'The best field service management software for equipment rental depends on how much delivery, service, and asset tracking you run alongside the rental itself. Rental operators servicing and delivering generators, lifts, compressors, and heavy equipment usually run FieldPulse or ServiceTitan for per-asset history, delivery/pickup dispatch, and recurring maintenance (both custom-quoted). Smaller rental-and-repair shops can start on Jobber (from $29/month) or Housecall Pro (from $59/month) for scheduling, work orders, and invoicing. Workiz is a solid mid-market option, also custom-priced. Rental teams specifically need per-unit asset tracking with utilization and maintenance history, delivery and pickup scheduling, damage/condition inspection at check-in and check-out, and meter/hours-based service triggers. Expect published plans roughly $29–$299/month, with enterprise platforms higher once quoted. Note: dedicated rental-inventory/contract software may be needed alongside FSM for billing.',

  intro:
    'Equipment rental blends asset management with field service: every generator, lift, or compressor is a revenue-earning unit that has to be delivered, maintained, inspected on return, and turned around fast. The right FSM software has to track each unit’s service and utilization history, schedule deliveries and pickups with routing, capture condition/damage inspections at check-out and check-in, and trigger maintenance by engine hours or meter readings. Because rental billing and contract management often live in dedicated rental software, the FSM piece is usually chosen for its asset service, dispatch, and inspection strength — and paired with a rental-inventory system for contracts.',

  keyFeatures: [
    'Per-unit asset tracking with utilization and maintenance history',
    'Delivery and pickup scheduling with route optimization',
    'Condition / damage inspection at check-out and check-in with photos',
    'Meter- or engine-hours-based maintenance triggers per asset',
    'Mobile app for drivers and techs to log deliveries, parts, and signatures',
    'Accounting sync (pairs with dedicated rental-contract software for billing)',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Rental-service platforms (ServiceTitan, FieldPulse, Workiz) are custom-quoted and scale with fleet size and technicians. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller rental-and-repair shops. Rental-contract billing often needs dedicated software alongside FSM.',
    structured: false,
  },

  search: { monthlyVolume: 50, kd: 5, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for rental asset service and delivery', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large rental fleets needing enterprise dispatch', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Strong on dispatch + built-in comms for delivery teams', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small rental-and-repair shops needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do equipment rental companies use?',
      answer:
        'Rental operators often run FieldPulse or ServiceTitan (custom-quoted) for per-asset service history and delivery dispatch, while smaller rental-and-repair shops use Housecall Pro (from $59/month) or Jobber (from $29/month).',
    },
    {
      question: 'Can it track maintenance by engine hours or meter readings?',
      answer:
        'Yes. FieldPulse and ServiceTitan let you trigger maintenance per asset by engine hours or meter readings, so generators, lifts, and compressors are serviced on schedule and stay rental-ready.',
    },
    {
      question: 'Does FSM software replace rental-inventory software?',
      answer:
        'Not fully. FSM tools like FieldPulse and ServiceTitan excel at asset service, dispatch, and inspections, but rental contract billing and availability usually need dedicated rental-inventory software alongside the FSM system.',
    },
    {
      question: 'How much does equipment rental field service software cost?',
      answer:
        'Rental-service platforms like ServiceTitan and FieldPulse are custom-quoted and scale with fleet size. Published entry points are Jobber from $29/month and Housecall Pro from $59/month for smaller rental-and-repair shops.',
    },
    {
      question: 'Can it capture damage inspections at check-out and return?',
      answer:
        'Yes. FieldPulse and ServiceTitan support condition and damage inspection forms with photo capture at check-out and check-in, giving you a documented record to resolve disputes and bill repairs.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
