"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    location: "Agen",
    rating: 5,
    text: "Service impeccable ! L'expert s'est déplacé à mon domicile à Agen pour estimer une collection de meubles anciens. Très professionnel et prix juste.",
    date: "Il y a 2 semaines",
  },
  {
    name: "Philippe M.",
    location: "Villeneuve-sur-Lot",
    rating: 5,
    text: "Excellent contact et grande expertise. J'ai vendu plusieurs tableaux de famille à Villeneuve-sur-Lot. Transaction rapide et sécurisée.",
    date: "Il y a 1 mois",
  },
  {
    name: "Isabelle R.",
    location: "Marmande",
    rating: 5,
    text: "Je recommande vivement ! Estimation gratuite et déplacement offert à Marmande. L'expert a pris le temps d'expliquer la valeur de chaque pièce.",
    date: "Il y a 3 semaines",
  },
]

export function TestimonialSectionLotEtGaronne() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Témoignages de Nos Clients en Lot-et-Garonne
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
            Découvrez les avis de nos clients satisfaits dans le département du Lot-et-Garonne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-[#C4A053] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#C4A053] mb-4 opacity-50" />
                <p className="text-gray-700 mb-4 italic text-justify">&quot;{testimonial.text}&quot;</p>
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
