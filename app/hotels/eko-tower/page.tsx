import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EkoTowerDetails } from "@/components/eko-tower-details"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Eko Tower - Sky-High Luxury | Eko Hotels & Suites",
  description:
    "Reach new heights of luxury at Eko Tower with panoramic views, premium amenities, and sophisticated accommodations.",
}

export default function EkoTowerPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Eko Tower"
        description="Sky-high luxury with panoramic city views"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <EkoTowerDetails />
      <Footer />
    </>
  )
}
