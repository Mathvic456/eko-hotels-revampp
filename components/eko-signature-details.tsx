"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { RoomDetailsModal } from "@/components/room-details-modal"
import { Users, Bed, Maximize, Star, Wifi, Car, Coffee, Crown, Gem } from "lucide-react"

export function EkoSignatureDetails() {
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
      id: "signature-deluxe",
      name: "Signature Deluxe Suite",
      type: "Deluxe Suite",
      description: "Luxurious suite with butler service and premium amenities",
      price: 750,
      size: "80 sqm",
      capacity: 3,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Signature+Deluxe+Suite",
      amenities: [
        "Butler Service",
        "Private Balcony",
        "Premium Dining",
        "Spa Access",
        "Jacuzzi",
        "Premium Bar",
        "Concierge",
      ],
      features: [
        "Butler Service",
        "Private Balcony",
        "Ocean View",
        "24/7 Room Service",
        "Daily Housekeeping",
        "Premium Toiletries",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Signature+Deluxe+Suite",
        "/placeholder.svg?height=400&width=600&text=Private+Balcony",
        "/placeholder.svg?height=400&width=600&text=Luxury+Bathroom",
        "/placeholder.svg?height=400&width=600&text=Butler+Service",
      ],
    },
    {
      id: "signature-premium",
      name: "Signature Premium Suite",
      type: "Premium Suite",
      description: "Expansive suite with panoramic ocean views and exclusive amenities",
      price: 950,
      size: "100 sqm",
      capacity: 4,
      bedType: "King",
      image: "/placeholder.svg?height=400&width=600&text=Signature+Premium+Suite",
      amenities: [
        "Butler Service",
        "Private Balcony",
        "Premium Dining",
        "Spa Access",
        "Jacuzzi",
        "Premium Bar",
        "Private Chef",
        "Limousine Service",
      ],
      features: [
        "Panoramic Ocean View",
        "Private Chef",
        "Butler Service",
        "Private Balcony",
        "24/7 Room Service",
        "Exclusive Lounge Access",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Signature+Premium+Suite",
        "/placeholder.svg?height=400&width=600&text=Panoramic+Ocean+View",
        "/placeholder.svg?height=400&width=600&text=Private+Chef",
        "/placeholder.svg?height=400&width=600&text=Premium+Amenities",
      ],
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      type: "Presidential",
      description: "The ultimate luxury experience with unparalleled service and amenities",
      price: 1500,
      size: "150 sqm",
      capacity: 6,
      bedType: "King + Queen",
      image: "/placeholder.svg?height=400&width=600&text=Presidential+Suite",
      amenities: [
        "Butler Service",
        "Private Balcony",
        "Premium Dining",
        "Spa Access",
        "Jacuzzi",
        "Premium Bar",
        "Private Chef",
        "Limousine Service",
        "Personal Assistant",
      ],
      features: [
        "Presidential Treatment",
        "Private Terrace",
        "Personal Assistant",
        "Private Chef",
        "Butler Service",
        "Exclusive Access",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Presidential+Suite",
        "/placeholder.svg?height=400&width=600&text=Master+Bedroom",
        "/placeholder.svg?height=400&width=600&text=Private+Terrace",
        "/placeholder.svg?height=400&width=600&text=Presidential+Dining",
      ],
    },
    {
      id: "royal-penthouse",
      name: "Royal Penthouse",
      type: "Penthouse",
      description: "Exclusive penthouse with private elevator and rooftop access",
      price: 2500,
      size: "250 sqm",
      capacity: 8,
      bedType: "King + Queen + Sofa Beds",
      image: "/placeholder.svg?height=400&width=600&text=Royal+Penthouse",
      amenities: [
        "Butler Service",
        "Private Elevator",
        "Rooftop Access",
        "Premium Dining",
        "Spa Access",
        "Jacuzzi",
        "Premium Bar",
        "Private Chef",
        "Limousine Service",
        "Personal Assistant",
      ],
      features: [
        "Private Elevator",
        "Rooftop Access",
        "360° City Views",
        "Personal Assistant",
        "Private Chef",
        "Butler Service",
      ],
      images: [
        "/placeholder.svg?height=400&width=600&text=Royal+Penthouse",
        "/placeholder.svg?height=400&width=600&text=Private+Elevator",
        "/placeholder.svg?height=400&width=600&text=Rooftop+Access",
        "/placeholder.svg?height=400&width=600&text=360+City+Views",
      ],
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Eko+Signature+Exterior",
    "/placeholder.svg?height=400&width=600&text=Luxury+Lobby",
    "/placeholder.svg?height=400&width=600&text=Signature+Restaurant",
    "/placeholder.svg?height=400&width=600&text=Infinity+Pool",
    "/placeholder.svg?height=400&width=600&text=Spa+Sanctuary",
    "/placeholder.svg?height=400&width=600&text=Private+Beach",
    "/placeholder.svg?height=400&width=600&text=Rooftop+Lounge",
    "/placeholder.svg?height=400&width=600&text=Butler+Service",
    "/placeholder.svg?height=400&width=600&text=Ocean+Sunset",
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
                    src="/placeholder.svg?height=400&width=600&text=Eko+Signature+Main"
                    alt="Eko Signature"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#002f47] mb-4">About Eko Signature</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Eko Signature represents the pinnacle of luxury hospitality, offering an exclusive experience that
                  redefines opulence. Our signature property features the most prestigious accommodations, personalized
                  butler service, and access to exclusive amenities reserved for our most discerning guests.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Every suite is a masterpiece of design and comfort, featuring private balconies with breathtaking
                  ocean views, premium furnishings, and state-of-the-art technology. Our dedicated team of butlers and
                  concierges ensure that every moment of your stay exceeds your highest expectations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">50+</div>
                    <div className="text-sm text-slate-600">Signature Suites</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#002f47]">24/7</div>
                    <div className="text-sm text-slate-600">Butler Service</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Signature Suites</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Experience the ultimate in luxury with our exclusive signature suites and personalized service
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
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Signature Amenities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Indulge in exclusive amenities and personalized services designed for the ultimate luxury experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Crown className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Butler Service</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Personal Butler 24/7</li>
                  <li>Unpacking Service</li>
                  <li>Personal Shopping</li>
                  <li>Reservation Management</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Gem className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Private Beach Access</li>
                  <li>Signature Lounge</li>
                  <li>Rooftop Infinity Pool</li>
                  <li>Private Dining Rooms</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Services</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Private Chef Service</li>
                  <li>Spa Treatments</li>
                  <li>Yacht Charter</li>
                  <li>Helicopter Transfers</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Culinary Excellence</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Michelin-Star Dining</li>
                  <li>Wine Sommelier</li>
                  <li>Private Wine Cellar</li>
                  <li>Gourmet Room Service</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Technology</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Smart Suite Controls</li>
                  <li>High-Speed Internet</li>
                  <li>Entertainment Systems</li>
                  <li>Video Conferencing</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-12 h-12 text-[#002f47] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Rolls-Royce Fleet</li>
                  <li>Private Jet Access</li>
                  <li>Yacht Services</li>
                  <li>Helicopter Pad</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#002f47] mb-4">Signature Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover the epitome of luxury through our exclusive signature experiences and amenities
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
