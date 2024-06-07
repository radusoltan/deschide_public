"use client"
import {useParams} from "next/navigation";
import {useCategoryArticles} from "@/hooks/categories";
import {CategoryFirstArticle} from "@/components/Category/First";
import {CategoryArticleItem} from "@/components/Category/CategoryArticleItem";
import {useTranslation} from "@/i18n/client";
import Link from "next/link";

export const CategoryPage = ({locale})=>{

  const {category} = useParams()
  const {t} = useTranslation();

  const {category: categoryData, popularArticles, articles} = useCategoryArticles({locale, category})


  const firstArticle = articles && articles[0]


  return articles !== undefined && <>
    {/* block news */}
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* Left */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold font-title">
                <span className="inline-block h-5 border-x-4 border-red-600 mr-2"></span>{categoryData?.data.title}
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              {/*<CategoryFirstArticle article={firstArticle} locale={locale} />*/}

              {/*{articles?.map((article, index)=>index > 0 && <CategoryArticleItem article={article} locale={locale} key={index} />)}*/}
            </div>
          </div>
          {/* right */}
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">{t('homepage.popular_news')}</h2>
                </div>
                <ul className="post-number">
                  {popularArticles && popularArticles.map((article, index)=>(
                      <li
                          className="border-b border-gray-100 hover:bg-gray-50 font-title"
                          key={index}
                      >
                        <Link
                            href={`/${locale}/articles/${article._source.category.translations.find(t => t.locale === locale).slug}/${article._source.article_id}/${article._source.translations?.find(t=>t.locale===locale)?.slug}`}
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        >{
                          article?._source.translations.find(t=>t.locale === locale).title
                        }</Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-sm py-6 sticky">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}