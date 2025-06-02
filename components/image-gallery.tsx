"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "rooms", name: "Rooms & Suites" },
    { id: "dining", name: "Dining" },
    { id: "amenities", name: "Amenities" },
    { id: "events", name: "Events" },
    { id: "exterior", name: "Exterior" },
  ]

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=Pool+Area",
      alt: "Pool Area",
      category: "amenities",
      title: "Swimming Pool",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Presidential+Suite",
      alt: "Presidential Suite",
      category: "rooms",
      title: "Presidential Suite",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600&text=Restaurant",
      alt: "Restaurant",
      category: "dining",
      title: "Kuramo Restaurant",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600&text=Hotel+Exterior",
      alt: "Hotel Exterior",
      category: "exterior",
      title: "Hotel Exterior",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600&text=Conference+Room",
      alt: "Conference Room",
      category: "events",
      title: "Conference Center",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600&text=Deluxe+Room",
      alt: "Deluxe Room",
      category: "rooms",
      title: "Deluxe Room",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600&text=Spa",
      alt: "Spa",
      category: "amenities",
      title: "Spa & Wellness",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600&text=Sky+Lounge",
      alt: "Sky Lounge",
      category: "dining",
      title: "Sky Lounge",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600&text=Ballroom",
      alt: "Ballroom",
      category: "events",
      title: "Grand Ballroom",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600&text=Executive+Suite",
      alt: "Executive Suite",
      category: "rooms",
      title: "Executive Suite",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600&text=Fitness+Center",
      alt: "Fitness Center",
      category: "amenities",
      title: "Fitness Center",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600&text=Ocean+View",
      alt: "Ocean View",
      category: "exterior",
      title: "Ocean View",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? images : images.filter((image) => image.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = selectedImage
    const totalImages = filteredImages.length

    if (direction === "prev") {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1)
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(index)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-amber-600">{image.title}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            {selectedImage !== null && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="relative h-[80vh]">
                  <Image
                    src={filteredImages[selectedImage]?.src || "/placeholder.svg"}
                    alt={filteredImages[selectedImage]?.alt || ""}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{filteredImages[selectedImage]?.title}</h3>
                  <p className="text-white/80 text-sm">
                    {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
