import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">EKO</span>
              </div>
              <div>
                <div className="text-xl font-bold">Eko Hotels</div>
                <div className="text-sm text-slate-300">& Suites</div>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Experience luxury and comfort in the heart of Lagos with world-class amenities and exceptional service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/meetings" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Meetings & Events
                </Link>
              </li>
              <li>
                <Link href="/recreation" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Recreation
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Packages & Offers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gardens" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Eko Gardens
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Eko Hotel
                </Link>
              </li>
              <li>
                <Link href="/suites" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Eko Suites
                </Link>
              </li>
              <li>
                <Link href="/signature" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Eko Signature
                </Link>
              </li>
              <li>
                <Link href="/tower" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Eko Tower II
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300">Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <p className="text-slate-300">+234 1 277 7000</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <p className="text-slate-300">info@ekohotels.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-300">© 2024 Eko Hotels & Suites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
