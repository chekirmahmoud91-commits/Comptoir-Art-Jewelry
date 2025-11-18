"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialSectionDordogne() {
  const testimonials = [
    {
      name: "Marie D.",
      location: "Périgueux",
      rating: 5,
      text: "Service impeccable pour la vente de meubles anciens hérités de ma grand-mère. L'expert s'est déplacé à Périgueux, estimation précise et paiement immédiat. Je recommande vivement !",
    },
    {
      name: "Jean-Pierre L.",
      location: "Bergerac",
      rating: 5,
      text: "Très satisfait du rachat de ma collection de vins anciens à Bergerac. Expertise professionnelle et prix justes. Un vrai expert passionné !",
    },
    {
      name: "Sophie M.",
      location: "Sarlat",
      rating: 5,
      text: "Excellent service pour l'estimation de tableaux anciens à Sarlat. Rapide, professionnel et de bon conseil. Transaction en toute confiance.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
          Témoignages de Nos Clients en Dordogne
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez les avis de nos clients satisfaits à Périgueux, Bergerac, Sarlat et dans toute la Dordogne
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-[#C4A053]/20 hover:border-[#C4A053] transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#C4A053] text-[#C4A053]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#1a1f5c]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
