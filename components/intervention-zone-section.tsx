"use client"

import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const departments = [
  { name: "Charente (16)", url: "/zone-intervention/charente-16" },
  { name: "Charente-Maritime (17)", url: "/zone-intervention/charente-maritime-17" },
  { name: "Corrèze (19)", url: "/zone-intervention/correze-19" },
  { name: "Creuse (23)", url: "/zone-intervention/creuse-23" },
  { name: "Dordogne (24)", url: "/zone-intervention/dordogne-24" },
  { name: "Gironde (33)", url: "/zone-intervention/gironde-33" },
  { name: "Landes (40)", url: "/zone-intervention/landes-40" },
  { name: "Lot-et-Garonne (47)", url: "/zone-intervention/lot-et-garonne-47" },
  { name: "Pyrénées-Atlantiques (64)", url: "/zone-intervention/pyrenees-atlantiques-64" },
  { name: "Deux-Sèvres (79)", url: "/zone-intervention/deux-sevres-79" },
  { name: "Vienne (86)", url: "/zone-intervention/vienne-86" },
  { name: "Haute-Vienne (87)", url: "/zone-intervention/haute-vienne-87" },
]

export function InterventionZoneSection() {
  return (
    <section id="zone" className="bg-gradient-to-b from-white to-gray-50 py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="md:text-4xl font-bold text-[#1a1f5c] mb-4 text-2xl">Notre zone d'intervention</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-justify">
            Nous intervenons dans toute la région Nouvelle-Aquitaine pour estimer et racheter vos objets d'art et
            antiquités. Déplacement gratuit à votre domicile.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-8">
          {departments.map((dept, index) => (
            <Link key={index} href={dept.url} className="group">
              <Card
                className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-white border-2 border-gray-100 hover:border-[#c4a053] cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <MapPin className="w-6 h-6 text-[#c4a053]" />
                  <h3 className="font-bold text-[#1a1f5c] text-sm leading-tight group-hover:text-[#1a1f5c]">
                    {dept.name}
                  </h3>
                  <span className="text-xs text-[#c4a053] font-medium mt-1">Voir notre service →</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a1f5c] to-[#252b6e] text-white rounded-2xl p-8 text-center shadow-xl animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Vous êtes dans la région ?</h3>
          <p className="mb-6 text-gray-200">
            Contactez-nous pour une estimation gratuite et un déplacement à votre domicile
          </p>
          <a
            href="tel:0625637658"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm"
          >
            Appelez-nous : 06 25 63 76 58
          </a>
        </div>
      </div>
    </section>
  )
}
