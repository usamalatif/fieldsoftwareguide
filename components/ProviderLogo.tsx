'use client'

import { useState } from 'react'

/**
 * Provider logo, self-hosted from /public (e.g. /logos/deel.svg), on a white tile.
 * If no `logo` path is given, or the file is missing/fails to load, it falls back to the
 * brand-colored mono-letter tile. No external requests — fully self-hosted once the file exists.
 */
export function ProviderLogo({
  name,
  logo,
  mono,
  size = 34,
  radius = 9,
}: {
  name: string
  /** Self-hosted logo path under /public, e.g. "/logos/deel.svg". */
  logo?: string
  mono: string
  size?: number
  radius?: number
  /** @deprecated kept for call-site compatibility; no longer used for image fetching. */
  domain?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !logo) {
    return (
      <span
        aria-hidden
        className="flex shrink-0 items-center justify-center font-extrabold text-white"
        style={{ width: size, height: size, borderRadius: radius, background: mono, fontSize: size * 0.44 }}
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden border border-slate-200 bg-white dark:border-slate-700"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        style={{ width: size * 0.72, height: size * 0.72, objectFit: 'contain' }}
      />
    </span>
  )
}
