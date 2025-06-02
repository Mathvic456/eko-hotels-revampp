import Image from "next/image"
import { Award, Users, Globe, Heart, Star, Building, Calendar, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const milestones = [
    { year: "1989", event: "Eko Hotels & Suites was founded" },
    { year: "1995", event: "Opened our first luxury tower" },
    { year: "2005", event: "Expanded with Eko Suites" },
    { year: "2010", event: "Launched Eko Signature collection" },
    { year: "2015", event: "Opened Eko Tower II" },
    { year: "2020", event: "Achieved 5-star luxury status" },
    { year: "2024", event: "Celebrating 35 years of excellence" },
  ]

  const achievements = [
    {
      icon: Award,
      title: "5-Star Luxury Rating",
      description: "Consistently rated as Nigeria's premier luxury hotel",
    },
    {
      icon: Users,
      title: "Over 1 Million Guests",
      description: "Served guests from over 100 countries worldwide",
    },
    {
      icon: Trophy,
      title: "50+ Industry Awards",
      description: "Recognized for excellence in hospitality and service",
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Meeting global hospitality standards and best practices",
    },
  ]

  const leadership = [
    {
      name: "Dr. Michael Adenuga Jr.",
      position: "Chairman",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Visionary leader with over 30 years in hospitality and business development",
    },
    {
      name: "Mrs. Funmi Adenuga",
      position: "Managing Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Hospitality expert focused on guest experience and operational excellence",
    },
    {
      name: "Mr. John Adeyemi",
      position: "General Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Seasoned hospitality professional with international hotel management experience",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                For over three decades, Eko Hotels & Suites has been Nigeria's premier luxury hospitality destination,
                setting the standard for excellence in accommodation, dining, and entertainment. Located in the heart of
                Victoria Island, Lagos, we have been the preferred choice for discerning travelers, business executives,
                and dignitaries from around the world.
              </p>
              <p>
                Our journey began in 1989 with a vision to create a world-class hospitality experience that showcases
                the best of Nigerian culture while meeting international standards. Today, we stand as a testament to
                that vision, offering unparalleled luxury across our multiple properties including Eko Hotel, Eko
                Suites, Eko Signature, and Eko Tower II.
              </p>
              <p>
                With over 600 elegantly appointed rooms and suites, award-winning restaurants, state-of-the-art
                conference facilities, and recreational amenities, we continue to redefine luxury hospitality in West
                Africa.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Eko+Hotels+Exterior"
              alt="Eko Hotels & Suites"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To provide exceptional hospitality experiences that exceed guest expectations while showcasing the warmth
              and richness of Nigerian culture to the world.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To be Africa's leading luxury hospitality brand, recognized globally for our commitment to excellence,
              innovation, and authentic cultural experiences.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-600">
              Excellence, Integrity, Innovation, Respect, and Sustainability guide everything we do, from guest service
              to community engagement.
            </p>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-slate-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <Badge className="bg-amber-600">{milestone.year}</Badge>
                      </div>
                      <p className="text-slate-700">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{leader.position}</p>
                <p className="text-sm text-slate-600">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability & Community */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">Sustainability</h3>
                  <p className="text-slate-600">
                    We are committed to environmental responsibility through energy-efficient operations, waste
                    reduction programs, and sustainable sourcing practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">Community Impact</h3>
                  <p className="text-slate-600">
                    Supporting local communities through employment opportunities, local sourcing, and educational
                    initiatives that contribute to Nigeria's economic development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">Cultural Heritage</h3>
                  <p className="text-slate-600">
                    Celebrating and preserving Nigerian culture through our art collections, culinary offerings, and
                    cultural events that showcase our rich heritage.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Community+Impact"
                alt="Community Impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
