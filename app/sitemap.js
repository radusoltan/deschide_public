
import {languages} from "@/i18n/settings";
import axios from "axios";

export default async function sitemap() {



  let result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/ro/api/categories`)
  let json = await result.json();

  const roCategories = json?.data.map(category => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/ro/${category.slug}`,
    lastModified: new Date(),

  }))

  result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/ru/api/categories`)
  json = await result.json();

  const ruCategories = json?.data.map(category => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/ru/${category.slug}`,
    lastModified: new Date(),

  }))

  result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/en/api/categories`)
  json = await result.json();

  const enCategories = json?.data.map(category => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/en/${category.slug}`,
    lastModified: new Date(),

  }))



  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/ro`,
      lastModified: new Date(),
      // alternates: {
      //   languages: {
      //     ro: `${process.env.NEXT_PUBLIC_APP_URL}/ro`,
      //     ru: `${process.env.NEXT_PUBLIC_APP_URL}/ru`,
      //     en: `${process.env.NEXT_PUBLIC_APP_URL}/en`,
      //   },
      // },
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/ru`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/en`,
      lastModified: new Date(),
    },
      ...roCategories,
      ...ruCategories,
      ...enCategories,
  ]
}