import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Sparkles, Award, Shield, Clock, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Objets d'Art Asiatiques Anciens en Nouvelle-Aquitaine | Expert",
  description:
    "Expert en rachat d'objets d'art asiatiques : porcelaines chinoises, bronzes japonais, laques, ivoires, jades. Estimation gratuite à domicile en Nouvelle-Aquitaine.",
  keywords:
    "rachat art asiatique, porcelaine chinoise, bronze japonais, jade, ivoire, laque, expert art asiatique, estimation, Nouvelle-Aquitaine",
}

export default function ObjetsArtAsiatiquesPage() {
  const types = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Porcelaines Chinoises",
      description: "Porcelaines des dynasties Ming et Qing, céladons, bleu et blanc, famille rose et verte.",
      items: ["Dynastie Ming", "Dynastie Qing", "Céladons", "Bleu et blanc"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bronzes & Sculptures",
      description: "Bronzes chinois et japonais, sculptures bouddhiques, statuettes, brûle-parfums.",
      items: ["Bronzes anciens", "Sculptures bouddhiques", "Brûle-parfums", "Statuettes"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Jades & Pierres Dures",
      description: "Jades néphrite et jadéite, sculptures, bijoux, objets rituels et décoratifs.",
      items: ["Jade néphrite", "Jadéite", "Sculptures", "Objets rituels"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Laques & Ivoires",
      description: "Laques de Chine et du Japon, ivoires sculptés, netsuke, okimono.",
      items: ["Laques anciennes", "Ivoires sculptés", "Netsuke", "Okimono"],
    },
  ]

  const avantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Expertise Spécialisée",
      description: "Expert en art asiatique avec connaissance approfondie des dynasties et périodes",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Évaluation Précise",
      description: "Prix basés sur l'authenticité, la rareté, l'époque et la demande du marché",
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
      question: "Comment authentifier un objet d'art asiatique ?",
      answer:
        "L'authentification repose sur l'examen des marques, de la qualité d'exécution, des matériaux, de la patine et du style. Notre expert utilise également des analyses techniques si nécessaire.",
    },
    {
      question: "Les objets en ivoire peuvent-ils être vendus ?",
      answer:
        "La vente d'ivoire est strictement réglementée. Seuls les ivoires anciens (avant 1947) avec certificat peuvent être commercialisés. Nous vous conseillons sur la réglementation en vigueur.",
    },
    {
      question: "Quelle est la valeur d'une porcelaine chinoise ?",
      answer:
        "La valeur d��pend de la dynastie, de la qualité, de l'état, de la rareté et des marques. Les pièces Ming et Qing de qualité impériale ont une grande valeur.",
    },
    {
      question: "Achetez-vous les objets restaurés ?",
      answer:
        "Oui, nous achetons également les objets restaurés. Le prix sera ajusté en fonction de l'importance et de la qualité de la restauration.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/asian-art-hero-background.jpg" alt="Asian art background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='%23C4A053' fillOpacity='1'/%3E%3C/svg%3E")`,
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
              Rachat d'Objets d'Art Asiatiques Anciens
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en art asiatique : porcelaines chinoises, bronzes, jades, laques et ivoires.
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
                Expert en Objets d'Art Asiatiques
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Spécialisé dans l'expertise et le rachat d'objets d'art asiatiques anciens, nous évaluons vos pièces
                avec précision. Porcelaines chinoises, bronzes japonais, jades, laques et ivoires : notre expert se
                déplace gratuitement à votre domicile en Nouvelle-Aquitaine pour vous proposer le meilleur prix du
                marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/porcelaine-chinoise-ancienne-dynastie-qing-avec-d-.jpg"
                  alt="Porcelaine chinoise ancienne dynastie Qing - Expert rachat Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/bronze-japonais-ancien-sculpture-bouddhique.jpg"
                  alt="Bronze japonais ancien sculpture bouddhique - Estimation gratuite"
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
              Types d'Objets d'Art Asiatiques
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nous achetons tous types d'objets d'art asiatiques anciens.
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

      {/* Dynasties & Périodes Section */}
      <section className="md:py-24 py-16 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/bronze-japonais-ancien-sculpture-bouddhique.jpg"
            alt="Art asiatique ancien - Expertise dynasties chinoises et périodes japonaises"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Dynasties & Périodes Recherchées
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise approfondie des grandes dynasties chinoises et périodes japonaises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Dynastie Ming (1368-1644)",
                description: "Porcelaines bleu et blanc, céladons, objets impériaux, bronzes rituels",
              },
              {
                name: "Dynastie Qing (1644-1912)",
                description: "Famille rose et verte, porcelaines impériales, jades, laques",
              },
              {
                name: "Période Edo (1603-1868)",
                description: "Laques japonaises, netsuke, okimono, estampes, bronzes",
              },
              {
                name: "Période Meiji (1868-1912)",
                description: "Bronzes japonais, ivoires sculptés, cloisonnés, céramiques Satsuma",
              },
              {
                name: "Art Bouddhique",
                description: "Sculptures bouddhiques, thangkas tibétains, objets rituels",
              },
              {
                name: "Jades Anciens",
                description: "Jades néphrite et jadéite, sculptures, bijoux, objets rituels",
              },
            ].map((periode, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{periode.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{periode.description}</p>
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
                  description: "Décrivez vos objets et envoyez des photos des marques et détails.",
                },
                {
                  step: "2",
                  title: "Rendez-vous gratuit",
                  description: "Notre expert se déplace gratuitement à votre domicile.",
                },
                {
                  step: "3",
                  title: "Expertise",
                  description: "Examen de l'authenticité, de l'époque, de l'état et estimation immédiate.",
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
              Faites Estimer Vos Objets d'Art Asiatiques
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
