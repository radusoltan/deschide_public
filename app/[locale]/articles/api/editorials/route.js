import {NextResponse} from "next/server";
import {client} from "@/lib/elascticsearch";

export const GET = async (req, {params: {locale}})=>{

  const articles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "category.id": 5 } },
            { match: { "translations.locale": locale } }
          ]
        }
      },
      size: 9,
      sort: [
        { "translations.published_at": {order: "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  return NextResponse.json(articles.hits.hits)
}