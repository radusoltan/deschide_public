"use client"
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {useParams } from "next/navigation";
import Link from "next/link";
import {useCategories} from "@/hooks/categories";
import logo from '../../public/logo.svg'
import Image from 'next/image'
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({locale}) {

  const params = useParams()
  const {items} = useCategories({locale})

  const categories = items?.data.map(category=>({
    name: category.title,
    href: `/${locale}/articles/${category.slug}`,
    current: params.category && params.category === category.slug
  }))


  return <Disclosure as="nav" className="bg-white">
    {({ open }) => (
        <>
          <div className="mx-auto px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5"/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <FontAwesomeIcon icon={faXmark} className="block h-6 w-6" aria-hidden="true"/>

                  ) : (
                      <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />

                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={`/${locale}`}>
                    <Image priority src={logo} alt="Deschide.MD" width={50}/>
                  </Link>
                </div>
              </div>
              <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                {/* Language switcher */}
                <LanguageSwitcher locale={locale}/>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">

              {categories?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-500 text-white' :
                    'text-gray-500 hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
    )}
  </Disclosure>
}
