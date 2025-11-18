"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Music, Music2, Piano, Wind, Cog, Globe, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { useState } from "react"

export default function InstrumentsMusiqueClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="mx-0">
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/vintage-violin.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Music className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
                Achat d'Instruments de Musique Anciens
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Expert en instruments de musique de collection et anciens
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto sm:min-w-[250px] border-2"
                  asChild
                >
                  <a href="tel:0625637658">
                    <Phone className="mr-2 h-5 w-5" />
                    06 25 63 76 58
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm w-full sm:w-auto sm:min-w-[250px]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Estimation Gratuite
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Instruments de Musique Recherchés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Music2,
                  title: "Instruments à Cordes",
                  items: [
                    "Violons anciens (Stradivarius, Guarneri, Amati)",
                    "Altos et violoncelles de maître",
                    "Guitares classiques et acoustiques",
                    "Mandolines et luths anciens",
                    "Harpes de concert",
                    "Archets de qualité (Tourte, Peccatte)",
                  ],
                },
                {
                  icon: Piano,
                  title: "Pianos & Claviers",
                  items: [
                    "Pianos à queue de concert",
                    "Pianos droits anciens",
                    "Clavecins et épinettes",
                    "Pianoforte historiques",
                    "Orgues de salon",
                    "Harmoniums anciens",
                  ],
                },
                {
                  icon: Wind,
                  title: "Instruments à Vent",
                  items: [
                    "Flûtes traversières anciennes",
                    "Clarinettes et hautbois",
                    "Saxophones vintage",
                    "Trompettes et cornets",
                    "Cors et tubas",
                    "Instruments à anche double",
                  ],
                },
                {
                  icon: Cog,
                  title: "Instruments Mécaniques",
                  items: [
                    "Boîtes à musique anciennes",
                    "Orgues de Barbarie",
                    "Phonographes et gramophones",
                    "Pianos mécaniques",
                    "Automates musicaux",
                    "Carillons et orchestrions",
                  ],
                },
                {
                  icon: Globe,
                  title: "Instruments Ethniques",
                  items: [
                    "Sitars et tablas indiens",
                    "Kotos et shamisens japonais",
                    "Ouds et qanuns orientaux",
                    "Djembés et percussions africaines",
                    "Didgeridoos australiens",
                    "Instruments précolombiens",
                  ],
                },
                {
                  icon: Package,
                  title: "Accessoires & Partitions",
                  items: [
                    "Archets de luthiers célèbres",
                    "Étuis et coffrets anciens",
                    "Partitions manuscrites",
                    "Diapasons et métronomes anciens",
                    "Pupitres et accessoires",
                    "Documentation historique",
                  ],
                },
              ].map((category, index) => {
                const Icon = category.icon
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C4A053] to-[#b39048] rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1f5c]">{category.title}</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        {category.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Luthiers & Facteurs Recherchés
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#C4A053]">Luthiers Italiens</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Antonio Stradivari</li>
                  <li>• Giuseppe Guarneri del Gesù</li>
                  <li>• Nicolò Amati</li>
                  <li>• Carlo Bergonzi</li>
                  <li>• Giovanni Battista Guadagnini</li>
                  <li>• Famille Gagliano</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#C4A053]">Facteurs de Pianos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Steinway & Sons</li>
                  <li>• Bösendorfer</li>
                  <li>• Bechstein</li>
                  <li>• Érard</li>
                  <li>• Pleyel</li>
                  <li>• Blüthner</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#C4A053]">Facteurs d'Instruments à Vent</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Selmer (saxophones)</li>
                  <li>• Buffet Crampon (clarinettes)</li>
                  <li>• Yamaha (instruments à vent)</li>
                  <li>• Bach (cuivres)</li>
                  <li>• Conn (instruments à vent)</li>
                  <li>• Martin (saxophones)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Exemples d'Instruments Achetés
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "/vintage-violin.jpg", title: "Violon Ancien", desc: "Luthier italien, XVIIIe siècle" },
                { img: "/grand-piano.jpg", title: "Piano à Queue", desc: "Steinway & Sons, modèle D" },
                { img: "/vintage-saxophone.jpg", title: "Saxophone Vintage", desc: "Selmer Mark VI, années 1960" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Questions Fréquentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Comment évaluez-vous un instrument de musique ancien ?",
                  a: "L'évaluation d'un instrument ancien prend en compte plusieurs critères : le luthier ou facteur, l'époque de fabrication, l'état de conservation, la qualité sonore, l'authenticité, les restaurations éventuelles, et la rareté.",
                },
                {
                  q: "Achetez-vous des instruments restaurés ?",
                  a: "Oui, nous achetons des instruments restaurés à condition que les restaurations aient été effectuées dans les règles de l'art par des professionnels qualifiés.",
                },
                {
                  q: "Faut-il un certificat d'authenticité ?",
                  a: "Un certificat d'authenticité est fortement recommandé, particulièrement pour les instruments de grande valeur. Nous pouvons faire appel à des experts indépendants si nécessaire.",
                },
                {
                  q: "Achetez-vous des instruments en mauvais état ?",
                  a: "Oui, nous achetons également des instruments nécessitant des réparations, à condition qu'ils présentent un intérêt historique ou un potentiel de restauration.",
                },
                {
                  q: "Comment se déroule la vente d'un instrument ?",
                  a: "Après un premier contact, nous organisons un rendez-vous pour examiner l'instrument. Notre expert évalue sa qualité et nous vous faisons une offre d'achat immédiate.",
                },
                {
                  q: "Quels documents fournir pour la vente ?",
                  a: "Prévoyez une pièce d'identité, tout document prouvant la provenance de l'instrument, et si possible l'historique des restaurations.",
                },
              ].map((faq, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-[#1a1f5c]">
              Faites Estimer Vos Instruments de Musique
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert en instruments de musique anciens et de collection. Estimation gratuite et paiement immédiat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:flex-1 sm:max-w-[300px] border-primary border-0"
                asChild
              >
                <a href="tel:0625637658">
                  <Phone className="mr-2 h-5 w-5" />
                  06 25 63 76 58
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-gray-50 text-[#1a1f5c] border-2 border-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:flex-1 sm:max-w-[300px]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Estimation Gratuite
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
