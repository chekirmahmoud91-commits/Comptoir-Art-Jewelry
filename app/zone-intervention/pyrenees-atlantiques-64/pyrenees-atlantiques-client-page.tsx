"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertSection } from "@/components/expert-section"
import TestimonialSectionPyreneesAtlantiques from "@/components/testimonial-section-pyrenees-atlantiques"
import { RecentPurchasesSection } from "@/components/recent-purchases-section"
import { WantedItemsSection } from "@/components/wanted-items-section"
import { FaqSection } from "@/components/faq-section"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { trackCall } from "@/lib/analytics"

export default function PyreneeAtlantiquesClientPage() {
  const [displayedText, setDisplayedText] = useState("")
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false)
  const fullText = "Rachat d'Antiquités dans les Pyrénées-Atlantiques (64)"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleCallClick = () => {
    trackCall()
    window.location.href = "tel:0625637658"
  }

  const cities = [
    {
      name: "Pau",
      description: "Préfecture - Service d'estimation à domicile",
    },
    {
      name: "Bayonne",
      description: "Sous-préfecture - Expert en objets basques",
    },
    {
      name: "Biarritz",
      description: "Station balnéaire - Rachat d'antiquités de prestige",
    },
    {
      name: "Anglet",
      description: "Estimation gratuite d'objets d'art",
    },
    {
      name: "Hendaye",
      description: "Expertise en mobilier ancien",
    },
    {
      name: "Saint-Jean-de-Luz",
      description: "Rachat de collections privées",
    },
    {
      name: "Oloron-Sainte-Marie",
      description: "Sous-préfecture - Service personnalisé",
    },
    {
      name: "Orthez",
      description: "Expert en argenterie et porcelaine",
    },
    {
      name: "Mourenx",
      description: "Estimation d'objets d'art",
    },
    {
      name: "Billère",
      description: "Rachat de bijoux anciens",
    },
    {
      name: "Lons",
      description: "Service de déplacement gratuit",
    },
    {
      name: "Lescar",
      description: "Expert en tableaux et sculptures",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/pyrenees-atlantiques-pau-hero-background.jpg"
              alt="Pyrénées-Atlantiques - Pau et les Pyrénées"
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
              <h1 className="lg:text-6xl font-bold font-[family-name:var(--font-crimson-pro)] md:text-4xl text-3xl min-h-[1.2em] mt-3.5 mb-3.5">
                {displayedText}
                <span className="inline-block w-0.5 h-[0.9em] bg-[#C4A053] ml-1 animate-pulse align-middle"></span>
              </h1>

              <p className="md:text-2xl mb-8 text-gray-200 leading-relaxed text-lg text-justify">
                Estimation gratuite et rachat immédiat de vos objets d&apos;art, meubles anciens et collections dans les
                Pyrénées-Atlantiques. Service professionnel à Pau, Bayonne, Biarritz et dans tout le département.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">Estimation gratuite à domicile</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">Paiement immédiat</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm md:text-sm">Expert certifié</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C4A053] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200 text-left text-sm">Service confidentiel</p>
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
                  size="lg"
                  variant="outline"
                  onClick={() => setIsEstimationModalOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm w-full sm:w-[280px]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Demander une estimation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CategoriesSection departmentName="les Pyrénées-Atlantiques" />
        <AboutSection
          departmentName="les Pyrénées-Atlantiques"
          onEstimationClick={() => setIsEstimationModalOpen(true)}
        />
        <WhyChooseUsSection departmentName="les Pyrénées-Atlantiques" />
        <ProcessSection
          departmentName="les Pyrénées-Atlantiques"
          onEstimationClick={() => setIsEstimationModalOpen(true)}
        />

        {/* Zone d'intervention - Villes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Nos Villes d&apos;Intervention dans les Pyrénées-Atlantiques
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nous intervenons dans tout le département des Pyrénées-Atlantiques pour l&apos;estimation et le rachat de
              vos antiquités, objets d&apos;art et collections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#C4A053]"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#C4A053] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-[#1a1f5c] mb-2">{city.name}</h3>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExpertSection
          departmentName="les Pyrénées-Atlantiques"
          onEstimationClick={() => setIsEstimationModalOpen(true)}
        />
        <TestimonialSectionPyreneesAtlantiques />
        <RecentPurchasesSection />
        <WantedItemsSection />
        <FaqSection />
      </main>
      <Footer />
      <EstimationFormModal isOpen={isEstimationModalOpen} onClose={() => setIsEstimationModalOpen(false)} />
    </>
  )
}
