import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Gem, Watch, Award, Shield, Clock, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Bijoux & Montres de Luxe en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de bijoux anciens, or, argent, diamants et montres de luxe (Rolex, Cartier, Patek Philippe) en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat bijoux, achat or, vente bijoux anciens, montres de luxe, Rolex, Cartier, diamants, pierres précieuses, estimation bijoux, expert bijoutier, Nouvelle-Aquitaine",
}

export default function BijouxMontresPage() {
  const bijouxTypes = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Bijoux en Or",
      description:
        "Or 18 carats, 14 carats, 9 carats. Bagues, colliers, bracelets, boucles d'oreilles, broches anciennes et modernes.",
      items: ["Or jaune, blanc, rose", "Bijoux signés", "Bijoux anciens", "Bijoux cassés ou abîmés"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Diamants & Pierres Précieuses",
      description:
        "Diamants certifiés, émeraudes, rubis, saphirs. Nous évaluons la qualité (4C) et proposons les meilleurs prix du marché.",
      items: ["Diamants certifiés GIA/HRD", "Pierres précieuses", "Pierres semi-précieuses", "Perles fines"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bijoux Signés",
      description:
        "Cartier, Van Cleef & Arpels, Boucheron, Chaumet, Mauboussin. Expertise spécialisée des grandes maisons joaillières.",
      items: ["Cartier", "Van Cleef & Arpels", "Boucheron", "Chaumet & Mauboussin"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Argenterie",
      description:
        "Argent massif 925, vermeil, couverts, plateaux, théières, timbales. Poinçons français et étrangers.",
      items: ["Couverts en argent", "Objets de table", "Bijoux en argent", "Argenterie ancienne"],
    },
  ]

  const montresTypes = [
    {
      brand: "Rolex",
      description: "Submariner, Daytona, GMT-Master, Datejust, Day-Date, Explorer, Oyster Perpetual",
    },
    {
      brand: "Patek Philippe",
      description: "Calatrava, Nautilus, Aquanaut, Complications, Grand Complications",
    },
    {
      brand: "Audemars Piguet",
      description: "Royal Oak, Royal Oak Offshore, Millenary, Jules Audemars",
    },
    {
      brand: "Cartier",
      description: "Tank, Santos, Ballon Bleu, Panthère, Pasha, Calibre",
    },
    {
      brand: "Omega",
      description: "Speedmaster, Seamaster, Constellation, De Ville",
    },
    {
      brand: "Autres Marques",
      description: "Breitling, IWC, Jaeger-LeCoultre, Vacheron Constantin, Panerai, TAG Heuer",
    },
  ]

  const avantages = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Expertise Certifiée",
      description: "Expert diplômé en gemmologie et horlogerie avec plus de 15 ans d'expérience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleurs Prix",
      description: "Nous proposons les prix les plus justes basés sur les cours actuels de l'or et du marché",
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
      question: "Comment est calculé le prix de rachat de mes bijoux en or ?",
      answer:
        "Le prix est calculé en fonction du poids, de la pureté de l'or (carats), et du cours actuel de l'or. Pour les bijoux signés ou anciens, nous prenons également en compte la valeur artistique et historique.",
    },
    {
      question: "Achetez-vous les bijoux cassés ou abîmés ?",
      answer:
        "Oui, nous achetons tous types de bijoux, même cassés, déformés ou incomplets. Le prix sera calculé en fonction du poids et de la pureté du métal précieux.",
    },
    {
      question: "Comment authentifiez-vous les montres de luxe ?",
      answer:
        "Nous vérifions le numéro de série, les poinçons, le mouvement, et tous les détails techniques. Nous utilisons des outils professionnels et notre expertise pour garantir l'authenticité.",
    },
    {
      question: "Faut-il avoir les papiers et la boîte d'origine ?",
      answer:
        "Les papiers et la boîte augmentent la valeur, surtout pour les montres de luxe, mais ce n'est pas obligatoire. Nous achetons également sans documents.",
    },
    {
      question: "Quel est le délai pour recevoir le paiement ?",
      answer:
        "Le paiement est immédiat. Vous pouvez choisir entre espèces (dans la limite légale) ou virement bancaire instantané.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-jewelry-hero-background.jpg"
            alt="Fond élégant de bijoux et montres de luxe"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
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
              <Gem className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Bijoux & Montres de Luxe
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center md:whitespace-nowrap">
              Expert en bijoux anciens, or, diamants et montres de prestige en Nouvelle-Aquitaine.
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
                Votre Expert en Bijoux et Montres de Luxe
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 15 ans d'expérience dans le domaine de la joaillerie et de l'horlogerie de luxe, nous vous
                proposons un service d'expertise et de rachat professionnel pour tous vos bijoux et montres de prestige.
                Notre expert diplômé en gemmologie se déplace gratuitement à votre domicile partout en
                Nouvelle-Aquitaine pour évaluer vos pièces et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/luxury-jewelry-gold-diamonds-rings-necklaces.jpg"
                  alt="Collection de bijoux de luxe en or et diamants : bagues, colliers et bracelets anciens - Rachat au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/luxury-watches-rolex-cartier-collection.jpg"
                  alt="Montres de luxe et prestige : Rolex, Cartier, Patek Philippe - Expert rachat montres anciennes Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Bijoux Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Bijoux Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de bijoux, qu'ils soient anciens, modernes, signés ou non signés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bijouxTypes.map((type, index) => (
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

      {/* Montres de Luxe Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-watches-background-pattern.jpg"
            alt="Fond élégant de montres de luxe suisses et horlogerie de prestige - Expertise et rachat montres anciennes"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Watch className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Montres de Luxe & Prestige
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des plus grandes marques horlogères suisses et internationales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {montresTypes.map((montre, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{montre.brand}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{montre.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Montres Vintage & Anciennes</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous sommes également spécialisés dans l'achat de montres vintage et anciennes de toutes marques. Que
              votre montre soit en état de marche ou non, nous l'évaluons et vous proposons un prix juste basé sur sa
              rareté, son état et sa valeur sur le marché des collectionneurs.
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
              Un service professionnel, transparent et sécurisé pour la vente de vos bijoux et montres.
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
                    "Par téléphone, email ou formulaire. Décrivez vos bijoux ou montres et envoyez des photos si possible.",
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
                    "Examen détaillé de vos pièces : pesée, vérification de la pureté, authentification, évaluation de l'état. Proposition de prix immédiate.",
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
                Tout ce que vous devez savoir sur le rachat de bijoux et montres.
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
            <Gem className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Vos Bijoux ou Montres ?
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
