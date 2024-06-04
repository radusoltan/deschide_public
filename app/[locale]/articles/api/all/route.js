import {NextResponse} from "next/server";
import {client} from "@/lib/elascticsearch";

export const GET = async (request, {params: locale} )=>{
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page"));
  const size = Number(searchParams.get("perPage"));

  const from = (page -1) * size;
  // const from = itemOffset <= 0 ? 0 : itemOffset  * size;

  // const count = await client.count({
  //   query: {
  //     bool: {
  //       must: [
  //         { match: { "translations.locale": locale.locale } }
  //       ]
  //     }
  //   }
  // })
  // const pageCount = count?.count === 0 ? 0 : Math.ceil(count?.count / size)


  const articles = await client.search({
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale.locale } }
          ]
        }
      },
      size,
      from,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  const hits = articles.hits.hits.map(hit => hit._source);
  const total = articles.hits.total.value;

  // res.status(200).json({ hits, total, page, pageSize });



  return NextResponse.json({
    hits,
    total,
    pageCount: Math.ceil(total / size),
  })
}