import { Link } from "react-router-dom";
import { Brain, Mail, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gradient">MenteIA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Formación y comunidad de IA para profesionales en España.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/company/menteia" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/menteia_es" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com/@menteia" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/comunidad" className="text-muted-foreground hover:text-primary">Comunidad</Link></li>
              <li><Link to="/recursos" className="text-muted-foreground hover:text-primary">Recursos</Link></li>
              <li><Link to="/sobre-menteia" className="text-muted-foreground hover:text-primary">Sobre MenteIA</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>C. de la Innovación 12<br />28045 Madrid, España</p>
              <p>Tel.: +34 911 23 45 67</p>
              <p>Email: hola@menteia.net</p>
              <p>L–V, 9:00–18:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Recibe guías y casos por email
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Tu email" className="text-sm" />
              <Button size="sm" variant="community">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © MenteIA, menteia.net — Formación y comunidad de IA para profesionales en España.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/legal/privacidad" className="text-muted-foreground hover:text-primary">
                Política de Privacidad
              </Link>
              <Link to="/legal/cookies" className="text-muted-foreground hover:text-primary">
                Política de Cookies
              </Link>
              <Link to="/legal/terminos" className="text-muted-foreground hover:text-primary">
                Términos
              </Link>
              <Link to="/legal/aviso-legal" className="text-muted-foreground hover:text-primary">
                Aviso Legal
              </Link>
              <Link to="/legal/privacidad" className="text-muted-foreground hover:text-primary">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;