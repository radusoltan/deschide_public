"use client"
import {useCategories} from "@/hooks/categories";
import {useParams} from "next/navigation";
import {CategoryArticles} from "@/components/Homepage/Categories/CategoryArticles";

export const Categories = ({
  politicalArticles,
  politicalPopular,
  socialArticles,
  socialPopular,
  financialArticles,
  financialPopular,
  internationalArticles,
  internationalPopular
}) => {
  const {locale} = useParams()
  const {items, isLoading} = useCategories({locale})

  if (isLoading) return <>CATEGORIES LOADING ...</>

  const categories = items?.data.filter((item) => item.id >= 1 && item.id <= 4)

  return <div className="flex-shrink max-w-full w-full lg:w-2/3">
    {
      categories?.map((category)=><CategoryArticles
          category={category}
          key={category.id}
          articles={
            category.id === 1 ? politicalArticles :
            category.id === 2 ? socialArticles :
            category === 4 ? financialArticles :
            internationalArticles
          }
          popularArticles={
            category.id === 1 ? politicalPopular :
            category.id === 2 ? socialPopular :
            category === 4 ? financialPopular :
            internationalPopular
          }
      />)
    }

  </div>

}