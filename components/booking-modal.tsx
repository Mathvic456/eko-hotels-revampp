"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Calendar, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  room: Room
}

export function BookingModal({ isOpen, onClose, room }: BookingModalProps) {
  const router = useRouter()

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")

  const handleBookNow = () => {
    if (checkIn && checkOut) {
      router.push(
        `/booking/confirmation?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&room=${room.id}`,
      )
    }
  }

  // Calculate number of nights
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 0

  // Calculate total price
  const totalPrice = nights * room.price

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">Book Your Stay</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
              <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-semibold">{room.name}</h3>
              <p className="text-slate-600 text-sm">{room.type}</p>
              <p className="text-amber-600 font-medium">${room.price}/night</p>
            </div>
          </div>

          <div className="space-y-4">
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
                  required
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
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                    {[1, 2, 3, 4].map((num) => (
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
                    {[0, 1, 2, 3].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Child{num > 1 ? "ren" : num === 1 ? "" : "ren"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {nights > 0 && (
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">
                  {nights} night{nights > 1 ? "s" : ""} × ${room.price}
                </span>
                <span className="font-medium">${room.price * nights}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Taxes & fees (10%)</span>
                <span className="font-medium">${(room.price * nights * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-200 mt-2 pt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-amber-600">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="mr-2">
            Cancel
          </Button>
          <Button
            onClick={handleBookNow}
            className="bg-amber-600 hover:bg-amber-700"
            disabled={!checkIn || !checkOut || nights <= 0}
          >
            Continue to Book
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
