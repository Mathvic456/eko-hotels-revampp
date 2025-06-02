import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Users, Calendar, Star } from "lucide-react"

export function MiniAboutSection() {
  const stats = [
    {
      icon: Calendar,
      number: "35+",
      label: "Years of Excellence",
      description: "Serving guests since 1989",
    },
    {
      icon: Users,
      number: "1M+",
      label: "Happy Guests",
      description: "From over 100 countries",
    },
    {
      icon: Award,
      number: "50+",
      label: "Industry Awards",
      description: "Recognition for excellence",
    },
    {
      icon: Star,
      number: "5-Star",
      label: "Luxury Rating",
      description: "Premium hospitality standard",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Nigeria's Premier <span className="text-amber-600">Luxury Hotel</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                For over three decades, Eko Hotels & Suites has been setting the standard for luxury hospitality in West
                Africa. Located in the heart of Victoria Island, Lagos, we offer world-class accommodation, dining, and
                entertainment experiences.
              </p>
              <p className="text-slate-600 mb-8">
                From our humble beginnings in 1989 to becoming Nigeria's most prestigious hotel destination, we continue
                to redefine luxury while showcasing the warmth and richness of Nigerian culture to guests from around
                the world.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.description}</div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/about">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Learn More About Our Story
              </Button>
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/pool-area.png" alt="Eko Hotels Pool Area" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Award Winner</div>
                  <div className="text-sm text-slate-600">Best Luxury Hotel 2024</div>
                </div>
              </div>
            </Card>

            {/* Floating Heritage Badge */}
            <Card className="absolute -top-6 -right-6 p-3 bg-amber-600 text-white shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">1989</div>
                <div className="text-xs">EST.</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Key Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-slate-900">Why Choose Eko Hotels & Suites?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold mb-2">Unmatched Luxury</h4>
              <p className="text-sm text-slate-600">
                Experience world-class amenities and personalized service that exceeds expectations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold mb-2">Cultural Heritage</h4>
              <p className="text-sm text-slate-600">
                Immerse yourself in authentic Nigerian culture while enjoying international standards
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold mb-2">Prime Location</h4>
              <p className="text-sm text-slate-600">
                Strategically located in Victoria Island with easy access to business and leisure destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
