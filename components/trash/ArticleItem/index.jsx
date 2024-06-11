
import {ArticleItemImage} from "@/components/ArticleItem/ArticleItemImage";
import moment from "moment";
import Link from "next/link";

export const ArticleItem = ({article, locale}) => {

  const {images, translations, category, article_id} = article?._source
  moment.locale(locale)

  const {title, published_at, slug } = translations?.find(t => t.locale === locale);

  const date = moment(published_at).format("MM Do YYYY, h:mm")

  return <div
              className=" flex-shrink max-w-full w-full md:w-1/2 lg:w-full xl:w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">

    {
      images.length > 0 ? <div className="flex flex-row shadow-md border-gray-500">
        <div className="w-1/2 mr-3"><ArticleItemImage images={images} title={title}/></div>

        <div className="w-2/3">
          <Link href={`/${locale}/articles/${category.translations.find(t=>t.locale===locale).slug}/${article_id}/${slug}`}>
            <h1 className="font-title font-bold">
              {title}
            </h1>
          </Link>

          <div className="text-gray-500 text-sm mt-7 font-text">{date}</div>
        </div>
      </div> : <div className="w-full">
        <Link href={`/${locale}/articles/${category.translations.find(t=>t.locale===locale).slug}/${article_id}/${slug}`}>
          <h1 className="font-title font-bold">
            {title}
          </h1>
        </Link>
        <div className="text-gray-500 text-sm mt-7 font-text">{date}</div>
      </div>
    }


  </div>
}