import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </Badge>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{service.title}</h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                >
                  <Link href="/contacto?servicio=reserva&tipo=reserva">
                    Reservar Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                >
                  <Link href="/contacto?servicio=presupuesto&tipo=presupuesto">Solicitar Presupuesto</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-emerald-100">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">Servicio Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">¿Qué Incluye Este Servicio?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100"
              >
                <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestro Proceso Profesional</h2>

          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-emerald-100"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de Nuestro {service.title}</h2>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Por Qué Elegir Aqua Blast Spain?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Más de 10 años de experiencia</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Productos premium certificados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Técnicos especializados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Garantía de satisfacción</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para Transformar Tu Vehículo?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contacta con nosotros y descubre la diferencia de un servicio profesional
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <Link href="/contacto?servicio=reserva&tipo=reserva">
                Reservar {service.title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
