"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { TrustBar } from "@/components/trust-bar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { InterventionZoneSection } from "@/components/intervention-zone-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertSection } from "@/components/expert-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { RecentPurchasesSection } from "@/components/recent-purchases-section"
import { WantedItemsSection } from "@/components/wanted-items-section"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header onEstimationClick={() => setIsModalOpen(true)} />
      <main className="mx-0">
        <HeroSection onEstimationClick={() => setIsModalOpen(true)} />
        <CategoriesSection />
        <AboutSection onEstimationClick={() => setIsModalOpen(true)} />
        <WhyChooseUsSection />
        <ProcessSection onEstimationClick={() => setIsModalOpen(true)} />
        <InterventionZoneSection />
        <ExpertSection onEstimationClick={() => setIsModalOpen(true)} />
        <TestimonialSection />
        <RecentPurchasesSection />
        <WantedItemsSection />
        <FaqSection />
      </main>
      <TrustBar />
      <Footer />
      <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
