import Link from 'next/link'
import type { Metadata } from 'next'

// 404s must never be indexed.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        We couldn&rsquo;t find that page. It may have moved, or the industry guide isn&rsquo;t
        published yet.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800"
        >
          Go home
        </Link>
        <Link
          href="/by-industry"
          className="rounded-lg border border-slate-200 dark:border-slate-800 px-5 py-2.5 font-semibold text-slate-900 dark:text-white hover:border-orange-300"
        >
          Browse industries
        </Link>
      </div>
    </div>
  )
}
