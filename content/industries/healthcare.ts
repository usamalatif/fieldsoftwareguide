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
 * 2026-11-20: corrected. That HVAC page shows a separate HVAC package (Essentials $229 for 1 user /
 * $299 for 5), not the $149 main-grid Essentials; the main pricing grid does not list equipment
 * tracking. The property-profile app (make, model, serial, install date) names no plan.
 * 2026-11-20: added healthcare CMMS (Accruent TMS, AIMS 3, Nuvolo, e-Quip) and medical device
 * field service (Salesforce Field Service: $175/$250/$650 per user/month billed annually; Field
 * Service listed under Service Cloud in its HIPAA BAA covered services), all from vendor sites.
 * MediMizer (403), EZmaintain (refused), ServiceMax (redirects to ptc.com, 403) and IFS (429)
 * could not be checked and are not described.
 * Old 2026-10-31 note follows.
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
    'None of the six platforms we review sells medical equipment field service management software as a healthcare product (rechecked November 2026), so biomed and DME service teams choose general field service tools with strong per-asset records. FieldPulse (asset records with warranties and barcode scanning), ServiceTitan (installed-equipment history), and Commusoft (multi-site asset history with barcodes or QR codes) are the closest fits, all custom-quoted. Smaller in-home equipment providers can look at Housecall Pro (from $59/month billed annually), whose property profile app stores make, model, serial number and install date per item, or Jobber (from $29/month billed annually), which has no native asset tracking. Treat these tools as equipment-service systems, not clinical software. Workiz’s terms say it does not act as a customer’s business associate under HIPAA. For Jobber, Housecall Pro, ServiceTitan, FieldPulse, and Commusoft we found no public HIPAA or business associate agreement (BAA) documentation, which is not evidence of non-compliance, so ask in writing and keep patient data out until a vendor confirms. Hospital biomed and HTM departments often use a healthcare CMMS such as Accruent TMS, AIMS or Nuvolo instead, and device makers’ service teams often use enterprise platforms such as Salesforce Field Service.',

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
    {
      slug: 'fieldpulse',
      positioning: 'Best per-asset records for medical equipment / DME service (warranties, barcodes)',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Biomed and DME service teams that want per-device records and recurring maintenance agreements in one system',
        strengths: [
          'Asset records cover installations, warranties, maintenance schedules and equipment condition, with barcode scanning to update records in the field.',
          'Asset reports summarize condition, maintenance history and service recommendations for the customer.',
          'Maintenance agreements run on the same jobs and invoices and can bill on a different cadence from the visits.',
        ],
        limitations: [
          'Quote-only, seat-based pricing, and FieldPulse says it does not offer a free trial.',
          'We found no published HIPAA statement or BAA offer, so keep patient data out unless FieldPulse confirms in writing.',
        ],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Installed-equipment history; best for large multi-site service operations',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Large multi-site equipment service operations that already run on a contractor platform',
        strengths: [
          'Tracks installed equipment at each service location, including install dates, service history and memberships.',
          'Recurring service events for maintenance visits populate up to 12 months ahead by default.',
        ],
        limitations: [
          'Built for trades contractors: its industries page lists no healthcare or medical equipment vertical.',
          'Per-technician pricing is quote-only, and we found no published HIPAA statement or BAA offer.',
        ],
      },
    },
    {
      slug: 'commusoft',
      positioning: 'Multi-site asset history with barcode/QR lookup and PPM service contracts',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Equipment service companies with 6 or more staff that run planned maintenance contracts across many sites',
        strengths: [
          'Scan QR codes or barcodes on site to open the full service history, equipment manuals and past technician notes.',
          'Service contracts auto-generate recurring work orders and inspection visits (PPM).',
          'Keeps digital service histories and inspection records to show work was completed to spec.',
        ],
        limitations: [
          'Commusoft says it is designed for businesses with 6 or more staff, and pricing is by quote.',
          'We found no published HIPAA statement or BAA offer.',
        ],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Published pricing; property profiles store make, model and serial per item',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small in-home equipment or DME repair businesses that want published pricing and a 14-day trial',
        strengths: [
          'Its property profile app stores item type, make, model, serial number, install date and notes for each address.',
          'Published plans from $59/month billed annually; Recurring Service Plans are included in MAX ($299/month for 8 users).',
        ],
        limitations: [
          '“Equipment tracking” appears on Essentials only in its separate HVAC package (from $229/month), not on the main pricing grid, and the property profile help article names no plan.',
          'We found no published HIPAA statement or BAA offer.',
        ],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Lowest published plan (no native asset tracking)',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Solo technicians who need scheduling, invoicing and recurring visits at the lowest published price',
        strengths: [
          'Core is $29/month billed annually for 1 user, with a 14-day trial and no card.',
          'Recurring jobs handle repeat maintenance visits.',
        ],
        limitations: [
          'No dedicated equipment module: device details would live in custom client fields or notes, not a per-device service history.',
          'We found no published HIPAA statement or BAA offer.',
        ],
      },
    },
  ],

  bySize: [
    { size: 'Solo DME or repair tech', pick: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo)', why: 'Lowest published plans for scheduling and invoicing. Jobber has no native asset tracking; Housecall Pro’s property profile app stores make, model and serial number, and its help article names no plan, so confirm it is on your plan.' },
    { size: 'Small team, 2–5 users', pick: 'Housecall Pro Essentials ($149/mo, up to 5 users)', why: 'Checklists, phone GPS and QuickBooks Online sync on the main pricing grid. Recurring Service Plans are on MAX ($299/mo). The main grid does not list equipment tracking, so confirm property profiles in the trial.' },
    { size: 'Biomed team with service contracts', pick: 'Commusoft or FieldPulse (custom quote)', why: 'Commusoft schedules planned maintenance per asset under service contracts; FieldPulse maintenance agreements generate recurring jobs.' },
    { size: 'Large multi-site operation', pick: 'ServiceTitan (custom quote)', why: 'Installed-equipment history per location plus service agreements for commercial customers.' },
  ],

  extraSections: [
    {
      id: 'medical-equipment-pm-workflow',
      heading: 'Preventive maintenance on medical equipment: what to test in a demo',
      paragraphs: [
        'Load ten real devices into each trial with make, model, serial number, install date, and warranty end date. Then build one service contract that schedules preventive maintenance for those devices at a fixed interval, send a tech to complete one visit, and check that the visit, parts used, photos, and technician notes land on each device’s history. Finish by exporting the history for one device as you would for a customer or audit request.',
        'The tools differ in where that record lives. ServiceTitan keeps installed equipment at each service location with a history of every completed job, Commusoft lets you attach barcodes or QR codes to equipment and keeps a full job history per asset, FieldPulse tracks warranties and maintenance history with barcode scanning, and Housecall Pro stores make, model, serial number and install date in its property profile app. Housecall Pro lists “equipment tracking” on Essentials only in its separate HVAC package (from $229/month), not on its main pricing grid. Workiz equipment tracking is on its Ultimate plan, and Jobber has no native asset tracking.',
        'DME providers that also rent out equipment such as hospital beds or oxygen concentrators have a second job: tracking which unit is out on which contract and when it comes back. That is rental management, not field service, and we did not verify complete rental-contract and availability workflows in any of these tools. Our guide to [equipment rental field service software](/by-industry/equipment-rental) compares rental systems with field service tools for businesses that do both.',
      ],
    },
    {
      id: 'medical-equipment-cmms',
      heading: 'Dedicated medical equipment management software (HTM and biomed CMMS)',
      paragraphs: [
        'If you run an in-house biomed or healthcare technology management (HTM) department, or service hospital equipment under contract, a healthcare CMMS is often a closer fit than a trades field service tool. These systems are built around device inventories, planned maintenance and accreditation surveys. None of the four below publishes a price; each sells through a demo or quote.',
        'Accruent TMS is a cloud CMMS for healthcare. Its product page says it supports continuous compliance with Joint Commission standards, and Accruent’s HTM page refers to audits by CMS, The Joint Commission, DNV GL and FDA. AIMS 3 from Phoenix Data Systems runs in the vendor’s cloud, where it manages upgrades for you, and interfaces with ECRI’s Sourcebase, UMDNS and Alerts Tracker and with help desks such as ServiceNow and Remedy.',
        'Nuvolo, which Trane Technologies agreed to acquire in 2023, sells HTM asset management that schedules planned maintenance, monitors compliance and, in its words, helps you “meet AEM regulatory standards”. Its regulatory compliance module says it can work with Joint Commission, NFPA and CMS Conditions of Participation standards, ECRI integration is optional, and mobile work orders work on and offline. e-Quip is a medical device asset management system developed with NHS Trusts in the UK, so confirm US support before you shortlist it.',
      ],
    },
    {
      id: 'medical-device-field-service',
      heading: 'Medical device field service platforms for manufacturers and service organizations',
      paragraphs: [
        'Device manufacturers and independent service organizations that send engineers to hospitals often use enterprise field service platforms. Salesforce Field Service publishes its prices: Technician and Dispatcher at $175 per user per month, Field Service+ Core at $250 and Field Service Max at $650, all billed annually. Salesforce lists Service Cloud, including Field Service, among the services covered by its HIPAA business associate addendum, which you must sign before using it with patient data.',
        'We could not check ServiceMax (servicemax.com now redirects to ptc.com, which blocked our request) or IFS on their own sites for this update, so we do not describe them here. For a small DME or repair business, these platforms are usually far more than you need; the trades tools above cost less and publish their prices.',
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
      question: 'What is the difference between medical equipment management software and field service software?',
      answer:
        'Medical equipment management software, a healthcare CMMS such as Accruent TMS, AIMS or Nuvolo, is built for hospital biomed teams: device inventory, planned maintenance and accreditation records. Field service software is built for companies that send technicians to customer sites and bill for the work.',
    },
    {
      question: 'Does any field service platform offer a HIPAA BAA?',
      answer:
        'Salesforce lists Service Cloud, including Field Service, as covered by its HIPAA business associate addendum, which must be signed before use with patient data. We found no published BAA offer from Jobber, Housecall Pro, ServiceTitan, FieldPulse or Commusoft.',
    },
    {
      question: 'What is the best medical equipment field service management software?',
      answer:
        'None of the six FSM platforms we review markets a healthcare vertical (rechecked November 2026). Biomed and DME service teams usually pick by asset records: FieldPulse, ServiceTitan, and Commusoft (all custom-quoted) keep per-device service history. Smaller teams can use Housecall Pro (from $59/month billed annually), whose property profile app stores make, model and serial numbers.',
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
        'Housecall Pro property profiles (no plan named in its help article) and Workiz equipment tracking (Ultimate plan) store make, model, and serial numbers. ServiceTitan keeps installed equipment per location with service history, Commusoft attaches barcodes or QR codes to each asset, and FieldPulse tracks warranties with barcode scanning. Jobber has no native asset tracking.',
    },
    {
      question: 'How much does medical equipment service software cost?',
      answer:
        'ServiceTitan, FieldPulse, and Commusoft are custom-quoted. Published plans start at $29/month for Jobber Core and $59/month for Housecall Pro Basic, billed annually; Housecall Pro MAX, which lists Recurring Service Plans, is $299/month billed annually for up to 8 users.',
    },
  ],

  // Set to the actual merge day (PR held until after the Dec 9 GSC review).
  lastUpdated: '2026-11-20',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-27' },
    { name: 'Housecall Pro property profiles', url: 'https://help.housecallpro.com/en/articles/3703307-property-profile', checked: '2026-11-20' },
    { name: 'Housecall Pro HVAC page (separate HVAC package; equipment tracking on its Essentials from $229)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-20' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-11-20' },
    { name: 'ServiceTitan service agreements', url: 'https://help.servicetitan.com/docs/service-agreement-management-overview', checked: '2026-10-27' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-11-20' },
    { name: 'FieldPulse maintenance agreements', url: 'https://help.fieldpulse.com/en/articles/5722045-maintenance-agreements', checked: '2026-10-27' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-11-20' },
    { name: 'Commusoft service contracts', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-11-20' },
    { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-10-27' },
    { name: 'Workiz terms (HIPAA / business associate)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-20' },
    { name: 'Jobber recurring jobs', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-10-27' },
    { name: 'ServiceTitan industries (no healthcare vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-11-20' },
    { name: 'Jobber industries (no healthcare vertical)', url: 'https://www.getjobber.com/industries/', checked: '2026-10-27' },
    { name: 'Accruent TMS (cloud healthcare CMMS; Joint Commission)', url: 'https://www.accruent.com/products/tms', checked: '2026-11-20' },
    { name: 'Accruent HTM software (CMS, Joint Commission, DNV GL, FDA audits)', url: 'https://www.accruent.com/solutions/healthcare-technology-management-software', checked: '2026-11-20' },
    { name: 'AIMS 3 cloud solutions', url: 'https://www.goaims.com/cloudmanagement-solutions/', checked: '2026-11-20' },
    { name: 'AIMS 3 interfaces (ECRI, ServiceNow, Remedy)', url: 'https://www.goaims.com/interfaces/', checked: '2026-11-20' },
    { name: 'Nuvolo HTM asset management (AEM, offline mobile, ECRI)', url: 'https://www.nuvolo.com/products/htm-asset-management/', checked: '2026-11-20' },
    { name: 'Nuvolo regulatory compliance management (Joint Commission, NFPA, CMS CoPs)', url: 'https://www.nuvolo.com/component/regulatory-compliance-management/', checked: '2026-11-20' },
    { name: 'Trane Technologies to acquire Nuvolo (Nuvolo news)', url: 'https://www.nuvolo.com/news/trane-technologies-to-acquire-connected-workplace-and-enterprise-asset-management-leader-nuvolo/', checked: '2026-11-20' },
    { name: 'e-Quip medical device asset management (NHS)', url: 'https://www.e-quip.uk.net/', checked: '2026-11-20' },
    { name: 'Salesforce Field Service pricing', url: 'https://www.salesforce.com/service/field-service-management/pricing/', checked: '2026-11-20' },
    { name: 'Salesforce HIPAA business associate addendum (covered services)', url: 'https://www.salesforce.com/company/legal/business-associate-addendum/', checked: '2026-11-20' },
    { name: 'FieldPulse pricing (quote only; no free trial)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
    { name: 'Commusoft FAQs (designed for 6 or more staff)', url: 'https://www.commusoft.com/en-gb/faqs/', checked: '2026-11-20' },
  ],
}
