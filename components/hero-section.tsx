"use client"

import Image from "next/image"
import { Header } from "@/components/header"

export function HeroSection() {
  // Function to scroll to booking widget
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-widget")
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to scroll to features section
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById("features-section")
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <Header />

      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury pool area at Eko Hotels & Suites"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to
            <span className="block text-amber-400">Eko Hotels & Suites</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Experience luxury and comfort in the heart of Lagos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Your Stay
            </button>
            <button
              onClick={scrollToFeatures}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Amenities
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
