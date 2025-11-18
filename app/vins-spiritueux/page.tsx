import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Wine, Award, Shield, Clock, TrendingUp, Star, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Vins & Spiritueux de Collection en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de grands crus, vins rares, whiskies et spiritueux de collection en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat vins, achat grands crus, vente vins rares, whiskies collection, spiritueux anciens, estimation cave, expert vins, Nouvelle-Aquitaine, Bordeaux",
}

export default function VinsSpiritueuxPage() {
  const vinsTypes = [
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Grands Crus de Bordeaux",
      description:
        "Châteaux prestigieux du Médoc, Pomerol, Saint-Émilion. Premiers Crus Classés et vins d'exception de toutes les appellations bordelaises.",
      items: [
        "Pauillac, Margaux, Saint-Julien",
        "Pomerol, Saint-Émilion",
        "Pessac-Léognan, Graves",
        "Sauternes, Barsac",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Bourgogne & Champagne",
      description:
        "Grands crus de Bourgogne, Domaine de la Romanée-Conti, champagnes millésimés et cuvées de prestige des grandes maisons.",
      items: ["Romanée-Conti, Chambertin", "Montrachet, Corton", "Champagnes millésimés", "Cuvées de prestige"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Whiskies Rares",
      description:
        "Single malts écossais, whiskies japonais, éditions limitées, embouteillages indépendants et fûts exceptionnels.",
      items: ["Single malts écossais", "Whiskies japonais", "Éditions limitées", "Embouteillages rares"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Spiritueux de Collection",
      description:
        "Cognacs anciens, armagnacs millésimés, rhums vieux, calvados d'exception et spiritueux rares du monde entier.",
      items: ["Cognacs XO et hors d'âge", "Armagnacs millésimés", "Rhums vieux", "Calvados anciens"],
    },
  ]

  const regionsPrestigieuses = [
    {
      region: "Bordeaux",
      description: "Pauillac, Margaux, Saint-Julien, Pomerol, Saint-Émilion, Pessac-Léognan, Sauternes",
    },
    {
      region: "Bourgogne",
      description: "Romanée-Conti, Chambertin, Montrachet, Corton, Vosne-Romanée, Gevrey-Chambertin",
    },
    {
      region: "Champagne",
      description: "Dom Pérignon, Krug, Cristal, Salon, Bollinger, Taittinger millésimés",
    },
    {
      region: "Vallée du Rhône",
      description: "Hermitage, Côte-Rôtie, Châteauneuf-du-Pape, Condrieu",
    },
    {
      region: "Whiskies",
      description: "Macallan, Bowmore, Ardbeg, Yamazaki, Hibiki, Karuizawa",
    },
    {
      region: "Spiritueux",
      description: "Hennessy Paradis, Rémy Martin Louis XIII, Armagnac Darroze, Rhum Clément",
    },
  ]

  const avantages = [
    {
      icon: <Wine className="w-6 h-6" />,
      title: "Expertise Œnologique",
      description: "Expert diplômé en œnologie avec plus de 15 ans d'expérience dans les vins et spiritueux",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleurs Prix",
      description: "Nous proposons les prix les plus justes basés sur les cotes actuelles du marché",
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
      question: "Comment est évaluée la valeur d'une bouteille de vin ?",
      answer:
        "La valeur dépend de plusieurs critères : appellation, millésime, château ou domaine, état de conservation (niveau, étiquette, capsule), provenance et cote actuelle sur le marché. Notre expert examine tous ces éléments pour vous proposer un prix juste.",
    },
    {
      question: "Achetez-vous des bouteilles avec un niveau bas ?",
      answer:
        "Oui, nous achetons des bouteilles même avec un niveau bas, surtout pour les grands crus et millésimes rares. Le prix sera ajusté en fonction du niveau, mais certaines bouteilles conservent une valeur importante malgré ce défaut.",
    },
    {
      question: "Faut-il avoir une cave complète pour vous contacter ?",
      answer:
        "Non, nous achetons aussi bien des caves entières que des bouteilles isolées. Même une seule bouteille rare peut avoir une grande valeur. N'hésitez pas à nous contacter pour une estimation.",
    },
    {
      question: "Comment savoir si mes bouteilles ont de la valeur ?",
      answer:
        "Recherchez les grands châteaux (Bordeaux), domaines prestigieux (Bourgogne), millésimes exceptionnels, et whiskies rares. Mais seul un expert peut déterminer la valeur exacte. Contactez-nous pour une estimation gratuite.",
    },
    {
      question: "Achetez-vous des spiritueux ouverts ?",
      answer:
        "Pour les spiritueux, nous achetons principalement des bouteilles fermées et scellées. Cependant, pour certains cognacs, armagnacs ou whiskies très rares, nous pouvons étudier l'achat de bouteilles ouvertes au cas par cas.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/wine-spirits-hero-background.jpg"
            alt="Vins et spiritueux de collection - Fond hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='%23C4A053' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Wine className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Vins & Spiritueux de Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en grands crus, vins rares et spiritueux d'exception en Nouvelle-Aquitaine.
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
                <span className="text-sm font-medium whitespace-nowrap">Expert œnologue</span>
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
                Votre Expert en Vins et Spiritueux de Collection
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 15 ans d'expérience dans le domaine de l'œnologie et des spiritueux de prestige, nous vous
                proposons un service d'expertise et de rachat professionnel pour tous vos grands crus, vins rares et
                spiritueux d'exception. Notre expert diplômé se déplace gratuitement à votre domicile partout en
                Nouvelle-Aquitaine pour évaluer votre cave et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/wine-bottles-collection-vintage.jpg"
                  alt="Collection de vins rares et grands crus - Rachat au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/rare-spirits-collection-cognac-whisky.jpg"
                  alt="Spiritueux de collection et whiskies rares - Expert rachat vins Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Vins Section */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Vins & Spiritueux Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de vins et spiritueux de collection, quelle que soit leur origine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vinsTypes.map((type, index) => (
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

      {/* Régions Prestigieuses Section */}
      <section className="py-16 md:py-24 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/wine-cellar-vintage-bottles.jpg"
            alt="Cave à vin et bouteilles anciennes - Expertise régions prestigieuses"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Régions & Marques Prestigieuses
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise approfondie des plus grandes appellations et marques de vins et spiritueux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regionsPrestigieuses.map((region, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{region.region}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Un service professionnel, transparent et sécurisé pour la vente de vos vins et spiritueux.
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
      <section className="py-16 bg-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Questions Fréquentes
              </h2>
              <p className="text-gray-600 text-lg text-center">
                Tout ce que vous devez savoir sur le rachat de vins et spiritueux.
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
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Wine className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Vos Vins & Spiritueux ?
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
