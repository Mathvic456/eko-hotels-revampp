"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface RoomProps {
  room: {
    id: string
    name: string
    description: string
    price: number
    capacity: number
    image: string
    amenities: string[]
  }
  isSelected: boolean
  onSelect: () => void
}

export function RoomCard({ room, isSelected, onSelect }: RoomProps) {
  return (
    <Card className={`overflow-hidden transition-all ${isSelected ? "ring-2 ring-amber-600" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative h-48 md:h-full">
          <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-slate-800">{room.name}</h3>
            <div className="text-amber-600 font-bold">
              ${room.price}
              <span className="text-sm text-slate-600">/night</span>
            </div>
          </div>
          <p className="text-slate-600 mb-4">{room.description}</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-amber-600 mr-2" />
                {amenity}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-slate-600">
              Max {room.capacity} {room.capacity > 1 ? "guests" : "guest"}
            </div>
            <Button
              onClick={onSelect}
              className={isSelected ? "bg-amber-700 hover:bg-amber-800" : "bg-amber-600 hover:bg-amber-700"}
            >
              {isSelected ? "Selected" : "Select Room"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
