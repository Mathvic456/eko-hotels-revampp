"use client"

import type React from "react"

import { useState } from "react"
import { Bell, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export function NoOffersAvailable() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // In a real app, this would connect to an API
    toast({
      title: "Notification Set",
      description: "We'll notify you when new offers become available.",
    })

    setEmail("")
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
          <Bell className="h-8 w-8 text-amber-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">No Special Offers Available</h2>
        <p className="text-lg text-slate-600 mb-6">
          We're currently preparing new exclusive offers for our valued guests. Please check back soon for exciting
          deals and promotions.
        </p>
      </div>

      <Card className="w-full max-w-2xl bg-slate-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-xl text-center">Get Notified About New Offers</CardTitle>
          <CardDescription className="text-center">
            Be the first to know when we launch new special offers and promotions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-slate-500 text-center border-t border-slate-200 pt-4">
          We respect your privacy and will only use your email to send you notifications about our special offers.
        </CardFooter>
      </Card>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
          <h3 className="font-semibold text-lg mb-2">Seasonal Promotions</h3>
          <p className="text-slate-600">
            We regularly offer seasonal promotions throughout the year. Check back during major holidays.
          </p>
        </div>
        <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
          <h3 className="font-semibold text-lg mb-2">Corporate Rates</h3>
          <p className="text-slate-600">
            Contact our sales team directly for information about our corporate rates and packages.
          </p>
        </div>
        <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
          <h3 className="font-semibold text-lg mb-2">Loyalty Program</h3>
          <p className="text-slate-600">Join our loyalty program to access exclusive member-only rates and benefits.</p>
        </div>
      </div>
    </div>
  )
}
