import type { Industry } from '@/lib/industries'

/**
 * Equipment Rental — VERIFIED (researched 2026-07-08).
 * Honest verdict: NO major FSM vendor has rental-specific features (reservations,
 * availability calendars, rental-contract billing) — verified absent from all six
 * vendors' industries/features pages. The page recommends dedicated rental platforms
 * (Point of Rental, Booqable, EZRentOut, Quipli) for the rental side and positions
 * FSM tools ONLY for the service/delivery side of a rental fleet.
 * Only Jobber and Housecall Pro publish starting prices (annual-billing rates).
 */
export const equipmentRental: Industry = {
  slug: 'equipment-rental',
  name: 'Equipment Rental',
  icon: '🏗️',
  category: 'Specialized',

  answer:
    'For most equipment rental businesses, field service management software is the wrong primary tool: none of the major FSM platforms (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) offers rental-specific features like reservations, availability calendars, or rental-contract billing (checked July 2026). Dedicated rental platforms — Point of Rental, Booqable, EZRentOut, Quipli — handle those natively and should be your starting point. FSM software earns its place on the service side of a rental fleet: delivery and pickup dispatch, per-asset maintenance history, and condition inspections. For that slice, FieldPulse (asset management with serials and barcode scanning) and ServiceTitan (installed-equipment records, enterprise dispatch) are the strongest picks — both custom-quoted — while smaller rental-and-repair shops can use Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually). Expect FSM plans of $29–$299/month with annual billing, budgeted alongside a rental platform for contracts.',

  intro:
    'Equipment rental blends asset management with field service: every generator, lift, or compressor is a revenue-earning unit that has to be delivered, maintained, inspected on return, and turned around fast. Rental contracts, reservations, and availability live in dedicated rental software — no major FSM platform covers them. What FSM tools do well is the field side: scheduling deliveries and pickups, tracking each unit’s service history, and capturing condition and damage inspections with photos. The practical setup for most rental operators is a rental platform for the money side, paired with (or replaced by) an FSM tool only where field service is the bigger part of the business.',

  keyFeatures: [
    'Per-unit asset tracking with serials, barcodes, and maintenance history',
    'Delivery and pickup scheduling with dispatch',
    'Condition / damage inspection at check-out and check-in with photos',
    'Custom inspection forms with photo and signature capture',
    'Mobile app for drivers and techs to log deliveries, parts, and signatures',
    'Accounting sync (pairs with dedicated rental-contract software for billing)',
  ],

  priceRange: {
    min: 29,
    max: null,
    note: 'FSM covers only the service side of a rental business. ServiceTitan, FieldPulse, Workiz, and Commusoft are custom-quoted; Jobber publishes plans from $29/mo and Housecall Pro from $59/mo (annual billing). Rental-contract billing needs dedicated rental software (Point of Rental, Booqable, EZRentOut, Quipli).',
    structured: false,
  },

  search: { monthlyVolume: 50, kd: 5, cpc: null },

  providers: [
    { slug: 'fieldpulse', positioning: 'Best FSM pick for the service side — asset records with serials + barcodes', monthlyFromUsd: null },
    { slug: 'servicetitan', positioning: 'Best for large fleets — installed-equipment records + enterprise dispatch', monthlyFromUsd: null },
    { slug: 'commusoft', positioning: 'Multi-site asset service history with QR/barcode lookup', monthlyFromUsd: null },
    { slug: 'housecall-pro', positioning: 'Best for small rental-and-repair shops needing published pricing', monthlyFromUsd: 59 },
    { slug: 'jobber', positioning: 'Most affordable published plan (no native asset tracking)', monthlyFromUsd: 29 },
  ],

  faqs: [
    {
      question: 'What software do equipment rental companies use?',
      answer:
        'For rental contracts, reservations, and availability, rental businesses use dedicated platforms like Point of Rental, Booqable, EZRentOut, or Quipli — no major FSM tool covers those (checked July 2026). FSM software like FieldPulse or ServiceTitan is added for the service side: delivery dispatch, per-asset maintenance history, and inspections.',
    },
    {
      question: 'Does FSM software replace rental-inventory software?',
      answer:
        'No. None of the six major FSM platforms — Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft — offers reservations, availability calendars, or rental-contract billing. FSM handles the field service side only; contracts and availability need a dedicated rental platform.',
    },
    {
      question: 'Can FSM software track maintenance on my rental fleet?',
      answer:
        'Yes. FieldPulse Asset Management (serials, warranties, barcode scanning), ServiceTitan Installed Equipment, Commusoft asset maintenance, and Workiz Equipment Tracking all keep per-unit service history. Jobber has no native asset tracking. Maintenance triggered by meter or engine hours is rare in FSM tools — confirm it in a demo.',
    },
    {
      question: 'How much does equipment rental field service software cost?',
      answer:
        'On the FSM side, ServiceTitan, FieldPulse, and Commusoft are custom-quoted; published entry points are Jobber from $29/month and Housecall Pro from $59/month (annual billing). Dedicated rental platforms are priced separately — budget for both if you run a real rental fleet.',
    },
    {
      question: 'Can it capture damage inspections at check-out and return?',
      answer:
        'Yes. FieldPulse, ServiceTitan, and Commusoft include custom form builders with photo and signature capture, so you can build check-out and check-in condition inspections that give you a documented record to resolve disputes and bill repairs.',
    },
  ],

  lastUpdated: '2026-07-08',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-07-08' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-07-08' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-07-08' },
    { name: 'ServiceTitan industries (no rental vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-07-08' },
  ],
}
