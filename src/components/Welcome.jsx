import { Link } from "react-router-dom";
import WelcomeImgTeaching from "../assets/images/teaching.svg";
import WelcomeImgPhone from "../assets/images/phone-inhand.png";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome bg-white grid md:grid-cols-2 max-md:grid-cols-1 justify-center items-center md:pt-16 md:px-16 py-8 px-4 gap-8">
        {/* Image Section */}
        <div className="img w-full md:order-2 flex justify-center">
          <img
            src={WelcomeImgTeaching}
            alt="Teaching"
            className="w-full rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text flex flex-col gap-6 max-md:items-center max-md:text-center">
          <h2 className="text-red-900 text-4xl font-extrabold uppercase tracking-wide leading-tight">
            Discover the Light of Islamic Knowledge
          </h2>

          <p className="text-paragraph text-base md:text-lg font-medium leading-7">
            At Quran Scholar, we are devoted to providing authentic Islamic
            education to learners of all ages. Whether you're a beginner
            starting your journey with the Quran, or someone looking to deepen
            your understanding of Islam, we are here to support you every step
            of the way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg font-medium">
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">📖</span>
              <span>Structured Quran Courses with Tajweed & Tafsir</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">🧕</span>
              <span>Female Tutors for Sisters and Children</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">🕰️</span>
              <span>Flexible Scheduling to Fit Your Lifestyle</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">🌐</span>
              <span>Live Online Sessions from Anywhere in the World</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">🎓</span>
              <span>Certified Scholars with Deep Islamic Knowledge</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl">💬</span>
              <span>Multilingual Instruction (Arabic, Urdu, English)</span>
            </div>
          </div>

          <p className="text-paragraph text-base md:text-lg font-medium leading-7">
            Join thousands of students who trust Quran Scholar for their Islamic
            learning. It's never too early or too late to start — all you need
            is the intention.
          </p>

          <Link
            to="/courses"
            className="bg-red-900 hover:bg-red-700 transition-all px-6 py-3 rounded-full text-white text-center w-48 mt-6 shadow-md"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
