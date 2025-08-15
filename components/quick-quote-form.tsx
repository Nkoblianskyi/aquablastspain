"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calculator } from "lucide-react"
import { SuccessPopup } from "./success-popup"

interface QuickQuoteFormProps {
  children: React.ReactNode
}

export function QuickQuoteForm({ children }: QuickQuoteFormProps) {
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
        <DialogContent className="sm:max-w-lg">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Solicitar Presupuesto Rápido</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Obtén un presupuesto personalizado en 24 horas. Solo necesitamos algunos datos básicos.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre-presupuesto">Nombre *</Label>
                    <Input id="nombre-presupuesto" required />
                  </div>
                  <div>
                    <Label htmlFor="telefono-presupuesto">Teléfono *</Label>
                    <Input id="telefono-presupuesto" type="tel" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email-presupuesto">Email *</Label>
                  <Input id="email-presupuesto" type="email" required />
                </div>

                <div>
                  <Label htmlFor="servicio-presupuesto">Servicio Principal *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Qué servicio necesitas?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lavado-premium">Lavado Premium</SelectItem>
                      <SelectItem value="detailing-completo">Detailing Completo</SelectItem>
                      <SelectItem value="proteccion-ceramica">Protección Cerámica</SelectItem>
                      <SelectItem value="lavado-express">Lavado Express</SelectItem>
                      <SelectItem value="paquete-personalizado">Paquete Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tipo-vehiculo">Tipo de Vehículo *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedán</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                        <SelectItem value="coupe">Coupé</SelectItem>
                        <SelectItem value="furgoneta">Furgoneta</SelectItem>
                        <SelectItem value="moto">Motocicleta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="estado-vehiculo">Estado del Vehículo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Estado general" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excelente">Excelente</SelectItem>
                        <SelectItem value="bueno">Bueno</SelectItem>
                        <SelectItem value="regular">Regular</SelectItem>
                        <SelectItem value="necesita-atencion">Necesita Atención</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="privacidad-presupuesto" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="privacidad-presupuesto"
                      className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la{" "}
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>
                      .
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Solicitar Presupuesto"}
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
        title="¡Solicitud Enviada!"
        message="Hemos recibido tu solicitud de presupuesto. Te enviaremos una cotización detallada por email en las próximas 24 horas."
      />
    </>
  )
}
