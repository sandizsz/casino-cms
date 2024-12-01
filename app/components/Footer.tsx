import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E2A44] text-white">
      {/* Legal Links */}
      <div className="border-b border-[#00A3FF]/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#00A3FF]">
            <Link href="/privacy-policy" className="hover:text-[#FFDD00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#FFDD00] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#FFDD00] transition-colors">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#FFDD00] transition-colors">
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
            alt="Gambling Awareness Logo 1"
            width={100}
            height={50}
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/images/Image2.png"
            alt="Gambling Awareness Logo 2"
            width={100}
            height={50}
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/images/Image3.png"
            alt="Gambling Awareness Logo 3"
            width={100}
            height={50}
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image 
            src="/images/Image4.png"
            alt="Gambling Awareness Logo 3"
            width={100}
            height={50}
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#00A3FF]/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-[#C0C0C0]">
            Copyright {new Date().getFullYear()} GambleStrike. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
