import React from "react";
import AboutIllustration from "/woman_ill_2.svg";
import { Link } from "react-router-dom";
import ChildWithQuran from "/child-with-quran.svg";
import { IoMdCheckmark } from "react-icons/io";
import MissionAbout from "../components/MissionAbout";
const About = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 overflow-hidden z-0">
        {/* Decorative Blurs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-amber-100 blur-3xl opacity-70" />

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100 w-fit">
              🕌 About Quran Scholars
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Illuminating Hearts Through
              <span className="text-red-600"> Authentic Islamic Knowledge</span>
            </h1>

            <p className="text-slate-600 leading-relaxed">
              Quran Scholars is an online Islamic education platform dedicated
              to nurturing faith, character, and understanding through the Quran
              and Sunnah. We provide structured, authentic, and accessible
              learning for students of all ages wherever they are in the world.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our mission is to reconnect hearts with the Book of Allah and
              guide learners with clarity, sincerity, and scholarly care all in
              a supportive digital environment.
            </p>

            <Link
              to="#"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition"
            >
              Get Started
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={ChildWithQuran}
              alt="Learning Quran"
              className="rounded-2xl shadow-xl max-w-full"
            />
          </div>
        </section>

        {/* What We Do */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-20">
          <div className="bg-white/90 backdrop-blur rounded-3xl border border-red-100 shadow-[0_20px_70px_-28px_rgba(220,38,38,0.45)] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div>
              <img
                src={ChildWithQuran}
                alt="Islamic Learning"
                className="rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Quran • Hadith • Islamic Studies
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-red-600">
                What We Do
              </h2>

              <p className="text-slate-600 leading-relaxed">
                At Quran Scholars, we offer structured and goal-oriented
                programs designed to build strong foundations in Islamic
                knowledge while nurturing spirituality, discipline, and love for
                learning.
              </p>

              <div className="grid gap-3 pt-2">
                {[
                  "Quran Reading with Tajweed",
                  "Quran Memorization (Hifz Programs)",
                  "Hadith & Seerah Studies",
                  "Core Islamic Studies & Fiqh",
                  "Islamic Educational Resources",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-red-700 font-medium"
                  >
                    <IoMdCheckmark size={22} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="#"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold mt-6 shadow-md transition"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <MissionAbout />
      </div>
    </>
  );
};

export default About;
