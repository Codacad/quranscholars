import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { pillars, steps } from "../../data/spiritaulDevelopment";
const SpiritualDevelopment = () => {
  const serviceContentRef = useRef();
  const location = useLocation();
  useEffect(() => {
    if (serviceContentRef.current) {
      gsap.fromTo(
        serviceContentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    }
  }, [location.pathname]);

  return (
    <div ref={serviceContentRef} className="text-gray-900 pb-10 lg:pb-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur p-4"
        >
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(248,113,113,0.14),transparent_32%),radial-gradient(circle_at_86%_0%,rgba(251,191,36,0.16),transparent_34%)] pointer-events-none" /> */}
          <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
                Tazkiyah Pathway
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Spiritual Development
              </h1>
              <p className="text-lg text-slate-700 max-w-2xl">
                Build a heart-centered life with guided dhikr, reflective
                journaling, and Sunnah-rooted habits supported by mentors and a
                like-hearted community.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-100 text-red-800 border border-red-200 px-3 py-1 text-xs font-semibold">
                  6 tracks
                </span>
                <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-semibold">
                  Live circles weekly
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Pulse stats
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-xs text-white/80">report calmer Salah</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">5k</p>
                  <p className="text-xs text-white/80">weekly adhkar</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-xs text-white/80">mentor rating</p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/25">
                <div className="h-full w-[78%] rounded-full bg-white" />
              </div>
              <p className="mt-2 text-sm text-white/90">
                Most learners feel a focus lift within the first 10 days of
                guided dhikr.
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4"
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-red-100 bg-white/90 shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <item.icon />
                </span>
                <p className="font-bold text-slate-900">{item.title}</p>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6"
        >
          <div className="rounded-2xl bg-white/90 border border-red-100 p-6 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-slate-900">Why it matters</h3>
            <p className="text-slate-700">
              Spiritual growth is heart-work: resilience, clarity, and mercy.
              Presence in Salah, gentleness in speech, and consistency in
              remembrance flow from a nurtured heart.
            </p>
            <ul className="space-y-2 text-slate-800">
              <li>• Inner sakinah and mental clarity</li>
              <li>• Steadier khushu in prayer</li>
              <li>• Ethical reflexes in daily interactions</li>
              <li>• Habit of gratitude and tawakkul</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-6 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-slate-900">
              How it works (4 steps)
            </h3>
            <ol className="space-y-2 text-slate-800">
              {steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white/80 border border-amber-100 px-3 py-2"
                >
                  <span className="mt-0.5 h-7 w-7 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-white/90 border border-red-100 shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Weekly focus packs
              </h3>
              <p className="text-slate-700 max-w-xl">
                Download dhikr cards, dua collections, reflection prompts, and
                micro-habit trackers. Reset every Jumu'ah with a new focus pack.
              </p>
            </div>
            <div className="flex items-center gap-2 text-red-700 font-semibold">
              <FiDownload /> PDF + mobile sheets
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-white/90 border border-red-100 shadow-lg p-8 text-center"
        >
          <blockquote className="italic text-xl text-slate-900 font-semibold max-w-3xl mx-auto">
            “Verily, in the remembrance of Allah do hearts find rest.” — Surah
            Ar-Ra'd (13:28)
          </blockquote>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-8 shadow-xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Start your tazkiyah journey
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-6">
            Join live circles, download focus packs, and receive gentle
            reminders to keep your heart engaged.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-red-700 font-bold px-6 py-3 shadow-md hover:-translate-y-0.5 transition">
            Enroll Now
            <span className="h-8 w-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
              <FiArrowRight />
            </span>
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default SpiritualDevelopment;
