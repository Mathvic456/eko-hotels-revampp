import { PageHeader } from "@/components/page-header"
import { NoOffersAvailable } from "@/components/no-offers-available"

export default function SpecialOffersPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Special Offers"
        description="Exclusive deals and promotions at Eko Hotels & Suites"
        backgroundImage="/placeholder.svg?height=500&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        <NoOffersAvailable />
      </div>
    </div>
  )
}
