import React from "react";

const LanguageSupport = () => {
  return (
    <div className="bg-white px-6 pb-4 lg:pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Language Support
          </h1>
          <p className="text-lg text-gray-700">
            Learn Arabic, Urdu, and English with ease to connect deeply with the
            Qur'an and classical Islamic texts. Our multilingual support ensures
            you understand and express Islamic knowledge clearly and
            confidently.
          </p>
        </div>

        {/* Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Arabic */}
          <div className="bg-red-50 border-l-4 border-red-800 p-6 rounded shadow-sm">
            <h2 className="text-2xl font-semibold text-red-800 mb-2">
              📘 Arabic Language
            </h2>
            <p className="text-gray-700">
              Master Modern Standard Arabic and Qur’anic Arabic through
              structured lessons focused on grammar, vocabulary, and
              pronunciation. Our programs are tailored for beginners and
              intermediate learners to understand Qur'anic texts, Hadith, and
              classical Islamic books.
            </p>
          </div>

          {/* Urdu */}
          <div className="bg-red-50 border-l-4 border-red-800 p-6 rounded shadow-sm">
            <h2 className="text-2xl font-semibold text-red-800 mb-2">
              📗 Urdu Support
            </h2>
            <p className="text-gray-700">
              For students more comfortable in Urdu, we offer dedicated
              Urdu-based explanations of Islamic content. Lessons and study
              material are available in Urdu to ensure every learner gets the
              clearest understanding possible.
            </p>
          </div>

          {/* English */}
          <div className="bg-red-50 border-l-4 border-red-800 p-6 rounded shadow-sm">
            <h2 className="text-2xl font-semibold text-red-800 mb-2">
              📕 English Learning
            </h2>
            <p className="text-gray-700">
              English-speaking students can access Islamic teachings in
              simplified, clear English. This helps international students and
              youth living in English-speaking environments to learn their
              religion with clarity and fluency.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Why Language Support Matters
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Understand Qur’an without relying on translations</li>
            <li>Build deeper connection with classical Islamic literature</li>
            <li>Participate in discussions with clarity and confidence</li>
            <li>Communicate Islamic knowledge effectively to others</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded transition">
            Explore Language Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSupport;
