import SeekingKnowledge from "../components/SeekingKnowledge";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonial";
import DiscoverIslam from "../components/DiscoverIslam";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import GridBackground from "../p5_sketches/GridBackground";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
const Home = () => {
  const gridWrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (gridWrapperRef.current) {
        setWidth(gridWrapperRef.current.offsetWidth);
        setHeight(gridWrapperRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  const sectionReveal = {
    hidden: { opacity: 0, y: 56 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const heroTextStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <section
        id="main"
        ref={gridWrapperRef}
        className="home relative bg-gray-50 md:p-10 flex py-8 items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <GridBackground dimensions={{ width, height }} />
          <div className="absolute inset-0 bg-gradient-to-br from-white/38 via-white/28 to-rose-50/20" />
          <div className="pointer-events-none absolute -left-16 top-8 h-60 w-60 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />
        </div>

        <div className="relative w-full home-contents grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
          {/* Text Section */}
          <motion.div
            variants={heroTextStagger}
            initial="hidden"
            animate="show"
            className="text flex flex-col md:gap-6 max-md:items-center max-md:text-center gap-4 justify-center px-4"
          >
            {/* Journey Title */}
            <motion.h3
              variants={heroItem}
              className="text-red-900 bg-red-200 w-64 rounded-3xl text-center font-bold p-2 text-sm"
            >
              Embark on a Journey of Faith
            </motion.h3>

            {/* Main Heading */}
            <motion.h1
              variants={heroItem}
              className="md:text-5xl text-3xl font-bold text-red-900 leading-[1.6em]"
            >
              Dive into Interactive Halal Learning for All Ages, Guided by Quran
              and Hadith.
            </motion.h1>
            {/* Description */}
            <motion.p variants={heroItem} className="text-red-700 text-2xl">
              Designed for every age group nurturing piety, lifelong learning,
              and spiritual growth in the light of the Qur'an and Hadith.
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.div variants={heroItem}>
              <Link
                to={"/register"}
                className="w-32 text-center bg-red-900 text-white p-2 rounded-full mt-6 hover:bg-red-700 transition-all"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Accent Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.22,
            }}
            className="relative hidden md:flex items-center justify-center px-4"
          >
            <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/70 shadow-lg backdrop-blur-sm px-8 py-10 space-y-4">
              <p
                dir="rtl"
                className="font-arabic-solid text-base font-semibold text-red-900 tracking-[0.08em] text-right"
              >
                الرحلة التعليمية الإسلامية
              </p>
              <p
                dir="rtl"
                className="font-urdu-solid text-xl text-slate-800 leading-[2.5] text-right"
              >
                قرآن، سنت اور ادب کی روشنی میں روزانہ سیکھنے کا مضبوط نظام
                بنائیں۔ لائیو اساتذہ کے ساتھ رہنمائی حاصل کریں۔
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-800">
                <div
                  className="rounded-2xl bg-red-50 p-4 shadow-sm text-right"
                  dir="rtl"
                >
                  <p className="font-arabic-solid text-sm font-semibold tracking-[0.05em] text-red-800">
                    معمل التجويد
                  </p>
                  <p className="font-urdu-solid mt-1 text-2xl font-bold text-red-900">
                    براہِ راست
                  </p>
                  <p className="font-urdu-solid text-sm mt-5 leading-7 text-red-700">
                    مخارج کی مشق اور فوری رہنمائی
                  </p>
                </div>
                <div
                  className="rounded-2xl bg-amber-50 p-4 shadow-sm text-right"
                  dir="rtl"
                >
                  <p className="font-arabic-solid text-sm font-semibold tracking-[0.05em] text-amber-800">
                    قصص السيرة
                  </p>
                  <p className="font-urdu-solid mt-1 text-lg font-semibold leading-[2.5] text-amber-800">
                    بچوں اور نوجوانوں کے لیے سیرتِ نبوی کے اسباق
                  </p>
                  <p className="font-urdu-solid mt-4 text-sm text-amber-700">
                    دو لسانی ورک شیٹس
                  </p>
                </div>
                <div
                  className="rounded-2xl bg-emerald-50 p-4 shadow-sm col-span-2 flex items-center justify-between"
                  dir="rtl"
                >
                  <div className="text-right">
                    <p className="font-arabic-solid text-sm font-semibold tracking-[0.05em] text-emerald-800">
                      مسار الفقه والأدب
                    </p>
                    <p className="font-urdu-solid mt-1 text-lg font-semibold leading-8 text-emerald-900">
                      نماز، طہارت اور اسلامی آداب پورے خاندان کے لیے
                    </p>
                  </div>
                  <span className="w-24 flex justify-center items-center font-urdu-solid rounded-full bg-white/70 p-2 text-sm font-semibold text-emerald-800 shadow-sm">
                    شام کی کلاسز
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <DiscoverIslam />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <SeekingKnowledge />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Teachers />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <BlogSection />
      </motion.div>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <FAQSection />
      </motion.div>
    </>
  );
};

export default Home;
