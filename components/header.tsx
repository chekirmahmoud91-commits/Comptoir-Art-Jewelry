"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Phone, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { EstimationFormModal } from "@/components/estimation-form-modal"
import { trackCallClick, trackEstimationClick } from "@/lib/analytics"

interface HeaderProps {
  onEstimationClick?: () => void
}

export function Header({ onEstimationClick }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  const handleEstimationClick = () => {
    trackEstimationClick()
    if (onEstimationClick) {
      onEstimationClick()
    } else {
      setIsModalOpen(true)
    }
  }

  const handleCallClick = () => {
    trackCallClick()
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm text-background">
        <div className="container mx-auto px-1 py-2 flex items-center justify-between text-background bg-background">
          <Link href="/" className="flex items-center group gap-3 -ml-[20px] md:-ml-[10px]">
            <div className="relative w-[101px] h-[101px] md:w-28 md:h-28 flex-shrink-0">
              <Image
                src="/images/design-mode/Decorative%20Flourishes%20Antique%20Ornamental%20Logo%20Design%20Template.png"
                alt="Comptoir Art Jewelry Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110 mx-3"
              />
            </div>
            <div className="flex flex-col -ml-[5px] md:ml-0">
              <span className="text-xl md:text-2xl font-bold text-[#1a1f5c] group-hover:text-[#C4A053] transition-colors duration-300">
                Comptoir Art
              </span>
              <span className="text-lg md:text-xl font-bold text-[#1a1f5c] group-hover:text-[#C4A053] transition-colors duration-300">
                & Jewelry
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/a-propos"
              className={`text-sm transition-colors px-3 py-2 rounded ${
                isActive("/a-propos") ? "bg-[#C4A053] text-white font-semibold" : "text-gray-700 hover:text-[#1a1f5c]"
              }`}
            >
              Qui sommes-nous
            </Link>
            <Link
              href="/categories"
              className={`text-sm transition-colors px-3 py-2 rounded ${
                isActive("/categories") ? "bg-[#C4A053] text-white font-semibold" : "text-gray-700 hover:text-[#1a1f5c]"
              }`}
            >
              Nos catégories
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#1a1f5c] transition-colors outline-none">
                Nos spécialités
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    href="/bijoux-montres"
                    className={`cursor-pointer ${isActive("/bijoux-montres") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Bijoux & Montres
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/meubles-anciens"
                    className={`cursor-pointer ${isActive("/meubles-anciens") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Meubles Anciens
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/tableaux-peintures"
                    className={`cursor-pointer ${isActive("/tableaux-peintures") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Tableaux & Peintures
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/argenterie-orfevrerie"
                    className={`cursor-pointer ${isActive("/argenterie-orfevrerie") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Argenterie & Orfèvrerie
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ceramiques-porcelaines"
                    className={`cursor-pointer ${isActive("/ceramiques-porcelaines") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Céramiques & Porcelaines
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/sculptures-bronzes"
                    className={`cursor-pointer ${isActive("/sculptures-bronzes") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Sculptures & Bronzes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/objets-art-asiatiques"
                    className={`cursor-pointer ${isActive("/objets-art-asiatiques") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Objets d'Art Asiatiques
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/horlogerie"
                    className={`cursor-pointer ${isActive("/horlogerie") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Horlogerie
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/verrerie-cristal"
                    className={`cursor-pointer ${isActive("/verrerie-cristal") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Verrerie & Cristal
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/tapis-tapisseries"
                    className={`cursor-pointer ${isActive("/tapis-tapisseries") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Tapis & Tapisseries
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/livres-anciens"
                    className={`cursor-pointer ${isActive("/livres-anciens") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Livres Anciens
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/vins-spiritueux"
                    className={`cursor-pointer ${isActive("/vins-spiritueux") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Vins & Spiritueux
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#1a1f5c] transition-colors outline-none">
                Zone d'intervention
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention"
                    className={`cursor-pointer ${isActive("/zone-intervention") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Nouvelle-Aquitaine
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/charente-16"
                    className={`cursor-pointer ${isActive("/zone-intervention/charente-16") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Charente (16)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/gironde-33"
                    className={`cursor-pointer ${isActive("/zone-intervention/gironde-33") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Gironde (33)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/charente-maritime-17"
                    className={`cursor-pointer ${isActive("/zone-intervention/charente-maritime-17") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Charente-Maritime (17)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/correze-19"
                    className={`cursor-pointer ${isActive("/zone-intervention/correze-19") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Corrèze (19)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/creuse-23"
                    className={`cursor-pointer ${isActive("/zone-intervention/creuse-23") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Creuse (23)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/dordogne-24"
                    className={`cursor-pointer ${isActive("/zone-intervention/dordogne-24") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Dordogne (24)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/landes-40"
                    className={`cursor-pointer ${isActive("/zone-intervention/landes-40") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Landes (40)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/lot-et-garonne-47"
                    className={`cursor-pointer ${isActive("/zone-intervention/lot-et-garonne-47") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Lot-et-Garonne (47)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/pyrenees-atlantiques-64"
                    className={`cursor-pointer ${isActive("/zone-intervention/pyrenees-atlantiques-64") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Pyrénées-Atlantiques (64)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/deux-sevres-79"
                    className={`cursor-pointer ${isActive("/zone-intervention/deux-sevres-79") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Deux-Sèvres (79)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/vienne-86"
                    className={`cursor-pointer ${isActive("/zone-intervention/vienne-86") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Vienne (86)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/zone-intervention/haute-vienne-87"
                    className={`cursor-pointer ${isActive("/zone-intervention/haute-vienne-87") ? "bg-[#C4A053] text-white font-semibold" : ""}`}
                  >
                    Haute-Vienne (87)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/contact"
              className={`text-sm transition-colors px-3 py-2 rounded ${
                isActive("/contact") ? "bg-[#C4A053] text-white font-semibold" : "text-gray-700 hover:text-[#1a1f5c]"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white rounded-full px-2 bg-transparent transition-all duration-300 text-sm"
            >
              <a href="tel:0625637658" className="flex items-center gap-1.5" onClick={handleCallClick}>
                <Phone className="w-4 h-4" />
                <span>06 25 63 76 58</span>
              </a>
            </Button>
            <Button
              onClick={handleEstimationClick}
              className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full px-3 transition-all duration-300 hover:scale-105 text-sm"
            >
              Estimation gratuite
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <div className="flex flex-col gap-2 w-36">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#1a1f5c] text-[#1a1f5c] hover:bg-[#1a1f5c] hover:text-white rounded-full text-xs transition-all duration-300 bg-transparent w-full px-2"
              >
                <a href="tel:0625637658" className="flex items-center justify-center gap-1.5" onClick={handleCallClick}>
                  <Phone className="w-3 h-3" />
                  <span>Appelez-nous</span>
                </a>
              </Button>
              <Button
                onClick={handleEstimationClick}
                size="sm"
                className="bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full w-full text-xs transition-all duration-300 px-2"
              >
                Estimation gratuite
              </Button>
            </div>
          </div>
        </div>
      </header>

      {!onEstimationClick && <EstimationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default Header
