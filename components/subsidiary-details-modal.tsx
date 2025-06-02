"use client"

import type React from "react"

import Image from "next/image"
import { X, Globe, MapPin, Phone, Mail, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Subsidiary {
  name: string
  description: string
  icon: React.ReactNode
  fullDescription: string
  established: string
  keyServices: string[]
  achievements: string[]
  location: string
  contact: {
    phone: string
    email: string
    website: string
  }
  stats: {
    label: string
    value: string
  }[]
}

interface SubsidiaryDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  subsidiary: Subsidiary | null
}

export function SubsidiaryDetailsModal({ isOpen, onClose, subsidiary }: SubsidiaryDetailsModalProps) {
  if (!subsidiary) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {subsidiary.icon}
              <div>
                <DialogTitle className="text-2xl font-bold">{subsidiary.name}</DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-amber-600" />
                  <span className="text-sm text-slate-600">Established {subsidiary.established}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=${subsidiary.name}`}
                alt={subsidiary.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <div className="p-4">
                  <Badge className="bg-amber-600 text-white">{subsidiary.name}</Badge>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">About {subsidiary.name}</h3>
              <p className="text-slate-600 leading-relaxed">{subsidiary.fullDescription}</p>
            </div>

            {/* Key Services */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Services & Offerings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {subsidiary.keyServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0"></div>
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
              <div className="space-y-3">
                {subsidiary.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Statistics</h3>
              <div className="space-y-4">
                {subsidiary.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{subsidiary.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{subsidiary.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{subsidiary.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <a
                    href={subsidiary.contact.website}
                    className="text-sm text-amber-600 hover:text-amber-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Learn More</Button>
              <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
