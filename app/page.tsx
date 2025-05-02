import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Users, ShoppingBag, MessageSquare, Star } from "lucide-react"
import { MobileMenu } from "@/app/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">X</span>
            </div>
            <span className="font-bold text-xl">ScootX</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/marketplace" className="text-sm font-medium hover:text-orange-500">
              Marketplace
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Community
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
              Events
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                The ultimate <span className="text-orange-500">scooter</span> marketplace & community
              </h1>
              <p className="text-lg text-zinc-400">
                Buy, sell, and connect with fellow scooter enthusiasts. Join the fastest growing scooter community and
                marketplace platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black">
                    Join now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    Explore marketplace
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/scooters/vespa-gts300.png"
                alt="Scooter enthusiasts community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why join ScootX?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Marketplace</h3>
                <p className="text-zinc-400">
                  Buy and sell scooters, parts, and accessories with our secure and easy-to-use marketplace platform.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-zinc-400">
                  Connect with fellow scooter enthusiasts, share experiences, and build your network.
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Events</h3>
                <p className="text-zinc-400">
                  Discover and join local scooter meetups, races, and community events in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How ScootX Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-zinc-400">Sign up and create your profile to join the ScootX community.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect & Explore</h3>
                <p className="text-zinc-400">Find other scooter enthusiasts, browse listings, and join discussions.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Buy, Sell & Engage</h3>
                <p className="text-zinc-400">
                  List your items for sale, purchase from others, and participate in events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Preview Section */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Marketplace Listings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src="/scooters/vespa-vintage.png"
                    alt="Electric scooter for sale"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Xiaomi Pro 2</h3>
                    <span className="text-orange-500 font-bold">$599</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-3">
                    Barely used, excellent condition with extra accessories included.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-zinc-400">4.9 (15 reviews)</span>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src="/scooters/lambretta-v200.png"
                    alt="Custom scooter for sale"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Custom Dualtron</h3>
                    <span className="text-orange-500 font-bold">$1,899</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-3">
                    Modified with premium parts, incredible performance and range.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-zinc-400">4.8 (23 reviews)</span>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-colors">
                <div className="relative h-48">
                  <Image src="/scooters/honda-ruckus.png" alt="Scooter parts for sale" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Performance Parts Bundle</h3>
                    <span className="text-orange-500 font-bold">$249</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-3">
                    Upgrade kit with controller, display, and battery management system.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-zinc-400">4.7 (9 reviews)</span>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/marketplace">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  View all listings
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Join the Community</h2>
                <p className="text-lg text-zinc-400">
                  Connect with thousands of scooter enthusiasts, share your rides, get advice, and participate in
                  discussions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-4">
                      <MessageSquare className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Active Forums</h3>
                      <p className="text-zinc-400">Engage in discussions about modifications, maintenance, and more.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Group Rides</h3>
                      <p className="text-zinc-400">
                        Organize and join group rides with fellow enthusiasts in your area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Star className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Build Your Reputation</h3>
                      <p className="text-zinc-400">
                        Earn badges and recognition for your contributions to the community.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link href="/sign-up">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black">Join the community</Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/scooters/lambretta-gp200.png"
                  alt="Scooter community meetup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                </div>
                <p className="text-zinc-300 mb-4">
                  "ScootX has completely transformed how I buy and sell scooter parts. The community is incredibly
                  helpful and I've made some great connections."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Alex Johnson</h4>
                    <p className="text-sm text-zinc-400">Member since 2022</p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                </div>
                <p className="text-zinc-300 mb-4">
                  "I found my dream scooter on ScootX marketplace at a great price. The seller ratings system gave me
                  confidence in the purchase."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Sarah Miller</h4>
                    <p className="text-sm text-zinc-400">Member since 2021</p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                </div>
                <p className="text-zinc-300 mb-4">
                  "The events feature is amazing! I've attended several meetups through ScootX and met so many awesome
                  people who share my passion."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Mike Chen</h4>
                    <p className="text-sm text-zinc-400">Member since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-500 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to join the ScootX community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with fellow enthusiasts, find your perfect scooter, and become part of the fastest growing scooter
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" className="bg-black text-white hover:bg-zinc-800">
                  Sign up now
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-orange-600">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">X</span>
                </div>
                <span className="font-bold text-xl">ScootX</span>
              </div>
              <p className="text-zinc-400">The ultimate scooter marketplace and community platform.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Forums
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-orange-500">
                    Marketplace Rules
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400">© 2023 ScootX. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-orange-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
