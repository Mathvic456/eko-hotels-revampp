"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, X, Users, Bed, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface Room {
  id: string
  name: string
  size: string
  capacity: number
  bedType: string
  price: number
  amenities: string[]
  images: string[]
}

interface Accommodation {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  rooms: Room[]
  amenities: string[]
  location: string
}

interface AccommodationDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  accommodation: Accommodation
  onBookNow: () => void
}

export function AccommodationDetailsModal({
  isOpen,
  onClose,
  accommodation,
  onBookNow,
}: AccommodationDetailsModalProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(accommodation.rooms[0] || null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedRoom && selectedRoom.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length)
    }
  }

  const prevImage = () => {
    if (selectedRoom && selectedRoom.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-3xl font-bold">{accommodation.title}</DialogTitle>
              <DialogDescription className="text-lg text-amber-600 font-medium mt-1">
                {accommodation.location}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={accommodation.image || "/placeholder.svg"}
                      alt={accommodation.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">About {accommodation.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{accommodation.description}</p>

                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {accommodation.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Starting from</h4>
                    <div className="text-3xl font-bold text-amber-600">
                      ${accommodation.rooms[0]?.price || 0}
                      <span className="text-lg text-slate-600">/night</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Prices vary by room type and season</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rooms" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Available Rooms</h3>
                  <div className="space-y-3">
                    {accommodation.rooms.map((room) => (
                      <Card
                        key={room.id}
                        className={`cursor-pointer transition-all ${
                          selectedRoom?.id === room.id ? "ring-2 ring-amber-600 bg-amber-50" : "hover:shadow-md"
                        }`}
                        onClick={() => handleRoomSelect(room)}
                      >
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-lg mb-2">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center">
                              <Maximize className="w-4 h-4 mr-1" />
                              {room.size}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {room.capacity} guests
                            </div>
                            <div className="flex items-center">
                              <Bed className="w-4 h-4 mr-1" />
                              {room.bedType}
                            </div>
                          </div>
                          <div className="text-amber-600 font-bold">${room.price}/night</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  {selectedRoom && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{selectedRoom.name}</h3>
                        <Badge className="bg-amber-600">${selectedRoom.price}/night</Badge>
                      </div>

                      {/* Room Image Gallery */}
                      <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                        <Image
                          src={selectedRoom.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${selectedRoom.name} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                        {selectedRoom.images.length > 1 && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                            >
                              ←
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                            >
                              →
                            </Button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {selectedRoom.images.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Room Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Maximize className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                          <div className="font-semibold">{selectedRoom.size}</div>
                          <div className="text-sm text-slate-600">Room Size</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                          <div className="font-semibold">{selectedRoom.capacity} Guests</div>
                          <div className="text-sm text-slate-600">Maximum Occupancy</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Bed className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                          <div className="font-semibold">{selectedRoom.bedType} Bed</div>
                          <div className="text-sm text-slate-600">Bed Configuration</div>
                        </div>
                      </div>

                      {/* Room Amenities */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Room Amenities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedRoom.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-4 w-4 text-amber-600 mr-2" />
                              <span className="text-slate-700">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Property Amenities</h4>
                  <div className="space-y-3">
                    {accommodation.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-amber-600 mr-3" />
                        <span className="text-slate-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Business Services</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Business Center</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Meeting Rooms</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Conference Facilities</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Printing Services</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Recreation</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Swimming Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Fitness Center</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Spa Services</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3" />
                      <span className="text-slate-700">Tennis Court</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedRoom ? (
                  selectedRoom.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedRoom.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 ring-4 ring-amber-600 bg-amber-600/20" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-slate-500">Select a room to view its gallery</div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-slate-200 p-6 bg-slate-50">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-amber-600">
                ${selectedRoom?.price || accommodation.rooms[0]?.price || 0}
                <span className="text-lg text-slate-600">/night</span>
              </div>
              <p className="text-sm text-slate-600">{selectedRoom?.name || "Select a room"} • Best rate guaranteed</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={onBookNow} className="bg-amber-600 hover:bg-amber-700">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
