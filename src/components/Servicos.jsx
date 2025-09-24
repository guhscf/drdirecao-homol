export default function Servicos() {
  const servicos = [
    "Reparo de caixa de direção hidráulica",
    "Troca e manutenção de bomba de direção",
    "Manutenção preventiva",
    "Diagnóstico especializado"
  ];

  return (
    <section id="servicos" className="py-16 bg-gradient-to-b from-white to-gray-50 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Nossos Serviços</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {servicos.map((s, i) => (
          <div key={i} className="bg-gray-50 shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
