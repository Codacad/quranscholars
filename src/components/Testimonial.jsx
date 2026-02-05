import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Student of Quranic Studies",
    quote:
      "This platform brought me closer to the Qur'an. The live feedback and structured tajwīd labs are spiritually uplifting.",
  },
  {
    name: "Fatimah Al-Zahra",
    role: "Islamic Scholar",
    quote:
      "As a teacher, I appreciate the clear scaffolding and authentic sources. Even beginners feel welcomed and guided.",
  },
  {
    name: "Imam Khalid Bin Zayed",
    role: "Community Imam",
    quote:
      "I recommend it to my congregation resources that strengthen connection to Allah and love for the Prophet (peace be upon him).",
  },
  {
    name: "Layla Hussain",
    role: "Parent & Revert",
    quote:
      "Family-friendly tracks, female instructors, and reflection prompts made it easy for our household to learn together.",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <div className="relative h-full rounded-3xl border border-white/15 bg-white/80 backdrop-blur shadow-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-100/60 via-white to-amber-100/50 opacity-80" />
    <div className="relative p-6 space-y-4 h-full flex flex-col">
      <div className="flex items-center gap-4">
        <img
          src={`https://i.pravatar.cc/150?img=${index + 10}`}
          alt={`${testimonial.name} avatar`}
          className="h-14 w-14 rounded-2xl object-cover border border-white/50 shadow-sm"
        />
        <div>
          <p className="text-lg font-bold text-slate-900">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-red-800">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="text-red-900">
        <FaQuoteLeft size={24} />
      </div>

      <p className="text-slate-700 text-base leading-7 flex-1">
        {testimonial.quote}
      </p>

      <div className="text-red-900 self-end">
        <FaQuoteRight size={24} />
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(248,113,113,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            Voices from our learners
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Testimonials
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Real stories from students, parents, and imams who study, teach, and
            serve with us.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: ".testi-next", prevEl: ".testi-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="pb-14"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard testimonial={testimonial} index={idx} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-4">
          <button
            className="testi-prev pointer-events-auto h-12 w-12 md:h-14 md:w-14 rounded-full bg-red-900 text-white shadow-lg flex items-center justify-center hover:bg-red-700 transition"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            className="testi-next pointer-events-auto h-12 w-12 md:h-14 md:w-14 rounded-full bg-red-900 text-white shadow-lg flex items-center justify-center hover:bg-red-700 transition"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
