import Layout from "@/components/layout/Layout";

const LegalNotice = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          <div className="prose prose-lg max-w-none">
            <h2>Datos identificativos</h2>
            <p><strong>Titular:</strong> MenteIA S.L.</p>
            <p><strong>NIF:</strong> B12345678</p>
            <p><strong>Domicilio:</strong> C. de la Innovación 12, 28045 Madrid, España</p>
            <p><strong>Email:</strong> hola@menteia.net</p>
            <p><strong>Teléfono:</strong> +34 911 23 45 67</p>
            <h2>Objeto</h2>
            <p>Formación y consultoría en inteligencia artificial para empresas.</p>
            <h2>Normativa aplicable</h2>
            <p>Este sitio web cumple con la normativa española y europea vigente.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalNotice;