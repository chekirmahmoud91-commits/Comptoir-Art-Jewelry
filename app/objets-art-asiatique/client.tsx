"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { EstimationFormModal } from "@/components/estimation-form-modal"

export function ObjetsArtAsiatiqueClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/chinese-porcelain-vase.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
              Achat d'Objets d'Art Asiatique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Expert en art oriental - Porcelaines, bronzes, jades et œuvres d'art asiatique
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
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm w-full sm:w-auto sm:min-w-[250px]"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Demander une Estimation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Objets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
            Objets d'Art Asiatique que Nous Achetons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Porcelaines Chinoises",
                items: [
                  "Vases de la famille rose et verte",
                  "Porcelaines de la dynastie Ming et Qing",
                  "Céramiques Song, Yuan et Tang",
                  "Bols et coupes impériaux",
                  "Potiches et jarres décoratives",
                ],
                image: "/chinese-porcelain-vase.jpg",
              },
              {
                title: "Bronzes & Sculptures",
                items: [
                  "Bronzes japonais et chinois",
                  "Statues de Bouddha",
                  "Brûle-parfums et encensoirs",
                  "Sculptures en bronze doré",
                  "Objets rituels anciens",
                ],
                image: "/bronze-buddha-statue.jpg",
              },
              {
                title: "Jades & Pierres Dures",
                items: [
                  "Sculptures en jade néphrite",
                  "Bijoux et ornements en jade",
                  "Objets en corail et ivoire",
                  "Pierres dures sculptées",
                  "Sceaux et cachets impériaux",
                ],
                image: "/jade-sculpture.jpg",
              },
              {
                title: "Laques & Mobilier",
                items: [
                  "Paravents laqués",
                  "Coffres et cabinets",
                  "Boîtes et plateaux laqués",
                  "Mobilier en bois précieux",
                  "Objets incrustés de nacre",
                ],
                image: "/lacquer-cabinet.jpg",
              },
              {
                title: "Estampes & Peintures",
                items: [
                  "Estampes japonaises ukiyo-e",
                  "Peintures sur soie chinoises",
                  "Calligraphies anciennes",
                  "Rouleaux suspendus",
                  "Albums et livres illustrés",
                ],
                image: "/japanese-woodblock-print.jpg",
              },
              {
                title: "Objets de Collection",
                items: [
                  "Netsuke et inro japonais",
                  "Tabatières chinoises",
                  "Armes et armures samouraï",
                  "Textiles et costumes anciens",
                  "Instruments de musique",
                ],
                image: "/netsuke-collection.jpg",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#C4A053] mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Époques & Dynasties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
            Époques et Dynasties Recherchées
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
                Chine
              </h3>
              <ul className="space-y-3">
                {[
                  "Dynastie Tang (618-907)",
                  "Dynastie Song (960-1279)",
                  "Dynastie Yuan (1271-1368)",
                  "Dynastie Ming (1368-1644)",
                  "Dynastie Qing (1644-1912)",
                  "République de Chine (1912-1949)",
                ].map((period, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#C4A053] rounded-full mr-3" />
                    <span className="text-gray-700 font-medium">{period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
                Japon
              </h3>
              <ul className="space-y-3">
                {[
                  "Période Edo (1603-1868)",
                  "Période Meiji (1868-1912)",
                  "Période Taishō (1912-1926)",
                  "Période Shōwa (1926-1989)",
                  "Art contemporain japonais",
                  "Artisanat traditionnel",
                ].map((period, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#C4A053] rounded-full mr-3" />
                    <span className="text-gray-700 font-medium">{period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Notre Expertise en Art Asiatique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#1a1f5c]">Authentification</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nos experts maîtrisent les techniques d'authentification des objets d'art asiatique : analyse des
                  marques, étude des techniques de fabrication, examen des matériaux et comparaison avec les pièces de
                  référence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#1a1f5c]">Estimation Précise</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nous suivons de près le marché international de l'art asiatique et connaissons les cotes des
                  différentes périodes, artistes et manufactures pour vous proposer une estimation juste.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#1a1f5c]">Réseau International</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Grâce à notre réseau de collectionneurs et marchands spécialisés en art asiatique, nous trouvons
                  rapidement les meilleurs acquéreurs pour vos objets précieux.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#1a1f5c]">Discrétion Assurée</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nous comprenons la valeur sentimentale et financière de vos objets d'art asiatique. Toutes nos
                  transactions sont menées avec la plus grande confidentialité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
            Questions Fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Comment identifier l'authenticité d'une porcelaine chinoise ?",
                answer:
                  "L'authentification d'une porcelaine chinoise nécessite l'examen de plusieurs éléments : les marques au revers, la qualité de la pâte et de l'émail, le style décoratif, et la technique de fabrication. Nos experts utilisent également des analyses scientifiques si nécessaire.",
              },
              {
                question: "Quelle est la valeur d'un bronze japonais ancien ?",
                answer:
                  "La valeur d'un bronze japonais dépend de son époque, de son état de conservation, de la qualité de la fonte, de la signature de l'artiste et de sa rareté. Les bronzes de la période Edo et Meiji sont particulièrement recherchés.",
              },
              {
                question: "Achetez-vous des objets en ivoire ?",
                answer:
                  "Nous achetons uniquement des objets en ivoire anciens conformes à la réglementation en vigueur (antérieurs à 1947). Chaque pièce doit être accompagnée d'un certificat d'authenticité et respecter les conventions internationales.",
              },
              {
                question: "Comment estimer la valeur d'une estampe japonaise ?",
                answer:
                  "La valeur d'une estampe japonaise dépend de l'artiste (Hokusai, Hiroshige, Utamaro...), de l'édition (première impression ou réédition), de l'état de conservation, des couleurs et de la rareté du sujet représenté.",
              },
              {
                question: "Quels documents fournir pour une expertise ?",
                answer:
                  "Pour une première estimation, envoyez-nous des photos claires de l'objet sous différents angles, incluant les marques, signatures ou cachets. Si vous possédez des documents d'origine, certificats ou factures, ils seront très utiles.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-3 text-[#1a1f5c]">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-justify">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
            Faites Estimer Vos Objets d'Art Asiatique
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Nos experts en art asiatique sont à votre disposition pour évaluer vos porcelaines, bronzes, jades et œuvres
            d'art oriental. Estimation gratuite et paiement immédiat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:flex-1 sm:max-w-[300px] border-primary border-0"
              asChild
            >
              <a href="tel:0625637658">
                <Phone className="mr-2 h-5 w-5" />
                Appeler Maintenant
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-50 text-[#1a1f5c] border-2 border-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:flex-1 sm:max-w-[300px]"
              onClick={() => setIsModalOpen(true)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Demander une Estimation
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Estimation Modal */}
      <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
