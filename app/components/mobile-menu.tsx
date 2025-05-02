"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-zinc-900 border-zinc-800 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">X</span>
              </div>
              <span className="font-bold text-xl">ScootX</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-8">
            <Link
              href="/marketplace"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Community
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-4 border-t border-zinc-800 pt-4">
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                Log in
              </Button>
            </Link>
            <Link href="/sign-up" onClick={() => setOpen(false)}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">Sign up</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
