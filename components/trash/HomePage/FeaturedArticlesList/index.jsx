"use client"
import {useHomePageData} from "@/hooks/articles";
import {shuffleArray} from "@/lib/helpers";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {First} from "@/components/HomePage/FeaturedArticlesList/First";
import {ArticleItem} from "@/components/HomePage/FeaturedArticlesList/ArticleItem";
import useWindowSize from "@/hooks/useWindowSize";

export const FeaturedArticlesListPage = ({locale}) => {

  const {featuredArticles} = useHomePageData({locale})

  const [articles, setArticles] = useState(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (featuredArticles){
      setArticles(featuredArticles)
      const interval = setInterval(() => {
        setArticles(prevArticles => shuffleArray([...prevArticles]));
      }, 10000)
      return () => clearInterval(interval);
    }
  }, [featuredArticles]);

  const list = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return articles !==null && articles.length > 0 && <div className="bg-white py-6">

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
        <First article={articles[0]._source} locale={locale}/>
        <div className="flex-shrink max-w-full w-full lg:w-1/2">
          <div className="box-one flex flex-row flex-wrap">{
            articles.map((article, index) =>
                index > 0 && index <= 8 && width < 768 ? <ArticleItem key={article._id} article={article} locale={locale} /> :
                    article && index > 0 && index <= 4 && width > 768 ? <ArticleItem key={article._id} article={article} locale={locale} /> :''
            )
          }</div>
        </div>
      </motion.div>
    </div>
  </div>
}
