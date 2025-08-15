import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Car, Droplets, Wind, Sparkles, Shield, Brush } from "lucide-react"

const interiorTypes = [
  {
    icon: Car,
    title: "Cuero Natural",
    description: "Requiere cuidados específicos para mantener su flexibilidad y apariencia premium.",
    care: [
      "Limpieza con productos específicos para cuero",
      "Acondicionamiento regular cada 3-4 meses",
      "Protección UV para evitar agrietamiento",
      "Evitar productos químicos agresivos",
    ],
    tips: ["Usar protector solar en ventanas", "Limpiar derrames inmediatamente", "Mantener humedad adecuada"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Droplets,
    title: "Cuero Sintético",
    description: "Más resistente que el cuero natural, pero requiere mantenimiento para conservar su aspecto.",
    care: [
      "Limpieza con jabón suave y agua",
      "Secado completo después de la limpieza",
      "Acondicionamiento ocasional",
      "Protección contra rayos UV",
    ],
    tips: ["Más resistente a manchas", "Fácil mantenimiento diario", "Evitar calor excesivo"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Wind,
    title: "Tela y Textiles",
    description: "Materiales porosos que requieren técnicas específicas para eliminar manchas y olores.",
    care: [
      "Aspirado regular y profundo",
      "Limpieza con vapor para desinfección",
      "Tratamiento antimanchas",
      "Secado completo para evitar moho",
    ],
    tips: ["Usar fundas protectoras", "Ventilar regularmente", "Tratar manchas inmediatamente"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Sparkles,
    title: "Alcántara",
    description: "Material premium que requiere técnicas especializadas para mantener su textura única.",
    care: [
      "Cepillado suave en una dirección",
      "Limpieza en seco preferiblemente",
      "Productos específicos para alcántara",
      "Evitar exceso de humedad",
    ],
    tips: ["Cepillar regularmente", "Evitar aceites y grasas", "Mantenimiento profesional"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const cleaningAreas = [
  {
    icon: Shield,
    title: "Salpicadero y Consola",
    description: "Superficies de alto contacto que acumulan polvo, huellas y residuos.",
    process: [
      "Aspirado de ranuras y espacios",
      "Limpieza con productos específicos",
      "Protección UV para evitar agrietamiento",
      "Pulido de superficies brillantes",
    ],
  },
  {
    icon: Brush,
    title: "Alfombrillas y Suelos",
    description: "Zona de mayor desgaste que requiere limpieza profunda regular.",
    process: [
      "Extracción y sacudido",
      "Lavado con agua a presión",
      "Tratamiento antimanchas",
      "Secado completo al aire",
    ],
  },
  {
    icon: Wind,
    title: "Sistema de Ventilación",
    description: "Componente crucial para la calidad del aire interior del vehículo.",
    process: [
      "Cambio de filtro de cabina",
      "Limpieza de conductos",
      "Desinfección antibacteriana",
      "Eliminación de olores",
    ],
  },
]

const maintenanceTips = [
  {
    frequency: "Diario",
    tasks: ["Retirar basura y objetos personales", "Sacudir alfombrillas", "Limpiar derrames inmediatamente"],
  },
  {
    frequency: "Semanal",
    tasks: [
      "Aspirado general de asientos y suelos",
      "Limpieza de superficies con paño húmedo",
      "Organización de compartimentos",
    ],
  },
  {
    frequency: "Mensual",
    tasks: ["Limpieza profunda de tapicería", "Acondicionamiento de cuero", "Limpieza de cristales interiores"],
  },
  {
    frequency: "Trimestral",
    tasks: ["Limpieza profesional completa", "Tratamiento antimanchas", "Desinfección y eliminación de olores"],
  },
]

export default function InteriorCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Guía de Cuidado Interior</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprende a mantener el interior de tu vehículo en perfectas condiciones con técnicas profesionales
              adaptadas a cada tipo de material.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Tipos de Materiales Interiores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada material requiere técnicas y productos específicos para su cuidado óptimo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {interiorTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={type.image || "/placeholder.svg"} alt={type.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-2xl mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Cuidados Específicos:</h4>
                    <ul className="space-y-2">
                      {type.care.map((care, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          {care}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Consejos Profesionales:</h4>
                    <ul className="space-y-2">
                      {type.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Sparkles className="h-3 w-3 text-primary flex-shrink-0 mt-1" />
                          {tip}
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

      {/* Cleaning Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Áreas de Limpieza Específicas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada zona del interior requiere atención y técnicas particulares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cleaningAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-center">{area.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center leading-relaxed">{area.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Proceso de Limpieza:</h4>
                    <ul className="space-y-2">
                      {area.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          {step}
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

      {/* Maintenance Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Calendario de Mantenimiento</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantén tu interior impecable con esta rutina de cuidado profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceTips.map((schedule, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 inline-block mb-4">
                      <span className="font-semibold">{schedule.frequency}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {schedule.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">¿Prefieres un Servicio Profesional?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestros expertos se encargarán de mantener tu interior en perfectas condiciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Reservar Limpieza Interior</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicios/limpieza-interior">Ver Servicio Completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
