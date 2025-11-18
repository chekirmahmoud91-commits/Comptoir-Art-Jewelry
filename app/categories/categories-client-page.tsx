"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Palette, Gem, Watch, Music, Wine, Camera, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { trackAction } from "@/lib/analytics"

const categories = [
  {
    title: "Décoration & Arts",
    icon: Palette,
    image: "/louis-xv-commode.jpg",
    description:
      "Nous achetons tous types de meubles anciens, tableaux de maîtres, sculptures et objets d'art décoratif. Notre expertise couvre les styles Louis XV, Louis XVI, Empire, Art Nouveau et Art Déco.",
    items: [
      "Meubles anciens (commodes, armoires, bureaux, tables)",
      "Tableaux et peintures anciennes",
      "Sculptures en bronze, marbre ou bois",
      "Tapis d'Orient et tapisseries",
      "Art asiatique (laques, porcelaines, bronzes)",
      "Miroirs et cadres anciens",
    ],
  },
  {
    title: "Objets précieux & Luxe",
    icon: Gem,
    image: "/antique-silverware.jpg",
    description:
      "Spécialistes en argenterie, porcelaine fine et objets de luxe. Nous estimons et rachetons vos pièces en argent massif, services de table, cristallerie et maroquinerie de prestige.",
    items: [
      "Argenterie (couverts, plats, théières, candélabres)",
      "Porcelaine de Sèvres, Limoges, Meissen",
      "Maroquinerie de luxe (Hermès, Louis Vuitton)",
      "Fourrures de qualité",
      "Cristallerie (Baccarat, Saint-Louis, Daum)",
      "Objets en ivoire et écaille",
    ],
  },
  {
    title: "Bijoux & Montres",
    icon: Watch,
    image: "/antique-jewelry.jpg",
    description:
      "Expert en bijouterie ancienne et horlogerie de collection. Nous rachetons vos bijoux en or, argent, pierres précieuses ainsi que les montres de grandes marques horlogères.",
    items: [
      "Bijoux anciens en or et argent",
      "Bijoux sertis de diamants, rubis, émeraudes",
      "Bijoux fantaisie de créateurs",
      "Montres de luxe (Rolex, Cartier, Patek Philippe)",
      "Montres à gousset anciennes",
      "Horlogerie et pendules d'époque",
    ],
  },
  {
    title: "Loisirs & Collections",
    icon: Music,
    image: "/vintage-musical-instruments.jpg",
    description:
      "Passionnés par les objets de collection, nous achetons instruments de musique anciens, jouets vintage, livres rares, timbres et pièces de monnaie de valeur.",
    items: [
      "Instruments de musique (violons, guitares, pianos)",
      "Jouets anciens et automates",
      "Livres rares et éditions originales",
      "Bandes dessinées de collection",
      "Timbres et cartes postales anciennes",
      "Pièces de monnaie et médailles",
    ],
  },
  {
    title: "Gastronomie & Vins",
    icon: Wine,
    image: "/vintage-wine-bottles.jpg",
    description:
      "Experts en vins et spiritueux de prestige. Nous rachetons vos grands crus, champagnes millésimés, cognacs anciens et bouteilles rares de toutes régions viticoles.",
    items: [
      "Grands crus de Bordeaux et Bourgogne",
      "Champagnes millésimés",
      "Cognacs et Armagnacs anciens",
      "Whiskies de collection",
      "Spiritueux rares et liqueurs",
      "Caves complètes",
    ],
  },
  {
    title: "Photographie & Cinéma",
    icon: Camera,
    image: "/vintage-cameras.jpg",
    description:
      "Collectionneurs d'appareils photographiques et cinématographiques anciens. Nous achetons caméras vintage, projecteurs, accessoires et matériel photographique de collection.",
    items: [
      "Appareils photo anciens (Leica, Rolleiflex, Hasselblad)",
      "Caméras cinéma vintage",
      "Projecteurs et visionneuses",
      "Objectifs et accessoires photographiques",
      "Plaques photographiques et daguerréotypes",
      "Matériel de laboratoire photo",
    ],
  },
]

export default function CategoriesClientPage() {
  const handleCallClick = () => {
    trackAction("click_call")
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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
            <div className="text-[#C4A053] text-4xl mb-4">❦</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
              Nos Catégories d'Antiquités
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Découvrez l&#39;ensemble des objets d&#39;art et antiquités que nous achetons en Nouvelle-Aquitaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto"></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Toutes nos catégories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nous intervenons dans toute la Nouvelle-Aquitaine pour estimer et racheter vos objets d'art, antiquités et
              objets de collection. Estimation gratuite et déplacement à domicile.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-[#C4A053]/20">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.title} - Rachat et estimation d'antiquités en Nouvelle-Aquitaine par expert certifié`}
                        className="w-full h-[350px] md:h-[450px] object-cover object-center"
                      />
                      {/* </CHANGE> */}
                      <div className="absolute top-4 right-4 text-[#C4A053] opacity-30">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                          <path d="M20 7 L23 17 L33 20 L23 23 L20 33 L17 23 L7 20 L17 17 Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-[#C4A053]" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{category.description}</p>

                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#C4A053]">
                      <h4 className="text-lg font-semibold text-[#1a1f5c] mb-4">Nous achetons :</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <span className="text-[#C4A053] mt-1 text-xl">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
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
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Nous contacter
                </Button>
              </Link>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:0625637658" onClick={handleCallClick} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>06 25 63 76 58</span>
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
