'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Lightweight cookie/ads consent notice (AdSense prerequisite — disclose cookie use).
 * Stores acceptance in localStorage. NOTE: for personalized ads to EEA/UK visitors,
 * Google requires a certified Consent Management Platform (CMP); this banner is the
 * baseline disclosure and should be upgraded to a CMP before serving EEA personalized ads.
 */
export function CookieConsent({ privacyHref = '/privacy' }: { privacyHref?: string }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookie-consent')) setShow(true)
    } catch {
      /* ignore */
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem('cookie-consent', 'accepted')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  if (!show) return null
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(15,23,42,.4)] dark:border-slate-700 dark:bg-slate-900 sm:flex sm:items-center sm:gap-4">
      <p className="text-[13px] leading-[1.55] text-slate-600 dark:text-slate-300">
        We use cookies for analytics and advertising. By continuing you agree to this. See our{' '}
        <Link href={privacyHref} className="font-semibold text-indigo-600 dark:text-indigo-300">
          privacy policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 h-10 w-full shrink-0 rounded-lg bg-indigo-600 px-5 text-sm font-bold text-white hover:bg-indigo-700 sm:mt-0 sm:w-auto"
      >
        Accept
      </button>
    </div>
  )
}
