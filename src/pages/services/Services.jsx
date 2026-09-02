import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section>
        <div />

        <div>
          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={location.pathname}
                initial={
                shouldReduceMotion ?
                false :
                { opacity: 0, y: 12, scale: 0.995 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                shouldReduceMotion ?
                undefined :
                { opacity: 0, y: -8, scale: 0.995 }
                }
                transition={{ duration: 0.26, ease: "easeOut" }}>

                
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>);

};

export default Services;
