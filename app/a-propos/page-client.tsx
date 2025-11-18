"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Award, Users, Clock, Shield, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackAction } from "@/lib/analytics"

export default function AboutPageClient() {
  const handleCallClick = () => {
    trackAction("click_call")
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1f5c] via-[#252b6e] to-[#1a1f5c] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/professional-auctioneer-examining-antique-with-mag.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 text-[#C4A053] mx-auto mb-6 animate-pulse" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)]">
                Expert en Antiquités et Objets d'Art en Nouvelle-Aquitaine
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Spécialiste de l&#39;estimation et du rachat d&#39;antiquités, bijoux anciens, meubles d&#39;époque et objets d&#39;art en Nouvelle-Aquitaine depuis plus de 15 ans.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white md:py-5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center py-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-6 font-[family-name:var(--font-crimson-pro)]">
                    Expert Antiquaire en Nouvelle-Aquitaine : Notre Histoire
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                    <p>
                      <strong>Expert en estimation d'antiquités</strong> depuis plus de deux décennies, notre maison
                      s'est imposée comme une référence incontournable dans le{" "}
                      <strong>rachat d'objets d'art et d'antiquités en Nouvelle-Aquitaine</strong>.
                    </p>
                    <p>
                      Notre passion pour l'art ancien, les <strong>bijoux de collection</strong>, les{" "}
                      <strong>meubles d'époque</strong> et les <strong>tableaux anciens</strong> nous anime au
                      quotidien. Chaque pièce raconte une histoire unique que nous prenons plaisir à découvrir et à
                      valoriser auprès de collectionneurs du monde entier.
                    </p>
                    <p>
                      Forts de notre <strong>expertise reconnue en estimation d'antiquités</strong> et de notre réseau
                      international de maisons de ventes aux enchères, nous offrons à nos clients un service
                      personnalisé et des <strong>estimations gratuites et justes</strong>, basées sur les tendances
                      actuelles du marché de l'art.
                    </p>
                    <p>
                      Que vous possédiez des <strong>bijoux anciens</strong>, de l'<strong>argenterie</strong>, des{" "}
                      <strong>tableaux de maîtres</strong>, des <strong>meubles anciens</strong> ou tout autre{" "}
                      <strong>objet d'art</strong>, notre expert se déplace gratuitement à votre domicile dans toute la
                      Nouvelle-Aquitaine : Bordeaux, Angoulême, Limoges, Poitiers, La Rochelle, Périgueux, Agen, Pau,
                      Bayonne, Cognac et toutes les communes de la région.
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-auctioneer-examining-antique-with-mag.jpg"
                    alt="Expert antiquaire examinant une pièce ancienne avec une loupe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres Clés section for SEO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Nos Chiffres Clés
                </h2>
                <p className="text-xl text-white/90">
                  Plus de 15 ans d&#39;expertise au service des particuliers et collectionneurs.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#C4A053] mb-2">15+</div>
                  <div className="text-lg text-white/90">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#C4A053] mb-2">5000+</div>
                  <div className="text-lg text-white/90">Objets Estimés</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#C4A053] mb-2">98%</div>
                  <div className="text-lg text-white/90">Clients Satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#C4A053] mb-2">24h</div>
                  <div className="text-lg text-white/90">Délai de Réponse</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Expertise */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Notre Expertise en Estimation d'Antiquités
                </h2>
                <p className="text-xl text-gray-600">
                  Des compétences reconnues dans tous les domaines de l'art ancien et des objets de collection
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#C4A053]/10 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-[#C4A053]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1f5c] mb-4">Expertise Certifiée</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Nos <strong>experts en antiquités</strong> sont formés aux techniques d'authentification les plus
                    pointues et suivent régulièrement les évolutions du marché de l'art et des ventes aux enchères
                    internationales.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#C4A053]/10 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-[#C4A053]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1f5c] mb-4">Réseau International</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Grâce à notre réseau de collectionneurs, antiquaires et maisons de ventes aux enchères
                    prestigieuses, nous obtenons les <strong>meilleures valorisations</strong> pour vos objets d'art et
                    antiquités.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#C4A053]/10 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-[#C4A053]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1f5c] mb-4">Confidentialité Garantie</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Nous respectons la plus stricte confidentialité dans toutes nos{" "}
                    <strong>transactions et estimations d'antiquités</strong>. Votre confiance et votre discrétion sont
                    notre priorité absolue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Processus d'Estimation et de Rachat */}
        <section className="py-16 bg-white md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Notre Processus d'Estimation et de Rachat
                </h2>
                <p className="text-xl text-gray-600">
                  Un service simple, rapide et transparent pour l'estimation de vos antiquités
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#C4A053] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">Contact Initial</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Contactez-nous par téléphone au <strong>06 25 63 76 58</strong> ou via notre formulaire en ligne.
                      Décrivez-nous vos objets d'art ou antiquités à estimer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#C4A053] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">Déplacement Gratuit</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Notre <strong>expert se déplace gratuitement</strong> à votre domicile dans toute la
                      Nouvelle-Aquitaine pour examiner vos objets dans les meilleures conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#C4A053] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">Estimation Gratuite</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Nous réalisons une <strong>estimation gratuite et sans engagement</strong> de vos antiquités,
                      basée sur les prix du marché actuel et les ventes aux enchères récentes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#C4A053] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">Paiement Immédiat</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      Si vous acceptez notre offre de <strong>rachat d'antiquités</strong>, nous procédons au paiement
                      immédiat par virement bancaire ou chèque certifié selon votre préférence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages de Nos Clients */}
        <section className="py-16 bg-gray-50 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Témoignages de Nos Clients
                </h2>
                <p className="text-xl text-gray-600">
                  Ce que nos clients disent de notre service d'estimation et de rachat d'antiquités
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#C4A053]">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-2xl">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4 text-justify">
                    "Service exceptionnel ! L'expert s'est déplacé rapidement à Bordeaux pour estimer les bijoux anciens
                    de ma grand-mère. Estimation juste et paiement immédiat. Je recommande vivement !"
                  </p>
                  <p className="font-semibold text-[#1a1f5c]">Marie D. - Bordeaux</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#C4A053]">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-2xl">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4 text-justify">
                    "Excellent contact, expertise pointue et discrétion totale. J'ai vendu une collection d'argenterie
                    familiale en toute confiance. Je recommande sans hésitation !"
                  </p>
                  <p className="font-semibold text-[#1a1f5c]">Sophie M. - Limoges</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#C4A053]">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-2xl">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4 text-justify">
                    "Excellent contact, expertise pointue et discrétion totale. J'ai vendu une collection d'argenterie
                    familiale en toute confiance. Je recommande sans hésitation !"
                  </p>
                  <p className="font-semibold text-[#1a1f5c]">Jean-Pierre L. - Poitiers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-white md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                  Nos Valeurs
                </h2>
                <p className="text-xl text-gray-600">Les principes qui guident notre action au quotidien</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">Passion</h3>
                  <p className="text-gray-600 text-sm">
                    L&#39;amour de l&#39;art et des objets anciens guide chacune de nos actions.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">Intégrité</h3>
                  <p className="text-gray-600 text-sm">
                    Transparence et honnêteté dans toutes nos estimations et transactions.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">Proximité</h3>
                  <p className="text-gray-600 text-sm">
                    Un service personnalisé et un accompagnement sur mesure pour chaque client.               </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5c] to-[#252b6e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1f5c] mb-2">Réactivité</h3>
                  <p className="text-gray-600 text-sm">Des réponses rapides et un paiement immédiat après accord.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-crimson-pro)] text-[#1a1f5c]">
                Vous possédez des objets d'art ou des antiquités ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Contactez-nous pour une estimation gratuite et sans engagement. Notre expert se déplace à votre domicile
                dans toute la Nouvelle-Aquitaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[250px] bg-[#C4A053] hover:bg-[#b39048] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-primary border-0"
                >
                  <a href="tel:0625637658" onClick={handleCallClick} className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>06 25 63 76 58</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto sm:min-w-[250px] bg-white hover:bg-gray-50 text-[#1a1f5c] font-semibold px-8 py-6 text-lg rounded-lg border-2 border-[#1a1f5c] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>Nous Contacter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
