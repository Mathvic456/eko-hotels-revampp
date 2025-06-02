import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RecreationalServices } from "@/components/recreational-services"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Recreational Services - Eko Hotels & Suites",
  description:
    "Enjoy world-class recreational facilities including spa, fitness center, swimming pools, and more at Eko Hotels & Suites.",
}

export default function RecreationPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Recreational Services"
        description="Relax, rejuvenate, and enjoy world-class recreational facilities"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <RecreationalServices />
      <Footer />
    </>
  )
}
