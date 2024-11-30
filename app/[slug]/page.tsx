import { notFound } from 'next/navigation';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import { PageData } from '../types/page';

// Import page data
import { blackjackData } from '../data/pages/blackjack';
import { rouletteData } from '../data/pages/roulette';
import { baccaratData } from '../data/pages/baccarat';
import { privacyPolicyData, disclaimerData, termsConditionsData, cookiePolicyData } from '../data/pages/legal';
import { casinoGuidesData, paymentMethodsData } from '../data/pages/guides';

// Combine all page data
const pages: PageData[] = [
  blackjackData,
  rouletteData,
  baccaratData,
  privacyPolicyData,
  disclaimerData,
  termsConditionsData,
  cookiePolicyData,
  casinoGuidesData,
  paymentMethodsData
];

export interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {page.image ? (
            <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src={page.image}
                alt={page.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <h1 className="text-5xl font-bold mb-8 text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]">
              {page.title}
            </h1>
          )}
          {page.image && <h1 className="text-4xl font-bold mb-4">{page.title}</h1>}
          <p className="text-xl text-gray-400 mb-8">{page.description}</p>
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}