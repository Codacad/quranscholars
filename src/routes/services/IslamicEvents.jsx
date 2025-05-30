import React from "react";

const IslamicEvents = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Title */}
        <div className="border-l-4 border-red-800 pl-6 mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-2">
            Islamic Events & Community Gatherings
          </h1>
          <p className="text-lg text-gray-700">
            Celebrate faith and community with events that inspire, unite, and
            revive the spirit.
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our calendar is filled with spiritually enriching Islamic events
            throughout the year, designed to uplift the hearts, increase
            knowledge, and build strong bonds within our community. From Ramadan
            programs and Eid gatherings to Seerah nights and youth spiritual
            camps, each event is tailored to bring people together in
            remembrance of Allah ﷻ and the teachings of His Messenger ﷺ.
          </p>
        </div>

        {/* Block Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Block 1 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl text-red-800 font-semibold mb-3">
              Ramadan Programs
            </h2>
            <p className="text-gray-700 mb-2">
              The month of mercy is the heart of our community activities. We
              organize nightly Taraweeh prayers, Qur’an reflections, community
              Iftars, and special talks to help families and individuals make
              the most of this blessed time.
            </p>
            <p className="text-gray-700">
              Each night brings a new reminder and a renewed chance to connect
              with the Qur’an and our Creator. Our Ramadan programs are
              inclusive and welcoming, offering both on-site and virtual
              options.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl text-red-800 font-semibold mb-3">
              Eid Celebrations
            </h2>
            <p className="text-gray-700 mb-2">
              Eid is not just a celebration — it's a spiritual milestone. We
              organize joyous and vibrant gatherings with communal prayers,
              festive meals, games for children, cultural performances, and
              giveaways, all in an Islamic environment.
            </p>
            <p className="text-gray-700">
              These events ensure that our youth and families experience the joy
              of Eid in a halal, spiritually grounded setting.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl text-red-800 font-semibold mb-3">
              Seerah Nights & Story Circles
            </h2>
            <p className="text-gray-700 mb-2">
              Explore the life of the Prophet Muhammad ﷺ in an engaging,
              interactive format. Our Seerah nights involve storytelling, group
              discussion, reflections, and sometimes dramatized narration of key
              moments from the Prophet’s life.
            </p>
            <p className="text-gray-700">
              These sessions are designed to bring timeless lessons to life and
              inspire love for the Messenger ﷺ across all age groups.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl text-red-800 font-semibold mb-3">
              Youth Camps & Retreats
            </h2>
            <p className="text-gray-700 mb-2">
              Spiritual growth, outdoor fun, and meaningful friendships come
              together in our youth retreats. We take young Muslims out of their
              usual environments and into nature, with a mix of halaqahs, games,
              challenges, and team-building exercises.
            </p>
            <p className="text-gray-700">
              The goal? To build confidence, strengthen faith, and help them
              develop a positive Islamic identity in the real world.
            </p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-red-100 p-8 rounded-xl shadow-inner mb-16 text-center">
          <h2 className="text-2xl font-semibold text-red-900 mb-3">
            Why These Events Matter
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Events are more than just gatherings — they are touchpoints for the
            heart, opportunities to revive the sunnah, and safe spaces where
            Muslims feel seen and supported. In a world of isolation and
            distractions, these moments ground us, remind us of our purpose, and
            reconnect us with our ummah.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 transition">
            Explore Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default IslamicEvents;
