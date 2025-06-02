import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Gallery - Eko Hotels & Suites",
  description: "Browse our gallery of images showcasing our luxury accommodations, amenities, and experiences.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Photo Gallery"
        description="Explore our luxury accommodations, amenities, and experiences"
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />
      <ImageGallery />
      <Footer />
    </>
  )
}
