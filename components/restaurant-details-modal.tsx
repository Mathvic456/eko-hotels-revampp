"use client"

import Image from "next/image"
import { X, Clock, MapPin, Phone, Star, Users, Utensils, Wine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

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

interface RestaurantDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  restaurant: Restaurant
  onMakeReservation: () => void
}

export function RestaurantDetailsModal({
  isOpen,
  onClose,
  restaurant,
  onMakeReservation,
}: RestaurantDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{restaurant.name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-600">{restaurant.cuisine}</Badge>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
              <span className="text-sm font-medium">{restaurant.rating}</span>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="font-semibold">{restaurant.rating}/5</div>
                    <div className="text-sm text-slate-600">Guest Rating</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Utensils className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="font-semibold">{restaurant.priceRange}</div>
                    <div className="text-sm text-slate-600">Price Range</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Restaurant Details</h3>
                <p className="text-slate-600 mb-6">{restaurant.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-slate-600">{restaurant.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-slate-600">{restaurant.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Reservations</p>
                      <p className="text-slate-600">{restaurant.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Cuisine Type</h4>
                  <p className="text-lg font-bold text-amber-600">{restaurant.cuisine}</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Experience authentic flavors and expertly crafted dishes
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="menu" className="mt-6">
            <div className="space-y-8">
              {restaurant.menu.map((category, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-4 text-amber-600 border-b border-amber-200 pb-2">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <span className="text-amber-600 font-bold">{item.price}</span>
                          </div>
                          <p className="text-slate-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Dietary Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                  <span>Vegetarian Options Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                  <span>Gluten-Free Options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
                  <span>Halal Certified</span>
                </div>
              </div>
              <p className="text-slate-600 mt-3 text-sm">
                Please inform our staff of any allergies or dietary requirements when making your reservation.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Restaurant Features</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {restaurant.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-slate-700">Private Dining Available</span>
                  </div>
                  <div className="flex items-center">
                    <Wine className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-slate-700">Sommelier Wine Pairing</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-slate-700">Chef's Table Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-slate-700">Room Service Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Special Experiences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Chef's Tasting Menu</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      A curated multi-course experience showcasing our chef's signature dishes
                    </p>
                    <span className="text-amber-600 font-medium">Available by reservation</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Wine Dinner Events</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Monthly wine pairing dinners featuring premium wines and seasonal menus
                    </p>
                    <span className="text-amber-600 font-medium">Check calendar for dates</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: restaurant.image, alt: "Restaurant Interior" },
                { src: "/placeholder.svg?height=300&width=400&text=Signature+Dish", alt: "Signature Dish" },
                { src: "/placeholder.svg?height=300&width=400&text=Dining+Area", alt: "Dining Area" },
                { src: "/placeholder.svg?height=300&width=400&text=Chef+at+Work", alt: "Chef at Work" },
                { src: "/placeholder.svg?height=300&width=400&text=Wine+Selection", alt: "Wine Selection" },
                { src: "/placeholder.svg?height=300&width=400&text=Private+Dining", alt: "Private Dining Room" },
              ].map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-600 mb-4">
                Experience the ambiance and culinary artistry that makes our restaurant special
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                View Virtual Tour
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t border-slate-200 pt-6 mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-600">
              For special dietary requirements or large groups, please call ahead.
            </p>
          </div>
          <Button onClick={onMakeReservation} className="bg-amber-600 hover:bg-amber-700">
            Make Reservation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
