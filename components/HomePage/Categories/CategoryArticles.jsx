"use client"
import moment from "moment";
import {PopularArticleItem} from "@/components/HomePage/Categories/PopularArticleItem";
import {Suspense} from "react";
import Link from "next/link";

export const CategoryArticles = ({locale, articles, popular}) => {



  return <div className="flex flex-row flex-wrap">
  {/* left */}
    <div className="w-full lg:w-2/3 md:w-1/2 pr-6">
      <Suspense fallback={<>Articles loading</>}>
        {
          articles?.length > 0 && articles?.map((article, index)=> {

            const { translations, category, article_id} = article

            const {title, published_at, slug } = translations?.find(t => t.locale === locale);

            const date = moment(published_at).format("MM Do YYYY, h:mm")

              console.log()

            return <div key={index} className="pb-5">
              <Link href={`/${locale}/articles/${category.translations.find(t=>t.locale===locale).slug}/${article_id}/${slug}`}>
                <h1 className="font-title font-bold">
                  {
                    title
                  }
                </h1>
              </Link>

              <div className="text-gray-500 text-sm mt-7 font-text">{date}</div>
            </div>
            })
        }
      </Suspense>
    </div>
    <div className="hidden md:block lg:w-1/3 md:w-1/2 sm:hidden px-5 pt-5 border rounded-lg ">
      <div className="w-full py-3">
        <h2 className="text-gray-800 text-lg font-bold font-category">
          <span className="inline-block h-4 border-l-4 border-red-600 mr-2"></span>{
          locale === "ro" ? "Cele mai deschise" :
          locale === "ru" ? "Популярные Новости" :
          "Popular News"
        }</h2>
      </div>
      {
        popular?.map((article, index) => <PopularArticleItem article={article} locale={locale} key={index}/>)
      }
    </div>
    <span className="w-full border-b-2 mt-10" />
    <a href="#" className="w-full text-center font-light text-gray-500 p-5 hover:bg-gray-300 hover:text-gray-500 mx-auto">More News</a>
    {/* right */}
  </div>
}