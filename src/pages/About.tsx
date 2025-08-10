import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "María García Rodríguez",
      role: "Fundadora & CEO",
      bio: "15 años liderando transformación digital en empresas tecnológicas. Ex-directora de innovación en TechCorp. MBA por IE Business School.",
      image: "/api/placeholder/200/200",
      expertise: ["Estrategia IA", "Transformación Digital", "Liderazgo"]
    },
    {
      name: "Carlos López Martín",
      role: "Director de Formación",
      bio: "Especialista en machine learning con experiencia en implementación de IA en sectores regulados. PhD en Computer Science, UC3M.",
      image: "/api/placeholder/200/200",
      expertise: ["Machine Learning", "LegalTech", "Compliance"]
    },
    {
      name: "Ana Fernández Silva",
      role: "Head of Community",
      bio: "Experta en desarrollo de comunidades tech y formación corporativa. 10 años conectando profesionales con tecnología emergente.",
      image: "/api/placeholder/200/200",
      expertise: ["Community Building", "Formación", "Employee Experience"]
    }
  ];

  const methodology = [
    {
      phase: "Descubrir",
      icon: Target,
      description: "Analizamos tu contexto específico y identificamos oportunidades de alto impacto donde la IA puede generar valor inmediato.",
      details: [
        "Audit de procesos actuales",
        "Identificación de pain points",
        "Benchmarking sectorial",
        "Assessment de readiness tecnológica"
      ]
    },
    {
      phase: "Prototipar", 
      icon: Lightbulb,
      description: "Desarrollamos pruebas de concepto con herramientas reales para validar hipótesis antes de la implementación.",
      details: [
        "POCs con datos reales",
        "Validación con usuarios finales",
        "Métricas de éxito definidas",
        "Risk assessment detallado"
      ]
    },
    {
      phase: "Integrar",
      icon: Users,
      description: "Acompañamos la implementación en tu entorno de trabajo real, asegurando adopción y compliance.",
      details: [
        "Implementación gradual",
        "Training del equipo",
        "Integración con sistemas existentes",
        "Documentación y procesos"
      ]
    },
    {
      phase: "Medir",
      icon: Brain,
      description: "Seguimos métricas tangibles y optimizamos continuamente para garantizar ROI sostenible.",
      details: [
        "KPIs específicos por caso",
        "Monitoring automatizado",
        "Iteración basada en datos",
        "Scaling plan personalizado"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre <span className="text-gradient">MenteIA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ayudamos a profesionales españoles a integrar IA de forma práctica, eficiente y sin riesgos en sus organizaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nuestra misión</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Democratizar el acceso a la inteligencia artificial para profesionales y empresas españolas, proporcionando formación práctica y una comunidad que facilite la adopción real de estas tecnologías.
                </p>
                <p className="text-lg text-muted-foreground">
                  Creemos que la IA no debe ser un privilegio de grandes corporaciones tech, sino una herramienta accesible que permita a cualquier profesional ser más eficiente, creativo y estratégico en su trabajo.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Enfoque práctico</h3>
                      <p className="text-sm text-muted-foreground">Casos reales, resultados medibles</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-lift">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Comunidad activa</h3>
                      <p className="text-sm text-muted-foreground">Red de profesionales colaborativos</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-lift">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Actualización constante</h3>
                      <p className="text-sm text-muted-foreground">Al día con las últimas tendencias</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Metodología por etapas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza implementación exitosa y resultados sostenibles.
            </p>
          </div>
          
          <div className="space-y-12">
            {methodology.map((phase, index) => (
              <Card key={index} className={`overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-hero p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <phase.icon className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-4">{phase.phase}</h3>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {phase.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nuestro equipo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesionales con experiencia real implementando IA en empresas españolas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-8 space-y-6">
                  <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16">
              Por qué trabajar con MenteIA
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Resultados tangibles</h3>
                <p className="text-muted-foreground">
                  No vendemos promesas. Cada implementación viene con métricas claras y resultados medibles desde el primer mes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Experiencia sectorial</h3>
                <p className="text-muted-foreground">
                  Conocemos las particularidades de sectores regulados en España. Compliance, RGPD y normativas específicas.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Enfoque humano</h3>
                <p className="text-muted-foreground">
                  La IA potencia a las personas, no las reemplaza. Diseñamos soluciones que mejoran el trabajo humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;