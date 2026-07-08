/**
 * Global site configuration. Single source of truth for brand/SEO/monetization IDs.
 * Update adsenseClient once your AdSense account is approved.
 */
export const site = {
  name: 'FieldSoftwareGuide',
  shortName: 'FieldSoftwareGuide',
  url: 'https://fieldsoftwareguide.com',
  description:
    'Independent field service management (FSM) software comparison by industry and business size. Real pricing, feature differences, and the best FSM software for HVAC, plumbing, electrical, and other trades.',
  locale: 'en_US',
  twitter: '@fieldsoftwareguide',
  // Author/E-E-A-T defaults (override per article where relevant)
  publisher: 'FieldSoftwareGuide',
  // ── Monetization ────────────────────────────────────────────────
  // Replace with your real AdSense publisher ID once approved (ca-pub-XXXXXXXXXXXXXXXX).
  // Leave as null to render NO ad markup (clean dev/preview, avoids policy issues pre-approval).
  adsenseClient: null as string | null,
  // Google Analytics 4 measurement ID (gtag.js). Null = no analytics markup.
  gaMeasurementId: 'G-VFL6YGR44D' as string | null,
  // ── Nav ─────────────────────────────────────────────────────────
  nav: [
    { label: 'By Industry', href: '/by-industry' },
    { label: 'By Size', href: '/by-size' },
    { label: 'Compare', href: '/compare' },
    { label: 'Free', href: '/free' },
    { label: 'Guides', href: '/guides' },
  ],
} as const

export type SiteConfig = typeof site
