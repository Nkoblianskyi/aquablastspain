import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda un servicio de detailing completo?",
    answer:
      "Un servicio de detailing completo puede tardar entre 4 a 8 horas dependiendo del estado del vehículo y los servicios solicitados. Para servicios premium como recubrimiento cerámico, puede extenderse a 1-2 días.",
  },
  {
    question: "¿Qué productos utilizan en sus servicios?",
    answer:
      "Utilizamos exclusivamente productos profesionales de marcas reconocidas como Chemical Guys, Meguiars, y Gtechniq. Todos nuestros productos son de grado profesional y seguros para todo tipo de superficies.",
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer:
      "Sí, ofrecemos garantía en todos nuestros servicios. Los lavados tienen garantía de satisfacción, mientras que servicios como recubrimiento cerámico incluyen garantía de hasta 5 años.",
  },
  {
    question: "¿Necesito cita previa?",
    answer:
      "Recomendamos reservar cita previa para garantizar disponibilidad, especialmente para servicios de detailing completo. También aceptamos servicios express sin cita según disponibilidad.",
  },
  {
    question: "¿Trabajan con todo tipo de vehículos?",
    answer:
      "Sí, trabajamos con todo tipo de vehículos: coches, motos, furgonetas, SUVs y vehículos de lujo. Adaptamos nuestros servicios a las necesidades específicas de cada tipo de vehículo.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y pagos móviles. También ofrecemos planes de pago para servicios premium de alto valor.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
