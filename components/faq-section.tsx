"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Comment se déroule l'estimation de mes objets ?",
    answer:
      "Vous nous contactez par téléphone ou via le formulaire. Nous échangeons sur vos objets (photos, description). Nous vous proposons une estimation gratuite sous 24h. Si vous acceptez, nous convenons d'un rendez-vous pour finaliser la transaction.",
  },
  {
    question: "Quels types d'objets achetez-vous ?",
    answer:
      "Nous achetons une large gamme d'objets : bijoux, montres, argenterie, porcelaine, meubles anciens, tableaux, sculptures, tapis, objets d'art asiatique, instruments de musique, livres anciens, et bien d'autres antiquités de valeur.",
  },
  {
    question: "Comment fixez-vous vos prix d'achat ?",
    answer:
      "Nos prix sont basés sur l'état de l'objet, sa rareté, son authenticité, et les prix du marché actuel. Nous sommes transparents et vous expliquons notre évaluation en détail.",
  },
  {
    question: "Intervenez-vous pour les successions ?",
    answer:
      "Oui, nous accompagnons les familles dans les successions et débarras de maison. Nous pouvons estimer l'ensemble des biens et vous proposer un rachat global ou partiel selon vos besoins.",
  },
  {
    question: "Le déplacement est-il vraiment gratuit ?",
    answer:
      "Oui, nous nous déplaçons gratuitement dans toute la Nouvelle-Aquitaine pour estimer vos objets à votre domicile, sans aucun engagement de votre part.",
  },
  {
    question: "Comment suis-je payé ?",
    answer:
      "Le paiement est immédiat dès que nous trouvons un accord. Nous pouvons régler par virement bancaire, chèque ou espèces selon votre préférence et le montant de la transaction.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">Questions fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Vous avez des questions ? Nous avons les réponses ! </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-[#1a1f5c] text-base md:text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#c4a053] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
