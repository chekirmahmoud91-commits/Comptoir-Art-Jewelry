"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertSection } from "@/components/expert-section"
import { TestimonialSectionGironde } from "@/components/testimonial-section-gironde"
import { RecentPurchasesSection } from "@/components/recent-purchases-section"
import { WantedItemsSection } from "@/components/wanted-items-section"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Check, Phone, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackCall } from "@/lib/analytics"

export default function LibourneClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Rachat d'Antiquités à Libourne (33)"

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
          <div className="absolute inset-0">
            <img
              src="/libourne-place-abel-surchamp-hero-background.jpg"
              alt="Place Abel Surchamp à Libourne"
              className="w-full h-full object-cover opacity-20"
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
              <h1 className="lg:text-6xl font-bold font-[family-name:var(--font-crimson-pro)] md:text-4xl text-3xl min-h-[1.2em] mb-3">
                {displayedText}
                <span className="inline-block w-0.5 h-[0.9em] bg-[#C4A053] ml-1 animate-pulse align-middle"></span>
              </h1>
              <p className="md:text-2xl text-gray-200 mb-8 text-justify text-base">
                Expert agréé en objets d'art et antiquités à Libourne. Estimation gratuite et déplacement offert dans
                tous les quartiers de la cité médiévale du Libournais.
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
                  <p className="text-gray-200 text-left text-sm md:text-sm">
                    Déplacement gratuit à Libourne et ses environs !
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm">Accompagnement dans les successions !</p>
                </div>
              </div>
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

        <CategoriesSection departmentName="Libourne" />
        <AboutSection onEstimationClick={() => setIsModalOpen(true)} departmentName="Libourne" />
        <WhyChooseUsSection departmentName="Libourne" />
        <ProcessSection onEstimationClick={() => setIsModalOpen(true)} departmentName="Libourne" />

        <section className="bg-gradient-to-b from-gray-50 to-white py-5 md:py-5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Nos Zones d'Intervention à Libourne
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
                Nous intervenons dans tous les quartiers de Libourne pour estimer et racheter vos objets d'art,
                antiquités, meubles anciens et collections de valeur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Centre-Ville",
                  description: "Cœur historique de Libourne",
                  details: "Place Abel Surchamp, Rue Gambetta",
                },
                {
                  name: "Quartier de la Gare",
                  description: "Secteur de la gare SNCF",
                  details: "Zone commerciale et résidentielle",
                },
                {
                  name: "Quartier Saint-Jean",
                  description: "Zone résidentielle au nord",
                  details: "Maisons familiales, propriétés",
                },
                {
                  name: "Quartier Chanzy",
                  description: "Secteur résidentiel et commercial",
                  details: "Immeubles, commerces de proximité",
                },
                {
                  name: "Quartier Epinette",
                  description: "Zone pavillonnaire au sud",
                  details: "Villas, maisons individuelles",
                },
                {
                  name: "Quartier Ballastière",
                  description: "Secteur résidentiel à l'est",
                  details: "Quartier calme, propriétés familiales",
                },
                {
                  name: "Quartier Garderose",
                  description: "Zone d'activités et résidentielle",
                  details: "Mixte commercial et habitations",
                },
                {
                  name: "Quartier Condat",
                  description: "Secteur au bord de l'Isle",
                  details: "Proximité rivière, cadre verdoyant",
                },
              ].map((quartier, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border-2 border-gray-100 shadow-none hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-[#C4A053]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a1f5c] group-hover:text-[#C4A053] transition-colors mb-2">
                        {quartier.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{quartier.description}</p>
                      <p className="text-xs text-gray-500">{quartier.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-[#1a1f5c]/5 via-[#C4A053]/5 to-[#1a1f5c]/5 rounded-xl p-8 border-2 border-[#C4A053]/20 pb-2.5">
              <h3 className="text-2xl font-bold text-[#1a1f5c] mb-4">
                Et tous les autres quartiers de Libourne et ses environs !
              </h3>
              <p className="text-gray-700 text-lg mb-6 text-justify">
                Nous nous déplaçons gratuitement dans l'ensemble de Libourne et ses environs pour estimer vos
                antiquités, objets d'art, meubles anciens et collections.
              </p>
            </div>
          </div>
        </section>

        <ExpertSection onEstimationClick={() => setIsModalOpen(true)} departmentName="Libourne" />
        <TestimonialSectionGironde />
        <RecentPurchasesSection />
        <WantedItemsSection />
        <FaqSection />
      </main>
      <Footer />
      <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
