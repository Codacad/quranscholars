import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
const EducationalResources = () => {
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
      className="bg-white text-gray-900 font-sans lg:pb-8 pb-4"
    >
      <div className="mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Educational Resources
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empowering minds through access to authentic Islamic knowledge. Dive
            into our comprehensive library of carefully curated resources
            designed for every learner, from beginner to advanced.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            A Cornerstone for Islamic Learning
          </h2>
          <p className="text-gray-700 mb-4">
            At Quran Scholar, we believe that structured and reliable access to
            quality materials is essential for building lasting knowledge. Our{" "}
            <strong>Educational Resources</strong> service provides learners of
            all levels — students, teachers, parents, and researchers — with
            materials rooted in Qur’an, Sunnah, and scholarly tradition.
          </p>
          <p className="text-gray-700">
            Whether you're learning Arabic, diving into Hadith sciences, or
            exploring classical Fiqh, our growing library supports your
            spiritual and intellectual journey with depth and clarity.
          </p>
        </section>

        {/* Materials Offered */}
        <section className="mb-14 bg-red-50 p-6 rounded shadow-inner">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            What's in Our Library?
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              📘 <strong>Qur’anic Tafseer:</strong> Classical and contemporary
              exegesis from authentic scholars.
            </li>
            <li>
              📖 <strong>Hadith Collections:</strong> Verified narrations with
              commentary and classifications.
            </li>
            <li>
              📜 <strong>Arabic Grammar:</strong> Easy-to-follow guides for
              non-native speakers.
            </li>
            <li>
              ⚖️ <strong>Islamic Fiqh:</strong> Case studies and practical
              applications for all madhahib.
            </li>
            <li>
              🎧 <strong>Audio & Video:</strong> Tajweed recitations, lecture
              series, and visual explainers.
            </li>
            <li>
              🧠 <strong>Interactive Tools:</strong> Flashcards, quizzes, and
              revision checklists.
            </li>
          </ul>
        </section>

        {/* Learning Support */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Multilingual & Multimedia Support
          </h2>
          <p className="text-gray-700 mb-4">
            Understanding that learners come from diverse backgrounds, our
            resources are available in English, Urdu, and Arabic. Whether you're
            looking for beginner guides or in-depth scholarly work, you’ll find
            tools tailored to your language and learning style.
          </p>
          <p className="text-gray-700">
            We use visuals, diagrams, voiceovers, and lesson summaries to
            enhance comprehension — making even the most complex topics easy to
            grasp.
          </p>
        </section>

        {/* Who Can Benefit */}
        <section className="mb-14 bg-red-100 p-6 rounded">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            Who Are These Resources For?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              🧒 <strong>Students:</strong> Supplement their coursework with
              in-depth learning.
            </li>
            <li>
              👨‍🏫 <strong>Teachers:</strong> Use authentic references to prepare
              engaging lessons.
            </li>
            <li>
              👨‍👩‍👧‍👦 <strong>Parents:</strong> Guide their children with reliable
              Islamic content at home.
            </li>
            <li>
              🧕 <strong>Seekers of Knowledge:</strong> Anyone eager to explore
              Islam in a structured, authentic way.
            </li>
          </ul>
        </section>

        {/* Quote */}
        <section className="mb-14 text-center">
          <blockquote className="italic text-xl text-red-900 font-medium max-w-3xl mx-auto">
            “Whoever follows a path in the pursuit of knowledge, Allah will make
            a path to Paradise easy for him.” — Prophet Muhammad ﷺ
          </blockquote>
        </section>

        {/* Community Engagement */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            More Than a Library — A Learning Movement
          </h2>
          <p className="text-gray-700 mb-4">
            We don't just provide materials — we foster a vibrant learning
            community. Students engage in discussions, exchange notes, and
            support one another through study circles and virtual meetups.
          </p>
          <p className="text-gray-700">
            New content is added monthly, including updated tafsir modules,
            printable workbooks, and recommended reading guides curated by
            scholars. You’ll never feel alone in your pursuit of knowledge.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Start Exploring Now
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of learners worldwide accessing the Quran Scholar
            resource center. Transform your study habits with tools built on
            trust, clarity, and a passion for learning.
          </p>
          <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded transition duration-300">
            Browse Educational Resources
          </button>
        </section>
      </div>
    </div>
  );
};

export default EducationalResources;
