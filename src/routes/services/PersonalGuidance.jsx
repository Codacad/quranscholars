import React from "react";

const PersonalGuidance = () => {
  return (
    <div className="bg-white px-6 pb-4 lg:pb-8">
      <div className="mx-auto">
        {/* Title & Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Personal Guidance
          </h1>
          <p className="text-lg text-gray-700">
            One-on-one Islamic guidance to help students and families navigate
            their spiritual and personal journeys with confidence and faith.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-red-800">
              Tailored Spiritual Support
            </h2>
            <p className="text-gray-700">
              Every Muslim’s path is unique, and sometimes we need personal
              attention to truly understand and grow. Our qualified instructors
              and scholars offer private sessions designed to address your
              individual concerns — whether it's Qur'an recitation improvement,
              understanding fiqh issues, or seeking help during a crisis of
              faith.
            </p>

            <h2 className="text-2xl font-semibold text-red-800">
              Confidential One-on-One Sessions
            </h2>
            <p className="text-gray-700">
              We value your trust. Students and parents can schedule private
              virtual sessions with certified male and female mentors. These
              sessions provide a safe and respectful space to ask questions,
              seek advice, and work on personal goals under the guidance of
              someone knowledgeable and caring.
            </p>

            <h2 className="text-2xl font-semibold text-red-800">
              Academic & Faith Mentorship
            </h2>
            <p className="text-gray-700">
              Need help with time management, Islamic studies, or motivation to
              keep going? Our mentors help build study plans, improve focus, and
              stay consistent with learning and prayer. We also offer support
              for teens dealing with pressure and confusion in their Islamic
              identity.
            </p>
          </div>

          {/* Right Column: Visual Section */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 space-y-6">
            <h3 className="text-xl font-semibold text-red-900">
              Who is it for?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Students needing extra support with Qur'an or Islamic topics
              </li>
              <li>
                Parents seeking parenting advice from an Islamic perspective
              </li>
              <li>Teens going through identity or peer-pressure issues</li>
              <li>
                Anyone looking to strengthen their faith with private coaching
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-red-900">How It Works</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Request a session from your student dashboard</li>
              <li>
                Choose a teacher/mentor by availability and gender preference
              </li>
              <li>Get personalized attention in a private, online setting</li>
            </ol>

            <div className="text-center mt-6">
              <button className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 transition">
                Schedule Guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGuidance;
