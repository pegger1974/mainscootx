"use server"

import { redirect } from "next/navigation"
import { getUser } from "./auth"

type ListingPlan = {
  id: string
  name: string
  price: number
  duration: number // in days
  featured: boolean
}

export const listingPlans: ListingPlan[] = [
  {
    id: "basic",
    name: "Basic Listing",
    price: 499, // $4.99
    duration: 30,
    featured: false,
  },
  {
    id: "premium",
    name: "Premium Listing",
    price: 999, // $9.99
    duration: 30,
    featured: true,
  },
  {
    id: "extended",
    name: "Extended Listing",
    price: 1999, // $19.99
    duration: 90,
    featured: true,
  },
]

export async function createCheckoutSession(planId: string, listingId: string) {
  const user = await getUser()
  if (!user) {
    redirect("/sign-in?redirect=/create-listing")
  }

  const plan = listingPlans.find((p) => p.id === planId)
  if (!plan) {
    throw new Error("Invalid plan")
  }

  // In a real app, you would:
  // 1. Create a Stripe checkout session
  // 2. Return the session URL or ID

  // For demo purposes, we'll simulate a successful checkout
  // In a real implementation, you would use the Stripe SDK:
  /*
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan.name,
            description: `${plan.duration} days listing${plan.featured ? ' (Featured)' : ''}`,
          },
          unit_amount: plan.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/listing/${listingId}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/create-listing`,
    metadata: {
      listingId,
      userId: user.id,
      planId,
    },
  })
  
  return { url: session.url }
  */

  // For demo purposes:
  return {
    success: true,
    url: `/listing/${listingId}/success?demo=true`,
    planId,
    amount: plan.price / 100,
  }
}
