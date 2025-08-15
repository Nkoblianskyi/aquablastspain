import { Droplets, Sparkles, Shield, Zap, Car, Brush, Gem, Wind } from "lucide-react"

export interface Service {
  id: string
  icon: any
  title: string
  description: string
  shortDescription: string
  image: string
  slug: string
  duration: string
  features: string[]
  process: string[]
  benefits: string[]
  included: string[]
}

export const servicesData: Service[] = [
  {
    id: "lavado-premium",
    icon: Droplets,
    title: "Lavado Premium",
    description:
      "Nuestro servicio de lavado premium combina técnicas tradicionales con productos de última generación para ofrecer un resultado excepcional. Cada vehículo recibe un tratamiento personalizado que incluye prelavado, lavado con espuma activa, secado sin contacto y acabado con productos de protección.",
    shortDescription: "Lavado completo exterior e interior con productos de alta gama y acabado perfecto",
    image: "/2702846e642109ddb9cb8dec04b7bd5b.jpg",
    slug: "lavado-premium",
    duration: "2-3 horas",
    features: [
      "Prelavado con descontaminante",
      "Lavado con espuma activa pH neutro",
      "Limpieza de llantas y neumáticos",
      "Secado sin contacto",
      "Aplicación de cera protectora",
      "Limpieza de cristales interior y exterior",
    ],
    process: [
      "Inspección inicial del vehículo",
      "Prelavado para eliminar suciedad gruesa",
      "Aplicación de espuma activa",
      "Lavado manual con técnica de dos cubos",
      "Enjuague completo",
      "Secado con toallas de microfibra",
      "Aplicación de productos de acabado",
    ],
    benefits: [
      "Protección duradera de la pintura",
      "Eliminación completa de contaminantes",
      "Brillo profundo y duradero",
      "Mantenimiento de valor del vehículo",
    ],
    included: [
      "Lavado exterior completo",
      "Limpieza interior básica",
      "Productos premium incluidos",
      "Garantía de satisfacción",
    ],
  },
  {
    id: "detailing-completo",
    icon: Sparkles,
    title: "Detailing Completo",
    description:
      "El servicio más completo que ofrecemos. Una restauración integral que devuelve a tu vehículo su aspecto original o incluso mejor. Incluye corrección de pintura, tratamiento de cuero, limpieza profunda de motor y aplicación de protecciones duraderas.",
    shortDescription: "Restauración completa del vehículo dentro y fuera con técnicas profesionales",
    image: "/353557f0007d4974f55776855befc2c6.jpg",
    slug: "detailing-completo",
    duration: "6-8 horas",
    features: [
      "Corrección de pintura multietapa",
      "Tratamiento profesional de cuero",
      "Limpieza profunda de motor",
      "Restauración de plásticos",
      "Protección cerámica aplicada",
      "Detailing completo interior",
    ],
    process: [
      "Evaluación completa del estado del vehículo",
      "Descontaminación química y mecánica",
      "Corrección de pintura con máquina",
      "Tratamiento especializado de superficies",
      "Limpieza profunda interior",
      "Aplicación de protecciones",
      "Inspección final y entrega",
    ],
    benefits: [
      "Restauración completa del vehículo",
      "Eliminación de defectos de pintura",
      "Protección a largo plazo",
      "Incremento significativo del valor",
    ],
    included: [
      "Todos los servicios premium",
      "Corrección de pintura profesional",
      "Productos de máxima calidad",
      "Garantía extendida",
    ],
  },
  {
    id: "proteccion-ceramica",
    icon: Shield,
    title: "Protección Cerámica",
    description:
      "La máxima protección para tu vehículo. Nuestro recubrimiento cerámico de grado profesional crea una barrera invisible que protege contra rayos UV, contaminantes ambientales y facilita enormemente el mantenimiento futuro.",
    shortDescription: "Recubrimiento cerámico para máxima protección y brillo duradero",
    image: "/fc251b0072a72bcbf69fc83e5c35bf0d.jpg",
    slug: "proteccion-ceramica",
    duration: "4-6 horas",
    features: [
      "Recubrimiento cerámico 9H",
      "Protección UV avanzada",
      "Efecto hidrofóbico",
      "Resistencia química",
      "Brillo profundo permanente",
      "Facilita el mantenimiento",
    ],
    process: [
      "Preparación exhaustiva de la superficie",
      "Descontaminación completa",
      "Corrección menor de pintura",
      "Aplicación del recubrimiento cerámico",
      "Curado bajo condiciones controladas",
      "Inspección final de calidad",
    ],
    benefits: [
      "Protección hasta 5 años",
      "Mantenimiento simplificado",
      "Resistencia a arañazos menores",
      "Brillo duradero sin encerado",
    ],
    included: [
      "Preparación completa de superficie",
      "Recubrimiento cerámico premium",
      "Kit de mantenimiento",
      "Garantía del fabricante",
    ],
  },
  {
    id: "lavado-express",
    icon: Zap,
    title: "Lavado Express",
    description:
      "Para cuando necesitas resultados rápidos sin comprometer la calidad. Nuestro servicio express utiliza técnicas optimizadas y productos de secado rápido para devolver el brillo a tu vehículo en tiempo récord.",
    shortDescription: "Servicio rápido y eficiente para mantener tu coche impecable",
    image: "/f985d6ee11ed1931cd8ca1ff71d69e4a.jpg",
    slug: "lavado-express",
    duration: "45-60 minutos",
    features: [
      "Lavado exterior rápido",
      "Limpieza de cristales",
      "Aspirado interior básico",
      "Secado rápido",
      "Brillo instantáneo",
      "Sin cita previa",
    ],
    process: [
      "Enjuague inicial",
      "Aplicación de champú express",
      "Lavado rápido con microfibra",
      "Enjuague final",
      "Secado con aire comprimido",
      "Acabado con spray de brillo",
    ],
    benefits: ["Ahorro de tiempo", "Mantenimiento regular", "Precio económico", "Disponibilidad inmediata"],
    included: ["Lavado exterior básico", "Limpieza de cristales", "Aspirado rápido", "Productos de calidad"],
  },
  {
    id: "encerado-premium",
    icon: Car,
    title: "Encerado Premium",
    description:
      "Aplicación profesional de cera de carnauba de la más alta calidad. Este tratamiento proporciona una protección excepcional y un brillo profundo que realza el color natural de tu vehículo.",
    shortDescription: "Aplicación de cera de alta calidad para protección y brillo excepcional",
    image: "/693a0cbbb4e887fcfce15ca88b8b13c4.jpg",
    slug: "encerado-premium",
    duration: "2-3 horas",
    features: [
      "Cera de carnauba premium",
      "Aplicación manual profesional",
      "Pulido previo incluido",
      "Protección duradera",
      "Brillo profundo",
      "Repelente al agua",
    ],
    process: [
      "Limpieza previa de la superficie",
      "Evaluación del estado de la pintura",
      "Pulido ligero si es necesario",
      "Aplicación de cera por paneles",
      "Tiempo de curado",
      "Pulido final para brillo",
    ],
    benefits: [
      "Protección natural de la pintura",
      "Brillo cálido y profundo",
      "Facilita limpiezas futuras",
      "Realza el color original",
    ],
    included: ["Cera premium de carnauba", "Pulido previo", "Aplicación profesional", "Consejos de mantenimiento"],
  },
  {
    id: "limpieza-interior",
    icon: Brush,
    title: "Limpieza Interior",
    description:
      "Servicio especializado en la limpieza profunda del habitáculo. Utilizamos productos específicos para cada tipo de material, desde cuero hasta tejidos técnicos, garantizando higiene y confort.",
    shortDescription: "Limpieza profunda de tapicería, alfombrillas y todos los componentes internos",
    image: "/504c1505b13efd03f38e29f9fee2e82a.jpg",
    slug: "limpieza-interior",
    duration: "2-3 horas",
    features: [
      "Aspirado profundo completo",
      "Limpieza de tapicería",
      "Tratamiento de cuero",
      "Limpieza de plásticos",
      "Desinfección incluida",
      "Eliminación de olores",
    ],
    process: [
      "Retirada de objetos personales",
      "Aspirado completo de asientos y alfombrillas",
      "Limpieza de superficies duras",
      "Tratamiento específico de tapicería",
      "Limpieza de cristales interiores",
      "Aplicación de protectores",
    ],
    benefits: [
      "Ambiente interior saludable",
      "Eliminación de alérgenos",
      "Conservación de materiales",
      "Confort mejorado",
    ],
    included: ["Aspirado completo", "Productos especializados", "Tratamiento antimicrobiano", "Ambientador natural"],
  },
  {
    id: "pulido-profesional",
    icon: Gem,
    title: "Pulido Profesional",
    description:
      "Corrección profesional de defectos de pintura mediante técnicas de pulido multietapa. Eliminamos arañazos, marcas de lavado y oxidación, restaurando el brillo original de la carrocería.",
    shortDescription: "Eliminación de arañazos y restauración del brillo original de la pintura",
    image: "/4659d07d6b7ee1ebedaac5222ea4a9bf.jpg",
    slug: "pulido-profesional",
    duration: "4-6 horas",
    features: [
      "Corrección multietapa",
      "Eliminación de arañazos",
      "Restauración de brillo",
      "Técnicas profesionales",
      "Máquinas especializadas",
      "Productos de alta gama",
    ],
    process: [
      "Evaluación de defectos de pintura",
      "Enmascarado de áreas sensibles",
      "Pulido con compuesto corrector",
      "Refinado con pulimento fino",
      "Acabado con producto de brillo",
      "Inspección bajo diferentes luces",
    ],
    benefits: [
      "Eliminación de defectos visibles",
      "Restauración del brillo original",
      "Preparación para protecciones",
      "Mejora estética significativa",
    ],
    included: ["Evaluación profesional", "Pulido multietapa", "Productos premium", "Garantía de resultado"],
  },
  {
    id: "descontaminacion",
    icon: Wind,
    title: "Descontaminación",
    description:
      "Proceso especializado para eliminar contaminantes adheridos que el lavado convencional no puede remover. Incluye descontaminación química y mecánica para una superficie perfectamente limpia.",
    shortDescription: "Eliminación de contaminantes, alquitrán y residuos adheridos a la carrocería",
    image: "/4cc1e88d97b7e4ff5498077b8dcd7ef1.jpg",
    slug: "descontaminacion",
    duration: "2-4 horas",
    features: [
      "Descontaminación química",
      "Clay bar profesional",
      "Eliminación de alquitrán",
      "Remoción de insectos",
      "Limpieza de residuos industriales",
      "Preparación para tratamientos",
    ],
    process: [
      "Evaluación de contaminantes",
      "Aplicación de descontaminante químico",
      "Uso de clay bar en toda la superficie",
      "Eliminación de residuos específicos",
      "Enjuague y secado completo",
      "Inspección táctil final",
    ],
    benefits: [
      "Superficie perfectamente lisa",
      "Mejor adherencia de protecciones",
      "Eliminación de contaminantes dañinos",
      "Preparación óptima para tratamientos",
    ],
    included: [
      "Descontaminantes profesionales",
      "Clay bar de calidad",
      "Lubricantes especializados",
      "Evaluación post-servicio",
    ],
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find((service) => service.slug === slug)
}

export const getAllServices = (): Service[] => {
  return servicesData
}
