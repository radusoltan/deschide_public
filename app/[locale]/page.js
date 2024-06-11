import {SpecialArticles} from "@/components/Homepage/SpecialArticles";
import {FeaturedArticlesList} from "@/components/Homepage/FeaturedArticlesList";
import {LatestNews} from "@/components/Homepage/LatestNews";

export default function Page({ params: {locale}, searchParams }) {
  return <>
    <SpecialArticles locale={locale} />
    <FeaturedArticlesList locale={locale} />
    <div className="bg-white py-6 shadow-2xl">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pb-10 order-first">
            <div className="w-full py-3 bg-red-600">
              <h2 className="text-white text-2xl font-bold font-category">
                <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>{

                locale === "ro" ? "Ultimele Știri" :
                    locale === "ru" ? "Последние Новости" :
                        "Last News"

              }</h2>
            </div>
            <div className="w-full bg-white sticky top-0 mr-6">
              <div className="mb-6">
                <LatestNews locale={locale} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}