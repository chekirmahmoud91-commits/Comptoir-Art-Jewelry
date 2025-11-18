"use client"

import { Button } from "@/components/ui/button"

interface ExpertSectionProps {
  onEstimationClick: () => void
  departmentName?: string
}

export function ExpertSection({ onEstimationClick, departmentName = "la Nouvelle-Aquitaine" }: ExpertSectionProps) {
  return (
    <section className="container mx-auto px-4 md:py-5 py-5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 ml-5">
          <p className="text-sm text-gray-500">Rachat d’objets d’art dans {departmentName} !</p>
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] text-2xl">"Ça ne vaut rien" - Vous en êtes sûr ?</h2>

          <p className="text-gray-600 leading-relaxed text-justify">
            Avant d'organiser un vide-grenier ou de jeter vos vieux objets, assurez-vous de ne pas laisser s'échapper
            une pépite.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            Vous avez hérité d&#39;un objet dont vous ne connaissez ni l&#39;origine ni la valeur ? Comptoir Art &amp;
            Jewelry vous propose une estimation gratuite réalisée par nos experts spécialisés en objets d&#39;art et
            antiquités.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            Tableaux d'art, meubles anciens, bijoux, montres, argenterie, porcelaine... Même si vous pensez que vos
            objets ne valent pas grand-chose, leur histoire vous réservera peut-être des surprises.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={onEstimationClick}
              className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full px-8 py-6 text-base"
            >
              Recevoir une estimation →
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">Confidentialité garantie. Transaction sécurisée</p>
        </div>

        <div className="relative">
          <img
            src="/professional-auctioneer-examining-antique-with-mag.jpg"
            alt="Expert professionnel en antiquités examinant un objet d'art avec loupe - Estimation gratuite à domicile en Nouvelle-Aquitaine"
            className="w-[85%] h-auto rounded-lg shadow-xl mx-auto md:ml-auto md:mr-0"
          />
        </div>
      </div>
    </section>
  )
}
