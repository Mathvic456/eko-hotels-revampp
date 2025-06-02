import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventsListing } from "@/components/events-listing"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Events - Eko Hotels & Suites",
  description: "Discover upcoming events, conferences, and special occasions at Eko Hotels & Suites.",
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Events & Happenings"
        description="Discover exciting events and special occasions at Eko Hotels & Suites"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <EventsListing />
      <Footer />
    </>
  )
}
