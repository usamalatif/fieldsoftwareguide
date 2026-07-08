import Link from 'next/link'

export interface Crumb {
  name: string
  href: string
}

/** Visual breadcrumb. Pair with <BreadcrumbJsonLd> for schema. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-slate-500 dark:text-slate-400">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-indigo-600">
                  {item.name}
                </Link>
              )}
              {!last && <span aria-hidden className="text-slate-300">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
