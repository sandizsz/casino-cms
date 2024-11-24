import Link from "next/link"
import React from 'react'
import { client } from "@/sanity/lib/client"
import { Category } from "../utils/interface"

// Add this function to fetch categories
async function getCategories() {
  const query = `*[_type == "category"] {
    title,
    slug,
    _id
  }`
  return await client.fetch(query)
}

const Navbar = async () => {
  const categories: Category[] = await getCategories()
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#00BFA5] text-white">
      <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SLOTSSEASON
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((category) => (
            <Link 
              key={category._id}
              href={`/category/${category.slug.current}`}
              className="hover:text-white/80"
            >
              {category.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar