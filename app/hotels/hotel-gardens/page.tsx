import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelGardensDetails } from "@/components/hotel-gardens-details"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Hotel Gardens - Tranquil Retreat | Eko Hotels & Suites",
  description:
    "Discover serenity at Hotel Gardens with lush landscapes, peaceful accommodations, and garden views in Lagos.",
}

export default function HotelGardensPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Hotel Gardens"
        description="Tranquil luxury surrounded by lush landscapes"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <HotelGardensDetails />
      <Footer />
    </>
  )
}
