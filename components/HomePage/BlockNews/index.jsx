"use client"
import { useHomePageData} from "@/hooks/articles";
import Image from "next/image";
import {ArticleItem} from "@/components/HomePage/BlockNews/ArticleItem";

import {useTranslation} from '@/i18n/client'
import add_image from "@/public/img/ads/250.jpg"

export const BlockNews = ({locale}) => {

  const page = 1

  const {t } = useTranslation();

  const {lastArticles} = useHomePageData({locale})
  const articles = lastArticles?.lastPublishedArticles?.map((article,index)=>(<ArticleItem article={article} locale={locale} key={index}index />))
  return <div className="bg-white">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        {/* Left */}
        <div className="flex-shrink max-w-full w-full lg:w-2/3">
          <div className="w-full py-3">
            <h2 className="text-gray-800 text-2xl font-bold font-category">
              <span className="inline-block h-5 border-x-4 border-red-600 mr-2"></span>{t('homepage.last_news')}
            </h2>
          </div>
          <div className="flex flex-row flex-wrap -mx-3">
            {articles}
          </div>
        </div>

        {/* Right */}
        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
          <div className="w-full bg-gray-50 h-full">
            <div className="text-sm py-6 sticky top-0">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <Image className="mx-auto" src={add_image} alt="advertisement area"/>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
}