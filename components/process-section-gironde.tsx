"use client"

import { Button } from "@/components/ui/button"

interface ProcessSectionGirondeProps {
  onEstimationClick: () => void
}

export function ProcessSectionGironde({ onEstimationClick }: ProcessSectionGirondeProps) {
  const steps = [
    {
      number: 1,
      title: "Estimation gratuite en 24h",
      description:
        "Renseignez quelques informations sur votre objet, accompagné de photos et un expert de Comptoir Art & Jewelry vous contacte sous 24h avec une estimation.",
    },
    {
      number: 2,
      title: "Déplacement gratuit à votre domicile",
      description:
        "Si vous souhaitez vendre, nous venons examiner et récupérer l'objet chez vous, sans frais, dans tout le département de la Gironde.",
    },
    {
      number: 3,
      title: "Proposition de rachat immédiat",
      description:
        "Nous vous proposons un prix d'achat juste et transparent basé sur l'expertise de nos spécialistes et les prix du marché actuel.",
    },
    {
      number: 4,
      title: "Paiement immédiat et sécurisé",
      description:
        "Une fois l'accord conclu, nous procédons au paiement immédiat par virement bancaire ou espèces selon votre préférence. Transaction sécurisée et confidentielle.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-5 md:py-5">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Comment ça marche ?</p>
        <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-12 text-2xl">
          De l'estimation jusqu'au rachat de vos objets
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1a1f5c] text-white flex items-center justify-center font-bold text-lg bg-[rgba(196,160,83,1)]">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="w-1 h-20 bg-gray-400 mx-auto mt-2" />}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={onEstimationClick}
            className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full px-8 py-6 text-base"
          >
            Commencer mon estimation →
          </Button>
        </div>
      </div>
    </section>
  )
}
