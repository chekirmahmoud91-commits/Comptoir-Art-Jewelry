"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

export function MobileMenuButton() {
  const [open, setOpen] = useState(false)
  const [specialitiesOpen, setSpecialitiesOpen] = useState(false)
  const [zoneOpen, setZoneOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden fixed bottom-24 right-6 z-[9999] w-16 h-16 bg-[#1a1f5c] hover:bg-[#252b6e] rounded-full shadow-2xl flex flex-col items-center justify-center transition-all duration-300"
          aria-label="Menu de navigation"
        >
          <div className="flex flex-col gap-1 mb-1">
            <div className="w-6 h-0.5 bg-white rounded-full" />
            <div className="w-6 h-0.5 bg-white rounded-full" />
            <div className="w-6 h-0.5 bg-white rounded-full" />
          </div>
          <span className="text-white text-[9px] font-bold tracking-wider">MENU</span>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full h-full max-w-full overflow-y-auto p-0">
        <nav className="flex flex-col gap-4 p-8 pt-16">
          <Link
            href="/"
            className={`text-lg transition-colors py-2 border-b border-gray-200 ${
              isActive("/")
                ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                : "text-gray-700 hover:text-[#1a1f5c]"
            }`}
            onClick={() => setOpen(false)}
          >
            Accueil
          </Link>

          <Link
            href="/a-propos"
            className={`text-lg transition-colors py-2 border-b border-gray-200 ${
              isActive("/a-propos")
                ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                : "text-gray-700 hover:text-[#1a1f5c]"
            }`}
            onClick={() => setOpen(false)}
          >
            Qui sommes-nous
          </Link>

          <Link
            href="/categories"
            className={`text-lg transition-colors py-2 border-b border-gray-200 ${
              isActive("/categories")
                ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                : "text-gray-700 hover:text-[#1a1f5c]"
            }`}
            onClick={() => setOpen(false)}
          >
            Nos catégories
          </Link>

          <Collapsible open={specialitiesOpen} onOpenChange={setSpecialitiesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-gray-700 hover:text-[#1a1f5c] transition-colors py-2 border-b border-gray-200">
              Nos spécialités
              <ChevronDown className={`w-4 h-4 transition-transform ${specialitiesOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 mt-2 space-y-2">
              <Link
                href="/bijoux-montres"
                className={`block transition-colors py-2 ${
                  isActive("/bijoux-montres")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Bijoux & Montres
              </Link>
              <Link
                href="/meubles-anciens"
                className={`block transition-colors py-2 ${
                  isActive("/meubles-anciens")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Meubles Anciens
              </Link>
              <Link
                href="/tableaux-peintures"
                className={`block transition-colors py-2 ${
                  isActive("/tableaux-peintures")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Tableaux & Peintures
              </Link>
              <Link
                href="/argenterie-orfevrerie"
                className={`block transition-colors py-2 ${
                  isActive("/argenterie-orfevrerie")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Argenterie & Orfèvrerie
              </Link>
              <Link
                href="/ceramiques-porcelaines"
                className={`block transition-colors py-2 ${
                  isActive("/ceramiques-porcelaines")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Céramiques & Porcelaines
              </Link>
              <Link
                href="/sculptures-bronzes"
                className={`block transition-colors py-2 ${
                  isActive("/sculptures-bronzes")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Sculptures & Bronzes
              </Link>
              <Link
                href="/objets-art-asiatiques"
                className={`block transition-colors py-2 ${
                  isActive("/objets-art-asiatiques")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Objets d'Art Asiatiques
              </Link>
              <Link
                href="/horlogerie"
                className={`block transition-colors py-2 ${
                  isActive("/horlogerie")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Horlogerie
              </Link>
              <Link
                href="/verrerie-cristal"
                className={`block transition-colors py-2 ${
                  isActive("/verrerie-cristal")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Verrerie & Cristal
              </Link>
              <Link
                href="/tapis-tapisseries"
                className={`block transition-colors py-2 ${
                  isActive("/tapis-tapisseries")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Tapis & Tapisseries
              </Link>
              <Link
                href="/livres-anciens"
                className={`block transition-colors py-2 ${
                  isActive("/livres-anciens")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Livres Anciens
              </Link>
              <Link
                href="/vins-spiritueux"
                className={`block transition-colors py-2 ${
                  isActive("/vins-spiritueux")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Vins & Spiritueux
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={zoneOpen} onOpenChange={setZoneOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-gray-700 hover:text-[#1a1f5c] transition-colors py-2 border-b border-gray-200">
              Zone d'intervention
              <ChevronDown className={`w-4 h-4 transition-transform ${zoneOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 mt-2 space-y-2">
              <Link
                href="/zone-intervention"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Nouvelle-Aquitaine
              </Link>
              <Link
                href="/zone-intervention/charente-16"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/charente-16")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Charente (16)
              </Link>
              <Link
                href="/zone-intervention/gironde-33"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/gironde-33")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Gironde (33)
              </Link>
              <Link
                href="/zone-intervention/charente-maritime-17"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/charente-maritime-17")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Charente-Maritime (17)
              </Link>
              <Link
                href="/zone-intervention/correze-19"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/correze-19")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Corrèze (19)
              </Link>
              <Link
                href="/zone-intervention/creuse-23"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/creuse-23")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Creuse (23)
              </Link>
              <Link
                href="/zone-intervention/dordogne-24"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/dordogne-24")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Dordogne (24)
              </Link>
              <Link
                href="/zone-intervention/landes-40"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/landes-40")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Landes (40)
              </Link>
              <Link
                href="/zone-intervention/lot-et-garonne-47"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/lot-et-garonne-47")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Lot-et-Garonne (47)
              </Link>
              <Link
                href="/zone-intervention/pyrenees-atlantiques-64"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/pyrenees-atlantiques-64")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Pyrénées-Atlantiques (64)
              </Link>
              <Link
                href="/zone-intervention/deux-sevres-79"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/deux-sevres-79")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Deux-Sèvres (79)
              </Link>
              <Link
                href="/zone-intervention/vienne-86"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/vienne-86")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Vienne (86)
              </Link>
              <Link
                href="/zone-intervention/haute-vienne-87"
                className={`block transition-colors py-2 ${
                  isActive("/zone-intervention/haute-vienne-87")
                    ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                    : "text-gray-600 hover:text-[#1a1f5c]"
                }`}
                onClick={() => setOpen(false)}
              >
                Haute-Vienne (87)
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link
            href="/contact"
            className={`text-lg transition-colors py-2 border-b border-gray-200 ${
              isActive("/contact")
                ? "bg-[#C4A053] text-white font-semibold px-4 -mx-4 rounded"
                : "text-gray-700 hover:text-[#1a1f5c]"
            }`}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
