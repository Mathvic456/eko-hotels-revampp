"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { Check, Users, Bed, Maximize, Star, Wifi, Car, Coffee } from "lucide-react"

export function EkoHotelDetails() {
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
      id: "standard-king",
      name: "Standard King Room",
      type: "Standard Room",
      description: "Elegantly appointed room with modern amenities and city views",
      price: 250,
      size: "32 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Standard+King+Room",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Coffee Maker", "Safe", "Hairdryer"],
      features: ["City View", "24/7 Room Service", "Daily Housekeeping", "Concierge Service"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Standard+King+Room",
        "/placeholder.svg?height=400&width=600&text=Bathroom",
        "/placeholder.svg?height=400&width=600&text=City+View",
        "/placeholder.svg?height=400&width=600&text=Room+Detail",
      ],
    },
    {
      id: "deluxe-king",
      name: "Deluxe King Room",
      type: "Deluxe Room",
      description: "Spacious room with premium amenities and partial ocean views",
      price: 320,
      size: "38 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Deluxe+King+Room",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Bathtub",
        "Safe",
        "Hairdryer",
        "Robes",
      ],
      features: [
        "Partial Ocean View",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
        "Premium Toiletries",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Deluxe+King+Room",
        "/placeholder.svg?height=400&width=600&text=Luxury+Bathroom",
        "/placeholder.svg?height=400&width=600&text=Ocean+View",
        "/placeholder.svg?height=400&width=600&text=Premium+Amenities",
      ],
    },
    {
      id: "executive-king",
      name: "Executive King Room",
      type: "Executive Room",
      description: "Premium room with executive lounge access and enhanced amenities",
      price: 420,
      size: "42 sqm",
      capacity: 2,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Executive+King+Room",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Bathtub",
        "Safe",
        "Hairdryer",
        "Robes",
        "Executive Lounge Access",
      ],
      features: [
        "Ocean View",
        "Executive Lounge Access",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
        "Premium Toiletries",
        "Complimentary Breakfast",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Executive+King+Room",
        "/placeholder.svg?height=400&width=600&text=Executive+Bathroom",
        "/placeholder.svg?height=400&width=600&text=Ocean+View",
        "/placeholder.svg?height=400&width=600&text=Executive+Lounge",
      ],
    },
    {
      id: "junior-suite",
      name: "Junior Suite",
      type: "Suite",
      description: "Spacious suite with separate living area and premium amenities",
      price: 550,
      size: "55 sqm",
      capacity: 3,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Junior+Suite",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Coffee Maker",
        "Bathtub",
        "Safe",
        "Hairdryer",
        "Robes",
        "Living Area",
        "Work Desk",
      ],
      features: [
        "Ocean View",
        "Separate Living Area",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Concierge Service",
        "Premium Toiletries",
        "Executive Lounge Access",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Junior+Suite",
        "/placeholder.svg?height=400&width=600&text=Living+Area",
        "/placeholder.svg?height=400&width=600&text=Suite+Bathroom",
        "/placeholder.svg?height=400&width=600&text=Ocean+View",
      ],
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Hotel+Exterior",
    "/placeholder.svg?height=400&width=600&text=Lobby",
    "/placeholder.svg?height=400&width=600&text=Restaurant",
    "/placeholder.svg?height=400&width=600&text=Pool+Area",
    "/placeholder.svg?height=400&width=600&text=Fitness+Center",
    "/placeholder.svg?height=400&width=600&text=Business+Center",
    "/placeholder.svg?height=400&width=600&text=Conference+Room",
    "/placeholder.svg?height=400&width=600&text=Spa",
    "/placeholder.svg?height=400&width=600&text=Ocean+View",
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
                    src="/placeholder.svg?height=400&width=600&text=Eko+Hotel+Main"
                    alt="Eko Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#002f47] mb-4">About Eko Hotel</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Eko Hotel stands as the flagship property of our luxury collection, offering unparalleled elegance in
                  the heart of Victoria Island. With its prime location and sophisticated design, the hotel provides
                  guests with breathtaking views of the Atlantic Ocean and Lagos skyline.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our meticulously designed rooms and suites feature contemporary furnishings, state-of-the-art
                  technology, and premium amenities. Whether you're here for business or leisure, Eko Hotel delivers an
                  exceptional experience with world-class service and attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">450+</div>
                    <div className="text-sm text-slate-600">Luxury Rooms</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">5★</div>
                    <div className="text-sm text-slate-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Rooms & Suites</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Choose from our selection of elegantly appointed rooms and suites, each designed for comfort and luxury
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
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Hotel Amenities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover our comprehensive range of facilities and services designed for your comfort and convenience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connectivity</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Complimentary High-Speed WiFi</li>
                  <li>Business Center</li>
                  <li>Meeting Rooms</li>
                  <li>Conference Facilities</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dining</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Multiple Restaurants</li>
                  <li>24/7 Room Service</li>
                  <li>Bars & Lounges</li>
                  <li>Private Dining</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Recreation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Swimming Pool</li>
                  <li>Fitness Center</li>
                  <li>Spa Services</li>
                  <li>Tennis Court</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Airport Shuttle</li>
                  <li>Valet Parking</li>
                  <li>Car Rental</li>
                  <li>Limousine Service</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Guest Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>24/7 Concierge</li>
                  <li>Laundry Service</li>
                  <li>Currency Exchange</li>
                  <li>Tour Arrangements</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Check className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Additional Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Executive Lounge</li>
                  <li>Gift Shop</li>
                  <li>Medical Services</li>
                  <li>Babysitting</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Photo Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our beautiful facilities and accommodations through our photo gallery
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
