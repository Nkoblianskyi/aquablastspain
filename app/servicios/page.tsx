import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Star, CheckCircle } from "lucide-react"
import { getAllServices } from "@/lib/services-data"

export default function ServiciosPage() {
  const services = getAllServices()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubre nuestra gama completa de servicios profesionales de lavado y detailing. Cada servicio está
              diseñado para satisfacer las necesidades específicas de tu vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} className="service-card-hover border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {index === 0 ? "Más Popular" : index === 1 ? "Premium" : index === 2 ? "Exclusivo" : "Rápido"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon && <service.icon className="h-8 w-8 mb-2" />}
                    <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/90">{service.shortDescription}</p>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="text-sm">Servicio Premium</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-muted-foreground">
                          + {service.features.length - 4} servicios más...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href={`/servicios/${service.slug}`}>Ver Detalles Completos</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contacto">Reservar Ahora</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">¿No estás seguro qué servicio necesitas?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nuestros expertos te ayudarán a elegir el servicio perfecto para tu vehículo. Contáctanos para una consulta
            personalizada gratuita.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Consulta Gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
