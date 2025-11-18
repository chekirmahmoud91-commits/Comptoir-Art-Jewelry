import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Armchair, Home, Award, Shield, Clock, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Meubles Anciens & Mobilier d'Époque en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de meubles anciens, mobilier d'époque Louis XV, Louis XVI, Art Déco, commodes, armoires, tables en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat meubles anciens, achat mobilier ancien, vente meubles époque, Louis XV, Louis XVI, Art Déco, commode ancienne, armoire ancienne, estimation meubles, expert antiquaire, Nouvelle-Aquitaine",
}

export default function MeublesAnciensPage() {
  const meublesTypes = [
    {
      icon: <Armchair className="w-8 h-8" />,
      title: "Mobilier Louis XV & Louis XVI",
      description:
        "Commodes, secrétaires, fauteuils, bergères. Marqueterie, bronze doré, bois précieux. Pièces signées et estampillées.",
      items: ["Commodes galbées", "Secrétaires à abattant", "Fauteuils cabriolet", "Tables de salon"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Mobilier Art Déco & Art Nouveau",
      description:
        "Pièces signées des grands ébénistes : Ruhlmann, Leleu, Majorelle, Gallé. Bois exotiques, marqueterie, ferronnerie.",
      items: ["Buffets Art Déco", "Vitrines Majorelle", "Tables Ruhlmann", "Lampes Gallé"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Mobilier Régional",
      description:
        "Meubles de nos régions : armoires normandes, vaisseliers bretons, buffets basques, pétrin, panetières provençales.",
      items: ["Armoires normandes", "Vaisseliers bretons", "Buffets basques", "Meubles provençaux"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mobilier XIXe Siècle",
      description:
        "Empire, Restauration, Napoléon III, Second Empire. Acajou, palissandre, marqueterie Boulle, bronzes dorés.",
      items: ["Commodes Empire", "Guéridons Napoléon III", "Bibliothèques", "Consoles dorées"],
    },
  ]

  const stylesEpoques = [
    {
      style: "Renaissance & Henri II",
      description: "Coffres, dressoirs, cabinets, tables monastères. Bois sculpté, noyer, chêne massif.",
    },
    {
      style: "Louis XIII & Louis XIV",
      description: "Armoires, tables, fauteuils. Bois tourné, marqueterie Boulle, dorures.",
    },
    {
      style: "Directoire & Consulat",
      description: "Lignes épurées, acajou, bronze, influence antique. Transition vers l'Empire.",
    },
    {
      style: "Charles X & Louis-Philippe",
      description: "Bois clairs, formes simples, confort bourgeois. Acajou, citronnier, loupe d'orme.",
    },
    {
      style: "Napoléon III",
      description: "Éclectisme, marqueterie, bronzes, capitons. Meubles de salon et de chambre richement décorés.",
    },
    {
      style: "Années 1950-1960",
      description: "Design scandinave, modernisme français. Perriand, Prouvé, Mouille, Guariche.",
    },
  ]

  const avantages = [
    {
      icon: <Armchair className="w-6 h-6" />,
      title: "Expertise Certifiée",
      description: "Expert diplômé en mobilier ancien avec plus de 20 ans d'expérience dans l'antiquité",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleurs Prix",
      description: "Évaluation juste basée sur les résultats de ventes aux enchères et le marché de l'art",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transaction Sécurisée",
      description: "Paiement immédiat en espèces ou virement bancaire. Contrat de vente en bonne et due forme",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Déplacement Gratuit",
      description: "Nous venons chez vous gratuitement partout en Nouvelle-Aquitaine pour estimer vos meubles",
    },
  ]

  const faq = [
    {
      question: "Comment déterminez-vous la valeur d'un meuble ancien ?",
      answer:
        "Nous évaluons l'époque, le style, l'état de conservation, la rareté, la signature éventuelle, les matériaux utilisés et les résultats de ventes comparables aux enchères. Chaque meuble est unique et mérite une expertise personnalisée.",
    },
    {
      question: "Achetez-vous les meubles qui nécessitent une restauration ?",
      answer:
        "Oui, nous achetons également les meubles nécessitant une restauration. Le prix tiendra compte des travaux à prévoir, mais nous sommes intéressés par toutes les pièces authentiques d'époque.",
    },
    {
      question: "Comment reconnaissez-vous l'authenticité d'un meuble ancien ?",
      answer:
        "Nous examinons les techniques de fabrication, les assemblages, les essences de bois, les ferrures, les estampilles éventuelles, la patine naturelle et tous les indices permettant de dater et d'authentifier le meuble.",
    },
    {
      question: "Faut-il avoir des documents ou certificats d'authenticité ?",
      answer:
        "Les documents augmentent la valeur et facilitent l'expertise, mais ce n'est pas obligatoire. Notre expert peut authentifier et dater un meuble grâce à son examen approfondi.",
    },
    {
      question: "Vous déplacez-vous pour un seul meuble ?",
      answer:
        "Oui, nous nous déplaçons même pour un seul meuble si celui-ci présente un intérêt. N'hésitez pas à nous envoyer des photos par email ou WhatsApp pour une première estimation.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="/antique-furniture-hero-background.jpg"
            alt="Fond de meubles anciens"
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
              <Armchair className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Meubles Anciens & Mobilier d'Époque
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center md:whitespace-nowrap">
              Expert en mobilier ancien Louis XV, Louis XVI, Art Déco et toutes époques en Nouvelle-Aquitaine.
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
                Votre Expert en Mobilier Ancien
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Fort de plus de 20 ans d'expérience dans le domaine de l'antiquité et du mobilier ancien, nous vous
                proposons un service d'expertise et de rachat professionnel pour tous vos meubles d'époque. Notre expert
                se déplace gratuitement à votre domicile partout en Nouvelle-Aquitaine pour évaluer vos pièces, qu'il
                s'agisse d'un meuble isolé ou d'une succession complète, et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/antique-wooden-furniture.jpg"
                  alt="Commode ancienne Louis XV en bois précieux avec marqueterie et bronze doré - Rachat meubles anciens Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/design-mode/1.jpg"
                  alt="Mobilier d'époque et meubles anciens de style : armoires, secrétaires, fauteuils - Expert antiquaire Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Meubles Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Meubles Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de meubles anciens et mobilier d'époque, du XVIe siècle au design du XXe siècle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {meublesTypes.map((type, index) => (
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

      {/* Styles et Époques Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/antique-wooden-furniture.jpg"
            alt="Fond élégant de mobilier ancien et meubles d'époque - Expertise et rachat antiquités Nouvelle-Aquitaine"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Home className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Styles & Époques
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée de tous les styles et époques du mobilier français et européen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stylesEpoques.map((style, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{style.style}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{style.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Meubles Signés & Estampillés</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous accordons une attention particulière aux meubles signés ou estampillés par les grands ébénistes et
              menuisiers. Une estampille de maître (RVLC, BVRB, Riesener, Weisweiler, etc.) augmente considérablement la
              valeur d'un meuble. Notre expertise nous permet d'identifier et d'authentifier ces signatures précieuses.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Un service professionnel, transparent et sécurisé pour la vente de vos meubles anciens.
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
                    "Par téléphone, email ou formulaire. Décrivez vos meubles et envoyez des photos (vue d'ensemble, détails, dessous, arrière).",
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
                    "Examen détaillé : style, époque, essence de bois, état de conservation, restaurations, estampilles. Proposition de prix immédiate.",
                },
                {
                  step: "4",
                  title: "Enlèvement et paiement",
                  description:
                    "Si vous acceptez notre offre, nous organisons l'enlèvement et le paiement immédiat en espèces ou virement bancaire.",
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
                Tout ce que vous devez savoir sur le rachat de meubles anciens.
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
            <Armchair className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Vos Meubles Anciens ?
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
