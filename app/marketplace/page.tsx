"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { getListings } from "../actions/listings"
import { Search, Filter, Star } from "lucide-react"
import { SiteHeader } from "@/app/components/site-header"

export default function MarketplacePage() {
  const [listings, setListings] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 10000])

  useEffect(() => {
    async function fetchListings() {
      setIsLoading(true)
      const data = await getListings()
      setListings(data)
      setIsLoading(false)
    }

    fetchListings()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Scooter Marketplace</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input placeholder="Search listings..." className="pl-8 bg-zinc-800 border-zinc-700 text-white" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Brand</label>
                  <Select>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="All brands" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="all">All brands</SelectItem>
                      <SelectItem value="vespa">Vespa</SelectItem>
                      <SelectItem value="lambretta">Lambretta</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="genuine">Genuine</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Condition</label>
                  <Select>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Any condition" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="any">Any condition</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 block mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    onValueChange={(value) => setPriceRange(value)}
                    className="py-4"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Location</label>
                  <Input placeholder="Any location" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">Apply Filters</Button>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h2 className="text-lg font-bold text-white mb-4">Sell Your Scooter</h2>
              <p className="text-zinc-400 text-sm mb-4">
                Ready to sell your scooter? Create a listing and reach thousands of potential buyers.
              </p>
              <Link href="/create-listing">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">Create Listing</Button>
              </Link>
            </div>
          </div>

          {/* Listings */}
          <div className="md:col-span-3">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-white">Loading listings...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-zinc-400">{listings.length} listings found</p>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="newest">Newest first</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((listing) => (
                    <Link href={`/listing/${listing.id}`} key={listing.id}>
                      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500 transition-colors">
                        <div className="relative aspect-square">
                          <Image
                            src={listing.images[0] || "/placeholder.svg?height=400&width=400"}
                            alt={listing.title}
                            fill
                            className="object-cover"
                          />
                          {listing.featured && (
                            <div className="absolute top-2 left-2 bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-white mb-1 line-clamp-1">{listing.title}</h3>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-orange-500 font-bold">${listing.price.toLocaleString()}</span>
                            <span className="text-zinc-400 text-sm">{listing.location}</span>
                          </div>
                          <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{listing.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-zinc-700 mr-2"></div>
                              <span className="text-sm text-zinc-300">{listing.userName}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-orange-500 mr-1" />
                              <span className="text-sm text-zinc-300">{listing.userRating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
