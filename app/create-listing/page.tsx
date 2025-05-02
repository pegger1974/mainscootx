"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { createListing } from "../actions/listings"
import { UploadCloud } from "lucide-react"
import { SiteHeader } from "@/app/components/site-header"

export default function CreateListingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [images, setImages] = useState<string[]>([])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)

    try {
      const listingData = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        price: Number(formData.get("price")),
        condition: formData.get("condition") as any,
        location: formData.get("location") as string,
        brand: formData.get("brand") as string,
        model: formData.get("model") as string,
        year: Number(formData.get("year")) || undefined,
        images: images,
      }

      const listing = await createListing(listingData)
      router.push(`/listing/${listing.id}/publish`)
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // Update the handleImageUpload function to use placeholder images
  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    // In a real app, you would upload the images to a storage service
    // For demo purposes, we'll just simulate adding image URLs
    if (event.target.files && event.target.files.length > 0) {
      const newImages = Array.from(event.target.files).map(
        (_, index) => `/placeholder.svg?height=400&width=400&text=Scooter+${images.length + index + 1}`,
      )
      setImages([...images, ...newImages])
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Create a New Listing</h1>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Scooter Details</CardTitle>
            <CardDescription className="text-zinc-400">
              Provide information about the scooter you're selling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="listing-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Listing Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Vintage 1965 Vespa 150 Super"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand" className="text-white">
                      Brand
                    </Label>
                    <Input
                      id="brand"
                      name="brand"
                      placeholder="e.g., Vespa, Lambretta"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="model" className="text-white">
                      Model
                    </Label>
                    <Input
                      id="model"
                      name="model"
                      placeholder="e.g., 150 Super, V200"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="year" className="text-white">
                      Year
                    </Label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      placeholder="e.g., 1965"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition" className="text-white">
                      Condition
                    </Label>
                    <Select name="condition" defaultValue="good">
                      <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
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
                    <Label htmlFor="price" className="text-white">
                      Price ($)
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      placeholder="e.g., 4500"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-white">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g., San Francisco, CA"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your scooter in detail..."
                    rows={5}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Images</Label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center">
                    <UploadCloud className="h-12 w-12 mx-auto text-zinc-500 mb-4" />
                    <p className="text-zinc-400 mb-2">Drag and drop images or click to browse</p>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800"
                      onClick={() => document.getElementById("images")?.click()}
                    >
                      Select Images
                    </Button>

                    {images.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-zinc-800">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Listing image ${index + 1}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              form="listing-form"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black"
              disabled={isLoading}
            >
              {isLoading ? "Creating listing..." : "Continue to Publish"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
