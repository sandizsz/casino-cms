import React from 'react'
import { Card } from "./ui/card"
import { CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { Casino } from '../utils/interface'

interface CasinoComponentProps { 
    casino: Casino
}

const CasinoComponent = ({ casino }: CasinoComponentProps) => {
  return (
    <div>
        <Card key={casino._id} className="overflow-hidden border-2 border-[#00BFA5]/20">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[200px_1fr_200px] gap-6 items-center">
                    <Image
                      src={casino.imageUrl}
                      alt={casino.offerTitle}
                      width={160}
                      height={80}
                      className="mx-auto"
                    />
                    <div className="space-y-2">
                      <div className="flex gap-2 flex-wrap">
                       
                 
                        {casino.categories?.map((category) => (
                          <Badge 
                            key={category._id}
                            variant="secondary"
                            className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90"
                          >
                            {category.title}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xl font-bold">{casino.offerTitle}</div>
                      <div className="text-sm text-muted-foreground">{casino.offerDescription}</div>
                    </div>
                    <div className="text-center space-y-4">
                      <div>
                        <Badge variant="outline">Rating</Badge>
                        <div className="text-3xl font-bold mt-1">{casino.rating}</div>
                      </div>
                      <Button className="w-full bg-[#00BFA5] hover:bg-[#00BFA5]/90" asChild>
                            <Link href={casino.offerUrl}>Claim Offer</Link>
                      </Button>
                      <Link href={casino.termsConditionsUrl} className="text-xs text-muted-foreground">
                        Terms & Conditions
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

    </div>
  )
}

export default CasinoComponent