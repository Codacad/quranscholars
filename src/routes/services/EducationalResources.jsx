import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { resourceSections } from "../../data/educationalResources";
const EducationalResources = () => {
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
    <div
      ref={serviceContentRef}
      className="text-gray-900 font-sans pb-10 lg:pb-14"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur p-4 md:p-10"
        >
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(248,113,113,0.14),transparent_32%),radial-gradient(circle_at_84%_0%,rgba(251,191,36,0.16),transparent_34%)] pointer-events-none" /> */}
          <div className="relative grid md:grid-cols-[1.15fr_0.85fr] gap-6 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
                Library Hub
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Educational Resources
              </h1>
              <p className="text-lg text-slate-700 max-w-2xl">
                A curated vault of PDFs, workbooks, media, and ready-to-use
                templates built to keep your learning authentic, organized, and
                actionable.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-100 text-red-800 border border-red-200 px-3 py-1 text-xs font-semibold">
                  350+ assets
                </span>
                <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-semibold">
                  New drops monthly
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Download stats
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-3xl font-bold">42k</p>
                  <p className="text-xs text-white/80">downloads</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">18</p>
                  <p className="text-xs text-white/80">languages</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-xs text-white/80">rating</p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/25">
                <div className="h-full w-[72%] rounded-full bg-white" />
              </div>
              <p className="mt-2 text-sm text-white/90">
                72% of learners save 3+ hours weekly using ready-made syllabi.
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Library highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceSections.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-red-100 bg-white/90 shadow-sm p-4 hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700">
                    <item.icon />
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-100 font-semibold">
                    {item.badge}
                  </span>
                </div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-700 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6"
        >
          <div className="rounded-2xl bg-white/90 border border-red-100 p-6 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-slate-900">
              Multilingual & multimedia
            </h3>
            <p className="text-slate-700">
              English, Urdu, and Arabic resources with audio overlays, diagrams,
              and concise lesson summaries to make complex topics stick.
            </p>
            <p className="text-slate-700">
              Prefer to listen? Stream recitations and bite-sized explainers
              while following synced notes.
            </p>
          </div>
          <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-6 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-slate-900">Who it serves</h3>
            <ul className="space-y-2 text-slate-800">
              <li>• Students: supplement courses with ready references.</li>
              <li>
                • Teachers: pull authentic citations and classroom visuals.
              </li>
              <li>• Parents: share age-appropriate summaries at home.</li>
              <li>• Seekers: structured paths without information overload.</li>
            </ul>
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
            “Whoever follows a path in pursuit of knowledge, Allah will make a
            path to Paradise easy for them.”
          </blockquote>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                Start exploring now
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-2xl">
                Download syllabi, guided notes, and media packs. Save favorites,
                track progress, and get notified when new drops land.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-start md:justify-end">
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-red-700 font-bold px-5 py-3 shadow-md hover:-translate-y-0.5 transition">
                Browse Resources
                <span className="h-8 w-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                  <FiArrowRight />
                </span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/70 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">
                Download Sample PDF
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EducationalResources;
