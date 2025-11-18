"use client" // Converting to client component to add modal functionality
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, Clock, Award, Shield, TrendingUp, Utensils } from "lucide-react"
import Image from "next/image"
import { useState } from "react" // Adding useState for modal state
import { EstimationFormModal } from "@/components/estimation-form-modal" // Using EstimationFormModal instead of EstimationModal to connect to the existing form

// The metadata will be handled by the parent layout or a separate metadata file

export default function ArgenteriePorcelainePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="mx-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/elegant-silver-cutlery-pattern.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <Utensils className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
                Rachat d'Argenterie & Porcelaine Ancienne
              </h1>
              <p className="text-base md:text-2xl text-gray-200 mb-8 text-justify">
                Spécialistes du rachat d'argenterie et de porcelaine ancienne en Nouvelle-Aquitaine. Nous estimons et
                achetons vos couverts en argent massif, ménagères, services de table et porcelaines de prestige.
                Estimation gratuite et paiement immédiat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[250px] bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2"
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
                  className="w-full sm:w-auto sm:min-w-[250px] bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Estimation Gratuite
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'Argenterie Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Argenterie que Nous Rachetons
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-justify">
              Nous achetons tous types d&#39;argenterie ancienne et moderne, des grandes maisons d&#39;orfèvrerie aux
              pièces uniques.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Couverts & Ménagères",
                  items: [
                    "Ménagères complètes en argent massif",
                    "Couverts dépareillés",
                    "Services de table anciens",
                    "Couverts à poisson, à dessert",
                  ],
                  image: "/silver-cutlery-set.jpg",
                },
                {
                  title: "Objets de Table",
                  items: [
                    "Plats et plateaux en argent",
                    "Saucières et légumiers",
                    "Cafetières et théières",
                    "Timbales et gobelets",
                  ],
                  image: "/silver-tea-service.jpg",
                },
                {
                  title: "Objets Décoratifs",
                  items: [
                    "Candélabres et chandeliers",
                    "Vases et coupes",
                    "Cadres photo en argent",
                    "Objets de vitrine",
                  ],
                  image: "/silver-candelabra.jpg",
                },
              ].map((category, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-[#C4A053] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Porcelaine Section */}
        <section className="bg-gray-50 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Porcelaines de Prestige
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nous recherchons activement les porcelaines des grandes manufactures françaises et européennes
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1a1f5c] mb-4">Manufactures Françaises</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Sèvres", "Limoges", "Haviland", "Bernardaud", "Raynaud", "Gien", "Quimper", "Longwy"].map(
                    (brand, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#C4A053]" />
                        <span className="text-gray-700 font-medium">{brand}</span>
                      </div>
                    ),
                  )}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1a1f5c] mb-4">Manufactures Européennes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Meissen (Allemagne)",
                    "Royal Copenhagen",
                    "Wedgwood",
                    "Royal Doulton",
                    "Herend (Hongrie)",
                    "KPM Berlin",
                    "Capodimonte",
                    "Ginori",
                  ].map((brand, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#C4A053]" />
                      <span className="text-gray-700 font-medium">{brand}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Maisons d'Orfèvrerie Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Grandes Maisons d'Orfèvrerie
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nous recherchons particulièrement les pièces des maisons d'orfèvrerie prestigieuses
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Christofle",
                "Puiforcat",
                "Baccarat",
                "Ercuis",
                "Odiot",
                "Tétard",
                "Cardeilhac",
                "Ravinet d'Enfert",
                "Hénin",
                "Boin-Taburet",
                "Fray",
                "Lapparra",
              ].map((brand, i) => (
                <Card
                  key={i}
                  className="p-4 text-center hover:shadow-lg hover:border-[#C4A053] transition-all duration-300 border-2"
                >
                  <Award className="w-8 h-8 text-[#C4A053] mx-auto mb-2" />
                  <p className="font-semibold text-[#1a1f5c]">{brand}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Nous Choisir Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Notre Expertise en Argenterie & Porcelaine
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Expertise Certifiée",
                  description:
                    "Nos experts connaissent parfaitement les poinçons d'argent et les marques de porcelaine pour une estimation précise",
                },
                {
                  icon: TrendingUp,
                  title: "Meilleur Prix",
                  description:
                    "Nous achetons au prix du marché actuel de l'argent et selon la rareté des pièces de porcelaine",
                },
                {
                  icon: Clock,
                  title: "Paiement Immédiat",
                  description: "Transaction rapide et sécurisée. Paiement comptant dès l'accord sur le prix",
                },
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C4A053] to-[#b39048] rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1f5c] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1f5c] font-[family-name:var(--font-crimson-pro)]">
              Questions Fréquentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Comment reconnaître l'argent massif ?",
                  answer:
                    "L'argent massif porte des poinçons obligatoires : le poinçon de maître (orfèvre), le poinçon de titre (800, 925 ou 950) et le poinçon de garantie. Nous vérifions systématiquement l'authenticité de ces poinçons lors de l'estimation.",
                },
                {
                  question: "Achetez-vous l'argenterie abîmée ou incomplète ?",
                  answer:
                    "Oui, nous achetons l'argenterie même abîmée, cabossée ou incomplète. Le prix est calculé selon le poids d'argent et l'état général. Les ménagères incomplètes sont également rachetées.",
                },
                {
                  question: "Comment estimez-vous la porcelaine ancienne ?",
                  answer:
                    "L'estimation dépend de plusieurs critères : la manufacture (Sèvres, Limoges...), l'époque, l'état de conservation, la rareté du décor et la présence de marques authentiques. Les services complets ont plus de valeur.",
                },
                {
                  question: "Faut-il nettoyer l'argenterie avant l'estimation ?",
                  answer:
                    "Non, il n'est pas nécessaire de nettoyer vos pièces. Un nettoyage inapproprié peut même diminuer la valeur des pièces anciennes. Nos experts évaluent l'argenterie dans son état actuel.",
                },
                {
                  question: "Achetez-vous le métal argenté (plaqué) ?",
                  answer:
                    "Nous nous concentrons principalement sur l'argent massif qui a une valeur intrinsèque. Le métal argenté (plaqué) n'a de valeur que s'il s'agit de pièces anciennes de grandes maisons comme Christofle.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-[#1a1f5c]">
              Faites Estimer Votre Argenterie & Porcelaine
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une estimation gratuite et sans engagement de votre argenterie et porcelaine ancienne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
              <Button
                size="lg"
                className="w-full sm:flex-1 sm:max-w-[300px] bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#C4A053]"
                asChild
              >
                <a href="tel:0625637658">
                  <Phone className="mr-2 h-5 w-5" />
                  Appelez-nous
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:flex-1 sm:max-w-[300px] bg-white hover:bg-gray-50 text-[#1a1f5c] border-2 border-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Demander une Estimation
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
