import type { Industry } from '@/lib/industries'

/**
 * Healthcare (medical equipment / DME field service) — VERIFIED (researched 2026-07-08).
 * None of the six FSM platforms reviewed markets a healthcare/medical vertical. Closest picks are the
 * tools with verified per-asset records: FieldPulse, ServiceTitan, Commusoft (and Workiz).
 * Jobber has NO native asset tracking.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 * 2026-10-27: HIPAA/BAA wording narrowed to what is published. We found no HIPAA-compliance or
 * BAA statement on Jobber, Housecall Pro, ServiceTitan, FieldPulse, or Commusoft (absence is
 * NOT a claim of non-compliance); Workiz's terms say it is not acting as a customer's Business
 * Associate. Asset records rechecked (Workiz Equipment tracking is Ultimate-only; Housecall
 * Pro property profiles hold make/model/serial). None of the six documents calibration features.
 * 2026-10-31: Housecall Pro qualified consistently: its HVAC page lists equipment tracking on
 * Essentials and MAX; the property-profile help article names no plan and the pricing page is
 * silent, so we do NOT say Basic lacks it. Market claim narrowed to the six platforms reviewed.
 */
export const healthcare: Industry = {
  slug: 'healthcare',
  name: 'Healthcare',
  icon: '🏥',
  category: 'Field Services',

  metaDescription:
    'Compare medical equipment field service management software for preventive maintenance, asset tracking and service history. Check privacy limits before you buy.',
  datePublished: '2026-07-08',

  answer:
    'None of the six platforms we review sells medical equipment field service management software as a healthcare product (rechecked October 2026), so biomed and DME service teams choose general field service tools with strong per-asset records. FieldPulse (asset records with warranties and barcode scanning), ServiceTitan (installed-equipment history), and Commusoft (multi-site asset history with barcodes or QR codes) are the closest fits, all custom-quoted. Smaller in-home equipment providers can look at Housecall Pro, which lists equipment tracking from its Essentials plan ($149/month billed annually; Basic starts at $59) and stores make, model, and serial numbers in property profiles, or Jobber (from $29/month billed annually), which has no native asset tracking. Treat these tools as equipment-service systems, not clinical software. Workiz’s terms say it does not act as a customer’s business associate under HIPAA. For Jobber, Housecall Pro, ServiceTitan, FieldPulse, and Commusoft we found no public HIPAA or business associate agreement (BAA) documentation, which is not evidence of non-compliance, so ask in writing and keep patient data out until a vendor confirms.',

  intro:
    'Healthcare field service covers biomedical equipment maintenance in hospitals and clinics, servicing of imaging, lab, and sterilization equipment, and delivery and repair of durable medical equipment (DME) in patients’ homes. Uptime and traceability define the work: a missed preventive-maintenance visit can take a device out of service, and every repair needs a dated record against the right serial number. None of the six platforms reviewed here is built specifically for healthcare, so the honest evaluation is capability-based: per-asset history, recurring maintenance scheduling, and mobile documentation, with patient-linked data kept out of the system.',

  keyFeatures: [
    'Per-asset service history: make, model, serial, and warranty per device',
    'Recurring preventive-maintenance scheduling per device, site, or contract',
    'Barcode or QR lookup so techs open the right device record on site',
    'Mobile app for logging parts, photos, readings, and signatures',
    'Exportable service records for audits and customer reporting',
    'Accounting / billing sync for B2B service contracts',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'ServiceTitan, FieldPulse, and Commusoft are custom-quoted and scale with technicians and assets. Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing) for smaller in-home and equipment providers.',
    source: { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-27' },
    structured: false,
  },

  search: { monthlyVolume: 40, kd: 2, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best per-asset records for medical equipment / DME service (warranties, barcodes)', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Installed-equipment history; best for large multi-site service operations', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Multi-site asset history with barcode/QR lookup and PPM service contracts', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Published pricing; equipment tracking listed from Essentials ($149/mo)', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Lowest published plan (no native asset tracking)', monthlyFromUsd: 29 },
  ],

  bySize: [
    { size: 'Solo DME or repair tech', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo)', why: 'Lowest published plans for scheduling and invoicing. Jobber has no native asset tracking; Housecall Pro lists equipment tracking on Essentials and MAX, so confirm what Basic stores.' },
    { size: 'Small team, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Equipment tracking, checklists, and QuickBooks Online sync. Recurring Service Plans are on MAX ($299/mo) per the pricing page.' },
    { size: 'Biomed team with service contracts', pick: 'Commusoft or FieldPulse (custom quote)', why: 'Commusoft schedules planned maintenance per asset under service contracts; FieldPulse maintenance agreements generate recurring jobs.' },
    { size: 'Large multi-site operation', pick: 'ServiceTitan (custom quote)', why: 'Installed-equipment history per location plus service agreements for commercial customers.' },
  ],

  extraSections: [
    {
      id: 'medical-equipment-pm-workflow',
      heading: 'Preventive maintenance on medical equipment: what to test in a demo',
      paragraphs: [
        'Load ten real devices into each trial with make, model, serial number, install date, and warranty end date. Then build one service contract that schedules preventive maintenance for those devices at a fixed interval, send a tech to complete one visit, and check that the visit, parts used, photos, and technician notes land on each device’s history. Finish by exporting the history for one device as you would for a customer or audit request.',
        'The tools differ in where that record lives. ServiceTitan keeps installed equipment at each service location with a history of every completed job, Commusoft lets you attach barcodes or QR codes to equipment and keeps a full job history per asset, FieldPulse tracks warranties and maintenance history with barcode scanning, and Housecall Pro stores make, model, and serial numbers in property profiles, with equipment tracking listed from Essentials. Workiz equipment tracking is on its Ultimate plan, and Jobber has no native asset tracking.',
        'DME providers that also rent out equipment such as hospital beds or oxygen concentrators have a second job: tracking which unit is out on which contract and when it comes back. That is rental management, not field service, and we did not verify complete rental-contract and availability workflows in any of these tools. Our guide to [equipment rental field service software](/by-industry/equipment-rental) compares rental systems with field service tools for businesses that do both.',
      ],
    },
    {
      id: 'healthcare-privacy',
      heading: 'Patient data, HIPAA, and what these tools are not',
      paragraphs: [
        'These are equipment-service tools, not clinical or home-health scheduling systems. We found no published HIPAA compliance statement or business associate agreement (BAA) offer on the websites of Jobber, Housecall Pro, ServiceTitan, FieldPulse, or Commusoft. That does not mean a vendor is non-compliant; it means you need the answer in writing. Workiz’s terms say Workiz is not acting as a customer’s business associate under HIPAA.',
        'The practical rule: record the device, the location, and the work done, and keep patient names, conditions, and other health information out of the field service system unless the vendor signs a BAA. This page covers equipment service only; it does not assess medical-device regulatory requirements, which depend on your contracts and the equipment you service. For calibration, none of the six vendors documents calibration-specific features, so test how readings and certificates would be stored before you commit.',
      ],
    },
  ],

  mistakes: [
    'Putting patient names or health details on work orders. Keep records to device, location, and work done unless the vendor signs a BAA.',
    'Assuming a recurring plan is on every tier. Housecall Pro lists Recurring Service Plans on MAX, and Workiz equipment tracking is on Ultimate.',
    'Choosing a tool without per-asset history. Jobber has no native asset tracking, so service history would live in notes and custom fields.',
    'Expecting calibration certificates out of the box. No vendor here documents calibration features; test how readings and documents are stored.',
  ],

  faqs: [
    {
      question: 'What is the best medical equipment field service management software?',
      answer:
        'None of the six FSM platforms we review markets a healthcare vertical (rechecked October 2026). Biomed and DME service teams usually pick by asset records: FieldPulse, ServiceTitan, and Commusoft (all custom-quoted) keep per-device service history. Smaller teams can use Housecall Pro, which lists equipment tracking from Essentials ($149/month billed annually) and stores make, model, and serial numbers in property profiles.',
    },
    {
      question: 'Is field service software for medical equipment HIPAA compliant?',
      answer:
        'We found no HIPAA compliance statement or BAA offer published by Jobber, Housecall Pro, ServiceTitan, FieldPulse, or Commusoft, and Workiz’s terms say it does not act as a customer’s business associate. That is not proof of non-compliance. If patient data would touch the system, get written security answers and a signed BAA first, or keep patient data out.',
    },
    {
      question: 'Can it schedule recurring preventive maintenance per device?',
      answer:
        'Yes. ServiceTitan service agreements, FieldPulse maintenance agreements, and Commusoft service contracts schedule recurring visits against equipment records. Jobber supports recurring jobs, and Housecall Pro lists Recurring Service Plans on its MAX plan. None documents calibration-specific workflows, so test those in a demo.',
    },
    {
      question: 'Which tools track medical equipment by serial number?',
      answer:
        'Housecall Pro property profiles (equipment tracking is listed from Essentials) and Workiz equipment tracking (Ultimate plan) store make, model, and serial numbers. ServiceTitan keeps installed equipment per location with service history, Commusoft attaches barcodes or QR codes to each asset, and FieldPulse tracks warranties with barcode scanning. Jobber has no native asset tracking.',
    },
    {
      question: 'How much does medical equipment service software cost?',
      answer:
        'ServiceTitan, FieldPulse, and Commusoft are custom-quoted. Published plans start at $29/month for Jobber Core and $59/month for Housecall Pro Basic, billed annually; Housecall Pro MAX, which lists Recurring Service Plans, is $299/month billed annually for up to 8 users.',
    },
  ],

  lastUpdated: '2026-10-31',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro property profiles', url: 'https://help.housecallpro.com/en/articles/3703307-property-profile', checked: '2026-10-31' },
    { name: 'Housecall Pro HVAC page (equipment tracking on Essentials and MAX)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-10-31' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-10-27' },
    { name: 'ServiceTitan service agreements', url: 'https://help.servicetitan.com/docs/service-agreement-management-overview', checked: '2026-10-27' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-27' },
    { name: 'FieldPulse maintenance agreements', url: 'https://help.fieldpulse.com/en/articles/5722045-maintenance-agreements', checked: '2026-10-27' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-10-27' },
    { name: 'Commusoft service contracts', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-10-27' },
    { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-10-27' },
    { name: 'Workiz terms (HIPAA / business associate)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-10-27' },
    { name: 'Jobber recurring jobs', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-10-27' },
    { name: 'ServiceTitan industries (no healthcare vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-10-27' },
    { name: 'Jobber industries (no healthcare vertical)', url: 'https://www.getjobber.com/industries/', checked: '2026-10-27' },
  ],
}
