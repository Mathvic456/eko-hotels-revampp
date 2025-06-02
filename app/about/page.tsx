import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "About Us - Eko Hotels & Suites",
  description:
    "Learn about Eko Hotels & Suites - Nigeria's premier luxury hospitality destination with world-class amenities and service.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="About Eko Hotels & Suites"
        description="Nigeria's premier luxury hospitality destination"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <AboutSection />
      <Footer />
    </>
  )
}
