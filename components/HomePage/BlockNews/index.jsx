"use client"
import { useHomePageData} from "@/hooks/articles";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import {ArticleItem} from "@/components/HomePage/BlockNews/ArticleItem";
import {useState} from "react";
import {useTranslation} from '@/i18n/client'

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
              <span className="inline-block h-5 border-l-2 border-red-600 mr-2"></span>{t('homepage.last_news')}
            </h2>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3">
          {articles}

        </div>
      </div>
    </div>
  </div>
}