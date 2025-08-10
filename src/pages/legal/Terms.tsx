import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
          <div className="prose prose-lg max-w-none">
            <p>Estos términos rigen el uso de los servicios de MenteIA.</p>
            <h2>Aceptación de términos</h2>
            <p>Al usar nuestros servicios, aceptas estos términos y condiciones.</p>
            <h2>Servicios</h2>
            <p>Ofrecemos formación, consultoría y comunidad relacionada con IA.</p>
            <h2>Limitaciones</h2>
            <p>El uso de nuestros servicios está sujeto a las limitaciones descritas aquí.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;