import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Download, CheckSquare } from "lucide-react";
import retailImage from "@/assets/blog-retail-ai.jpg";
import legalImage from "@/assets/blog-legal-ai.jpg";
import healthImage from "@/assets/blog-health-ai.jpg";
import mediaImage from "@/assets/blog-media-ai.jpg";
import financeImage from "@/assets/blog-finance-ai.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in a real app this would come from API
  const posts: { [key: string]: any } = {
    "retail-campanas-ia": {
      title: "Cómo una cadena de moda redujo un 30% el tiempo de creación de campañas con IA",
      image: retailImage,
      category: "Marketing",
      author: "María García",
      date: "15 Dic 2024",
      readTime: "8 min",
      content: `
        <h2>El desafío: campañas más rápidas sin perder calidad</h2>
        <p>Una cadena de moda española con 150 tiendas enfrentaba un problema común: crear campañas de marketing personalizadas para diferentes segmentos requería semanas de trabajo manual. El equipo de marketing invertía el 60% de su tiempo en tareas repetitivas como redacción de copys, creación de variaciones y segmentación de audiencias.</p>
        
        <h3>Flujos implementados paso a paso</h3>
        <h4>1. Ideación de copys con IA</h4>
        <p>Implementaron un workflow donde la IA genera variaciones de mensajes basándose en:</p>
        <ul>
          <li>Datos históricos de engagement por segmento</li>
          <li>Tendencias de temporada</li>
          <li>Personalidad de marca definida</li>
        </ul>
        
        <h4>2. Segmentación automática</h4>
        <p>Utilizando datos de compra e interacción, la IA clasifica automáticamente usuarios en:</p>
        <ul>
          <li>Nuevos compradores</li>
          <li>Clientes frecuentes</li>
          <li>Compradores estacionales</li>
        </ul>
        
        <h4>3. A/B testing asistido</h4>
        <p>La IA sugiere qué variaciones testear basándose en métricas históricas y predice qué elementos tendrán mejor rendimiento.</p>
        
        <h2>Resultados medibles</h2>
        <p><strong>Velocidad:</strong> De 3 semanas a 1 semana para lanzar una campaña completa</p>
        <p><strong>Consistencia:</strong> 95% de adherencia al brand voice vs 70% anterior</p>
        <p><strong>CTR mejorado:</strong> +22% en apertura de emails, +15% en clicks</p>
        
        <h2>Cómo replicarlo en tu empresa</h2>
        <p>Este enfoque es aplicable a cualquier empresa con necesidades de marketing recurrente. Los elementos clave son:</p>
        <ol>
          <li>Definir claramente tu brand voice y guidelines</li>
          <li>Estructurar datos históricos de campaigns</li>
          <li>Implementar testing gradual</li>
          <li>Mantener supervisión humana en decisiones estratégicas</li>
        </ol>
      `
    },
    "legal-llms-contratos": {
      title: "Integrar LLMs para drafting y revisión de contratos sin poner en riesgo el compliance",
      image: legalImage,
      category: "Legal/Compliance",
      author: "Carlos Rodríguez",
      date: "12 Dic 2024",
      readTime: "12 min",
      content: `
        <h2>El reto del sector legal: eficiencia vs. compliance</h2>
        <p>Los despachos de abogados enfrentan presión constante por ser más eficientes, pero el sector legal requiere precisión absoluta. Un error en un contrato puede costar millones. ¿Cómo integrar LLMs manteniendo los estándares de compliance?</p>
        
        <h3>Framework de implementación segura</h3>
        <h4>1. Plantillas con prompts estructurados</h4>
        <p>Desarrollamos plantillas específicas que incluyen:</p>
        <ul>
          <li>Contexto legal específico del sector</li>
          <li>Cláusulas obligatorias por jurisdicción</li>
          <li>Limitaciones explícitas para la IA</li>
        </ul>
        
        <h4>2. Revisión automática de cláusulas</h4>
        <p>El LLM identifica:</p>
        <ul>
          <li>Inconsistencias internas en el documento</li>
          <li>Cláusulas faltantes según el tipo de contrato</li>
          <li>Posibles conflictos con normativas</li>
        </ul>
        
        <h4>3. Control de versiones y auditoría</h4>
        <p>Sistema que registra:</p>
        <ul>
          <li>Qué secciones fueron generadas por IA</li>
          <li>Qué revisiones hizo el abogado</li>
          <li>Tiempo invertido en cada fase</li>
        </ul>
        
        <h2>Gestión de PII y privacidad</h2>
        <p>Implementaron:</p>
        <ul>
          <li>Anonimización automática de datos sensibles</li>
          <li>LLMs locales para documentos confidenciales</li>
          <li>Protocolo de borrado de datos tras cada sesión</li>
        </ul>
        
        <h2>Métricas de impacto</h2>
        <p><strong>Tiempo de revisión:</strong> -45% en contratos estándar</p>
        <p><strong>Errores detectados:</strong> +30% más inconsistencias identificadas</p>
        <p><strong>Satisfacción del cliente:</strong> Entregas 2x más rápidas</p>
        
        <h2>Cómo replicarlo</h2>
        <p>Pasos esenciales para implementar LLMs en legal:</p>
        <ol>
          <li>Empezar con documentos de bajo riesgo</li>
          <li>Crear biblioteca de prompts validados</li>
          <li>Establecer checkpoints de revisión humana</li>
          <li>Documentar todos los procesos para auditorías</li>
        </ol>
      `
    }
  };

  const currentPost = posts[slug || ""] || posts["retail-campanas-ia"];

  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Badge variant="outline">{currentPost.category}</Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{currentPost.author}</span>
                <Calendar className="h-4 w-4 ml-4" />
                <span>{currentPost.date}</span>
                <span className="ml-4">{currentPost.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {currentPost.title}
            </h1>
            
            <div className="aspect-video overflow-hidden rounded-xl mb-8">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Resources */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Recursos descargables</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <Download className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Plantilla de prompts</h4>
                    <p className="text-sm text-muted-foreground">PDF con prompts validados para tu sector</p>
                    <Button variant="outline-primary" size="sm">Descargar</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <CheckSquare className="h-8 w-8 text-success mx-auto" />
                    <h4 className="font-semibold">Checklist de implementación</h4>
                    <p className="text-sm text-muted-foreground">Pasos detallados para aplicar en tu empresa</p>
                    <Button variant="outline-primary" size="sm">Descargar</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <User className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Preguntas para tu equipo</h4>
                    <p className="text-sm text-muted-foreground">Guía para evaluar la readiness de tu organización</p>
                    <Button variant="outline-primary" size="sm">Descargar</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="gradient-hero text-center">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                ¿Quieres implementar esto en tu empresa?
              </h3>
              <p className="text-white/90">
                Únete a nuestra comunidad para acceder a más casos como este y recibir ayuda personalizada.
              </p>
              <Button variant="secondary">
                Únete a la comunidad
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;