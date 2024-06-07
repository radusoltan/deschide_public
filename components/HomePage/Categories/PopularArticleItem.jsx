import moment from "moment";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export const PopularArticleItem = ({article, locale}) => {

  const {images, translations, visits} = article
  moment.locale(locale)

  const {width} = useWindowSize();

  const thumbnail = width > 768 ?
      images?.find(i=>i.is_main)?.
      thumbnails.find(th=>th.rendition_id===1) :
      images?.find(i=>i.is_main)?.
      thumbnails.find(th=>th.rendition_id===2)

  const {title, published_at} = translations?.find(t => t.locale === locale);

  const date = moment(published_at).format("MM Do YYYY, h:mm")

  return <div
      className="max-w-full w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
    <div className="flex flex-row sm:block hover-img">
      <a href="">
        {
            thumbnail && <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail.path}
                width={thumbnail.width}
                height={thumbnail.height}
                alt={title}
                className="rounded-lg"
            />
        }
      </a>
      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
        <h3 className="text-lg font-bold leading-tight mb-2 font-title">
          <a href="#">{title}</a>
        </h3>
        <div className="text-gray-500 text-sm mt-7 font-text">
          {date}, <span className="font-light">views: {visits}</span>
        </div>

      </div>
    </div>
  </div>
}