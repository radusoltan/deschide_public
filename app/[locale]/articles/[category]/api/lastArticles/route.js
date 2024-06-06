import {client} from "@/lib/elascticsearch";
import {NextResponse} from "next/server";

export const GET = async (request, {params: {locale, category}})=>{

  const response = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "category.translations.locale": locale } },
            { match: { "category.translations.slug": category} }
          ]
        }
      },
      size: 20,
      sort: [
        { "translations.published_at": {order: "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  return NextResponse.json(response)

}