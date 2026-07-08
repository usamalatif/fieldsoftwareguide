import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import '../globals.css'
import { site } from '@/lib/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { CookieConsent } from '@/components/CookieConsent'
import { locales, isLocale, localizePath, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Field Service Management Software Comparison`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F17' },
  ],
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale as Locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {site.adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {site.gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-white antialiased dark:bg-[#0B0F17]">
        <Header locale={locale as Locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <CookieConsent privacyHref={localizePath(locale as Locale, '/privacy')} />
      </body>
    </html>
  )
}
