import { Wifi, Car, Utensils, Waves, Dumbbell, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Multiple pools including infinity pool with ocean views",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "World-class restaurants serving international cuisine",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym and wellness facilities",
    },
    {
      icon: Users,
      title: "Event Spaces",
      description: "Elegant venues for meetings, weddings, and conferences",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the property",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary parking with valet service",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">World-Class Amenities</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience luxury at its finest with our comprehensive range of facilities and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
