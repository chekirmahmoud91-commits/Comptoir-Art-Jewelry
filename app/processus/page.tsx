"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Search, Calendar, FileCheck, Handshake, Banknote, CheckCircle } from "lucide-react"
import Link from "next/link"
import { trackAction } from "@/lib/analytics"

export default function ProcessusPage() {
  const handleCallClick = () => {
    trackAction("click_call")
  }

  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8" />,
      title: "Premier Contact",
      description:
        "Contactez-nous par téléphone, email ou via notre formulaire en ligne. Décrivez brièvement vos objets et envoyez quelques photos si possible.",
      details: ["Réponse rapide sous 24h", "Conseil gratuit et sans engagement", "Première évaluation indicative"],
    },
    {
      number: "02",
      icon: <Calendar className="w-8 h-8" />,
      title: "Prise de Rendez-vous",
      description:
        "Nous convenons ensemble d'un rendez-vous à votre domicile, à une date et heure qui vous conviennent. Notre expert se déplace gratuitement partout en Nouvelle-Aquitaine.",
      details: [
        "Déplacement gratuit à domicile",
        "Flexibilité des horaires",
        "Respect de votre vie privée et discrétion",
      ],
    },
    {
      number: "03",
      icon: <Search className="w-8 h-8" />,
      title: "Expertise sur Place",
      description:
        "Notre expert examine minutieusement vos objets : authenticité, état de conservation, provenance, et valeur marchande. Il répond à toutes vos questions.",
      details: [
        "Examen détaillé de chaque pièce",
        "Explications claires et pédagogiques",
        "Estimation précise et argumentée",
      ],
    },
    {
      number: "04",
      icon: <FileCheck className="w-8 h-8" />,
      title: "Proposition d'Achat",
      description:
        "Nous vous présentons une offre d'achat claire et détaillée, basée sur l'expertise réalisée. Vous êtes libre d'accepter ou de refuser, sans aucune obligation.",
      details: ["Offre écrite et transparente", "Prix justes et compétitifs", "Aucune pression commerciale"],
    },
    {
      number: "05",
      icon: <Handshake className="w-8 h-8" />,
      title: "Accord et Formalités",
      description:
        "Si vous acceptez notre offre, nous établissons ensemble les documents nécessaires : contrat de vente, certificat d'authenticité si applicable, et reçu.",
      details: ["Documents en règle et conformes", "Traçabilité complète", "Conseils sur les aspects administratifs"],
    },
    {
      number: "06",
      icon: <Banknote className="w-8 h-8" />,
      title: "Paiement Immédiat",
      description:
        "Nous procédons au paiement immédiat par le moyen de votre choix : espèces, chèque de banque ou virement bancaire. Vos objets sont emportés avec soin.",
      details: ["Paiement sécurisé et immédiat", "Plusieurs modes de paiement", "Enlèvement soigné des objets"],
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z' fill='%23C4A053' /%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#C4A053] text-5xl mb-6">⚜</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
              Notre Processus d'Achat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Un processus simple, transparent et professionnel en 6 étapes pour l&#39;achat de vos objets d&#39;art et
              antiquités.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Une Démarche Claire et Rassurante
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
              Chez Comptoir Art & Jewelry, nous avons à cœur de vous offrir une expérience d'achat simple, transparente
              et respectueuse. Notre processus a été conçu pour vous garantir une estimation juste, un service
              professionnel et un paiement immédiat, le tout dans le confort de votre domicile.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white p-6 rounded-lg">
                <CheckCircle className="w-12 h-12 text-[#C4A053] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Gratuit</h3>
                <p className="text-gray-200">Estimation et déplacement sans frais</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white p-6 rounded-lg">
                <CheckCircle className="w-12 h-12 text-[#C4A053] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapide</h3>
                <p className="text-gray-200">Paiement immédiat après accord</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white p-6 rounded-lg">
                <CheckCircle className="w-12 h-12 text-[#C4A053] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Transparent</h3>
                <p className="text-gray-200">Explications détaillées à chaque étape</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#C4A053] text-3xl mb-4">❦</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Les 6 Étapes de Notre Processus
              </h2>
              <p className="text-lg text-gray-600">Du premier contact au paiement final</p>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Number and Icon */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center shadow-xl">
                        <div className="text-[#C4A053]">{step.icon}</div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#C4A053] flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-2/3">
                    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#C4A053]">
                      <h3 className="text-2xl font-bold text-[#1a1f5c] mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-24 bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#C4A053] text-4xl mb-6">✦</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Faire Estimer Vos Objets ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contactez-nous dès aujourd'hui pour démarrer le processus. Notre expert se déplace gratuitement à votre
              domicile partout en Nouvelle-Aquitaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:0625637658" onClick={handleCallClick} className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  06 25 63 76 58
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
