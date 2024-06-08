"use client"
import {useHomePageData} from "@/hooks/articles";
import {ArticleItem} from "@/components/ArticleItem";
import Link from "next/link";

export const LatestNews = ({locale}) => {

  const {lastArticles} = useHomePageData({locale})

  return <div className="flex flex-row flex-wrap -mx-3">
    {
      lastArticles?.lastPublishedArticles?.map((article, index) => (
          <ArticleItem article={article} locale={locale} key={index}/>
      ))
    }
    <span className="w-full border-b-2 mt-10"/>
    <Link href={`/${locale}/articles/all?page=1&limit=15`}
          className="w-full text-center font-light text-gray-500 p-5 hover:bg-gray-300 hover:text-gray-500 mx-auto">More
      News</Link>
  </div>

}