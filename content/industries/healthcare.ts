import type { Industry } from '@/lib/industries'

/**
 * Healthcare (mobile / in-home & medical equipment field service) — DRAFT
 * (dataVerified: false, noindex). Only Jobber and Housecall Pro publish starting
 * prices; ServiceTitan, Workiz, FieldPulse, Commusoft are custom/quote → null.
 * Prices referenced against each vendor's own pricing page on 2026-07-08.
 */
export const healthcare: Industry = {
  slug: 'healthcare',
  name: 'Healthcare',
  icon: '🏥',
  category: 'Field Services',

  answer:
    'The best field service management software for healthcare field teams — medical equipment service, mobile clinical visits, and biomed/DME (durable medical equipment) providers — depends on scale and compliance needs. For organizations servicing hospital beds, imaging, or DME across many sites, FieldPulse and ServiceTitan handle preventive-maintenance scheduling, per-device asset history, and technician dispatch (both custom-quoted). Smaller in-home care and equipment providers can start on Jobber (from $29/month) or Housecall Pro (from $59/month) for scheduling, visit tracking, and invoicing. Workiz is a solid mid-market pick, also custom-priced. Healthcare field teams specifically need preventive-maintenance calendars, per-asset service records, secure documentation, and clear audit trails. Expect published plans roughly $29–$299/month, with enterprise biomed platforms higher once quoted. Verify security and any HIPAA/BAA requirements directly with each vendor before storing patient-linked data.',

  intro:
    'Healthcare field service — from biomedical equipment maintenance to in-home DME delivery and mobile clinical visits — is defined by uptime, traceability, and compliance. A ventilator or hospital bed cannot fail because a preventive-maintenance visit was missed, so the right FSM software must schedule recurring service by device, keep a complete per-asset history (model, serial, calibration, warranty), and produce clean audit trails. Secure documentation and careful handling of any patient-linked data matter, so confirm each vendor’s security posture and whether a HIPAA business associate agreement is available before you commit.',

  keyFeatures: [
    'Preventive-maintenance scheduling per device (ventilators, beds, imaging, DME)',
    'Per-asset service history: model, serial, calibration, and warranty tracking',
    'Recurring in-home visit scheduling and route planning for mobile teams',
    'Secure documentation and audit trails for compliance reviews',
    'Mobile app for field techs to log parts, photos, and signatures on site',
    'Accounting / billing sync for insurance-adjacent and B2B invoicing',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'Biomed/DME platforms (ServiceTitan, FieldPulse, Workiz) are custom-quoted and scale with technicians and assets. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo for smaller in-home and equipment providers. Confirm HIPAA/BAA support directly.',
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 2, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best overall for medical equipment / DME field service', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large biomed and multi-site service operations', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for smaller in-home care and equipment providers', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan for mobile visit teams', monthlyFromUsd: 29 },
    { slug: 'workiz', positioning: 'Good for teams wanting built-in scheduling + comms', monthlyFromUsd: null },
  ],

  faqs: [
    {
      question: 'What FSM software do healthcare field teams use?',
      answer:
        'Medical equipment and DME providers often run FieldPulse or ServiceTitan (custom-quoted) for preventive maintenance and per-device asset history, while smaller in-home teams use Housecall Pro (from $59/month) or Jobber (from $29/month).',
    },
    {
      question: 'Is field service software for healthcare HIPAA compliant?',
      answer:
        'Compliance depends on the vendor and your configuration. Larger platforms like ServiceTitan and FieldPulse can support secure workflows, but you must confirm HIPAA and business-associate-agreement (BAA) support directly before storing any patient-linked data.',
    },
    {
      question: 'How much does healthcare field service software cost?',
      answer:
        'Biomed and DME platforms such as ServiceTitan and FieldPulse are custom-quoted. Published entry points are Jobber from $29/month and Housecall Pro from $59/month, which suit smaller in-home care and equipment providers.',
    },
    {
      question: 'Can it schedule recurring preventive maintenance per device?',
      answer:
        'Yes. FieldPulse and ServiceTitan let you attach recurring PM schedules to individual assets by serial number, so ventilators, beds, and imaging equipment are automatically queued for service before they come due.',
    },
    {
      question: 'What features matter most for in-home medical visits?',
      answer:
        'Route planning, recurring visit scheduling, and a fast mobile app for logging parts, photos, and signatures. Housecall Pro (from $59/month) and Jobber (from $29/month) cover these well for smaller mobile teams.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: false,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
  ],
}
