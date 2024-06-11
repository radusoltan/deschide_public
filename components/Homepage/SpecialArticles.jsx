"use client"

import {useArticles} from "@/hooks/articles";

export const SpecialArticles = ({locale})=>{

  const {specialArticles} = useArticles({locale});

  console.log(specialArticles)

  return <>Special Articles</>
}