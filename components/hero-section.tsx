"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

interface HeroSectionProps {
  onEstimationClick: () => void
}

export function HeroSection({ onEstimationClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-antique-objects-collection-vintage-backgro.jpg"
          alt="Collection élégante d'objets d'art et antiquités - Rachat et estimation en Nouvelle-Aquitaine"
          className="w-full h-full object-cover opacity-50"
        />
        {/* </CHANGE> */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/70 mx-0"></div>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#C4A053" strokeWidth="2" />
            <path d="M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z" fill="#C4A053" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-10" style={{ animationDelay: "2s" }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="30" height="30" stroke="#C4A053" strokeWidth="2" transform="rotate(45 25 25)" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float opacity-10" style={{ animationDelay: "4s" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#C4A053" strokeWidth="2" />
            <circle cx="20" cy="20" r="12" stroke="#C4A053" strokeWidth="1" />
            <circle cx="20" cy="20" r="6" fill="#C4A053" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:py-20 py-9 relative z-10">
        <div className="grid md:grid-cols-2 items-center md:pl-8 gap-10">
          <div className="space-y-6 order-1">
            <h1 className="font-bold text-[#1a1f5c] leading-tight md:text-3xl font-[family-name:var(--font-crimson-pro)] font-sans text-lg">
              Vous souhaitez vendre vos objets d'art en <span className="text-[#C4A053]">Nouvelle-Aquitaine</span> ?
              <br />
              <span className="block mt-2">
                Comptoir Art &amp; Jewelry rachète vos antiquités au{" "}
                <span className="text-[#C4A053] font-extrabold">meilleur prix</span> !
              </span>
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Vos objets anciens ont de la valeur.
              <br />
              <span className="font-semibold text-[#1a1f5c]">
                Comptoir Art &amp; Jewelry vous propose une estimation gratuite et un rachat immédiat.
              </span>
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700">Estimation gratuite en moins de 24h ! </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700">
                  Rachat au <span className="font-semibold">meilleur prix</span>, paiement immédiat !
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700">Déplacement gratuit en Nouvelle-Aquitaine ! </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700">Accompagnement dans les successions ! </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 border-foreground border-0" />
                ))}
              </div>
              <span className="font-semibold">+ de 1 500 clients satisfaits</span>
            </div>

            <Button
              onClick={onEstimationClick}
              className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full px-8 py-6 text-base mx-auto block flex items-center justify-center"
            >
              Faire estimer mes objets →
            </Button>

            <p className="text-xs text-center text-foreground">
              Spécialiste en <span className="text-[#c4a053] font-semibold">objets d'art et antiquités</span>
            </p>
          </div>

          <div className="relative order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/images/design-mode/dd07c8f1-header-min_10ua0tu000000000000028-removebg-preview.png"
                alt="Objets d'antiquité de valeur : montre ancienne, portrait vintage, vase chinois et appareil photo collection - Expert rachat Nouvelle-Aquitaine"
                className="w-full h-full object-contain"
              />
              {/* </CHANGE> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
