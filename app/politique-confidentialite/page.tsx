import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Comptoir Art & Jewelry",
  description:
    "Politique de confidentialité et protection des données personnelles de Comptoir Art & Jewelry, conforme au RGPD.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-justify">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f5c] rounded-full mb-6">
              <Shield className="w-8 h-8 text-[#C4A053]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-600 text-lg">Protection et gestion de vos données personnelles.</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <div className="text-gray-700 space-y-3">
                <p className="text-justify">
                  Comptoir Art & Jewelry accorde une grande importance à la protection de vos données personnelles.
                  Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et
                  protégeons vos informations personnelles conformément au Règlement Général sur la Protection des
                  Données (RGPD) et à la loi Informatique et Libertés.
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                1. Responsable du traitement des données
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Raison sociale :</strong> Comptoir Art & Jewelry
                </p>
                <p>
                  <strong>Adresse :</strong> Nouvelle-Aquitaine, France
                </p>
                <p>
                  <strong>Email :</strong> comptoirartandjewelry@gmail.com

                </p>
                <p>
                  <strong>Téléphone :</strong> 06 25 63 76 58
                </p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                2. Données personnelles collectées
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Nous collectons les données personnelles suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Données d'identification :</strong> nom, prénom, adresse postale
                  </li>
                  <li>
                    <strong>Données de contact :</strong> adresse email, numéro de téléphone
                  </li>
                  <li>
                    <strong>Données relatives aux objets :</strong> descriptions, photos des objets à estimer
                  </li>
                  <li>
                    <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de
                    visite
                  </li>
                </ul>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                3. Finalités du traitement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Traiter vos demandes d'estimation d'objets d'art et d'antiquités</li>
                  <li>Vous contacter pour organiser un rendez-vous ou un déplacement</li>
                  <li>Gérer les transactions de rachat d'objets</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                4. Base légale du traitement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Le traitement de vos données personnelles repose sur :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>L'exécution d'un contrat :</strong> pour traiter vos demandes d'estimation et de rachat
                  </li>
                  <li>
                    <strong>Votre consentement :</strong> pour l'envoi de communications marketing
                  </li>
                  <li>
                    <strong>Notre intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité de
                    notre site
                  </li>
                  <li>
                    <strong>Nos obligations légales :</strong> pour respecter les réglementations en vigueur
                  </li>
                </ul>
              </div>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                5. Destinataires des données
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Vos données personnelles sont destinées :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Aux services internes de Comptoir Art & Jewelry (experts, service client)</li>
                  <li>À nos prestataires techniques (hébergement, maintenance du site)</li>
                  <li>Aux autorités compétentes en cas d'obligation légale</li>
                </ul>
                <p className="mt-3">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers à des fins commerciales.
                </p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                6. Durée de conservation
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Vos données personnelles sont conservées pendant :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Données de contact :</strong> 3 ans à compter du dernier contact
                  </li>
                  <li>
                    <strong>Données de transaction :</strong> 10 ans conformément aux obligations comptables
                  </li>
                  <li>
                    <strong>Données de navigation :</strong> 13 mois maximum
                  </li>
                </ul>
              </div>
            </section>

            {/* Droits */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                7. Vos droits
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> demander la suppression de vos données
                  </li>
                  <li>
                    <strong>Droit à la limitation :</strong> limiter le traitement de vos données
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données
                  </li>
                  <li>
                    <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré
                  </li>
                  <li>
                    <strong>Droit de retirer votre consentement :</strong> à tout moment
                  </li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous par email à <strong>comptoirartandjewelry@gmail.com</strong> ou par
                  téléphone au <strong>06 25 63 76 58</strong>.
                </p>
                <p>
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale
                  de l'Informatique et des Libertés) :{" "}
                  <a href="https://www.cnil.fr" className="text-[#C4A053] hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                8. Sécurité des données
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                  données personnelles contre la destruction, la perte, l'altération, la divulgation non autorisée ou
                  l'accès non autorisé.
                </p>
                <p>
                  Nos mesures de sécurité incluent le chiffrement des données, l'accès restreint aux données
                  personnelles et la formation de notre personnel à la protection des données.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                9. Cookies et technologies similaires
              </h2>
              <div className="text-gray-700 space-y-3">
                <p className="text-justify">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.
                  Les cookies sont de petits fichiers texte stockés sur votre appareil.
                </p>
                <p>Nous utilisons les types de cookies suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
                  </li>
                  <li>
                    <strong>Cookies analytiques :</strong> pour comprendre comment vous utilisez notre site
                  </li>
                </ul>
                <p className="text-justify">
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur dépôt. Notez
                  que certaines fonctionnalités du site peuvent être limitées si vous désactivez les cookies.
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                10. Modifications de la politique
              </h2>
              <div className="text-gray-700 space-y-3">
                <p className="text-justify">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
                  modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à
                  consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des
                  données.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                11. Nous contacter
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données
                  personnelles, vous pouvez nous contacter :
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li>
                    <strong>Par email :</strong> comptoirartandjewelry@gmail.com
                  </li>
                  <li>
                    <strong>Par téléphone :</strong> 06 25 63 76 58
                  </li>
                  <li>
                    <strong>Par courrier :</strong> Comptoir Art & Jewelry, Nouvelle-Aquitaine, France
                  </li>
                </ul>
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
