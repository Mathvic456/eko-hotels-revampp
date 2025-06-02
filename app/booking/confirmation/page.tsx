"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { BookingConfirmationForm } from "@/components/booking-confirmation-form"
import { PaymentForm } from "@/components/payment-form"
import { BookingConfirmationModal } from "@/components/booking-confirmation-modal"

export default function BookingConfirmationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const checkIn = searchParams.get("checkIn") || ""
  const checkOut = searchParams.get("checkOut") || ""
  const adults = searchParams.get("adults") || "2"
  const children = searchParams.get("children") || "0"
  const roomId = searchParams.get("room") || ""

  const [step, setStep] = useState(1)
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingReference, setBookingReference] = useState("")

  const rooms = {
    standard: {
      name: "Standard Room",
      price: 250,
    },
    deluxe: {
      name: "Deluxe Room",
      price: 350,
    },
    executive: {
      name: "Executive Suite",
      price: 500,
    },
    presidential: {
      name: "Presidential Suite",
      price: 1200,
    },
  }

  const selectedRoom = roomId ? rooms[roomId as keyof typeof rooms] : null

  const handleGuestInfoSubmit = (data: typeof guestInfo) => {
    setGuestInfo(data)
    setStep(2)
  }

  const handlePaymentSubmit = () => {
    // Generate a random booking reference
    const reference = `EKO-${Math.floor(100000 + Math.random() * 900000)}`
    setBookingReference(reference)
    setShowConfirmation(true)
  }

  const handleConfirmationClose = () => {
    setShowConfirmation(false)
    router.push("/")
  }

  if (!selectedRoom) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Invalid Booking</h1>
          <p className="mb-8">Please return to the booking page and select a room.</p>
          <button
            onClick={() => router.push("/booking")}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg"
          >
            Return to Booking
          </button>
        </div>
        <Footer />
      </>
    )
  }

  // Calculate number of nights
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 1

  // Calculate total price
  const totalPrice = selectedRoom.price * nights

  return (
    <>
      <Header />
      <PageHeader
        title="Complete Your Booking"
        description="Just a few more steps to confirm your stay"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between mb-8">
              <div className={`flex-1 text-center ${step === 1 ? "text-amber-600 font-bold" : ""}`}>
                <div
                  className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step === 1 ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-600"}`}
                >
                  1
                </div>
                Guest Information
              </div>
              <div className={`flex-1 text-center ${step === 2 ? "text-amber-600 font-bold" : ""}`}>
                <div
                  className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step === 2 ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-600"}`}
                >
                  2
                </div>
                Payment
              </div>
              <div className="flex-1 text-center">
                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center bg-slate-200 text-slate-600">
                  3
                </div>
                Confirmation
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Booking Summary</h2>
                <div className="grid grid-cols-2 gap-4 text-slate-600">
                  <div>
                    <p>
                      <span className="font-semibold">Room:</span> {selectedRoom.name}
                    </p>
                    <p>
                      <span className="font-semibold">Check-in:</span> {new Date(checkIn).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-semibold">Check-out:</span> {new Date(checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Guests:</span> {adults} Adults, {children} Children
                    </p>
                    <p>
                      <span className="font-semibold">Nights:</span> {nights}
                    </p>
                    <p>
                      <span className="font-semibold">Total:</span> ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                {step === 1 && <BookingConfirmationForm initialValues={guestInfo} onSubmit={handleGuestInfoSubmit} />}

                {step === 2 && (
                  <PaymentForm amount={totalPrice} onSubmit={handlePaymentSubmit} onBack={() => setStep(1)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingConfirmationModal
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        bookingReference={bookingReference}
        checkIn={checkIn}
        checkOut={checkOut}
        roomName={selectedRoom.name}
        guestName={`${guestInfo.firstName} ${guestInfo.lastName}`}
        totalAmount={totalPrice}
      />

      <Footer />
    </>
  )
}
