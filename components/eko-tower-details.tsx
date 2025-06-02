"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { Users, Bed, Maximize, Star, Wifi, Car, Coffee, Building, Eye } from "lucide-react"

export function EkoTowerDetails() {
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
      id: "tower-deluxe",
      name: "Tower Deluxe Room",
      type: "Deluxe",
      description: "Elevated luxury with panoramic city and ocean views from the 20th floor",
      price: 480,
      size: "45 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Tower+Deluxe+Room",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Floor-to-Ceiling Windows",
        "City Views",
      ],
      features: [
        "Panoramic Views",
        "High Floor Location",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Premium Toiletries",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Tower+Deluxe+Room",
        "/placeholder.svg?height=400&width=600&text=Panoramic+Views",
        "/placeholder.svg?height=400&width=600&text=Floor+to+Ceiling+Windows",
        "/placeholder.svg?height=400&width=600&text=Modern+Bathroom",
      ],
    },
    {
      id: "tower-executive",
      name: "Tower Executive Suite",
      type: "Executive Suite",
      description: "Sophisticated suite on the 30th floor with executive lounge access",
      price: 680,
      size: "70 sqm",
      capacity: 3,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Tower+Executive+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Executive Lounge Access",
        "Panoramic Views",
        "Living Area",
      ],
      features: [
        "Executive Lounge Access",
        "Panoramic Views",
        "Separate Living Area",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Tower+Executive+Suite",
        "/placeholder.svg?height=400&width=600&text=Executive+Living+Area",
        "/placeholder.svg?height=400&width=600&text=Executive+Lounge",
        "/placeholder.svg?height=400&width=600&text=City+Skyline",
      ],
    },
    {
      id: "tower-penthouse",
      name: "Tower Penthouse",
      type: "Penthouse",
      description: "Luxurious penthouse on the 40th floor with 360-degree city views",
      price: 1200,
      size: "120 sqm",
      capacity: 4,
      bedType: "King + Queen",
      image: "/placeholder.svg?height=400&width=600&text=Tower+Penthouse",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Private Terrace",
        "360° Views",
        "Butler Service",
      ],
      features: [
        "360° City Views",
        "Private Terrace",
        "Butler Service",
        "Separate Living Area",
        "24/7 Room Service",
        "Premium Amenities",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Tower+Penthouse",
        "/placeholder.svg?height=400&width=600&text=360+Degree+Views",
        "/placeholder.svg?height=400&width=600&text=Private+Terrace",
        "/placeholder.svg?height=400&width=600&text=Penthouse+Living",
      ],
    },
    {
      id: "sky-villa",
      name: "Sky Villa",
      type: "Villa",
      description: "Ultimate luxury villa on the 50th floor with private elevator access",
      price: 2000,
      size: "200 sqm",
      capacity: 6,
      bedType: "King + Queen + Sofa Beds",
      image: "/placeholder.svg?height=400&width=600&text=Sky+Villa",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Private Elevator",
        "Sky Terrace",
        "Butler Service",
        "Private Chef",
      ],
      features: ["Private Elevator", "Sky Terrace", "Private Chef", "Butler Service", "360° Views", "Exclusive Access"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Sky+Villa",
        "/placeholder.svg?height=400&width=600&text=Private+Elevator",
        "/placeholder.svg?height=400&width=600&text=Sky+Terrace",
        "/placeholder.svg?height=400&width=600&text=Villa+Master+Suite",
      ],
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Eko+Tower+Exterior",
    "/placeholder.svg?height=400&width=600&text=Tower+Lobby",
    "/placeholder.svg?height=400&width=600&text=Sky+Restaurant",
    "/placeholder.svg?height=400&width=600&text=Infinity+Edge+Pool",
    "/placeholder.svg?height=400&width=600&text=Observation+Deck",
    "/placeholder.svg?height=400&width=600&text=Sky+Bar",
    "/placeholder.svg?height=400&width=600&text=Helicopter+Pad",
    "/placeholder.svg?height=400&width=600&text=City+Lights",
    "/placeholder.svg?height=400&width=600&text=Sunset+Views",
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
                    src="/placeholder.svg?height=400&width=600&text=Eko+Tower+Main"
                    alt="Eko Tower"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#002f47] mb-4">About Eko Tower</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Eko Tower stands as an architectural marvel, soaring 50 stories above Lagos and offering unparalleled
                  views of the city skyline and Atlantic Ocean. This iconic tower represents the pinnacle of modern
                  luxury hospitality, where cutting-edge design meets exceptional service.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Each room and suite is positioned to maximize the breathtaking panoramic views, featuring
                  floor-to-ceiling windows and modern amenities. From the sky-high infinity pool to the rooftop helipad,
                  Eko Tower offers experiences that literally elevate your stay above the ordinary.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">50</div>
                    <div className="text-sm text-slate-600">Floors High</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">360°</div>
                    <div className="text-sm text-slate-600">Panoramic Views</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Sky-High Accommodations</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Experience luxury at new heights with our tower rooms and suites featuring panoramic city views
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
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Tower Amenities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover world-class amenities and services designed for the ultimate high-rise luxury experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Eye className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Panoramic Views</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>360° City Views</li>
                  <li>Ocean Vistas</li>
                  <li>Sunset Observations</li>
                  <li>Sky Deck Access</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Building className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sky-High Facilities</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Rooftop Infinity Pool</li>
                  <li>Sky Bar & Lounge</li>
                  <li>Observation Deck</li>
                  <li>Helicopter Landing Pad</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>High-Speed Elevators</li>
                  <li>Sky Concierge</li>
                  <li>Private Dining</li>
                  <li>Butler Service</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dining</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Sky Restaurant</li>
                  <li>Cloud Nine Bar</li>
                  <li>Room Service</li>
                  <li>Private Chef</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Technology</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Ultra-Fast WiFi</li>
                  <li>Smart Room Controls</li>
                  <li>Video Conferencing</li>
                  <li>Digital Concierge</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Helicopter Service</li>
                  <li>Luxury Car Fleet</li>
                  <li>Private Jet Access</li>
                  <li>Express Elevators</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Tower Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Experience the breathtaking views and luxury amenities that make Eko Tower extraordinary
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
