"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AccommodationDetailsModal } from "@/components/accommodation-details-modal"
import { BookingModal } from "@/components/booking-modal"

export function AccommodationSection() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

  interface Accommodation {
    id: string
    title: string
    description: string
    image: string
    features: string[]
    rooms: {
      id: string
      name: string
      size: string
      capacity: number
      bedType: string
      price: number
      amenities: string[]
      images: string[]
    }[]
    amenities: string[]
    location: string
  }

  const accommodations: Accommodation[] = [
    {
      id: "eko-hotel",
      title: "Eko Hotel",
      description: "Elegant rooms with modern amenities and stunning city views",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Ocean View", "24/7 Room Service", "Executive Lounge Access"],
      location: "Main Building",
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Concierge"],
      rooms: [
        {
          id: "standard-king",
          name: "Standard King Room",
          size: "32 sqm",
          capacity: 2,
          bedType: "King",
          price: 250,
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Standard+King+Room",
            "/placeholder.svg?height=400&width=600&text=Bathroom",
            "/placeholder.svg?height=400&width=600&text=City+View",
          ],
        },
        {
          id: "deluxe-king",
          name: "Deluxe King Room",
          size: "38 sqm",
          capacity: 2,
          bedType: "King",
          price: 320,
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker", "Bathtub"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Deluxe+King+Room",
            "/placeholder.svg?height=400&width=600&text=Luxury+Bathroom",
            "/placeholder.svg?height=400&width=600&text=Ocean+View",
          ],
        },
      ],
    },
    {
      id: "eko-suites",
      title: "Eko Suites",
      description: "Spacious suites perfect for extended stays and business travelers",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Kitchenette", "Separate Living Area", "Business Center"],
      location: "Suites Building",
      amenities: ["Free WiFi", "Kitchenette", "Living Area", "Work Desk", "Laundry Service"],
      rooms: [
        {
          id: "executive-suite",
          name: "Executive Suite",
          size: "58 sqm",
          capacity: 3,
          bedType: "King",
          price: 450,
          amenities: ["Free WiFi", "Kitchenette", "Living Area", "Work Desk", "Premium Toiletries"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Executive+Suite",
            "/placeholder.svg?height=400&width=600&text=Living+Area",
            "/placeholder.svg?height=400&width=600&text=Kitchenette",
          ],
        },
        {
          id: "business-suite",
          name: "Business Suite",
          size: "65 sqm",
          capacity: 3,
          bedType: "King",
          price: 520,
          amenities: ["Free WiFi", "Kitchenette", "Living Area", "Work Desk", "Meeting Table", "Premium Toiletries"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Business+Suite",
            "/placeholder.svg?height=400&width=600&text=Meeting+Area",
            "/placeholder.svg?height=400&width=600&text=Business+Amenities",
          ],
        },
      ],
    },
    {
      id: "eko-signature",
      title: "Eko Signature",
      description: "Premium luxury accommodations with exclusive amenities",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Butler Service", "Private Balcony", "Premium Dining"],
      location: "Signature Tower",
      amenities: ["Butler Service", "Private Balcony", "Premium Dining", "Spa Access", "Limousine Service"],
      rooms: [
        {
          id: "signature-suite",
          name: "Signature Suite",
          size: "85 sqm",
          capacity: 4,
          bedType: "King",
          price: 850,
          amenities: ["Butler Service", "Private Balcony", "Premium Dining", "Spa Access", "Jacuzzi"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Signature+Suite",
            "/placeholder.svg?height=400&width=600&text=Private+Balcony",
            "/placeholder.svg?height=400&width=600&text=Luxury+Bathroom",
          ],
        },
        {
          id: "presidential-suite",
          name: "Presidential Suite",
          size: "150 sqm",
          capacity: 6,
          bedType: "King",
          price: 1500,
          amenities: ["Butler Service", "Private Balcony", "Premium Dining", "Spa Access", "Jacuzzi", "Private Chef"],
          images: [
            "/placeholder.svg?height=400&width=600&text=Presidential+Suite",
            "/placeholder.svg?height=400&width=600&text=Master+Bedroom",
            "/placeholder.svg?height=400&width=600&text=Private+Terrace",
          ],
        },
      ],
    },
  ]

  const handleViewDetails = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation)
    setShowDetailsModal(true)
  }

  const handleBookNow = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation)
    setShowBookingModal(true)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Luxury Accommodations</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from our range of elegantly appointed rooms and suites, each designed for comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{accommodation.title}</h3>
                <p className="text-slate-600 mb-4">{accommodation.description}</p>
                <ul className="space-y-2 mb-6">
                  {accommodation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleViewDetails(accommodation)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedAccommodation && (
        <>
          <AccommodationDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            accommodation={selectedAccommodation}
            onBookNow={() => {
              setShowDetailsModal(false)
              setShowBookingModal(true)
            }}
          />

          <BookingModal
            isOpen={showBookingModal}
            onClose={() => setShowBookingModal(false)}
            room={selectedAccommodation.rooms[0]} // Default to first room, or implement room selection
          />
        </>
      )}
    </section>
  )
}
