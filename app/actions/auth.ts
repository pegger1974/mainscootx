"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type SignUpData = {
  email: string
  password: string
  name: string
}

type SignInData = {
  email: string
  password: string
}

export async function signUp(data: SignUpData) {
  // In a real app, you would:
  // 1. Validate the data
  // 2. Check if user exists
  // 3. Hash the password
  // 4. Store in database
  // 5. Create a session

  // For demo purposes, we'll simulate a successful signup
  cookies().set(
    "user",
    JSON.stringify({
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      name: data.name,
      email: data.email,
      createdAt: new Date().toISOString(),
    }),
  )

  return { success: true }
}

export async function signIn(data: SignInData) {
  // In a real app, you would:
  // 1. Validate the data
  // 2. Check credentials against database
  // 3. Create a session

  // For demo purposes, we'll simulate a successful login
  cookies().set(
    "user",
    JSON.stringify({
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      name: data.email.split("@")[0],
      email: data.email,
      createdAt: new Date().toISOString(),
    }),
  )

  return { success: true }
}

export async function signOut() {
  cookies().delete("user")
  redirect("/")
}

export async function getUser() {
  const user = cookies().get("user")
  if (!user) return null

  try {
    return JSON.parse(user.value)
  } catch {
    return null
  }
}
