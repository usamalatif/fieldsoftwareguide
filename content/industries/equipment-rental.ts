import type { Industry } from '@/lib/industries'

/**
 * Equipment Rental — researched 2026-07-08; selected vendor facts rechecked 2026-10-22.
 * Honest verdict: the 2026-07 review did not verify full rental reservation,
 * availability, and contract workflows in the six FSM vendors surveyed. The page recommends dedicated rental platforms
 * (Point of Rental, Booqable, EZRentOut, Quipli) for the rental side and positions
 * FSM tools ONLY for the service/delivery side of a rental fleet.
 * Jobber and Housecall Pro pricing rechecked Oct 22, 2026 (annual-billing rates).
 * 2026-11-07: added the "when rental software is enough" section from official vendor pages
 * (Point of Rental Work Orders, EZRentOut maintenance, Quipli service and repair, Booqable
 * downtime, Wynne mobile work orders); title, H1, URL and keyword targeting unchanged;
 * Jobber and Housecall Pro rates rechecked. datePublished stays omitted (no verified date).
 * 2026-11-11: added the rental-platform comparison table (rentalPlatforms below), built only
 * from each vendor's own feature and pricing pages checked that day; "Not stated" means the
 * cited page does not say, not that the feature is missing. Opening answer shortened.
 */

/** One row of the rental-platform comparison. Every cell comes from the cited vendor pages. */
export type RentalPlatformRow = {
  name: string
  workOrders: string
  scheduling: string
  mobile: string
  customerEquipment: string
  price: string
}

export const rentalPlatformsChecked = 'November 11, 2026'

