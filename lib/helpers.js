import {useCategories} from "@/hooks/categories";

export const wait = async (ms)=> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const categoryBySlug = ({locale, slug})=>{
  const {items} = useCategories({locale})
  console.log('helper', items?.data)
  const cat = items?.data?.find(item=> item.translations.some(t=>t.locale===locale) && item.translations.some(t=>t.slug===slug) )
  console.log(cat)
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

  }

  return array;
}

