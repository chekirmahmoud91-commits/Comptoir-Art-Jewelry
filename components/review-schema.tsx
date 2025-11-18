"use client"

interface Review {
  author: string
  rating: number
  text: string
  date: string
}

interface ReviewSchemaProps {
  reviews: Review[]
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: "5",
    worstRating: "1",
  }

  const reviewSchemas = reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.text,
  }))

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comptoir Art & Jewelry",
    aggregateRating: aggregateRating,
    review: reviewSchemas,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
