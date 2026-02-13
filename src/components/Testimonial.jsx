import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./home/TestimonialCard.jsx";

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
          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Testimonials
          </motion.h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Real stories from students, parents, and imams who study, teach, and
            serve with us.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

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
