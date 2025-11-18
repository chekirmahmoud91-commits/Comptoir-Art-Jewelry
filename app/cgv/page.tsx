import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Comptoir Art & Jewelry",
  description:
    "Conditions générales de vente de Comptoir Art & Jewelry pour le rachat d'antiquités, objets d'art et bijoux en Nouvelle-Aquitaine.",
}

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f5c] rounded-full mb-6">
              <FileText className="w-8 h-8 text-[#C4A053]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
              Conditions Générales de Vente
            </h1>
            <p className="text-gray-600 text-lg">
              Conditions applicables au rachat d&#39;objets d&#39;art et d&#39;antiquités.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8 text-justify">
            {/* Préambule */}
            <section>
              <div className="text-gray-700 space-y-3">
                <p className="text-justify">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
                  Comptoir Art & Jewelry, ci-après dénommé "l'Acheteur", et toute personne physique ou morale, ci-après
                  dénommée "le Vendeur", souhaitant vendre des objets d'art, antiquités, bijoux, montres ou tout autre
                  objet de collection.
                </p>
                <p className="text-justify">
                  Toute transaction implique l'acceptation sans réserve par le Vendeur des présentes CGV.
                </p>
              </div>
            </section>

            {/* Article 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 1 - Objet
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes CGV ont pour objet de définir les conditions dans lesquelles Comptoir Art & Jewelry
                  procède au rachat d'objets d'art, d'antiquités, de bijoux, de montres et d'objets de collection auprès
                  de particuliers et de professionnels.
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 2 - Estimation gratuite
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Comptoir Art & Jewelry propose un service d'estimation gratuite et sans engagement. Cette estimation
                  peut être réalisée :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>À distance, sur présentation de photographies et d'une description détaillée</li>
                  <li>À domicile, avec déplacement gratuit dans toute la Nouvelle-Aquitaine</li>
                  <li>Dans nos locaux, sur rendez-vous</li>
                </ul>
                <p>
                  L'estimation fournie est indicative et ne constitue pas une offre d'achat ferme. Elle est valable 30
                  jours à compter de sa communication.
                </p>
              </div>
            </section>

            {/* Article 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 3 - Offre d'achat
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Suite à l'estimation, Comptoir Art & Jewelry peut formuler une offre d'achat ferme. Cette offre
                  comprend :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le prix d'achat proposé</li>
                  <li>La description détaillée de l'objet</li>
                  <li>Les modalités de paiement</li>
                  <li>La durée de validité de l'offre (généralement 7 jours)</li>
                </ul>
                <p>
                  Le Vendeur est libre d'accepter ou de refuser l'offre sans justification. L'acceptation de l'offre
                  entraîne la conclusion du contrat de vente.
                </p>
              </div>
            </section>

            {/* Article 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 4 - Conditions de vente
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Pour procéder à la vente, le Vendeur doit :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Être majeur et capable juridiquement</li>
                  <li>Être propriétaire légitime de l'objet ou avoir mandat pour le vendre</li>
                  <li>Présenter une pièce d'identité en cours de validité</li>
                  <li>Fournir un justificatif de domicile de moins de 3 mois</li>
                  <li>Signer un contrat de vente et un reçu</li>
                </ul>
                <p>
                  Comptoir Art & Jewelry se réserve le droit de refuser tout achat en cas de doute sur la provenance ou
                  l'authenticité de l'objet.
                </p>
              </div>
            </section>

            {/* Article 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 5 - Prix et modalités de paiement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le prix d'achat est fixé librement entre les parties et correspond à la valeur estimée de l'objet au
                  moment de la transaction.
                </p>
                <p>Le paiement est effectué :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Par virement bancaire (recommandé pour les montants importants)</li>
                  <li>Par chèque bancaire</li>
                  <li>En espèces (dans la limite légale de 1 000 € pour les particuliers)</li>
                </ul>
                <p>
                  Le paiement est effectué immédiatement après signature du contrat de vente et remise de l'objet, sauf
                  accord contraire entre les parties.
                </p>
              </div>
            </section>

            {/* Article 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 6 - Transfert de propriété
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le transfert de propriété de l'objet s'effectue au moment de la signature du contrat de vente et de la
                  remise effective de l'objet à Comptoir Art & Jewelry.
                </p>
                <p>
                  À compter de ce moment, Comptoir Art & Jewelry assume tous les risques liés à l'objet (perte,
                  détérioration, vol, etc.).
                </p>
              </div>
            </section>

            {/* Article 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 7 - Garanties du Vendeur
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Le Vendeur garantit :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Être le propriétaire légitime de l'objet vendu</li>
                  <li>Que l'objet est libre de tout droit de propriété intellectuelle ou industrielle de tiers</li>
                  <li>Que l'objet n'est pas volé, contrefait ou d'origine illicite</li>
                  <li>L'exactitude des informations fournies concernant l'objet</li>
                </ul>
                <p>
                  En cas de vice caché ou de fausse déclaration, le Vendeur s'engage à rembourser intégralement le prix
                  d'achat et à indemniser Comptoir Art & Jewelry de tout préjudice subi.
                </p>
              </div>
            </section>

            {/* Article 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 8 - Droit de rétractation
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Conformément à la législation en vigueur, le Vendeur particulier dispose d'un délai de rétractation de
                  14 jours à compter de la signature du contrat de vente.
                </p>
                <p>
                  Pour exercer ce droit, le Vendeur doit notifier sa décision par écrit (email ou courrier recommandé)
                  et restituer le montant perçu dans un délai de 14 jours.
                </p>
                <p>
                  Ce droit de rétractation ne s'applique pas aux professionnels ni aux objets dont la valeur excède 5
                  000 €.
                </p>
              </div>
            </section>

            {/* Article 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 9 - Confidentialité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Comptoir Art & Jewelry s'engage à respecter la confidentialité des informations communiquées par le
                  Vendeur et à ne pas divulguer l'identité du Vendeur ou les détails de la transaction à des tiers, sauf
                  obligation légale.
                </p>
                <p>
                  Les données personnelles sont traitées conformément à notre{" "}
                  <a href="/politique-confidentialite" className="text-[#C4A053] hover:underline font-semibold">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Article 10 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 10 - Responsabilité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Comptoir Art & Jewelry met en œuvre tous les moyens nécessaires pour assurer l'exactitude de ses
                  estimations. Toutefois, la valeur des objets d'art et d'antiquités étant subjective et fluctuante,
                  Comptoir Art & Jewelry ne saurait être tenu responsable d'une éventuelle différence entre l'estimation
                  et la valeur réelle de marché.
                </p>
                <p>
                  Comptoir Art & Jewelry ne pourra être tenu responsable des dommages indirects résultant de la
                  transaction (perte de chance, préjudice moral, etc.).
                </p>
              </div>
            </section>

            {/* Article 11 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 11 - Litiges et médiation
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action
                  judiciaire.
                </p>
                <p>
                  Conformément à la réglementation en vigueur, le Vendeur consommateur peut recourir gratuitement à un
                  médiateur de la consommation en cas de litige non résolu.
                </p>
                <p>
                  À défaut de résolution amiable, tout litige relèvera de la compétence exclusive des tribunaux
                  français, conformément aux règles de droit commun.
                </p>
              </div>
            </section>

            {/* Article 12 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 12 - Droit applicable
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes CGV sont régies par le droit français. Elles sont rédigées en langue française et, en
                  cas de traduction, seule la version française fait foi.
                </p>
              </div>
            </section>

            {/* Article 13 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Article 13 - Modification des CGV
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Comptoir Art & Jewelry se réserve le droit de modifier les présentes CGV à tout moment. Les CGV
                  applicables sont celles en vigueur au moment de la conclusion du contrat de vente.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-4 font-[family-name:var(--font-crimson-pro)]">
                Nous contacter
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Pour toute question concernant ces conditions générales de vente :</p>
                <ul className="list-none space-y-2 ml-4">
                  <li>
                    <strong>Email :</strong> comptoirartandjewelry@gmail.com
                  </li>
                  <li>
                    <strong>Téléphone :</strong> 06 25 63 76 58
                  </li>
                  <li>
                    <strong>Adresse :</strong> Comptoir Art & Jewelry, Nouvelle-Aquitaine, France
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
