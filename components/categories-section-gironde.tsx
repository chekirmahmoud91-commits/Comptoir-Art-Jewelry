"use client"

import { Card } from "@/components/ui/card"
import { Palette, Gem, Watch, Music, Wine, Camera } from "lucide-react"
import { useEffect, useState } from "react"

const categories = [
  {
    title: "Décoration & Arts",
    icon: Palette,
    items: [
      { name: "Meubles anciens", image: "/antique-furniture.jpg" },
      { name: "Tableaux", image: "/antique-paintings.jpg" },
      { name: "Sculptures", image: "/antique-sculptures.jpg" },
      { name: "Tapis & tapisseries", image: "/antique-carpets-tapestries.jpg" },
      { name: "Art asiatique", image: "/asian-art-antiques.jpg" },
    ],
  },
  {
    title: "Objets précieux & Luxe",
    icon: Gem,
    items: [
      { name: "Argenterie", image: "/antique-silverware.jpg" },
      { name: "Porcelaine", image: "/antique-porcelain.jpg" },
      { name: "Maroquinerie de luxe", image: "/luxury-leather-goods.jpg" },
      { name: "Fourrures", image: "/vintage-furs.jpg" },
      { name: "Cristallerie", image: "/crystal-glassware.jpg" },
    ],
  },
  {
    title: "Bijoux & Montres",
    icon: Watch,
    items: [
      { name: "Bijoux anciens", image: "/antique-jewelry.jpg" },
      { name: "Bijoux fantaisie", image: "/costume-jewelry.jpg" },
      { name: "Montres de collection", image: "/vintage-watches.jpg" },
      { name: "Montres à gousset", image: "/pocket-watches.jpg" },
      { name: "Horlogerie", image: "/antique-clocks.jpg" },
    ],
  },
  {
    title: "Loisirs & Collections",
    icon: Music,
    items: [
      { name: "Instruments de musique", image: "/vintage-musical-instruments.jpg" },
      { name: "Jouets anciens", image: "/antique-toys.jpg" },
      { name: "Livres rares & BD", image: "/rare-books-comics.jpg" },
      { name: "Timbres & cartes postales", image: "/stamps-postcards.jpg" },
      { name: "Pièces de monnaie", image: "/antique-coins.jpg" },
    ],
  },
  {
    title: "Gastronomie & Vins",
    icon: Wine,
    items: [
      { name: "Bouteilles de vin", image: "/vintage-wine-bottles.jpg" },
      { name: "Grands crus", image: "/grand-cru-wines.jpg" },
      { name: "Spiritueux rares", image: "/rare-spirits.jpg" },
      { name: "Champagnes millésimés", image: "/vintage-champagne.jpg" },
      { name: "Cognacs anciens", image: "/old-cognac.jpg" },
    ],
  },
  {
    title: "Photographie & Cinéma",
    icon: Camera,
    items: [
      { name: "Appareils photo anciens", image: "/vintage-cameras.jpg" },
      { name: "Caméras vintage", image: "/vintage-film-cameras.jpg" },
      { name: "Projecteurs", image: "/vintage-projectors.jpg" },
      { name: "Accessoires photo", image: "/vintage-photo-accessories.jpg" },
      { name: "Plaques photographiques", image: "/photographic-plates.jpg" },
    ],
  },
]

function CategoryCard({ category, index }: { category: (typeof categories)[0]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const IconComponent = category.icon

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % category.items.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [category.items.length])

  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up p-0 border-2 border-[#C4A053]/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden bg-gray-100 relative">
        {category.items.map((item, idx) => (
          <img
            key={idx}
            src={item.image || "/placeholder.svg"}
            alt={`${item.name} - Achat et estimation d'objets anciens en Gironde`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}
        <div className="absolute top-2 right-2 text-[#C4A053] opacity-30">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
            <path d="M15 5 L17 12 L24 15 L17 18 L15 25 L13 18 L6 15 L13 12 Z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <IconComponent className="w-7 h-7 text-[#c4a053]" />
          <h3 className="text-xl font-bold text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
            {category.title}
          </h3>
        </div>
        <ul className="space-y-2">
          {category.items.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-[#c4a053] mt-1">•</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export function CategoriesSectionGironde() {
  return (
    <section id="categories" className="bg-gradient-to-b from-white to-gray-50 py-5 relative overflow-hidden">
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
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-[#C4A053] text-3xl mb-2">❦</div>
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)] text-2xl">
            Nous achetons vos objets d'art et antiquités
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-justify">
            Spécialisés dans l'achat d'objets anciens, nous intervenons dans la Gironde pour estimer et racheter vos
            biens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
