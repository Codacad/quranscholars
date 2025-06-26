import { useState } from "react";

const faqs = [
  {
    question: "What do I need to start learning?",
    answer:
      "All you need is a stable internet connection, a quiet environment, and a device (phone, tablet, or laptop). No prior knowledge of Arabic is necessary for beginners.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "Our classes are conducted live to ensure real-time interaction, personalized guidance, and spiritual connection. However, some courses may offer recorded sessions for review.",
  },
  {
    question: "Can I choose a male or female tutor?",
    answer:
      "Yes, we respect your preferences. Sisters can choose qualified female teachers for better comfort and understanding, especially for kids and new learners.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are simple and secure. We accept various methods including online transfers. You can pay monthly and cancel anytime with prior notice.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Absolutely. We encourage students to book a free trial class to experience our teaching method and interact with our instructors before enrollment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-900 text-center mb-12 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-red-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-red-50 hover:bg-red-100 transition duration-200 text-left"
              >
                <span className="font-semibold text-red-900 text-lg">
                  {faq.question}
                </span>
                <span className="text-red-900 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 text-base leading-relaxed text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
