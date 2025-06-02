import { HeroSection } from "@/components/hero-section"
import { BookingWidget } from "@/components/booking-widget"
import { FeaturesSection } from "@/components/features-section"
import { MiniAboutSection } from "@/components/mini-about-section"
import { AccommodationSection } from "@/components/accommodation-section"
import { DiningSection } from "@/components/dining-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="booking-widget">
        <BookingWidget />
      </div>
      <div id="features-section">
        <FeaturesSection />
      </div>
      <MiniAboutSection />
      <AccommodationSection />
      <DiningSection />
      <Footer />
    </main>
  )
}
