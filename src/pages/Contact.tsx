import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Te responderemos en las próximas 24 horas.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Nuestra oficina",
      details: ["C. de la Innovación 12", "28045 Madrid, España"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Llámanos",
      details: ["+34 911 23 45 67", "WhatsApp disponible"],
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Escríbenos",
      details: ["hola@menteia.net", "Respuesta en 24h"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Viernes", "9:00 - 18:00 CET"],
      color: "text-muted-foreground"
    }
  ];

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "Consulta general",
      description: "Preguntas sobre servicios, metodología o primeros pasos con IA",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Formación in-company",
      description: "Solicitar propuesta personalizada para entrenar a tu equipo",
      color: "bg-success/10 text-success"
    },
    {
      icon: Calendar,
      title: "Consultoría estratégica",
      description: "Asesoramiento para planificar tu roadmap de adopción de IA",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Tienes un proyecto de <span className="text-gradient">IA en mente?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cuéntanos tu desafío y te ayudaremos a diseñar la solución perfecta. 
              Desde formación hasta implementación completa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Envíanos un mensaje</span>
                </CardTitle>
                <CardDescription>
                  Te responderemos en menos de 24 horas con una propuesta personalizada y próximos pasos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto, dudas o necesidades específicas..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Información de contacto</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 hover-lift">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color === 'text-success' ? 'bg-success/10' : 'bg-primary/10'} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className={detailIndex === 0 ? "text-foreground" : "text-muted-foreground text-sm"}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">¿Cómo podemos ayudarte?</h3>
                <div className="space-y-3">
                  {contactReasons.map((reason, index) => (
                    <Card key={index} className="hover-lift cursor-pointer transition-all hover:shadow-md">
                      <CardContent className="p-4 flex items-start space-x-3">
                        <div className={`w-10 h-10 ${reason.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <reason.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{reason.title}</h4>
                          <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas más frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  question: "¿Cuánto tiempo toma implementar IA en mi empresa?",
                  answer: "Depende del alcance, pero típicamente nuestros proyectos van de 2-4 semanas para POCs hasta 3-6 meses para implementaciones completas."
                },
                {
                  question: "¿Trabajan con empresas de todos los tamaños?",
                  answer: "Sí, desde startups hasta grandes corporaciones. Adaptamos nuestra metodología al tamaño y necesidades específicas de cada organización."
                },
                {
                  question: "¿Qué sectores tienen más experiencia?",
                  answer: "Especialidad en sectores regulados: legal, salud, finanzas. También amplia experiencia en marketing, retail y operaciones."
                },
                {
                  question: "¿Ofrecen soporte post-implementación?",
                  answer: "Sí, incluimos 3 meses de soporte en todos nuestros proyectos. También ofrecemos programas de mentoring a largo plazo."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-center max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                ¿Listo para empezar?
              </h2>
              <p className="text-xl text-white/90">
                Únete a más de 500 profesionales que ya transforman su trabajo con IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Únete a la comunidad
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Ver recursos gratuitos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simplified Contact Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Otras formas de contacto</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hola@menteia.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+34 911 23 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>L-V, 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;