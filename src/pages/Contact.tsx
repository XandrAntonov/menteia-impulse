import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";
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
      title: "Dirección",
      details: ["C. de la Innovación 12", "28045 Madrid, España"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+34 911 23 45 67"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hola@menteia.net"]
    },
    {
      icon: Clock,
      title: "Horario",
      details: ["Lunes a Viernes", "9:00 - 18:00"]
    }
  ];

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "Consulta general",
      description: "Preguntas sobre nuestros servicios, precios o metodología"
    },
    {
      icon: Calendar,
      title: "Formación in-company",
      description: "Solicitar propuesta personalizada para tu equipo"
    },
    {
      icon: Phone,
      title: "Consultoría estratégica",
      description: "Asesoramiento para tu roadmap de adopción de IA"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hablemos de tu proyecto de <span className="text-gradient">IA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes dudas sobre cómo integrar IA en tu empresa? ¿Necesitas formación para tu equipo? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Te responderemos en las próximas 24 horas con una propuesta personalizada.
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
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">¿En qué podemos ayudarte?</h3>
                <div className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <Card key={index} className="hover-lift">
                      <CardContent className="p-4 flex items-start space-x-3">
                        <reason.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
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

      {/* Map placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-muted/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <p className="font-semibold">C. de la Innovación 12</p>
                    <p className="text-muted-foreground">28045 Madrid, España</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;