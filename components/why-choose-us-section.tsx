"use client"

import { Shield, Clock, Euro, Award, Users, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhyChooseUsSection({ departmentName = "la Nouvelle-Aquitaine" }: { departmentName?: string }) {
  const reasons = [
    {
      icon: Euro,
      title: "Paiement immédiat",
      description: "Règlement comptant dès l'accord trouvé, par virement ou espèces selon votre préférence.",
    },
    {
      icon: Shield,
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience et une équipe de spécialistes certifiés à votre service.",
    },
    {
      icon: Plane,
      title: "Déplacement gratuit",
      description: `Nous venons chez vous partout dans ${departmentName}, sans frais ni engagement.`,
    },
    {
      icon: Clock,
      title: "Estimation simple et rapide",
      description: "Réponse sous 24h avec une estimation précise basée sur le marché actuel.",
    },
    {
      icon: Award,
      title: "Meilleur prix garanti",
      description: "Nous vous proposons le prix le plus juste et transparent du marché.",
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Service direct et professionnel pour les successions et débarras de maison.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4"></div>
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">
            Pourquoi choisir Comptoir Art & Jewelry ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un service professionnel et transparent pour valoriser vos objets d&#39;art.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-white border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C4A053] flex items-center justify-center shadow-lg">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1f5c]">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
