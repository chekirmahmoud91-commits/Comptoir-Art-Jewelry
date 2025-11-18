"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "La qualité de l'accueil et de l'accompagnement de l'équipe de Comptoir Art & Jewelry a été exceptionnelle. Ils ont su estimer et racheter nos objets anciens avec tact et respect. Mille mercis pour votre disponibilité, votre bienveillance et votre professionnalisme sans faille !",
    name: "Jean-Pierre M.",
    location: "Angoulême",
  },
  {
    text: "Nous avons confié plusieurs pièces de famille à Comptoir Art Jewelry et nous sommes ravis de leur sérieux. Tout s'est fait en transparence et avec beaucoup d'attention. \nMerci à toute l'équipe pour votre aide précieuse et votre grande expertise en antiquités !",
    name: "Marie L.",
    location: "Cognac",
  },
  {
    text: "L'équipe de Comptoir Art Jewelry a su nous écouter et nous conseiller avec une rare délicatesse. La vente de nos objets d'art s'est déroulée simplement et dans la confiance. Mille mercis pour votre accompagnement humain et votre professionnalisme exemplaire !",
    name: "Sophie D.",
    location: "La Rochefoucauld",
  },
  {
    text: "J'ai vendu plusieurs meubles anciens et de l'argenterie familiale. Le processus était simple et rapide. L'expert a pris le temps de m'expliquer la valeur de chaque pièce. \nPrix équitable et service impeccable. Je referai appel à eux sans hésiter !",
    name: "Philippe R.",
    location: "Confolens",
  },
  {
    text: "Excellente expérience du début à la fin. L'équipe est très professionnelle et à l'écoute. Ils ont racheté ma collection de bijoux anciens à un prix très correct. Le déplacement était gratuit et le paiement immédiat. Je recommande à 100% !",
    name: "Catherine B.",
    location: "Soyaux",
  },
]

export function TestimonialSectionCharente() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-5 md:py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">Ils nous font confiance en Charente ! </h2>
          <p className="text-gray-600">Découvrez les témoignages de nos clients satisfaits dans le département.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl shadow-xl p-8 md:p-12 h-[490px] md:h-[450px] bg-gray-100 border-2 border-[#C4A053]/20 overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z' fill='%23C4A053' /%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-8 h-[220px] md:h-[180px] flex items-start justify-center text-justify">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="h-[80px] flex items-center justify-between gap-4 flex-wrap mt-1">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="font-bold text-[#1a1f5c] text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-center gap-4 mt-auto pt-6">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-[#1a1f5c] w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-[#1a1f5c] hover:text-white transition-all duration-300 bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
