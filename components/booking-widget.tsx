"use client"

import { useState } from "react"
import { Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")

  return (
    <section className="relative -mt-20 z-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="checkin" className="text-sm font-medium text-slate-700">
                  ARRIVAL DATE
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="checkin"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkout" className="text-sm font-medium text-slate-700">
                  DEPARTURE DATE
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="checkout"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">ADULTS</Label>
                <Select value={adults} onValueChange={setAdults}>
                  <SelectTrigger className="h-12">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-slate-400" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Adult{num > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">CHILDREN</Label>
                <Select value={children} onValueChange={setChildren}>
                  <SelectTrigger className="h-12">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-slate-400" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Child{num > 1 ? "ren" : num === 1 ? "" : "ren"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="h-12 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg">
                Book Now
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">Best price guaranteed • Free cancellation • Instant confirmation</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
