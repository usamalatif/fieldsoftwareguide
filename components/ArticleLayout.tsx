import { Breadcrumb, type Crumb } from './Breadcrumb'
import { AnswerBlock } from './AnswerBlock'
import { AuthorBio } from './AuthorBio'
import { AdUnit } from './AdUnit'

/**
 * Editorial article shell: Breadcrumb → H1 → AnswerBlock → ad → prose → AuthorBio.
 * Prose capped at the 720px reading measure.
 */
export function ArticleLayout({
  title,
  crumbs,
  answer,
  lastUpdated,
  children,
  showTopAd = true,
}: {
  title: string
  crumbs: Crumb[]
  answer: React.ReactNode
  lastUpdated?: string
  children: React.ReactNode
  showTopAd?: boolean
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-8 md:px-6">
      <Breadcrumb items={crumbs} />
      <h1 className="mt-4 text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-slate-900 dark:text-white md:text-[34px]">
        {title}
      </h1>
      <div className="mt-5">
        <AnswerBlock lastUpdated={lastUpdated}>{answer}</AnswerBlock>
      </div>
      {showTopAd && <AdUnit slot="0000000001" format="leaderboard" />}
      <div className="prose-body mt-6">{children}</div>
      <AuthorBio />
    </article>
  )
}
