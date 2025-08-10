import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
          <div className="prose prose-lg max-w-none">
            <p>Esta Política de Privacidad describe cómo MenteIA recopila, utiliza y protege tu información personal.</p>
            <h2>Información que recopilamos</h2>
            <p>Recopilamos información que nos proporcionas directamente, como nombre, email y empresa cuando te suscribes o contactas.</p>
            <h2>Cómo usamos tu información</h2>
            <p>Utilizamos tu información para enviarte contenido relevante, responder consultas y mejorar nuestros servicios.</p>
            <h2>Protección de datos</h2>
            <p>Cumplimos con el RGPD y todas las normativas españolas de protección de datos.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;