"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-white md:py-5 py-5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
            Prêt à Faire Estimer Vos Antiquités ?
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-justify">
            Contactez-nous dès aujourd'hui pour un déplacement gratuit. Notre expert se rend à votre domicile pour une
            estimation professionnelle et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch py-5 pb-16">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Nous contacter
              </Button>
            </Link>
            <Link href="tel:0625637658" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-50 text-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 25 63 76 58
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
