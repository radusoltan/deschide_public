import Link from "next/link";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import {useParams} from "next/navigation";

export const First = ({article}) => {
  const {locale} = useParams()
  const {width} = useWindowSize();

  const {article_id, translations, images, category} = article

  const {title, slug} = article.translations.find(t=>t.locale===locale)

  const articleLink = `/${locale}/articles/${category?.translations.find(t => t.locale === locale).slug}/${article_id}/${slug}`

  const image = images.find(i=>i.is_main)

  const renditionId = width > 768 ? 1 : 2

  const thumbnail = image.thumbnails.find(t=>t.rendition_id===renditionId)

  const articleImage = <Image
      src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail.path}
      width={thumbnail.width}
      height={thumbnail.height}
      alt={title}
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
            {category.translations.find(t => t.locale === locale)?.title}
          </div>
        </div>
      </div>
    </div>
  </div>
}