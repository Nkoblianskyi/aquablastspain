import Link from "next/link"
import { Car, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Car className="h-8 w-8 text-primary" />
              <span className="font-serif">Aqua Blast Spain</span>
            </Link>
            <p className="text-muted-foreground">
              Servicios premium de lavado y detailing para tu vehículo. Calidad excepcional garantizada.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/servicios/lavado-premium" className="hover:text-primary transition-colors">
                  Lavado Premium
                </Link>
              </li>
              <li>
                <Link href="/servicios/detailing-completo" className="hover:text-primary transition-colors">
                  Detailing Completo
                </Link>
              </li>
              <li>
                <Link href="/servicios/proteccion-ceramica" className="hover:text-primary transition-colors">
                  Protección Cerámica
                </Link>
              </li>
              <li>
                <Link href="/servicios/lavado-express" className="hover:text-primary transition-colors">
                  Lavado Express
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <span className="text-sm">
                  Centro Comercial La Vaguada
                  <br />
                  Madrid, España
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+34 914 658 112</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@aquablastspain.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2025 Aqua Blast Spain. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
