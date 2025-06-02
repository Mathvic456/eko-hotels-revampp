"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BookingSummaryProps {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  selectedRoom:
    | {
        id: string
        name: string
        price: number
      }
    | undefined
  onContinue: () => void
}

export function BookingSummary({ checkIn, checkOut, adults, children, selectedRoom, onContinue }: BookingSummaryProps) {
  // Calculate number of nights
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 0

  // Calculate total price
  const roomPrice = selectedRoom ? selectedRoom.price * nights : 0
  const taxesAndFees = roomPrice * 0.1 // 10% taxes and fees
  const totalPrice = roomPrice + taxesAndFees

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-600">Check-in</span>
              <span className="font-medium">{checkIn ? new Date(checkIn).toLocaleDateString() : "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Check-out</span>
              <span className="font-medium">{checkOut ? new Date(checkOut).toLocaleDateString() : "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Guests</span>
              <span className="font-medium">
                {adults} Adult{adults !== 1 ? "s" : ""}, {children} Child{children !== 1 ? "ren" : ""}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Nights</span>
              <span className="font-medium">{nights}</span>
            </div>
          </div>

          {selectedRoom && nights > 0 && (
            <div className="space-y-2 pt-4 border-t border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-600">Room</span>
                <span className="font-medium">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">
                  {nights} night{nights !== 1 ? "s" : ""} × ${selectedRoom.price}
                </span>
                <span className="font-medium">${roomPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Taxes & fees (10%)</span>
                <span className="font-medium">${taxesAndFees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-slate-200">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-amber-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}

          <Button
            onClick={onContinue}
            className="w-full bg-amber-600 hover:bg-amber-700 mt-4"
            disabled={!selectedRoom || nights <= 0}
          >
            Continue to Book
          </Button>

          {(!selectedRoom || nights <= 0) && (
            <p className="text-sm text-slate-500 text-center mt-2">
              {!selectedRoom ? "Please select a room" : "Please select valid dates"}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
