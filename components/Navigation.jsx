"use client"
import { Fragment } from 'react'
import {
  Disclosure,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logo from "@/public/logo.svg"

import {useCategories} from "@/hooks/categories";
import {useParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Navigation = ({locale})=>{

  const params = useParams()

  const {items} = useCategories({locale})

  const arr =items?.data.filter(category=>category.in_menu)

  const categories = arr?.map((category)=> {

    return category.in_menu && ({
      id: Number(category.id),
      name: category.title,
      href: `/${locale}/articles/${category.slug}`,
      current: params.category && params.category === category.slug,
    })
  })

  return <Disclosure as="nav" className="bg-white">
    {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sticky top-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-2 sm:block">
                  <div className="flex sm:space-x-2 flex-wrap">
                    {categories?.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-2 py-2 text-md font-new font-bold'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {categories?.map((item) => (
                  <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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