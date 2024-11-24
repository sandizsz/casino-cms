import { client } from "@/sanity/lib/client";
import { Category } from "../utils/interface";
import { ClientNav } from "./NavbarClient";

async function getCategories() {
  const query = `*[_type == "category"] {
    title,
    slug,
    _id
  }`;
  return await client.fetch(query);
}

const Navbar = async () => {
  const categories: Category[] = await getCategories();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#00BFA5] text-white">
      <ClientNav categories={categories} />
    </header>
  );
};

export default Navbar;