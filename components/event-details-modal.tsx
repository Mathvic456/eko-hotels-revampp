"use client"

import Image from "next/image"
import { X, Calendar, Clock, MapPin, Users, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Event {
  id: string
  title: string
  category: string
  description: string
  date: string
  time: string
  location: string
  price: string
  capacity: number
  image: string
  organizer: string
  featured: boolean
  tags: string[]
  schedule?: {
    time: string
    activity: string
  }[]
  speakers?: {
    name: string
    title: string
    company: string
    image: string
  }[]
  ticketTypes?: {
    name: string
    price: string
    benefits: string[]
  }[]
}

interface EventDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  event: Event
  onRegister: () => void
}

export function EventDetailsModal({ isOpen, onClose, event, onRegister }: EventDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-600">{event.category}</Badge>
            {event.featured && <Badge className="bg-purple-600">Featured</Badge>}
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            {event.speakers && event.speakers.length > 0 && <TabsTrigger value="speakers">Speakers</TabsTrigger>}
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                <p className="text-slate-600 mb-6">{event.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-slate-600">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-slate-600">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-slate-600">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Capacity</p>
                      <p className="text-slate-600">{event.capacity} attendees</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">Organizer</p>
                      <p className="text-slate-600">{event.organizer}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Pricing</h4>
                  <p className="text-lg font-bold text-amber-600">{event.price}</p>
                  <p className="text-sm text-amber-700 mt-1">
                    See the Tickets tab for detailed pricing and package information
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            {event.schedule && event.schedule.length > 0 ? (
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[39px] w-0.5 bg-slate-200" />
                <div className="space-y-8">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-20 flex-shrink-0 text-sm font-medium text-slate-600">{item.time}</div>
                      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 flex-shrink-0">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="ml-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex-grow">
                        <p className="font-medium">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">No schedule information available</div>
            )}
          </TabsContent>

          {event.speakers && (
            <TabsContent value="speakers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="w-16 h-16 mr-4">
                          <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                          <AvatarFallback>
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{speaker.name}</h4>
                          <p className="text-sm text-slate-600">{speaker.title}</p>
                          <p className="text-sm text-amber-600">{speaker.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          <TabsContent value="tickets" className="mt-6">
            {event.ticketTypes && event.ticketTypes.length > 0 ? (
              <div className="space-y-6">
                {event.ticketTypes.map((ticket, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="border-l-4 border-amber-600">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{ticket.name}</h3>
                          <div className="text-2xl font-bold text-amber-600">{ticket.price}</div>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Includes:</h4>
                          <ul className="space-y-1">
                            {ticket.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-slate-600">
                                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">No ticket information available</div>
            )}
          </TabsContent>
        </Tabs>

        <div className="border-t border-slate-200 pt-6 mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-600">
              For group bookings or special requirements, please contact our events team.
            </p>
          </div>
          <Button onClick={onRegister} className="bg-amber-600 hover:bg-amber-700">
            Register Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
