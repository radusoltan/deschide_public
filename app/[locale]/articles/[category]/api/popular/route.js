import {client} from "@/lib/elascticsearch";
import {NextResponse} from "next/server";

export const GET = async (req,{params: {locale, category}}) => {

  const popularArticles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "category.translations.locale": locale } },
            { match: { "category.translations.slug": category } },
            { match: { "translations.locale": locale} }
          ]
        }
      },
      size: 3,
      sort: [
        { "visits": { order: "desc" } }
      ]
    }
  })

  return NextResponse.json(popularArticles.hits.hits)

}