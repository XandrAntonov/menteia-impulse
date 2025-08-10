import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewsletterForm from "@/components/common/NewsletterForm";
import { Download, FileText, CheckSquare, Users, Zap, Target } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Guía completa: Primeros pasos con IA en tu empresa",
      description: "Manual de 45 páginas con framework de evaluación, casos de uso por sector y checklist de implementación.",
      type: "Guía PDF",
      icon: FileText,
      downloadCount: "2,340",
      category: "Estrategia"
    },
    {
      id: 2,
      title: "Biblioteca de prompts para Marketing",
      description: "150+ prompts validados para campañas, copywriting, segmentación y análisis de resultados.",
      type: "Templates",
      icon: Target,
      downloadCount: "1,820",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Checklist de compliance para LegalTech",
      description: "Lista verificable para implementar IA en departamentos legales manteniendo estándares de seguridad.",
      type: "Checklist",
      icon: CheckSquare,
      downloadCount: "950",
      category: "Legal"
    },
    {
      id: 4,
      title: "ROI Calculator para proyectos de IA",
      description: "Hoja de cálculo interactiva para estimar costes, ahorros y retorno de inversión de iniciativas de IA.",
      type: "Excel",
      icon: Zap,
      downloadCount: "1,560",
      category: "Finanzas"
    },
    {
      id: 5,
      title: "Templates de prompts para Operaciones",
      description: "Prompts específicos para automatización de procesos, reporting y análisis operacional.",
      type: "Templates",
      icon: Target,
      downloadCount: "1,200",
      category: "Operaciones"
    },
    {
      id: 6,
      title: "Guía de herramientas IA por sector",
      description: "Comparativa actualizada de las mejores herramientas de IA organizadas por sector y caso de uso.",
      type: "Guía PDF",
      icon: FileText,
      downloadCount: "2,100",
      category: "Herramientas"
    }
  ];

  const roleSpecificPrompts = [
    {
      role: "Marketing Manager",
      description: "Prompts para campañas, análisis de audiencia y optimización de contenido",
      promptCount: 45,
      icon: Target
    },
    {
      role: "Operations Manager", 
      description: "Automatización de procesos, reporting y análisis de eficiencia",
      promptCount: 38,
      icon: Zap
    },
    {
      role: "Legal Counsel",
      description: "Drafting de contratos, compliance y revisión de documentos",
      promptCount: 29,
      icon: CheckSquare
    },
    {
      role: "Finance Director",
      description: "Análisis financiero, reporting automático y forecasting",
      promptCount: 34,
      icon: FileText
    },
    {
      role: "HR Manager",
      description: "Screening de CVs, employee engagement y análisis de performance",
      promptCount: 26,
      icon: Users
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Recursos gratuitos para acelerar tu <span className="text-gradient">adopción de IA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guías descargables, plantillas de prompts y checklists validados por profesionales que ya integran IA exitosamente.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-center max-w-4xl mx-auto">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Accede a todos nuestros recursos
              </h2>
              <p className="text-xl text-white/90">
                Suscríbete y recibe acceso inmediato a guías, templates y casos de estudio exclusivos.
              </p>
              <div className="flex justify-center">
                <NewsletterForm placeholder="Tu email profesional" size="lg" />
              </div>
              <p className="text-sm text-white/80">
                ✓ Sin spam ✓ Contenido semanal ✓ Casos reales ✓ Cancela cuando quieras
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Biblioteca de recursos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Card key={resource.id} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{resource.type}</div>
                      <div className="text-xs text-muted-foreground">{resource.downloadCount} descargas</div>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role-specific prompts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Plantillas de prompts por rol
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prompts específicos, validados y listos para usar según tu función en la empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {roleSpecificPrompts.map((role, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                    <role.icon className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-lg font-semibold">{role.role}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {role.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">{role.promptCount}</div>
                  <div className="text-xs text-muted-foreground">prompts incluidos</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              ¿Por qué nuestros recursos funcionan?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Validados en empresas reales</h3>
                <p className="text-muted-foreground">
                  Cada recurso ha sido probado y optimizado en empresas españolas con resultados medibles.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Creados por profesionales</h3>
                <p className="text-muted-foreground">
                  Desarrollados por expertos que implementan IA a diario en sectores regulados.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Listos para usar</h3>
                <p className="text-muted-foreground">
                  No necesitas adaptarlos. Funcionan desde el primer momento con instrucciones claras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-center max-w-4xl mx-auto">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                ¿Necesitas ayuda personalizada?
              </h2>
              <p className="text-xl text-white/90">
                Únete a nuestra comunidad privada para recibir feedback sobre tu implementación y acceso a recursos exclusivos.
              </p>
              <Button variant="secondary" size="lg">
                Únete a la comunidad
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;