"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/trust-bar"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RachatAntiquitesClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Schema.org JSON-LD pour SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AntiquesStore",
            name: "Comptoir Art & Jewelry - Rachat Antiquités Bordeaux",
            description:
              "Expert en rachat d'antiquités à Bordeaux et en Gironde. Estimation gratuite, déplacement rapide, paiement comptant immédiat.",
            image: "https://comptoir-art-jewelry.fr/images/logo.png",
            url: "https://comptoir-art-jewelry.fr/rachat-antiquites-bordeaux",
            telephone: "+33625637658",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bordeaux Métropole",
              addressLocality: "Bordeaux",
              postalCode: "33000",
              addressCountry: "FR",
              addressRegion: "Nouvelle-Aquitaine",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.8378,
              longitude: -0.5792,
            },
            openingHours: "Mo-Sa 09:00-19:00",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 5.0,
              bestRating: 5,
              worstRating: 1,
              reviewCount: 200,
            },
            areaServed: {
              "@type": "City",
              name: "Bordeaux",
            },
          }),
        }}
      />

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Faites-vous des estimations à domicile à Bordeaux ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous nous déplaçons gratuitement à Bordeaux et dans toute la Gironde pour estimer vos antiquités. Notre expert se rend chez vous dans les 24 à 48 heures suivant votre demande.",
                },
              },
              {
                "@type": "Question",
                name: "Le paiement est-il immédiat ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, le paiement se fait comptant dès l'accord conclu, en espèces, chèque ou virement bancaire selon votre préférence. La transaction est sécurisée et transparente.",
                },
              },
              {
                "@type": "Question",
                name: "Quels documents dois-je fournir pour vendre une antiquité ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour la vente d'antiquités, nous vous demandons une pièce d'identité valide. Si vous possédez des documents d'authenticité, certificats ou factures d'achat, ils sont les bienvenus mais non obligatoires.",
                },
              },
              {
                "@type": "Question",
                name: "Que faire si je ne sais pas l'époque ou l'auteur de mon objet ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aucun problème ! Notre expert est là pour identifier, dater et authentifier vos objets. Nous disposons d'une base de données complète et d'un réseau de spécialistes pour évaluer précisément vos antiquités.",
                },
              },
              {
                "@type": "Question",
                name: "Acceptez-vous les objets à restaurer ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous rachetons également des objets nécessitant une restauration. Notre évaluation prend en compte l'état actuel et le potentiel de l'objet après restauration.",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <Header onEstimationClick={() => setIsModalOpen(true)} />

        <section className="mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/elegant-antique-furniture-store-in-bordeaux-france.jpg"
              alt="Antiquités Bordeaux"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1f5c] mb-6">
              Rachat d'Antiquités à Bordeaux & en Gironde (33)
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
              Vous habitez Bordeaux ou ses environs (Mérignac, Pessac, Le Bouscat, Talence, Villenave-d'Ornon...) et
              vous souhaitez vendre vos meubles anciens, objets d'art, bijoux ou monnaies ? Notre service de rachat
              d'antiquités à Bordeaux vous offre une <strong>estimation gratuite</strong>, un{" "}
              <strong>déplacement rapide</strong>, et un <strong>paiement comptant immédiat</strong>. Expert dans
              l'achat d'antiquités, nous intervenons dans la métropole bordelaise et plus largement dans le département
              de la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1a1f5c] hover:bg-[#c5a572] text-white px-8 py-4 text-lg flex-1 sm:flex-initial sm:min-w-[280px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Obtenir une estimation gratuite
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white px-8 py-4 text-lg bg-white flex-1 sm:flex-initial sm:min-w-[280px]"
              >
                <Link href="tel:0625637658">
                  <Phone className="mr-2 h-5 w-5" />
                  06 25 63 76 58
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          {/* Notre Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-8 text-center">
              Nous rachètons vos antiquités : meubles, tableaux, argenterie...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Meubles anciens",
                  items: ["Buffets", "Secrétaires", "Commodes", "Armoires", "Tables & chaises"],
                  image: "/antique-french-furniture-buffet-commode.jpg",
                },
                {
                  title: "Tableaux & gravures",
                  items: ["Peintures anciennes", "Gravures", "Lithographies", "Dessins", "Aquarelles"],
                  image: "/antique-paintings-and-art-frames.jpg",
                },
                {
                  title: "Argenterie & orfèvrerie",
                  items: ["Couverts anciens", "Plateaux", "Théières", "Timbales", "Objets en argent"],
                  image: "/antique-silver-cutlery-and-silverware.jpg",
                },
                {
                  title: "Bijoux & montres",
                  items: ["Bijoux anciens", "Montres de collection", "Médailles", "Broches", "Bagues"],
                  image: "/antique-jewelry-and-vintage-watches.jpg",
                },
                {
                  title: "Objets numismatiques",
                  items: ["Monnaies anciennes", "Médailles", "Billets", "Jetons", "Pièces de collection"],
                  image: "/antique-coins-and-medals-collection.jpg",
                },
                {
                  title: "Décoration ancienne",
                  items: ["Lustres", "Bronzes", "Pendules", "Miroirs", "Sculptures"],
                  image: "/antique-chandelier-bronze-clock-decoration.jpg",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="border-2 border-[#1a1f5c]/20 hover:border-[#c5a572] transition-all overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#c5a572] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-justify">
              Nous évaluons chaque objet selon plusieurs critères : <strong>état de conservation</strong>,{" "}
              <strong>époque</strong>, <strong>rareté</strong>, <strong>provenance</strong> et{" "}
              <strong>authenticité</strong>. Notre expertise nous permet de vous proposer le meilleur prix du marché.
            </p>
          </section>

          {/* Pourquoi nous choisir */}
          <section className="mb-16 bg-[#1a1f5c] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <Image src="/elegant-antique-pattern-texture.jpg" alt="Pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pourquoi nous choisir à Bordeaux ?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Clock className="h-8 w-8" />,
                    title: "Intervention rapide",
                    description: "Déplacement dans Bordeaux et l'agglomération sous 24 à 48h",
                  },
                  {
                    icon: <CheckCircle className="h-8 w-8" />,
                    title: "Estimation gratuite",
                    description: "À domicile ou sur photo, sans engagement de votre part",
                  },
                  {
                    icon: <Phone className="h-8 w-8" />,
                    title: "Paiement comptant immédiat",
                    description: "Transaction sécurisée en espèces, chèque ou virement",
                  },
                  {
                    icon: <MapPin className="h-8 w-8" />,
                    title: "Réseau européen",
                    description: "Acheteurs et collectionneurs en Europe pour meilleure valorisation",
                  },
                  {
                    icon: <Star className="h-8 w-8" />,
                    title: "Spécialiste antiquités",
                    description: "Expertise reconnue, pas seulement brocante",
                  },
                  {
                    icon: <CheckCircle className="h-8 w-8" />,
                    title: "Service professionnel",
                    description: "Discrétion, respect et transparence garantis",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-[#c5a572] rounded-full p-4 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comment ça se passe */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-8 text-center">Comment ça se passe ?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Contact",
                  description: "Vous nous contactez par téléphone ou formulaire (photos facultatives)",
                },
                {
                  step: "2",
                  title: "Estimation",
                  description: "Nous estimons vos objets gratuitement, à domicile ou sur photo",
                },
                {
                  step: "3",
                  title: "Accord",
                  description: "Si vous acceptez notre offre, nous fixons un rendez-vous",
                },
                {
                  step: "4",
                  title: "Paiement & enlèvement",
                  description: "Paiement immédiat + enlèvement sur place le jour même",
                },
              ].map((step, index) => (
                <Card key={index} className="border-2 border-[#1a1f5c]/20 text-center">
                  <CardContent className="p-6">
                    <div className="bg-[#c5a572] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              <strong>Urgence ou succession ?</strong> Nous pouvons intervenir sous 24h si nécessaire.
            </p>
          </section>

          {/* Zone d'intervention */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-8 text-center">Zone d'intervention</h2>
            <Card className="border-2 border-[#1a1f5c]/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nous intervenons sur <strong>Bordeaux métropole</strong> et l'ensemble du{" "}
                  <strong>département de la Gironde (33)</strong> :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Bordeaux centre",
                    "Mérignac",
                    "Pessac",
                    "Le Bouscat",
                    "Villenave-d'Ornon",
                    "Talence",
                    "Gradignan",
                    "Bègles",
                    "Cenon",
                    "Floirac",
                    "Lormont",
                    "Eysines",
                    "Arcachon",
                    "Libourne",
                    "La Teste-de-Buch",
                    "Gujan-Mestras",
                    "Saint-Médard-en-Jalles",
                    "Cestas",
                  ].map((city, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#c5a572] mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-6 text-center">
                  Cette proximité locale nous permet de vous garantir une <strong>réponse rapide</strong> et un{" "}
                  <strong>service personnalisé</strong>.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Témoignages */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-8 text-center">
              Témoignages clients & réalisations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Marie D.",
                  city: "Bordeaux",
                  rating: 5,
                  text: "J'ai pu vendre mon buffet ancien à Bordeaux en 24h et en être payée comptant. Service professionnel et rapide, je recommande vivement !",
                  image: "/professional-woman-smiling.png",
                },
                {
                  name: "Jean-Pierre M.",
                  city: "Mérignac",
                  rating: 5,
                  text: "Estimation précise et honnête de mes tableaux anciens. L'expert a pris le temps de m'expliquer la valeur de chaque pièce. Très satisfait.",
                  image: "/professional-man-smiling.png",
                },
                {
                  name: "Sophie L.",
                  city: "Pessac",
                  rating: 5,
                  text: "Suite à une succession, j'avais beaucoup d'objets à vendre. L'équipe a été réactive, discrète et professionnelle. Paiement immédiat comme promis.",
                  image: "/professional-woman-happy-portrait.jpg",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-2 border-[#1a1f5c]/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1f5c]">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.city}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#c5a572] text-[#c5a572]" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-justify">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact & Estimation */}
          <section className="mb-16 relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/elegant-antique-shop-interior-bordeaux.jpg" alt="Contact" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f5c]/95 to-[#2a3f7c]/95" />
            </div>
            <div className="relative z-10 text-white p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact & estimation gratuite</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Prêt à vendre vos antiquités ? Contactez-nous dès maintenant pour une estimation gratuite et sans
                engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#c5a572] hover:bg-[#b39560] text-white px-8 py-4 text-lg flex-1 sm:flex-initial sm:min-w-[280px]"
                >
                  Obtenir une estimation gratuite
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a1f5c] px-8 py-4 text-lg bg-transparent flex-1 sm:flex-initial sm:min-w-[280px]"
                >
                  <Link href="tel:0625637658">
                    <Phone className="mr-2 h-5 w-5" />
                    06 25 63 76 58
                  </Link>
                </Button>
              </div>
              <p className="text-lg">
                <strong>Intervention rapide à Bordeaux</strong> • Paiement comptant • Disponible 7j/7
              </p>
            </div>
          </section>
        </main>

        <TrustBar />
        <Footer />
        <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  )
}
