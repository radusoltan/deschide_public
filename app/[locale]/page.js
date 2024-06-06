
import {SpecialArticle} from "@/components/HomePage/SpecialArticle";
import {BlockNews} from "@/components/HomePage/BlockNews";
import {FeaturedArticlesListPage} from "@/components/HomePage/FeaturedArticlesList";
import {SlideNews} from "@/components/HomePage/SlideNews";
import {NewFeatured} from "@/components/HomePage/NewFeatured";
import {PoliticalNews} from "@/components/HomePage/Political";
import {LatestNews} from "@/components/old/Homepage/LatestNews";
import {Category} from "@/components/old/Homepage/Category";
import {Categories} from "@/components/old/Homepage/Categories";
import {useCategories} from "@/hooks/categories";

export default async function Home({params: {locale}}) {



  return <>
    <SpecialArticle locale={locale} />
    {/*/!* hero big grid *!/*/}

    <FeaturedArticlesListPage locale={locale} />

    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">

          {/* Left */}

          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pb-10 order-first">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold font-category">
                <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
                Larst Articles</h2>
            </div>
            <div className="w-full bg-white sticky top-0 mr-6">
              <div className="mb-6">
                <LatestNews locale={locale}/>
              </div>
            </div>

          </div>


          {/* right */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3">
            <Categories locale={locale}/>
          </div>

        </div>


      </div>
    </div>


    {/*/!*<NewFeatured />*!/*/}
    {/*<BlockNews locale={locale} />*/}
    <SlideNews locale={locale}/>
    {/*<PoliticalNews />*/}

  </>
}
