"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialSectionLandes() {
  const testimonials = [
    {
      name: "Philippe R.",
      location: "Mont-de-Marsan",
      rating: 5,
      text: "Excellent service pour le rachat de meubles anciens à Mont-de-Marsan. Expert très professionnel, estimation juste et paiement rapide. Je recommande !",
    },
    {
      name: "Catherine B.",
      location: "Dax",
      rating: 5,
      text: "Très satisfaite de l'estimation de mes bijoux anciens à Dax. Service rapide, courtois et transparent. Prix proposé très correct.",
    },
    {
      name: "Laurent M.",
      location: "Biscarrosse",
      rating: 5,
      text: "Service impeccable pour la vente d'une collection de tableaux à Biscarrosse. Expert passionné et de bon conseil. Transaction en toute confiance.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
          Témoignages de Nos Clients dans les Landes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez les avis de nos clients satisfaits à Mont-de-Marsan, Dax, Biscarrosse et dans toutes les Landes
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
                <p className="text-gray-700 mb-4 italic leading-relaxed text-justify">"{testimonial.text}"</p>
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
