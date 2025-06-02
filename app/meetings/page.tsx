import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MeetingsVenues } from "@/components/meetings-venues"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Meetings & Events - Eko Hotels & Suites",
  description: "Host your next meeting, conference or special event at Eko Hotels & Suites.",
}

export default function MeetingsPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Meetings & Events"
        description="Elegant venues for conferences, weddings, and special occasions"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <MeetingsVenues />
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Request Event Information</h2>
            <ContactForm formType="event" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
