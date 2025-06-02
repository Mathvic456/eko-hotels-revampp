"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, MapPin, Users, Star, Waves, Dumbbell, Leaf, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RecreationBookingModal } from "@/components/recreation-booking-modal"

export function RecreationalServices() {
  const [selectedService, setSelectedService] = useState<RecreationalService | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  interface RecreationalService {
    id: string
    name: string
    category: string
    description: string
    location: string
    hours: string
    price: string
    duration: string
    capacity: number
    rating: number
    image: string
    features: string[]
    amenities: string[]
    packages: {
      name: string
      price: string
      duration: string
      description: string
      includes: string[]
    }[]
  }

  const services: RecreationalService[] = [
    {
      id: "spa-wellness",
      name: "Eko Spa & Wellness Center",
      category: "Spa & Wellness",
      description: "Luxurious spa offering rejuvenating treatments and wellness therapies",
      location: "Ground Floor, Wellness Wing",
      hours: "6:00 AM - 10:00 PM",
      price: "From $80",
      duration: "60-120 minutes",
      capacity: 20,
      rating: 4.9,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Private Treatment Rooms", "Couples Suites", "Relaxation Lounge", "Steam Room"],
      amenities: ["Sauna", "Jacuzzi", "Relaxation Pool", "Meditation Garden"],
      packages: [
        {
          name: "Signature Massage",
          price: "$120",
          duration: "90 minutes",
          description: "Full body relaxation massage with premium oils",
          includes: ["Hot stone therapy", "Aromatherapy", "Refreshments"],
        },
        {
          name: "Couples Retreat",
          price: "$250",
          duration: "120 minutes",
          description: "Romantic spa experience for two",
          includes: ["Side-by-side massage", "Champagne", "Private suite", "Rose petals"],
        },
        {
          name: "Wellness Day Package",
          price: "$300",
          duration: "Full day",
          description: "Complete wellness experience",
          includes: ["Massage", "Facial", "Manicure", "Pedicure", "Lunch", "Pool access"],
        },
      ],
    },
    {
      id: "fitness-center",
      name: "Elite Fitness Center",
      category: "Fitness",
      description: "State-of-the-art fitness facility with modern equipment and personal trainers",
      location: "Second Floor, Sports Complex",
      hours: "5:00 AM - 11:00 PM",
      price: "From $25",
      duration: "Flexible",
      capacity: 50,
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Modern Equipment", "Personal Trainers", "Group Classes", "Cardio Zone"],
      amenities: ["Locker Rooms", "Towel Service", "Water Station", "Sound System"],
      packages: [
        {
          name: "Day Pass",
          price: "$25",
          duration: "Full day",
          description: "Access to all fitness facilities",
          includes: ["Gym access", "Locker", "Towel", "Water"],
        },
        {
          name: "Personal Training Session",
          price: "$80",
          duration: "60 minutes",
          description: "One-on-one training with certified trainer",
          includes: ["Personalized workout", "Nutrition advice", "Progress tracking"],
        },
        {
          name: "Group Fitness Class",
          price: "$20",
          duration: "45 minutes",
          description: "Join our energizing group classes",
          includes: ["Yoga", "Pilates", "Zumba", "Aqua aerobics"],
        },
      ],
    },
    {
      id: "swimming-pools",
      name: "Infinity Pool Complex",
      category: "Swimming",
      description: "Multiple swimming pools including infinity pool with ocean views",
      location: "Pool Deck, Ocean Side",
      hours: "6:00 AM - 10:00 PM",
      price: "Complimentary for guests",
      duration: "Flexible",
      capacity: 100,
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Infinity Pool", "Children's Pool", "Lap Pool", "Pool Bar"],
      amenities: ["Poolside Service", "Cabanas", "Sun Loungers", "Towel Service"],
      packages: [
        {
          name: "Pool Cabana Rental",
          price: "$150",
          duration: "Full day",
          description: "Private cabana with premium service",
          includes: ["Private cabana", "Dedicated service", "Refreshments", "WiFi"],
        },
        {
          name: "Pool Party Package",
          price: "$500",
          duration: "4 hours",
          description: "Perfect for celebrations",
          includes: ["Reserved area", "Catering", "Music system", "Decorations"],
        },
        {
          name: "Swimming Lessons",
          price: "$60",
          duration: "45 minutes",
          description: "Professional swimming instruction",
          includes: ["Certified instructor", "Equipment", "Progress tracking"],
        },
      ],
    },
    {
      id: "tennis-court",
      name: "Tennis & Sports Courts",
      category: "Sports",
      description: "Professional tennis courts and multi-sport facilities",
      location: "Sports Complex, Outdoor Area",
      hours: "6:00 AM - 9:00 PM",
      price: "From $40",
      duration: "60 minutes",
      capacity: 8,
      rating: 4.6,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Professional Courts", "Night Lighting", "Equipment Rental", "Coaching Available"],
      amenities: ["Changing Rooms", "Equipment Storage", "Seating Area", "Refreshment Station"],
      packages: [
        {
          name: "Court Rental",
          price: "$40",
          duration: "60 minutes",
          description: "Tennis court rental with equipment",
          includes: ["Court access", "Racket rental", "Ball supply", "Towels"],
        },
        {
          name: "Tennis Lesson",
          price: "$80",
          duration: "60 minutes",
          description: "Professional tennis instruction",
          includes: ["Certified instructor", "Equipment", "Court access", "Progress tracking"],
        },
        {
          name: "Tournament Package",
          price: "$200",
          duration: "Half day",
          description: "Organize your own tournament",
          includes: ["Multiple courts", "Referee", "Trophies", "Refreshments"],
        },
      ],
    },
    {
      id: "water-sports",
      name: "Water Sports Center",
      category: "Water Sports",
      description: "Exciting water sports activities and equipment rental",
      location: "Beach Front, Water Sports Dock",
      hours: "8:00 AM - 6:00 PM",
      price: "From $50",
      duration: "30-120 minutes",
      capacity: 15,
      rating: 4.5,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Jet Skis", "Kayaking", "Paddleboarding", "Boat Tours"],
      amenities: ["Safety Equipment", "Certified Instructors", "Changing Facilities", "Equipment Storage"],
      packages: [
        {
          name: "Jet Ski Adventure",
          price: "$120",
          duration: "60 minutes",
          description: "Thrilling jet ski experience",
          includes: ["Jet ski rental", "Safety briefing", "Life jacket", "Guide"],
        },
        {
          name: "Kayak Tour",
          price: "$60",
          duration: "90 minutes",
          description: "Guided kayaking experience",
          includes: ["Kayak rental", "Paddle", "Life jacket", "Tour guide"],
        },
        {
          name: "Water Sports Package",
          price: "$200",
          duration: "Half day",
          description: "Try multiple water activities",
          includes: ["Jet ski", "Kayak", "Paddleboard", "Snorkeling gear"],
        },
      ],
    },
    {
      id: "kids-club",
      name: "Eko Kids Club",
      category: "Family",
      description: "Supervised activities and entertainment for children",
      location: "Family Wing, Ground Floor",
      hours: "9:00 AM - 6:00 PM",
      price: "From $30",
      duration: "2-8 hours",
      capacity: 25,
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Supervised Activities", "Educational Programs", "Arts & Crafts", "Outdoor Play"],
      amenities: ["Play Area", "Learning Center", "Snack Station", "Rest Area"],
      packages: [
        {
          name: "Half Day Program",
          price: "$50",
          duration: "4 hours",
          description: "Morning or afternoon activities",
          includes: ["Supervised activities", "Snacks", "Arts & crafts", "Games"],
        },
        {
          name: "Full Day Program",
          price: "$80",
          duration: "8 hours",
          description: "Complete day of fun activities",
          includes: ["All activities", "Lunch", "Snacks", "Rest time", "Outdoor play"],
        },
        {
          name: "Birthday Party Package",
          price: "$150",
          duration: "3 hours",
          description: "Special birthday celebration",
          includes: ["Party room", "Decorations", "Cake", "Games", "Party favors"],
        },
      ],
    },
  ]

  const handleBookService = (service: RecreationalService) => {
    setSelectedService(service)
    setShowBookingModal(true)
  }

  const categories = [
    { name: "Spa & Wellness", icon: Leaf, color: "bg-green-100 text-green-600" },
    { name: "Fitness", icon: Dumbbell, color: "bg-blue-100 text-blue-600" },
    { name: "Swimming", icon: Waves, color: "bg-cyan-100 text-cyan-600" },
    { name: "Sports", icon: Trophy, color: "bg-orange-100 text-orange-600" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600">{service.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{service.name}</h3>
                  <span className="text-amber-600 font-medium">{service.price}</span>
                </div>

                <p className="text-slate-600 mb-4">{service.description}</p>

                <div className="space-y-2 mb-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {service.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.hours}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Up to {service.capacity} guests
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="bg-slate-50 text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="outline" className="bg-slate-50 text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={() => handleBookService(service)}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Concierge</h3>
              <p className="text-slate-600">Dedicated concierge service to arrange activities and experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Tours</h3>
              <p className="text-slate-600">Guided tours and excursions to explore Lagos and surrounding areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-slate-600">Round-the-clock assistance for all your recreational needs</p>
            </div>
          </div>
        </div>
      </div>

      {selectedService && (
        <RecreationBookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          service={selectedService}
        />
      )}
    </section>
  )
}
