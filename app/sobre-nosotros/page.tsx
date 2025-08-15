import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Clock, Star, Target, Heart, Shield, Zap } from "lucide-react"

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Satisfechos" },
  { icon: Clock, value: "8+", label: "Años de Experiencia" },
  { icon: Award, value: "50+", label: "Premios y Reconocimientos" },
  { icon: Star, value: "4.9", label: "Valoración Media" },
]

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Cada detalle cuenta. Trabajamos con precisión milimétrica para lograr resultados perfectos.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos. Cada vehículo recibe el mismo cuidado que daríamos al nuestro.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Productos premium y técnicas probadas para garantizar la máxima calidad y durabilidad.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Siempre a la vanguardia con las últimas tecnologías y métodos del sector.",
  },
]

const team = [
  {
    name: "Carlos Mendoza",
    role: "Director y Fundador",
    experience: "12 años de experiencia",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ana García",
    role: "Especialista en Detailing",
    experience: "8 años de experiencia",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Miguel Torres",
    role: "Técnico en Protección Cerámica",
    experience: "6 años de experiencia",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Sobre Aqua Blast Spain</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Más que un servicio de lavado, somos artesanos del cuidado automotriz. Desde 2016, transformamos vehículos
              con pasión, precisión y productos premium.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aqua Blast Spain nació de una pasión compartida por la perfección automotriz. Fundada por Carlos
                Mendoza, comenzamos como un pequeño taller en Madrid con una visión clara: elevar el estándar del
                cuidado vehicular en España.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lo que comenzó como un sueño se ha convertido en el centro de referencia para propietarios de vehículos
                que buscan la excelencia. Hemos crecido, pero nunca hemos perdido nuestro compromiso con la calidad
                artesanal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ubicados en el Centro Comercial La Vaguada, ofrecemos un espacio moderno y equipado con la última
                tecnología, donde cada vehículo recibe un tratamiento personalizado y profesional.
              </p>
            </div>
            <div className="relative">
              <img
                src="/82890829-fa43-4e32-b00b-b78b9079ce36.png"
                alt="Instalaciones Aqua Blast Spain"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada servicio y definen nuestra excelencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados con años de experiencia en el cuidado automotriz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Nuestros Logros</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">¿Listo para Experimentar la Diferencia?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a miles de clientes satisfechos que confían en Aqua Blast Spain para el cuidado premium de sus
              vehículos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Reservar Cita</Link>
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
