import {NextResponse} from "next/server";
import {client} from "@/lib/elascticsearch";

export async function GET(request, {params: {locale, category}}) {

  const articles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "category.translations.locale": locale } },
            { match: { "category.translations.slug": category } }
          ]
        }
      },
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  return NextResponse.json(articles.hits.hits)
}