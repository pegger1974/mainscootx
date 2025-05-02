"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Share2 } from "lucide-react"
import { getListing } from "@/app/actions/listings"

export default function ListingSuccessPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [listing, setListing] = useState<any>(null)

  useEffect(() => {
    async function fetchListing() {
      const data = await getListing(params.id)
      setListing(data)
    }

    fetchListing()
  }, [params.id])

  if (!listing) {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-black" />
          </div>
          <CardTitle className="text-2xl text-white">Listing Published!</CardTitle>
          <CardDescription className="text-zinc-400">Your listing is now live on ScootX</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">{listing.title}</h3>
            <p className="text-orange-500 font-bold">${listing.price.toLocaleString()}</p>
          </div>

          <div className="text-center text-zinc-400">
            <p>Your listing will be active for 30 days and visible to thousands of potential buyers.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-black"
            onClick={() => router.push(`/listing/${params.id}`)}
          >
            View Your Listing
          </Button>
          <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
            <Share2 className="h-4 w-4 mr-2" />
            Share Listing
          </Button>
          <div className="text-center w-full">
            <Link href="/" className="text-orange-500 hover:underline text-sm">
              Return to homepage
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
