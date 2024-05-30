import { MotionDiv } from "./../../Motion";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";


const variants = {

}
export const First = ({article, locale}) => {
  const { width } = useWindowSize();

  const {category} = article
  const {article_id, translations, images} = article


  const imagePath = width < 768 ?
      process.env.NEXT_PUBLIC_BACKEND_URL + '/' +
      images.find(i=>i.is_main)?.thumbnails.find(t=>t.rendition_id===2).path :
      process.env.NEXT_PUBLIC_BACKEND_URL + '/' + images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 1).path

  const imageAlt = translations.find(t => t.locale === locale).title ?? translations.find(t => t.locale === locale).title
  const imageWidth = width < 768 ?
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).width :
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 1).width

  const imageHeight = width < 768 ?
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 2).height :
      images.find(i => i.is_main)?.thumbnails.find(th => th.rendition_id === 1).height


  const {title, slug} = translations.find(t => t.locale === locale)
  const articleLink = `/${locale}/articles/
        ${category?.translations.find(t => t.locale === locale).slug}/${article_id}/${slug}`

  const articleImage = <Image
      src={ imagePath }
      alt={title}
      width={imageWidth}
      height={imageHeight}
  />

  return <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
    <div className="relative hover-img max-h-98 overflow-hidden">
      <Link href={articleLink}>
        {articleImage}

      </Link>
      <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-to-t from-slate-900">
        <Link
            href={`/${locale}/articles/${category?.translations.find(t => t.locale === locale).slug}/${article_id}/${translations?.find(t => t.locale === locale)?.slug}`}>
          <h2 className="text-3xl font-bold capitalize text-white mb-3 font-title">
            {title}
          </h2>
        </Link>
        <p className="text-gray-100 hidden sm:inline-block font-text"
           dangerouslySetInnerHTML={{__html: article.translations.find(t => t.locale === locale).body.substring(0, 250) + ' ...'}}
        />
        <div className="pt-2">
          <div className="text-gray-100">
            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            {article.category.translations.find(t => t.locale === locale)?.title}
          </div>
        </div>
      </div>
    </div>
  </div>
}