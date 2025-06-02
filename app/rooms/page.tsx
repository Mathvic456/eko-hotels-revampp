import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomsList } from "@/components/rooms-list"
import { PageHeader } from "@/components/page-header"
import { ReviewsSection } from "@/components/reviews-section"

export const metadata = {
  title: "Rooms & Suites - Eko Hotels & Suites",
  description: "Discover our luxurious rooms and suites designed for comfort and elegance at Eko Hotels & Suites.",
}

export default function RoomsPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Rooms & Suites"
        description="Experience luxury and comfort in our elegantly appointed accommodations"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <RoomsList />
      <ReviewsSection />
      <Footer />
    </>
  )
}
