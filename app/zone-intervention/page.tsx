"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Car, CheckCircle2, Mail } from "lucide-react"
import Link from "next/link"

const departments = [
  { name: "Charente", code: "16", cities: "Angoulême, Cognac, La Rochefoucauld" },
  { name: "Charente-Maritime", code: "17", cities: "La Rochelle, Rochefort, Saintes" },
  { name: "Corrèze", code: "19", cities: "Tulle, Brive-la-Gaillarde, Ussel" },
  { name: "Creuse", code: "23", cities: "Guéret, Aubusson, La Souterraine" },
  { name: "Dordogne", code: "24", cities: "Périgueux, Bergerac, Sarlat" },
  { name: "Gironde", code: "33", cities: "Bordeaux, Arcachon, Libourne" },
  { name: "Landes", code: "40", cities: "Mont-de-Marsan, Dax, Biscarrosse" },
  { name: "Lot-et-Garonne", code: "47", cities: "Agen, Villeneuve-sur-Lot, Marmande" },
  { name: "Pyrénées-Atlantiques", code: "64", cities: "Pau, Bayonne, Biarritz" },
  { name: "Deux-Sèvres", code: "79", cities: "Niort, Bressuire, Thouars" },
  { name: "Vienne", code: "86", cities: "Poitiers, Châtellerault, Montmorillon" },
  { name: "Haute-Vienne", code: "87", cities: "Limoges, Saint-Junien, Bellac" },
]

const advantages = [
  {
    icon: Car,
    title: "Déplacement Gratuit",
    description: "Nous nous déplaçons gratuitement à votre domicile dans toute la Nouvelle-Aquitaine.",
  },
  {
    icon: Clock,
    title: "Disponibilité Rapide",
    description: "Rendez-vous sous 48h pour une estimation de vos objets d'art et antiquités.",
  },
  {
    icon: CheckCircle2,
    title: "Expertise Locale",
    description: "Une connaissance approfondie du marché régional et des antiquités locales.",
  },
  {
    icon: Phone,
    title: "Contact Direct",
    description: "Un interlocuteur unique pour vous accompagner tout au long du processus.",
  },
]

export default function ZoneInterventionPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <MapPin className="w-16 h-16 text-[#C4A053]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
              Notre Zone d'Intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-justify">
              Nous intervenons dans toute la région Nouvelle-Aquitaine pour estimer et racheter vos objets d&#39;art et
              antiquités.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"></div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="md:py-24 bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Les 12 Départements de Nouvelle-Aquitaine
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous couvrons l&#39;ensemble de la région pour vous offrir un service de proximité et d&#39;expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {departments.map((dept, index) => {
              if (dept.code === "16") {
                return (
                  <Link key={index} href="/zone-intervention/charente-16">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "17") {
                return (
                  <Link key={index} href="/zone-intervention/charente-maritime-17">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "19") {
                return (
                  <Link key={index} href="/zone-intervention/correze-19">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "23") {
                return (
                  <Link key={index} href="/zone-intervention/creuse-23">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "24") {
                return (
                  <Link key={index} href="/zone-intervention/dordogne-24">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "33") {
                return (
                  <Link key={index} href="/zone-intervention/gironde-33">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "40") {
                return (
                  <Link key={index} href="/zone-intervention/landes-40">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "47") {
                return (
                  <Link key={index} href="/zone-intervention/lot-et-garonne-47">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "64") {
                return (
                  <Link key={index} href="/zone-intervention/pyrenees-atlantiques-64">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "79") {
                return (
                  <Link key={index} href="/zone-intervention/deux-sevres-79">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "86") {
                return (
                  <Link key={index} href="/zone-intervention/vienne-86">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              if (dept.code === "87") {
                return (
                  <Link key={index} href="/zone-intervention/haute-vienne-87">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">{dept.code}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1a1f5c] mb-2 group-hover:text-[#C4A053] transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{dept.cities}</p>
                          <p className="text-[#C4A053] text-xs mt-2 font-semibold">Voir notre service →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-100 hover:border-[#C4A053] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{dept.code}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{dept.name}</h3>
                      <p className="text-gray-600 text-sm">{dept.cities}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-[#C4A053]/10 to-[#1a1f5c]/10 rounded-2xl p-8 border-2 border-[#C4A053]/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <MapPin className="w-16 h-16 text-[#C4A053] flex-shrink-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1a1f5c] mb-2">Vous ne trouvez pas votre ville ?</h3>
                <p className="text-gray-600 text-justify">
                  Contactez-nous ! Nous étudions toutes les demandes et pouvons nous déplacer dans les zones limitrophes
                  selon les cas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="md:py-24 bg-gradient-to-b from-gray-50 to-white py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Les Avantages de Notre Service
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Un service de proximité et d&#39;expertise pour vous accompagner dans la vente de vos antiquités.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#C4A053] group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#C4A053]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1f5c] mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{advantage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white md:py-5 py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Faire Estimer Vos Antiquités ?
            </h2>
            <p className="text-gray-600 text-lg mb-8 text-justify">
              Contactez-nous dès aujourd'hui pour un déplacement gratuit. Notre expert se rend à votre domicile partout
              en Nouvelle-Aquitaine pour une estimation professionnelle et sans engagement.
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

      <Footer />
    </>
  )
}