export const rentalPlatforms: RentalPlatformRow[] = [
  {
    name: 'Point of Rental',
    workOrders: 'Work Orders in POR One (mobile), part of the Advanced feature tier: internal repair, maintenance and service orders',
    scheduling: 'Not stated on the cited page',
    mobile: 'Mobile (POR One); offline use not stated for Work Orders',
    customerEquipment: 'Yes: external work orders for customer-owned equipment',
    price: 'Not published; pricing by quote',
  },
  {
    name: 'EZRentOut',
    workOrders: 'Work orders with deadlines, instructions and assignees; Work Orders are listed on the Premium plan',
    scheduling: 'Recurring maintenance by time interval or usage meters',
    mobile: 'Mobile app; work logs can be added offline and sync later',
    customerEquipment: 'Service Workshop features list maintenance on customer assets; plan not confirmed',
    price: 'Growth $399/mo, Premium $499/mo (billed annually)',
  },
  {
    name: 'Quipli',
    workOrders: 'Work orders with photos and documents, soft-down and hard-down status, and repair cost tracking',
    scheduling: 'By machine hours, time interval or number of rentals',
    mobile: 'Service tickets from desktop or mobile; offline not stated',
    customerEquipment: 'Yes: customer-owned equipment gets full work orders',
    price: 'Core $6,000 per year per location; Plus $10,000',
  },
  {
    name: 'Booqable',
    workOrders: 'No work orders mentioned; downtime blocks mark items unavailable for maintenance or repairs (Grow plan and up)',
    scheduling: 'Scheduled downtime periods',
    mobile: 'Not stated for maintenance',
    customerEquipment: 'Not stated',
    price: 'Grow $69/mo billed yearly ($87 monthly)',
  },
  {
    name: 'Wynne Systems',
    workOrders: 'Native iOS and Android work-order app for field technicians and mechanics, tied to its rental system',
    scheduling: 'Scheduled maintenance and ad-hoc repairs; triggers not stated',
    mobile: 'Runs offline and syncs when back in signal',
    customerEquipment: 'Not stated on the cited page',
    price: 'No price published on its website',
  },
]
export const equipmentRental: Industry = {
  slug: 'equipment-rental',
  name: 'Equipment Rental',
  icon: '🏗️',
  category: 'Specialized',
  metaDescription:
    'Compare field service software for equipment rental maintenance, dispatch, and inspections. Know when dedicated rental software is required.',

  answer:
    'Most equipment rental companies need rental management software first: Point of Rental, Booqable, EZRentOut, and Quipli handle reservations, availability, rental contracts, and billing, and many now include maintenance work orders. Field service management (FSM) software adds technician dispatch, delivery and pickup service work, equipment maintenance, and inspections. FieldPulse and ServiceTitan (custom pricing) are service-side options, and smaller rental-and-repair shops can compare Jobber (from $29/month) and Housecall Pro (from $59/month), both with annual billing as of November 2026. No FSM tool should be assumed to replace a rental platform, so confirm prices, rental features, and integrations with each vendor.',

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
    note: 'This comparison covers field-service tools, not a full rental booking system. Jobber Core starts at $29/mo and Housecall Pro Basic at $59/mo on annual billing (standard rates checked November 7, 2026). FieldPulse requires a custom quote. Prices vary with plan and team size; [field service software pricing](/pricing) shows costs by team size and payment fees for each FSM tool. Dedicated rental software is priced separately.',
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
        strengths: ['Basic plan from $59/mo with annual billing (checked November 7, 2026)', 'Scheduling, dispatch, invoicing, and payments in one app'],
        limitations: ['Per-unit asset tracking was not verified in our review; confirm in a demo'],
      },
    },
    {
      slug: 'jobber',
      positioning: 'Most affordable published plan (no native asset tracking)',
      monthlyFromUsd: 29,
      fit: {
        bestFor: 'Small shops that mainly need quoting, scheduling, and invoicing',
        strengths: ['Core plan from $29/mo with annual billing (checked November 7, 2026)', 'Quoting, scheduling, invoicing, and payments'],
        limitations: ['No native per-unit asset tracking (July 2026 review)'],
      },
    },
  ],

  extraSections: [
    {
      id: 'rental-software-enough',
      heading: 'When rental software is enough, and when you need separate FSM software',
      paragraphs: [
        'Many rental platforms now cover a large part of the service department. Point of Rental says Work Orders for Point of Rental One, part of its Advanced tier, let mobile users create internal repair, maintenance, and service orders and handle external work orders for customer-owned equipment. EZRentOut lists work orders, preventive maintenance by time interval or usage, QR-code lookups, and offline work logs in its mobile app. Quipli tracks work orders, repair and maintenance costs, soft-down and hard-down status, and machine hours. Booqable lets you block out downtime for maintenance and repairs, and Wynne Systems offers a mobile work-order app tied to its rental system that runs offline. These are the vendors’ own descriptions, and features vary by plan, so confirm what your tier includes.',
        'Rental software is usually enough when most service happens in your own yard or shop: check-in inspections, scheduled maintenance, and repairs that put a unit back on rent. Customer-site work does not automatically mean a second product either, because some rental platforms include field tools, such as Point of Rental’s external work orders for customer-owned equipment and Wynne’s offline mobile work-order app. Evaluate those first. A separate field service tool earns its place when they fall short on what your technicians do at customer sites, for example dispatching on-site breakdown calls, routing several technicians across many addresses, running recurring service agreements, or collecting invoices and payments on the job.',
        'Before you add a second system, ask your rental vendor which of these jobs its plan covers, then check whether work orders and invoices from a field service tool would sync back to your rental and accounting systems. Two systems that do not share records mean double entry. To compare field service tools by team size and published price, see [field service software by business size](/by-size).',
      ],
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
        'Yes. FieldPulse Asset Management (serials, warranties, barcode scanning), ServiceTitan Installed Equipment, Commusoft asset maintenance, and Workiz Equipment Tracking all keep per-unit service history. Jobber has no native asset tracking. Maintenance triggered by meter or engine hours is rare in FSM tools — confirm it in a demo. Some rental platforms document it directly: EZRentOut schedules maintenance by usage, and Quipli by machine hours, time interval, or rental count.',
    },
    {
      question: 'Is rental management software enough without separate FSM software?',
      answer:
        'Often, especially if most service happens in your own shop. Point of Rental (Work Orders on its Advanced tier), EZRentOut, and Quipli all document maintenance work orders, and Booqable lets you schedule repair downtime. For customer-site work, check your rental platform’s own field tools first: Point of Rental handles external work orders for customer-owned equipment, and Wynne offers an offline mobile work-order app. Add separate field service software only if those tools fall short on dispatch, multi-stop routing, recurring service agreements, or payments collected on the job, and check whether the two systems sync.',
    },
    {
      question: 'How much does equipment rental field service software cost?',
      answer:
        'Jobber Core starts at $29/month and Housecall Pro Basic at $59/month with annual billing (verified November 2026). FieldPulse uses custom quotes. Other vendor costs and rental-platform subscription fees are separate; compare the full cost before buying.',
    },
    {
      question: 'Can it capture damage inspections at check-out and return?',
      answer:
        'Digital inspection and service forms can help document damage on check-out and return. FieldPulse offers custom forms, but confirm photo capture, signatures, offline use, and whether inspections connect to your rental contract system during a demo.',
    },
  ],

  lastUpdated: '2026-11-11',
  dataVerified: true,
  sources: [
    { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-07' },
    { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-07' },
    { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-22' },
    { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
    { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
    { name: 'FieldPulse custom forms', url: 'https://www.fieldpulse.com/features/custom-forms', checked: '2026-10-22' },
    { name: 'FieldPulse custom pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-10-22' },
    { name: 'Point of Rental rental software', url: 'https://www.point-of-rental.com/', checked: '2026-10-22' },
    { name: 'Booqable rental bookings and contracts', url: 'https://booqable.com/', checked: '2026-10-22' },
    { name: 'Quipli equipment rental workflows', url: 'https://www.quipli.com/', checked: '2026-10-22' },
    { name: 'ServiceTitan industries (no rental vertical)', url: 'https://www.servicetitan.com/industries', checked: '2026-07-08' },
    { name: 'Point of Rental: Work Orders for Point of Rental One (Advanced tier)', url: 'https://www.point-of-rental.com/press-release/point-of-rental-elite-introduces-work-orders-for-por-one/', checked: '2026-11-11' },
    { name: 'EZRentOut maintenance management', url: 'https://ezo.io/ezrentout/solutions/maintenance-management/', checked: '2026-11-11' },
    { name: 'Quipli service and repair', url: 'https://www.quipli.com/solutions/equipment-rental-maintenance-software/', checked: '2026-11-11' },
    { name: 'Booqable downtime scheduling (Dec 3, 2025)', url: 'https://booqable.com/whats-new/december_03_2025/', checked: '2026-11-11' },
    { name: 'Wynne Systems field service for rental equipment', url: 'https://wynnesystems.com/field-service-management-for-all-your-rental-equipment/', checked: '2026-11-11' },
    { name: 'Point of Rental pricing (quote only)', url: 'https://www.point-of-rental.com/pricing/', checked: '2026-11-11' },
    { name: 'EZRentOut pricing', url: 'https://ezo.io/ezrentout/pricing/', checked: '2026-11-11' },
    { name: 'Quipli pricing', url: 'https://www.quipli.com/pricing', checked: '2026-11-11' },
    { name: 'Booqable pricing', url: 'https://booqable.com/pricing/', checked: '2026-11-11' },
  ],
}
