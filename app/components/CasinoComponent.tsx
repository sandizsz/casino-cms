import React from 'react'
import Image from "next/image";
import ClaimButton from './ClaimButton'

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

interface CasinoComponentProps {
  casino: Casino;
  index: number;
}

export default function CasinoComponent({ casino, index }: CasinoComponentProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] to-[#FFDD00] opacity-100 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-6 bg-[#1E2A44] border border-[#00A3FF] rounded-lg shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] transition-all duration-300">
        {/* Position Number */}
        <div className="z-10 absolute -top-px -left-px w-14 h-14 flex items-center justify-center bg-[#000000] rounded-tl-lg rounded-br-lg border-r-2 border-b-2 border-[#00A3FF] shadow-[4px_4px_20px_rgba(0,163,255,0.3)]">
          <span className="font-['Orbitron'] font-bold text-2xl bg-gradient-to-r from-[#00A3FF] to-[#FFDD00] text-transparent bg-clip-text [text-shadow:_0_0_10px_rgba(0,163,255,0.5)]">
            #{index + 1}
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left side with Casino Logo and Ranking */}
          <div className="w-full md:w-1/4 relative">
            {/* Casino Logo */}
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-[#00A3FF]/30">
              <Image
                src={casino.imageUrl}
                alt={casino.offerTitle}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Casino Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-['Orbitron'] font-bold text-[#FFDD00] [text-shadow:_0_0_30px_#FFDD00] mb-2">
                {casino.offerDescription}
              </h3>
              <p className="text-2xl  text-white font-['Rajdhani']">{casino.offerTitle}</p>
            </div>

        
          </div>

          {/* Call to Action with Rating */}
          <div className="w-full md:w-auto flex flex-col items-center gap-4">
            {/* Rating */}
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className="text-3xl font-bold text-[#FFDD00] ">
                {casino.rating.toFixed(1)}
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${
                      star <= Math.floor(casino.rating)
                        ? "text-[#FFDD00]"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <ClaimButton offerUrl={casino.offerUrl} />
            <a
              href={casino.termsConditionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#C0C0C0] hover:text-[#00A3FF] transition-colors text-center"
            >
              T&Cs Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}