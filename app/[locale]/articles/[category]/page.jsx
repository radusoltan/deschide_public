
import {Category, CategoryPage} from "@/components/Category";
import {useCategoryArticles} from "@/hooks/categories";



export default function Page({ params: {locale, category} }) {



  return <CategoryPage locale={locale}/>
}