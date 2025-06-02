"use client"

import type React from "react"
import { useState } from "react"
import { X, Calendar, Users, Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

interface Package {
  id: string
  name: string
  category: string
  description: string
  price: string
  originalPrice?: string
  duration: string
  includes: string[]
  terms: string[]
}

interface PackageBookingModalProps {
  isOpen: boolean
  onClose: () => void
  package: Package
}

export function PackageBookingModal({ isOpen, onClose, package: pkg }: PackageBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "1",
    specialRequests: "",
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "1",
        specialRequests: "",
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
              <Gift className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-4">
              Your {pkg.name} package has been booked for {formData.date}.
            </p>
            <p className="text-sm text-slate-500">You will receive a confirmation email shortly.</p>
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
            <DialogTitle className="text-2xl font-bold">Book Package</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>

        <div className="bg-amber-50 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-amber-800">{pkg.name}</h3>
            <Badge className="bg-amber-600">{pkg.category}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-600">{pkg.price}</span>
              {pkg.originalPrice && <span className="text-lg text-slate-400 line-through">{pkg.originalPrice}</span>}
            </div>
            <div className="flex items-center text-sm text-amber-700">
              <Clock className="w-4 h-4 mr-1" />
              {pkg.duration}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
            </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Select value={formData.guests} onValueChange={(value) => handleChange("guests", value)}>
                  <SelectTrigger className="pl-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleChange("specialRequests", e.target.value)}
              rows={3}
              placeholder="Any special requirements or requests..."
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Package Includes:</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              {pkg.includes.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Terms & Conditions:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {pkg.terms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {term}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeTerms as boolean}
              onCheckedChange={(checked) => handleChange("agreeTerms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions and understand the package inclusions and restrictions
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700"
            disabled={isSubmitting || !formData.agreeTerms}
          >
            {isSubmitting ? "Processing Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
