import axios from "@/lib/axios";
import {NextResponse} from "next/server";

export async function GET(request, {params: {locale}}) {
  const categories = await axios.get(`api/public/homepage/categories?locale=${locale}`)
  return NextResponse.json(categories.data)
}