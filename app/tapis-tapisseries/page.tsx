import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Palette, Award, Shield, Clock, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Tapis Persans & Tapisseries Anciennes en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de tapis persans, tapis d'Orient, tapisseries anciennes et textiles d'art en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat tapis persans, achat tapisseries anciennes, tapis d'Orient, tapis Tabriz, tapis Ispahan, tapisseries Aubusson, textiles anciens, estimation tapis, expert tapis, Nouvelle-Aquitaine",
}

export default function TapisTapisseriesPage() {
  const tapisTypes = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tapis Persans",
      description:
        "Tapis noués main d'Iran : Tabriz, Ispahan, Qom, Kashan, Nain. Expertise des motifs, des couleurs naturelles et de la qualité du nouage.",
      items: ["Tapis Tabriz", "Tapis Ispahan", "Tapis Qom", "Tapis Kashan & Nain"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Tapis d'Orient",
      description:
        "Tapis turcs, caucasiens, afghans, pakistanais. Kilims, Sumak, tapis tribaux. Évaluation selon l'origine, l'âge et l'état de conservation.",
      items: ["Tapis turcs Hereke", "Tapis caucasiens", "Kilims & Sumak", "Tapis tribaux"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Tapisseries Anciennes",
      description:
        "Tapisseries d'Aubusson, des Gobelins, de Beauvais, flamandes. Expertise des manufactures prestigieuses et des pièces historiques.",
      items: ["Tapisseries d'Aubusson", "Tapisseries des Gobelins", "Tapisseries de Beauvais", "Tapisseries flamandes"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Textiles d'Art",
      description:
        "Broderies anciennes, soieries, velours, dentelles précieuses. Textiles liturgiques, costumes d'époque, tissus historiques.",
      items: ["Broderies anciennes", "Soieries & velours", "Dentelles précieuses", "Textiles liturgiques"],
    },
  ]

  const origines = [
    {
      region: "Iran (Perse)",
      description: "Tabriz, Ispahan, Qom, Kashan, Nain, Kerman, Hériz, Bidjar",
    },
    {
      region: "Turquie",
      description: "Hereke, Kayseri, Sivas, Konya, tapis anatoliens",
    },
    {
      region: "Caucase",
      description: "Kazak, Shirvan, Daghestan, Karabagh, tapis géorgiens",
    },
    {
      region: "France",
      description: "Aubusson, Gobelins, Beauvais, Savonnerie, tapisseries royales",
    },
    {
      region: "Asie Centrale",
      description: "Boukhara, Turkmen, tapis afghans, tapis pakistanais",
    },
    {
      region: "Autres Origines",
      description: "Tapis chinois, indiens, marocains, textiles européens anciens",
    },
  ]

  const avantages = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Expertise Spécialisée",
      description: "Expert en tapis d'Orient et tapisseries anciennes avec plus de 15 ans d'expérience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleurs Prix",
      description: "Évaluation juste basée sur l'origine, l'âge, la qualité du nouage et l'état de conservation",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transaction Sécurisée",
      description: "Paiement immédiat en espèces ou virement bancaire. Contrat de vente en bonne et due forme",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Estimation Gratuite",
      description: "Déplacement et estimation gratuits à votre domicile partout en Nouvelle-Aquitaine",
    },
  ]

  const faq = [
    {
      question: "Comment déterminez-vous la valeur d'un tapis persan ?",
      answer:
        "Nous évaluons l'origine (ville ou région), l'âge, la qualité du nouage (nombre de nœuds au cm²), les matériaux (laine, soie), les teintures (naturelles ou synthétiques), les dimensions, l'état de conservation et la rareté du motif.",
    },
    {
      question: "Achetez-vous les tapis abîmés ou usés ?",
      answer:
        "Oui, nous achetons les tapis même abîmés, usés ou incomplets si leur origine et leur qualité le justifient. Les tapis anciens avec des signes d'usure peuvent avoir une grande valeur historique et artistique.",
    },
    {
      question: "Comment authentifiez-vous les tapisseries anciennes ?",
      answer:
        "Nous examinons la technique de tissage, les matériaux, les colorants, le style artistique, les marques de manufacture, et nous comparons avec les archives historiques des grandes manufactures (Aubusson, Gobelins, etc.).",
    },
    {
      question: "Quelle est la différence entre un tapis noué et un kilim ?",
      answer:
        "Un tapis noué est fabriqué avec des nœuds (technique du velours), tandis qu'un kilim est tissé à plat sans nœuds. Les deux ont de la valeur, mais les critères d'évaluation diffèrent selon la technique.",
    },
    {
      question: "Faut-il faire nettoyer le tapis avant l'estimation ?",
      answer:
        "Non, ce n'est pas nécessaire. Nous préférons voir le tapis dans son état actuel pour évaluer correctement son état de conservation et sa patine naturelle.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/persian-rugs-tapestries-hero-background.jpg"
            alt="Tapis persans et tapisseries anciennes - Fond hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z' fill='%23C4A053' fillOpacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Palette className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Tapis Persans & Tapisseries Anciennes
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en tapis d'Orient, tapisseries anciennes et textiles d'art en Nouvelle-Aquitaine.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Estimation gratuite</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Paiement immédiat</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Expert certifié</span>
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
                Votre Expert en Tapis d'Orient et Tapisseries Anciennes
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 15 ans d'expérience dans le domaine des tapis d'Orient et des tapisseries anciennes, nous
                vous proposons un service d'expertise et de rachat professionnel pour tous vos tapis persans, tapis
                d'Orient, tapisseries et textiles d'art. Notre expert se déplace gratuitement à votre domicile partout
                en Nouvelle-Aquitaine pour évaluer vos pièces et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/persian-carpet-traditional-pattern.jpg"
                  alt="Tapis persan ancien avec motifs traditionnels - Rachat tapis d'Orient au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/antique-tapestry-aubusson-gobelins.jpg"
                  alt="Tapisserie ancienne d'Aubusson ou des Gobelins - Expert rachat tapisseries Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Tapis Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Tapis et Tapisseries Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de tapis d'Orient, tapisseries anciennes et textiles d'art précieux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tapisTypes.map((type, index) => (
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

      {/* Origines Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/oriental-carpet-pattern-background.jpg"
            alt="Fond élégant de motifs de tapis orientaux - Expertise et rachat tapis anciens"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Palette className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Origines et Provenances
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des tapis et tapisseries de toutes origines et époques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {origines.map((origine, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{origine.region}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{origine.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Tapis et Tapisseries Anciens</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous sommes particulièrement intéressés par les tapis et tapisseries anciens, même s'ils présentent des
              signes d'usure. L'âge, la rareté des motifs, la qualité du nouage et l'origine prestigieuse sont des
              critères essentiels qui peuvent conférer une grande valeur à vos pièces, indépendamment de leur état de
              conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Un service professionnel, transparent et sécurisé pour la vente de vos tapis et tapisseries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center text-[#C4A053] mx-auto mb-4">
                  {avantage.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">{avantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-white md:py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Comment Ça Marche ?
              </h2>
              <p className="text-gray-600 text-lg text-center">Un processus simple et transparent en 4 étapes</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Contactez-nous",
                  description:
                    "Par téléphone, email ou formulaire. Décrivez vos tapis ou tapisseries et envoyez des photos si possible (vue d'ensemble, détails, dos du tapis).",
                },
                {
                  step: "2",
                  title: "Rendez-vous gratuit",
                  description:
                    "Notre expert se déplace gratuitement à votre domicile partout en Nouvelle-Aquitaine à la date et l'heure de votre choix.",
                },
                {
                  step: "3",
                  title: "Expertise et estimation",
                  description:
                    "Examen détaillé : origine, âge, qualité du nouage, matériaux, teintures, dimensions, état de conservation. Proposition de prix immédiate.",
                },
                {
                  step: "4",
                  title: "Paiement immédiat",
                  description:
                    "Si vous acceptez notre offre, paiement immédiat en espèces ou virement bancaire. Contrat de vente en bonne et due forme.",
                },
              ].map((etape, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] flex items-center justify-center text-[#C4A053] font-bold text-xl flex-shrink-0">
                    {etape.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{etape.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Questions Fréquentes
              </h2>
              <p className="text-gray-600 text-lg text-center">
                Tout ce que vous devez savoir sur le rachat de tapis et tapisseries.
              </p>
            </div>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
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
      <section className="py-16 bg-white md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Vos Tapis ou Tapisseries ?
            </h2>
            <p className="text-gray-600 text-lg mb-8 text-justify">
              Contactez-nous dès aujourd'hui pour une estimation gratuite et sans engagement. Notre expert se déplace à
              votre domicile partout en Nouvelle-Aquitaine.
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
