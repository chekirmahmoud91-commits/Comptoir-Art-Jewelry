import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Watch, Clock, Award, Shield, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Horlogerie Ancienne & Montres de Collection | Estimation Gratuite",
  description:
    "Expert en rachat d'horlogerie ancienne, pendules, montres de poche, montres à gousset en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat horlogerie, achat pendules anciennes, montres de poche, montres à gousset, horlogerie ancienne, pendules comtoises, cartel, estimation horlogerie, Nouvelle-Aquitaine",
}

export default function HorlogeriePage() {
  const horlogerieTypes = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pendules & Horloges Anciennes",
      description:
        "Pendules comtoises, pendules de cheminée, horloges murales, régulateurs. XVIIIe, XIXe et XXe siècles.",
      items: ["Pendules comtoises", "Pendules de cheminée", "Horloges murales", "Régulateurs de précision"],
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: "Montres de Poche & Gousset",
      description:
        "Montres à gousset en or, argent, savonnettes, lépines. Mouvements mécaniques de qualité, complications.",
      items: ["Montres en or 18k", "Montres en argent", "Savonnettes", "Montres à complications"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cartels & Pendules de Prestige",
      description:
        "Cartels Louis XV, Louis XVI, Empire. Bronze doré, marqueterie, porcelaine. Signatures prestigieuses.",
      items: ["Cartels Louis XV/XVI", "Pendules Empire", "Bronze doré", "Porcelaine de Sèvres"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Horlogerie de Collection",
      description:
        "Pièces rares et de collection. Automates, pendules mystérieuses, horloges astronomiques, complications.",
      items: ["Automates", "Pendules mystérieuses", "Horloges astronomiques", "Pièces exceptionnelles"],
    },
  ]

  const marques = [
    {
      brand: "Horlogers Français",
      description: "Leroy, Bréguet, Janvier, Raingo, Japy Frères, Vincenti, Marti.",
    },
    {
      brand: "Horlogers Suisses",
      description: "Patek Philippe, Vacheron Constantin, Audemars Piguet, Omega (montres de poche).",
    },
    {
      brand: "Horlogers Anglais",
      description: "Thomas Tompion, George Graham, John Harrison, Arnold & Dent.",
    },
    {
      brand: "Horlogers Allemands",
      description: "A. Lange & Söhne, Glashütte, Junghans, Gustav Becker.",
    },
    {
      brand: "Manufactures Prestigieuses",
      description: "Cartier, Hermès, Tiffany & Co., Fabergé (pendules et horloges).",
    },
    {
      brand: "Horlogers Italiens",
      description: "Panerai, Officine Panerai, Girard-Perregaux, Zenith (montres historiques).",
    },
  ]

  const avantages = [
    {
      icon: <Watch className="w-6 h-6" />,
      title: "Expertise Horlogère",
      description: "Expert en horlogerie ancienne avec connaissance approfondie des mécanismes et signatures",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Évaluation Précise",
      description: "Prix basés sur la rareté, l'état, le mécanisme et la cote actuelle du marché",
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
      question: "Achetez-vous les pendules qui ne fonctionnent plus ?",
      answer:
        "Oui, nous achetons les pendules et horloges même si elles ne fonctionnent plus. La valeur dépendra de l'état général, de la signature, de l'époque et de la possibilité de restauration.",
    },
    {
      question: "Comment identifier une pendule comtoise authentique ?",
      answer:
        "Une vraie comtoise possède un mouvement en fer forgé, un balancier en laiton, et souvent une signature du maître horloger. Le cadran est généralement émaillé avec des décors peints. Nous vérifions tous ces éléments lors de l'expertise.",
    },
    {
      question: "Quelle est la valeur d'une montre de poche en or ?",
      answer:
        "La valeur dépend du poids d'or, de la qualité du mouvement, de la signature, des complications et de l'état. Une montre simple en or 18k vaut au minimum le poids de l'or, mais une pièce signée ou à complications peut valoir beaucoup plus.",
    },
    {
      question: "Faut-il avoir la clé de remontage ?",
      answer:
        "La clé d'origine est un plus mais n'est pas indispensable. Nous pouvons évaluer la pièce sans la clé, et des clés de remplacement existent.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/luxury-watches-hero-background.jpg"
            alt="Luxury watches background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%23C4A053' strokeWidth='2'/%3E%3Cline x1='30' y1='30' x2='30' y2='15' stroke='%23C4A053' strokeWidth='2'/%3E%3Cline x1='30' y1='30' x2='42' y2='30' stroke='%23C4A053' strokeWidth='2'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Clock className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat d'Horlogerie Ancienne
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en pendules, horloges anciennes et montres de poche en Nouvelle-Aquitaine.
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
                Votre Expert en Horlogerie Ancienne
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Spécialisé dans l'expertise et le rachat d'horlogerie ancienne, nous vous proposons un service
                professionnel pour l'évaluation de vos pendules, horloges, montres de poche et pièces d'horlogerie de
                collection. Notre expert se déplace gratuitement à votre domicile partout en Nouvelle-Aquitaine pour
                examiner vos pièces et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/antique-clock-pendulum-comtoise.jpg"
                  alt="Pendule comtoise ancienne et horloges de collection - Rachat au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/pocket-watch-gold-vintage-collection.jpg"
                  alt="Montres de poche anciennes en or et montres à gousset de collection - Expert rachat horlogerie"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Horlogerie Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types d'Horlogerie Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types d'horlogerie ancienne, des pendules comtoises aux pièces de collection rares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {horlogerieTypes.map((type, index) => (
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

      {/* Marques Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/clock-mechanism-gears-vintage.jpg"
            alt="Mécanisme d'horlogerie ancienne avec engrenages et rouages - Expertise horlogerie de collection"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Watch className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Horlogers & Manufactures Prestigieuses
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des plus grands horlogers français, suisses et européens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {marques.map((marque, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{marque.brand}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{marque.description}</p>
              </div>
            ))}
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
              Un service professionnel et transparent pour la vente de votre horlogerie ancienne.
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

      {/* FAQ Section */}
      <section className="py-16 bg-white md:py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Questions Fréquentes
              </h2>
              <p className="text-gray-600 text-lg text-center">
                Tout ce que vous devez savoir sur le rachat d'horlogerie ancienne.
              </p>
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
      <section className="py-16 bg-gray-50 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Votre Horlogerie Ancienne ?
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
