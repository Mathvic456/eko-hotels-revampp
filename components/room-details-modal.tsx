"use client"

import Image from "next/image"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

interface RoomDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  room: Room
  onBookNow: () => void
}

export function RoomDetailsModal({ isOpen, onClose, room, onBookNow }: RoomDetailsModalProps) {
  // Additional room images (would be from the room object in a real implementation)
  const roomImages = [
    room.image,
    "/placeholder.svg?height=400&width=600&text=Bathroom",
    "/placeholder.svg?height=400&width=600&text=View",
    "/placeholder.svg?height=400&width=600&text=Detail",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-bold">{room.name}</DialogTitle>
              <DialogDescription className="text-amber-600 font-medium">{room.type}</DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  </div>

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
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-slate-600 mb-4">{room.description}</p>

                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <Check className="h-4 w-4 text-amber-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      ${room.price}
                      <span className="text-sm text-slate-600">/night</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">Excluding taxes and fees</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Room Amenities</h3>
                  <ul className="space-y-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <Check className="h-4 w-4 text-amber-600 mr-2" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Bathroom</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Private bathroom
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Shower
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Hairdryer
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Premium toiletries
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Daily housekeeping
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      24-hour room service
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Laundry service
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check className="h-4 w-4 text-amber-600 mr-2" />
                      Wake-up service
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roomImages.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${room.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="p-6 pt-0">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Close
          </Button>
          <Button onClick={onBookNow} className="bg-amber-600 hover:bg-amber-700">
            Book Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
