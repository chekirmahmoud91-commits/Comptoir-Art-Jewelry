"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    location: "Guéret",
    rating: 5,
    text: "Service impeccable ! L'expert s'est déplacé rapidement à Guéret pour estimer les meubles anciens de ma grand-mère. Estimation juste et paiement immédiat. Je recommande vivement.",
  },
  {
    name: "Philippe M.",
    location: "Aubusson",
    rating: 5,
    text: "Très professionnel. J'avais des tapisseries anciennes à faire estimer à Aubusson. L'expertise était précise et le prix proposé très correct. Merci pour votre sérieux.",
  },
  {
    name: "Sylvie L.",
    location: "La Souterraine",
    rating: 5,
    text: "Excellent contact et grande disponibilité. Déplacement gratuit à La Souterraine pour estimer une collection de porcelaines. Transaction rapide et sans souci.",
  },
]

export function TestimonialSectionCreuse() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Avis de Nos Clients en Creuse
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits dans la Creuse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#C4A053]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic text-justify">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1a1f5c]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
