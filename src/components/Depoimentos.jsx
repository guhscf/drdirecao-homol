import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Depoimentos() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/.netlify/functions/reviews");
        const data = await res.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (err) {
        console.error("Erro ao carregar reviews:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-16 bg-gradient-to-b from-gray-50 to-white px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
        Avaliações no Google ⭐
      </h2>

      {loading ? (
        <p className="text-gray-600 text-center">Carregando avaliações...</p>
      ) : reviews.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          className="max-w-6xl mx-auto pb-16" // 👈 espaço extra para as bolinhas
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <blockquote className="bg-gray-50 shadow p-4 rounded-lg text-center text-sm h-56 flex flex-col justify-between">
                <p className="italic text-gray-700 line-clamp-3">
                  "{r.text}"
                </p>
                <button
                  onClick={() => setSelectedReview(r)}
                  className="text-blue-600 text-xs mt-2 hover:underline"
                >
                  Ver mais
                </button>
                <cite className="block mt-2 font-semibold text-gray-900 text-xs">
                  ⭐ {r.rating} – {r.author_name}
                </cite>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-600 text-center">
          Nenhuma avaliação encontrada.
        </p>
      )}

      {/* Modal para ver avaliação completa */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg mx-4 text-center shadow-lg">
            <h3 className="font-bold text-lg mb-2">
              ⭐ {selectedReview.rating} – {selectedReview.author_name}
            </h3>
            <p className="text-gray-700 mb-4">{selectedReview.text}</p>
            <button
              onClick={() => setSelectedReview(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* CSS inline para ajustar as bolinhas */}
      <style>
        {`
          .swiper-pagination {
            position: relative !important;
            margin-top: 1rem !important;
          }
        `}
      </style>
    </section>
  );
}
