"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Car, Calendar } from "lucide-react"
import { SuccessPopup } from "./success-popup"

interface ServiceBookingFormProps {
  serviceName: string
  children: React.ReactNode
}

export function ServiceBookingForm({ serviceName, children }: ServiceBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccess(true)
    setIsOpen(false)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Reservar {serviceName}</CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario para reservar tu cita. Te confirmaremos la disponibilidad en las próximas 2
                horas.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre-reserva">Nombre Completo *</Label>
                    <Input id="nombre-reserva" required />
                  </div>
                  <div>
                    <Label htmlFor="telefono-reserva">Teléfono *</Label>
                    <Input id="telefono-reserva" type="tel" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email-reserva">Email *</Label>
                  <Input id="email-reserva" type="email" required />
                </div>

                {/* Vehicle Information */}
                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Car className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Información del Vehículo</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="marca-reserva">Marca *</Label>
                      <Input id="marca-reserva" placeholder="BMW, Mercedes, Audi..." required />
                    </div>
                    <div>
                      <Label htmlFor="modelo-reserva">Modelo *</Label>
                      <Input id="modelo-reserva" placeholder="Serie 3, Clase C..." required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="año-reserva">Año</Label>
                      <Input id="año-reserva" type="number" placeholder="2020" />
                    </div>
                    <div>
                      <Label htmlFor="color-reserva">Color</Label>
                      <Input id="color-reserva" placeholder="Blanco, Negro, Azul..." />
                    </div>
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="space-y-4 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Fecha y Hora Preferida</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fecha-reserva">Fecha Preferida *</Label>
                      <Input id="fecha-reserva" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="hora-reserva">Hora Preferida</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una hora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <Label htmlFor="servicios-adicionales">Servicios Adicionales</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Necesitas algún servicio extra?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ozono">Desinfección con Ozono</SelectItem>
                      <SelectItem value="motor">Limpieza de Motor</SelectItem>
                      <SelectItem value="tapiceria">Tratamiento Especial Tapicería</SelectItem>
                      <SelectItem value="ninguno">Ninguno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requirements */}
                <div>
                  <Label htmlFor="observaciones">Observaciones Especiales</Label>
                  <Textarea
                    id="observaciones"
                    placeholder="¿Hay algo específico que debemos saber sobre tu vehículo? (manchas difíciles, daños, etc.)"
                    rows={3}
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacidad-reserva" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="privacidad-reserva"
                      className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la{" "}
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>{" "}
                      y las condiciones de reserva.
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando Reserva..." : "Confirmar Reserva"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="¡Reserva Confirmada!"
        message={`Tu solicitud de reserva para ${serviceName} ha sido enviada. Te confirmaremos la disponibilidad por teléfono o email en las próximas 2 horas.`}
      />
    </>
  )
}
