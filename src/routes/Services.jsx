import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 px-0 py-4 sm:px-4 sm:py-6 md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(148,163,184,0.08),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(148,163,184,0.06),transparent_32%)]" />

        <div className="relative mx-auto w-full max-w-6xl space-y-5 px-2 sm:px-0 md:space-y-8">
          <div className="grid min-w-0 gap-4">
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
                className="min-w-0 rounded-3xl p-3 backdrop-blur"
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
