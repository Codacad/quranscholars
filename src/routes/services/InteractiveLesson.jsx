import React from "react";
const InteractiveLesson = () => {
  return (
    <div className="bg-white text-gray-900 font-sans pb-4 lg:pb-8">
      <div className="mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Interactive Lessons
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Deepen your Islamic learning journey through active participation,
            discussion, and exploration — not just lectures. Discover how our
            interactive teaching approach transforms understanding into action.
          </p>
        </header>

        {/* Why Interactive */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Why Choose Interactive Lessons?
          </h2>
          <p className="text-gray-700 mb-2">
            Traditional lectures often leave students as passive listeners.
            Our approach invites learners to engage with the material actively,
            allowing concepts to truly resonate. Through direct communication,
            quizzes, group activities, and multimedia tools, students retain
            more and feel more connected to their Islamic learning.
          </p>
          <p className="text-gray-700">
            We believe in learning through doing. Whether it's a live Q&A,
            discussion on a verse, or peer collaboration — you're never just
            sitting back; you're part of the process.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-14 bg-red-50 p-6 rounded shadow-inner">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            What Makes Our Lessons Interactive?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>
              <strong>Live Participation:</strong> Students are encouraged to
              ask questions, share thoughts, and contribute actively during
              sessions.
            </li>
            <li>
              <strong>Interactive Quizzes & Activities:</strong> Periodic tests,
              polls, and hands-on exercises ensure constant engagement.
            </li>
            <li>
              <strong>Instructor Feedback:</strong> Personalized responses to
              students’ questions help clear doubts and deepen understanding.
            </li>
            <li>
              <strong>Peer Discussion Rooms:</strong> Small breakout groups
              allow for real-time collaboration and shared insights.
            </li>
            <li>
              <strong>Multimedia Elements:</strong> Use of relevant videos,
              slides, and visuals helps break monotony and enhance
              comprehension.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Benefits of Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enhanced concentration and memory retention</li>
              <li>Active critical thinking based on Islamic principles</li>
              <li>Encouragement of reflection and internalization</li>
              <li>Safe space to ask questions and explore doubts</li>
              <li>Stronger bonds with fellow learners</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Boost in confidence to speak about Islam</li>
              <li>Skill development in communication and leadership</li>
              <li>Flexible learning experience that adjusts to you</li>
              <li>Motivation through interactive competition (badges, scores)</li>
              <li>Barakah of learning together in a virtual jama’ah</li>
            </ul>
          </div>
        </section>

        {/* Who Can Join */}
        <section className="mb-14 bg-red-100 p-6 rounded">
          <h2 className="text-2xl font-semibold text-red-900 mb-3">
            Who Can Benefit from This?
          </h2>
          <p className="text-gray-700">
            Everyone. Whether you're a school-aged student, a working
            professional, or a parent seeking knowledge, our interactive format
            adapts to you. We serve:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Young learners and teenagers new to structured Islamic study</li>
            <li>Adults returning to their faith and looking to re-learn basics</li>
            <li>Intermediate and advanced students seeking deeper tafsir and fiqh</li>
            <li>Non-native Urdu/Arabic speakers preferring English-led sessions</li>
          </ul>
        </section>

        {/* How To Join */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            How Do You Participate?
          </h2>
          <p className="text-gray-700 mb-2">
            Enrolling is easy. Choose your desired course on our platform, and
            once registered, you'll receive access links, schedules, and
            preparatory materials. Sessions are conducted on Zoom or our in-app
            live classroom.
          </p>
          <p className="text-gray-700">
            Just bring your curiosity, a notebook, and your love for knowledge.
            Our team ensures you're guided every step of the way.
          </p>
        </section>

        {/* Quote or Highlight */}
        <section className="mb-14 text-center bg-red-50 p-6 rounded shadow">
          <blockquote className="italic text-xl text-red-900 font-medium max-w-3xl mx-auto">
            “Tell me and I forget, teach me and I may remember, involve me and I learn.” – Islamic learning thrives through involvement.
          </blockquote>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Ready to Learn Differently?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Step into a learning experience that puts you at the center. Ask,
            explore, challenge, and grow. Join Quran Scholar’s interactive
            sessions and transform the way you study your Deen.
          </p>
          <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded transition duration-300">
            Register for an Interactive Class
          </button>
        </section>
      </div>
    </div>
  );
};

export default InteractiveLesson;
