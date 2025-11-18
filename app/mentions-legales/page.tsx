import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions Légales | Comptoir Art & Jewelry - Rachat d'Antiquités",
  description:
    "Mentions légales de Comptoir Art & Jewelry, expert en rachat d'antiquités, objets d'art et bijoux en Nouvelle-Aquitaine.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f5c] rounded-full mb-6">
              <Scale className="w-8 h-8 text-[#C4A053]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Mentions Légales
            </h1>
            <p className="text-gray-600 text-lg">Informations légales concernant le site Comptoir Art & Jewelry</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8 text-justify">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                1. Éditeur du site
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Raison sociale :</strong> Comptoir Art & Jewelry
                </p>
                <p>
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </p>
                <p>
                  <strong>Adresse :</strong> Nouvelle-Aquitaine, France
                </p>
                <p>
                  <strong>Téléphone :</strong> 06 25 63 76 58
                </p>
                <p>
                  <strong>Email :</strong> comptoirartandjewelry@gmail.com
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> Comptoir Art & Jewelry
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                2. Hébergement
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a href="https://vercel.com" className="text-[#C4A053] hover:underline">
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                3. Propriété intellectuelle
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété
                  exclusive de Comptoir Art & Jewelry, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces
                  différents éléments est strictement interdite sans l'accord exprès par écrit de Comptoir Art &
                  Jewelry.
                </p>
                <p>
                  Les marques et logos présents sur le site sont des marques déposées. Toute reproduction totale ou
                  partielle de ces marques sans autorisation préalable et écrite est interdite.
                </p>
              </div>
            </section>

            {/* Protection des données */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                4. Protection des données personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général
                  sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de
                  suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse : comptoirartandjewelry@gmail.com ou par
                  téléphone au 06 25 63 76 58.
                </p>
                <p>
                  Pour plus d'informations sur la gestion de vos données personnelles, consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-[#C4A053] hover:underline font-semibold">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                5. Cookies
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies
                  sont de petits fichiers texte stockés sur votre appareil lors de votre visite.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur dépôt. Notez
                  que certaines fonctionnalités du site peuvent être limitées si vous désactivez les cookies.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                6. Limitation de responsabilité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Comptoir Art & Jewelry s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
                  sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des
                  informations mises à disposition.
                </p>
                <p>
                  Comptoir Art & Jewelry ne pourra être tenu responsable des dommages directs ou indirects résultant de
                  l'accès au site ou de l'utilisation de celui-ci, y compris l'inaccessibilité, les pertes de données,
                  détériorations, destructions ou virus qui pourraient affecter votre équipement informatique.
                </p>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                7. Liens hypertextes
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. Comptoir Art & Jewelry n'exerce aucun
                  contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                <p>
                  La création de liens hypertextes vers le site www.comptoir-art-jewelry.fr nécessite une autorisation préalable et
                  écrite de Comptoir Art & Jewelry.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                8. Droit applicable et juridiction
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                  d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de
                  compétence en vigueur.
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">Dernière mise à jour : Novembre 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
