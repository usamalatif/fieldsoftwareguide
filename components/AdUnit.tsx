'use client'

import { useEffect } from 'react'
import { site } from '@/lib/site'

/**
 * CLS-safe AdSense slot. Reserves fixed dimensions BEFORE the ad loads.
 * Pre-approval (site.adsenseClient == null) renders the hatch placeholder.
 */
type Format = 'leaderboard' | 'rectangle' | 'mpu'

const dims: Record<Format, { w: number; h: number; label: string }> = {
  leaderboard: { w: 728, h: 90, label: '728 × 90' },
  rectangle: { w: 336, h: 280, label: '336 × 280' },
  mpu: { w: 300, h: 250, label: '300 × 250' },
}

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export function AdUnit({
  slot,
  format = 'leaderboard',
  note = '',
  className = '',
}: {
  slot: string
  format?: Format
  note?: string
  className?: string
}) {
  const client = site.adsenseClient
  const { w, h, label } = dims[format]

  useEffect(() => {
    if (!client) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* not ready, safe to ignore */
    }
  }, [client])

  return (
    <div className={`mx-auto my-9 ${className}`} style={{ maxWidth: '100%', width: w }}>
      <div
        style={{ height: h }}
        className="flex w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-[10px]"
      >
        {client ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: h }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center rounded-[10px] border border-dashed border-slate-300"
            style={{
              background:
                'repeating-linear-gradient(135deg,#FAFBFC,#FAFBFC 10px,#F4F6F9 10px,#F4F6F9 20px)',
            }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Advertisement
            </span>
            <span className="mt-0.5 text-[11px] text-slate-400">
              {label}
              {note ? ` · ${note}` : ' · reserved (no layout shift)'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
