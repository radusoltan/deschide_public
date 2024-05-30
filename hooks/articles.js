"use client"
import useSWR from 'swr'
import axios from '@/lib/axios'

export const useHomePageData = ({locale}) => {

  const {data: featuredArticles} = useSWR(`/home/${locale}`, async ()=>{
    const response = await fetch(`/${locale}/api/featuredArticles`)
    return await response.json()
  })

  const {data: lastArticles} = useSWR(`/home/${locale}/lastArticles`, async ()=>{
    const response = await fetch(`/${locale}/api/lastArticles`)
    return await response.json()
  })

  const {data: specialArticle} = useSWR(`/home/${locale}/specialArticle`, async ()=>{

    const response = await fetch(`/${locale}/api/specialArticle`)
    return await response.json()

  })

  return {
    featuredArticles,
    lastArticles,
    specialArticle
  }

}

// export const useFeaturedArticles = ({locale, article_id}) => {
//
//
//
//   const {data: featuredArticles} = useSWR('articles', async ()=>{
//
//     const result = await axios.get(`/api/homepage/featuredListArticle?locale=${locale}`)
//     return result.data
//   })
//
//
//
//   const {data: lastPublishedArticles} = useSWR('/api/lastArticles', async ()=>{
//     const result = await axios.get(`/api/homepage/lastPublishedArticles?locale=${locale}`)
//     // await wait(2000)
//     return result.data
//
//   })
//
//   return {
//     featuredArticles,
//     lastPublishedArticles
//
//   }
// }
//
// export const useLastPublishedArticles = async ({locale}) => {
//
//   const {data: LastPublishedArticles} = useSWR('articles', async ()=>{
//
//     const result = await axios.get(`/api/homepage/lastPublishedArticles?locale=${locale}`)
//     return result
//   })
//
//   return {
//     LastPublishedArticles
//   }
//
// }
//
export const useArticle = ({article, locale, category})=>{

  // const {data: id} = useSWR('/api/article', async ()=>{
  //
  //   const result = await axios.get(`/api/public/homepage/articles/${article}`)
  //   await wait(2000)
  //   return result.data
  // })

  const {data: doc} = useSWR('/api/article', async ()=>{
    const response = await fetch(`/${locale}/articles/${category}/${article}/api`)
    return await response.json()
  })


  return {
    articleData:  doc
  }
}
// export const wait = async (ms)=> {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

const wait = async (ms)=> {
  return new Promise(resolve => setTimeout(resolve, ms))
}