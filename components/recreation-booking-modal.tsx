"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Users, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RecreationalService {
  id: string
  name: string
  category: string
  description: string
  location: string
  hours: string
  price: string
  duration: string
  capacity: number
  rating: number
  image: string
  features: string[]
  amenities: string[]
  packages: {
    name: string
    price: string
    duration: string
    description: string
    includes: string[]
  }[]
}

interface RecreationBookingModalProps {
  isOpen: boolean
  onClose: () => void
  service: RecreationalService
}

export function RecreationBookingModal({ isOpen, onClose, service }: RecreationBookingModalProps) {
  const [selectedPackage, setSelectedPackage] = useState(service.packages[0] || null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

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
        time: "",
        guests: "1",
        specialRequests: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
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
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-4">
              Your {service.name} booking has been confirmed for {formData.date} at {formData.time}.
            </p>
            <p className="text-sm text-slate-500">You will receive a confirmation email shortly.</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">Book {service.name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-600">{service.category}</Badge>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
              <span className="text-sm">{service.rating}</span>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="booking">Booking</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all ${
                    selectedPackage?.name === pkg.name ? "ring-2 ring-amber-600 bg-amber-50" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{pkg.name}</h3>
                      <span className="text-amber-600 font-bold">{pkg.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{pkg.description}</p>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Includes:</h4>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Service Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-slate-600">{service.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Capacity</p>
                      <p className="text-slate-600">Up to {service.capacity} guests</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Amenities</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Important Notes</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Please arrive 15 minutes before your scheduled time</li>
                    <li>• Cancellations must be made 24 hours in advance</li>
                    <li>• Age restrictions may apply for certain activities</li>
                    <li>• Proper attire required for all activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="booking" className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {selectedPackage && (
                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-amber-800 mb-2">Selected Package</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{selectedPackage.name}</p>
                      <p className="text-sm text-amber-700">{selectedPackage.duration}</p>
                    </div>
                    <span className="text-xl font-bold text-amber-600">{selectedPackage.price}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
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
                  <Select value={formData.guests} onValueChange={(value) => handleChange("guests", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: Math.min(service.capacity, 10) }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Guest{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label>Preferred Time</Label>
                  <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests (Optional)</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => handleChange("specialRequests", e.target.value)}
                  rows={3}
                  placeholder="Any special requirements or requests..."
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Processing Booking..." : "Confirm Booking"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
