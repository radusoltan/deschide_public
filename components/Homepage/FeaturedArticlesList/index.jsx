"use client"
import {useParams} from "next/navigation";
import {useArticles} from "@/hooks/articles";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import {First} from "@/components/Homepage/FeaturedArticlesList/First";
import {shuffleArray} from "@/lib/helpers";
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {ArticleItem} from "@/components/Homepage/FeaturedArticlesList/ArticleItem";

export const FeaturedArticlesList = () => {
  const {locale} = useParams()
  const {featuredArticles} = useArticles({locale})
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    if (featuredArticles){
      setArticles(featuredArticles)
      const interval = setInterval(() => {
        setArticles(prevArticles => shuffleArray([...prevArticles]));
      }, 10000)
      return () => clearInterval(interval);
    }
  }, [featuredArticles])

  return <div className="bg-white py-6">
    <div className="xl:container mx-auto px-4 sm:px-4 xl:px-2">
      <motion.div
          className="flex flex-row flex-wrap"
          variants={{
            hidden: {opacity: 1, scale: 0},
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
      >

        {articles !== undefined && articles?.length > 0 && <First article={articles[0]?._source}/>}
        <div className="flex-shrink max-w-full w-full lg:w-1/2">
          <div className="box-one flex flex-row flex-wrap">{
            articles?.map((article, index) =>
                index > 0 && index <= 7 && <ArticleItem key={article._id} article={article} locale={locale}/>

            )
          }</div>
        </div>
      </motion.div>

    </div>
  </div>
}