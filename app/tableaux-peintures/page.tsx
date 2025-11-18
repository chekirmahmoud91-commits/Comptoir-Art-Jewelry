import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, Palette, Frame, Award, Shield, Clock, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Tableaux & Peintures Anciennes en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de tableaux et peintures anciennes, modernes et contemporaines en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat tableaux, achat peintures anciennes, vente tableaux, estimation peinture, expert art, tableaux anciens, peintures modernes, Nouvelle-Aquitaine",
}

export default function TableauxPeinturesPage() {
  const tableauxTypes = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Peintures Anciennes",
      description:
        "Écoles françaises, italiennes, flamandes et hollandaises du XVIIe au XIXe siècle. Portraits, scènes de genre, paysages et marines.",
      items: ["Écoles françaises (XVIIe-XIXe)", "Écoles italiennes", "Écoles flamandes", "Portraits et paysages"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Peintures Modernes",
      description:
        "Impressionnisme, post-impressionnisme, fauvisme, cubisme, École de Paris. Œuvres des grands maîtres du XXe siècle.",
      items: ["Impressionnisme", "Post-impressionnisme", "Fauvisme et cubisme", "École de Paris"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Peintures Contemporaines",
      description:
        "Art abstrait, expressionnisme, art figuratif contemporain. Artistes reconnus et cotés sur le marché international.",
      items: ["Art abstrait", "Expressionnisme", "Art figuratif", "Artistes cotés"],
    },
    {
      icon: <Frame className="w-8 h-8" />,
      title: "Techniques Diverses",
      description:
        "Huile sur toile ou panneau, aquarelle, gouache, pastel, dessin, techniques mixtes. Toutes techniques acceptées.",
      items: ["Huile sur toile", "Aquarelle et gouache", "Pastel et dessin", "Techniques mixtes"],
    },
  ]

  const artistesRecherches = [
    {
      categorie: "Impressionnistes",
      artistes: "Monet, Renoir, Pissarro, Sisley, Degas, Cézanne",
    },
    {
      categorie: "Post-Impressionnistes",
      artistes: "Van Gogh, Gauguin, Toulouse-Lautrec, Seurat",
    },
    {
      categorie: "Fauves & Cubistes",
      artistes: "Matisse, Derain, Vlaminck, Picasso, Braque",
    },
    {
      categorie: "École de Paris",
      artistes: "Chagall, Soutine, Modigliani, Utrillo, Dufy",
    },
    {
      categorie: "Art Moderne",
      artistes: "Buffet, Soulages, Hartung, Mathieu, Manessier",
    },
    {
      categorie: "Autres Maîtres",
      artistes: "Dali, Miró, Kandinsky, Léger, Dubuffet",
    },
  ]

  const avantages = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Expertise Artistique",
      description: "Expert diplômé en histoire de l'art avec plus de 20 ans d'expérience dans l'expertise de tableaux",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Meilleure Valorisation",
      description: "Analyse du marché de l'art et des résultats de ventes aux enchères pour une estimation juste",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentification",
      description: "Vérification de l'authenticité, consultation des catalogues raisonnés et bases de données",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Estimation Gratuite",
      description: "Déplacement et estimation gratuits à votre domicile partout en Nouvelle-Aquitaine",
    },
  ]

  const faq = [
    {
      question: "Comment authentifier un tableau ancien ?",
      answer:
        "L'authentification nécessite une analyse approfondie : examen de la signature, étude de la technique picturale, analyse du support (toile, panneau) et des matériaux, recherche de provenance, consultation d'experts spécialisés et de catalogues raisonnés.",
    },
    {
      question: "Quelle est la différence entre estimation et expertise ?",
      answer:
        "L'estimation donne une valeur marchande approximative basée sur le marché actuel. L'expertise est un document officiel détaillé incluant l'authentification, la description technique complète, l'historique et la valeur assurable.",
    },
    {
      question: "Faut-il restaurer un tableau avant de le vendre ?",
      answer:
        "Non, il est préférable de consulter un expert avant toute restauration. Une restauration mal faite ou excessive peut diminuer considérablement la valeur du tableau. Nous vous conseillerons sur l'opportunité et le type de restauration nécessaire.",
    },
    {
      question: "Comment connaître la valeur d'un tableau sans signature ?",
      answer:
        "Même sans signature, un tableau peut avoir de la valeur. Nous analysons le style, la technique, l'époque, la qualité d'exécution et comparons avec des œuvres similaires vendues aux enchères.",
    },
    {
      question: "Achetez-vous les tableaux abîmés ou restaurés ?",
      answer:
        "Oui, nous achetons les tableaux même abîmés ou restaurés. L'état de conservation est pris en compte dans l'estimation, mais un tableau d'un artiste coté garde de la valeur même avec des défauts.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/paintings-art-hero-background.jpg"
            alt="Fond de tableaux et peintures"
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
              Rachat de Tableaux & Peintures
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center md:whitespace-nowrap">
              Expert en tableaux anciens, modernes et contemporains en Nouvelle-Aquitaine.
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
                Votre Expert en Tableaux et Peintures
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 20 ans d'expérience dans le domaine de l'art et de l'expertise de tableaux, nous vous
                proposons un service professionnel d'évaluation et de rachat pour toutes vos peintures anciennes,
                modernes et contemporaines. Notre expert diplômé en histoire de l'art se déplace gratuitement à votre
                domicile partout en Nouvelle-Aquitaine pour examiner vos œuvres et vous proposer une estimation précise
                basée sur le marché actuel de l'art.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/impressionist-painting-people-at-beach.jpg"
                  alt="Peinture impressionniste ancienne représentant une scène de plage - Expert rachat tableaux Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/design-mode/2.jpeg.webp"
                  alt="Portrait ancien à l'huile sur toile - Estimation et rachat tableaux anciens en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Tableaux Section */}
      <section className="py-16 bg-gray-50 md:py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Tableaux Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de tableaux et peintures, de toutes époques et de tous styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tableauxTypes.map((type, index) => (
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
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/impressionist-painting-people-at-beach.jpg"
            alt="Fond élégant de peintures impressionnistes et tableaux anciens - Expertise et rachat tableaux"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Frame className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Artistes Recherchés
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Nous recherchons activement les œuvres des grands maîtres de la peinture française et internationale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {artistesRecherches.map((groupe, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{groupe.categorie}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{groupe.artistes}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-[#C4A053]/10 border-2 border-[#C4A053] rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Autres Artistes Cotés</h3>
            <p className="text-white leading-relaxed text-justify">
              Nous achetons également les œuvres d'artistes régionaux cotés, d'artistes de l'École de Barbizon, de
              l'École de Pont-Aven, ainsi que les peintres orientalistes et les artistes contemporains reconnus. Même si
              votre artiste n'est pas listé ci-dessus, n'hésitez pas à nous contacter pour une estimation gratuite.
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
              Un service professionnel, transparent et sécurisé pour la vente de vos tableaux et peintures.
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
                    "Par téléphone, email ou formulaire. Envoyez-nous des photos de votre tableau (recto, verso, signature, détails).",
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
                    "Examen détaillé du tableau : analyse de la signature, technique, support, état de conservation. Recherches dans les bases de données. Proposition de prix immédiate.",
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
                Tout ce que vous devez savoir sur le rachat de tableaux et peintures.
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
              Prêt à Vendre Vos Tableaux ?
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
