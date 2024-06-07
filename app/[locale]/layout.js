import {Lora, Roboto_Slab, PT_Serif} from "next/font/google";
import "../globals.css";
import { dir } from 'i18next'
import Navigation from "@/components/Navigation";
import {Footer} from "@/components/Footer";
import {AnimatePresence} from "framer-motion";
import {Header} from "@/components/old/Header";

const lora = Lora({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: "--text-font",
});
const titleFont = Roboto_Slab({
  subsets: ['latin'],
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
};

export default async function RootLayout({ children, params: { locale } }) {

  return (
    <html lang={locale} dir={dir(locale)}>
    <body className={`${titleFont.variable} ${lora.variable} ${titleCategory.variable}`}>

    <Header locale={locale} />

    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}
