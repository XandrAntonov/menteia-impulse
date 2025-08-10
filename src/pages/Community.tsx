import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, 
  MessageSquare, 
  BookOpen, 
  Calendar, 
  Download,
  Star,
  Check,
  Zap
} from "lucide-react";

const Community = () => {
  const plans = [
    {
      name: "Mensual",
      price: "15",
      period: "mes",
      description: "Perfecto para empezar",
      features: [
        "Acceso completo al canal privado",
        "Biblioteca de prompts",
        "Sesiones mensuales en vivo",
        "Repositorio de workflows",
        "Descuentos en workshops"
      ],
      popular: false
    },
    {
      name: "Anual",
      price: "120",
      period: "año",
      originalPrice: "180",
      description: "2 meses gratis",
      features: [
        "Todo lo incluido en el plan mensual",
        "Acceso anticipado a nuevos contenidos",
        "Sesiones extra de Q&A",
        "Templates premium exclusivos",
        "Descuentos adicionales en eventos"
      ],
      popular: true
    },
    {
      name: "Equipo",
      price: "399",
      period: "año",
      description: "5 plazas incluidas",
      features: [
        "Todo lo incluido en el plan anual",
        "Hasta 5 miembros del equipo",
        "Sesión mensual privada para tu equipo",
        "Consultoría personalizada (2h/mes)",
        "Templates customizados para tu sector"
      ],
      popular: false
    }
  ];

  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "Canal privado exclusivo",
      description: "Accede a nuestra comunidad en Discord con canales especializados por sector"
    },
    {
      icon: Calendar,
      title: "Sesiones mensuales en vivo",
      description: "AMA sessions con expertos y casos de estudio reales cada mes"
    },
    {
      icon: BookOpen,
      title: "Biblioteca de prompts",
      description: "Más de 500 prompts organizados por función y sector, actualizados constantemente"
    },
    {
      icon: Download,
      title: "Repositorio de workflows",
      description: "Flujos de trabajo completos listos para implementar en tu empresa"
    },
    {
      icon: Star,
      title: "Descuentos exclusivos",
      description: "Precios especiales en workshops, cursos y eventos presenciales"
    },
    {
      icon: Zap,
      title: "Actualizaciones prioritarias",
      description: "Sé el primero en conocer nuevas herramientas y técnicas de IA"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo accedo a la comunidad?",
      answer: "Una vez realizado el pago, recibirás un email con las instrucciones para unirte a nuestro Discord privado. El acceso es inmediato."
    },
    {
      question: "¿Puedo cancelar mi suscripción?",
      answer: "Sí, puedes cancelar en cualquier momento desde tu panel de usuario. No hay penalizaciones por cancelación anticipada."
    },
    {
      question: "¿Los contenidos están en español?",
      answer: "Sí, todos nuestros contenidos, sesiones en vivo y comunicación están en español de España."
    },
    {
      question: "¿Hay descuentos para estudiantes?",
      answer: "Sí, ofrecemos un 50% de descuento para estudiantes universitarios. Contacta con nosotros para más información."
    },
    {
      question: "¿Qué incluye la consultoría del plan Equipo?",
      answer: "Incluye 2 horas mensuales de consultoría personalizada via videollamada para revisar vuestros casos específicos y estrategia de IA."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Únete a la comunidad de profesionales que están
            <span className="text-gradient"> transformando su trabajo con IA</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Accede a recursos exclusivos, casos reales y una red de profesionales que ya están aplicando IA en sus empresas.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Qué incluye tu membresía
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Elige el plan que mejor se adapte a ti
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover-lift ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Más popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    <div className="text-muted-foreground">
                      <div>/{plan.period}</div>
                      {plan.originalPrice && (
                        <div className="line-through text-sm">{plan.originalPrice}€</div>
                      )}
                    </div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "hero" : "outline-primary"} 
                    className="w-full"
                    size="lg"
                  >
                    Hacerme miembro
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Preguntas frecuentes sobre la membresía
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-center p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Empieza hoy mismo
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Únete a más de 500 profesionales que ya están aprovechando el poder de la IA en sus empresas.
              </p>
              <Button variant="secondary" size="lg">
                Hacerme miembro ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Community;