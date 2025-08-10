import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewsletterForm from "@/components/common/NewsletterForm";
import { 
  Brain, 
  Users, 
  BookOpen, 
  Target, 
  TrendingUp, 
  MessageSquare,
  FileText,
  Calendar,
  Star,
  Building2
} from "lucide-react";
import heroImage from "@/assets/hero-ai-professionals.jpg";
import retailImage from "@/assets/blog-retail-ai.jpg";
import legalImage from "@/assets/blog-legal-ai.jpg";
import healthImage from "@/assets/blog-health-ai.jpg";

const Home = () => {
  const benefits = [
    {
      icon: Target,
      title: "Casos reales",
      description: "Aprende con ejemplos prácticos de empresas que ya integran IA exitosamente"
    },
    {
      icon: FileText,
      title: "Plantillas",
      description: "Accede a prompts, workflows y documentos listos para implementar"
    },
    {
      icon: Users,
      title: "Mentoría grupal",
      description: "Sesiones en vivo mensuales con expertos para resolver dudas específicas"
    },
    {
      icon: TrendingUp,
      title: "Actualizaciones constantes",
      description: "Mantente al día con las últimas tendencias y herramientas de IA"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Cómo una cadena de moda redujo un 30% el tiempo de creación de campañas con IA",
      excerpt: "Descubre el workflow completo: desde ideación de copys hasta A/B testing asistido por IA.",
      image: retailImage,
      category: "Retail",
      slug: "retail-campanas-ia"
    },
    {
      id: 2,
      title: "Integrar LLMs para drafting y revisión de contratos sin poner en riesgo el compliance",
      excerpt: "Plantillas, prompts y flujos de trabajo para equipos legales que quieren ser más eficientes.",
      image: legalImage,
      category: "Legal",
      slug: "legal-llms-contratos"
    },
    {
      id: 3,
      title: "Triage asistido por IA para clínicas privadas",
      excerpt: "De emails y llamadas a flujos estructurados que mejoran la satisfacción del paciente.",
      image: healthImage,
      category: "Salud",
      slug: "salud-triage-ia"
    }
  ];

  const testimonials = [
    {
      name: "María García",
      role: "Marketing Manager",
      company: "TechCorp",
      content: "MenteIA me ayudó a implementar IA en mis campañas. Los resultados han sido increíbles.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Director Operaciones",
      company: "InnovateSA",
      content: "La comunidad y los recursos prácticos han transformado nuestros procesos internos.",
      rating: 5
    },
    {
      name: "Ana López",
      role: "Directora Legal",
      company: "LegalTech Plus",
      content: "Casos reales y plantillas que realmente funcionan. Altamente recomendado.",
      rating: 5
    }
  ];

  const trustedCompanies = ["TechCorp", "InnovateSA", "MediaFlow", "HealthTech", "FinanceFirst"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Aprende a integrar IA en tu trabajo con{" "}
                <span className="text-gradient">MenteIA</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Formación práctica, casos reales y una comunidad que te impulsa
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/comunidad">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Únete a la comunidad privada
                  </Button>
                </Link>
                <NewsletterForm placeholder="Recibe guías por email" />
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Profesionales trabajando con IA" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Integra IA sin humo. Casos reales, plantillas y una comunidad que te acompaña.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formación práctica para profesionales en España. Lo último en IA, aplicado a tu día a día.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift gradient-card border-0">
                <CardContent className="pt-6 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Últimos artículos del blog</h2>
            <Link to="/blog">
              <Button variant="outline-primary">Ver todos</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover-lift overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-medium">{post.category}</div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full">Leer más</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Empresas que confían en MenteIA</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustedCompanies.map((company, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                  <span className="text-lg font-medium text-muted-foreground">{company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-center p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                ¿Listo para transformar tu trabajo con IA?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Únete a más de 500 profesionales que ya están aprovechando el poder de la IA en sus empresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/comunidad">
                  <Button variant="secondary" size="lg">
                    Únete a la comunidad
                  </Button>
                </Link>
                <Link to="/recursos">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Accede a recursos gratuitos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Home;