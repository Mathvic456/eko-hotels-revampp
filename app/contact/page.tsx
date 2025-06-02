import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { PageHeader } from "@/components/page-header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Eko Hotels & Suites",
  description: "Get in touch with Eko Hotels & Suites. We're here to assist you with any inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        description="We're here to assist you with any inquiries"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8">
                We'd love to hear from you. Please fill out the form below and our team will get back to you shortly.
              </p>

              <ContactForm formType="general" />
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-slate-600">
                      Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-slate-600">+234 1 277 7000</p>
                    <p className="text-slate-600">+234 1 460 9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-600">info@ekohotels.com</p>
                    <p className="text-slate-600">reservations@ekohotels.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-slate-600">Reception: 24/7</p>
                    <p className="text-slate-600">Reservations: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 bg-slate-200 rounded-lg">
                {/* Map would go here - placeholder for now */}
                <div className="w-full h-full flex items-center justify-center text-slate-400">Interactive Map</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
