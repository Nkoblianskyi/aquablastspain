import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Shield, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/1e1516c75e019db5f12e364c740088f9.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Detailing Premium
            <span className="block text-secondary">para tu Vehículo</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-xl mx-auto leading-relaxed">
            Servicios profesionales de lavado y detailing con calidad excepcional garantizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="px-6 py-3" asChild>
              <Link href="/contacto">Reservar Ahora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              
              <h3 className="font-semibold text-base mb-1">Resultados Premium</h3>
              <p className="text-sm text-white/80">Acabados profesionales</p>
            </div>

            <div className="flex flex-col items-center text-center">
              
              <h3 className="font-semibold text-base mb-1">Productos Premium</h3>
              <p className="text-sm text-white/80">Los mejores del mercado</p>
            </div>

            <div className="flex flex-col items-center text-center">
              
              <h3 className="font-semibold text-base mb-1">Servicio Rápido</h3>
              <p className="text-sm text-white/80">Eficiencia y calidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
