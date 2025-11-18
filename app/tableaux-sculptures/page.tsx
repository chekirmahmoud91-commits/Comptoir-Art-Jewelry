import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Palette, Award, Shield, Clock, TrendingUp, Star, Frame } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Tableaux & Sculptures Anciens en Nouvelle-Aquitaine | Expert Art",
  description:
    "Expert en rachat de tableaux anciens, peintures, sculptures et œuvres d'art en Nouvelle-Aquitaine. Estimation gratuite à domicile par expert diplômé. Paiement immédiat.",
  keywords:
    "rachat tableaux, achat peintures anciennes, sculptures, œuvres d'art, expert art, estimation tableaux, peinture XIXe, art moderne, Nouvelle-Aquitaine",
}

export default function TableauxSculpturesPage() {
  const artTypes = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Peintures Anciennes",
      description:
        "Tableaux du XVIIe au XIXe siècle, écoles françaises et européennes, peintures à l'huile, aquarelles, gouaches.",
      items: ["École française", "École italienne", "École flamande", "Peintures religieuses"],
    },
    {
      icon: <Frame className="w-8 h-8" />,
      title: "Art Moderne & Contemporain",
      description:
        "Œuvres du XXe siècle, impressionnisme, cubisme, surréalisme, art abstrait. Artistes cotés et émergents.",
      items: ["Impressionnisme", "Art moderne", "Art contemporain", "Artistes cotés"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sculptures",
      description:
        "Sculptures en bronze, marbre, terre cuite, bois. Œuvres signées et anonymes du XVIIIe au XXe siècle.",
      items: ["Bronze d'art", "Marbre sculpté", "Terre cuite", "Bois sculpté"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Dessins & Estampes",
      description: "Dessins originaux, gravures, lithographies, eaux-fortes. Œuvres signées et numérotées.",
      items: ["Dessins anciens", "Gravures", "Lithographies", "Estampes japonaises"],
    },
  ]

  const artistesRecherches = [
    "École de Barbizon (Corot, Millet, Rousseau)",
    "Impressionnistes (Monet, Renoir, Pissarro, Sisley)",
    "Post-impressionnistes (Cézanne, Van Gogh, Gauguin)",
    "Fauves et Cubistes (Matisse, Braque, Picasso)",
    "École de Paris (Soutine, Modigliani, Chagall)",
    "Artistes régionaux et locaux cotés",
  ]

  const avantages = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Expert Diplômé",
      description: "Historien d'art diplômé avec plus de 15 ans d'expérience en expertise d'œuvres d'art",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cotation Actualisée",
      description: "Évaluation basée sur les résultats de ventes aux enchères et le marché de l'art actuel",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentification",
      description: "Analyse approfondie : signature, technique, style, provenance, état de conservation",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Déplacement Gratuit",
      description: "Expertise gratuite à votre domicile partout en Nouvelle-Aquitaine",
    },
  ]

  const faq = [
    {
      question: "Comment déterminez-vous la valeur d'un tableau ?",
      answer:
        "Nous analysons plusieurs critères : l'artiste et sa cotation, l'époque, la technique, les dimensions, l'état de conservation, la provenance et les résultats de ventes comparables aux enchères.",
    },
    {
      question: "Achetez-vous des tableaux non signés ?",
      answer:
        "Oui, nous achetons également des tableaux non signés s'ils présentent un intérêt artistique, historique ou décoratif. L'évaluation se base alors sur l'école, l'époque et la qualité d'exécution.",
    },
    {
      question: "Faut-il faire restaurer un tableau avant de le vendre ?",
      answer:
        "Non, il est préférable de ne pas faire restaurer avant notre expertise. Une restauration mal faite peut diminuer la valeur. Nous évaluons l'œuvre dans son état actuel.",
    },
    {
      question: "Achetez-vous des sculptures abîmées ?",
      answer:
        "Oui, nous achetons des sculptures même si elles présentent des manques ou des restaurations. Le prix sera ajusté en fonction de l'état et de la possibilité de restauration.",
    },
    {
      question: "Comment vérifiez-vous l'authenticité d'une œuvre ?",
      answer:
        "Nous examinons la signature, la technique, le style, les matériaux, la provenance et comparons avec le catalogue raisonné de l'artiste. Si nécessaire, nous pouvons faire appel à des experts spécialisés.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
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
              Rachat de Tableaux & Sculptures
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center md:whitespace-nowrap">
              Expert en peintures anciennes, art moderne et sculptures en Nouvelle-Aquitaine.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Expertise gratuite</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#C4A053] flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">Expert diplômé</span>
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
                Votre Expert en Œuvres d'Art
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Fort d'une expertise de plus de 15 ans dans le domaine de l'art, nous vous proposons un service
                professionnel d'évaluation et de rachat de tableaux, peintures et sculptures. Notre historien d'art
                diplômé se déplace gratuitement à votre domicile partout en Nouvelle-Aquitaine pour expertiser vos
                œuvres et vous proposer le meilleur prix du marché basé sur les cotations actuelles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/impressionist-painting-people-at-beach.jpg"
                  alt="Tableau impressionniste ancien représentant des personnages à la plage - Expert rachat peintures Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/golden-horn-sculpture.jpg"
                  alt="Sculpture ancienne en bronze doré - Rachat sculptures et objets d'art Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Art Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types d'Œuvres Achetées
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types d'œuvres d'art, des peintures anciennes aux sculptures contemporaines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {artTypes.map((type, index) => (
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

      {/* Artistes Recherchés Section */}
      <section className="md:py-24 py-5 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/vintage-portrait-painting.jpg"
            alt="Portrait ancien à l'huile - Collection de tableaux anciens et peintures de maîtres"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Frame className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Artistes Particulièrement Recherchés
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Nous sommes spécialisés dans l'achat d'œuvres des grands maîtres et artistes cotés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {artistesRecherches.map((artiste, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <p className="text-gray-200 leading-relaxed text-center">{artiste}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Artistes Régionaux</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous sommes également intéressés par les artistes régionaux et locaux cotés de Nouvelle-Aquitaine. Même si
              votre artiste n'est pas dans cette liste, n'hésitez pas à nous contacter pour une expertise gratuite.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)] py-11">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Un service professionnel, transparent et sécurisé pour la vente de vos œuvres d'art.
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
      <section className="py-16 bg-white md:py-12">
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
                    "Envoyez-nous des photos de vos œuvres par email ou WhatsApp avec les dimensions et toute information sur la provenance.",
                },
                {
                  step: "2",
                  title: "Pré-estimation",
                  description:
                    "Notre expert vous donne une première estimation basée sur les photos et informations fournies.",
                },
                {
                  step: "3",
                  title: "Expertise à domicile",
                  description:
                    "Rendez-vous gratuit à votre domicile pour examiner les œuvres en détail : signature, technique, état, provenance.",
                },
                {
                  step: "4",
                  title: "Offre et paiement",
                  description:
                    "Proposition de prix basée sur les cotations actuelles. Si vous acceptez, paiement immédiat et contrat de vente.",
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
                Tout ce que vous devez savoir sur le rachat d'œuvres d'art.
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
              Prêt à Vendre Vos Œuvres d'Art ?
            </h2>
            <p className="text-gray-600 text-lg mb-8 text-justify">
              Contactez-nous dès aujourd'hui pour une expertise gratuite et sans engagement. Notre expert se déplace à
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
