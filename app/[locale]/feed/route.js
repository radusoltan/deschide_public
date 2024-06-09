import {NextResponse} from "next/server";
import RSS from "rss";
import {client} from "@/lib/elascticsearch";

export async function GET(request, {params: {locale}}) {

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
      size: 20,
      from: 0,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  const feed = new RSS({
    title: "Deschide.MD | RO",
    description: "Portal de stiri din Republica Moldova",
    site_name: "alptha.eschide.MD",
    feed_url: "https://deschide.md/ro",
    language: "ro-RO",
    pubDate: new Date(),
  });

  lastPublishedArticles.hits.hits.map((article)=>{
    const {category, article_id, translations, images} = article._source
    const {title, slug, published_at} = translations.find(t=>t.locale===locale)
    return feed.item({
      title: title,
      guid: `/${locale}/articles/${category.translations.find(t=>t.locale===locale).slug}/${article_id}/${slug}`,
      date: new Date(published_at),
      categories: [category.translations.find(t=>t.locale===locale).title],
      enclosure: {
        url: 'http://localhost:8080',
        title: "IMAGE TEST Title",
        'size' : 1668, //
        'type' : 'image/jpeg'
      },
    })

  })

  return new NextResponse(feed.xml({indent: true}),{
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    }
  })
}