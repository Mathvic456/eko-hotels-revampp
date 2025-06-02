"use client"

import Image from "next/image"
import { X, Users, Maximize, Check, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Venue {
  id: string
  name: string
  type: string
  description: string
  capacity: number
  size: string
  price: string
  image: string
  features: string[]
  equipment: string[]
  layouts: string[]
}

interface VenueDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  venue: Venue
  onInquire: () => void
}

export function VenueDetailsModal({ isOpen, onClose, venue, onInquire }: VenueDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{venue.name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-600">{venue.type}</Badge>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features & Equipment</TabsTrigger>
            <TabsTrigger value="layouts">Room Layouts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image src={venue.image || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="font-semibold">{venue.capacity} Guests</div>
                    <div className="text-sm text-slate-600">Maximum Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Maximize className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="font-semibold">{venue.size}</div>
                    <div className="text-sm text-slate-600">Room Size</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Venue Details</h3>
                <p className="text-slate-600 mb-6">{venue.description}</p>

                <h4 className="text-lg font-semibold mb-3">Available Layouts</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {venue.layouts.map((layout, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-50">
                      {layout}
                    </Badge>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Pricing</h4>
                  <p className="text-lg font-bold text-amber-600">{venue.price}</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Prices may vary based on event type, duration, and season
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {venue.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Available Equipment</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {venue.equipment.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Catering Services</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Event Planning</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Decoration Services</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Technical Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Photography & Videography</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Entertainment Booking</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="layouts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venue.layouts.map((layout, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Layout className="w-6 h-6 text-amber-600 mr-3" />
                    <h3 className="text-lg font-semibold">{layout} Layout</h3>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=${layout}+Layout`}
                      alt={`${layout} Layout`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm text-slate-600">
                    {layout === "Theater" && (
                      <p>Ideal for presentations, conferences, and large audiences. Maximum capacity in this layout.</p>
                    )}
                    {layout === "Classroom" && (
                      <p>Perfect for training sessions and workshops with tables for note-taking.</p>
                    )}
                    {layout === "Banquet" && <p>Elegant setup for formal dinners, galas, and celebrations.</p>}
                    {layout === "Reception" && <p>Open layout for networking events and cocktail receptions.</p>}
                    {layout === "U-Shape" && (
                      <p>Interactive setup for discussions and presentations with central focus.</p>
                    )}
                    {layout === "Boardroom" && <p>Professional arrangement for meetings and executive discussions.</p>}
                    {layout === "Hollow Square" && (
                      <p>Collaborative setup that encourages interaction between all participants.</p>
                    )}
                    {layout === "Cocktail" && <p>Standing arrangement ideal for social mixers and networking.</p>}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t border-slate-200 pt-6 mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-600">
              For detailed pricing and availability, please contact our events team.
            </p>
          </div>
          <Button onClick={onInquire} className="bg-amber-600 hover:bg-amber-700">
            Request Quote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
