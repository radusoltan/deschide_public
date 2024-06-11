
import {SpecialArticle} from "@/components/HomePage/SpecialArticle";
import {FeaturedArticlesListPage} from "@/components/HomePage/FeaturedArticlesList";
import {SlideNews} from "@/components/HomePage/SlideNews";
import {LatestNews} from "@/components/HomePage/LatestNews";
import {client} from "@/lib/elascticsearch";
import {CategoryArticles} from "@/components/HomePage/Categories/CategoryArticles";



export async function getPoliticalArticles({locale}){

  const articles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'politic' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 16,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })
  const popularArticles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'politic' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 5,
      sort: [
        { "visits": {"order": "desc"} }
      ]
    }
  })
  return {
    articles: articles.hits.hits.map(hit => hit._source),
    popular: popularArticles.hits.hits.map(hit => hit._source),
  };

}
export async function getSocialArticles({locale}){
  const articles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "translations.status": 'P' } },
            { match: { "category.translations.slug": 'social' } }
          ]
        }
      },
      from: 0,
      size: 10,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })
  const popularArticles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'social' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 5,
      sort: [
        { "visits": {"order": "desc"} }
      ]
    }
  })

  return {
    articles: articles.hits.hits.map(hit => hit._source),
    popular: popularArticles.hits.hits.map(hit=>hit._source),
  };
}
export async function getFinancialArticles({locale}){
  const articles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'economic' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 10,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })
  const popularArticles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'economic' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 5,
      sort: [
        { "visits": {"order": "desc"} }
      ]
    }
  })

  return {
    articles: articles.hits.hits.map(hit => hit._source),
    popular: popularArticles.hits.hits.map(hit => hit._source),
  };
}
export async function getInternationalArticles({locale}){
  const articles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'externe' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 10,
      sort: [
        { "translations.published_at": {"order": "desc", "format": "strict_date_optional_time_nanos"} }
      ]
    }
  })

  const popularArticles = await client.search({
    index: "articles",
    body: {
      query: {
        bool: {
          must: [
            { match: { "translations.locale": locale} },
            { match: { "category.translations.slug": 'externe' } },
            { match: { "translations.status": 'P' } }
          ]
        }
      },
      from: 0,
      size: 5,
      sort: [
        { "visits": {"order": "desc"} }
      ]
    }
  })

  return {
    articles: articles.hits.hits.map(hit => hit._source),
    popular: popularArticles.hits.hits.map(hit => hit._source),
  };
}


export default async function Home({params: {locale}}) {

  const { articles: politicalArticles, popular: politicalPopular} = await getPoliticalArticles({locale})
  const { articles: socialArticles, popular: socialPopular} = await getSocialArticles({locale})
  const { articles: financialArticles, popular: finiancialPopular} = await getFinancialArticles({locale})
  const { articles: internationalArticles, popular: intenrationalPopular} = await getInternationalArticles({locale})



  return <>
    <SpecialArticle locale={locale} />
    {/*/!* hero big grid *!/*/}

    <FeaturedArticlesListPage locale={locale} />

    <div className="bg-white py-6 shadow-2xl">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

          {/* Left */}

          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pb-10 order-first">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold font-category">
                <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>{

                locale === "ro" ? "Ultimele Știri" :
                locale === "ru" ? "Последние Новости" :
                    "Last News"

              }</h2>
            </div>
            <div className="w-full bg-white sticky top-0 mr-6">
              <div className="mb-6">
                <LatestNews locale={locale}/>
              </div>
            </div>

          </div>


          {/* right */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3">
            <div className="flex-shrink max-w-full w-full overflow-hidden py-3 ml-6">
              <div className="w-full pb-10">
                <h2 className="text-gray-800 text-2xl font-bold font-category">
                  <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
                  {
                    locale === "ro" ? "Politic" :
                        locale === "ru" ? "Политика" :
                            "Political"
                  }</h2>
              </div>
              <CategoryArticles locale={locale} articles={politicalArticles} popular={politicalPopular} category={
                locale === "ro" ? "politic" :
                locale === "ru" ? "politika" :
                "political"
              }/>
            </div>
            <div className="flex-shrink max-w-full w-full overflow-hidden py-3 ml-6">
              <div className="w-full pb-10">
                <h2 className="text-gray-800 text-2xl font-bold font-category">
                  <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
                  {
                    locale === "ro" ? "Social" :
                        locale === "ru" ? "Общество" :
                            "Social"
                  }</h2>
              </div>
              <CategoryArticles category={
                locale === "ro" ? "social" :
                    locale === "ru" ? "obshhestvo" :
                        "social"
              } locale={locale} articles={socialArticles} popular={socialPopular}/>
            </div>
            <div className="flex-shrink max-w-full w-full overflow-hidden py-3 ml-6">
              <div className="w-full pb-10">
                <h2 className="text-gray-800 text-2xl font-bold font-category">
                  <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
                  {
                    locale === "ro" ? "Economic" :
                        locale === "ru" ? "Экономика" :
                            "Financial"
                  }</h2>
              </div>
              <CategoryArticles category={
                locale === "ro" ? "economic" :
                    locale === "ru" ? "ekonomika" :
                        "business"
              } locale={locale} articles={financialArticles} popular={finiancialPopular}/>
            </div>
            <div className="flex-shrink max-w-full w-full overflow-hidden py-3 ml-6">
              <div className="w-full pb-10">
                <h2 className="text-gray-800 text-2xl font-bold font-category">
                  <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
                  {
                    locale === "ro" ? "Externe" :
                        locale === "ru" ? "В мире" :
                            "International"
                  }</h2>
              </div>
              <CategoryArticles category={
                locale === "ro" ? "externe" :
                    locale === "ru" ? "v-mire" :
                        "international"
              }  locale={locale} articles={internationalArticles} popular={intenrationalPopular}/>
            </div>
          </div>

        </div>


      </div>
    </div>
    <SlideNews locale={locale}/>

  </>
}
