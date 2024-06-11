"use client"
import Link from "next/link";
import {useArticles} from "@/hooks/articles";

export const LatestNews = ({locale}) => {

  const {lastArticles} = useArticles({locale})

  console.log(lastArticles?.lastPublishedArticles)

  return <div className="flex flex-row flex-wrap -mx-3">
    {
      lastArticles?.lastPublishedArticles?.map((article, index) => (<div key={index} className=" flex-shrink max-w-full w-full md:w-1/2 lg:w-full xl:w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
        <div className="w-full">
          <Link href={`/${locale}/articles/${article._source.category.translations.find(t=>t.locale===locale).slug}/${article._source.article_id}/${article._source.translations?.find(t => t.locale === locale).slug}`}>
            <h1 className="font-title font-bold">
              {article._source.translations?.find(t => t.locale === locale).title}
            </h1>
          </Link>
        </div>
      </div>))
    }

    <span className="w-full border-b-2 mt-10"/>
    <Link href={`/${locale}/articles/all?page=1&limit=15`}
          className="w-full text-center font-light text-gray-500 p-5 hover:bg-gray-300 hover:text-gray-500 mx-auto">More
      News</Link>
  </div>
}