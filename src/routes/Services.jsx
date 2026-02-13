import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const serviceMeta = {
  "/services/courses": {
    title: "Courses",
    subtitle: "Structured tracks for Quran, language, and Islamic studies.",
  },
  "/services/interactive-lessons": {
    title: "Interactive Lessons",
    subtitle: "Live, engaging lessons built for active participation.",
  },
  "/services/educational-resources": {
    title: "Educational Resources",
    subtitle: "Guided materials to support deep and consistent learning.",
  },
  "/services/spiritual-development": {
    title: "Spiritual Development",
    subtitle: "Programs for worship habits, reflection, and personal growth.",
  },
  "/services/community-engagement": {
    title: "Community Engagement",
    subtitle: "Faith-led activities that build unity and service culture.",
  },
  "/services/personal-guidance": {
    title: "Personal Guidance",
    subtitle: "One-to-one mentorship for learning and life challenges.",
  },
  "/services/language-support": {
    title: "Language Support",
    subtitle: "Arabic, Urdu, and English pathways for clearer understanding.",
  },
  "/services/family-focused-services": {
    title: "Family Focused Services",
    subtitle: "Support for households through shared Islamic learning.",
  },
  "/services/youth-programs": {
    title: "Youth Programs",
    subtitle: "Mentorship and growth programs for the next generation.",
  },
  "/services/islamic-events": {
    title: "Islamic Events",
    subtitle: "Gatherings that connect knowledge, worship, and community.",
  },
};

const Services = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const activeMeta = serviceMeta[location.pathname] || {
    title: "Services Overview",
    subtitle: "Select a service to explore details and programs.",
  };

  return (
    <>
      <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 px-0 py-8 sm:px-4 sm:py-12 md:px-8 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(248,113,113,0.18),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(251,191,36,0.18),transparent_32%)]" />

        <div className="relative mx-auto w-full max-w-6xl space-y-5 px-2 sm:px-0 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col gap-4 rounded-3xl border border-red-100 bg-white/90 px-3 py-5 backdrop-blur sm:px-4 md:flex-row md:items-center md:justify-between md:px-10 md:py-8"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
                Guided offerings
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
                Services & Programs
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Explore courses, mentorship, resources, and community programs
                all in one organized hub.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl bg-red-50 text-red-800 border border-red-100 px-4 py-3 text-sm font-semibold">
                10+ tracks
              </div>
              <div className="rounded-2xl bg-amber-50 text-amber-900 border border-amber-100 px-4 py-3 text-sm font-semibold">
                Updated weekly
              </div>
            </div>
          </motion.div>

          <div className="grid min-w-0 gap-4">
            <div className="rounded-2xl border border-red-100 bg-white/80 px-3 py-3 sm:px-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-700">
                Active Service
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">
                {activeMeta.title}
              </h2>
              <p className="text-sm text-slate-600">{activeMeta.subtitle}</p>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={location.pathname}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 12, scale: 0.995 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: -8, scale: 0.995 }
                }
                transition={{ duration: 0.26, ease: "easeOut" }}
                className="min-w-0 overflow-x-hidden rounded-3xl border border-red-100 bg-white/95 p-3 backdrop-blur sm:p-6"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
