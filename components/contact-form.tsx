"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import { SuccessPopup } from "./success-popup"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Respuesta garantizada en 24h
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ponte en contacto con nuestros expertos y descubre cómo podemos hacer que tu coche luzca como nuevo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Nuestra Ubicación</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Centro Comercial La Vaguada
                <br />
                Av. Monforte de Lemos, 36
                <br />
                28029 Madrid, España
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Email</h3>
              <p className="text-slate-600">info@aquablastspain.online</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Teléfono</h3>
              <p className="text-slate-600">+34 914 658 112</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-3">Solicitar Información</h3>
                <p className="text-slate-600 text-lg">Completa el formulario y te responderemos lo antes posible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium text-sm">
                      Nombre *
                    </Label>
                    <Input
                      id="name"
                      required
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 font-medium text-sm">
                    Servicio de Interés
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl h-12">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lavado-premium">Lavado Premium</SelectItem>
                      <SelectItem value="detailing-completo">Detailing Completo</SelectItem>
                      <SelectItem value="proteccion-ceramica">Protección Cerámica</SelectItem>
                      <SelectItem value="lavado-express">Lavado Express</SelectItem>
                      <SelectItem value="pulido-profesional">Pulido Profesional</SelectItem>
                      <SelectItem value="limpieza-interior">Limpieza Interior Premium</SelectItem>
                      <SelectItem value="tratamiento-cuero">Tratamiento de Cuero</SelectItem>
                      <SelectItem value="descontaminacion">Descontaminación Completa</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium text-sm">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu vehículo y qué servicio necesitas..."
                    rows={5}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl resize-none text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Enviar Solicitud
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="¡Solicitud Enviada!"
        message="Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 24 horas."
      />
    </section>
  )
}
