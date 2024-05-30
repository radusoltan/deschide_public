import {Lora, Roboto_Slab, PT_Serif} from "next/font/google";
import "../globals.css";
import { dir } from 'i18next'
import Navigation from "@/components/Navigation";
import {Footer} from "@/components/Footer";
import {AnimatePresence} from "framer-motion";

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

    <header className="">

      <Navigation locale={locale}/>
    </header>

      <main>{children}</main>


    <Footer/>
    <a href="#"
       className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
    >
      TOP
    </a>
    </body>
    </html>
  );
}
