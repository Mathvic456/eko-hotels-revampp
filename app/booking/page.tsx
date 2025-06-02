"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { RoomCard } from "@/components/room-card"
import { BookingSummary } from "@/components/booking-summary"
import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "")
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "")
  const [adults, setAdults] = useState(searchParams.get("adults") || "2")
  const [children, setChildren] = useState(searchParams.get("children") || "0")
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const rooms = [
    {
      id: "standard",
      name: "Standard Room",
      description: "Comfortable room with modern amenities",
      price: 250,
      capacity: 2,
      image: "/placeholder.svg?height=300&width=500",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Spacious room with city view",
      price: 350,
      capacity: 2,
      image: "/placeholder.svg?height=300&width=500",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Bathtub"],
    },
    {
      id: "executive",
      name: "Executive Suite",
      description: "Luxury suite with separate living area",
      price: 500,
      capacity: 3,
      image: "/placeholder.svg?height=300&width=500",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Bathtub", "Lounge Area"],
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic views",
      price: 1200,
      capacity: 4,
      image: "/placeholder.svg?height=300&width=500",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Bar",
        "Bathtub",
        "Lounge Area",
        "Private Terrace",
        "Butler Service",
      ],
    },
  ]

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId)
  }

  const handleContinue = () => {
    if (selectedRoom) {
      router.push(
        `/booking/confirmation?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&room=${selectedRoom}`,
      )
    }
  }

  const updateSearchParams = () => {
    router.push(`/booking?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}`)
  }

  return (
    <>
      <Header />
      <PageHeader
        title="Book Your Stay"
        description="Select your perfect accommodation"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Adults</Label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-slate-400" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Adult{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Children</Label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-slate-400" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Child{num > 1 ? "ren" : num === 1 ? "" : "ren"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={updateSearchParams} className="bg-amber-600 hover:bg-amber-700">
                  Update Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
              <div className="space-y-6">
                {rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    isSelected={selectedRoom === room.id}
                    onSelect={() => handleRoomSelect(room.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <BookingSummary
                checkIn={checkIn}
                checkOut={checkOut}
                adults={Number.parseInt(adults)}
                children={Number.parseInt(children)}
                selectedRoom={rooms.find((room) => room.id === selectedRoom)}
                onContinue={handleContinue}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
