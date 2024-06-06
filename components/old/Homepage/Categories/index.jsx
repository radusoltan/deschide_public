"use client"
import {useCategories} from "@/hooks/categories";
import {CategoryArticles} from "@/components/old/Homepage/Categories/CategoryArticles";

export const Categories = ({locale})=>{

  const {items} = useCategories(locale)

  const categories = items?.data.filter(item=>
      item.id > 0 && item.id <= 4 && item
  )



  return categories?.map(item=><div key={item.id} className="flex-shrink max-w-full w-full overflow-hidden py-3 ml-6">
    <div className="w-full pb-10">
      <h2 className="text-gray-800 text-2xl font-bold font-category">
        <span className="inline-block h-5 border-l-4 border-red-600 mr-2"></span>
        {item.title}</h2>
    </div>
    <CategoryArticles locale={locale} category={item} />
  </div>)
}