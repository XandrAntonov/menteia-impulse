import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Users, BookOpen, Share2 } from "lucide-react";
import retailImage from "@/assets/blog-retail-ai.jpg";
import legalImage from "@/assets/blog-legal-ai.jpg";
import healthImage from "@/assets/blog-health-ai.jpg";

const ThankYou = () => {
  const recommendedPosts = [
    {
      title: "Cómo una cadena de moda redujo un 30% el tiempo de creación de campañas con IA",
      slug: "retail-campanas-ia",
      image: retailImage,
      category: "Marketing"
    },
    {
      title: "Integrar LLMs para drafting y revisión de contratos sin poner en riesgo el compliance", 
      slug: "legal-llms-contratos",
      image: legalImage,
      category: "Legal"
    },
    {
      title: "Triage asistido por IA para clínicas privadas",
      slug: "salud-triage-ia", 
      image: healthImage,
      category: "Salud"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/company/menteia" },
    { name: "Twitter", url: "https://twitter.com/menteia_es" },
    { name: "WhatsApp", url: "https://wa.me/?text=Acabo%20de%20suscribirme%20a%20MenteIA" }
  ];

  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-16">
              <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-success" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                ¡Gracias! <span className="text-gradient">Falta un paso</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hemos enviado un email de confirmación a tu bandeja de entrada. 
                <br />
                <strong>Haz clic en el enlace para activar tu suscripción.</strong>
              </p>
            </div>

            {/* Next Steps */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Revisa tu email</CardTitle>
                  <CardDescription>
                    Confirma tu suscripción para empezar a recibir contenido exclusivo cada semana.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle>Únete a la comunidad</CardTitle>
                  <CardDescription>
                    Accede a recursos exclusivos, casos reales y feedback personalizado.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/comunidad">
                    <Button variant="community" className="w-full">
                      Ir a la comunidad privada
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Recommended Content */}
            <div className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Mientras tanto, sigue leyendo</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {recommendedPosts.map((post, index) => (
                  <Card key={index} className="hover-lift overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                      <h3 className="font-semibold line-clamp-3 mb-4">{post.title}</h3>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Leer artículo
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Sharing */}
            <Card className="gradient-hero text-center">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-center">
                  <Share2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Comparte MenteIA con tu red
                </h3>
                <p className="text-white/90">
                  Ayuda a otros profesionales a descubrir cómo integrar IA en su trabajo.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="secondary"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Compartir en {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;