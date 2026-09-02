import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials.js";



import TestimonialCard from "@/features/home/components/TestimonialCard.jsx";

const Testimonials = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <span />
            Voices from our learners
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>

            
            Testimonials
          </motion.h2>
          <p>
            Real stories from students, parents, and imams who study, teach, and
            serve with us.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1280: { slidesPerView: 3 }
            }}
            navigation={{ nextEl: ".testi-next", prevEl: ".testi-prev" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}>

            
            {testimonials.map((testimonial, idx) =>
            <SwiperSlide key={idx}>
                <TestimonialCard testimonial={testimonial} index={idx} />
              </SwiperSlide>
            )}
          </Swiper>
        </motion.div>

        <div>
          <button

            aria-label="Previous testimonial">
            
            &lt;
          </button>
          <button

            aria-label="Next testimonial">
            
            &gt;
          </button>
        </div>
      </div>
    </section>);

};

export default Testimonials;
