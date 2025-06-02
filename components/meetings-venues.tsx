"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Wifi, Car, Coffee, Projector, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EventInquiryModal } from "@/components/event-inquiry-modal"
import { VenueDetailsModal } from "@/components/venue-details-modal"

export function MeetingsVenues() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  // Add a new state variable for the details modal
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  interface Venue {
    id: string
    name: string
    type: string
    description: string
    capacity: number
    size: string
    price: string
    image: string
    features: string[]
    equipment: string[]
    layouts: string[]
  }

  const venues: Venue[] = [
    {
      id: "grand-ballroom",
      name: "Grand Ballroom",
      type: "Wedding & Gala",
      description: "Elegant ballroom perfect for weddings, galas, and large celebrations",
      capacity: 500,
      size: "800 sqm",
      price: "From $5,000",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Crystal Chandeliers", "Dance Floor", "Bridal Suite", "Outdoor Terrace"],
      equipment: ["Sound System", "Lighting", "Microphones", "Stage"],
      layouts: ["Banquet", "Reception", "Theater", "U-Shape"],
    },
    {
      id: "conference-center",
      name: "Executive Conference Center",
      type: "Corporate Events",
      description: "State-of-the-art conference facility for business meetings and seminars",
      capacity: 200,
      size: "300 sqm",
      price: "From $2,500",
      image: "/placeholder.svg?height=400&width=600",
      features: ["High-Speed WiFi", "Video Conferencing", "Climate Control", "Natural Light"],
      equipment: ["Projectors", "Screens", "Microphones", "Teleconferencing"],
      layouts: ["Theater", "Classroom", "Boardroom", "U-Shape"],
    },
    {
      id: "boardroom",
      name: "Executive Boardroom",
      type: "Business Meetings",
      description: "Intimate boardroom for executive meetings and small conferences",
      capacity: 20,
      size: "50 sqm",
      price: "From $500",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Executive Furniture", "Privacy", "City Views", "Refreshment Station"],
      equipment: ["Smart TV", "Conference Phone", "Whiteboard", "WiFi"],
      layouts: ["Boardroom", "U-Shape"],
    },
    {
      id: "garden-pavilion",
      name: "Garden Pavilion",
      type: "Outdoor Events",
      description: "Beautiful outdoor venue surrounded by lush gardens",
      capacity: 150,
      size: "400 sqm",
      price: "From $3,000",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Garden Views", "Open Air", "Natural Setting", "Photo Opportunities"],
      equipment: ["Portable Sound", "Lighting", "Weather Protection", "Power Supply"],
      layouts: ["Reception", "Banquet", "Cocktail"],
    },
    {
      id: "poolside-deck",
      name: "Poolside Event Deck",
      type: "Cocktail Parties",
      description: "Stylish poolside venue perfect for cocktail parties and receptions",
      capacity: 100,
      size: "250 sqm",
      price: "From $2,000",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Pool Views", "Sunset Views", "Bar Area", "Lounge Seating"],
      equipment: ["Sound System", "Bar Setup", "Lighting", "Umbrellas"],
      layouts: ["Cocktail", "Reception", "Lounge"],
    },
    {
      id: "private-dining",
      name: "Private Dining Room",
      type: "Intimate Gatherings",
      description: "Exclusive dining room for private dinners and small celebrations",
      capacity: 30,
      size: "80 sqm",
      price: "From $1,500",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Private Chef", "Wine Cellar", "Elegant Decor", "Personalized Service"],
      equipment: ["Sound System", "Presentation Screen", "Climate Control"],
      layouts: ["Banquet", "U-Shape", "Hollow Square"],
    },
  ]

  const handleInquire = (venue: Venue) => {
    setSelectedVenue(venue)
    setShowInquiryModal(true)
  }

  // Add a function to handle viewing venue details
  const handleViewDetails = (venue: Venue) => {
    setSelectedVenue(venue)
    setShowDetailsModal(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Venue Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Corporate Events</h3>
            <p className="text-sm text-slate-600">Meetings, conferences, seminars</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Social Events</h3>
            <p className="text-sm text-slate-600">Parties, celebrations, gatherings</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Projector className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Weddings</h3>
            <p className="text-sm text-slate-600">Ceremonies, receptions, celebrations</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Mic className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Special Events</h3>
            <p className="text-sm text-slate-600">Galas, launches, exhibitions</p>
          </Card>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600">{venue.type}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-slate-600 mr-1" />
                    <span className="text-sm font-medium">{venue.capacity}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{venue.name}</h3>
                  <span className="text-amber-600 font-medium">{venue.price}</span>
                </div>

                <p className="text-slate-600 mb-4">{venue.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-600">
                  <div>
                    <span className="font-medium">Capacity:</span> {venue.capacity} guests
                  </div>
                  <div>
                    <span className="font-medium">Size:</span> {venue.size}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="bg-slate-50 text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {venue.features.length > 3 && (
                      <Badge variant="outline" className="bg-slate-50 text-xs">
                        +{venue.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Available Equipment:</h4>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    {venue.equipment.includes("Sound System") && <Mic className="w-4 h-4" />}
                    {venue.equipment.includes("Projectors") && <Projector className="w-4 h-4" />}
                    {venue.equipment.includes("WiFi") && <Wifi className="w-4 h-4" />}
                    <span>+ {venue.equipment.length} items</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* Update the View Details button onClick handler in the flex gap-3 div near the end of each venue card */}
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => handleViewDetails(venue)}
                  >
                    View Details
                  </Button>
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={() => handleInquire(venue)}>
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Event Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
              <p className="text-slate-600">Dedicated event coordinators to help plan your perfect event</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Catering Services</h3>
              <p className="text-slate-600">Customized menus and catering options for all dietary requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guest Services</h3>
              <p className="text-slate-600">Accommodation packages and transportation for your guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add the VenueDetailsModal component at the end of the component, just before the closing tag of the section */}
      {selectedVenue && (
        <>
          <VenueDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            venue={selectedVenue}
            onInquire={() => {
              setShowDetailsModal(false)
              setShowInquiryModal(true)
            }}
          />

          <EventInquiryModal
            isOpen={showInquiryModal}
            onClose={() => setShowInquiryModal(false)}
            venue={selectedVenue}
          />
        </>
      )}
    </section>
  )
}
