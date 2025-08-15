import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie, Shield, Settings, Eye } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Política de Cookies</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Información detallada sobre el uso de cookies en nuestro sitio web y cómo gestionamos tu privacidad.
            </p>
            <p className="text-sm text-muted-foreground">Última actualización: 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">¿Qué son las cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro
                  sitio web. Nos ayudan a mejorar tu experiencia de navegación, recordar tus preferencias y analizar
                  cómo utilizas nuestros servicios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En Aqua Blast Spain respetamos tu privacidad y te ofrecemos control total sobre las cookies que
                  utilizamos. Esta política explica qué cookies utilizamos, para qué las utilizamos y cómo puedes
                  gestionarlas.
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Tipos de Cookies que Utilizamos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Cookies Esenciales</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Son necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Gestión de sesiones de usuario</li>
                      <li>• Seguridad y autenticación</li>
                      <li>• Funcionalidad del carrito de servicios</li>
                      <li>• Preferencias de idioma</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <Eye className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-xl">Cookies Analíticas</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Google Analytics</li>
                      <li>• Estadísticas de uso</li>
                      <li>• Análisis de rendimiento</li>
                      <li>• Optimización de contenido</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Cookies Funcionales</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Mejoran la funcionalidad y personalización del sitio web.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Recordar preferencias de usuario</li>
                      <li>• Configuración de formularios</li>
                      <li>• Personalización de contenido</li>
                      <li>• Funciones de chat en vivo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <Cookie className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-xl">Cookies de Marketing</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Se utilizan para mostrar anuncios relevantes y medir la efectividad de campañas.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Publicidad personalizada</li>
                      <li>• Seguimiento de conversiones</li>
                      <li>• Remarketing</li>
                      <li>• Análisis de campañas</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cookie Details Table */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Detalle de Cookies Utilizadas</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Nombre</th>
                        <th className="text-left py-3 px-4 font-semibold">Propósito</th>
                        <th className="text-left py-3 px-4 font-semibold">Duración</th>
                        <th className="text-left py-3 px-4 font-semibold">Tipo</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">cookie-consent</td>
                        <td className="py-3 px-4 text-muted-foreground">Recordar preferencias de cookies</td>
                        <td className="py-3 px-4 text-muted-foreground">1 año</td>
                        <td className="py-3 px-4">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Esencial</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">_ga</td>
                        <td className="py-3 px-4 text-muted-foreground">Google Analytics - Identificador único</td>
                        <td className="py-3 px-4 text-muted-foreground">2 años</td>
                        <td className="py-3 px-4">
                          <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">Analítica</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">_gid</td>
                        <td className="py-3 px-4 text-muted-foreground">Google Analytics - Identificador de sesión</td>
                        <td className="py-3 px-4 text-muted-foreground">24 horas</td>
                        <td className="py-3 px-4">
                          <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">Analítica</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">session_id</td>
                        <td className="py-3 px-4 text-muted-foreground">Gestión de sesión de usuario</td>
                        <td className="py-3 px-4 text-muted-foreground">Sesión</td>
                        <td className="py-3 px-4">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Esencial</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">user_preferences</td>
                        <td className="py-3 px-4 text-muted-foreground">Preferencias de usuario y configuración</td>
                        <td className="py-3 px-4 text-muted-foreground">6 meses</td>
                        <td className="py-3 px-4">
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">Funcional</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Management */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Gestión de Cookies</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Control de Cookies en el Navegador</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en
                      cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>
                        • <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                      </li>
                      <li>
                        • <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                      </li>
                      <li>
                        • <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                      </li>
                      <li>
                        • <strong>Edge:</strong> Configuración → Privacidad → Cookies
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-3">Herramientas de Terceros</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Para cookies de servicios de terceros como Google Analytics, puedes utilizar estas herramientas:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>
                        •{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          href="https://www.youronlinechoices.com/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Your Online Choices
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          href="https://optout.networkadvertising.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          NAI Opt-out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Información Legal</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Esta política de cookies cumple con la normativa europea (GDPR) y la Ley Orgánica de Protección de
                    Datos Personales y garantía de los derechos digitales (LOPDGDD) de España.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Responsable del tratamiento:</strong>
                    <br />
                    Aqua Blast Spain
                    <br />
                    Centro Comercial La Vaguada
                    <br />
                    Av. Monforte de Lemos, 36
                    <br />
                    28029 Madrid, España
                    <br />
                    Email: info@aquablastspain.online
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Te
                    recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact and Actions */}
            <Card className="border-0 shadow-lg bg-primary/5">
              <CardContent className="p-8 text-center">
                <h2 className="font-serif text-2xl font-bold mb-4">¿Tienes Preguntas?</h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes alguna pregunta sobre nuestra política de cookies o quieres ejercer tus derechos, no dudes
                  en contactarnos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contacto">Contactar</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/politica-privacidad">Ver Política de Privacidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
