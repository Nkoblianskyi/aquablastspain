import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, Sparkles, Shield, Brush } from "lucide-react"

const careMethods = [
  {
    id: "exterior",
    title: "Cuidado Exterior",
    icon: Droplets,
    methods: [
      {
        name: "Lavado de Dos Cubos",
        description: "Técnica profesional que previene rayones utilizando dos cubos separados para enjuague y lavado.",
        benefits: ["Previene rayones", "Limpieza más efectiva", "Preserva la pintura"],
      },
      {
        name: "Descontaminación con Clay Bar",
        description: "Eliminación de contaminantes adheridos que el lavado normal no puede remover.",
        benefits: ["Superficie ultra suave", "Mejor adherencia de ceras", "Elimina contaminantes"],
      },
      {
        name: "Pulido y Encerado",
        description: "Restauración del brillo original y protección duradera de la pintura.",
        benefits: ["Brillo espectacular", "Protección UV", "Elimina micro-rayones"],
      },
    ],
  },
  {
    id: "interior",
    title: "Cuidado Interior",
    icon: Brush,
    methods: [
      {
        name: "Limpieza Profunda de Tapicería",
        description: "Tratamiento especializado para diferentes tipos de materiales del interior.",
        benefits: ["Elimina manchas difíciles", "Desinfección completa", "Restaura colores originales"],
      },
      {
        name: "Acondicionamiento de Cuero",
        description: "Nutrición y protección específica para asientos y elementos de cuero.",
        benefits: ["Previene grietas", "Mantiene flexibilidad", "Protección UV"],
      },
      {
        name: "Ozono Desinfectante",
        description: "Eliminación de olores y desinfección completa del habitáculo.",
        benefits: ["Elimina bacterias", "Neutraliza olores", "Ambiente saludable"],
      },
    ],
  },
  {
    id: "protection",
    title: "Protección Avanzada",
    icon: Shield,
    methods: [
      {
        name: "Recubrimiento Cerámico",
        description: "Capa protectora nanotecnológica que ofrece protección superior y brillo duradero.",
        benefits: ["Protección 2-5 años", "Hidrofóbico", "Resistente a químicos"],
      },
      {
        name: "Film Protector PPF",
        description: "Película transparente que protege la pintura de impactos y rayones.",
        benefits: ["Protección física", "Auto-reparación", "Invisible al ojo"],
      },
      {
        name: "Tratamiento de Cristales",
        description: "Aplicación de productos hidrofóbicos para mejor visibilidad.",
        benefits: ["Repele agua", "Mejor visibilidad", "Fácil limpieza"],
      },
    ],
  },
]

export function CareMethodsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Métodos y Técnicas Profesionales</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las técnicas más avanzadas y productos premium para garantizar los mejores resultados en el
            cuidado de tu vehículo
          </p>
        </div>

        <Tabs defaultValue="exterior" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {careMethods.map((method) => (
              <TabsTrigger key={method.id} value={method.id} className="flex items-center gap-2">
                <method.icon className="h-4 w-4" />
                {method.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {careMethods.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.methods.map((method, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 rounded-full p-2">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{method.name}</h3>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>

                      <div>
                        <h4 className="font-medium mb-3 text-primary">Beneficios:</h4>
                        <ul className="space-y-2">
                          {method.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                              <Sparkles className="h-3 w-3 text-secondary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
