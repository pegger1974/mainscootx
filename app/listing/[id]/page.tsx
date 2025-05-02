"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { getListing } from "@/app/actions/listings"
import { MapPin, Calendar, Star, MessageCircle } from "lucide-react"
import { SiteHeader } from "@/app/components/site-header"

export default function ListingPage({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState(0)

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
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <div className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Images and details */}
          <div className="md:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-zinc-800">
                <Image
                  src={listing.images[selectedImage] || "/placeholder.svg?height=800&width=1200"}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
                {listing.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-black text-sm font-bold px-3 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              {listing.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {listing.images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`aspect-square relative rounded-md overflow-hidden cursor-pointer ${
                        selectedImage === index ? "ring-2 ring-orange-500" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${listing.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Listing details */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{listing.title}</h1>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-orange-500">${listing.price.toLocaleString()}</div>
                <div className="flex items-center text-zinc-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  {listing.location}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-sm text-zinc-400">Brand</div>
                  <div className="font-medium text-white">{listing.brand}</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-sm text-zinc-400">Model</div>
                  <div className="font-medium text-white">{listing.model}</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-sm text-zinc-400">Year</div>
                  <div className="font-medium text-white">{listing.year || "Not specified"}</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-sm text-zinc-400">Condition</div>
                  <div className="font-medium text-white capitalize">{listing.condition}</div>
                </div>
              </div>

              <Tabs defaultValue="description">
                <TabsList className="bg-zinc-800 border-b border-zinc-700">
                  <TabsTrigger value="description" className="data-[state=active]:text-orange-500">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="details" className="data-[state=active]:text-orange-500">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="data-[state=active]:text-orange-500">
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <div className="text-zinc-300 space-y-4">
                    <p>{listing.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <div className="text-zinc-300 space-y-4">
                    <p>
                      Additional details about this {listing.brand} {listing.model} scooter:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Engine size: 150cc</li>
                      <li>Top speed: 60 mph</li>
                      <li>Fuel economy: 100 mpg</li>
                      <li>Weight: 230 lbs</li>
                      <li>Registration: Current until end of year</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4">
                  <div className="text-zinc-300 space-y-4">
                    <p>Shipping information:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Local pickup available in {listing.location}</li>
                      <li>Shipping available within 100 miles for an additional fee</li>
                      <li>Buyer is responsible for arranging shipping beyond 100 miles</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Seller info and actions */}
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 mr-3"></div>
                  <div>
                    <h3 className="font-bold text-white">{listing.userName}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="text-zinc-300">{listing.userRating} · 24 reviews</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-zinc-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Member since Jan 2022</span>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black mb-3">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Seller
                </Button>

                <div className="text-center text-zinc-400 text-sm mb-4">Usually responds within 2 hours</div>

                <div className="border-t border-zinc-800 pt-4 mt-4">
                  <h4 className="font-medium text-white mb-2">Listing Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Listed</span>
                      <span className="text-white">May 5, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Views</span>
                      <span className="text-white">243</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Saves</span>
                      <span className="text-white">18</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-4">Safety Tips</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Meet in a safe, public place
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Check the item before paying
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Don't share personal financial information
                  </li>
                </ul>
                <div className="mt-4 text-center">
                  <Button variant="link" className="text-orange-500 p-0 h-auto">
                    Report this listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar listings */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Listings</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Scooter+${item}`}
                    alt={`Similar scooter ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-1">Similar Scooter {item}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold">${(Math.random() * 5000 + 1000).toFixed(0)}</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
