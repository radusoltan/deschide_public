import {NextResponse} from "next/server";
import axios from "@/lib/axios";
import {client} from "@/lib/elascticsearch";

export const GET = async (request, {params: {locale}})=>{
  const ids = await axios.get(`/api/public/homepage/featuredListArticle?locale=${locale}`)

  try {
    const featuredArticles = await client.mget({
      body: {
        docs: ids.data.map(id=>({
          "_id": id,
          "_index": "articles"
        }))
      }
    })
    return NextResponse.json(featuredArticles.docs);
  } catch (e) {
    return NextResponse.json([])
  }


}