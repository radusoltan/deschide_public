import {SpecialArticle} from "@/components/HomePage/SpecialArticle";
import {BlockNews} from "@/components/HomePage/BlockNews";
import {FeaturedArticlesListPage} from "@/components/HomePage/FeaturedArticlesList";
import {SlideNews} from "@/components/HomePage/SlideNews";

export default async function Home({params: {locale}}) {


  return <>
    <SpecialArticle locale={locale} />
    {/* hero big grid */}

    <FeaturedArticlesListPage locale={locale} />
    <BlockNews locale={locale} />
    <SlideNews locale={locale} />


  </>
}
