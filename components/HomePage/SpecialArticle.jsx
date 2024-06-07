"use client"
import {useHomePageData} from "@/hooks/articles"
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const SpecialArticle = ({locale})=> {

  const {specialArticle} = useHomePageData({locale})
  const { width } = useWindowSize();

  const some = specialArticle?.some(({_source})=>_source)

  return specialArticle?.length > 0 && <>

    {
      specialArticle?.map((article)=> {

        const image = width < 768 ?
            article._source.images?.find(i=>i.is_main)?.thumbnails.find(th=>th.rendition_id===1) :
            article._source.images?.find(i=>i.is_main)?.thumbnails.find(th=>th.rendition_id===2)



        const {is_breaking, is_flash, is_alert, title, lead, body} = article._source.translations.find(t=>t.locale === locale)

        return <div className="container max-w-7xl mx-auto mb-5" key={article?._source?.article_id}>
          <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl h-96"
               style={{minHeight: "19em"}}>
            <div
                className="relative w-full md:w-3/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                style={{minHeight: "19rem"}}>

              <Image
                  src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + image?.path}
                  width={image?.width}
                  height={image?.height}
              />
              <div className="absolute top-0 text-blue-500 bg-amber-500">
                <span className={"bg-red-600 p-2 font-black font-category text-white top-2"
                  // classNames(
                  //     is_alert ? "bg-amber-500" : is_breaking ? "bg-red-600" : "bg-gray-300",
                  //     "bg-red-600 p-2 font-black font-category text-white top-2"
                  // )
                }>{
                  is_breaking ? "BREAKING NEWS" :
                  is_alert ? "NEWS ALERT" :
                      "FLASH"
                }</span>
              </div>

              <div className={"absolute inset-0 w-full top-1/2 h-1/2 bg-gradient-to-t from-red-600"}></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">

                <h1 className="text-white text-2xl md:text-md mx-7 font-title font-bold">{title}</h1>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                <div className="text-gray-600 font-light font-text"
                   dangerouslySetInnerHTML={{
                     __html: lead ? lead : body.substring(0, 300) + "(...)"
                   }}
                />
                <a className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
                   href="">
                  <span>Deschide Stirea</span>
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

      })
    }

  </>
}