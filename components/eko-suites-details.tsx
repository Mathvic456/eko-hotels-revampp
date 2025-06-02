"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { Users, Bed, Maximize, Star, Wifi, Car, Coffee, Home, Briefcase } from "lucide-react"

export function EkoSuitesDetails() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    images: string[]
  }

  const rooms: Room[] = [
    {
      id: "studio-suite",
      name: "Studio Suite",
      type: "Studio",
      description: "Compact suite with kitchenette, perfect for short business stays",
      price: 350,
      size: "45 sqm",
      capacity: 2,
      bedType: "Queen",
      image: "/placeholder.svg?height=400&width=600&text=Studio+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Kitchenette",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Living Area",
      ],
      features: ["Kitchenette", "Work Area", "24/7 Room Service", "Daily Housekeeping", "Business Center Access"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Studio+Suite",
        "/placeholder.svg?height=400&width=600&text=Kitchenette",
        "/placeholder.svg?height=400&width=600&text=Work+Area",
        "/placeholder.svg?height=400&width=600&text=Living+Space",
      ],
    },
    {
      id: "one-bedroom-suite",
      name: "One Bedroom Suite",
      type: "One Bedroom",
      description: "Spacious suite with separate bedroom and full kitchen facilities",
      price: 450,
      size: "65 sqm",
      capacity: 3,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=One+Bedroom+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Full Kitchen",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Living Area",
        "Dining Area",
      ],
      features: [
        "Separate Bedroom",
        "Full Kitchen",
        "Dining Area",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Laundry Facilities",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=One+Bedroom+Suite",
        "/placeholder.svg?height=400&width=600&text=Full+Kitchen",
        "/placeholder.svg?height=400&width=600&text=Dining+Area",
        "/placeholder.svg?height=400&width=600&text=Bedroom",
      ],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      type: "Executive",
      description: "Premium suite with executive lounge access and enhanced business amenities",
      price: 580,
      size: "75 sqm",
      capacity: 4,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Executive+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Full Kitchen",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Living Area",
        "Executive Lounge Access",
      ],
      features: [
        "Executive Lounge Access",
        "Full Kitchen",
        "Meeting Table",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Executive+Suite",
        "/placeholder.svg?height=400&width=600&text=Meeting+Area",
        "/placeholder.svg?height=400&width=600&text=Executive+Kitchen",
        "/placeholder.svg?height=400&width=600&text=Executive+Lounge",
      ],
    },
    {
      id: "penthouse-suite",
      name: "Penthouse Suite",
      type: "Penthouse",
      description: "Luxurious penthouse with panoramic city views and premium amenities",
      price: 850,
      size: "120 sqm",
      capacity: 6,
      bedType: "King + Sofa Bed",
      image: "/placeholder.svg?height=400&width=600&text=Penthouse+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Full Kitchen",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Living Area",
        "Private Terrace",
        "Butler Service",
      ],
      features: [
        "Panoramic City Views",
        "Private Terrace",
        "Butler Service",
        "Full Kitchen",
        "24/7 Room Service",
        "Daily Housekeeping",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Penthouse+Suite",
        "/placeholder.svg?height=400&width=600&text=City+Views",
        "/placeholder.svg?height=400&width=600&text=Private+Terrace",
        "/placeholder.svg?height=400&width=600&text=Penthouse+Kitchen",
      ],
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Eko+Suites+Exterior",
    "/placeholder.svg?height=400&width=600&text=Suite+Living+Room",
    "/placeholder.svg?height=400&width=600&text=Modern+Kitchen",
    "/placeholder.svg?height=400&width=600&text=Business+Center",
    "/placeholder.svg?height=400&width=600&text=Executive+Lounge",
    "/placeholder.svg?height=400&width=600&text=Fitness+Center",
    "/placeholder.svg?height=400&width=600&text=Rooftop+Pool",
    "/placeholder.svg?height=400&width=600&text=Conference+Room",
    "/placeholder.svg?height=400&width=600&text=City+Skyline",
  ]

  const handleBookRoom = (room: Room) => {
    setSelectedRoom(room)
    setShowBookingModal(true)
  }

  const handleViewDetails = (room: Room) => {
    setSelectedRoom(room)
    setShowDetailsModal(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rooms">Suites & Rates</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Eko+Suites+Main"
                    alt="Eko Suites"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#002f47] mb-4">About Eko Suites</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Eko Suites is designed for the modern traveler who values space, comfort, and convenience. Our
                  all-suite property offers the perfect blend of hotel luxury and apartment-style living, making it
                  ideal for extended stays, business travelers, and families.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Each suite features a fully equipped kitchen, separate living and sleeping areas, and modern business
                  amenities. Whether you're staying for a few days or several months, Eko Suites provides the
                  flexibility and comfort of home with the services and amenities of a luxury hotel.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">200+</div>
                    <div className="text-sm text-slate-600">Luxury Suites</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">100%</div>
                    <div className="text-sm text-slate-600">Kitchen Equipped</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Suite Collection</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Choose from our range of spacious suites, each featuring full kitchen facilities and separate living
                areas
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#002f47]">{room.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-[#002f47] font-bold">${room.price}/night</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#002f47] mb-2">{room.name}</h3>
                    <p className="text-slate-600 mb-4">{room.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Maximize className="w-4 h-4 mr-2 text-[#002f47]" />
                        {room.size}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-[#002f47]" />
                        {room.capacity} guests
                      </div>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-2 text-[#002f47]" />
                        {room.bedType}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-[#002f47] text-[#002f47] hover:bg-[#002f47] hover:text-white"
                        onClick={() => handleViewDetails(room)}
                      >
                        View Details
                      </Button>
                      <Button className="flex-1 bg-[#002f47] hover:bg-[#003d5c]" onClick={() => handleBookRoom(room)}>
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Suite Amenities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Enjoy the convenience of home with the luxury of a five-star hotel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Home className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Home Comforts</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Full Kitchen Facilities</li>
                  <li>Separate Living Areas</li>
                  <li>In-Suite Laundry</li>
                  <li>Dining Areas</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Briefcase className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Executive Lounge</li>
                  <li>Business Center</li>
                  <li>Meeting Rooms</li>
                  <li>High-Speed Internet</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Recreation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Rooftop Pool</li>
                  <li>Fitness Center</li>
                  <li>Spa Services</li>
                  <li>Recreation Deck</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dining</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Suite Restaurant</li>
                  <li>Grocery Delivery</li>
                  <li>Room Service</li>
                  <li>Coffee Bar</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Technology</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Free High-Speed WiFi</li>
                  <li>Smart TVs</li>
                  <li>Work Stations</li>
                  <li>Video Conferencing</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Valet Parking</li>
                  <li>Airport Shuttle</li>
                  <li>Car Rental</li>
                  <li>Concierge Services</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Suites Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our spacious suites and modern amenities designed for extended stays
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={galleryImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              >
                ←
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              >
                →
              </Button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    currentImageIndex === index ? "ring-4 ring-[#002f47]" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery thumbnail ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedRoom && (
        <>
          <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} room={selectedRoom} />
          <RoomDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            room={selectedRoom}
            onBookNow={() => {
              setShowDetailsModal(false)
              setShowBookingModal(true)
            }}
          />
        </>
      )}
    </div>
  )
}
