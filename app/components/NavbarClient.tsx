"use client"

import Link from "next/link";
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Category } from "../utils/interface";

export const ClientNav = ({ categories }: { categories: Category[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SLOTSSEASON
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 bg-[#00BFA5] border-t border-white/10">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/category/${category.slug.current}`}
              className="block py-2 hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {category.title}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};