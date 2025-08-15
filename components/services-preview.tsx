import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { getAllServices } from "@/lib/services-data"

export function ServicesPreview() {
  const services = getAllServices()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios profesionales para mantener tu vehículo en perfectas condiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={service.id} className="service-card-hover border-0 shadow-lg h-full flex flex-col">
              <div className="relative h-48 overflow-hidden rounded-t-lg flex-shrink-0">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDescription}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="w-full group bg-transparent" asChild>
                    <Link href={`/servicios/${service.slug}`}>
                      Más Información
                      <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8" asChild>
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
