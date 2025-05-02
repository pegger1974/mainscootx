"use server"

import { getUser } from "./auth"
import { redirect } from "next/navigation"

// Import the image paths
import { scooterImages } from "../components/image-paths"

export type ScooterListing = {
  id: string
  title: string
  description: string
  price: number
  condition: "new" | "like-new" | "excellent" | "good" | "fair" | "poor"
  location: string
  brand: string
  model: string
  year?: number
  images: string[]
  featured: boolean
  userId: string
  userName: string
  userRating: number
  createdAt: string
  expiresAt: string
  status: "active" | "sold" | "expired" | "draft"
}

// Update the sample listings to use the image paths
const sampleListings: ScooterListing[] = [
  {
    id: "listing_1",
    title: "Vintage 1965 Vespa 150 Super",
    description:
      "Beautiful restored vintage Vespa in excellent condition. Original paint, new tires, and recently serviced engine. Perfect for collectors or daily riders who appreciate classic Italian design.",
    price: 4500,
    condition: "excellent",
    location: "San Francisco, CA",
    brand: "Vespa",
    model: "150 Super",
    year: 1965,
    images: [scooterImages.vespaVintage, scooterImages.placeholder],
    featured: true,
    userId: "user_1",
    userName: "VintageRider",
    userRating: 4.9,
    createdAt: "2023-04-15T10:30:00Z",
    expiresAt: "2023-05-15T10:30:00Z",
    status: "active",
  },
  {
    id: "listing_2",
    title: "Lambretta V200 Special - Low Miles",
    description:
      "Modern Lambretta with classic styling. Only 500 miles on the odometer. Includes windshield, rear rack, and spare tire. Perfect condition with no scratches or dents.",
    price: 3800,
    condition: "like-new",
    location: "Austin, TX",
    brand: "Lambretta",
    model: "V200 Special",
    year: 2021,
    images: [scooterImages.lambrettaV200, scooterImages.placeholder],
    featured: true,
    userId: "user_2",
    userName: "ScooterEnthusiast",
    userRating: 4.7,
    createdAt: "2023-04-20T14:45:00Z",
    expiresAt: "2023-05-20T14:45:00Z",
    status: "active",
  },
  {
    id: "listing_3",
    title: "Custom Honda Ruckus - Performance Upgrades",
    description:
      "Heavily modified Honda Ruckus with performance upgrades. Custom exhaust, air intake, and ECU tuning. Stretched frame with custom seat and LED lighting throughout.",
    price: 2900,
    condition: "excellent",
    location: "Miami, FL",
    brand: "Honda",
    model: "Ruckus",
    year: 2019,
    images: [scooterImages.hondaRuckus, scooterImages.placeholder],
    featured: false,
    userId: "user_3",
    userName: "CustomScooterKing",
    userRating: 4.8,
    createdAt: "2023-04-25T09:15:00Z",
    expiresAt: "2023-05-25T09:15:00Z",
    status: "active",
  },
  {
    id: "listing_4",
    title: "Genuine Buddy 170i - Perfect Commuter",
    description:
      "Reliable and fuel-efficient scooter perfect for city commuting. Recently serviced with new battery and tires. Includes top case for storage and a phone mount.",
    price: 1800,
    condition: "good",
    location: "Chicago, IL",
    brand: "Genuine",
    model: "Buddy 170i",
    year: 2018,
    images: [scooterImages.genuineBuddy, scooterImages.placeholder],
    featured: false,
    userId: "user_4",
    userName: "CityCommuter",
    userRating: 4.5,
    createdAt: "2023-04-28T16:20:00Z",
    expiresAt: "2023-05-28T16:20:00Z",
    status: "active",
  },
  {
    id: "listing_5",
    title: "Vespa GTS 300 Super Sport - Like New",
    description:
      "Top-of-the-line Vespa with powerful 300cc engine. Includes Givi windshield, heated grips, and rear trunk. Perfect for both city riding and longer trips.",
    price: 6200,
    condition: "like-new",
    location: "Seattle, WA",
    brand: "Vespa",
    model: "GTS 300 Super Sport",
    year: 2022,
    images: [scooterImages.vespaGts300, scooterImages.placeholder],
    featured: true,
    userId: "user_5",
    userName: "VespaCollector",
    userRating: 5.0,
    createdAt: "2023-05-01T11:10:00Z",
    expiresAt: "2023-06-01T11:10:00Z",
    status: "active",
  },
  {
    id: "listing_6",
    title: "Restored Lambretta GP200 - Vintage Italian Classic",
    description:
      "Fully restored classic Lambretta GP200. Frame-off restoration with all original parts. New paint, chrome, and upholstery. Runs and rides perfectly.",
    price: 7500,
    condition: "excellent",
    location: "Portland, OR",
    brand: "Lambretta",
    model: "GP200",
    year: 1969,
    images: [scooterImages.lambrettaGp200, scooterImages.placeholder],
    featured: true,
    userId: "user_6",
    userName: "VintageRestorer",
    userRating: 4.9,
    createdAt: "2023-05-05T13:25:00Z",
    expiresAt: "2023-06-05T13:25:00Z",
    status: "active",
  },
]

// In a real app, these would interact with a database
export async function getListings(options: { featured?: boolean; limit?: number } = {}) {
  // Filter and limit as needed
  let listings = [...sampleListings]

  if (options.featured) {
    listings = listings.filter((listing) => listing.featured)
  }

  if (options.limit) {
    listings = listings.slice(0, options.limit)
  }

  return listings
}

export async function getListing(id: string) {
  return sampleListings.find((listing) => listing.id === id) || null
}

export async function getUserListings(userId: string) {
  return sampleListings.filter((listing) => listing.userId === userId)
}

export async function createListing(data: Partial<ScooterListing>) {
  const user = await getUser()
  if (!user) {
    redirect("/sign-in?redirect=/create-listing")
  }

  // In a real app, you would save this to a database
  const newListing: ScooterListing = {
    id: `listing_${Math.random().toString(36).substring(2, 9)}`,
    title: data.title || "Untitled Listing",
    description: data.description || "",
    price: data.price || 0,
    condition: data.condition || "good",
    location: data.location || "",
    brand: data.brand || "",
    model: data.model || "",
    year: data.year,
    images: data.images || [],
    featured: false, // Will be set to true after payment
    userId: user.id,
    userName: user.name,
    userRating: 5.0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    status: "draft",
  }

  // In a real app, you would save this to a database
  // For demo purposes, we'll just return the new listing
  return newListing
}

export async function updateListing(id: string, data: Partial<ScooterListing>) {
  const user = await getUser()
  if (!user) {
    redirect("/sign-in")
  }

  // In a real app, you would update this in a database
  // For demo purposes, we'll just return success
  return { success: true }
}
