"use client"

import {useParams} from "next/navigation";
import {useArticles} from "@/hooks/articles";
import {ArticleItem} from "@/components/Homepage/LatestNews/ArticleItem";
import Link from "next/link";

export const LatestNews = () => {
const {locale} = useParams()
const {lastArticles, lastArticlesLoading} = useArticles({locale})


  if (lastArticlesLoading) return <>LOADING ...</>

  return <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pb-10 order-first">
    <div className="w-full py-3">
      <h2 className="text-2xl font-bold font-category mb-6">
        {/*<span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>*/}
        {

        locale === "ro" ? <span className="bg-red-600 p-3 rounded text-white">Ultimele Știri</span> :
            locale === "ru" ? "Последние Новости" :
                "Last News"

      }
      </h2>
    </div>
    <div className="w-full bg-white sticky top-0 mr-6">
      <div className="mb-6">
        <div className="flex flex-row flex-wrap -mx-3">
          {
            lastArticles.lastPublishedArticles.map((article, index) => <ArticleItem key={index} article={article._source}/>)
          }
          <span className="w-full mt-6"/>
          <Link href={`/${locale}/articles/all?page=1&limit=15`}
                className="w-full text-center font-light text-gray-500 p-5 hover:bg-gray-300 hover:text-gray-500 mx-auto mb-6">More
            News</Link>
        </div>
      </div>
    </div>
  </div>
}