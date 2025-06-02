import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackagesSection } from "@/components/packages-section"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Special Packages & Offers - Eko Hotels & Suites",
  description:
    "Discover our exclusive packages including Hakuna Matata Theme Park Pass, Pool Pass, and special hotel deals.",
}

export default function PackagesPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Special Packages & Offers"
        description="Discover exclusive deals and packages for an unforgettable experience"
        backgroundImage="/images/pool-area.png"
      />
      <PackagesSection />
      <Footer />
    </>
  )
}
