import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Palette, Award, Shield, Clock, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Sculptures & Bronzes Anciens en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de sculptures anciennes, bronzes d'art, statues et bustes en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat sculptures, achat bronzes, sculptures anciennes, bronzes d'art, statues, bustes, estimation sculptures, expert sculpteur, Nouvelle-Aquitaine",
}

export default function SculpturesBronzesPage() {
  const sculpturesTypes = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bronzes d'Art",
      description:
        "Bronzes signés des grands sculpteurs français et européens. Patine d'origine, fonte d'art, épreuves numérotées.",
      items: ["Bronzes signés", "Patine d'origine", "Fonte d'art ancienne", "Épreuves numérotées"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sculptures Anciennes",
      description:
        "Sculptures en marbre, pierre, bois, terre cuite. Époques diverses : Renaissance, XVIIIe, XIXe siècle.",
      items: ["Marbre et pierre", "Sculptures en bois", "Terre cuite", "Plâtre patiné"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Statues & Bustes",
      description:
        "Statues décoratives, bustes de personnages historiques, sculptures religieuses, ornements architecturaux.",
      items: ["Statues décoratives", "Bustes historiques", "Art religieux", "Ornements"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sculptures Modernes",
      description: "Œuvres du XXe siècle, sculptures contemporaines signées, pièces uniques d'artistes reconnus.",
      items: ["Art moderne", "Sculptures contemporaines", "Pièces uniques", "Artistes reconnus"],
    },
  ]

  const sculpteurs = [
    {
      name: "Auguste Rodin",
      description: "Le Penseur, Le Baiser, Balzac, Bourgeois de Calais",
    },
    {
      name: "Antoine-Louis Barye",
      description: "Sculptures animalières, bronzes de chasse, scènes de combat",
    },
    {
      name: "Camille Claudel",
      description: "L'Âge mûr, La Valse, Sakountala, bustes expressifs",
    },
    {
      name: "Alfred Boucher",
      description: "Sculptures académiques, bustes, monuments publics",
    },
    {
      name: "Emmanuel Frémiet",
      description: "Jeanne d'Arc, sculptures équestres, animaux",
    },
    {
      name: "Autres Sculpteurs",
      description: "Carpeaux, Dalou, Maillol, Bourdelle, Pompon, Bugatti",
    },
  ]

  const avantages = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Expertise Certifiée",
      description: "Expert diplômé en histoire de l'art et sculpture avec plus de 15 ans d'expérience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleurs Prix",
      description: "Nous proposons les prix les plus justes basés sur les cotes actuelles du marché de l'art",
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
      question: "Comment authentifier une sculpture en bronze ?",
      answer:
        "Nous vérifions la signature, la patine, la technique de fonte, le poids et les dimensions. Nous utilisons notre expertise et des outils professionnels pour garantir l'authenticité.",
    },
    {
      question: "Achetez-vous les sculptures abîmées ou restaurées ?",
      answer:
        "Oui, nous achetons les sculptures même si elles sont abîmées ou ont été restaurées. Le prix sera ajusté en fonction de l'état et de la qualité de la restauration.",
    },
    {
      question: "Comment est calculé le prix d'une sculpture ?",
      answer:
        "Le prix dépend de plusieurs facteurs : l'artiste, l'époque, l'état de conservation, la rareté, la provenance et la cote actuelle sur le marché de l'art.",
    },
    {
      question: "Faut-il avoir un certificat d'authenticité ?",
      answer:
        "Un certificat augmente la valeur, mais ce n'est pas obligatoire. Notre expert peut authentifier la pièce grâce à son expertise et ses connaissances.",
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
        <div className="absolute inset-0 opacity-20">
          <img
            src="/bronze-sculptures-hero-background.jpg"
            alt="Bronze sculptures background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-5">
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
              Rachat de Sculptures & Bronzes Anciens
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en sculptures anciennes, bronzes d'art et statues en Nouvelle-Aquitaine.
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
                Votre Expert en Sculptures et Bronzes d'Art
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 15 ans d'expérience dans le domaine de la sculpture et des bronzes d'art, nous vous
                proposons un service d'expertise et de rachat professionnel pour toutes vos œuvres sculptées. Notre
                expert diplômé en histoire de l'art se déplace gratuitement à votre domicile partout en
                Nouvelle-Aquitaine pour évaluer vos pièces et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/bronze-sculpture-art-statue-antique.jpg"
                  alt="Sculpture en bronze d'art ancien avec patine d'origine - Rachat au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/marble-sculpture-classical-statue.jpg"
                  alt="Sculpture en marbre classique et statues anciennes - Expert rachat sculptures Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Sculptures Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Sculptures Achetées
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de sculptures, qu'elles soient anciennes, modernes, signées ou anonymes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sculpturesTypes.map((type, index) => (
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

      {/* Sculpteurs Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/sculpture-workshop-bronze-casting.jpg"
            alt="Atelier de sculpture et fonte de bronze - Expertise et rachat sculptures anciennes"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Palette className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Sculpteurs Recherchés
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise spécialisée des plus grands sculpteurs français et européens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sculpteurs.map((sculpteur, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{sculpteur.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{sculpteur.description}</p>
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
              Un service professionnel, transparent et sécurisé pour la vente de vos sculptures.
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
                    "Par téléphone, email ou formulaire. Décrivez vos sculptures et envoyez des photos si possible.",
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
                    "Examen détaillé de vos pièces : vérification de la signature, de la patine, de l'état. Proposition de prix immédiate.",
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
                Tout ce que vous devez savoir sur le rachat de sculptures et bronzes.
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
              Prêt à Vendre Vos Sculptures ?
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
