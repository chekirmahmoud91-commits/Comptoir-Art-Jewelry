"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, Loader2 } from "lucide-react"

interface EstimationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EstimationModal({ isOpen, onClose }: EstimationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objectType: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Implement email sending with Resend
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSuccess(true)

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          objectType: "",
          description: "",
        })
        setIsSuccess(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1a1f5c]">Demander une Estimation Gratuite</DialogTitle>
          <DialogDescription className="text-gray-600">
            Remplissez ce formulaire et nous vous contacterons rapidement pour estimer vos objets d'art et antiquités.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a1f5c] mb-2">Demande envoyée !</h3>
            <p className="text-gray-600">Nous vous contacterons dans les plus brefs délais pour votre estimation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1a1f5c] font-semibold">
                Nom complet *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1a1f5c] font-semibold">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#1a1f5c] font-semibold">
                  Téléphone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectType" className="text-[#1a1f5c] font-semibold">
                Type d'objet *
              </Label>
              <Input
                id="objectType"
                name="objectType"
                type="text"
                required
                value={formData.objectType}
                onChange={handleChange}
                placeholder="Ex: Tableau, Meuble ancien, Bijoux..."
                className="border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#1a1f5c] font-semibold">
                Description de l'objet *
              </Label>
              <Textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez votre objet : époque, dimensions, état, marques ou signatures visibles..."
                rows={4}
                className="border-gray-300 focus:border-[#C4A053] focus:ring-[#C4A053] resize-none"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Astuce :</strong> Pour une estimation plus précise, vous pourrez nous envoyer des photos de
                votre objet par email après votre demande.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent"
                disabled={isSubmitting}
              >
                <X className="mr-2 h-4 w-4" />
                Annuler
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#C4A053] hover:bg-[#b39048] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer ma demande
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
