import type { Industry } from '@/lib/industries'

/**
 * Healthcare (medical equipment / DME field service) — VERIFIED (researched 2026-07-08).
 * No FSM vendor markets a healthcare/medical vertical, and NONE of the six claims
 * HIPAA compliance or offers a BAA on its site (checked July 2026) — the page says so
 * explicitly. Functionally closest picks are the tools with verified per-asset records:
 * FieldPulse, ServiceTitan, Commusoft (and Workiz). Jobber has NO native asset tracking.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const healthcare: Industry = {
  slug: 'healthcare',
  name: 'Healthcare',
  icon: '🏥',
  category: 'Field Services',

  answer:
    'No major field service management vendor markets a healthcare or medical-equipment vertical, and — as of July 2026 — none of the six tools we track (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) claims HIPAA compliance or offers a business associate agreement (BAA) on its website. Treat FSM software as equipment-service tooling, not a clinical system. For biomed and DME (durable medical equipment) service teams, the functionally closest picks are the tools with deep per-asset records: FieldPulse (asset management with serials, warranties, and barcode scanning), ServiceTitan (installed-equipment records), and Commusoft (multi-site asset service history) — all custom-quoted. Smaller in-home equipment providers can start on Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually) for scheduling and invoicing. Expect published plans of $29–$299/month with annual billing. If patient-linked data would touch the system, get security answers and a BAA from the vendor in writing first — or keep that data out entirely.',

  intro:
    'Healthcare field service — from biomedical equipment maintenance to in-home DME delivery — is defined by uptime, traceability, and compliance. A ventilator or hospital bed cannot fail because a preventive-maintenance visit was missed, so the right FSM software must schedule recurring service by device, keep a complete per-asset history (model, serial, warranty), and produce clean audit trails. None of the major FSM tools is built for healthcare specifically, so the honest evaluation is capability-based: asset records, recurring scheduling, and mobile documentation — with any patient-linked data handled outside the FSM system unless the vendor confirms HIPAA/BAA support in writing.',

  keyFeatures: [
    'Per-asset service history: model, serial, and warranty tracking per device',
    'Recurring preventive-maintenance scheduling per device or site',
    'Recurring in-home visit scheduling and route planning for mobile teams',
    'Mobile app for field techs to log parts, photos, and signatures on site',
    'Audit-ready documentation and exportable service records',
    'Accounting / billing sync for insurance-adjacent and B2B invoicing',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'ServiceTitan, FieldPulse, and Commusoft are custom-quoted and scale with technicians and assets. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller in-home and equipment providers. No vendor publishes HIPAA/BAA support — confirm in writing.',
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 2, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best per-asset records for medical equipment / DME service (serials, barcodes)', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Installed-equipment records; best for large multi-site service operations', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Multi-site asset service history with QR/barcode lookup', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for smaller in-home equipment providers needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan (no native asset tracking)', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What FSM software do healthcare field teams use?',
      answer:
        'No major FSM vendor markets a healthcare vertical (checked July 2026). Medical-equipment and DME service teams typically adapt FieldPulse, ServiceTitan, or Commusoft (all custom-quoted) for per-device asset history, while smaller in-home teams use Housecall Pro (from $59/month billed annually) or Jobber (from $29/month billed annually).',
    },
    {
      question: 'Is field service software for healthcare HIPAA compliant?',
      answer:
        'As of July 2026, none of the six major FSM vendors — Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft — claims HIPAA compliance or offers a BAA on its website. If your work involves patient-linked data, get written security answers and a signed BAA from the vendor before committing, or keep patient data out of the FSM system entirely.',
    },
    {
      question: 'How much does healthcare field service software cost?',
      answer:
        'ServiceTitan, FieldPulse, and Commusoft are custom-quoted. Published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing), which suit smaller in-home care and equipment providers.',
    },
    {
      question: 'Can it schedule recurring preventive maintenance per device?',
      answer:
        'Yes, via asset records: ServiceTitan’s Installed Equipment, FieldPulse’s Asset Management, and Commusoft’s asset-maintenance records track each device by serial with full service history, and service agreements schedule recurring visits. These tools are built for trades, though — confirm calibration-specific workflows in a demo.',
    },
    {
      question: 'What features matter most for in-home medical equipment visits?',
      answer:
        'Route planning, recurring visit scheduling, and a fast mobile app for logging parts, photos, and signatures. Housecall Pro (from $59/month billed annually) and Jobber (from $29/month billed annually) cover these well for smaller mobile teams — just keep patient-linked data out of them.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'ServiceTitan industries (no healthcare vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-07-08' },
    { name: 'Jobber industries (no healthcare vertical)', url: 'https://www.getjobber.com/industries/', checked: '2026-07-08' },
  ],
}
