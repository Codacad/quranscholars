import React from "react";

const YouthPrograms = () => {
  return (
    <div className="bg-white text-gray-800 pb-4 lg:pb-8">
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Youth Programs
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empowering the next generation through knowledge, faith, and
            leadership. Our youth programs aim to cultivate strong Muslim
            identities, build resilience, and prepare youth to live Islam
            confidently in today’s world.
          </p>
        </div>

        {/* Section 1 - Identity & Self-Worth */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Strengthening Islamic Identity
          </h2>
          <p className="text-gray-700">
            In an age where external influences often challenge traditional
            values, we aim to help Muslim youth understand and take pride in
            their Islamic identity. Through mentorship programs, weekly halaqas
            (circles of learning), and peer discussions, young Muslims learn how
            to integrate Islamic teachings in their daily lives with confidence.
          </p>
        </div>

        {/* Section 2 - Leadership and Life Skills */}
        <div className="mb-12 bg-red-50 rounded p-6 shadow-inner">
          <h2 className="text-2xl font-semibold text-red-900 mb-3">
            Leadership and Life Skills
          </h2>
          <p className="text-gray-700">
            Our programs go beyond academics and faith to also focus on life
            skills that every young person needs. We offer leadership training,
            communication workshops, conflict resolution exercises, time
            management skills, and project-based team activities that align with
            Islamic ethics and manners.
          </p>
        </div>

        {/* Section 3 - Topics We Cover */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Relevant and Real Conversations
          </h2>
          <p className="text-gray-700 mb-3">
            Youth today face unique struggles—mental health, peer pressure,
            online distractions, and questions around faith. We address these
            issues head-on, using Islamic guidance and open conversations to
            create a safe space for learning and growth.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Dealing with anxiety and stress through Islamic tools</li>
            <li>Understanding gender roles, modesty, and self-respect</li>
            <li>Handling social media with purpose</li>
            <li>Combating peer pressure and maintaining values</li>
            <li>Knowing your rights and responsibilities as a Muslim youth</li>
          </ul>
        </div>

        {/* Section 4 - Events and Community Involvement */}
        <div className="mb-12 bg-red-100 rounded p-6">
          <h2 className="text-2xl font-semibold text-red-900 mb-3">
            Events & Volunteering
          </h2>
          <p className="text-gray-700">
            We host online youth camps, webinars, Q&A sessions with scholars,
            and community clean-up events that help our youth develop a sense of
            purpose and responsibility. We also encourage them to volunteer in
            our educational and community services to build empathy and
            leadership qualities.
          </p>
        </div>

        {/* Section 5 - Parent-Youth Collaboration */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            Partnering with Parents
          </h2>
          <p className="text-gray-700">
            Youth development is most effective when supported at home. We
            provide parents with resources and occasional joint sessions so they
            can reinforce positive changes and maintain an open line of
            communication with their children.
          </p>
        </div>

        {/* Quote Block */}
        <div className="bg-red-50 p-6 rounded text-center shadow-md">
          <blockquote className="text-xl italic text-red-900 font-medium max-w-3xl mx-auto">
            “Take benefit of five before five: your youth before your old age…”
            — Prophet Muhammad ﷺ
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded transition duration-300">
            Get Involved in Our Youth Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouthPrograms;
