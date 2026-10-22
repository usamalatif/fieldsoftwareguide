import type { Industry } from '@/lib/industries'

/**
 * Equipment Rental — researched 2026-07-08; selected vendor facts rechecked 2026-10-22.
 * Honest verdict: the 2026-07 review did not verify full rental reservation,
 * availability, and contract workflows in the six FSM vendors surveyed. The page recommends dedicated rental platforms
 * (Point of Rental, Booqable, EZRentOut, Quipli) for the rental side and positions
 * FSM tools ONLY for the service/delivery side of a rental fleet.
 * Jobber and Housecall Pro pricing rechecked Oct 22, 2026 (annual-billing rates).
 */
export const equipmentRental: Industry = {
  slug: 'equipment-rental',
  name: 'Equipment Rental',
  icon: '🏗️',
  category: 'Specialized',

  answer:
    'Field service management software for equipment rental companies helps manage equipment maintenance, technician dispatch, delivery and pickup service work, and inspections. However, most rental businesses also need dedicated rental management software for reservations, equipment availability, rental contracts, and billing. For rental bookings and inventory management, platforms such as Point of Rental, Booqable, EZRentOut, and Quipli are worth evaluating. For field maintenance operations, FieldPulse and ServiceTitan are service-side options, but neither should be assumed to replace a dedicated rental platform. Smaller rental-and-repair businesses can also compare Jobber and Housecall Pro for scheduling, invoicing, and technician management. As of October 2026, Jobber starts at $29/month and Housecall Pro at $59/month with annual billing, while FieldPulse offers custom pricing. Confirm current prices, rental-specific capabilities, and integrations directly with vendors before choosing a solution.',

  intro:
    'Equipment rental combines asset availability, reservations, delivery, inspections, and maintenance. Dedicated rental software usually manages availability, rental contracts, and rental billing. Field service management (FSM) software focuses on scheduling technicians, tracking service work, and documenting asset maintenance. A rental operator may use both categories when the service workload justifies it, but integrations, condition-inspection workflows, and total software cost should be verified before adopting a second platform.',

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
    note: 'This comparison covers field-service tools, not a full rental booking system. Jobber Core starts at $29/mo and Housecall Pro Basic at $59/mo on annual billing (standard rates checked October 22, 2026). FieldPulse requires a custom quote. Prices vary with plan and team size. Dedicated rental software is priced separately.',
    structured: false,
  },

  search: { monthlyVolume: 50, kd: 5, cpc: null },

  // Six FSM vendors researched in July 2026 (incl. Workiz); five shortlisted below.
  reviewedCount: 6,

  // Fit notes use only claims backed by the sources below or the July 2026 research.
  providers: [
    {
      slug: 'fieldpulse',
      positioning: 'Service-side option — equipment history and barcode-based asset lookup',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Rental fleets that want per-unit service records alongside a rental platform',
        strengths: [
          'Asset Management with serial numbers, warranties, and barcode scanning',
          'Custom forms for check-out and return inspection checklists',
        ],
        limitations: ['Custom quote only; no published price', 'Confirm photo, signature, and offline form support in a demo'],
      },
    },
    {
      slug: 'servicetitan',
      positioning: 'Larger service operations — installed-equipment records + enterprise dispatch',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Larger operations with a dedicated in-house service team',
        strengths: ['Installed Equipment records for per-unit service history', 'Enterprise-grade dispatch and operations tooling'],
        limitations: ['Custom quote only; no published price', 'No equipment rental vertical on its industries page (checked July 2026)'],
      },
    },
    {
      slug: 'commusoft',
      positioning: 'Multi-site asset service history with QR/barcode lookup',
      monthlyFromUsd: null,
      fit: {
        bestFor: 'Operators tracking service history for assets across several sites',
        strengths: ['Asset maintenance records with service history per asset', 'QR/barcode lookup for individual assets'],
        limitations: ['Custom quote only; no published price', 'Built mainly for heating, plumbing, and HVAC trades; confirm fit for rental equipment'],
      },
    },
    {
      slug: 'housecall-pro',
      positioning: 'Small rental-and-repair shops that want published pricing',
      monthlyFromUsd: 59,
      fit: {
        bestFor: 'Small rental-and-repair shops that want a published price',
        strengths: ['Basic plan from $59/mo with annual billing (checked October 22, 2026)', 'Scheduling, dispatch, invoicing, and payments in one app'],
        limitations: ['Per-unit asset tracking was not verified in our review; confirm in a demo'],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Most affordable published plan (no native asset tracking)',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small shops that mainly need quoting, scheduling, and invoicing',
        strengths: ['Core plan from $29/mo with annual billing (checked October 22, 2026)', 'Quoting, scheduling, invoicing, and payments'],
        limitations: ['No native per-unit asset tracking (July 2026 review)'],
      },
    },
  ],

  faqs: [
    {
      question: 'What software do equipment rental companies use?',
      answer:
        'For rental availability, contracts, and reservations, consider dedicated platforms such as Point of Rental, Booqable, EZRentOut, or Quipli. In our July 2026 review we researched six FSM vendors (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, and Commusoft) and shortlisted five for this page. They were evaluated for dispatch, inspections, and equipment maintenance rather than full rental management.',
    },
    {
      question: 'Does FSM software replace rental-inventory software?',
      answer:
        'Not as a general assumption. We did not verify complete rental-inventory and contract workflows in any of the six FSM tools we researched in July 2026, including the five shortlisted here. Compare your reservation, inventory availability, and rental-contract needs against a dedicated rental platform before choosing an FSM tool.',
    },
    {
      question: 'Can FSM software track maintenance on my rental fleet?',
      answer:
        'Yes. FieldPulse Asset Management (serials, warranties, barcode scanning), ServiceTitan Installed Equipment, Commusoft asset maintenance, and Workiz Equipment Tracking all keep per-unit service history. Jobber has no native asset tracking. Maintenance triggered by meter or engine hours is rare in FSM tools — confirm it in a demo.',
    },
    {
      question: 'How much does equipment rental field service software cost?',
      answer:
        'Jobber Core starts at $29/month and Housecall Pro Basic at $59/month with annual billing (verified October 2026). FieldPulse uses custom quotes. Other vendor costs and rental-platform subscription fees are separate; compare the full cost before buying.',
    },
    {
      question: 'Can it capture damage inspections at check-out and return?',
      answer:
        'Digital inspection and service forms can help document damage on check-out and return. FieldPulse offers custom forms, but confirm photo capture, signatures, offline use, and whether inspections connect to your rental contract system during a demo.',
    },
  ],

  // Planned update date; replace with actual deployment date if published later.
  lastUpdated: '2026-10-22',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-22' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-22' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-10-22' },
    { name: 'FieldPulse custom pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-10-22' },
    { name: 'Point of Rental rental software', url: 'https://www.point-of-rental.com/', checked: '2026-10-22' },
    { name: 'Booqable rental bookings and contracts', url: 'https://booqable.com/', checked: '2026-10-22' },
    { name: 'Quipli equipment rental workflows', url: 'https://www.quipli.com/', checked: '2026-10-22' },
    { name: 'ServiceTitan industries (no rental vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-07-08' },
  ],
}
