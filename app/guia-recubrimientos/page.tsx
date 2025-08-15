import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Droplets, Sun, Clock, Star, Zap } from "lucide-react"

const coatings = [
  {
    icon: Shield,
    title: "Recubrimiento Cerámico",
    duration: "2-5 años",
    protection: "Excelente",
    description:
      "La protección más avanzada disponible. Crea una capa dura y brillante que repele agua, suciedad y contaminantes.",
    benefits: [
      "Protección UV superior",
      "Efecto hidrofóbico extremo",
      "Resistencia a arañazos menores",
      "Brillo profundo y duradero",
      "Fácil mantenimiento",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Droplets,
    title: "Sellador de Pintura",
    duration: "6-12 meses",
    protection: "Buena",
    description: "Protección sintética que ofrece un excelente brillo y protección contra elementos ambientales.",
    benefits: [
      "Aplicación rápida",
      "Brillo intenso inmediato",
      "Protección contra lluvia ácida",
      "Resistencia a manchas",
      "Relación calidad-precio excelente",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Sun,
    title: "Cera Natural",
    duration: "2-4 meses",
    protection: "Moderada",
    description: "Protección tradicional con ceras naturales que proporciona un brillo cálido y profundo.",
    benefits: [
      "Brillo natural y cálido",
      "Fácil aplicación",
      "Aroma agradable",
      "Realza el color original",
      "Tradición y artesanía",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Zap,
    title: "Spray Wax",
    duration: "2-6 semanas",
    protection: "Básica",
    description: "Protección rápida y conveniente para mantenimiento regular entre servicios completos.",
    benefits: [
      "Aplicación ultra rápida",
      "Perfecto para mantenimiento",
      "Brillo instantáneo",
      "Fácil de usar",
      "Ideal para retoques",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const comparisonFactors = [
  { factor: "Durabilidad", ceramic: "★★★★★", sealant: "★★★★☆", wax: "★★★☆☆", spray: "★★☆☆☆" },
  { factor: "Brillo", ceramic: "★★★★★", sealant: "★★★★★", wax: "★★★★☆", spray: "★★★☆☆" },
  { factor: "Protección UV", ceramic: "★★★★★", sealant: "★★★★☆", wax: "★★★☆☆", spray: "★★☆☆☆" },
  { factor: "Hidrofobicidad", ceramic: "★★★★★", sealant: "★★★★☆", wax: "★★★☆☆", spray: "★★☆☆☆" },
  { factor: "Facilidad de Aplicación", ceramic: "★★☆☆☆", sealant: "★★★★☆", wax: "★★★★☆", spray: "★★★★★" },
  { factor: "Precio", ceramic: "★★☆☆☆", sealant: "★★★☆☆", wax: "★★★★☆", spray: "★★★★★" },
]

export default function CoatingsGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Guía de Recubrimientos Automotrices</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubre los diferentes tipos de protección para tu vehículo y elige la opción que mejor se adapte a tus
              necesidades y presupuesto.
            </p>
          </div>
        </div>
      </section>

      {/* Coatings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Tipos de Recubrimientos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada tipo de protección tiene sus propias características y beneficios únicos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {coatings.map((coating, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={coating.image || "/placeholder.svg"}
                    alt={coating.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <coating.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {coating.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-2xl">{coating.title}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-muted-foreground">{coating.protection}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{coating.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Beneficios Principales:</h4>
                    <ul className="space-y-2">
                      {coating.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Comparación Detallada</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compara las características de cada tipo de recubrimiento
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-4 font-semibold">Característica</th>
                        <th className="text-center p-4 font-semibold">Cerámico</th>
                        <th className="text-center p-4 font-semibold">Sellador</th>
                        <th className="text-center p-4 font-semibold">Cera Natural</th>
                        <th className="text-center p-4 font-semibold">Spray Wax</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFactors.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : "bg-background"}>
                          <td className="p-4 font-medium">{row.factor}</td>
                          <td className="p-4 text-center">{row.ceramic}</td>
                          <td className="p-4 text-center">{row.sealant}</td>
                          <td className="p-4 text-center">{row.wax}</td>
                          <td className="p-4 text-center">{row.spray}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">¿Cuál Elegir?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos a encontrar la protección perfecta para tu vehículo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-4">Máxima Protección</h3>
                <p className="text-muted-foreground mb-4">Para vehículos de alta gama o uso diario intensivo</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">Recomendado: Cerámico</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-4">Equilibrio Perfecto</h3>
                <p className="text-muted-foreground mb-4">Excelente relación calidad-precio y durabilidad</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">Recomendado: Sellador</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-4">Mantenimiento Rápido</h3>
                <p className="text-muted-foreground mb-4">Para retoques frecuentes y mantenimiento regular</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">Recomendado: Spray Wax</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">¿Necesitas Asesoramiento Personalizado?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestros expertos te ayudarán a elegir la protección ideal para tu vehículo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Consulta Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
