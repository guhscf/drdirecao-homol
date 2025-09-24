export default function Contato() {
  return (
    <section
      id="contato"
      className="py-16 bg-gradient-to-b from-white to-gray-50 text-center px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Contato
      </h2>
      <div className="space-y-2 text-gray-700 text-base md:text-lg">
      <p className="text-gray-700">📍 Rua Francisco de Paula Sobrinho 48 Esquina com, Av. Jornalista Aderbal Gaertner Stresser - Curitiba/PR</p>
      <p className="text-gray-700">📞 (41) 99889-5885</p>
      <p className="text-gray-700">📧 drdirecao@drdirecao.com.br</p>
      </div>
      <a
        href="https://wa.me/5541998895885?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Fale Conosco
      </a>
    </section>
  );
}


