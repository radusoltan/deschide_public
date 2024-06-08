"use client"
import {Splide, SplideSlide} from '@splidejs/react-splide';
import { Grid } from "@splidejs/splide-extension-grid";
import '@splidejs/react-splide/css';
import {useHomePageData} from "@/hooks/articles";
import {useTranslation} from "@/i18n/client";
import Link from "next/link";
import moment from "moment/moment";
export const SlideNews = ({locale})=>{

  const {editorials} = useHomePageData({locale})

  const {t} = useTranslation()

  return <div className="relative bg-gray-50">

    <div className="bg-white bg-opacity-70">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-black text-2xl font-bold text-shadow-black font-title">
                <span className="inline-block h-5 border-x-4 border-red-600 mr-2"></span>{t('homepage.opinions')}</h2>
            </div>

              <Splide
                  options={{
                    type: 'loop',
                    perPage: 3,
                    autoplay: true,
                    interval: 5000,
                    easing: 'ease-in-out',
                    speed: 1000,
                    breakpoints: {
                      768: {
                        perPage: 2,

                        gap: "1rem"
                      }
                    },
                    gap: "2rem",
                    drag: "free",
                    classes: {
                      pagination: "mt-6 flex items-center justify-center text-white"
                    },
                    pauseOnHover: true,
                    arrows: false,
                    wheel: true,
                  }}
                  extensions={{ Grid }}

              >
                {editorials && editorials.map((article, index)=> {

                  const {authors, translations, category, article_id} = article._source



                  const {title, slug, published_at} = translations.find(t=>t.locale===locale)

                  const date = moment(published_at).format("MM Do YYYY, h:mm")

                  return <SplideSlide key={index}>
                    <div className="flex-shrink">
                      {
                          authors.length > 0 && <h3 className="text-sm font-text mb-5 text-blue-700">
                            {authors[0].full_name}
                          </h3>
                      }
                      <Link
                          href={`/${locale}/articles/${category.translations.find(t => t.locale === locale).slug}/${article_id}/${slug}`}>
                        <h1 className="text-lg font-bold leading-tight mb-5 font-title">{
                          title
                        }</h1>
                      </Link>

                      <p
                          className="hidden md:block text-gray-600 leading-tight mb-1 font-text font-light"
                          dangerouslySetInnerHTML={{
                            __html:
                                article._source.translations.find(t => t.locale === locale)?.lead ?
                                    article._source.translations.find(t => t.locale === locale)?.lead.substring(0, 150) + '...' :
                                    article._source.translations.find(t => t.locale === locale)?.body.substring(0, 150) + '...'
                          }}
                      />
                      <div className="text-gray-500 text-sm mt-7 font-text">{date}</div>
                    </div>
                  </SplideSlide>
                })}

              </Splide>


          </div>
        </div>
      </div>
    </div>

  </div>
}