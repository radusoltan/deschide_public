"use client"
import useSWR from 'swr'
import axios from "axios";

export const useCategories = ({locale, category}) => {

  const {data: items} = useSWR('/api/categories',async ()=>{
    const result = await fetch(`/${locale}/api/categories`)
    return result.json()
  })

  const {data: categoryArticles, isLoading: categoryArticlesLoading} = useSWR('/api/category/articles', async ()=>{
    const response = await fetch(`/${locale}/articles/${category}/api`)
    return response.json()
  })


// http://localhost:3000/ro/articles/politic/api

  return {
    items,
    categoryArticles,
    categoryArticlesLoading
  }
}

export const useCategoryArticles = ({locale, category}) => {

  const {data} = useSWR('/api.category', async ()=>{

    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL +`/api/public/categories/${category}`)
    return response.data
  })

  const {data: articles} = useSWR('/api/article', async ()=>{
    const result = await fetch(`/${locale}/articles/${category}/api`)
    return result.json()
  })

  const {data: popularArticles} = useSWR('/api/article/poplar', async ()=>{

    const result = await fetch(`/${locale}/articles/${category}/api/popular`)
    return result.json()
  })

  return {
    category: data,
    articles,
    popularArticles
  }

}