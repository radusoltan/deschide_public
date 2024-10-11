import {Menu, Transition} from "@headlessui/react";
import { Fragment } from 'react'
import "flag-icons/css/flag-icons.min.css";
import {languages} from "@/i18n/settings";
import {useParams, usePathname, useRouter} from "next/navigation";
import i18nConfig from "@/i18nConfig";
import { useTranslation } from 'react-i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const LanguageSwitcher = ({locale}) => {
  const selectedLanguage = languages.find(language=>language===locale)
  const currentPathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;


  const FlagIcon = ({countryCode}) => {
    if (countryCode === 'en'){
      countryCode = "gb"
    }

    return <span className={`fi fis fiCircle inline-block mr-2 fi-${countryCode}`} />
  }
  const handleLanguageChange = locale => {
    const newLocale = locale;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  return !params.article && <Menu as="div" className="relative">
    <div>
      <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Open user menu</span>
        <FlagIcon countryCode={selectedLanguage}/>
        {selectedLanguage}
        <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
          <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
          />
        </svg>
      </Menu.Button>
    </div>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-700"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {languages.map(language=>(
            <button
                key={language}
                onClick={()=>handleLanguageChange(language)}
                className={classNames(selectedLanguage === language ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              <FlagIcon countryCode={language}/>

              <span className="truncate">{language}</span>
            </button>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
}