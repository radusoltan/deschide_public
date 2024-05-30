import { NextResponse } from "next/server"
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/i18n/settings";

acceptLanguage.languages(languages)

export const config = {
  matcher: '/:locale*'
}

const cookieName = 'i18next'

export const middleware = (req) => {
  let locale
  if (req.cookies.has(cookieName)) locale = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!locale) locale = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!locale) locale = fallbackLng

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, req.url))
  }
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }
  return NextResponse.next()
}