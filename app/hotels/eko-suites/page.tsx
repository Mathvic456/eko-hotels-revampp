import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EkoSuitesDetails } from "@/components/eko-suites-details"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Eko Suites - Extended Stay Luxury | Eko Hotels & Suites",
  description:
    "Perfect for extended stays with spacious suites, kitchenettes, and business amenities at Eko Suites in Lagos.",
}

export default function EkoSuitesPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Eko Suites"
        description="Spacious luxury for extended stays and business travelers"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <EkoSuitesDetails />
      <Footer />
    </>
  )
}
