import { PageHeader } from "@/components/page-header"
import { CompanyOverview } from "@/components/company-overview"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="The Eko Group"
        description="A legacy of excellence across multiple industries"
        backgroundImage="/placeholder.svg?height=500&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        <CompanyOverview />
      </div>
    </div>
  )
}
