import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react"

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tu privacidad es importante para nosotros. Aquí explicamos cómo recopilamos, utilizamos y protegemos tu
              información personal.
            </p>
            <p className="text-sm text-muted-foreground">Última actualización: 2025
</p>
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
                <h2 className="font-serif text-3xl font-bold mb-6">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En Aqua Blast Spain, nos comprometemos a proteger y respetar tu privacidad. Esta política explica cómo
                  recopilamos, utilizamos, almacenamos y protegemos tu información personal cuando utilizas nuestros
                  servicios o visitas nuestro sitio web.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política cumple con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la
                  Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) de
                  España.
                </p>
              </CardContent>
            </Card>

            {/* Data Controller */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold">Responsable del Tratamiento</h2>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Razón Social:</strong> Aqua Blast Spain
                    <br />
                    <strong>Dirección:</strong> Centro Comercial La Vaguada, Av. Monforte de Lemos, 36, 28029 Madrid,
                    España
                    <br />
                    <strong>Email:</strong> info@aquablastspain.online
                    <br />
                    <strong>Teléfono:</strong> +34 914 658 112
                    <br />
                    <strong>Sitio Web:</strong> www.aquablastspain.online
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">¿Qué Información Recopilamos?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 rounded-full p-2">
                        <UserCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">Datos Personales</h3>
                    </div>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Nombre y apellidos</li>
                      <li>• Dirección de email</li>
                      <li>• Número de teléfono</li>
                      <li>• Dirección postal (si aplica)</li>
                      <li>• Información del vehículo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-secondary/10 rounded-full p-2">
                        <Eye className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-xl">Datos de Navegación</h3>
                    </div>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Dirección IP</li>
                      <li>• Tipo de navegador</li>
                      <li>• Páginas visitadas</li>
                      <li>• Tiempo de permanencia</li>
                      <li>• Cookies y tecnologías similares</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Purpose of Processing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">¿Para Qué Utilizamos Tu Información?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Prestación de Servicios</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Procesar reservas y citas</li>
                      <li>• Proporcionar servicios de detailing</li>
                      <li>• Gestionar pagos y facturación</li>
                      <li>• Atención al cliente</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Comunicación</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Confirmaciones de citas</li>
                      <li>• Recordatorios de servicios</li>
                      <li>• Responder consultas</li>
                      <li>• Soporte técnico</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Marketing (con consentimiento)</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Ofertas especiales</li>
                      <li>• Novedades y promociones</li>
                      <li>• Newsletter</li>
                      <li>• Programas de fidelización</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Mejora del Servicio</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Análisis de uso del sitio web</li>
                      <li>• Optimización de servicios</li>
                      <li>• Desarrollo de nuevos servicios</li>
                      <li>• Investigación de mercado</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Basis */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Base Legal del Tratamiento</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ejecución de Contrato</h3>
                      <p className="text-muted-foreground text-sm">
                        Para la prestación de servicios de detailing y gestión de citas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Consentimiento</h3>
                      <p className="text-muted-foreground text-sm">
                        Para comunicaciones de marketing y cookies no esenciales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Interés Legítimo</h3>
                      <p className="text-muted-foreground text-sm">
                        Para mejora de servicios, análisis y seguridad del sitio web.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Obligación Legal</h3>
                      <p className="text-muted-foreground text-sm">
                        Para cumplir con obligaciones fiscales y contables.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">¿Compartimos Tu Información?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales.
                  Solo compartimos información en las siguientes circunstancias:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Proveedores de Servicios</h3>
                    <p className="text-muted-foreground text-sm">
                      Con empresas que nos ayudan a operar nuestro negocio (procesamiento de pagos, hosting, análisis
                      web).
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Obligaciones Legales</h3>
                    <p className="text-muted-foreground text-sm">
                      Cuando sea requerido por ley, orden judicial o autoridades competentes.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Protección de Derechos</h3>
                    <p className="text-muted-foreground text-sm">
                      Para proteger nuestros derechos, propiedad, seguridad o la de nuestros usuarios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold">Seguridad de los Datos</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra
                  acceso no autorizado, alteración, divulgación o destrucción.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Medidas Técnicas</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Cifrado SSL/TLS</li>
                      <li>• Firewalls y sistemas de seguridad</li>
                      <li>• Copias de seguridad regulares</li>
                      <li>• Actualizaciones de seguridad</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Medidas Organizativas</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Acceso limitado a datos</li>
                      <li>• Formación en privacidad</li>
                      <li>• Políticas de seguridad</li>
                      <li>• Auditorías regulares</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">¿Cuánto Tiempo Conservamos Tus Datos?</h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Datos de Clientes Activos</h3>
                    <p className="text-muted-foreground text-sm">
                      Mientras mantengas una relación comercial con nosotros y durante 6 años adicionales para cumplir
                      con obligaciones legales.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Datos de Marketing</h3>
                    <p className="text-muted-foreground text-sm">
                      Hasta que retires tu consentimiento o durante 3 años desde la última interacción.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Datos de Navegación</h3>
                    <p className="text-muted-foreground text-sm">
                      Según se especifica en nuestra política de cookies (generalmente entre 1 mes y 2 años).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Tus Derechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tienes los siguientes derechos respecto a tu información personal:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Acceso</h3>
                      <p className="text-muted-foreground text-sm">
                        Solicitar información sobre qué datos tenemos sobre ti.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Rectificación</h3>
                      <p className="text-muted-foreground text-sm">Corregir datos inexactos o incompletos.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Supresión</h3>
                      <p className="text-muted-foreground text-sm">Solicitar la eliminación de tus datos personales.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Limitación</h3>
                      <p className="text-muted-foreground text-sm">Restringir el procesamiento de tus datos.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Portabilidad</h3>
                      <p className="text-muted-foreground text-sm">Recibir tus datos en formato estructurado.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Oposición</h3>
                      <p className="text-muted-foreground text-sm">Oponerte al procesamiento de tus datos.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Retirada de Consentimiento</h3>
                      <p className="text-muted-foreground text-sm">Retirar el consentimiento en cualquier momento.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Derecho de Reclamación</h3>
                      <p className="text-muted-foreground text-sm">Presentar una queja ante la autoridad de control.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold">Contacto y Ejercicio de Derechos</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Para ejercer cualquiera de tus derechos o si tienes preguntas sobre esta política de privacidad,
                  puedes contactarnos a través de:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Información de Contacto</h3>
                    <p className="text-muted-foreground text-sm">
                      Email: info@aquablastspain.online
                      <br />
                      Teléfono: +34 914 658 112
                      <br />
                      Dirección: Centro Comercial La Vaguada
                      <br />
                      Av. Monforte de Lemos, 36
                      <br />
                      28029 Madrid, España
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Autoridad de Control</h3>
                    <p className="text-muted-foreground text-sm">
                      Agencia Española de Protección de Datos
                      <br />
                      C/ Jorge Juan, 6<br />
                      28001 Madrid
                      <br />
                      Tel: 912 663 517
                      <br />
                      www.aepd.es
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contacto">Contactar</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/politica-cookies">Ver Política de Cookies</Link>
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
