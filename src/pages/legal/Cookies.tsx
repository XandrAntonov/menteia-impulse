import Layout from "@/components/layout/Layout";

const Cookies = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
          <div className="prose prose-lg max-w-none">
            <p>Esta política explica cómo usamos cookies en menteia.net.</p>
            <h2>Qué son las cookies</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.</p>
            <h2>Cookies que utilizamos</h2>
            <p>Utilizamos cookies esenciales para el funcionamiento y analytics para mejorar la experiencia.</p>
            <h2>Control de cookies</h2>
            <p>Puedes gestionar tus preferencias de cookies en cualquier momento.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;