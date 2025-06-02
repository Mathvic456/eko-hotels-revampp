"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { BookingModal } from "@/components/booking-modal"

export function RoomsList() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

  interface Room {
    id: string
    name: string
    type: string
    description: string
    price: number
    size: string
    capacity: number
    bedType: string
    image: string
    amenities: string[]
    features: string[]
  }

  const rooms: Room[] = [
    {
      id: "standard-king",
      name: "Standard King Room",
      type: "Eko Hotel",
      description: "Comfortable room with modern amenities and city views",
      price: 250,
      size: "32 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker"],
      features: ["City View", "Work Desk", "In-room Safe"],
    },
    {
      id: "deluxe-twin",
      name: "Deluxe Twin Room",
      type: "Eko Hotel",
      description: "Spacious room with two twin beds and modern amenities",
      price: 280,
      size: "36 sqm",
      capacity: 2,
      bedType: "Twin",
      image: "/placeholder.svg?height=400&width=600",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker"],
      features: ["City View", "Work Desk", "In-room Safe", "Bathtub"],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      type: "Eko Suites",
      description: "Luxury suite with separate living area and premium amenities",
      price: 450,
      size: "58 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker", "Bathrobe & Slippers"],
      features: ["Ocean View", "Separate Living Area", "Executive Lounge Access", "Premium Toiletries"],
    },
    {
      id: "signature-suite",
      name: "Signature Suite",
      type: "Eko Signature",
      description: "Premium suite with panoramic views and exclusive amenities",
      price: 650,
      size: "72 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker", "Bathrobe & Slippers"],
      features: [
        "Panoramic Ocean View",
        "Separate Living & Dining Area",
        "Executive Lounge Access",
        "Premium Toiletries",
        "Butler Service",
      ],
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      type: "Eko Signature",
      description: "Ultimate luxury with multiple rooms and exclusive services",
      price: 1200,
      size: "120 sqm",
      capacity: 4,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Bathrobe & Slippers",
        "Jacuzzi",
      ],
      features: [
        "Panoramic Ocean View",
        "Multiple Bedrooms",
        "Separate Living & Dining Area",
        "Executive Lounge Access",
        "Premium Toiletries",
        "Butler Service",
        "Private Chef Available",
      ],
    },
  ]

  const handleViewDetails = (room: Room) => {
    setSelectedRoom(room)
    setShowDetailsModal(true)
  }

  const handleBookNow = (room: Room) => {
    setSelectedRoom(room)
    setShowBookingModal(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-amber-600">{room.type}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{room.name}</h3>
                  <div className="text-amber-600 font-bold">
                    ${room.price}
                    <span className="text-sm text-slate-600">/night</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-slate-50">
                    {room.capacity} Guests
                  </Badge>
                  <Badge variant="outline" className="bg-slate-50">
                    {room.size}
                  </Badge>
                  <Badge variant="outline" className="bg-slate-50">
                    {room.bedType} Bed
                  </Badge>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => handleViewDetails(room)}
                  >
                    View Details
                  </Button>
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={() => handleBookNow(room)}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <>
          <RoomDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            room={selectedRoom}
            onBookNow={() => {
              setShowDetailsModal(false)
              setShowBookingModal(true)
            }}
          />

          <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} room={selectedRoom} />
        </>
      )}
    </section>
  )
}
