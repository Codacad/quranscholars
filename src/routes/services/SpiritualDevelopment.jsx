import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const SpiritualDevelopment = () => {
  const serviceContentRef = useRef();
  const location = useLocation();
  useEffect(() => {
    if (serviceContentRef.current) {
      gsap.fromTo(
        serviceContentRef.current,
        {
          opacity: 1,
          y: -30,
          duration: 0.5,
        },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [location.pathname]);
  return (
    <div
      ref={serviceContentRef}
      className="bg-gradient-to-b mx-auto from-white to-gray-100 px-6 pb-4 lg:pb-8"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-red-800 mb-4">
          Spiritual Development
        </h1>
        <p className="text-lg text-gray-700">
          Cultivating a stronger connection with Allah ﷻ through reflection,
          guidance, and practical steps for inner peace and faith.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-10">
        <blockquote className="italic text-red-800 text-xl">
          “Verily, in the remembrance of Allah do hearts find rest.” – Surah
          Ar-Ra’d (13:28)
        </blockquote>
      </div>

      {/* Content Sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">
          What Is Spiritual Development in Islam?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Spiritual development (Tazkiyah) is an essential part of a Muslim’s
          journey. It involves purifying the heart, strengthening one’s
          relationship with Allah, and striving to live a life aligned with
          Islamic teachings. At Quran Scholar, our programs guide students
          through this journey with care, knowledge, and sincerity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 shadow-sm rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Remembrance of Allah (Dhikr)
            </h3>
            <p className="text-gray-700">
              We teach the value of daily remembrance through guided dhikr
              sessions, with recommended supplications from authentic Hadith and
              the Qur'an.
            </p>
          </div>

          <div className="bg-red-50 p-6 shadow-sm rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Purification of the Heart
            </h3>
            <p className="text-gray-700">
              Topics include sincerity (Ikhlas), patience (Sabr), gratitude
              (Shukr), and other traits of the heart — taught through both
              classical and modern perspectives.
            </p>
          </div>

          <div className="bg-red-50 p-6 shadow-sm rounded-lg">
            <h3 className="text-xl font-bold mb-2">Spiritual Mentorship</h3>
            <p className="text-gray-700">
              Students have access to mentors for personal spiritual advice and
              development strategies based on the Qur'an and Sunnah.
            </p>
          </div>

          <div className="bg-red-50 p-6 shadow-sm rounded-lg">
            <h3 className="text-xl font-bold mb-2">Practical Application</h3>
            <p className="text-gray-700">
              We integrate teachings into daily life — such as mindfulness in
              prayer, charity, fasting, and ethical behavior in social life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">
          Why Spiritual Growth Matters
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Spiritual growth is more than just knowledge — it’s about transforming
          your heart, habits, and purpose in life. A spiritually aware believer
          is more resilient, compassionate, and conscious of their actions in
          this world and the Hereafter.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Improves inner peace and mental clarity</li>
          <li>Strengthens focus in Salah and ibadah</li>
          <li>Encourages ethical and moral behavior</li>
          <li>Builds consistency in worship and reflection</li>
          <li>Develops love for Allah and the Prophet ﷺ</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-red-700 mb-2">
          Start Your Journey of Tazkiyah
        </h2>
        <p className="text-gray-700 mb-4">
          Enroll in our spiritual development sessions and take the first step
          toward a heart connected with Allah.
        </p>
        <button className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default SpiritualDevelopment;
