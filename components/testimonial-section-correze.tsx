"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    location: "Tulle",
    rating: 5,
    text: "Service impeccable ! L'expert s'est déplacé à mon domicile à Tulle pour estimer les meubles anciens de ma grand-mère. Estimation juste et paiement immédiat. Je recommande vivement !",
    date: "Il y a 2 semaines",
  },
  {
    name: "Jean-Pierre M.",
    location: "Brive-la-Gaillarde",
    rating: 5,
    text: "Très professionnel et à l'écoute. J'ai fait appel à leurs services pour une succession à Brive. L'expertise a été rapide et le prix proposé très correct. Merci pour votre accompagnement.",
    date: "Il y a 1 mois",
  },
  {
    name: "Sophie L.",
    location: "Ussel",
    rating: 5,
    text: "Excellente expérience ! J'avais des bijoux anciens et de l'argenterie à faire estimer à Ussel. L'expert a pris le temps de tout examiner et m'a donné des explications détaillées. Transaction rapide et sérieuse.",
    date: "Il y a 3 semaines",
  },
]

export function TestimonialSectionCorreze() {
  return (
    <section className="py-5 md:py-5 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Témoignages de Nos Clients en Corrèze
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
            Découvrez les avis de nos clients satisfaits à Tulle, Brive-la-Gaillarde, Ussel et dans toute la Corrèze.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#C4A053]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C4A053] text-[#C4A053]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1a1f5c]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
