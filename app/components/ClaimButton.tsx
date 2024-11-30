'use client'

import { Button } from "./ui/button"

interface ClaimButtonProps {
  offerUrl: string
}

export default function ClaimButton({ offerUrl }: ClaimButtonProps) {
  return (
    <Button
      className="bg-[#00A3FF] hover:bg-[#FFDD00] text-white hover:text-[#0D1117] shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(255,221,0,0.5)] transition-all duration-300 font-['Rajdhani'] text-lg font-bold"
      size="lg"
      onClick={() => window.open(offerUrl, '_blank')}
    >
      Claim Bonus
    </Button>
  )
}
