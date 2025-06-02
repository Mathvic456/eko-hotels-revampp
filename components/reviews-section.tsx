"use client"

import { useState } from "react"
import { Star, Quote, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ReviewModal } from "@/components/review-modal"

export function ReviewsSection() {
  const [showReviewModal, setShowReviewModal] = useState(false)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Lagos, Nigeria",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Absolutely stunning hotel! The service was exceptional and the ocean view from our suite was breathtaking. The staff went above and beyond to make our anniversary special.",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 12,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      date: "1 month ago",
      review:
        "Perfect for business travel. The conference facilities are top-notch and the executive lounge access was a great perk. Will definitely stay here again.",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 8,
    },
    {
      id: 3,
      name: "Amara Okafor",
      location: "Abuja, Nigeria",
      rating: 4,
      date: "3 weeks ago",
      review:
        "Beautiful property with excellent amenities. The pool area is gorgeous and the restaurants serve amazing food. Only minor issue was the WiFi speed in some areas.",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 15,
    },
    {
      id: 4,
      name: "David Williams",
      location: "New York, USA",
      rating: 5,
      date: "1 week ago",
      review:
        "Exceeded all expectations! The presidential suite was luxurious and the butler service was impeccable. The location is perfect for exploring Victoria Island.",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 6,
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "4 days ago",
      review:
        "The rooms are spacious and beautifully decorated. The housekeeping staff was very attentive and the concierge helped us plan amazing excursions around Lagos.",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 9,
    },
    {
      id: 6,
      name: "James Thompson",
      location: "Toronto, Canada",
      rating: 4,
      date: "1 month ago",
      review:
        "Great hotel with fantastic dining options. The Kuramo Restaurant has an incredible menu and the Sky Lounge offers amazing sunset views. Highly recommended!",
      avatar: "/placeholder.svg?height=40&width=40",
      helpful: 11,
    },
  ]

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Guest Reviews</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center mr-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${star <= averageRating ? "text-amber-500 fill-current" : "text-slate-300"}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-slate-800">{averageRating.toFixed(1)}</span>
            <span className="text-slate-600 ml-2">({reviews.length} reviews)</span>
          </div>
          <Button onClick={() => setShowReviewModal(true)} className="bg-amber-600 hover:bg-amber-700">
            Write a Review
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-3">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-800">{review.name}</h4>
                      <p className="text-sm text-slate-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating ? "text-amber-500 fill-current" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">{review.date}</p>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-amber-200" />
                  <p className="text-slate-700 pl-4">{review.review}</p>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-amber-600">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            View All Reviews
          </Button>
        </div>
      </div>

      <ReviewModal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} />
    </section>
  )
}
