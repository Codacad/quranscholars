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
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-rose-50/70" />
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="relative hidden md:flex items-center justify-center px-4"
          >
            <div className="rounded-3xl border border-white/60 bg-white/70 shadow-lg backdrop-blur-sm px-8 py-10 space-y-4 max-w-md">
              <p className="text-sm font-semibold text-red-900 uppercase tracking-[0.18em]">
                Islamic Study Capsule
              </p>
              <p className="text-lg text-slate-800 leading-relaxed">
                Build a daily rhythm around Qur'an, Sunnah, and adab with live
                teachers and guided practice.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-800">
                <div className="rounded-2xl bg-red-50 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-red-800">
                    Tajwīd Lab
                  </p>
                  <p className="mt-1 text-2xl font-bold text-red-900">Live</p>
                  <p className="text-xs text-red-700">
                    Makharij drills + feedback
                  </p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">
                    Sīrah Stories
                  </p>
                  <p className="mt-1 text-base font-semibold text-amber-800">
                    Prophetic lessons for kids & teens
                  </p>
                  <p className="text-xs text-amber-700">Bilingual worksheets</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 shadow-sm col-span-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-800">
                      Fiqh & Adab Track
                    </p>
                    <p className="mt-1 text-base font-semibold text-emerald-900">
                      Prayer, purity, and manners for the whole family
                    </p>
                  </div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                    Weeknights
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
