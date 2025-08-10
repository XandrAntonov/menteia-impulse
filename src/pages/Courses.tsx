import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, Target } from "lucide-react";

const Courses = () => {
  const workshops = [
    {
      id: 1,
      title: "IA para Marketing: De la estrategia a la implementación",
      description: "Aprende a integrar IA en campañas, segmentación y análisis de performance. Incluye casos reales y herramientas prácticas.",
      level: "Intermedio",
      duration: "2 días",
      format: "Presencial + Online",
      date: "15-16 Febrero 2025",
      location: "Madrid",
      price: 450,
      maxParticipants: 20,
      currentParticipants: 12,
      topics: [
        "Automatización de copys con GPT",
        "Segmentación inteligente de audiencias",
        "A/B testing asistido por IA",
        "Análisis predictivo de campañas"
      ],
      targetAudience: "Marketing managers, especialistas en contenido, directores comerciales"
    },
    {
      id: 2,
      title: "LegalTech: Compliance y eficiencia con IA",
      description: "Workflow para drafting, revisión de contratos y due diligence manteniendo los estándares de compliance más altos.",
      level: "Avanzado",
      duration: "1 día",
      format: "Online",
      date: "22 Febrero 2025",
      location: "Online",
      price: 320,
      maxParticipants: 15,
      currentParticipants: 8,
      topics: [
        "Drafting asistido con LLMs",
        "Revisión automática de cláusulas",
        "Gestión de PII y privacidad",
        "Herramientas de due diligence"
      ],
      targetAudience: "Abogados, compliance officers, directores legales"
    },
    {
      id: 3,
      title: "Operaciones financieras inteligentes",
      description: "Automatiza reporting, conciliaciones y análisis financiero con IA. Reduce errores y acelera procesos.",
      level: "Intermedio",
      duration: "1.5 días",
      format: "Híbrido",
      date: "1-2 Marzo 2025",
      location: "Madrid + Online",
      price: 380,
      maxParticipants: 25,
      currentParticipants: 15,
      topics: [
        "Automatización de reporting",
        "Conciliaciones con RPA + IA",
        "Análisis predictivo financiero",
        "Alertas inteligentes"
      ],
      targetAudience: "CFOs, controllers, analistas financieros"
    }
  ];

  const corporateTraining = {
    title: "Formación in-company personalizada",
    description: "Diseñamos programas específicos para tu empresa y sector. Contenidos adaptados a vuestros casos de uso reales.",
    features: [
      "Análisis previo de necesidades",
      "Contenidos customizados por sector",
      "Mentoring post-formación (3 meses)",
      "Implementación asistida de casos",
      "ROI tracking y métricas"
    ],
    pricing: "Desde 2.500€ (grupo hasta 15 personas)"
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-blue-100 text-blue-800";
      case "Avanzado": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getOccupancyColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage < 50) return "text-green-600";
    if (percentage < 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cursos y talleres de <span className="text-gradient">IA práctica</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formación hands-on con casos reales. Aprende implementando soluciones que podrás usar desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Talleres prácticos
          </h2>
          
          <div className="space-y-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden hover-lift">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={getLevelColor(workshop.level)}>
                        {workshop.level}
                      </Badge>
                      <Badge variant="outline">
                        {workshop.format}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                    <p className="text-muted-foreground mb-6">{workshop.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Temario</h4>
                        <ul className="space-y-2 text-sm">
                          {workshop.topics.map((topic, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Target className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">A quién va dirigido</h4>
                        <p className="text-sm text-muted-foreground">
                          {workshop.targetAudience}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 bg-muted/30 p-8 flex flex-col justify-between">
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">{workshop.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>{workshop.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span className={getOccupancyColor(workshop.currentParticipants, workshop.maxParticipants)}>
                            {workshop.currentParticipants}/{workshop.maxParticipants} plazas
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-primary">{workshop.price}€</div>
                        <div className="text-sm text-muted-foreground">por persona</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="hero" className="w-full">
                        Reservar plaza
                      </Button>
                      <Button variant="outline" className="w-full">
                        Más información
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold mb-4">{corporateTraining.title}</h2>
                  <p className="text-muted-foreground mb-6">{corporateTraining.description}</p>
                  
                  <h3 className="font-semibold mb-4">Qué incluye:</h3>
                  <ul className="space-y-2 mb-6">
                    {corporateTraining.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-primary mb-2">
                    {corporateTraining.pricing}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descuentos disponibles para múltiples grupos y organizaciones sin ánimo de lucro
                  </p>
                </div>
                
                <div className="md:w-1/3 bg-gradient-hero p-8 flex flex-col justify-center">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                      ¿Formación para tu equipo?
                    </h3>
                    <p className="text-white/90">
                      Hablemos de tus necesidades específicas
                    </p>
                    <Button variant="secondary" size="lg">
                      Solicitar propuesta
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestra metodología por etapas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados tangibles desde el primer día.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Descubrir",
                description: "Identificamos oportunidades específicas en tu flujo de trabajo actual"
              },
              {
                step: "2", 
                title: "Prototipar",
                description: "Desarrollamos pruebas de concepto con herramientas reales"
              },
              {
                step: "3",
                title: "Integrar", 
                description: "Implementamos soluciones en tu entorno de trabajo"
              },
              {
                step: "4",
                title: "Medir",
                description: "Seguimos métricas y optimizamos para resultados sostenibles"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;