import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1f5c] to-[#0f1333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#c4a053] text-xl">Comptoir Art &amp; Jewelry</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Spécialiste de l'achat d'objets d'art et d'antiquités en Nouvelle-Aquitaine depuis plus de 15 ans.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a053] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a053] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c4a053] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#c4a053]">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Nos catégories
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/processus" className="text-gray-300 hover:text-white transition-colors">
                  Notre processus
                </a>
              </li>
              <li>
                <a href="/zone-intervention" className="text-gray-300 hover:text-white transition-colors">
                  Zone d'intervention
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#c4a053]">Nos spécialités</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/bijoux-montres" className="hover:text-white transition-colors">
                  Bijoux & Montres
                </a>
              </li>
              <li>
                <a href="/meubles-anciens" className="hover:text-white transition-colors">
                  Meubles anciens
                </a>
              </li>
              <li>
                <a href="/tableaux-sculptures" className="hover:text-white transition-colors">
                  Tableaux & Sculptures
                </a>
              </li>
              <li>
                <a href="/argenterie-porcelaine" className="hover:text-white transition-colors">
                  Argenterie & Porcelaine
                </a>
              </li>
              <li>
                <a href="/objets-art-asiatique" className="hover:text-white transition-colors">
                  Objets d'art asiatique
                </a>
              </li>
              <li>
                <a href="/instruments-musique" className="hover:text-white transition-colors">
                  Instruments de musique
                </a>
              </li>
              <li>
                <a href="/tapis-tapisseries" className="hover:text-white transition-colors">
                  Tapis & Tapisseries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#c4a053]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c4a053] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:0625637658" className="text-gray-300 hover:text-white transition-colors">
                    06 25 63 76 58
                  </a>
                  <p className="text-sm text-gray-400">Lundi-Samedi: 8h-21h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c4a053] flex-shrink-0 mt-1" />
                <a
                  href="mailto:contact@comptoirartjewelry.fr"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {"comptoirartandjewelry@gmail.com"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c4a053] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Nouvelle-Aquitaine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Comptoir Art Jewelry. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="/cgv" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
