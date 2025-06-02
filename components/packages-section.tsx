"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Users, Clock, Star, Gift, Waves, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PackageBookingModal } from "@/components/package-booking-modal"

export function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  interface Package {
    id: string
    name: string
    category: string
    description: string
    price: string
    originalPrice?: string
    duration: string
    image: string
    featured: boolean
    includes: string[]
    highlights: string[]
    validUntil: string
    terms: string[]
  }

  const packages: Package[] = [
    {
      id: "hakuna-matata",
      name: "Hakuna Matata Theme Park Pass",
      category: "Family Fun",
      description:
        "Experience the ultimate family adventure with unlimited access to our theme park attractions, water slides, and entertainment shows.",
      price: "₦15,000",
      originalPrice: "₦20,000",
      duration: "Full Day Access",
      image: "/placeholder.svg?height=400&width=600&text=Theme+Park",
      featured: true,
      includes: [
        "Unlimited theme park access",
        "All water slides and attractions",
        "Live entertainment shows",
        "Character meet & greet",
        "Complimentary parking",
        "Welcome drink",
      ],
      highlights: [
        "Perfect for families with children",
        "Over 15 exciting attractions",
        "Professional lifeguards on duty",
        "Photo opportunities with mascots",
      ],
      validUntil: "December 31, 2024",
      terms: [
        "Valid for one day only",
        "Children under 3 enter free",
        "No outside food or drinks allowed",
        "Subject to weather conditions",
      ],
    },
    {
      id: "pool-pass",
      name: "Pool Pass",
      category: "Recreation",
      description:
        "Enjoy a relaxing day by our stunning infinity pools with access to poolside dining and premium amenities.",
      price: "₦8,000",
      originalPrice: "₦12,000",
      duration: "8:00 AM - 8:00 PM",
      image: "/images/pool-area.png",
      featured: true,
      includes: [
        "Full day pool access",
        "Poolside lounge chair",
        "Towel service",
        "Access to changing rooms",
        "Complimentary WiFi",
        "Welcome cocktail",
      ],
      highlights: [
        "Infinity pool with ocean views",
        "Poolside bar and restaurant",
        "Professional pool attendants",
        "Instagram-worthy photo spots",
      ],
      validUntil: "December 31, 2024",
      terms: [
        "Valid for one day only",
        "Must be accompanied by adult if under 18",
        "Pool rules must be followed",
        "Subject to capacity limits",
      ],
    },
    {
      id: "romantic-getaway",
      name: "Romantic Getaway Package",
      category: "Romance",
      description:
        "Create unforgettable memories with your loved one in our luxury suite with romantic amenities and experiences.",
      price: "₦85,000",
      originalPrice: "₦120,000",
      duration: "2 Days, 1 Night",
      image: "/placeholder.svg?height=400&width=600&text=Romantic+Suite",
      featured: false,
      includes: [
        "Luxury suite accommodation",
        "Champagne and chocolates on arrival",
        "Couples spa treatment",
        "Romantic dinner for two",
        "Late checkout (2:00 PM)",
        "Rose petal turndown service",
      ],
      highlights: ["Ocean view suite", "Private balcony", "Couples massage", "Candlelit dinner"],
      validUntil: "February 14, 2025",
      terms: [
        "Advance booking required",
        "Subject to availability",
        "Valid for couples only",
        "Cannot be combined with other offers",
      ],
    },
    {
      id: "business-executive",
      name: "Business Executive Package",
      category: "Business",
      description:
        "Perfect for business travelers with executive amenities, meeting room access, and premium services.",
      price: "₦65,000",
      duration: "Per Night",
      image: "/placeholder.svg?height=400&width=600&text=Executive+Suite",
      featured: false,
      includes: [
        "Executive suite accommodation",
        "Executive lounge access",
        "Complimentary breakfast",
        "High-speed WiFi",
        "Airport transfer",
        "Meeting room (2 hours)",
      ],
      highlights: ["Business center access", "Concierge services", "Express laundry", "24/7 room service"],
      validUntil: "March 31, 2025",
      terms: [
        "Valid Monday to Thursday",
        "Minimum 2 nights stay",
        "Corporate ID required",
        "Meeting room subject to availability",
      ],
    },
    {
      id: "family-staycation",
      name: "Family Staycation Package",
      category: "Family",
      description: "The perfect family escape with accommodation, meals, and activities for the whole family to enjoy.",
      price: "₦95,000",
      originalPrice: "₦130,000",
      duration: "2 Days, 1 Night",
      image: "/placeholder.svg?height=400&width=600&text=Family+Room",
      featured: false,
      includes: [
        "Family room accommodation",
        "Breakfast for the family",
        "Theme park passes",
        "Pool access",
        "Kids club activities",
        "Family dinner",
      ],
      highlights: ["Connecting rooms available", "Kids eat free", "Supervised activities", "Family entertainment"],
      validUntil: "December 31, 2024",
      terms: [
        "Valid for families with children",
        "Maximum 2 adults, 2 children",
        "Age restrictions apply for some activities",
        "Advance booking recommended",
      ],
    },
    {
      id: "spa-wellness",
      name: "Spa & Wellness Retreat",
      category: "Wellness",
      description:
        "Rejuvenate your mind, body, and soul with our comprehensive wellness package including spa treatments and healthy dining.",
      price: "₦75,000",
      duration: "Full Day Experience",
      image: "/placeholder.svg?height=400&width=600&text=Spa+Wellness",
      featured: false,
      includes: [
        "Full body massage",
        "Facial treatment",
        "Sauna and steam room access",
        "Healthy lunch",
        "Yoga session",
        "Wellness consultation",
      ],
      highlights: ["Professional therapists", "Organic treatments", "Meditation garden", "Detox menu options"],
      validUntil: "December 31, 2024",
      terms: [
        "Advance booking required",
        "Health questionnaire required",
        "Suitable for adults only",
        "Cancellation 24 hours prior",
      ],
    },
  ]

  const handleBookPackage = (pkg: Package) => {
    setSelectedPackage(pkg)
    setShowBookingModal(true)
  }

  const categoryIcons = {
    "Family Fun": TreePine,
    Recreation: Waves,
    Romance: Star,
    Business: Users,
    Family: Users,
    Wellness: Gift,
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Featured Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Packages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages
              .filter((pkg) => pkg.featured)
              .map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600">{pkg.category}</Badge>
                    </div>
                    {pkg.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-600">Featured</Badge>
                      </div>
                    )}
                    {pkg.originalPrice && (
                      <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Save{" "}
                        {Math.round(
                          ((Number.parseInt(pkg.originalPrice.replace(/[₦,]/g, "")) -
                            Number.parseInt(pkg.price.replace(/[₦,]/g, ""))) /
                            Number.parseInt(pkg.originalPrice.replace(/[₦,]/g, ""))) *
                            100,
                        )}
                        %
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{pkg.name}</h3>
                    <p className="text-slate-600 mb-4">{pkg.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-amber-600">{pkg.price}</span>
                          {pkg.originalPrice && (
                            <span className="text-lg text-slate-400 line-through">{pkg.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {pkg.duration}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Package Includes:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {pkg.includes.slice(0, 4).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                        {pkg.includes.length > 4 && (
                          <li className="text-amber-600 text-sm">+{pkg.includes.length - 4} more inclusions</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Valid until {pkg.validUntil}
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => handleBookPackage(pkg)}>
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Packages */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">All Packages & Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const CategoryIcon = categoryIcons[pkg.category as keyof typeof categoryIcons] || Gift

              return (
                <Card
                  key={pkg.id}
                  className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600">{pkg.category}</Badge>
                    </div>
                    {pkg.originalPrice && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                        SAVE{" "}
                        {Math.round(
                          ((Number.parseInt(pkg.originalPrice.replace(/[₦,]/g, "")) -
                            Number.parseInt(pkg.price.replace(/[₦,]/g, ""))) /
                            Number.parseInt(pkg.originalPrice.replace(/[₦,]/g, ""))) *
                            100,
                        )}
                        %
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <CategoryIcon className="w-4 h-4 text-amber-600" />
                      </div>
                      <h3 className="font-bold text-slate-800 line-clamp-1">{pkg.name}</h3>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm line-clamp-2">{pkg.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold text-amber-600">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">{pkg.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="mb-4 flex-grow">
                      <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1 h-1 bg-amber-600 rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-xs text-slate-500 mb-3">Valid until {pkg.validUntil}</div>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleBookPackage(pkg)}>
                        Book Package
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Limited Time Offers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't miss out on these exclusive deals and special promotions available for a limited time only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-2 border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Bird Special</h3>
              <p className="text-slate-600 mb-4">Book 30 days in advance and save up to 25% on all packages</p>
              <Badge className="bg-green-600">Save 25%</Badge>
            </Card>

            <Card className="text-center p-6 border-2 border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Group Discounts</h3>
              <p className="text-slate-600 mb-4">Special rates for groups of 10 or more guests</p>
              <Badge className="bg-blue-600">Group Rates</Badge>
            </Card>

            <Card className="text-center p-6 border-2 border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loyalty Rewards</h3>
              <p className="text-slate-600 mb-4">Earn points with every stay and redeem for exclusive benefits</p>
              <Badge className="bg-purple-600">Earn Points</Badge>
            </Card>
          </div>
        </div>
      </div>

      {selectedPackage && (
        <PackageBookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          package={selectedPackage}
        />
      )}
    </section>
  )
}
