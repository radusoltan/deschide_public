import {SpecialArticle} from "@/components/HomePage/SpecialArticle";
import {BlockNews} from "@/components/HomePage/BlockNews";
import {FeaturedArticlesListPage} from "@/components/HomePage/FeaturedArticlesList";
import {SlideNews} from "@/components/HomePage/SlideNews";
import {NewFeatured} from "@/components/HomePage/NewFeatured";
import {PoliticalNews} from "@/components/HomePage/Political";

export default async function Home({params: {locale}}) {


  return <>
    <SpecialArticle locale={locale} />
    {/* hero big grid */}

    <FeaturedArticlesListPage locale={locale} />
    {/*<NewFeatured />*/}
    <BlockNews locale={locale} />
    <SlideNews locale={locale} />
    <PoliticalNews />

  </>
}
