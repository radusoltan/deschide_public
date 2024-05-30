import axios from "@/lib/axios";

export const getFeaturedListArticles = async () => {

  const response = await axios.get("/api/homepage/featuredListArticle");
  return response;
}