import {useParams} from "next/navigation";

export const VideoArticle = ({articleData}) => {
  const { locale, article, category, slug } = useParams()

  console.log(articleData)

  return <></>
}