import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EkoSignatureDetails } from "@/components/eko-signature-details"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Eko Signature - Premium Luxury | Eko Hotels & Suites",
  description:
    "Experience the pinnacle of luxury at Eko Signature with butler service, private balconies, and exclusive amenities.",
}

export default function EkoSignaturePage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Eko Signature"
        description="The pinnacle of luxury and exclusive service"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <EkoSignatureDetails />
      <Footer />
    </>
  )
}
