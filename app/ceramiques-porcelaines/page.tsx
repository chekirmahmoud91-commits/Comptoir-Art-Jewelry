import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Sparkles, Award, Shield, Clock, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Céramiques & Porcelaines Anciennes en Nouvelle-Aquitaine | Expert",
  description:
    "Expert en rachat de céramiques et porcelaines anciennes : Sèvres, Limoges, Chine, Japon. Estimation gratuite à domicile en Nouvelle-Aquitaine. Paiement immédiat.",
  keywords:
    "rachat céramiques, porcelaine ancienne, Sèvres, Limoges, faïence, porcelaine de Chine, expert céramiste, estimation porcelaine, Nouvelle-Aquitaine",
}

export default function CeramiquesPorcelainesPage() {
  const types = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Porcelaine de Sèvres",
      description:
        "Manufacture nationale de Sèvres, pièces du XVIIIe et XIXe siècle. Vases, assiettes, services de table.",
      items: ["Pièces marquées", "Décors peints main", "Dorures à l'or fin", "Services complets"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Porcelaine de Limoges",
      description:
        "Haviland, Bernardaud, Raynaud, Royal Limoges. Services de table, objets décoratifs, pièces signées.",
      items: ["Haviland & Co", "Bernardaud", "Services anciens", "Pièces décoratives"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Porcelaine Asiatique",
      description: "Porcelaine de Chine (Kangxi, Qianlong), porcelaine japonaise (Imari, Satsuma, Kutani).",
      items: ["Porcelaine de Chine", "Imari japonais", "Satsuma", "Pièces anciennes"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Faïences & Grès",
      description: "Faïences de Delft, Rouen, Moustiers, Quimper. Grès de Beauvais, Puisaye.",
      items: ["Faïence de Delft", "Rouen & Moustiers", "Quimper", "Grès anciens"],
    },
  ]

  const avantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Expertise Spécialisée",
      description: "Expert en céramiques et porcelaines avec connaissance approfondie des manufactures",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Évaluation Juste",
      description: "Prix basés sur la rareté, l'état, la manufacture et la demande du marché",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transaction Sécurisée",
      description: "Paiement immédiat et contrat de vente en bonne et due forme",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Déplacement Gratuit",
      description: "Estimation gratuite à domicile partout en Nouvelle-Aquitaine",
    },
  ]

  const faq = [
    {
      question: "Comment identifier une porcelaine de valeur ?",
      answer:
        "Les marques au revers, la qualité de la pâte, les décors peints main, les dorures et la finesse de l'exécution sont des indicateurs. Notre expert examine chaque pièce pour déterminer son origine et sa valeur.",
    },
    {
      question: "Achetez-vous les pièces ébréchées ou restaurées ?",
      answer:
        "Oui, nous achetons également les pièces avec défauts. Le prix sera ajusté en fonction de l'état, mais certaines pièces rares conservent une valeur importante même restaurées.",
    },
    {
      question: "Quelle est la différence entre porcelaine et faïence ?",
      answer:
        "La porcelaine est translucide, plus fine et cuite à haute température. La faïence est opaque et plus poreuse. Les deux ont leur valeur selon la manufacture et l'époque.",
    },
    {
      question: "Les services incomplets ont-ils de la valeur ?",
      answer:
        "Oui, même incomplets, les services de grandes manufactures (Sèvres, Limoges) ont de la valeur. Nous achetons également les pièces isolées.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/porcelain-ceramics-hero-background.jpg"
            alt="Céramiques et porcelaines anciennes - Fond hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='%23C4A053' fillOpacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Céramiques & Porcelaines Anciennes
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en porcelaines de Sèvres, Limoges, Chine et faïences anciennes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Estimation gratuite</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Expert certifié</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Paiement immédiat</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Déplacement gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
                Expert en Céramiques et Porcelaines Anciennes
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Spécialisé dans l'expertise et le rachat de céramiques et porcelaines anciennes, nous évaluons vos
                pièces avec précision. Qu'il s'agisse de porcelaines de Sèvres, Limoges, de Chine ou de faïences
                anciennes, notre expert se déplace gratuitement à votre domicile en Nouvelle-Aquitaine pour vous
                proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/porcelaine-de-s-vres-ancienne-avec-d-cor-floral-et.jpg"
                  alt="Porcelaine de Sèvres ancienne avec décor floral et dorures - Expert rachat Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/service-de-table-en-porcelaine-de-limoges-haviland.jpg"
                  alt="Service de table en porcelaine de Limoges Haviland - Estimation gratuite"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Céramiques & Porcelaines
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nous achetons toutes les grandes manufactures et époques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#C4A053]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center text-[#C4A053] flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-justify">{type.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#C4A053] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufactures Prestigieuses Section */}
      <section className="md:py-24 py-16 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/porcelaine-chinoise-ancienne-dynastie-qing-avec-d-.jpg"
            alt="Porcelaine ancienne et céramiques de collection - Expertise manufactures prestigieuses"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Manufactures Prestigieuses
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des plus grandes manufactures de céramiques et porcelaines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Manufacture de Sèvres",
                description: "Porcelaines royales, pièces marquées, décors peints main, dorures à l'or fin",
              },
              {
                name: "Haviland Limoges",
                description: "Services de table, pièces décoratives, porcelaines fines, éditions limitées",
              },
              {
                name: "Bernardaud",
                description: "Porcelaines contemporaines, services anciens, pièces d'exception",
              },
              {
                name: "Porcelaine de Chine",
                description: "Dynasties Ming et Qing, céladons, bleu et blanc, famille rose",
              },
              {
                name: "Faïence de Delft",
                description: "Faïences hollandaises, décors bleu et blanc, pièces anciennes",
              },
              {
                name: "Quimper & Rouen",
                description: "Faïences françaises, décors traditionnels, pièces régionales",
              },
            ].map((manufacture, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{manufacture.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{manufacture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Pourquoi Nous Choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center text-[#C4A053] mx-auto mb-4">
                  {avantage.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">{avantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Comment Ça Marche ?
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Contactez-nous",
                  description: "Décrivez vos pièces et envoyez des photos des marques et décors.",
                },
                {
                  step: "2",
                  title: "Rendez-vous gratuit",
                  description: "Notre expert se déplace gratuitement à votre domicile.",
                },
                {
                  step: "3",
                  title: "Expertise",
                  description: "Examen des marques, de l'état, de la qualité et estimation immédiate.",
                },
                {
                  step: "4",
                  title: "Paiement",
                  description: "Paiement immédiat si vous acceptez notre offre.",
                },
              ].map((etape, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center text-[#C4A053] font-bold text-xl flex-shrink-0">
                    {etape.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{etape.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Questions Fréquentes
              </h2>
            </div>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-3 flex items-start gap-2">
                    <span className="text-[#C4A053] flex-shrink-0">Q:</span>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-6 text-justify">
                    <span className="text-[#C4A053] font-bold">R:</span> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Faites Estimer Vos Céramiques & Porcelaines
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Contactez-nous pour une estimation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <Link href="/contact" className="w-full sm:w-[300px]">
                <Button
                  size="lg"
                  className="w-full bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Demander une estimation
                </Button>
              </Link>
              <Link href="tel:0625637658" className="w-full sm:w-[300px]">
                <Button
                  size="lg"
                  className="w-full bg-[#1a1f5c] hover:bg-[#1a1f5c]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#C4A053] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
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
