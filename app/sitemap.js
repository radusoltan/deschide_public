// import { languages } from "@/i18n/settings";
// import axios from "axios";
//
// export default async function sitemap() {
//   try {
//     // Definim funcția pentru a obține categoriile pentru o limbă specifică
//     const fetchCategories = async (lang) => {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/${lang}/api/categories`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch categories for ${lang}`);
//       }
//       const json = await response.json();
//       return json?.data.map(category => ({
//         url: `${process.env.NEXT_PUBLIC_APP_URL}/${lang}/${category.slug}`,
//         lastModified: new Date(),
//       }));
//     };
//
//     // Facem cererile API în paralel
//     const [roCategories, ruCategories, enCategories] = await Promise.all([
//       fetchCategories('ro'),
//       fetchCategories('ru'),
//       fetchCategories('en'),
//     ]);
//
//     // Returnăm sitemap-ul combinat
//     return [
//       {
//         url: `${process.env.NEXT_PUBLIC_APP_URL}/ro`,
//         lastModified: new Date(),
//       },
//       {
//         url: `${process.env.NEXT_PUBLIC_APP_URL}/ru`,
//         lastModified: new Date(),
//       },
//       {
//         url: `${process.env.NEXT_PUBLIC_APP_URL}/en`,
//         lastModified: new Date(),
//       },
//       ...roCategories,
//       ...ruCategories,
//       ...enCategories,
//     ];
//
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//     return [];
//   }
// }