import Axios from "axios"
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const axios = Axios.create({
  baseURL: "http://deschide.api/",
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

export default axios