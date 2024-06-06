import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

export const ArticleItemImage = ({images, title})=>{
  const {width} = useWindowSize();

  const thumbnail = width > 768 ?
      images?.find(i=>i.is_main)?.
      thumbnails.find(th=>th.rendition_id===1) :
      images?.find(i=>i.is_main)?.
      thumbnails.find(th=>th.rendition_id===2)

  return thumbnail && <Image
      src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail.path}
      width={thumbnail.width}
      height={thumbnail.height}
      alt={title}
      className="rounded-lg"
  />
}