"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertSection } from "@/components/expert-section"
import { TestimonialSectionCreuse } from "@/components/testimonial-section-creuse"
import { RecentPurchasesSection } from "@/components/recent-purchases-section"
import { WantedItemsSection } from "@/components/wanted-items-section"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Check, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { trackCall } from "@/lib/analytics"

export default function CreuseClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Rachat d'Antiquités en Creuse (23)"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  const handleCallClick = () => {
    trackCall()
    window.location.href = "tel:0625637658"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header onEstimationClick={() => setIsModalOpen(true)} />
      <main className="mx-0">
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white overflow-hidden py-3 md:py-12">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/creuse-landscape-hero-background.jpg"
              alt="Paysage de la Creuse"
              className="w-full h-full object-cover"
            />
          </div>
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
              <h1 className="lg:text-6xl font-bold font-[family-name:var(--font-crimson-pro)] md:text-4xl text-3xl min-h-[1.2em] mb-3.5 mt-3.5">
                {displayedText}
                <span className="inline-block w-0.5 h-[0.9em] bg-[#C4A053] ml-1 animate-pulse align-middle"></span>
              </h1>
              <p className="md:text-2xl text-gray-200 mb-8 text-justify text-base">
                Expert agréé en objets d'art et antiquités à Guéret, Aubusson et La Souterraine. Estimation gratuite et
                déplacement offert dans tout le département de la Creuse.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">Estimation gratuite en moins de 24h !</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">
                    Rachat au <span className="font-semibold">meilleur prix</span>, paiement immédiat !
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">Déplacement gratuit en Creuse (23) !</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm">Accompagnement dans les successions !</p>
                </div>
              </div>
              <div className="flex justify-center md:hidden"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleCallClick}
                  className="bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[280px] border-2 border-background"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  06 25 63 76 58
                </Button>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm w-full sm:w-[280px]"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Demander une estimation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CategoriesSection departmentName="la Creuse" />
        <AboutSection onEstimationClick={() => setIsModalOpen(true)} departmentName="la Creuse" />
        <WhyChooseUsSection departmentName="la Creuse" />
        <ProcessSection onEstimationClick={() => setIsModalOpen(true)} departmentName="la Creuse" />

        <section className="bg-gradient-to-b from-gray-50 to-white py-5 md:py-5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Nos Zones d'Intervention en Creuse
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
                Nous intervenons dans toutes les villes et communes du département de la Creuse pour estimer et racheter
                vos objets d'art et antiquités.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Guéret",
                  description: "Préfecture de la Creuse",
                  details: "Centre historique, quartiers anciens",
                },
                {
                  name: "Aubusson",
                  description: "Sous-préfecture",
                  details: "Cité de la tapisserie, patrimoine UNESCO",
                },
                {
                  name: "La Souterraine",
                  description: "Sous-préfecture",
                  details: "Ville médiévale, collections",
                },
                {
                  name: "Boussac",
                  description: "Commune du nord",
                  details: "Château historique, propriétés",
                },
                {
                  name: "Évaux-les-Bains",
                  description: "Station thermale",
                  details: "Zones résidentielles, antiquités",
                },
                {
                  name: "Bourganeuf",
                  description: "Ville du nord-ouest",
                  details: "Patrimoine local, maisons anciennes",
                },
                {
                  name: "Felletin",
                  description: "Commune de la tapisserie",
                  details: "Architecture traditionnelle, collections",
                },
                {
                  name: "Dun-le-Palestel",
                  description: "Ville du sud",
                  details: "Quartiers historiques, patrimoine",
                },
                {
                  name: "Bonnat",
                  description: "Commune du sud",
                  details: "Maisons de caractère, antiquités",
                },
                {
                  name: "Ahun",
                  description: "Commune proche de Guéret",
                  details: "Propriétés, patrimoine local",
                },
                {
                  name: "Chambon-sur-Voueize",
                  description: "Ville du nord",
                  details: "Centre ancien, collections",
                },
                {
                  name: "Jarnages",
                  description: "Commune de la vallée",
                  details: "Patrimoine rural, antiquités",
                },
              ].map((city, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border-2 border-[#C4A053] shadow-xl md:border-gray-100 md:shadow-none md:hover:border-[#C4A053] md:hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-[#C4A053]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a1f5c] group-hover:text-[#C4A053] transition-colors mb-0">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-[#1a1f5c]/5 via-[#C4A053]/5 to-[#1a1f5c]/5 rounded-xl p-8 border-2 border-[#C4A053]/20 pb-2.5">
              <h3 className="text-2xl font-bold text-[#1a1f5c] mb-4">Et toutes les autres communes de la Creuse !</h3>
              <p className="text-gray-700 text-lg mb-6 text-justify">
                Nous nous déplaçons gratuitement dans l'ensemble du département de la Creuse (23) pour estimer vos
                antiquités, objets d'art, meubles anciens et collections.
              </p>
            </div>
          </div>
        </section>

        <ExpertSection onEstimationClick={() => setIsModalOpen(true)} departmentName="la Creuse" />
        <TestimonialSectionCreuse />
        <RecentPurchasesSection />
        <WantedItemsSection />
        <FaqSection />
      </main>
      <Footer />
      <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
