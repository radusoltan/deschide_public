
import {Article} from "@/components/Article";


export async function generateMetadata({ params: {locale, article, category}}) {


  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/${locale}/articles/${category}/${article}/api`)
  const data = await response.json()

  const image = data?.images.find(i=>i.is_main)

  const authors = data?.authors.map(author=>({
    name: author.full_name
  }))

  const {title, keywords, slug} = data?.translations.find(t=>t.locale === locale)

  const thumbnail = image?.thumbnails.find(t=>t.rendition_id===3)

  return {
    title: title,
    description: title,
    keywords,
    authors,
    publisher: "Deschide.MD",
    openGraph: {
      type: 'article',
      url: process.env.NEXT_PUBLIC_APP_URL+`/${locale}/articles/${category}/${article}/${slug}`,
      siteName: 'Deschide.MD',
      images: thumbnail && [`${process.env.NEXT_PUBLIC_BACKEND_URL + '/' + thumbnail?.path}`],
    },
    other: {
      ["fb:app_id"]: process.env.FB_APP_ID,
    },

  }
}


export default function Page() {



  return <>

    <Article />

  </>
}