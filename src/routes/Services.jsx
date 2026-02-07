import { Outlet } from "react-router-dom";
import ServiceSideNavigation from "../components/navigation/ServiceSideNavigation";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-rose-50 min-h-screen py-14 px-4 md:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(248,113,113,0.18),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(251,191,36,0.18),transparent_32%)]" />

        <div className="relative w-full max-w-screen-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-red-100 bg-white/90 backdrop-blur px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
                Guided offerings
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
                Services & Programs
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Explore courses, mentorship, resources, and community
                programs—all in one organized hub.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-2xl bg-red-50 text-red-800 border border-red-100 px-4 py-3 text-sm font-semibold">
                10+ tracks
              </div>
              <div className="rounded-2xl bg-amber-50 text-amber-900 border border-amber-100 px-4 py-3 text-sm font-semibold">
                Updated weekly
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <ServiceSideNavigation />
            </motion.div>

            <div className="grid gap-4">
              <div className="lg:hidden">
                <ServiceSideNavigation condensed />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                className="rounded-3xl bg-white/95 backdrop-blur border border-red-100 p-6"
              >
                <Outlet />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
