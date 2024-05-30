"use client"
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

export const CategoryFirstArticle = ({locale, article})=> {

  const {width} = useWindowSize();

  const {article_id, images, translations, category} = article?._source
  //
  const articleImage = images?.length > 0 && <Image
      className="max-w-full w-full mx-auto h-auto"
      src={width < 768 ?
         process.env.NEXT_PUBLIC_BACKEND_URL + '/' + images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===2).path :
          process.env.NEXT_PUBLIC_BACKEND_URL + '/' + images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===1).path
      }
      width={width < 768 ?
          images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===2).width :
          images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===1).width
      }
      height={width < 768 ?
          images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===2).height :
          images.find(({is_main})=>is_main).thumbnails.find(t=>t.rendition_id===1).height
      }
      alt={translations?.find(t => t.locale === locale)?.title}
  />

  return <div className="flex-shrink max-w-full w-full px-3 pb-5">
    <div className="relative hover-img max-h-98 overflow-hidden">
      {/* thumbnail */}
      <Link href={
        `/${locale}/articles/${category?.translations.find(t => t.locale === locale).slug}/${article_id}/${translations?.find(t => t.locale === locale)?.slug}`
      }>
        {articleImage}
        {/*<img className="max-w-full w-full mx-auto h-auto" src="/img/dummy/img22.jpg" alt="Image description"/>*/}
      </Link>
      <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-to-t from-slate-900">
        {/* title */}
        <Link href={
          `/${locale}/articles/${category?.translations.find(t => t.locale === locale).slug}/${article_id}/${translations?.find(t => t.locale === locale)?.slug}`
        }>
          <h2 className="text-3xl font-bold capitalize text-white mb-3 font-title">{
            translations.find(t => t.locale === locale)?.title
          }</h2>
        </Link>
        <p className="text-gray-100 hidden sm:inline-block font-text" dangerouslySetInnerHTML={{
          __html: translations.find(t => t.locale === locale).lead ?
              translations.find(t => t.locale === locale).lead.substring(0, 150) :
              translations.find(t => t.locale === locale).body.substring(0, 150)
        }} />
        {/* author and date */}
        <div className="pt-2">
          <div className="text-gray-100">
            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            <span className="font-title">{
              category.translations.find(t=> t.locale === locale)?.title
            }</span></div>
        </div>
      </div>
    </div>
  </div>
}