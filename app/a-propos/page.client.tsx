"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Award, Heart, Shield, Clock, Search, Gem, Palette } from "lucide-react"
import Link from "next/link"
import { trackAction } from "@/lib/analytics"

export default function AboutPageClient() {
  const handleCallClick = () => {
    trackAction("click_call")
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
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
              <div className="text-[#C4A053] text-4xl mb-6">❦</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
                Votre Expert en Antiquités et Objets d&#39;Art !
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Une passion pour l&#39;art ancien, une expertise reconnue en Nouvelle-Aquitaine.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center text-justify">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
                    Notre Histoire
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Depuis plus de <strong>15 ans</strong>, nous mettons notre expertise au service des amateurs d'art
                      et des collectionneurs en Nouvelle-Aquitaine. Notre passion pour les <strong>antiquités</strong>,
                      les <strong>objets d'art</strong> et les <strong>bijoux anciens</strong> nous guide dans chaque
                      estimation et chaque acquisition.
                    </p>
                    <p>
                      Spécialisés dans l'<strong>estimation d'antiquités</strong>, le{" "}
                      <strong>rachat d'objets d'art</strong> et l'expertise de <strong>tableaux anciens</strong>, nous
                      accompagnons particuliers et professionnels dans la valorisation de leur patrimoine artistique.
                    </p>
                    <p>
                      Notre connaissance approfondie du marché de l'art, combinée à notre réseau de collectionneurs et
                      de maisons de ventes, nous permet de proposer des <strong>estimations justes</strong> et des{" "}
                      <strong>rachats aux meilleurs prix</strong>.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-[#C4A053]/20 to-[#1a1f5c]/20 rounded-lg p-8 border-2 border-[#C4A053]">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C4A053] text-white p-3 rounded-full">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1a1f5c] text-lg mb-2">Expertise Reconnue</h3>
                          <p className="text-gray-600">
                            Plus de 15 ans d&#39;expérience dans l&#39;estimation et le rachat d&#39;antiquités
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-[#C4A053] text-white p-3 rounded-full">
                          <Heart className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1a1f5c] text-lg mb-2">Passion de l'Art</h3>
                          <p className="text-gray-600">Une véritable passion pour les objets d'art et leur histoire</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-[#C4A053] text-white p-3 rounded-full">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1a1f5c] text-lg mb-2">Confiance & Transparence</h3>
                          <p className="text-gray-600">Des transactions sécurisées et des estimations transparentes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Services */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white md:py-5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-[#C4A053] text-3xl mb-4">❦</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Nos Services d'Expertise
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Des services complets pour l&#39;estimation et le rachat de vos objets d&#39;art et antiquités.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Estimation Gratuite",
                    description:
                      "Estimation professionnelle de vos antiquités, tableaux, bijoux anciens et objets d'art. Déplacement gratuit à domicile en Nouvelle-Aquitaine.",
                    icon: Search,
                  },
                  {
                    title: "Rachat d'Antiquités",
                    description:
                      "Rachat immédiat de vos objets d'art, meubles anciens, tableaux de maîtres et bijoux anciens aux meilleurs prix du marché.",
                    icon: Gem,
                  },
                  {
                    title: "Expertise Spécialisée",
                    description:
                      "Expertise approfondie en mobilier ancien, argenterie, porcelaine, tableaux anciens et art décoratif du XVIIIe au XXe siècle.",
                    icon: Palette,
                  },
                ].map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#C4A053]"
                    >
                      <div className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-[#C4A053] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1a1f5c] mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'Intervention */}
        <section className="py-16 bg-white md:py-5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-12 h-12 text-[#C4A053]" />
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-crimson-pro)]">
                    Zone d'Intervention
                  </h2>
                </div>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Nous intervenons dans toute la région <strong>Nouvelle-Aquitaine</strong> pour l'estimation et le
                  rachat de vos antiquités et objets d'art.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>Bordeaux et Gironde</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>Pau et Pyrénées-Atlantiques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>Limoges et Haute-Vienne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>Poitiers et Vienne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>La Rochelle et Charente-Maritime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C4A053] rounded-full"></div>
                    <span>Et tous les départements de la région</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-3 bg-white/10 rounded-lg p-4">
                  <Clock className="w-6 h-6 text-[#C4A053]" />
                  <p className="text-gray-200">
                    <strong>Déplacement gratuit</strong> à votre domicile pour toute estimation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white md:py-5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Nos Valeurs
                </h2>
                <p className="text-gray-600 text-lg">Ce qui guide notre travail au quotidien</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Expertise",
                    description: "Une connaissance approfondie du marché de l'art et des antiquités",
                  },
                  {
                    title: "Transparence",
                    description: "Des estimations claires et des transactions en toute transparence",
                  },
                  {
                    title: "Réactivité",
                    description: "Une réponse rapide à vos demandes et un déplacement sous 48h",
                  },
                  {
                    title: "Confidentialité",
                    description: "Le respect absolu de votre vie privée et de vos biens",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Subtle decorative pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z' fill='%23C4A053' /%3E%3C/svg%3E")`,
                          backgroundSize: "60px 60px",
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-[rgba(196,160,83,1)]">{value.title}</h3>
                      <p className="text-gray-100 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white md:py-5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-[#1a1f5c]">
                Vous possédez des objets d'art ou des antiquités ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Contactez-nous pour une estimation gratuite et sans engagement. Notre expert se déplace à votre domicile
                en Nouvelle-Aquitaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="inline-block p-[3px] bg-gradient-to-r from-[#1a1f5c]/40 via-[#C4A053]/40 to-[#1a1f5c]/40 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="tel:0625637658" onClick={handleCallClick}>
                    <Button
                      size="lg"
                      className="bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 rounded-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      06 25 63 76 58
                    </Button>
                  </Link>
                </div>
                <div className="inline-block p-[3px] bg-gradient-to-r from-[#1a1f5c]/40 via-[#C4A053]/40 to-[#1a1f5c]/40 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white hover:bg-gray-50 text-[#1a1f5c] font-semibold px-8 py-6 text-lg transition-all duration-300 rounded-lg border-2 border-transparent"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Nous Contacter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
