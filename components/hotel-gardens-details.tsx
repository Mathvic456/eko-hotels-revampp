"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { Users, Bed, Maximize, Star, Wifi, Car, Coffee, Flower } from "lucide-react"

export function HotelGardensDetails() {
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
      id: "garden-view-standard",
      name: "Garden View Standard",
      type: "Standard Room",
      description: "Peaceful room overlooking our beautifully landscaped gardens",
      price: 220,
      size: "30 sqm",
      capacity: 2,
      bedType: "Queen",
      image: "/placeholder.svg?height=400&width=600&text=Garden+View+Standard",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker", "Safe", "Garden View"],
      features: ["Garden View", "24/7 Room Service", "Daily Housekeeping", "Peaceful Environment"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Garden+View+Standard",
        "/placeholder.svg?height=400&width=600&text=Garden+Bathroom",
        "/placeholder.svg?height=400&width=600&text=Garden+View",
        "/placeholder.svg?height=400&width=600&text=Room+Terrace",
      ],
    },
    {
      id: "garden-deluxe",
      name: "Garden Deluxe Room",
      type: "Deluxe Room",
      description: "Spacious room with private terrace overlooking tropical gardens",
      price: 280,
      size: "35 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Garden+Deluxe+Room",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Private Terrace",
        "Garden View",
      ],
      features: ["Private Terrace", "Garden View", "24/7 Room Service", "Daily Housekeeping", "Premium Toiletries"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Garden+Deluxe+Room",
        "/placeholder.svg?height=400&width=600&text=Private+Terrace",
        "/placeholder.svg?height=400&width=600&text=Garden+View",
        "/placeholder.svg?height=400&width=600&text=Deluxe+Bathroom",
      ],
    },
    {
      id: "garden-suite",
      name: "Garden Suite",
      type: "Suite",
      description: "Luxurious suite with panoramic garden views and separate living area",
      price: 380,
      size: "50 sqm",
      capacity: 3,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Garden+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Living Area",
        "Private Terrace",
        "Garden View",
      ],
      features: [
        "Panoramic Garden View",
        "Separate Living Area",
        "Private Terrace",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Premium Toiletries",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Garden+Suite",
        "/placeholder.svg?height=400&width=600&text=Suite+Living+Area",
        "/placeholder.svg?height=400&width=600&text=Panoramic+Garden+View",
        "/placeholder.svg?height=400&width=600&text=Suite+Terrace",
      ],
    },
    {
      id: "botanical-villa",
      name: "Botanical Villa",
      type: "Villa",
      description: "Private villa surrounded by exotic plants and tropical gardens",
      price: 650,
      size: "80 sqm",
      capacity: 4,
      bedType: "King + Sofa Bed",
      image: "/placeholder.svg?height=400&width=600&text=Botanical+Villa",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Private Garden",
        "Outdoor Shower",
        "Living Area",
      ],
      features: [
        "Private Garden",
        "Outdoor Shower",
        "Separate Living Area",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Butler Service",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Botanical+Villa",
        "/placeholder.svg?height=400&width=600&text=Private+Garden",
        "/placeholder.svg?height=400&width=600&text=Outdoor+Shower",
        "/placeholder.svg?height=400&width=600&text=Villa+Living+Area",
      ],
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Hotel+Gardens+Exterior",
    "/placeholder.svg?height=400&width=600&text=Tropical+Gardens",
    "/placeholder.svg?height=400&width=600&text=Garden+Pool",
    "/placeholder.svg?height=400&width=600&text=Botanical+Walkway",
    "/placeholder.svg?height=400&width=600&text=Garden+Restaurant",
    "/placeholder.svg?height=400&width=600&text=Meditation+Garden",
    "/placeholder.svg?height=400&width=600&text=Butterfly+Garden",
    "/placeholder.svg?height=400&width=600&text=Garden+Spa",
    "/placeholder.svg?height=400&width=600&text=Sunset+Garden",
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
            <TabsTrigger value="rooms">Rooms & Rates</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Hotel+Gardens+Main"
                    alt="Hotel Gardens"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#002f47] mb-4">About Hotel Gardens</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Hotel Gardens offers a tranquil escape in the heart of Lagos, where lush tropical landscapes meet
                  luxury accommodations. Our property is designed as an urban oasis, featuring over 10 acres of
                  beautifully manicured gardens, exotic plants, and peaceful water features.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Each room and suite is thoughtfully positioned to maximize garden views and natural light, creating a
                  serene environment that promotes relaxation and well-being. Our botanical gardens feature rare
                  tropical plants, meditation areas, and walking paths that wind through different themed garden
                  sections.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">10+</div>
                    <div className="text-sm text-slate-600">Acres of Gardens</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">200+</div>
                    <div className="text-sm text-slate-600">Plant Species</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Garden Accommodations</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Experience tranquility in our garden-view rooms and suites, each offering a peaceful retreat
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
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Garden Amenities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Immerse yourself in nature while enjoying world-class facilities and services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Flower className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Botanical Gardens</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Tropical Plant Collection</li>
                  <li>Meditation Gardens</li>
                  <li>Butterfly Garden</li>
                  <li>Herb Garden</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Wellness</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Garden Spa</li>
                  <li>Yoga Pavilion</li>
                  <li>Nature Walks</li>
                  <li>Aromatherapy Gardens</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dining</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Garden Restaurant</li>
                  <li>Outdoor Café</li>
                  <li>Farm-to-Table Menu</li>
                  <li>Private Garden Dining</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connectivity</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Free WiFi Throughout</li>
                  <li>Garden Meeting Spaces</li>
                  <li>Outdoor Workstations</li>
                  <li>Business Center</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Activities</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Garden Tours</li>
                  <li>Botanical Workshops</li>
                  <li>Bird Watching</li>
                  <li>Photography Sessions</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Eco-Friendly Transport</li>
                  <li>Garden Shuttle</li>
                  <li>Bicycle Rentals</li>
                  <li>Electric Cart Service</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Garden Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover the natural beauty and tranquil spaces that make Hotel Gardens special
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
