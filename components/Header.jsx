"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";

export const Header = ({locale})=>{

  return <header>
    <div className="hidden md:flex items-center last:mr-0 bg-gray-200 h-16">
      <div className="flex w-1/3">
        <span className="text-gray700 mx-auto">Publicitate</span>
        <span className="p-3 border-e-2"/>
      </div>
      <div className="flex mx-auto w-2/3">
        <a href="#">
          <FontAwesomeIcon className="max-h-5 text-blue-800 px-5 hover:text-red-700" icon={faFacebookF}/>
          <FontAwesomeIcon className="max-h-5 text-blue-500 px-5 hover:text-red-700" icon={faTwitter}/>

          <FontAwesomeIcon className="max-h-5 px-5 text-blue-400 hover:text-red-700" icon={faTelegram}/>
        </a>
      </div>
      <div className="flex w-1/3">
        <LanguageSwitcher locale={locale}/>
      </div>
    </div>
    <div className="sticky">
      {/*<Navigation locale={locale}/>*/}
    </div>
  </header>
}