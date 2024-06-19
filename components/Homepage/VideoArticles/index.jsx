"use client"
import Image from "next/image";

export const VideoArticles = ()=> {

  const articles = [
    {
      title: "Canada's oldest grain elevator falls in fiery heap in southwest Manitoba",
      category: "News - Canada - Manitoba",
    },
    {
      title: "How I'm taking small steps to feel comfortable around people again post-pandemic",
      category: "Radio - White Coat - Black Art",
    },
    {
      title: "Ontario's Liam Diaz gets acting nomination at age 13 for breakout performance in Scarborough",
      category: "CBC KIDS NEWS",
    },
    {
      title: "Capital City Scavenger Hunt: Victoria, B.C.",
      category: "Parents",
    },
    {
      title: "Wild rabid fox bites U.S. congressman on Capitol Hill",
      category: "Radio - As It Happens",
    },
    {
      title: "Almost half of Canadians may have caught COVID",
      category: "Radio - As It Happens",
    },
    {
      imageUrl: "/path/to/tiger-woods.jpg",
      title: "Tiger Woods shoots career-worst 78 at Masters as hopes fade in 3rd round",
      category: "Golf",
    },
    {
      imageUrl: "/path/to/couple.jpg",
      title: "I Haven't Had A Night Alone With My Husband",
      category: "Parents",
    },
    {
      imageUrl: "/path/to/nhl.jpg",
      title: "'I hope he gets to 65': Vaive not surprised at Matthews breaking his Leafs scoring record",
      category: "NHL",
    },
  ];

  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold mb-4">More from CBC</h2>
    <div className="flex flex-row">
      <div className="flex-shrink w-full md:w-1/2 lg:w-1/3 space-y-4">
        {
          articles.slice(0,6).map((article, index)=> <div className="border-b pb-2" key={index}>
            <h3 className="text-lg font-semibold font-title">{
              article.title
            }</h3>
            <p className="text-sm text-gray-500">{article.category}</p>
          </div>)
        }
      </div>
      <div className="flex-shrink">
        <Image src="https://dummyimage.com/425x500/000/fff" alt="https://dummyimage.com/425x500/000/fff" width={425}
               height={500}/>
        <div className="border-b pb-2">
          <h3 className="text-lg font-semibold">{articles[4].title}</h3>
          <p className="text-sm text-gray-500">{articles[4].category}</p>
        </div>
      </div>
      <div className="flex-shrink">
        {articles.slice(7).map((article, index) => (
            <div key={index} className="relative">
              <img
                  src='/img/dummy/img7.jpg'
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.category}</p>
            </div>
        ))}
      </div>

    </div>
  </div>
}