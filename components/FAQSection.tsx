'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

/**
 * Accordion FAQ. Item 0 open by default; multiple can be open. Content stays in the
 * DOM (SEO + schema). Pair with <FAQJsonLd>.
 */
export function FAQSection({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
      {items.map((item, i) => {
        const isOpen = !!open[i]
        return (
          <div key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
            <h3 className="m-0 text-base font-bold">
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-bold text-slate-900 dark:text-white">{item.question}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isOpen ? '#4F46E5' : '#94A3B8'}
                  strokeWidth="2.4"
                  aria-hidden
                  className="shrink-0 transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? 360 : 0 }}
            >
              <p className="max-w-[720px] px-6 pb-5 text-[15px] leading-[1.68] text-slate-600 dark:text-slate-300">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
