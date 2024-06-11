"use client"
import {useArticles} from "@/hooks/articles";

export const FeaturedArticlesList =  ({locale}) => {

  const {featuredArticles} = useArticles({locale})

  return <>Featured Articles</>
};