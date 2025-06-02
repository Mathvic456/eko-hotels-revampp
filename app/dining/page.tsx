import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DiningExperiences } from "@/components/dining-experiences"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Dining - Eko Hotels & Suites",
  description: "Experience culinary excellence at our award-winning restaurants and bars at Eko Hotels & Suites.",
}

export default function DiningPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Dining Experiences"
        description="Savor exceptional cuisine at our award-winning restaurants and bars"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <DiningExperiences />
      <Footer />
    </>
  )
}
