
import {NextResponse} from "next/server";
import {getLastPublishedArticleByCategory} from "@/hooks/elasticsearch";
import axios from "@/lib/axios";
import {client} from "@/lib/elascticsearch";

export async function GET(request, {params: {locale}}) {


  return NextResponse.json({

  })
}