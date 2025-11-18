"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Upload } from "lucide-react"

interface EstimationFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EstimationFormModal({ isOpen, onClose }: EstimationFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    objectType: "",
    description: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const contactResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          object_type: formData.objectType,
          message: formData.description,
        }),
      })

      if (!contactResponse.ok) {
        throw new Error("Failed to save contact")
      }

      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("objectType", formData.objectType)
      formDataToSend.append("description", formData.description)

      files.forEach((file) => {
        formDataToSend.append("files", file)
      })

      const response = await fetch("/api/send-estimation", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          onClose()
          setFormData({ name: "", email: "", phone: "", address: "", objectType: "", description: "" })
          setFiles([])
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1a1f5c]">Estimation gratuite</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition" aria-label="Fermer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse *
            </label>
            <input
              type="text"
              id="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none"
              placeholder="Votre adresse complète"
            />
          </div>

          <div>
            <label htmlFor="objectType" className="block text-sm font-medium text-gray-700 mb-1">
              Type d'objet *
            </label>
            <select
              id="objectType"
              required
              value={formData.objectType}
              onChange={(e) => setFormData({ ...formData, objectType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none"
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="Peinture">Peinture</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Mobilier">Mobilier</option>
              <option value="Bijoux">Bijoux</option>
              <option value="Montre">Montre</option>
              <option value="Céramique">Céramique</option>
              <option value="Argenterie">Argenterie</option>
              <option value="Livre ancien">Livre ancien</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description de l'objet *
            </label>
            <textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f5c] focus:border-transparent outline-none resize-none"
              placeholder="Décrivez votre objet (dimensions, état, provenance, etc.)"
            />
          </div>

          <div>
            <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">
              Photos de l'objet (optionnel)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1a1f5c] transition">
              <input type="file" id="files" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
              <label htmlFor="files" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Cliquez pour ajouter des photos ou glissez-les ici</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG jusqu'à 10MB</p>
              </label>
            </div>
            {files.length > 0 && (
              <div className="mt-2 space-y-1">
                {files.map((file, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    ✓ {file.name}
                  </p>
                ))}
              </div>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Votre demande a été envoyée avec succès !
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1a1f5c] hover:bg-[#252b6e] text-white rounded-full py-6 text-base"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande →"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            En soumettant ce formulaire, vous acceptez d&#39;être contacté par Comptoir Art &amp; Jewelry.
          </p>
        </form>
      </div>
    </div>
  )
}
