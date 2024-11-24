/* import { client } from "@/sanity/lib/client"; */
import React from 'react'
/* import { Category } from "../utils/interface"; */

/* async function getAllCategories() {
  const query = `*[_type == "category"] {
    title,
    slug,
    _id
  }`;

  const categories = await client.fetch(query);
  console.log('Server-side data:', categories);
  return categories;
} */

export const revalidate = 60;

const page = async () => {
  /* const categories: Category[] = await getAllCategories(); */
  
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div>CATEGORY</div>
      </div>
    </main>
  )
}

export default page