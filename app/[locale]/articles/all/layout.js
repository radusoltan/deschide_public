export default function AllArticlesLayout({children}){

  return <div className="bg-gray-50 py-6">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        {children}
      </div>
    </div>
  </div>
}