"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {Navigation} from "@/components/Navigation";

export const Header = ({locale})=>{

  return <header>
    <div className="hidden md:flex items-center last:mr-0 bg-gray-200 h-16">
      <div className="flex w-1/3  border-e-2 border-gray-300">
        <a className="text-gray700 mx-auto px-4" href="https://docs.google.com/presentation/d/1Jw6tfB1cCa87mNzNAe8YkCa3QE7c2-yECUYtLyUWXJc/pub?start=false&loop=false&delayms=3000#slide=id.p4">
          <span >Publicitate</span>
        </a>

        <span className="p-3 border-e-2"/>
      </div>
      <div className="flex mx-auto w-2/3">

        <a href="https://www.facebook.com/DeschideStirea/">
          <FontAwesomeIcon className="max-h-5 text-blue-800 px-5 hover:text-red-700" icon={faFacebookF}/>
        </a>

          <a href="https://twitter.com/DeschideMD">
            <FontAwesomeIcon className="max-h-5 text-blue-500 px-5 hover:text-red-700" icon={faTwitter}/>  
          </a>

          <a href="https://t.me/deschide_md"><FontAwesomeIcon className="max-h-5 px-5 text-blue-400 hover:text-red-700" icon={faTelegram}/></a>
          
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