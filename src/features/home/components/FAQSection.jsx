import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs.js";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div>
        <div>
          <div>
            <span />
            Common Questions
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>

            
            FAQ
          </motion.h2>
          <p>
            Quick answers about classes, tutors, payments, and trials.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}>

                
                <button
                  onClick={() => toggleFAQ(index)}>

                  
                  <div>
                    <p>
                      {faq.question}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}>

                    
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 }
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.8, 0.25, 1]
                    }}>

                    
                      <motion.p
                      variants={{ open: { y: 0 }, collapsed: { y: -8 } }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}>

                      
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};

export default FAQSection;
