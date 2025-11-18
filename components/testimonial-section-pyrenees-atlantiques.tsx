"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSectionPyreneesAtlantiques() {
  const testimonials = [
    {
      name: "Marie D.",
      location: "Pau",
      rating: 5,
      text: "Service impeccable pour l'estimation de mes meubles anciens. L'expert s'est déplacé à mon domicile à Pau et m'a proposé un prix très juste. Transaction rapide et professionnelle.",
      date: "Il y a 2 semaines",
    },
    {
      name: "Jean-Pierre L.",
      location: "Bayonne",
      rating: 5,
      text: "Très satisfait du rachat de ma collection de tableaux basques. L'expertise était précise et le paiement immédiat. Je recommande vivement ce professionnel à Bayonne.",
      date: "Il y a 1 mois",
    },
    {
      name: "Sophie M.",
      location: "Biarritz",
      rating: 5,
      text: "Excellent service pour la vente de bijoux anciens hérités de ma grand-mère. L'expert a pris le temps d'expliquer l'estimation et le prix proposé était très correct. Merci pour votre professionnalisme à Biarritz.",
      date: "Il y a 3 semaines",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
          Témoignages de Nos Clients dans les Pyrénées-Atlantiques
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez les avis de nos clients satisfaits à Pau, Bayonne, Biarritz et dans tout le département des
          Pyrénées-Atlantiques
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed text-justify">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#1a1f5c]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
