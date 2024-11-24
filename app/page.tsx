import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Badge } from "@/app/components/ui/badge";
import { Headphones, Shield, Gamepad2, CreditCard, Gift } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { client } from "@/sanity/lib/client";
import { Casino } from "./utils/interface";
import CasinoComponent from "./components/CasinoComponent";
import AnimatedSection from "./components/AnimatedSection"


async function getPosts() {
  const query = `*[_type == "casino"] {
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
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Home() {

  const casinos: Casino[] = await getPosts()
  console.log(casinos, 'casinos')

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
  ]

  /*

  const casinosold = [
    {
      name: "BetiBet",
      logo: "/placeholder.svg",
      offer: "100% up to €1000",
      freeSpins: "PLUS 1 FREE BET",
      rating: 9.9
    },
    {
      name: "Slots Gallery",
      logo: "/placeholder.svg",
      offer: "100% up to €500",
      freeSpins: "100 Free Spins",
      rating: 9.9
    }
  ]

  */

  const guides = [
    {
      title: "Blackjack Guide",
      image: "/images/blackjack_rules.jpg",
      description: "You must know the basics of the game before you get down to playing it. Go through our entire website to learn about the different aspects of playing blackjack."
    },
    {
      title: "Roulette Guide",
      image: "/images/roullete.png",
      description: "This guide has everything you need to know on how to increase your chances to win at roulette and get better odds when you play this exciting casino game."
    },
    {
      title: "Baccarat Guide",
      image: "/images/baccarat.jpeg",
      description: "With the right baccarat strategy, you can help grow your bankroll, raise your winning odds, and take your gameplay to the next level."
    }
  ]

  return (
    <div className="min-h-screen bg-[#E8F3F0] overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <AnimatedSection className="w-full py-20 bg-gradient-to-b from-[#00BFA5] to-[#E8F3F0] text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              First class online casino experience
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              First class online casino experience and bonuses offered by leading industry professionals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
              <div className="space-y-2">
                <div className="text-5xl font-bold">2500</div>
                <div className="text-sm">
                  Deposit Bonus
                  <br />(EUR)
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">200</div>
                <div className="text-sm">
                  Free Spins
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">30</div>
                <div className="text-sm">
                  Sign Up Bonus
                  <br />(EUR)
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Casino Offers */}
        <AnimatedSection className="w-full py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Most exciting offers picked by SLOTSSEASON
            </h2>

            <div className="grid gap-6">
              {casinos?.length > 0 && casinos.map((casino) => (
                <CasinoComponent key={casino._id} casino={casino} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection className="w-full py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.2} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F3F0] flex items-center justify-center mx-auto text-[#00BFA5]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Casino Guides */}
        <AnimatedSection className="w-full py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                Various casino guides to
                <span className="text-[#00BFA5]"> increase your winnings</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We care about you and your experience in the casinos we are providing, that's why we have
                prepared complete guides of most popular casino games
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <AnimatedSection key={guide.title} delay={index * 0.2}>
                  <Card className="border-none bg-white/50 hover:bg-white transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        width={500}
                        height={300}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <h3 className="text-xl font-bold">{guide.title}</h3>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="w-full bg-white">
        {/* Legal Links */}
        <div className="border-b">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#00BFA5]">
              <Link href="/privacy-policy" className="hover:text-[#008C7A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-[#008C7A] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-[#008C7A] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-[#008C7A] transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Gambling Awareness Logos */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image 
              src="/images/Image1.png" 
              alt="Gambling Commission" 
              width={180} 
              height={40}
              className="h-8 w-auto object-contain"
            />
            <Image 
              src="/images/Image2.png" 
              alt="GamCare" 
              width={180} 
              height={40}
              className="h-8 w-auto object-contain"
            />
            <Image 
              src="/images/Image3.png" 
              alt="BeGambleAware" 
              width={180} 
              height={40}
              className="h-8 w-auto object-contain"
            />
            <Image 
              src="/images/Image4.png" 
              alt="GamStop" 
              width={180} 
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} slotsseason
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}