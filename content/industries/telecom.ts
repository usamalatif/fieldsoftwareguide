import type { Industry } from '@/lib/industries'

/**
 * Telecom (tower, line, and network field service) — DRAFT (dataVerified: false, noindex).
 * Only Jobber and Housecall Pro publish starting prices; ServiceTitan, Workiz,
 * FieldPulse, Commusoft are custom/quote → null (never guessed).
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const telecom: Industry = {
  slug: 'telecom',
  name: 'Telecom',
  icon: '📡',
  category: 'Technical',

  answer:
    'The best field service management software for telecom depends on whether you do tower work, line/fiber installs, or network maintenance. Contractors handling tower climbs, cell-site upgrades, and fiber/last-mile installs usually run FieldPulse or ServiceTitan for project-based work orders, per-site asset history, and crew dispatch (both custom-quoted). Smaller install and low-voltage teams can start on Jobber (from $29/month) or Housecall Pro (from $59/month) for scheduling and invoicing. Workiz is a strong mid-market option, also custom-priced. Telecom teams specifically need site-based asset tracking, safety and close-out inspection forms for tower/line work, offline mobile access at remote sites, and project/milestone billing for multi-day installs. Expect published plans roughly $29–$299/month, with enterprise platforms higher once quoted. Confirm project-billing and subcontractor workflows fit your build model.',

  intro:
    'Telecom field work spans tower climbs, fiber and line installs, and network maintenance — often project-based, multi-day, and at remote or hard-to-reach sites. The right FSM software has to organize work by site and project rather than a single visit, track equipment and infrastructure per tower or node, enforce safety and close-out inspections for high-risk climb work, and function offline where coverage is poor. Because builds run over days or weeks and often use subcontractors, milestone-based billing, crew scheduling, and clean documentation for the carrier or GC matter more than simple one-and-done invoicing.',

  keyFeatures: [
    'Project / milestone-based work orders for multi-day tower and line installs',
    'Per-site and per-tower asset tracking (antennas, radios, fiber, nodes)',
    'Safety and close-out inspection forms for climb and line work with photos',
    'Offline mobile access for remote towers and rural fiber routes',
    'Crew and subcontractor scheduling with dispatch across dispersed sites',
    'Milestone / progress billing and documentation packages for carriers and GCs',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Telecom platforms (ServiceTitan, FieldPulse, Workiz) are custom-quoted and scale with crews, sites, and projects. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller install and low-voltage teams.',
    structured: false,
  },

  search: { monthlyVolume: 70, kd: 6, cpc: 34.06 },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for telecom install and tower contractors', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large project-based network operations', monthlyFromUsd: null },
    { slug: 'workiz', positioning: 'Strong on dispatch + comms for dispersed crews', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small install teams needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do telecom contractors use?',
      answer:
        'Tower, line, and network contractors often run FieldPulse or ServiceTitan (custom-quoted) for project-based work orders and per-site asset history, while smaller install teams use Housecall Pro (from $59/month) or Jobber (from $29/month).',
    },
    {
      question: 'Can it handle multi-day, project-based telecom installs?',
      answer:
        'Yes. FieldPulse and ServiceTitan organize work by project and milestone rather than a single visit, so multi-day tower builds and fiber routes can be scheduled, tracked, and progress-billed across crews.',
    },
    {
      question: 'Does telecom field software work offline at remote towers?',
      answer:
        'Yes. FieldPulse, ServiceTitan, and Workiz support offline mobile access so crews at remote towers or rural fiber routes can complete work orders, inspections, and photos, then sync when back in coverage.',
    },
    {
      question: 'How much does telecom field service software cost?',
      answer:
        'Telecom platforms like ServiceTitan and FieldPulse are custom-quoted and scale with crews and projects. Published entry points are Jobber from $29/month and Housecall Pro from $59/month for smaller install and low-voltage teams.',
    },
    {
      question: 'Can it capture safety and close-out inspections for tower work?',
      answer:
        'Yes. FieldPulse and ServiceTitan support custom safety and close-out inspection forms with photo and signature capture, producing documentation packages you can hand to the carrier or general contractor.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
