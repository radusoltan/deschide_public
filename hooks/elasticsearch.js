import {client} from "@/lib/elascticsearch";

export const getLastPublishedArticles = async ()=>{
  return await client.search({
    index: "articles",
    query: {
      match: {
        "translations.locale": "ro"
      }
    },
    sort: [
      {"translations.published_at": {"order": "asc", "format": "strict_date_optional_time_nanos"}},
    ]
  })
}


export const getLastPublishedArticleByCategory = async ({locale, category})=>{
  const articles = await  client.search({
    index: "articles",
    "size": 20,
    "query": {
      "bool": {
        "must": [
          {"match": {"translations.locale": locale}},
          {"match": {"category.translations.slug": category}}
        ]
      }
    },
    sort: [
      {"translations.published_at": {"order": "asc", "format": "strict_date_optional_time_nanos"}},
    ]
  })

  return articles.hits.hits
}
