"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Calendar,
  Send,
  MessageCircle,
  Calculator,
  HelpCircle,
  Star,
  Shield,
  Award,
  Users,
} from "lucide-react"
import { SuccessPopup } from "./success-popup"

export function ContactFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formType, setFormType] = useState("consulta")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccess(true)
  }

  const getSuccessMessage = () => {
    switch (formType) {
      case "reserva":
        return "Hemos recibido tu solicitud de reserva. Te confirmaremos la disponibilidad en las próximas 2 horas."
      case "presupuesto":
        return "Hemos recibido tu solicitud de presupuesto. Te enviaremos una cotización detallada en 24 horas."
      default:
        return "Hemos recibido tu consulta. Nos pondremos en contacto contigo en las próximas 24 horas."
    }
  }

  const getSuccessTitle = () => {
    switch (formType) {
      case "reserva":
        return "¡Reserva Recibida!"
      case "presupuesto":
        return "¡Solicitud de Presupuesto Enviada!"
      default:
        return "¡Consulta Enviada!"
    }
  }

  const formTypeOptions = [
    { value: "consulta", label: "Consulta General", icon: HelpCircle, color: "from-blue-500 to-blue-600" },
    { value: "reserva", label: "Reservar Cita", icon: Calendar, color: "from-emerald-500 to-emerald-600" },
    { value: "presupuesto", label: "Solicitar Presupuesto", icon: Calculator, color: "from-purple-500 to-purple-600" },
  ]

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-medium">
                  <MessageCircle className="h-4 w-4" />
                  Contacto Directo
                </div>
                <h1 className="font-serif text-6xl md:text-7xl font-bold text-white leading-tight">
                  Hablemos de tu
                  <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    vehículo
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Nuestro equipo de especialistas está listo para transformar tu vehículo. Reserva, consulta o solicita
                  un presupuesto personalizado.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-emerald-500 rounded-lg p-2">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-slate-300 text-sm">Clientes Satisfechos</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500 rounded-lg p-2">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">5 años</span>
                  </div>
                  <p className="text-slate-300 text-sm">de Experiencia</p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 pt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-2 sm:p-3 flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-semibold text-sm sm:text-base break-words">
                        Centro Comercial La Vaguada
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm break-words">
                        Av. Monforte de Lemos, 36 - Madrid
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 sm:p-3 flex-shrink-0">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-sm sm:text-base break-all">+34 914 658 112</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-2 sm:p-3 flex-shrink-0">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-xs sm:text-sm break-all">info@aquablastspain.online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:pl-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">¿Cómo podemos ayudarte?</h2>
                  <p className="text-slate-600">Completa el formulario y nos pondremos en contacto contigo</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Type Selection */}
                  <div className="space-y-4">
                    <Label className="text-slate-700 font-semibold">Tipo de Consulta *</Label>
                    <div className="grid grid-cols-1 gap-3">
                      {formTypeOptions.map((option) => {
                        const IconComponent = option.icon
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormType(option.value)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4 ${
                              formType === option.value
                                ? "border-emerald-500 bg-emerald-50 shadow-md"
                                : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                            }`}
                          >
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${option.color}`}
                            >
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-semibold text-slate-900">{option.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-slate-700 font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        required
                        className="h-11 border-slate-200 focus:border-emerald-500 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-slate-700 font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        className="h-11 border-slate-200 focus:border-emerald-500 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="h-11 border-slate-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Servicio de Interés</Label>
                    <Select>
                      <SelectTrigger className="h-11 border-slate-200 focus:border-emerald-500 rounded-lg">
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
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vehicle Info - Conditional */}
                  {(formType === "reserva" || formType === "presupuesto") && (
                    <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Car className="h-5 w-5 text-emerald-600" />
                        <h3 className="font-semibold text-slate-900">Información del Vehículo</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Marca</Label>
                          <Input placeholder="BMW, Mercedes..." className="h-10 border-slate-200 rounded-lg" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Modelo</Label>
                          <Input placeholder="Serie 3, Clase C..." className="h-10 border-slate-200 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Date Selection - Conditional */}
                  {formType === "reserva" && (
                    <div className="bg-emerald-50 rounded-xl p-6 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                        <h3 className="font-semibold text-slate-900">Fecha Preferida</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Fecha</Label>
                          <Input type="date" className="h-10 border-slate-200 rounded-lg" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Hora</Label>
                          <Select>
                            <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                              <SelectValue placeholder="Hora" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Mensaje</Label>
                    <Textarea
                      placeholder={
                        formType === "reserva"
                          ? "Cuéntanos sobre el estado de tu vehículo..."
                          : formType === "presupuesto"
                            ? "Describe qué servicios necesitas..."
                            : "¿En qué podemos ayudarte?"
                      }
                      rows={4}
                      className="border-slate-200 focus:border-emerald-500 rounded-lg resize-none"
                    />
                  </div>

                  {/* Privacy */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="privacidad" required className="mt-1 border-black" />
                      <Label htmlFor="privacidad" className="text-sm text-slate-600 leading-relaxed">
                        Acepto la{" "}
                        <a href="/politica-privacidad" className="text-emerald-600 hover:underline font-medium">
                          Política de Privacidad
                        </a>
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {formType === "reserva"
                          ? "Solicitar Reserva"
                          : formType === "presupuesto"
                            ? "Solicitar Presupuesto"
                            : "Enviar Consulta"}
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Horarios</h3>
                <div className="text-slate-300 space-y-1">
                  <p>Lun - Vie: 9:00 - 19:00</p>
                  <p>Sábados: 9:00 - 17:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Garantía</h3>
                <p className="text-slate-300">Todos nuestros servicios incluyen garantía de satisfacción</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Calidad Premium</h3>
                <p className="text-slate-300">Productos y técnicas de la más alta calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title={getSuccessTitle()}
        message={getSuccessMessage()}
      />
    </>
  )
}
