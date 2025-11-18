"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { trackAction } from "@/lib/analytics"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCallClick = () => {
    trackAction("click_call")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1a1f5c] to-[#2a3f7c] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contactez-nous</h1>
            <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
              Notre équipe d&#39;experts est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1a1f5c] mb-6">Nos Coordonnées</h2>
                <p className="text-gray-600 mb-8">
                  N'hésitez pas à nous contacter pour toute demande d'estimation ou d'information sur nos services.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C4A053] hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a1f5c] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1f5c] mb-2">Téléphone</h3>
                      <a
                        href="tel:0625637658"
                        onClick={handleCallClick}
                        className="text-[#C4A053] hover:text-[#1a1f5c] transition-colors text-lg font-medium"
                      >
                        06 25 63 76 58
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C4A053] hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a1f5c] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1f5c] mb-2">Email</h3>
                      <a
                        href="mailto:contact@comptoirartjewelry.fr"
                        className="text-[#C4A053] hover:text-[#1a1f5c] transition-colors break-all"
                      >
                        comptoirartandjewelry@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C4A053] hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a1f5c] p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1f5c] mb-2">Horaires</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Lundi - Vendredi : 8h00 - 21h00</p>
                        <p>Samedi : 09h00 - 19h00</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intervention Zone */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C4A053] hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a1f5c] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1f5c] mb-2">Zone d'intervention</h3>
                      <p className="text-gray-600">
                        Nous intervenons dans toute la région{" "}
                        <span className="font-semibold text-[#C4A053]">Nouvelle-Aquitaine</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Déplacement gratuit à votre domicile pour l'estimation de vos objets d'art
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#C4A053]/20">
              <h2 className="text-2xl font-bold text-[#1a1f5c] mb-6">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                    placeholder="votre@email.fr"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                    placeholder="Votre adresse complète"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053] resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a1f5c] hover:bg-[#C4A053] text-white font-semibold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
