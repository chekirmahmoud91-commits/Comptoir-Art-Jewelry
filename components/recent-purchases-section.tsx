"use client"

import { useState } from "react"
import { MapPin, Euro, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Purchase {
  id: number
  title: string
  description: string
  location: string
  price: string
  image: string
  category: string
}

const recentPurchases: Purchase[] = [
  {
    id: 1,
    title: "Commode Louis XV",
    description:
      "Exceptionnelle commode d'époque Louis XV en bois de rose avec marqueterie, ornements en bronze doré et dessus en marbre",
    location: "Bordeaux, Gironde",
    price: "4 800",
    image: "/recent-purchase-1.jpg",
    category: "Mobilier",
  },
  {
    id: 2,
    title: "Paysage Champêtre",
    description:
      "Charmante huile sur toile représentant une maison de campagne avec chemin, école française XIXe siècle",
    location: "Périgueux, Dordogne",
    price: "1 650",
    image: "/recent-purchase-2.jpg",
    category: "Peinture",
  },
  {
    id: 3,
    title: "Service à Thé en Argent",
    description:
      "Magnifique service complet en argent massif poinçonné, comprenant théière, cafetière, sucrier et crémier sur plateau",
    location: "La Rochelle, Charente-Maritime",
    price: "3 200",
    image: "/recent-purchase-3.jpg",
    category: "Argenterie",
  },
  {
    id: 4,
    title: "Garniture de Cheminée Empire",
    description:
      "Pendule et paire de cassolettes en marbre jaune de Sienne et bronze patiné, époque Empire avec figure féminine",
    location: "Poitiers, Vienne",
    price: "2 900",
    image: "/recent-purchase-4.jpg",
    category: "Horlogerie",
  },
  {
    id: 5,
    title: "Vase de Sèvres",
    description:
      "Grand vase couvert en porcelaine de Sèvres à décor de scènes galantes, riche monture en bronze doré avec anses figurant des putti",
    location: "Limoges, Haute-Vienne",
    price: "5 400",
    image: "/recent-purchase-5.jpg",
    category: "Porcelaine",
  },
  {
    id: 6,
    title: "Parure en Or et Saphir",
    description:
      "Exceptionnelle parure de bijoux anciens en or jaune ornée de perles fines et saphir, travail d'orfèvre du XIXe siècle",
    location: "Biarritz, Pyrénées-Atlantiques",
    price: "6 800",
    image: "/recent-purchase-6.jpg",
    category: "Bijoux",
  },
]

export function RecentPurchasesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden md:py-5 py-5">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="purchases-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#C4A053" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#purchases-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#C4A053] text-sm font-semibold tracking-wider uppercase">Nos Derniers Achats</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
            Objets d'Art Récemment Acquis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez une sélection de nos acquisitions récentes en Nouvelle-Aquitaine.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentPurchases.map((purchase) => (
            <div
              key={purchase.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#C4A053]/20"
              onMouseEnter={() => setHoveredId(purchase.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                <Image
                  src={purchase.image || "/placeholder.svg"}
                  alt={`${purchase.title} - ${purchase.category} acheté à ${purchase.location} pour ${purchase.price}€`}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredId === purchase.id ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#1a1f5c] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {purchase.category}
                </div>
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/90 via-[#1a1f5c]/50 to-transparent transition-opacity duration-500 ${
                    hoveredId === purchase.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 font-[family-name:var(--font-crimson-pro)]">
                  {purchase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{purchase.description}</p>

                {/* Location and Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4 text-[#C4A053]" />
                    <span className="text-sm">{purchase.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#C4A053] font-bold">
                    <Euro className="w-5 h-5" />
                    <span className="text-base">{purchase.price}</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-[#C4A053]/10 border-l-[60px] border-l-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">Vous possédez des objets d'art similaires ?</p>
          <p className="text-[#1a1f5c] font-semibold text-xl mb-6">Nous sommes intéressés par vos antiquités !</p>
          <div className="inline-block p-[3px] bg-gradient-to-r from-[#1a1f5c]/40 via-[#C4A053]/40 to-[#1a1f5c]/40 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Button
              size="lg"
              asChild
              className="bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 rounded-lg"
            >
              <a href="tel:0625637658">
                <Phone className="w-5 h-5 mr-2" />
                Nous Contacter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
