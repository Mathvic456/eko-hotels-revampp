"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Music, Briefcase, Heart, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventDetailsModal } from "@/components/event-details-modal"
import { EventRegistrationModal } from "@/components/event-registration-modal"

export function EventsListing() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)

  interface Event {
    id: string
    title: string
    category: string
    description: string
    date: string
    time: string
    location: string
    price: string
    capacity: number
    image: string
    organizer: string
    featured: boolean
    tags: string[]
    schedule?: {
      time: string
      activity: string
    }[]
    speakers?: {
      name: string
      title: string
      company: string
      image: string
    }[]
    ticketTypes?: {
      name: string
      price: string
      benefits: string[]
    }[]
  }

  const events: Event[] = [
    {
      id: "tech-conference-2024",
      title: "Tech Innovation Summit 2024",
      category: "Conference",
      description:
        "Join industry leaders and innovators for a two-day summit exploring the latest technological advancements and future trends.",
      date: "June 15-16, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Ballroom, Eko Convention Center",
      price: "From $299",
      capacity: 500,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "TechNigeria Association",
      featured: true,
      tags: ["Technology", "Innovation", "Networking"],
      schedule: [
        { time: "9:00 AM", activity: "Registration & Breakfast" },
        { time: "10:00 AM", activity: "Keynote: The Future of AI" },
        { time: "11:30 AM", activity: "Panel Discussion: Tech Ecosystems" },
        { time: "1:00 PM", activity: "Lunch Break" },
        { time: "2:00 PM", activity: "Workshops (Multiple Tracks)" },
        { time: "4:30 PM", activity: "Networking Reception" },
      ],
      speakers: [
        {
          name: "Dr. Amina Okonkwo",
          title: "Chief Innovation Officer",
          company: "TechSphere Global",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "Michael Chen",
          title: "Founder & CEO",
          company: "NextGen AI",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "Sarah Johnson",
          title: "Director of Research",
          company: "Future Labs",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
      ticketTypes: [
        {
          name: "Standard Pass",
          price: "$299",
          benefits: ["Access to all sessions", "Lunch and refreshments", "Conference materials"],
        },
        {
          name: "VIP Pass",
          price: "$499",
          benefits: [
            "Priority seating",
            "Exclusive networking events",
            "Speaker meet & greet",
            "Premium dining options",
          ],
        },
        {
          name: "Workshop Pass",
          price: "$199",
          benefits: ["Access to workshops only", "Lunch and refreshments", "Workshop materials"],
        },
      ],
    },
    {
      id: "lagos-fashion-week",
      title: "Lagos Fashion Week",
      category: "Fashion",
      description:
        "Experience the vibrant creativity of African fashion with runway shows, exhibitions, and industry networking events.",
      date: "July 8-10, 2024",
      time: "Various Times",
      location: "Eko Exhibition Hall",
      price: "From $150",
      capacity: 800,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "Style Lagos",
      featured: true,
      tags: ["Fashion", "Culture", "Design"],
      schedule: [
        { time: "10:00 AM", activity: "Exhibition Opens" },
        { time: "12:00 PM", activity: "Emerging Designers Showcase" },
        { time: "3:00 PM", activity: "Main Runway Show" },
        { time: "6:00 PM", activity: "Designer Meet & Greet" },
        { time: "8:00 PM", activity: "Fashion Awards Ceremony" },
      ],
      ticketTypes: [
        {
          name: "General Admission",
          price: "$150",
          benefits: ["Access to exhibitions", "Standing room for runway shows", "Event program"],
        },
        {
          name: "Front Row Pass",
          price: "$350",
          benefits: ["Front row seating", "VIP lounge access", "Gift bag", "Meet & greet with designers"],
        },
        {
          name: "Industry Pass",
          price: "$250",
          benefits: ["All exhibitions", "Reserved seating", "Networking events", "Industry workshops"],
        },
      ],
    },
    {
      id: "summer-jazz-festival",
      title: "Summer Jazz Festival",
      category: "Music",
      description:
        "An evening of smooth jazz under the stars featuring local and international artists in an elegant outdoor setting.",
      date: "August 5, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Poolside Garden",
      price: "From $80",
      capacity: 300,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "Lagos Jazz Society",
      featured: false,
      tags: ["Music", "Jazz", "Entertainment"],
      schedule: [
        { time: "6:00 PM", activity: "Gates Open" },
        { time: "7:00 PM", activity: "Opening Act: Lagos Jazz Quartet" },
        { time: "8:30 PM", activity: "Main Performance: International Guest Artist" },
        { time: "10:00 PM", activity: "Jam Session & Finale" },
      ],
      ticketTypes: [
        {
          name: "Standard Ticket",
          price: "$80",
          benefits: ["General admission", "Cash bar available", "Standing room"],
        },
        {
          name: "VIP Experience",
          price: "$150",
          benefits: ["Reserved seating", "Welcome drink", "Canapés", "Meet the artists"],
        },
      ],
    },
    {
      id: "business-leadership-forum",
      title: "African Business Leadership Forum",
      category: "Business",
      description:
        "Connect with business leaders from across Africa to discuss economic growth, investment opportunities, and sustainable development.",
      date: "September 20-21, 2024",
      time: "8:30 AM - 6:00 PM",
      location: "Eko Executive Conference Center",
      price: "From $350",
      capacity: 400,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "Pan-African Business Council",
      featured: false,
      tags: ["Business", "Leadership", "Investment"],
      schedule: [
        { time: "8:30 AM", activity: "Registration & Networking Breakfast" },
        { time: "9:30 AM", activity: "Opening Address: Economic Outlook" },
        { time: "11:00 AM", activity: "Panel: Investment Opportunities in Africa" },
        { time: "1:00 PM", activity: "Networking Lunch" },
        { time: "2:30 PM", activity: "Breakout Sessions" },
        { time: "5:00 PM", activity: "Closing Keynote & Cocktail Reception" },
      ],
      ticketTypes: [
        {
          name: "Delegate Pass",
          price: "$350",
          benefits: ["Full conference access", "Networking events", "Lunch and refreshments", "Conference materials"],
        },
        {
          name: "Executive Pass",
          price: "$650",
          benefits: [
            "Premium seating",
            "Executive lounge access",
            "Private networking sessions",
            "Gala dinner invitation",
          ],
        },
      ],
    },
    {
      id: "wedding-expo-2024",
      title: "Luxury Wedding Expo 2024",
      category: "Wedding",
      description:
        "Discover premium wedding vendors, latest trends, and exclusive offers for your dream wedding at this luxury bridal showcase.",
      date: "October 12-13, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Eko Grand Ballroom",
      price: "$25",
      capacity: 600,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "Wedding Planners Association",
      featured: false,
      tags: ["Wedding", "Luxury", "Planning"],
      schedule: [
        { time: "10:00 AM", activity: "Doors Open" },
        { time: "11:30 AM", activity: "Bridal Fashion Show" },
        { time: "1:00 PM", activity: "Wedding Planning Workshop" },
        { time: "3:00 PM", activity: "Cake & Catering Showcase" },
        { time: "5:00 PM", activity: "Honeymoon Destinations Presentation" },
      ],
      ticketTypes: [
        {
          name: "General Admission",
          price: "$25",
          benefits: ["Expo access", "Goodie bag", "Vendor directory"],
        },
        {
          name: "VIP Bride/Groom",
          price: "$75",
          benefits: ["Priority access", "Champagne reception", "VIP lounge", "Exclusive discounts", "Swag bag"],
        },
      ],
    },
    {
      id: "charity-gala-dinner",
      title: "Annual Charity Gala Dinner",
      category: "Charity",
      description:
        "An elegant evening of fine dining and entertainment in support of education initiatives for underprivileged children.",
      date: "November 18, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Eko Crystal Ballroom",
      price: "$200",
      capacity: 250,
      image: "/placeholder.svg?height=400&width=600",
      organizer: "Education For All Foundation",
      featured: false,
      tags: ["Charity", "Fundraising", "Gala"],
      schedule: [
        { time: "7:00 PM", activity: "Cocktail Reception" },
        { time: "8:00 PM", activity: "Welcome Address & Dinner" },
        { time: "9:30 PM", activity: "Fundraising Auction" },
        { time: "10:30 PM", activity: "Entertainment & Dancing" },
      ],
      ticketTypes: [
        {
          name: "Individual Ticket",
          price: "$200",
          benefits: ["Gala dinner", "Welcome drink", "Entertainment", "Donation receipt"],
        },
        {
          name: "Table Sponsor",
          price: "$2,000",
          benefits: ["Table for 10 guests", "Premium wine selection", "Recognition in program", "VIP reception"],
        },
      ],
    },
  ]

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event)
    setShowDetailsModal(true)
  }

  const handleRegister = (event: Event) => {
    setSelectedEvent(event)
    setShowRegistrationModal(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <Card key={event.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600">{event.category}</Badge>
                    </div>
                    {event.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{event.title}</h3>
                    <p className="text-slate-600 mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-slate-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-amber-600 font-bold">{event.price}</span>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="border-amber-600 text-amber-600 hover:bg-amber-50"
                          onClick={() => handleViewDetails(event)}
                        >
                          View Details
                        </Button>
                        <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => handleRegister(event)}>
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Event Categories */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="conference">Conferences</TabsTrigger>
            <TabsTrigger value="music">Music & Entertainment</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onViewDetails={() => handleViewDetails(event)}
                  onRegister={() => handleRegister(event)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conference">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.category === "Conference")
                .map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={() => handleViewDetails(event)}
                    onRegister={() => handleRegister(event)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="music">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.category === "Music")
                .map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={() => handleViewDetails(event)}
                    onRegister={() => handleRegister(event)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.category === "Business")
                .map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={() => handleViewDetails(event)}
                    onRegister={() => handleRegister(event)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => ["Wedding", "Charity", "Fashion"].includes(event.category))
                .map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={() => handleViewDetails(event)}
                    onRegister={() => handleRegister(event)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Host Your Event Section */}
        <div className="bg-slate-50 rounded-2xl p-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Host Your Event at Eko Hotels</h2>
              <p className="text-slate-600 mb-6">
                From intimate gatherings to grand celebrations, our versatile venues and experienced event planning team
                will make your event unforgettable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Corporate Events</h3>
                    <p className="text-sm text-slate-600">Conferences, meetings, product launches, and team building</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Social Celebrations</h3>
                    <p className="text-sm text-slate-600">Weddings, anniversaries, birthdays, and special occasions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Music className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Entertainment Events</h3>
                    <p className="text-sm text-slate-600">Concerts, performances, galas, and award ceremonies</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-amber-600 hover:bg-amber-700">Inquire About Hosting</Button>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Event venue at Eko Hotels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <>
          <EventDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            event={selectedEvent}
            onRegister={() => {
              setShowDetailsModal(false)
              setShowRegistrationModal(true)
            }}
          />

          <EventRegistrationModal
            isOpen={showRegistrationModal}
            onClose={() => setShowRegistrationModal(false)}
            event={selectedEvent}
          />
        </>
      )}
    </section>
  )
}

interface EventCardProps {
  event: {
    id: string
    title: string
    category: string
    description: string
    date: string
    time: string
    location: string
    price: string
    image: string
    tags: string[]
    featured: boolean
  }
  onViewDetails: () => void
  onRegister: () => void
}

function EventCard({ event, onViewDetails, onRegister }: EventCardProps) {
  const categoryIcons = {
    Conference: Briefcase,
    Music: Music,
    Business: Briefcase,
    Fashion: Heart,
    Wedding: Heart,
    Charity: Heart,
  }

  const CategoryIcon = categoryIcons[event.category as keyof typeof categoryIcons] || Ticket

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-amber-600">{event.category}</Badge>
        </div>
        {event.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-purple-600">Featured</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
            <CategoryIcon className="w-4 h-4 text-amber-600" />
          </div>
          <h3 className="font-bold text-slate-800 line-clamp-1">{event.title}</h3>
        </div>

        <p className="text-slate-600 mb-4 text-sm line-clamp-2">{event.description}</p>

        <div className="space-y-1 mb-4 text-xs text-slate-600">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-2" />
            {event.location}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-amber-600 font-bold">{event.price}</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
              onClick={onViewDetails}
            >
              Details
            </Button>
            <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={onRegister}>
              Register
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
