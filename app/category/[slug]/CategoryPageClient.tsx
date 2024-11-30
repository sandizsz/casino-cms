'use client'

import { useState } from 'react'
import CasinoComponent from "@/app/components/CasinoComponent"
import AnimatedSection from "@/app/components/AnimatedSection"
import { useLoading } from '@/app/context/LoadingContext'
import type { Casino, Category } from './types'

interface CategoryPageClientProps {
  initialCasinos: Casino[]
  initialCategory: Category | null
}

export default function CategoryPageClient({ initialCasinos, initialCategory }: CategoryPageClientProps) {
  const { setIsLoading } = useLoading()
  const [casinos] = useState(initialCasinos)
  const [category] = useState(initialCategory)
  const [error] = useState(!initialCategory)

  setIsLoading(false)

  if (error || !category) {
    return (
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
        <div className="text-center p-12 bg-[#1E2A44]/50 rounded-lg border border-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.3)]">
          <p className="text-xl font-['Rajdhani'] text-[#C0C0C0]">
            Category not found
          </p>
        </div>
      </div>
    )
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
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
