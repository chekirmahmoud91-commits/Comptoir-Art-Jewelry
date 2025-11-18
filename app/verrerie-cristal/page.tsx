import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Wine, Sparkles, Award, Shield, Clock, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Verrerie & Cristal Anciens en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de verrerie ancienne, cristal Baccarat, Lalique, Saint-Louis, Daum en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat verrerie, achat cristal, Baccarat, Lalique, Saint-Louis, Daum, verrerie ancienne, cristal ancien, estimation verrerie, expert cristal, Nouvelle-Aquitaine",
}

export default function VerrerieCristalPage() {
  const verrerieTypes = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cristal de Prestige",
      description:
        "Baccarat, Lalique, Saint-Louis, Daum. Services de table, vases, coupes, lustres et objets décoratifs en cristal.",
      items: ["Baccarat", "Lalique", "Saint-Louis", "Daum Nancy"],
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Services de Table",
      description:
        "Verres à vin, flûtes à champagne, carafes, services complets. Cristal taillé, gravé ou soufflé bouche.",
      items: ["Verres à vin et champagne", "Carafes et decanters", "Services complets", "Pièces dépareillées"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Objets d'Art",
      description:
        "Vases, coupes, sculptures, presse-papiers, flacons de parfum. Pièces signées et numérotées des grandes cristalleries.",
      items: ["Vases et coupes", "Sculptures en cristal", "Presse-papiers", "Flacons de parfum"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verrerie Ancienne",
      description:
        "Verrerie du XVIIIe et XIXe siècle, opaline, verre émaillé, verre soufflé. Pièces rares et de collection.",
      items: ["Opaline", "Verre émaillé", "Verre soufflé", "Verrerie de Bohème"],
    },
  ]

  const marques = [
    {
      brand: "Baccarat",
      description: "La plus prestigieuse cristallerie française. Services Harcourt, Massena, Nancy, objets d'art.",
    },
    {
      brand: "Lalique",
      description: "Créations Art Nouveau et Art Déco. Vases, sculptures, bijoux en cristal satiné.",
    },
    {
      brand: "Saint-Louis",
      description: "Cristallerie royale depuis 1767. Services de table, lustres, objets décoratifs.",
    },
    {
      brand: "Daum",
      description: "École de Nancy. Pâte de verre, cristal gravé à l'acide, créations contemporaines.",
    },
    {
      brand: "Val Saint Lambert",
      description: "Prestigieuse cristallerie belge fondée en 1826. Cristal taillé, gravé et coloré de haute qualité.",
    },
    {
      brand: "Autres Cristalleries",
      description: "Waterford, Bohème, Murano, Gallé, Legras, Cristal de Sèvres.",
    },
  ]

  const avantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Expertise Spécialisée",
      description: "Expert en verrerie et cristal ancien avec connaissance approfondie des signatures et techniques",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Évaluation Juste",
      description: "Prix basés sur la rareté, l'état, la signature et la cote actuelle du marché",
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
      question: "Comment identifier une pièce en cristal ?",
      answer:
        "Le cristal se distingue du verre par sa sonorité claire, sa transparence exceptionnelle et sa brillance. Il contient au moins 24% de plomb. Les pièces de qualité portent généralement une signature gravée.",
    },
    {
      question: "Achetez-vous les pièces ébréchées ou cassées ?",
      answer:
        "Nous achetons les pièces en bon état. Les petits éclats peuvent être acceptés selon la rareté de la pièce. Les pièces cassées ne sont généralement pas rachetées sauf si très rares.",
    },
    {
      question: "Comment reconnaître un vrai Baccarat ou Lalique ?",
      answer:
        "Les pièces authentiques portent une signature gravée (Baccarat, Lalique France). Nous vérifions également le style, la qualité du cristal, les techniques de fabrication et comparons avec nos références.",
    },
    {
      question: "Quelle est la valeur d'un service de verres ancien ?",
      answer:
        "La valeur dépend de la marque, du modèle, de l'état et du nombre de pièces. Un service complet Baccarat ou Saint-Louis en bon état peut valoir plusieurs milliers d'euros.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/crystal-glassware-hero-background.jpg"
            alt="Crystal glassware background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 35 L20 42 L23 32 L15 25 L25 25 Z' fill='%23C4A053' fillOpacity='1'/%3E%3C/svg%3E")`,
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
              Rachat de Verrerie & Cristal Anciens
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en cristal Baccarat, Lalique, Saint-Louis et verrerie ancienne en Nouvelle-Aquitaine.
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
                Votre Expert en Verrerie et Cristal Anciens
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Spécialisé dans l'expertise et le rachat de verrerie ancienne et de cristal de prestige, nous vous
                proposons un service professionnel pour l'évaluation de vos pièces Baccarat, Lalique, Saint-Louis, Daum
                et autres cristalleries renommées. Notre expert se déplace gratuitement à votre domicile partout en
                Nouvelle-Aquitaine pour examiner vos objets et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/crystal-glassware-baccarat-lalique.jpg"
                  alt="Collection de cristal de prestige Baccarat et Lalique : verres, vases et objets d'art - Rachat au meilleur prix"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/antique-crystal-collection-services.jpg"
                  alt="Services de table en cristal ancien et verrerie de collection - Expert rachat Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Verrerie Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Verrerie & Cristal Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de verrerie ancienne et de cristal, des grandes cristalleries aux pièces rares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {verrerieTypes.map((type, index) => (
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
            src="/crystal-pattern-background-elegant.jpg"
            alt="Fond élégant de motifs de cristal et verrerie de luxe - Expertise et rachat cristal ancien"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Grandes Cristalleries & Marques
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des plus prestigieuses cristalleries françaises et européennes.
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
              Un service professionnel et transparent pour la vente de votre verrerie et cristal anciens.
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
                Tout ce que vous devez savoir sur le rachat de verrerie et cristal.
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
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Votre Verrerie ou Cristal ?
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
