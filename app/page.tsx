import { Card, CardContent } from "./components/ui/card";
import { Headphones, Shield, Gamepad2, ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { Casino } from "./utils/interface";
import CasinoComponent from "./components/CasinoComponent";
import AnimatedSection from "./components/AnimatedSection";
import CountUp from "./components/CountUp";
import { blackjackData } from "./data/pages/blackjack";
import { rouletteData } from "./data/pages/roulette";
import { baccaratData } from "./data/pages/baccarat";
import { casinoGuidesData } from "./data/pages/guides";

async function getPosts() {
  const query = `*[_type == "casino"] | order(orderRank) {
    _id,
    offerTitle,
    offerUrl,
    offerDescription,
    offerText,
    rating,
    "imageUrl": casinoImage.asset->url,
    termsConditionsUrl,
    categories[]-> {
      _id,
      slug,
      title
    },
    paymentMethods[]-> {
      _id,
      name,
      "image": {
        "asset": {
          "url": image.asset->url
        }
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const casinos: Casino[] = await getPosts();

  const features = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Customer Support",
      description: "Last but not least the customer service should have long opening hours, be friendly and always put the player in the driver seat."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform and Trustworthy Owners",
      description: "The most important is to play at a platform with great security and that the owners have a good reputation so you know that your personal information and financials are treated with respect."
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Quality Games",
      description: "To get the best gaming experience it is also crucial with a wide variety of quality games. You should be able to play all popular types of games from a wide range of providers."
    }
  ];

  const guides = [
    blackjackData,
    rouletteData,
    baccaratData
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <main className="relative">
        {/* Hero Section */}
        <AnimatedSection className="w-full py-20 bg-gradient-to-b from-[#1E2A44] to-[#0D1117] relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00] animate-glow">
            WELCOME TO GAMBLESTRIKE
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-[#C0C0C0]">
              On this page, you will find a wide ranch of deposit and no deposit casino bonus offers. Quickly compare the alternatives by browsing through the updated list of casino bonuses below. We have everything from generous welcome bonuses, a lot of free spins, cash back bonuses and more. We aim to have something for everyone and will continue to do our best to provide the most competitive comparison list for our visitors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
              <CountUp
                end={2500}
                label="Deposit Bonus<br />(EUR)"
                suffix=""
              />
              <CountUp
                end={200}
                label="Free Spins"
              />
              <CountUp
                end={30}
                label="Sign Up Bonus<br />(EUR)"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Casino Offers */}
        <AnimatedSection className="w-full py-20 bg-[#0D1117]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]">
              Most exciting offers picked by GAMBLESTRIKE
            </h2>

            <div className="grid gap-6">
              {casinos?.length > 0 && casinos.map((casino, index) => (
                <CasinoComponent key={casino._id} casino={casino} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection className="w-full py-20 bg-[#1E2A44]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.2} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00A3FF]/20 flex items-center justify-center mx-auto text-[#FFDD00] shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#FFDD00]">{feature.title}</h3>
                  <p className="text-[#C0C0C0]">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Casino Guides */}
        <AnimatedSection className="w-full py-20 bg-[#0D1117]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">
                Various casino guides to
                <span className="text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"> increase your winnings</span>
              </h2>
              <p className="text-[#C0C0C0] max-w-2xl mx-auto">
                We care about you and your experience in the casinos we are providing, that&apos;s why we have
                prepared complete guides of most popular casino games
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {guides.map((guide, index) => (
                  <AnimatedSection key={guide.title} delay={index * 0.2}>
                    <Link href={`/${guide.slug}`}>
                      <Card className="h-full border border-[#00A3FF] bg-[#1E2A44]/50 hover:bg-[#1E2A44] transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]">
                        <CardContent className="p-6 flex flex-col h-full space-y-4">
                          <div className="relative w-full h-[200px]">
                            <Image
                              src={guide.image}
                              alt={guide.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-[#FFDD00]">{guide.title}</h3>
                          <p className="text-[#C0C0C0] flex-grow">{guide.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
              <div className="flex justify-center">
                <Link href={`/${casinoGuidesData.slug}`} className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00A3FF] hover:bg-[#0082CC] text-white font-semibold transition-colors duration-300">
                  Read More Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}