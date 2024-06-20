import {SpecialArticles} from "@/components/Homepage/SpecialArticles";
import {FeaturedArticlesList} from "@/components/Homepage/FeaturedArticlesList";
import {LatestNews} from "@/components/Homepage/LatestNews";
import {Categories} from "@/components/Homepage/Categories";
import {client} from "@/lib/elascticsearch";
import {SlideNews} from "@/components/Homepage/SlideNews";
import Image from "next/image";
import gov from '@/public/guvernul.jpg'
import {VideoArticles} from "@/components/Homepage/VideoArticles";
import {LiveArticle} from "@/components/Homepage/LiveArticle";

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

export default async function Page({ params: {locale}, }) {

  const { articles: politicalArticles, popular: politicalPopular} = await getPoliticalArticles({locale})
  const { articles: socialArticles, popular: socialPopular} = await getSocialArticles({locale})
  const { articles: financialArticles, popular: financialPopular} = await getFinancialArticles({locale})
  const { articles: internationalArticles, popular: internationalPopular} = await getInternationalArticles({locale})

  return <>
    <LiveArticle />
    <SpecialArticles />
    <FeaturedArticlesList />
    <div className="flex justify-center items-center py-6">
      <a href="http://drrm.gov.ro/w/">
        <Image
            src={gov}
            width={1100}
            height={130}
            alt="Guvernul Romaniei"
        />
      </a>

    </div>
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

          {/* Left */}
          <LatestNews />
          {/* right */}
          <Categories
              politicalArticles={politicalArticles}
              politicalPopular={politicalPopular}
              socialArticles={socialArticles}
              socialPopular={socialPopular}
              financialArticles={financialArticles}
              financialPopular={financialPopular}
              internationalArticles={internationalArticles}
              internationalPopular={internationalPopular}
          />
        </div>
      </div>
    </div>
    <SlideNews />
    <VideoArticles />
  </>
}