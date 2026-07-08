import type { Industry } from '@/lib/industries'

/**
 * Telecom (tower, line, and network field service) — VERIFIED (researched 2026-07-08).
 * No FSM vendor has a telecom/ISP/cabling vertical (checked each vendor's industries
 * page). Closest adjacency: Workiz (alarm & security), ServiceTitan (alarm + AV),
 * FieldPulse (fire & security + A/V). Jobber, Housecall Pro, Commusoft are NOT aimed
 * at telecom/low-voltage. Offline + custom-form claims verified against vendor docs.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const telecom: Industry = {
  slug: 'telecom',
  name: 'Telecom',
  icon: '📡',
  category: 'Technical',

  answer:
    'No major field service management vendor markets a telecom vertical (checked July 2026) — the closest fits are the tools built for adjacent low-voltage trades. Workiz (alarm & security vertical), ServiceTitan (alarm and audio-visual verticals), and FieldPulse (fire & security and A/V installation) are the strongest matches for telecom installers, low-voltage contractors, and ISP subcontractors — all custom-quoted. Smaller install teams can start on Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually), though neither markets to telecom or low-voltage work. Telecom teams specifically need per-site asset tracking, safety and close-out inspection forms for climb and line work, offline mobile access at remote sites, and dispatch across dispersed crews. Expect published plans of $29–$299/month with annual billing; enterprise platforms run higher once quoted. If you bill carriers by project milestone, confirm progress-billing workflows in a demo — that is the most common gap in trade-focused FSM tools.',

  intro:
    'Telecom field work spans tower climbs, fiber and line installs, and network maintenance — often project-based, multi-day, and at remote or hard-to-reach sites. The right FSM software has to organize work by site and project rather than a single visit, track equipment and infrastructure per tower or node, enforce safety and close-out inspections for high-risk climb work, and function offline where coverage is poor. Because builds run over days or weeks and often use subcontractors, milestone-based billing, crew scheduling, and clean documentation for the carrier or GC matter more than simple one-and-done invoicing.',

  keyFeatures: [
    'Per-site and per-tower asset tracking (antennas, radios, fiber, nodes)',
    'Safety and close-out inspection forms for climb and line work with photos',
    'Offline mobile access for remote towers and rural fiber routes',
    'Crew and subcontractor scheduling with dispatch across dispersed sites',
    'Multi-day work orders and progress documentation for carriers and GCs',
    'QuickBooks / accounting sync for job costing across crews',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'The tools closest to telecom work (Workiz, ServiceTitan, FieldPulse) are custom-quoted and scale with crews, sites, and projects. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller install and low-voltage teams.',
    structured: false,
  },

  search: { monthlyVolume: 70, kd: 6, cpc: 34.06 },

  providers: [
    { slug: 'workiz', positioning: 'Closest vertical fit — markets to alarm & security / low-voltage', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Alarm + audio-visual verticals; best for large dispersed operations', monthlyFromUsd: null },
    { slug: 'fieldpulse', positioning: 'Fire & security and A/V verticals; strong offline + custom forms', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Generic FSM for small install teams needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan (not marketed to telecom)', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do telecom contractors use?',
      answer:
        'No major FSM vendor markets a telecom vertical (checked July 2026). The closest fits by adjacency are Workiz (alarm & security), ServiceTitan (alarm and A/V), and FieldPulse (fire & security) — all custom-quoted — while smaller install teams use Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually).',
    },
    {
      question: 'Can it handle multi-day, project-based telecom installs?',
      answer:
        'FSM work orders can cover multi-day jobs, but none of the major FSM tools is project-billing software. If you bill carriers or GCs by milestone, confirm progress-billing and subcontractor workflows in a demo before committing — this is the most common gap for telecom contractors using trade-focused FSM tools.',
    },
    {
      question: 'Does telecom field software work offline at remote towers?',
      answer:
        'Yes. FieldPulse switches to offline mode automatically out of cell range, Workiz lets crews update jobs with no connectivity, and ServiceTitan’s mobile app works offline with some limits. Work orders, inspections, and photos sync when crews are back in coverage.',
    },
    {
      question: 'How much does telecom field service software cost?',
      answer:
        'The closest-fit platforms — Workiz, ServiceTitan, FieldPulse — are custom-quoted and scale with crews and projects. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing) for smaller install and low-voltage teams.',
    },
    {
      question: 'Can it capture safety and close-out inspections for tower work?',
      answer:
        'Yes. FieldPulse and ServiceTitan include custom form builders with photo and signature capture, so you can build climb-safety checklists and close-out inspection packages to hand to the carrier or general contractor. Neither ships telecom-specific templates — you build them once and reuse them.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'Workiz alarm & security vertical', url: 'https://www.workiz.com/industries/alarm-and-security/', checked: '2026-07-08' },
    { name: 'ServiceTitan alarm business software', url: 'https://www.servicetitan.com/industries/alarm-business-software', checked: '2026-07-08' },
    { name: 'FieldPulse fire & security vertical', url: 'https://www.fieldpulse.com/solutions/fire-and-security', checked: '2026-07-08' },
    { name: 'FieldPulse offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-07-08' },
    { name: 'ServiceTitan field mobile app FAQ (offline)', url: 'https://help.servicetitan.com/faq/servicetitan-field-mobile-app-faq', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-07-08' },
  ],
}
