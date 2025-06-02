"use client"

import { Calendar, MapPin, User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BookingConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  bookingReference: string
  checkIn: string
  checkOut: string
  roomName: string
  guestName: string
  totalAmount: number
}

export function BookingConfirmationModal({
  isOpen,
  onClose,
  bookingReference,
  checkIn,
  checkOut,
  roomName,
  guestName,
  totalAmount,
}: BookingConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-green-600">Booking Confirmed!</DialogTitle>
        </DialogHeader>

        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4 text-left">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Booking Details</h3>

              <div className="space-y-3">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium">Confirmation Number</p>
                    <p className="text-amber-600 font-bold">{bookingReference}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium">Guest Name</p>
                    <p className="text-slate-600">{guestName}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium">Room</p>
                    <p className="text-slate-600">{roomName}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium">Stay Dates</p>
                    <p className="text-slate-600">
                      {new Date(checkIn).toLocaleDateString()} - {new Date(checkOut).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-bold text-amber-600">${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
              <p className="font-medium mb-1">What's Next?</p>
              <ul className="space-y-1">
                <li>• Confirmation email sent to your inbox</li>
                <li>• Check-in starts at 3:00 PM</li>
                <li>• Bring a valid ID and credit card</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
            <Button className="flex-1 bg-amber-600 hover:bg-amber-700">Print Confirmation</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
