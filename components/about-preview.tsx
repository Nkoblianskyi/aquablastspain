import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Satisfechos" },
  { icon: Clock, value: "8+", label: "Años de Experiencia" },
  { icon: Award, value: "50+", label: "Premios y Reconocimientos" },
  { icon: Star, value: "4.9", label: "Valoración Media" },
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sobre Aqua Blast Spain</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Somos especialistas en el cuidado premium de vehículos con más de 8 años de experiencia en el sector.
              Nuestro equipo de profesionales utiliza las técnicas más avanzadas y productos de la más alta calidad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ubicados en el corazón de Madrid, ofrecemos servicios personalizados que se adaptan a las necesidades
              específicas de cada cliente y vehículo.
            </p>
            <Button size="lg" asChild>
              <Link href="/sobre-nosotros">Conoce Más Sobre Nosotros</Link>
            </Button>
          </div>

          <div className="relative">
            <img
              src="/04e64010373293a6ef0639e89ded2435.jpg"
              alt="Equipo Aqua Blast Spain"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
