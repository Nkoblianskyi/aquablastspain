"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Settings } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAllCookies = () => {
    localStorage.setItem("cookie-consent", "all")
    localStorage.setItem("analytics-cookies", "true")
    localStorage.setItem("marketing-cookies", "true")
    setIsVisible(false)
  }

  const acceptEssentialOnly = () => {
    localStorage.setItem("cookie-consent", "essential")
    localStorage.setItem("analytics-cookies", "false")
    localStorage.setItem("marketing-cookies", "false")
    setIsVisible(false)
  }

  const saveCustomSettings = () => {
    localStorage.setItem("cookie-consent", "custom")
    // Here you would save the custom settings based on user selection
    setIsVisible(false)
    setShowSettings(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-card/95 backdrop-blur-sm border-border shadow-2xl">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-card-foreground mb-2">Utilizamos cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para análisis y
                  marketing. Puedes gestionar tus preferencias o consultar más información en nuestra{" "}
                  <Link href="/politica-cookies" className="text-primary hover:underline">
                    política de cookies
                  </Link>
                  .
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="p-2 flex-shrink-0">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={acceptEssentialOnly}
                className="flex-1 sm:flex-none bg-transparent"
              >
                Solo Esenciales
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowSettings(true)} className="flex-1 sm:flex-none">
                <Settings className="h-4 w-4 mr-2" />
                Personalizar
              </Button>
              <Button size="sm" onClick={acceptAllCookies} className="flex-1 sm:flex-none">
                Aceptar Todas
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-card-foreground">Configuración de Cookies</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)} className="p-2">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">Cookies Esenciales</h4>
                  <p className="text-xs text-muted-foreground">Necesarias para el funcionamiento básico</p>
                </div>
                <div className="text-xs text-muted-foreground">Siempre activas</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">Cookies Analíticas</h4>
                  <p className="text-xs text-muted-foreground">Nos ayudan a mejorar el sitio web</p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">Cookies de Marketing</h4>
                  <p className="text-xs text-muted-foreground">Para mostrar contenido relevante</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={() => setShowSettings(false)} className="flex-1">
                Cancelar
              </Button>
              <Button size="sm" onClick={saveCustomSettings} className="flex-1">
                Guardar Configuración
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
