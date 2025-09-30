import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contato() {
  return (
    <section id="contato" className="py-16 bg-gray-50 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Entre em Contato
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {}
        <div>
          <p className="text-gray-600 mb-6">
            Ligue, envie uma mensagem no WhatsApp ou entre em contato conosco pelas redes sociais.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://wa.me/5541998895885?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition">
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/dr.direcao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-90 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581551335671"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" size={20} />
              <span>
                Rua Francisco de Paula Sobrinho 48, Esquina com Av. Jornalista Aderbal Gaertner Stresser - Curitiba/PR
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" size={18} />
              <span>(41) 99889-5885</span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" size={18} />
              <span>Seg a Sex - 8h às 18h</span>
            </div>
          </div>
        </div>
        <div className="w-full h-80 md:h-96">
          <iframe
            title="Localização da Oficina DR Direção"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0225468135086!2d-49.20440992445266!3d-25.470922577535806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf106d9ebadef%3A0x89594ba2be7fc472!2zRCBSIERpcmXDp8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1758753814315!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
