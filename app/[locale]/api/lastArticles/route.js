import {NextResponse} from "next/server";
import {client} from "@/lib/elascticsearch";

export const GET = async (request,{params:{locale}})=>{
  const { searchParams } = new URL(request.url)

  const page = parseInt(searchParams.get('page'))
  const size = 9

  const from = page <= 0 ? 0 : page - 1

  const count = await client.count({
    query: {
      bool: {
        must: [
          { match: { "translations.locale": locale } }
        ]
      }
    }
  })

  const total_pages = count?.count === 0 ? 0 : Math.ceil(count?.count / size)



  const lastPublishedArticles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      size: 9,
      from: 0,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  return NextResponse.json({
    lastPublishedArticles: lastPublishedArticles.hits.hits,
    meta: {
      total: count?.count,
      currentPage: page,

    }
  });
  // try {
  //
  // } catch (e) {
  //   console.log(e)
  //   return  NextResponse.json([]);
  // }

}