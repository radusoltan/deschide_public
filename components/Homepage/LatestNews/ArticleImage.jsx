import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export const ArticleImage = ({image, title}) => {

  const {width} = useWindowSize();
  const renditionId = width < 768 ? 1 : 2;
  const thumbnail = image.thumbnails.find(t=>t.rendition_id === renditionId)

  return <Image
      src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail.path}
      alt={title}
      width={thumbnail.width}
      height={thumbnail.height}
      className="rounded-lg"
  />
}