"use client"

import { Star } from "lucide-react"

export default function TestimonialSectionVienne() {
  const testimonials = [
    {
      name: "Jean-Pierre M.",
      location: "Poitiers",
      rating: 5,
      text: "Service impeccable pour la succession de mon père à Poitiers. L'expert s'est déplacé rapidement et a estimé tous les meubles anciens avec professionnalisme. Paiement immédiat et excellent conseil.",
    },
    {
      name: "Catherine B.",
      location: "Châtellerault",
      rating: 5,
      text: "J'ai fait appel à leurs services pour vendre une collection de tableaux anciens à Châtellerault. Estimation précise et rachat au meilleur prix. Je recommande vivement !",
    },
    {
      name: "François D.",
      location: "Loudun",
      rating: 5,
      text: "Très satisfait du service pour le rachat de bijoux anciens à Loudun. Expert compétent, déplacement gratuit et transaction rapide. Merci pour votre professionnalisme !",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Témoignages de Nos Clients dans la Vienne
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits à Poitiers, Châtellerault, Loudun et dans toute la Vienne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#C4A053]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-justify">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#1a1f5c]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
