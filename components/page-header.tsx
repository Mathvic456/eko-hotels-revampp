import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
