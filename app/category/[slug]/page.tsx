import { client } from "@/sanity/lib/client";
import CasinoComponent from "@/app/components/CasinoComponent";
import AnimatedSection from "@/app/components/AnimatedSection";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

interface Casino {
  _id: string;
  offerTitle: string;
  offerUrl: string;
  offerDescription: string;
  rating: number;
  imageUrl: string;
  termsConditionsUrl: string;
  categories: Category[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getCasinosByCategory(slug: string) {
  const query = `*[_type == "casino" && references(*[_type == "category" && slug.current == "${slug}"]._id)] {
    _id,
    offerTitle,
    offerUrl,
    offerDescription,
    rating,
    "imageUrl": casinoImage.asset->url,
    termsConditionsUrl,
    categories[]-> {
      _id,
      title,
      slug
    }
  }`;

  const data = await client.fetch(query);
  return data as Casino[];
}

async function getCategory(slug: string) {
  const query = `*[_type == "category" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug
  }`;

  const data = await client.fetch(query);
  return data as Category;
}

export const revalidate = 60;

export default async function CategoryPage({ params }: PageProps) {
  const parameters = await params;
  const slug = parameters.slug;
  
  const casinos = await getCasinosByCategory(slug);
  const category = await getCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
        <div className="text-center p-12 bg-[#1E2A44]/50 rounded-lg border border-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.3)]">
          <p className="text-xl font-['Rajdhani'] text-[#C0C0C0]">
            Category not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <AnimatedSection className="w-full py-20 bg-gradient-to-b from-[#1E2A44] to-[#0D1117] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-bold text-center text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00] mb-12">
            {category.title}
          </h1>
          
          <div className="space-y-6">
            {casinos?.map((casino) => (
              <AnimatedSection key={casino._id}>
                <CasinoComponent casino={casino} />
              </AnimatedSection>
            ))}

            {(!casinos || casinos.length === 0) && (
              <div className="text-center p-12 bg-[#1E2A44]/50 rounded-lg border border-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                <p className="text-xl font-['Rajdhani'] text-[#C0C0C0]">
                  No casinos found in this category yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
