'use client'
import { Button } from "./ui/button"
import Link from "next/link"

interface ClaimButtonProps {
  offerUrl: string;
  offerTitle: string;
}

export default function ClaimButton({ offerUrl, offerTitle }: ClaimButtonProps) {
  // Create friendly URL
  const friendlyUrl = `/${offerTitle.toLowerCase().replace(/\s+/g, '')}-offer`;

  return (
    <Link 
      href={friendlyUrl}
      target="_blank"  // This opens in new tab
    >
      <Button
        className="bg-[#00A3FF] hover:bg-[#FFDD00] text-white hover:text-[#0D1117] shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(255,221,0,0.5)] transition-all duration-300 font-['Rajdhani'] text-lg font-bold"
        size="lg"
      >
        Claim Bonus
      </Button>
    </Link>
  );
}