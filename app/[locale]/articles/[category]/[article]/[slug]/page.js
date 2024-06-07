"use client"


import {useArticle} from "@/hooks/articles";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faEye, faUser} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faSquareFacebook, faSquareTwitter, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {useCategoryArticles} from "@/hooks/categories";
import {useTranslation} from "@/i18n/client";
import Link from "next/link";
import ads_728 from '@/public/img/ads/ads_728.jpg'


export default function Page({ params: {article, locale, category} }) {

  const {articleData} = useArticle({article, locale});
  const {popularArticles} = useCategoryArticles({locale, category})
  const {t} = useTranslation()

  const { width } = useWindowSize();

  const mainImage = articleData?._source?.images?.find(i=>i.is_main)
  const thumbnail = width < 768 ?
      mainImage?.thumbnails?.find(t=>t.rendition_id===2) :
      mainImage?.thumbnails?.find(t=>t.rendition_id===1)

  const visits = articleData?._source?.visits

  return <>
    {/* advertisement */}
    <div className="bg-gray-50 py-4">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="mx-auto table text-center text-sm">
          <a className="uppercase" href="#">Advertisement</a>
          <a href="#">
            <Image src={ads_728} alt="advertisement area"/>
          </a>
        </div>
      </div>
    </div>

  {/* block news */}
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

        {/* Left */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3 mb-3">
              <h2 className="text-gray-800 text-3xl font-bold font-title">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                {articleData?._source?.translations.find(t=>t.locale===locale).title}
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="max-w-full w-full px-4">
                {/* Article Content */}
                <div className="leading-relaxed pb-4 font-text">
                  <p className="mb-5"
                     dangerouslySetInnerHTML={{__html: articleData?._source?.translations.find(t => t.locale === locale).lead}}/>
                  <figure className="text-center mb-6">
                    {
                        thumbnail && <>
                          <Image
                              src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail?.path}
                              width={thumbnail?.width}
                              height={thumbnail?.height}
                              alt={articleData?._source.translations.find(t => t.locale === locale).title}
                          />
                          <figcaption>{mainImage?.description} | FOTO: <i>{mainImage.author}</i></figcaption>
                        </>
                    }


                  </figure>
                  <div className="mb-5 article-body"
                       dangerouslySetInnerHTML={{__html: articleData?._source?.translations.find(t => t.locale === locale).body}}/>
                </div>
                <div
                    className="relative flex flex-row items-center justify-between overflow-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 mt-12 mb-2 px-6 py-2">
                  <div className="my-4 text-sm">

                    <span className="mr-2 md:mr-4 font-text">

                      <FontAwesomeIcon icon={faUser} /> by <a className="font-semibold" href="#">Ari Budin</a>
                      </span>

                    <time className="mr-2 md:mr-4 font-text" dateTime="2020-10-22 10:00">


                      <FontAwesomeIcon icon={faCalendarDays} />
                      <></> Oct 22, 2020
                    </time>
                    {/*view*/}
                    <span className="mr-2 md:mr-4 font-text">

                      <FontAwesomeIcon icon={faEye} /> {visits} x view
                      </span>

                  </div>

                  <div className="hidden lg:block">
                    <ul className="space-x-3">

                      <li className="inline-block">
                        <a target="_blank" className="hover:text-red-700 text-2xl" href="#" title="Share to Facebook">

                          <FontAwesomeIcon icon={faSquareFacebook}/>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a target="_blank" className="hover:text-red-700 text-2xl" href="#" title="Share to Twitter">

                          <FontAwesomeIcon icon={faSquareTwitter}/>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a target="_blank" className="hover:text-red-700 text-2xl" href="#" title="Share to Instagram">
                          {/* <i class="fab fa-instagram fa-2x"></i> */}

                          <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a target="_blank" className="hover:text-red-700 text-2xl" href="#" title="Share to Instagram">
                          {/* <i class="fab fa-instagram fa-2x"></i> */}

                          <FontAwesomeIcon icon={faTelegram} />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
            <div className="w-full bg-white">
              <div className="mb-6 bg-gray-100">
              <h2 className="text-lg font-bold">{t("homepage.popular_news")}</h2>
              </div>
              <ul className="post-number">
                {popularArticles && popularArticles.map((article,index)=><li
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <Link
                      href={`/${locale}/articles/${article._source.category.translations.find(t => t.locale === locale).slug}/${article._source.article_id}/${article._source.translations?.find(t=>t.locale===locale)?.slug}`}
                      className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                  >{
                    article?._source.translations.find(t=>t.locale === locale).title
                  }</Link>
                </li>)}
              </ul>
            </div>
            <div className="text-sm py-6 sticky">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area"/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}