"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { getListing } from "@/app/actions/listings"
import { createCheckoutSession, listingPlans } from "@/app/actions/payments"
import { SiteHeader } from "@/app/components/site-header"

export default function PublishListingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [listing, setListing] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchListing() {
      const data = await getListing(params.id)
      setListing(data)
    }

    fetchListing()
  }, [params.id])

  async function handlePublish() {
    setIsLoading(true)

    try {
      const result = await createCheckoutSession(selectedPlan, params.id)

      if (result.success) {
        // For demo purposes, we'll redirect directly to success
        router.push(result.url)
      }
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

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
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Publish Your Listing</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-zinc-900 border-zinc-800 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white">Listing Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square rounded-md overflow-hidden bg-zinc-800 relative">
                    {listing.images && listing.images.length > 0 ? (
                      <Image
                        src={listing.images[0] || "/placeholder.svg"}
                        alt={listing.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600">No image</div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white">{listing.title}</h3>
                  <div className="flex justify-between">
                    <span className="text-orange-500 font-bold">${listing.price.toLocaleString()}</span>
                    <span className="text-zinc-400">{listing.location}</span>
                  </div>
                  <p className="text-zinc-400 text-sm line-clamp-3">{listing.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-zinc-900 border-zinc-800 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Choose a Listing Plan</CardTitle>
                <CardDescription className="text-zinc-400">
                  Select the best option to maximize your listing's visibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listingPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPlan === plan.id
                          ? "border-orange-500 bg-zinc-800"
                          : "border-zinc-700 hover:border-zinc-600"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-white flex items-center">
                            {plan.name}
                            {plan.featured && (
                              <span className="ml-2 text-xs bg-orange-500 text-black px-2 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </h3>
                          <p className="text-zinc-400 mt-1">
                            {plan.duration} days listing period
                            {plan.featured && " with featured placement"}
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center text-sm text-zinc-300">
                              <Check className="h-4 w-4 text-orange-500 mr-2" />
                              {plan.duration} days visibility
                            </li>
                            <li className="flex items-center text-sm text-zinc-300">
                              <Check className="h-4 w-4 text-orange-500 mr-2" />
                              Unlimited messages
                            </li>
                            {plan.featured && (
                              <>
                                <li className="flex items-center text-sm text-zinc-300">
                                  <Check className="h-4 w-4 text-orange-500 mr-2" />
                                  Featured in search results
                                </li>
                                <li className="flex items-center text-sm text-zinc-300">
                                  <Check className="h-4 w-4 text-orange-500 mr-2" />
                                  Homepage visibility
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-white">${(plan.price / 100).toFixed(2)}</p>
                          {selectedPlan === plan.id && (
                            <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center mt-2 ml-auto">
                              <Check className="h-4 w-4 text-black" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handlePublish}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Continue to Payment"}
                </Button>
              </CardFooter>
            </Card>

            <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <h3 className="font-bold text-white mb-2 flex items-center">
                <Star className="h-5 w-5 text-orange-500 mr-2" />
                Why list on ScootX?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                  <span className="text-zinc-300">Access to the largest community of scooter enthusiasts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                  <span className="text-zinc-300">Secure messaging and transaction support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                  <span className="text-zinc-300">Verified buyer and seller profiles with ratings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                  <span className="text-zinc-300">Dedicated customer support for all listings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
