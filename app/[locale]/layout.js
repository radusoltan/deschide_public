import {PT_Serif, League_Spartan, Poppins} from "next/font/google";
import "../globals.css";
import { dir } from 'i18next'
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const lora = Poppins({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: "--text-font",
});
const titleFont = League_Spartan({
  subsets: ['latin', 'latin-ext'],
  weight: ['400','500','600','700'],
  variable: "--title-font",
})

const titleCategory = PT_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: "--title-category",
})

export const metadata = {
  title: "Deschide.MD",
  description: "Portal de stiri din Republica Moldova",
  openGraph: {
    title: 'Deschide.MD',
    description: 'Portal de stiri din Republica Moldova',
    url: 'https://deschide.md',
    siteName: 'Deschide.MD',
    images: [
      // {
      //   url: 'https://nextjs.org/og.png', // Must be an absolute URL
      //   width: 800,
      //   height: 600,
      // },,
    ],
    locale: 'ro',
    type: 'website',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ro': '/ro',
      'ru': '/ru',
    },
  },
};

export default async function RootLayout({ children, params: { locale } }) {

  return (
    <html lang={locale} dir={dir(locale)}>
    <body className={`${titleFont.variable} ${lora.variable} ${titleCategory.variable}`}>
    <GoogleTagManager gtmId="GTM-PGQJHFTQ" />
    <GoogleAnalytics gaId="G-7E5YRG7F5M" />
    <Header locale={locale} />

    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}
