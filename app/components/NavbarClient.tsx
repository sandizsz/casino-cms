"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Category } from "../utils/interface"
import { useState } from "react"

interface NavbarClientProps {
  categories: Category[]
}

export function NavbarClient({ categories }: NavbarClientProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#1E2A44] border-b border-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center relative z-[60]">
            <div className="absolute -top-8 w-[140px] h-[100px] md:w-[180px] md:h-[100px] lg:w-[220px] lg:h-[120px]">
              <Image
                src="/images/gamblestrike.png"
                alt="Gamblestrike Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/category/${category.slug.current}`}
                className={`text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                  pathname === `/category/${category.slug.current}`
                    ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                    : "text-[#C0C0C0] hover:text-[#00A3FF]"
                }`}
              >
                {category.title}
              </Link>
            ))}
            
            <Link
              href="/casino-guides"
              className={`text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/casino-guides"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
            >
              Casino Guides
            </Link>
            <Link
              href="/payment-methods"
              className={`text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/payment-methods"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
            >
              Payment Methods
            </Link>
            <Link
              href="/how-to-play"
              className={`text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/how-to-play"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
            >
              How to Play
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-[#C0C0C0] hover:text-[#00A3FF] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-5 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-50 bg-[#1E2A44] ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 pt-16 md:pt-14 space-y-2">
      
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/category/${category.slug.current}`}
                className={`block text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                  pathname === `/category/${category.slug.current}`
                    ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                    : "text-[#C0C0C0] hover:text-[#00A3FF]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.title}
              </Link>
            ))}
            
            <Link
              href="/casino-guides"
              className={`block text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/casino-guides"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Casino Guides
            </Link>
            <Link
              href="/payment-methods"
              className={`block text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/payment-methods"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Payment Methods
            </Link>

            <Link
              href="/how-to-play"
              className={`block text-lg font-['Rajdhani'] font-semibold transition-colors duration-200 ${
                pathname === "/how-to-play"
                  ? "text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00]"
                  : "text-[#C0C0C0] hover:text-[#00A3FF]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How to Play
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}