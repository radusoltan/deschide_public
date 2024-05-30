"use client"
import {useHomePageData} from "@/hooks/articles"

export const SpecialArticle = ({locale})=> {

  const {specialArticle} = useHomePageData({locale})

  return specialArticle?.length > 0 && <div>
    <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{minHeight: "19em"}}>
      <div className="relative w-full md:w-3/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
           style={{minHeight: "19rem"}}>
        <img className="absolute inset-0 w-full h-full object-cover object-center"
             src="/img/dummy/img1.jpg" alt="" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-red-500"></div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">

          <h1 className="text-white text-2xl md:text-md mx-7"> Missguided is a UK-based fashion retailer that has
            nearly doubled in size since last year. They integrated Stripe</h1>
        </div>
      </div>
      <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div className="p-12 md:pr-24 md:pl-16 md:py-12">
          <p className="text-gray-600"><span className="text-gray-900">Missguided</span> is a UK-based fashion retailer
            that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across
            mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
          <a className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Learn more about our users</span>
            <span className="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
             viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
      </div>
    </div>
  </div>
}