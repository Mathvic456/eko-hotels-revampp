"use client"

import Image from "next/image"
import { Building2, Users, Globe, TrendingUp, Award, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SubsidiaryDetailsModal } from "@/components/subsidiary-details-modal"
import { useState } from "react"

export function CompanyOverview() {
  const [selectedSubsidiary, setSelectedSubsidiary] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const subsidiariesWithDetails = [
    {
      name: "Eko Hotels & Suites",
      description: "Nigeria's premier luxury hotel and hospitality destination.",
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Hotels & Suites stands as Nigeria's flagship luxury hospitality destination, offering world-class accommodation, dining, and entertainment experiences. Located on Victoria Island, Lagos, the hotel has been setting the standard for luxury hospitality in West Africa since 1989.",
      established: "1989",
      keyServices: [
        "Luxury Accommodation (5-Star Rooms & Suites)",
        "Fine Dining Restaurants & Bars",
        "Conference & Event Facilities",
        "Spa & Wellness Center",
        "Recreation & Entertainment",
        "Business Center Services",
      ],
      achievements: [
        "Nigeria's Leading Hotel - World Travel Awards",
        "Best Luxury Hotel in West Africa 2024",
        "Over 1 million guests served since inception",
        "Host to numerous international conferences and events",
      ],
      location: "Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos",
      contact: {
        phone: "+234 1 277 7000",
        email: "reservations@ekohotels.com",
        website: "https://www.ekohotels.com",
      },
      stats: [
        { label: "Years of Excellence", value: "35+" },
        { label: "Guest Rooms", value: "450+" },
        { label: "Happy Guests", value: "1M+" },
      ],
    },
    {
      name: "Eko Development Company",
      description: "Leading real estate development and property management.",
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Development Company is a premier real estate development firm specializing in luxury residential, commercial, and mixed-use properties. We have been instrumental in transforming Lagos's skyline with innovative architectural designs and sustainable development practices.",
      established: "1995",
      keyServices: [
        "Luxury Residential Development",
        "Commercial Property Development",
        "Property Management Services",
        "Real Estate Investment Advisory",
        "Urban Planning & Design",
        "Facility Management",
      ],
      achievements: [
        "Over 50 successful development projects completed",
        "Best Real Estate Developer - Lagos State 2023",
        "Pioneered sustainable building practices in Nigeria",
        "Developed over 2 million square feet of premium space",
      ],
      location: "Eko Atlantic City, Victoria Island, Lagos",
      contact: {
        phone: "+234 1 277 7100",
        email: "info@ekodevelopment.com",
        website: "https://www.ekodevelopment.com",
      },
      stats: [
        { label: "Projects Completed", value: "50+" },
        { label: "Sq Ft Developed", value: "2M+" },
        { label: "Years Experience", value: "29+" },
      ],
    },
    {
      name: "Eko Atlantic City",
      description: "Visionary urban development project on reclaimed land.",
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Atlantic City is a groundbreaking urban development project built on land reclaimed from the Atlantic Ocean. This new city represents the future of sustainable urban living in Africa, featuring modern infrastructure, green spaces, and world-class amenities.",
      established: "2009",
      keyServices: [
        "Urban Planning & Development",
        "Infrastructure Development",
        "Residential Communities",
        "Commercial Districts",
        "Environmental Management",
        "Smart City Technologies",
      ],
      achievements: [
        "Largest land reclamation project in Africa",
        "Award-winning sustainable city design",
        "Home to major international businesses",
        "Model for future African urban development",
      ],
      location: "Eko Atlantic City, Lagos",
      contact: {
        phone: "+234 1 277 7200",
        email: "info@ekoatlantic.com",
        website: "https://www.ekoatlantic.com",
      },
      stats: [
        { label: "Land Area", value: "10km²" },
        { label: "Planned Population", value: "250K" },
        { label: "Investment Value", value: "$6B+" },
      ],
    },
    {
      name: "Eko Convention Center",
      description: "World-class venue for conferences and events.",
      icon: <Users className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Convention Center is a state-of-the-art facility designed to host international conferences, exhibitions, and events. With cutting-edge technology and flexible spaces, we provide the perfect venue for business and social gatherings of all sizes.",
      established: "2012",
      keyServices: [
        "Conference & Convention Hosting",
        "Exhibition Services",
        "Corporate Event Management",
        "Audio-Visual Technology",
        "Catering & Hospitality",
        "Event Planning & Coordination",
      ],
      achievements: [
        "Hosted over 500 international conferences",
        "Best Convention Center in West Africa 2023",
        "Capacity for 5,000+ attendees",
        "Advanced digital conference facilities",
      ],
      location: "Eko Hotels Complex, Victoria Island, Lagos",
      contact: {
        phone: "+234 1 277 7300",
        email: "events@ekoconvention.com",
        website: "https://www.ekoconvention.com",
      },
      stats: [
        { label: "Events Hosted", value: "500+" },
        { label: "Max Capacity", value: "5,000" },
        { label: "Years Operating", value: "12+" },
      ],
    },
    {
      name: "Eko Investments",
      description: "Strategic investments across diverse sectors.",
      icon: <Briefcase className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Investments is the investment arm of the Eko Group, focusing on strategic investments across various sectors including technology, healthcare, education, and infrastructure. We identify and nurture promising opportunities that align with Nigeria's economic growth.",
      established: "2000",
      keyServices: [
        "Private Equity Investments",
        "Venture Capital Funding",
        "Strategic Advisory Services",
        "Portfolio Management",
        "Mergers & Acquisitions",
        "Investment Banking",
      ],
      achievements: [
        "Over ₦50 billion in managed investments",
        "Successful exits from 20+ portfolio companies",
        "Leading investor in Nigerian tech startups",
        "Consistent top-quartile returns for investors",
      ],
      location: "Eko Tower, Victoria Island, Lagos",
      contact: {
        phone: "+234 1 277 7400",
        email: "info@ekoinvestments.com",
        website: "https://www.ekoinvestments.com",
      },
      stats: [
        { label: "Assets Under Management", value: "₦50B+" },
        { label: "Portfolio Companies", value: "30+" },
        { label: "Years Investing", value: "24+" },
      ],
    },
    {
      name: "Eko Foundation",
      description: "Corporate social responsibility and community development.",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      fullDescription:
        "Eko Foundation is the philanthropic arm of the Eko Group, dedicated to improving lives and communities through education, healthcare, environmental sustainability, and economic empowerment programs across Nigeria.",
      established: "2005",
      keyServices: [
        "Educational Scholarships & Programs",
        "Healthcare Initiatives",
        "Environmental Conservation",
        "Community Development Projects",
        "Youth Empowerment Programs",
        "Disaster Relief & Emergency Response",
      ],
      achievements: [
        "Over 10,000 students supported through scholarships",
        "Built 25+ schools and healthcare facilities",
        "Planted over 100,000 trees for environmental conservation",
        "Impacted over 500,000 lives across Nigeria",
      ],
      location: "Eko Foundation House, Victoria Island, Lagos",
      contact: {
        phone: "+234 1 277 7500",
        email: "info@ekofoundation.org",
        website: "https://www.ekofoundation.org",
      },
      stats: [
        { label: "Students Supported", value: "10K+" },
        { label: "Communities Reached", value: "200+" },
        { label: "Years of Impact", value: "19+" },
      ],
    },
  ]

  const handleSubsidiaryClick = (subsidiary: any) => {
    setSelectedSubsidiary(subsidiary)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-16">
      {/* Company Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">About The Eko Group</h2>
          <p className="text-lg text-slate-600 mb-6">
            The Eko Group is a diversified conglomerate with interests spanning hospitality, real estate development,
            investments, and urban planning. For over four decades, we have been at the forefront of Nigeria's economic
            development, creating iconic properties and experiences that define luxury and excellence.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Founded with a vision to transform Lagos's skyline and hospitality landscape, the Eko Group has grown into a
            multi-faceted organization with significant impact across multiple industries. Our flagship property, Eko
            Hotels & Suites, stands as a testament to our commitment to world-class standards and service excellence.
          </p>
          <div className="flex items-center space-x-4 text-amber-600">
            <div className="font-semibold">Established 1983</div>
            <div className="w-1 h-1 rounded-full bg-amber-600"></div>
            <div className="font-semibold">Lagos, Nigeria</div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Eko Group Headquarters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
            <div className="p-6">
              <div className="text-white text-sm font-medium mb-1">Corporate Headquarters</div>
              <div className="text-white text-xl font-bold">Eko Group Tower, Victoria Island</div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-slate-50 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To be the leading African conglomerate, setting global standards in hospitality, real estate, and urban
              development while showcasing the best of Nigerian excellence and innovation to the world.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To create exceptional value through innovative development, strategic investments, and world-class service
              delivery, while contributing to Nigeria's economic growth and enhancing the quality of life in our
              communities.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-slate-600">
              We strive for excellence in everything we do, setting the highest standards for quality and service.
            </p>
          </div>
          <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Integrity</h3>
            <p className="text-slate-600">
              We conduct our business with the highest ethical standards, honesty, and transparency.
            </p>
          </div>
          <div className="text-center p-6 border border-slate-200 rounded-lg bg-white">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
              <Globe className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
            <p className="text-slate-600">
              We embrace innovation and creative thinking to develop solutions that address evolving needs.
            </p>
          </div>
        </div>
      </div>

      {/* Subsidiaries */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Our Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiariesWithDetails.map((subsidiary, index) => (
            <Card
              key={index}
              className="border-amber-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleSubsidiaryClick(subsidiary)}
            >
              <CardHeader>
                <div className="mb-2">{subsidiary.icon}</div>
                <CardTitle>{subsidiary.name}</CardTitle>
                <CardDescription>{subsidiary.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500 mb-3">
                  Part of the Eko Group's diverse portfolio of companies committed to excellence and innovation.
                </div>
                <div className="text-sm text-amber-600 font-medium hover:text-amber-700">Click to learn more →</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Group Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Executive ${item}`}
                  alt={`Executive ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">Executive Name</h3>
              <p className="text-amber-600">
                Chief {item === 1 ? "Executive" : item === 2 ? "Financial" : item === 3 ? "Operations" : "Strategy"}{" "}
                Officer
              </p>
            </div>
          ))}
        </div>
      </div>
      <SubsidiaryDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        subsidiary={selectedSubsidiary}
      />
    </div>
  )
}
