"use client"
import {useHomePageData} from "@/hooks/articles";
import {ArticleItem} from "@/components/ArticleItem";

export const LatestNews = ({locale}) => {

  const {lastArticles} = useHomePageData({locale})

  return <div className="flex flex-row flex-wrap -mx-3">
    {
      lastArticles?.lastPublishedArticles?.map((article,index)=>(
          <ArticleItem article={article} locale={locale} key={index} />
      ))
    }
  </div>

}