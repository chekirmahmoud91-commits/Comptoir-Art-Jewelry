"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { trackAction } from "@/lib/analytics"

const categories = [
  {
    title: "Bijoux & Montres",
    description: "Bijoux anciens, montres de collection, pierres précieuses",
    image: "/pearl-necklace-on-pink-background.jpg",
    href: "/bijoux-montres",
  },
  {
    title: "Meubles Anciens",
    description: "Mobilier d'époque, commodes, armoires, sièges anciens",
    image: "/antique-wooden-furniture.jpg",
    href: "/meubles-anciens",
  },
  {
    title: "Tableaux & Sculptures",
    description: "Peintures anciennes, art moderne, sculptures, dessins",
    image: "/impressionist-painting-people-at-beach.jpg",
    href: "/tableaux-sculptures",
  },
  {
    title: "Argenterie & Porcelaine",
    description: "Couverts en argent, services de table, porcelaines de prestige",
    image: "/silver-cutlery-set.jpg",
    href: "/argenterie-porcelaine",
  },
  {
    title: "Objets d'Art Asiatique",
    description: "Porcelaines chinoises, bronzes, jades, laques japonaises",
    image: "/chinese-porcelain-vase.jpg",
    href: "/objets-art-asiatique",
  },
  {
    title: "Instruments de Musique",
    description: "Violons anciens, pianos, instruments à vent de collection",
    image: "/vintage-violin.jpg",
    href: "/instruments-musique",
  },
  {
    title: "Livres Anciens",
    description: "Éditions originales, manuscrits, livres rares et précieux",
    image: "/antique-books-rare-editions.jpg",
    href: "/livres-anciens",
  },
  {
    title: "Vins & Spiritueux",
    description: "Grands crus, whiskies rares, spiritueux de collection",
    image: "/wine-bottles-collection-vintage.jpg",
    href: "/vins-spiritueux",
  },
  {
    title: "Tapis & Tapisseries",
    description: "Tapis persans, tapisseries anciennes, textiles d'art précieux",
    image: "/persian-carpet-card.jpg",
    href: "/tapis-tapisseries",
  },
]

export default function CategoriesClientPage() {
  const handleCallClick = () => {
    trackAction("click_call")
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/professional-auctioneer-examining-antique-with-mag.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
                Nos Catégories d'Antiquités
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Découvrez toutes les catégories d&#39;objets d&#39;art et antiquités que nous achetons en
                Nouvelle-Aquitaine
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-crimson-pro)]">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                      <div className="mt-4 flex items-center text-[#C4A053] font-semibold group-hover:translate-x-2 transition-transform">
                        En savoir plus
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
                Vous possédez des objets de ces catégories ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Contactez-nous pour une estimation gratuite et sans engagement. Notre expert se déplace à votre domicile
                partout en Nouvelle-Aquitaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[250px] bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#C4A053]"
                >
                  <a href="tel:0625637658" onClick={handleCallClick} className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    06 25 63 76 58
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto sm:min-w-[250px] bg-white hover:bg-gray-50 text-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#1a1f5c] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
