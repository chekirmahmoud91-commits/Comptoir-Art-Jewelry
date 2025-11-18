import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, CheckCircle, BookOpen, Award, Shield, Clock, TrendingUp, Star, Library } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rachat Livres Anciens & Manuscrits en Nouvelle-Aquitaine | Estimation Gratuite",
  description:
    "Expert en rachat de livres anciens, éditions originales, manuscrits et livres rares en Nouvelle-Aquitaine. Estimation gratuite à domicile. Paiement immédiat.",
  keywords:
    "rachat livres anciens, achat manuscrits, vente livres rares, éditions originales, bibliophilie, expert livres anciens, estimation livres, Nouvelle-Aquitaine",
}

export default function LivresAnciensPage() {
  const livresTypes = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Éditions Originales",
      description:
        "Premières éditions d'auteurs classiques et modernes, éditions numérotées, tirages de tête avec envois autographes.",
      items: ["Littérature française", "Littérature étrangère", "Éditions illustrées", "Livres dédicacés"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Manuscrits & Documents",
      description:
        "Manuscrits autographes, lettres d'écrivains, documents historiques, parchemins anciens et archives familiales.",
      items: ["Manuscrits littéraires", "Lettres autographes", "Documents historiques", "Parchemins médiévaux"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Livres Illustrés",
      description:
        "Ouvrages illustrés par de grands artistes, livres d'artistes, éditions de bibliophilie avec gravures originales.",
      items: ["Livres d'artistes", "Gravures originales", "Éditions de luxe", "Livres illustrés modernes"],
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "Livres Anciens",
      description:
        "Incunables, livres du XVIe au XIXe siècle, reliures anciennes, ouvrages scientifiques et encyclopédies.",
      items: ["Incunables (avant 1500)", "Livres XVIe-XVIIIe", "Reliures d'époque", "Ouvrages scientifiques"],
    },
  ]

  const domainesSpecialises = [
    {
      domaine: "Littérature Classique",
      description: "Molière, Racine, Voltaire, Rousseau, Hugo, Balzac, Flaubert, Zola, Proust",
    },
    {
      domaine: "Littérature Moderne",
      description: "Gide, Céline, Camus, Sartre, Beauvoir, Duras, Modiano, Houellebecq",
    },
    {
      domaine: "Poésie",
      description: "Baudelaire, Rimbaud, Verlaine, Apollinaire, Éluard, Prévert, Char",
    },
    {
      domaine: "Sciences & Philosophie",
      description: "Descartes, Pascal, Diderot, Encyclopédie, ouvrages scientifiques anciens",
    },
    {
      domaine: "Histoire & Voyages",
      description: "Récits de voyages, atlas anciens, cartes géographiques, ouvrages historiques",
    },
    {
      domaine: "Beaux-Arts",
      description: "Catalogues d'exposition, monographies d'artistes, livres d'architecture",
    },
  ]

  const avantages = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expertise Bibliophile",
      description: "Expert diplômé en bibliophilie avec plus de 20 ans d'expérience dans le livre ancien",
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
      question: "Comment est évaluée la valeur d'un livre ancien ?",
      answer:
        "La valeur dépend de plusieurs critères : rareté, état de conservation, édition (originale ou non), présence d'envois ou dédicaces, qualité de la reliure, et demande sur le marché. Notre expert examine tous ces éléments pour vous proposer un prix juste.",
    },
    {
      question: "Achetez-vous des livres en mauvais état ?",
      answer:
        "Oui, nous achetons des livres même incomplets ou en mauvais état, surtout s'ils sont rares. Le prix sera ajusté en fonction de l'état, mais certains ouvrages conservent une valeur importante malgré les défauts.",
    },
    {
      question: "Faut-il avoir une bibliothèque complète pour vous contacter ?",
      answer:
        "Non, nous achetons aussi bien des bibliothèques entières que des ouvrages isolés. Même un seul livre rare peut avoir une grande valeur. N'hésitez pas à nous contacter pour une estimation.",
    },
    {
      question: "Comment savoir si mes livres ont de la valeur ?",
      answer:
        "Recherchez les éditions originales, les dates anciennes (avant 1900), les signatures d'auteurs, les belles reliures, et les illustrations. Mais seul un expert peut déterminer la valeur exacte. Contactez-nous pour une estimation gratuite.",
    },
    {
      question: "Achetez-vous des collections thématiques ?",
      answer:
        "Oui, nous sommes particulièrement intéressés par les collections cohérentes : littérature, sciences, voyages, beaux-arts, etc. Les collections bien constituées ont souvent une valeur supérieure à la somme des ouvrages pris individuellement.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/antique-books-hero-background.jpg"
            alt="Livres anciens et manuscrits - Fond hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h40v40H10z' fill='%23C4A053' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <BookOpen className="w-16 h-16 text-[#C4A053] mx-auto animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-balance">
              Rachat de Livres Anciens & Manuscrits
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance text-center">
              Expert en bibliophilie, éditions originales et livres rares en Nouvelle-Aquitaine.
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
                <span className="text-sm font-medium whitespace-nowrap">Expert bibliophile</span>
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
                Votre Expert en Livres Anciens et Bibliophilie
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Avec plus de 20 ans d'expérience dans le domaine de la bibliophilie et du livre ancien, nous vous
                proposons un service d'expertise et de rachat professionnel pour tous vos livres rares, éditions
                originales et manuscrits. Notre expert diplômé se déplace gratuitement à votre domicile partout en
                Nouvelle-Aquitaine pour évaluer vos ouvrages et vous proposer le meilleur prix du marché.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/antique-books-rare-editions.jpg"
                  alt="Collection de livres anciens et éditions rares - Rachat au meilleur prix en Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/ancient-library-manuscripts.jpg"
                  alt="Manuscrits anciens et documents historiques - Expert rachat livres anciens Nouvelle-Aquitaine"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Livres Section */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Types de Livres Achetés
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-justify">
              Nous achetons tous types de livres anciens, rares et précieux, quelle que soit leur époque.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {livresTypes.map((type, index) => (
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

      {/* Domaines Spécialisés Section */}
      <section className="py-16 md:py-24 relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ancient-library-manuscripts.jpg"
            alt="Bibliothèque ancienne et manuscrits - Expertise domaines spécialisés"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Library className="w-16 h-16 text-[#C4A053] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-crimson-pro)]">
              Domaines Spécialisés
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto text-center">
              Expertise approfondie dans tous les domaines de la bibliophilie et du livre ancien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {domainesSpecialises.map((domaine, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-[#C4A053]">{domaine.domaine}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">{domaine.description}</p>
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
              Un service professionnel, transparent et sécurisé pour la vente de vos livres anciens.
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
                Tout ce que vous devez savoir sur le rachat de livres anciens.
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
            <BookOpen className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
              Prêt à Vendre Vos Livres Anciens ?
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
