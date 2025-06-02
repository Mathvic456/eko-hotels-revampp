"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Users, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface Event {
  id: string
  title: string
  category: string
  date: string
  time: string
  location: string
  ticketTypes?: {
    name: string
    price: string
    benefits: string[]
  }[]
}

interface EventRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  event: Event
}

export function EventRegistrationModal({ isOpen, onClose, event }: EventRegistrationModalProps) {
  const [step, setStep] = useState(1)
  const [selectedTicket, setSelectedTicket] = useState(event.ticketTypes?.[0]?.name || "")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    attendees: "1",
    specialRequests: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setStep(1)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        attendees: "1",
        specialRequests: "",
        paymentMethod: "credit-card",
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        agreeTerms: false,
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md text-center">
          <div className="py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
            <p className="text-slate-600 mb-4">
              Thank you for registering for {event.title}. Your tickets have been confirmed.
            </p>
            <p className="text-sm text-slate-500">
              You will receive a confirmation email shortly with all the details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">Register for Event</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-slate-600">{event.title}</p>
        </DialogHeader>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <div className={`flex-1 text-center ${step === 1 ? "text-amber-600 font-bold" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  step === 1 ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                1
              </div>
              Attendee Info
            </div>
            <div className={`flex-1 text-center ${step === 2 ? "text-amber-600 font-bold" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  step === 2 ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                2
              </div>
              Ticket Selection
            </div>
            <div className={`flex-1 text-center ${step === 3 ? "text-amber-600 font-bold" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  step === 3 ? "bg-amber-600 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                3
              </div>
              Payment
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization (Optional)</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="attendees">Number of Attendees</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Select value={formData.attendees} onValueChange={(value) => handleChange("attendees", value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Person" : "People"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Event Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input value={event.date} className="pl-10" disabled />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleChange("specialRequests", e.target.value)}
                  rows={3}
                  placeholder="Dietary requirements, accessibility needs, etc."
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={handleNextStep} className="bg-amber-600 hover:bg-amber-700">
                  Next: Select Tickets
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-slate-600">
                      {event.date} • {event.time} • {event.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Ticket Type</Label>
                <RadioGroup value={selectedTicket} onValueChange={setSelectedTicket} className="space-y-4">
                  {event.ticketTypes?.map((ticket, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedTicket === ticket.name
                          ? "border-amber-600 bg-amber-50"
                          : "border-slate-200 hover:border-amber-300"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={ticket.name} id={`ticket-${index}`} />
                        <div className="flex-grow">
                          <Label htmlFor={`ticket-${index}`} className="font-medium cursor-pointer">
                            {ticket.name}
                          </Label>
                          <p className="text-sm text-slate-600">{ticket.price}</p>
                        </div>
                      </div>
                      <div className="mt-2 pl-6">
                        <ul className="text-xs text-slate-600 space-y-1">
                          {ticket.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                              {benefit}
                            </li>
                          ))}
                          {ticket.benefits.length > 3 && (
                            <li className="text-amber-600">+{ticket.benefits.length - 3} more benefits</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button type="button" onClick={handleNextStep} className="bg-amber-600 hover:bg-amber-700">
                  Next: Payment
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>
                    {selectedTicket} x {formData.attendees}
                  </span>
                  <span className="font-medium">
                    {event.ticketTypes?.find((t) => t.name === selectedTicket)?.price || ""}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">
                    {event.ticketTypes?.find((t) => t.name === selectedTicket)?.price || ""}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleChange("paymentMethod", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="cursor-pointer">
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer" className="cursor-pointer">
                      Bank Transfer
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.paymentMethod === "credit-card" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      value={formData.cardName}
                      onChange={(e) => handleChange("cardName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleChange("cardNumber", e.target.value)}
                        className="pl-10"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleChange("cvv", e.target.value)}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "bank-transfer" && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Bank Transfer Instructions</h3>
                  <p className="text-sm text-blue-700 mb-2">
                    Please transfer the total amount to the following account:
                  </p>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>Bank: First National Bank</p>
                    <p>Account Name: Eko Hotels & Suites</p>
                    <p>Account Number: 1234567890</p>
                    <p>Reference: EKO-EVENT-{event.id}</p>
                  </div>
                  <p className="text-sm text-blue-700 mt-2">
                    Your registration will be confirmed once payment is received.
                  </p>
                </div>
              )}

              <div className="flex items-start space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms as boolean}
                  onCheckedChange={(checked) => handleChange("agreeTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700"
                  disabled={isSubmitting || !formData.agreeTerms}
                >
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
