import {Suspense} from "react";
import {ArticleItemLoading} from "@/components/LoadingSkeletons/ArticleItemLoading";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";

export const CategoryArticleItem = ({locale, article})=>{

  const { width } = useWindowSize();

  const {article_id, translations, images, category} = article._source


  const articleLink = `/${locale}/articles/${category.translations.find(t => t.locale === locale).slug}/${article_id}/${translations?.find(t=>t.locale===locale)?.slug}`

  const imageSrc = width < 768 ?
      process.env.NEXT_PUBLIC_BACKEND_URL + '/' +
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).path :
      process.env.NEXT_PUBLIC_BACKEND_URL + '/' +
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 1).path

  const imageWidth = width < 768 ?
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).width :
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 1).width

  const imageHeight = width < 768 ?
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).height :
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).height

  const articleImage = images.length > 0 && <Image
      src={imageSrc}
      width={imageWidth}
      height={imageHeight}
      className="max-w-full w-full mx-auto"
      alt={translations?.find(t => t.locale === locale)?.title}
  />

  return <Suspense fallback={<ArticleItemLoading />}><div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
    <div className="flex flex-row sm:block hover-img">
      <Link
          href={articleLink}>
        {articleImage}
      </Link>
      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
        <h3 className="text-lg font-bold leading-tight mb-2 font-title">
          <Link href={articleLink}>{
            translations.find(t => t.locale === locale)?.title
          }</Link>
        </h3>
        <p className="hidden md:block text-gray-600 leading-tight mb-1 font-text font-light"
           dangerouslySetInnerHTML={{__html:
             translations.find(t=>t.locale===locale)?.lead ?
               translations.find(t=>t.locale===locale)?.lead.substring(0,150) + '...' :
               translations.find(t=>t.locale===locale)?.body.substring(0,150) + '...'
          }}
        />
        {/*<Link className="text-gray-500" href={*/}
        {/*  `/${locale}/articles/${category.translations.find(t => t.locale === locale).slug}`*/}
        {/*}><span*/}
        {/*    className="inline-block h-3 border-l-2 border-red-600 mr-2 font-category"></span>{*/}
        {/*  category.translations.find(t => t.locale === locale).title*/}
        {/*}</Link>*/}
      </div>
    </div>
  </div></Suspense>
}