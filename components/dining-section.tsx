import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DiningSection() {
  const restaurants = [
    {
      name: "Kuramo Restaurant",
      cuisine: "International Cuisine",
      description: "Fine dining with panoramic ocean views",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Lagoon Restaurant",
      cuisine: "Nigerian Delicacies",
      description: "Authentic local flavors in an elegant setting",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Sky Lounge",
      cuisine: "Cocktails & Light Bites",
      description: "Rooftop bar with stunning city skyline views",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Culinary Excellence</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Savor exceptional dining experiences at our award-winning restaurants and bars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{restaurant.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{restaurant.cuisine}</p>
                <p className="text-slate-600">{restaurant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
