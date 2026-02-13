import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { featureCards, steps } from "../../data/interactiveLessons";
const InteractiveLesson = () => {
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
      className="text-gray-900 font-sans pb-8 lg:pb-12"
    >
      <div className="max-w-6xl space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(248,113,113,0.16),transparent_32%),radial-gradient(circle_at_86%_0%,rgba(251,191,36,0.18),transparent_34%)] pointer-events-none" />
          <div className="relative grid md:grid-cols-[1.2fr_0.9fr] gap-6 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
                Live & collaborative
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Interactive Lessons
              </h1>
              <p className="text-lg text-slate-700 max-w-2xl">
                Active learning built on Quran & Sunnah: discussion pods,
                real-time Q&A, and guided practice that turns understanding into
                lived action.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-red-100 text-red-800 border border-red-200 px-3 py-1 text-xs font-semibold">
                  Avg engagement 87%
                </span>
                <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-semibold">
                  Cohorts weekly
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-red-600 text-white p-5 shadow-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Snapshot
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-3xl font-bold">120+</p>
                    <p className="text-xs text-white/80">live sessions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">4.8</p>
                    <p className="text-xs text-white/80">learner rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">15</p>
                    <p className="text-xs text-white/80">breakout pods</p>
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/25">
                  <div className="h-full w-[76%] rounded-full bg-white" />
                </div>
                <p className="mt-2 text-sm text-white/90">
                  76% finish within planned pace. Join the next cohort.
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl bg-white/90 border border-red-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Why interactive
            </h2>
            <p className="text-slate-700">
              Passive lectures fade fast. We anchor concepts through dialogue,
              reflection, and doing—so you retain more, apply faster, and feel
              connected to the material.
            </p>
            <p className="text-slate-700 mt-2">
              Live prompts, polls, and micro-challenges turn every session into
              an experience, not just a class.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Who it suits</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>• Teens & adults seeking structured, social learning</li>
              <li>• Reverts building foundations with guidance</li>
              <li>• Intermediate learners wanting tafsir/fiqh depth</li>
              <li>• Busy professionals needing focused, high-yield sessions</li>
              <li>
                • Non-native Arabic/Urdu speakers preferring English-led live
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-slate-900">What you get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-red-100 bg-white/90 shadow-sm p-4 hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                    <item.icon />
                  </span>
                  <p className="font-bold text-slate-900">{item.title}</p>
                </div>
                <p className="text-sm text-slate-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl bg-white/90 border border-red-100 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Benefits you feel
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Sharper retention with active recall</li>
              <li>• Confidence speaking and teaching others</li>
              <li>• Safe space to ask nuanced questions</li>
              <li>• Stronger bonds with peers pursuing the same goals</li>
              <li>• Barakah of learning together as a jama'ah</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              How to join (4 steps)
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
          className="rounded-3xl bg-white/90 border border-red-100 shadow-lg p-8 text-center"
        >
          <blockquote className="italic text-xl text-slate-900 font-semibold max-w-3xl mx-auto">
            “Tell me and I forget, teach me and I may remember, involve me and I
            learn.” Learning the Deen thrives when we’re involved together.
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
            Ready to learn differently?
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-6">
            Join a live, interactive cohort and experience discussion-led,
            practice-driven sessions that stick.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-red-700 font-bold px-6 py-3 shadow-md hover:-translate-y-0.5 transition">
            Register for an Interactive Class
            <span className="h-8 w-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
              <FiArrowRight />
            </span>
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default InteractiveLesson;
