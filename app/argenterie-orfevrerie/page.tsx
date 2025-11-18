import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Award, Coins, Shield, Clock, TrendingUp, Star, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Argenterie & Orfèvrerie Ancienne en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat d'argenterie et orfèvrerie ancienne : couverts, services de table, objets en argent massif en Nouvelle-Aquitaine. Estimation gratuite à domicile.",
  keywords:
    "rachat argenterie, achat argent massif, vente couverts argent, orfèvrerie ancienne, Christofle, Puiforcat, estimation argenterie, Nouvelle-Aquitaine",
}

export default function ArgenterieOrfevreriePage() {
  const argenterieTypes = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Couverts & Ménagères",
      description:
        "Ménagères complètes, couverts de service, couverts à poisson, à dessert. Argent massif 950 ou 800, vermeil.",
      items: ["Ménagères complètes", "Couverts de service", "Couverts à poisson", "Services à découper"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Services de Table",
      description:
        "Services à thé et café, plateaux, soupières, légumiers, saucières. Pièces signées des grandes maisons d'orfèvrerie.",
      items: ["Services à thé/café", "Plateaux en argent", "Soupières et légumiers", "Huiliers et vinaigriers"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Objets Décoratifs",
      description:
        "Candélabres, flambeaux, coupes, vases, cadres, miroirs. Pièces d'orfèvrerie religieuse et objets d'art.",
      items: ["Candélabres et flambeaux", "Coupes et vases", "Cadres et miroirs", "Objets religieux"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Bijoux en Argent",
      description:
        "Bijoux anciens et modernes en argent massif, vermeil. Bracelets, colliers, bagues, broches signées.",
      items: ["Bijoux anciens", "Bijoux signés", "Vermeil", "Argent et pierres"],
    },
  ]

  const orfevresRecherches = [
    {
      maison: "Christofle",
      description: "Modèles Marly, Malmaison, Perles, Spatours, Rubans",
    },
    {
      maison: "Puiforcat",
      description: "Modèles Louis XVI, Empire, Régence, Art Déco",
    },
    {
      maison: "Odiot",
      description: "Orfèvre de Napoléon, pièces Empire et Restauration",
    },
    {
      maison: "Cardeilhac",
      description: "Modèles Art Nouveau et Art Déco, pièces signées",
    },
    {
      maison: "Boin-Taburet",
      description: "Orfèvrerie fine, modèles classiques et modernes",
    },
    {
      maison: "Autres Maisons",
      description: "Tétard, Hénin, Aucoc, Ravinet d'Enfert, Fray",
    },
  ]

  const avantages = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Expertise des Poinçons",
      description: "Identification précise des poinçons de maître, de garantie et de titre pour une estimation exacte",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleur Prix",
      description: "Estimation basée sur le poids d'argent, la rareté du modèle et la cote de l'orfèvre",
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
      question: "Comment reconnaître l'argent massif du métal argenté ?",
      answer:
        "L'argent massif porte des poinçons officiels français : Minerve (argent 925/1000) ou tête d'aigle (argent 800/1000). Le métal argenté porte généralement la mention 'EP' (électro-plaqué), 'plaqué argent' ou simplement le nom du fabricant sans poinçon de titre.",
    },
    {
      question: "Quelle est la valeur d'une ménagère en argent ?",
      answer:
        "La valeur dépend de plusieurs facteurs : le poids d'argent (une ménagère complète pèse entre 3 et 6 kg), l'orfèvre (Christofle, Puiforcat valent plus), le modèle (certains sont très recherchés), l'état et la complétude. Une ménagère peut valoir de 1000€ à plus de 10000€.",
    },
    {
      question: "Faut-il nettoyer l'argenterie avant estimation ?",
      answer:
        "Non, il est préférable de ne pas nettoyer l'argenterie avant l'expertise. Un nettoyage inapproprié peut endommager les poinçons, effacer des détails ou altérer la patine naturelle, ce qui peut réduire la valeur de la pièce.",
    },
    {
      question: "Achetez-vous l'argenterie abîmée ou incomplète ?",
      answer:
        "Oui, nous achetons l'argenterie même abîmée, cabossée ou incomplète. Le prix sera calculé principalement en fonction du poids d'argent, mais les pièces signées de grandes maisons conservent une valeur supplémentaire même abîmées.",
    },
    {
      question: "Comment est calculé le prix de rachat de l'argenterie ?",
      answer:
        "Le prix est calculé en fonction du poids d'argent pur (après déduction du titre), du cours actuel de l'argent, de la signature de l'orfèvre, de la rareté du modèle et de l'état de conservation. Les pièces signées de grandes maisons ont une valeur supérieure au poids d'argent.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/silverware-hero-background.jpg"
            alt="Fond d'argenterie et orfèvrerie"
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
              <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat d'Argenterie & Orfèvrerie
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center md:whitespace-nowrap">
              Expert en argenterie ancienne et orfèvrerie en Nouvelle-Aquitaine.
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
                Votre Expert en Argenterie et Orfèvrerie
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 15 ans d'expérience dans le domaine de l'argenterie et de l'orfèvrerie, nous vous proposons
                un service professionnel d'expertise et de rachat pour tous vos objets en argent massif, vermeil ou
                métal argenté. Notre expert se déplace gratuitement à votre domicile partout en Nouvelle-Aquitaine pour
                examiner vos pièces, identifier les poinçons et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/silver-cutlery-antique-collection.jpg"
                  alt="Collection de couverts en argent massif anciens - Rachat argenterie au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/silver-teapot-service-antique.jpg"
                  alt="Service à thé en argent massif ancien - Expert rachat orfèvrerie Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Argenterie Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types d'Argenterie Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types d'argenterie et d'orfèvrerie, ancienne ou moderne, signée ou non signée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {argenterieTypes.map((type, index) => (
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

      {/* Orfèvres Recherchés Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/silver-pattern-background.jpg"
            alt="Fond élégant de motifs d'argenterie et orfèvrerie - Expertise et rachat argenterie ancienne"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Orfèvres & Maisons Recherchés
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Nous recherchons activement les pièces des grandes maisons d'orfèvrerie françaises et internationales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {orfevresRecherches.map((orfevre, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{orfevre.maison}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{orfevre.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Argenterie Régionale</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous achetons également l'argenterie des orfèvres régionaux et provinciaux, ainsi que les pièces
              étrangères (anglaises, allemandes, italiennes). Même si votre orfèvre n'est pas listé ci-dessus, n'hésitez
              pas à nous contacter pour une estimation gratuite.
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
              Un service professionnel, transparent et sécurisé pour la vente de votre argenterie.
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
                    "Par téléphone, email ou formulaire. Décrivez votre argenterie et envoyez des photos des poinçons si possible.",
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
                    "Examen détaillé : identification des poinçons, pesée, vérification de l'état. Proposition de prix immédiate basée sur le marché actuel.",
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
                Tout ce que vous devez savoir sur le rachat d'argenterie.
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
            <Sparkles className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Votre Argenterie ?
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
