import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What do I need to start learning?",
    answer:
      "A stable internet connection, a quiet space, and a phone, tablet, or laptop. No Arabic background is required for beginners.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "Primarily live for real-time Q&A and mentorship. Selected sessions are recorded for review.",
  },
  {
    question: "Can I choose a male or female tutor?",
    answer:
      "Yes. Sisters can select qualified female instructors; youth are matched with age-appropriate teachers.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Secure online payments, monthly billing, and simple cancellation with prior notice.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Absolutely—book a free trial to experience the teaching style before enrolling.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            FAQ
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Quick answers about classes, tutors, payments, and trials.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="rounded-2xl border border-red-100 bg-white/85 backdrop-blur shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left group"
                >
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </p>
                    {/* <p className="text-xs uppercase tracking-[0.18em] text-red-800">
                      {isOpen ? "Tap to close" : "Tap to expand"}
                    </p> */}
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="h-10 w-10 rounded-full border border-red-200 text-red-900 flex items-center justify-center text-xl font-bold group-hover:border-red-400"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.8, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        variants={{ open: { y: 0 }, collapsed: { y: -8 } }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        className="px-6 pb-5 text-base leading-relaxed text-gray-700"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
