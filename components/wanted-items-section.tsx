"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const wantedItems = [
  {
    title: "Mobilier de style et mobilier contemporain de créateur",
    description:
      "Coffres, cabinets, commodes, bureaux marquetés, époque Louis XIII à Napoléon III... Meubles contemporains de créateur, meubles industriels etc...",
    image: "/wanted-furniture.jpg",
  },
  {
    title: "Vaisselle et argenterie, arts de la table",
    description:
      "Ménagères classiques, couverts anciens, couverts en argent, assiettes en porcelaine, services de table tout style et toute époque, décoration de table cristal, faïencerie...",
    image: "/wanted-silverware.jpg",
  },
  {
    title: "Sculpture et bronze",
    description: "Sculpture en pierre, marbre ou bois, toute époque. Bronze toute époque et tout style.",
    image: "/wanted-sculpture.jpg",
  },
  {
    title: "Oeuvres d'art",
    description:
      "Peintures toute époque et tout style (abstrait, impressionniste, ancien ou moderne), aquarelles, gravures, dessins, croquis originaux, photographies anciennes...",
    image: "/wanted-artwork.jpg",
  },
  {
    title: "Horlogerie et montres",
    description:
      "Montres de marque, montres à gousset, montres de poche, montres bracelet. Pendules, pendulettes, objets d'horlogerie, outillage d'horlogerie.",
    image: "/wanted-watches.jpg",
  },
  {
    title: "Fourrure, vêtements de luxe et maroquinerie",
    description:
      "Tous types de fourrures, foulards en soie, vêtement et maroquinerie de grandes maisons: Hermès, Chanel, Christian Dior etc...",
    image: "/wanted-luxury.jpg",
  },
  {
    title: "Bijouterie & joaillerie de luxe",
    description:
      "Toutes époques : art déco, art nouveau, vintage, 19ème. Tous types de bijoux: bagues, bracelets, colliers, pendentifs, boucles d'oreilles, médaillons, gourmettes, sautoirs, broches etc...",
    image: "/wanted-jewelry.jpg",
  },
  {
    title: "Arts asiatiques",
    description:
      "Arts chinois, japonais, vietnamiens... Peintures, laques, statues, armes, armures, tissus, vêtements, meubles, écrits, bronzes, jades, ivoires, porcelaines, corail...",
    image: "/wanted-asian-art.jpg",
  },
]

export function WantedItemsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % wantedItems.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? wantedItems.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="md:py-24 py-5 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/antique-collection-background.jpg')",
        }}
      />
      {/* Gradient overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl lg:text-5xl font-bold text-[#C4A053] mb-4 text-[rgba(37,43,110,1)] text-2xl">
            Nous recherchons pour nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous possédez l&#39;un de ces objets ? Contactez-nous pour une estimation gratuite !
          </p>
        </div>

        <div className="relative px-4 md:px-20 text-secondary-foreground bg-transparent">
          {/* Navigation Buttons - Elegant Design */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-md border border-[#C4A053]/30 shadow-2xl hover:shadow-[#C4A053]/20 hover:scale-110 hover:bg-gradient-to-br hover:from-[#1a1f5c] hover:to-[#C4A053] hover:border-transparent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-8 w-8 text-[#1a1f5c] group-hover:text-white transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-md border border-[#C4A053]/30 shadow-2xl hover:shadow-[#C4A053]/20 hover:scale-110 hover:bg-gradient-to-br hover:from-[#C4A053] hover:to-[#1a1f5c] hover:border-transparent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group"
            aria-label="Next item"
          >
            <ChevronRight className="h-8 w-8 text-[#1a1f5c] group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {wantedItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl mx-auto max-w-7xl border border-[#C4A053]/20 h-[450px] md:h-[500px] flex flex-col relative">
                    {/* Image */}
                    <div className="relative h-56 md:h-72 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} - Nous recherchons ce type d'objets d'art et antiquités`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 py-3 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-[#C4A053] mb-4 text-[rgba(37,43,110,1)]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-4">{item.description}</p>
                    </div>

                    <div className="h-1.5 bg-gradient-to-r from-transparent via-[#C4A053] to-transparent flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {wantedItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative group disabled:cursor-not-allowed transition-all duration-300 ${
                  index === currentIndex ? "scale-110" : "hover:scale-105"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`flex items-center justify-center transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#1a1f5c] to-[#C4A053] shadow-lg shadow-[#C4A053]/30"
                      : "w-7 h-7 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300 hover:border-[#C4A053]"
                  }`}
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      index === currentIndex
                        ? "text-white text-xs md:text-sm"
                        : "text-gray-500 text-[10px] md:text-xs group-hover:text-[#C4A053]"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                {/* Progress indicator */}
                {index === currentIndex && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 md:w-8 h-1 bg-gradient-to-r from-[#1a1f5c] to-[#C4A053] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
