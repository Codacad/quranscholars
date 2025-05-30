import React from "react";
import { FaHandsHelping, FaComments, FaUsers, FaMosque } from "react-icons/fa";

const CommunityEngagements = () => {
  return (
    <div className="bg-white py-10 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Community Engagements
          </h1>
          <p className="text-lg text-gray-700">
            Fostering a strong sense of unity, belonging, and active
            participation in Islamic life through various programs and events.
          </p>
        </header>

        {/* Engagement Types Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start gap-4">
            <FaHandsHelping className="text-4xl text-red-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Volunteering Programs
              </h3>
              <p className="text-gray-700">
                Join hands in charitable efforts, community projects, and Dawah
                activities. Students and families can actively give back to
                society while strengthening their faith.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaComments className="text-4xl text-red-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Discussion Circles
              </h3>
              <p className="text-gray-700">
                Weekly online Halqas and moderated discussions on Islamic
                topics, current issues, and spiritual growth — promoting
                knowledge sharing and unity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaUsers className="text-4xl text-red-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Family Events
              </h3>
              <p className="text-gray-700">
                Special sessions for parents and children, online family
                meetups, and Qur’an competitions — encouraging shared learning
                in a warm, faith-based atmosphere.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMosque className="text-4xl text-red-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Local Mosque Partnerships
              </h3>
              <p className="text-gray-700">
                Collaborations with masajid across India to support students in
                finding offline community centers for prayer, learning, and
                youth activities.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-50 p-8 rounded-lg shadow mb-16">
          <h2 className="text-2xl font-semibold text-red-900 mb-6 text-center">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                "Joining the Qur’an Scholar sessions brought us closer as a
                family. My kids look forward to the weekly family quizzes!"
              </p>
              <p className="mt-2 font-semibold text-red-800">
                – Fatima B., Parent
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                "The Dawah workshops and volunteer projects helped me find
                confidence in speaking about Islam and serving others."
              </p>
              <p className="mt-2 font-semibold text-red-800">
                – Sameer R., Student
              </p>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Be Part of Something Bigger
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you're a student, parent, or teacher, our programs are
            designed to bring people together with purpose and passion. Join our
            vibrant learning community and make a difference.
          </p>
          <button className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 transition">
            Get Involved Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default CommunityEngagements;
