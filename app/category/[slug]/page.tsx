import { client } from "@/sanity/lib/client"
import { Casino } from "../../utils/interface"
import CasinoComponent from "../../components/CasinoComponent"

async function getCategoryData(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    title,
    description,
    "casinos": *[_type == "casino" && references(^._id)] {
      _id,
      offerTitle,
      offerUrl,
      offerDescription,
      rating,
      "imageUrl": casinoImage.asset->url,
      termsConditionsUrl,
      categories[]-> {
        _id,
        slug,
        title
      }
    }
  }`

  return await client.fetch(query, { slug })
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const categoryData = await getCategoryData(params.slug)

  return (
    <div className="min-h-screen bg-[#E8F3F0]">
      <section className="py-20 bg-gradient-to-b from-[#00BFA5] to-[#E8F3F0] text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            {categoryData.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         

          <div className="grid gap-6">
            {categoryData.casinos?.length > 0 ? (
              categoryData.casinos.map((casino: Casino) => (
                <CasinoComponent key={casino._id} casino={casino} />
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No casinos found in this category.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
