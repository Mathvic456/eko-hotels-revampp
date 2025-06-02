import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EkoHotelDetails } from "@/components/eko-hotel-details"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Eko Hotel - Luxury Accommodations | Eko Hotels & Suites",
  description:
    "Experience luxury at Eko Hotel with elegant rooms, modern amenities, and stunning city views in the heart of Victoria Island, Lagos.",
}

export default function EkoHotelPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Eko Hotel"
        description="Elegant luxury in the heart of Victoria Island"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <EkoHotelDetails />
      <Footer />
    </>
  )
}
