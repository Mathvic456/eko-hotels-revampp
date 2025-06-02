"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, MapPin, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ReservationModal } from "@/components/reservation-modal"
import { RestaurantDetailsModal } from "@/components/restaurant-details-modal"

export function DiningExperiences() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  const [showReservationModal, setShowReservationModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  interface Restaurant {
    id: string
    name: string
    cuisine: string
    description: string
    location: string
    phone: string
    hours: string
    priceRange: string
    rating: number
    image: string
    features: string[]
    menu: {
      category: string
      items: { name: string; price: string; description: string }[]
    }[]
  }

  const restaurants: Restaurant[] = [
    {
      id: "kuramo",
      name: "Kuramo Restaurant",
      cuisine: "International Cuisine",
      description: "Fine dining with panoramic ocean views and contemporary international dishes",
      location: "Eko Hotel, Ground Floor",
      phone: "+234 1 277 7000",
      hours: "6:00 AM - 11:00 PM",
      priceRange: "$$$",
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Ocean View", "Fine Dining", "Wine Selection", "Private Dining"],
      menu: [
        {
          category: "Appetizers",
          items: [
            { name: "Grilled Prawns", price: "$28", description: "Fresh prawns with garlic butter" },
            { name: "Beef Carpaccio", price: "$32", description: "Thinly sliced beef with arugula" },
          ],
        },
        {
          category: "Main Courses",
          items: [
            { name: "Grilled Lobster", price: "$65", description: "Fresh lobster with herb butter" },
            { name: "Wagyu Beef Steak", price: "$85", description: "Premium beef with truffle sauce" },
          ],
        },
      ],
    },
    {
      id: "lagoon",
      name: "Lagoon Restaurant",
      cuisine: "Nigerian Delicacies",
      description: "Authentic Nigerian flavors in an elegant setting with traditional and modern dishes",
      location: "Eko Hotel, First Floor",
      phone: "+234 1 277 7001",
      hours: "12:00 PM - 10:00 PM",
      priceRange: "$$",
      rating: 4.6,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Traditional Cuisine", "Cultural Experience", "Live Music", "Outdoor Seating"],
      menu: [
        {
          category: "Traditional Dishes",
          items: [
            { name: "Jollof Rice", price: "$18", description: "Spiced rice with chicken or beef" },
            { name: "Pepper Soup", price: "$22", description: "Spicy fish or goat meat soup" },
          ],
        },
        {
          category: "Grilled Specialties",
          items: [
            { name: "Suya Platter", price: "$25", description: "Grilled meat with spices" },
            { name: "Grilled Fish", price: "$30", description: "Fresh fish with Nigerian spices" },
          ],
        },
      ],
    },
    {
      id: "sky-lounge",
      name: "Sky Lounge",
      cuisine: "Cocktails & Light Bites",
      description: "Rooftop bar with stunning city skyline views and craft cocktails",
      location: "Eko Hotel, Rooftop",
      phone: "+234 1 277 7002",
      hours: "5:00 PM - 2:00 AM",
      priceRange: "$$$",
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Rooftop Views", "Craft Cocktails", "Live DJ", "City Skyline"],
      menu: [
        {
          category: "Signature Cocktails",
          items: [
            { name: "Lagos Sunset", price: "$15", description: "Rum, passion fruit, and lime" },
            { name: "Victoria Island", price: "$18", description: "Gin, elderflower, and cucumber" },
          ],
        },
        {
          category: "Light Bites",
          items: [
            { name: "Truffle Fries", price: "$12", description: "Crispy fries with truffle oil" },
            { name: "Chicken Wings", price: "$16", description: "Spicy wings with blue cheese" },
          ],
        },
      ],
    },
    {
      id: "poolside-grill",
      name: "Poolside Grill",
      cuisine: "Casual Dining",
      description: "Relaxed dining by the pool with grilled specialties and refreshing drinks",
      location: "Pool Area",
      phone: "+234 1 277 7003",
      hours: "11:00 AM - 8:00 PM",
      priceRange: "$$",
      rating: 4.4,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Pool Views", "Casual Atmosphere", "Grilled Food", "Family Friendly"],
      menu: [
        {
          category: "Grilled Items",
          items: [
            { name: "Burger & Fries", price: "$14", description: "Beef burger with crispy fries" },
            { name: "Grilled Chicken", price: "$18", description: "Marinated chicken breast" },
          ],
        },
        {
          category: "Refreshments",
          items: [
            { name: "Fresh Smoothies", price: "$8", description: "Tropical fruit smoothies" },
            { name: "Iced Coffee", price: "$6", description: "Cold brew with ice" },
          ],
        },
      ],
    },
  ]

  const handleMakeReservation = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant)
    setShowReservationModal(true)
  }

  const handleViewDetails = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant)
    setShowDetailsModal(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600">{restaurant.cuisine}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{restaurant.name}</h3>
                  <span className="text-amber-600 font-medium">{restaurant.priceRange}</span>
                </div>

                <p className="text-slate-600 mb-4">{restaurant.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {restaurant.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {restaurant.hours}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {restaurant.phone}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-50">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => handleViewDetails(restaurant)}
                  >
                    View Details
                  </Button>
                  <Button
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    onClick={() => handleMakeReservation(restaurant)}
                  >
                    Make Reservation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Dining Experiences */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Special Dining Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Dining</h3>
              <p className="text-slate-600 mb-4">Exclusive dining experiences for special occasions</p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Learn More
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Room Service</h3>
              <p className="text-slate-600 mb-4">Delicious meals delivered to your room anytime</p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Order Now
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chef's Table</h3>
              <p className="text-slate-600 mb-4">Interactive dining experience with our executive chef</p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Reserve
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {selectedRestaurant && (
        <>
          <RestaurantDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            restaurant={selectedRestaurant}
            onMakeReservation={() => {
              setShowDetailsModal(false)
              setShowReservationModal(true)
            }}
          />

          <ReservationModal
            isOpen={showReservationModal}
            onClose={() => setShowReservationModal(false)}
            restaurant={selectedRestaurant}
          />
        </>
      )}
    </section>
  )
}
