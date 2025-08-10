import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import retailImage from "@/assets/blog-retail-ai.jpg";
import legalImage from "@/assets/blog-legal-ai.jpg";
import healthImage from "@/assets/blog-health-ai.jpg";
import mediaImage from "@/assets/blog-media-ai.jpg";
import financeImage from "@/assets/blog-finance-ai.jpg";

const Blog = () => {
  const categories = [
    { name: "Todos", slug: "todos", active: true },
    { name: "Marketing", slug: "marketing", active: false },
    { name: "Operaciones", slug: "operaciones", active: false },
    { name: "Legal/Compliance", slug: "legal", active: false },
    { name: "Salud", slug: "salud", active: false },
    { name: "Industria", slug: "industria", active: false }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Cómo una cadena de moda redujo un 30% el tiempo de creación de campañas con IA",
      excerpt: "Descubre el workflow completo: desde ideación de copys hasta A/B testing asistido por IA. Incluye plantillas y métricas reales.",
      image: retailImage,
      category: "Marketing",
      author: "María García",
      date: "15 Dic 2024",
      readTime: "8 min",
      slug: "retail-campanas-ia",
      featured: true
    },
    {
      id: 2,
      title: "Integrar LLMs para drafting y revisión de contratos sin poner en riesgo el compliance",
      excerpt: "Plantillas, prompts y flujos de trabajo para equipos legales que quieren ser más eficientes sin comprometer la calidad.",
      image: legalImage,
      category: "Legal/Compliance",
      author: "Carlos Rodríguez",
      date: "12 Dic 2024",
      readTime: "12 min",
      slug: "legal-llms-contratos",
      featured: true
    },
    {
      id: 3,
      title: "Triage asistido por IA para clínicas privadas — de emails y llamadas a flujos estructurados",
      excerpt: "Cómo implementar un sistema de clasificación automática que mejora la satisfacción del paciente y optimiza recursos.",
      image: healthImage,
      category: "Salud",
      author: "Ana López",
      date: "10 Dic 2024",
      readTime: "10 min",
      slug: "salud-triage-ia",
      featured: true
    },
    {
      id: 4,
      title: "Redacciones que pasaron de idea a publicación en 50% menos tiempo",
      excerpt: "Workflow completo para medios digitales: desde calendarios editoriales hasta verificación humana, manteniendo calidad y SEO.",
      image: mediaImage,
      category: "Marketing",
      author: "David Martín",
      date: "8 Dic 2024",
      readTime: "9 min",
      slug: "medios-content-ops-ia",
      featured: false
    },
    {
      id: 5,
      title: "Automatizar reporting y conciliaciones con IA + RPA",
      excerpt: "Cómo los equipos financieros están eliminando errores y acelerando cierres contables con herramientas de IA.",
      image: financeImage,
      category: "Operaciones",
      author: "Laura Fernández",
      date: "5 Dic 2024",
      readTime: "11 min",
      slug: "finanzas-automatizacion-ia",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog de <span className="text-gradient">MenteIA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Casos reales, tutoriales prácticos y estrategias comprobadas para integrar IA en tu trabajo diario.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Badge 
                key={category.slug}
                variant={category.active ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Artículos destacados</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover-lift overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-4" />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center space-x-1 text-primary hover:text-primary-dark transition-colors"
                    >
                      <span className="text-sm font-medium">Leer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 pt-20">Todos los artículos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover-lift overflow-hidden">
                <div className="flex">
                  <div className="w-1/3 aspect-square overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="flex items-center space-x-1 text-primary hover:text-primary-dark transition-colors"
                      >
                        <span className="text-sm font-medium">Leer</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;