import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Users, BookOpen, Share2, Zap, ArrowLeft } from "lucide-react";
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
    { name: "Twitter", url: "https://twitter.com/menteia_es" }
  ];

  useEffect(() => {
    // Optional: Track conversion
    console.log("User completed membership signup");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-success/5">
      {/* Header minimal */}
      <header className="p-6">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Volver al inicio</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              ¡Bienvenido a <span className="text-gradient">MenteIA!</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <strong>Tu membresía ha sido confirmada exitosamente.</strong>
              <br />
              Ya formas parte de nuestra comunidad de profesionales que transforman su trabajo con IA.
            </p>
          </div>

          {/* Next Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover-lift gradient-hero">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Accede a la comunidad</h3>
                <p className="text-white/90 mb-6">
                  Te hemos enviado un email con el enlace de acceso a nuestro Discord privado y las credenciales de inicio.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Ir a la comunidad privada
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Revisa tu email</h3>
                <p className="text-muted-foreground mb-6">
                  En los próximos 5 minutos recibirás:
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Enlace de acceso al Discord</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Biblioteca de prompts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Calendario de sesiones en vivo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Guía de primeros pasos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What's Next */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">¿Qué sigue ahora?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Únete al Discord</h3>
                  <p className="text-sm text-muted-foreground">
                    Accede a nuestra comunidad privada y preséntate en el canal #nuevos-miembros
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-semibold">Descarga recursos</h3>
                  <p className="text-sm text-muted-foreground">
                    Accede inmediatamente a la biblioteca de prompts y workflows exclusivos
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold">Próxima sesión en vivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Apúntate al próximo AMA session: <strong>25 de enero, 18:00 CET</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Sharing */}
          <Card className="gradient-hero text-center mb-8">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-center">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Comparte tu experiencia
              </h3>
              <p className="text-white/90">
                Ayuda a otros profesionales a descubrir MenteIA y forma parte del futuro del trabajo con IA.
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
      </main>

      {/* Minimal footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-gradient">MenteIA</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Formación y comunidad de IA para profesionales en España
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;