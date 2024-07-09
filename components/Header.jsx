"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {Navigation} from "@/components/Navigation";
import Image from "next/image";
import logo from '@/public/logo-22.png'
import Link from "next/link";

export const Header = ({locale})=>{

  return <header className="xl:container mx-auto px-4 sm:px-4 xl:px-2">
    <div className="flex items-center last:mr-0 bg-white h-16">

      <div className="flex mx-auto w-2/3">

        <a href="https://www.facebook.com/DeschideStirea/">
          <FontAwesomeIcon className="max-h-5 text-blue-800 px-5 hover:text-red-700" icon={faFacebookF}/>
        </a>

          <a href="https://twitter.com/DeschideMD">
            <FontAwesomeIcon className="max-h-5 text-blue-500 px-5 hover:text-red-700" icon={faTwitter}/>
          </a>

          <a href="https://t.me/deschide_md"><FontAwesomeIcon className="max-h-5 px-5 text-blue-400 hover:text-red-700" icon={faTelegram}/></a>

      </div>
      <div className="w-full items-center">
        <Link href={`/${locale}`}>
          <Image src={logo} alt="logo" className="h-8 w-auto" />
        </Link>
      </div>
      <div className="flex w-1/3">
        <LanguageSwitcher locale={locale}/>
      </div>
    </div>
    <div className="sticky">
      <Navigation locale={locale}/>
    </div>
  </header>
}