import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">X</span>
          </div>
          <span className="font-bold text-xl text-white">ScootX</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/marketplace" className="text-sm font-medium text-white hover:text-orange-500">
            Marketplace
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-orange-500">
            Community
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-orange-500">
            Events
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-orange-500">
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black">Sign up</Button>
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
