import {client} from "@/lib/elascticsearch";
import {NextResponse} from "next/server";


export const GET = async (req, {params:{locale}}) => {

  const articles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "category.id": 11 } },
            { match: { "translations.locale": locale } },
            { match: { "translations.status": 'P' } }
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