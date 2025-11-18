"use client"

import { Button } from "@/components/ui/button"

interface AboutSectionGirondeProps {
  onEstimationClick: () => void
}

export function AboutSectionGironde({ onEstimationClick }: AboutSectionGirondeProps) {
  return (
    <section id="about" className="bg-gray-50 py-5 md:py-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">Vos objets anciens ont de la valeur !</h2>
        <h3 className="md:text-3xl font-bold text-[#1a1f5c] mb-6 text-xl">
          Comptoir Art &amp; Jewelry rachète vos antiquités au meilleur prix.
        </h3>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-justify">
          Un vieux tableau, une commode, une montre, un instrument de musique... oubliés chez vous depuis des années ?
          Nous sommes spécialisés dans l'achat d'objets d'art et d'antiquités. Nous vous proposons une estimation
          gratuite et un rachat immédiat au meilleur prix. Déplacement gratuit dans tout le département de la Gironde.
        </p>

        <Button
          onClick={onEstimationClick}
          className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full px-8 py-6 text-base mb-4"
        >
          Recevoir une estimation →
        </Button>

        <p className="text-sm text-gray-500">
          Estimation gratuite en 24h par nos experts
          <br />
          Spécialistes en objets d'art et antiquités
        </p>
      </div>
    </section>
  )
}
