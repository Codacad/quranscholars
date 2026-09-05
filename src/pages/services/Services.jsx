import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import ServiceSideNavigation from "@/components/navigation/ServiceSideNavigation.jsx";

const Services = () => {
  const location = useLocation();
  const isServicesHome = location.pathname.replace(/\/$/, "") === "/services";

  return (
    <div className="min-w-0 overflow-x-clip bg-[#fbfcfa]">
      {!isServicesHome && (
        <div className="sticky top-18 z-30 border-b border-[#dfe6e2] bg-white/95 shadow-[0_6px_20px_rgba(21,54,44,.05)] backdrop-blur-lg max-sm:top-16">
          <ServiceSideNavigation layout="top" />
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
