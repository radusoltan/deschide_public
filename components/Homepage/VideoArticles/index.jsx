"use client"
import Image from "next/image";
import {useHomePageData} from "@/hooks/articles";
import {useParams} from "next/navigation";
import Link from "next/link";
import moment from "moment";

export const VideoArticles = ()=> {

  const {locale} = useParams()

  const {videos} = useHomePageData({locale})

  return <div className="bg-gray-50 py-6">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">

        <div className="flex-shrink max-w-full w-full md:w-1/2 lg:w-1/3 px-6">
          {
            videos && videos.slice(0,6).map(item=> <div className="pb-5" key={item._id}>
                <Link
                    href={`/${locale}/articles/${item.category?.translations.find(t => t.locale === locale).slug}/${item._source.article_id}/${item._source.translations.find(t => t.locale === locale).slug}`}>
                  <h1 className="font-title font-bold">{
                    item._source.translations.find(t => t.locale === locale).title
                  }</h1>
                </Link>
                <div className="text-gray-500 text-sm mt-7 font-text">{
                  moment(item._source.translations.find(t => t.locale === locale)).format("MM Do YYYY, h:mm")
                }</div>
              </div>)
          }
        </div>
        <div className="flex-shrink max-w-full w-full md:w-1/2 lg:w-1/3  px-6">{
          <div>
            {
                videos && videos[6]?._source.images && videos[6]._source.images.length > 0 && <Image
                    className="rounded-lg mt-6 mb-6"
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + '/'+videos[6]._source.images.find(i => i.is_main)?.thumbnails.find(t => t.rendition_id === 4).path}
                    width={videos[6]?._source.images.find(i => i.is_main)?.thumbnails.find(t => t.rendition_id === 4).width}
                    height={videos[6]?._source.images.find(i => i.is_main)?.thumbnails.find(t => t.rendition_id === 4).height}
                    alt={videos[6]?._source.translations.find(t => t.locale === locale).title}
                />
            }
            <h1 className="font-title font-bold px-6">{
                videos && videos[6]?._source.translations.find(t => t.locale === locale).title
            }</h1>
            <div className="text-gray-500 text-sm mt-7 font-text px-6">{
                videos && moment(videos[6]?._source.translations.find(t => t.locale === locale)).format("MM Do YYYY, h:mm")
            }</div>
          </div>
        }</div>
        <div className="flex-shrink max-w-full w-full lg:block hidden lg:w-1/3  px-6">{
            videos && videos.slice(7).map(item => <div className="pb-5" key={item._id}>
              {
                item._source.images && item._source.images.length > 0 && <Image
                  className="rounded-lg mb-6"
                  src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item._source.images.find(i=>i.is_main).thumbnails.find(th=>th.rendition_id===3).path}
                  alt={item._source.translations.find(t => t.locale === locale).title}
                  width={item._source.images.find(i=>i.is_main).thumbnails.find(th=>th.rendition_id===3).width}
                  height={item._source.images.find(i=>i.is_main).thumbnails.find(th=>th.rendition_id===3).height}
                />
              }
              <Link
                  href={`/${locale}/articles/${item.category?.translations.find(t => t.locale === locale).slug}/${item._source.article_id}/${item._source.translations.find(t => t.locale === locale).slug}`}>
                <h1 className="font-title font-bold">{
                  item._source.translations.find(t => t.locale === locale).title
                }</h1>
              </Link>
              <div className="text-gray-500 text-sm mt-7 font-text">{
                moment(item._source.translations.find(t => t.locale === locale)).format("MM Do YYYY, h:mm")
              }</div>
            </div>)
        }</div>

      </div>
    </div>
  </div>
}