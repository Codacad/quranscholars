import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
const FamilyFocused = () => {
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
      className="bg-white text-gray-800 pb-4 lg:pb-8"
    >
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Family-Focused Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Islam begins at home. Our family-oriented programs are designed to
            support parents and children together, helping households grow
            spiritually, emotionally, and intellectually through shared Islamic
            learning.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Parenting with Purpose
          </h2>
          <p className="text-gray-700 mb-4">
            Raising righteous children in today's complex world can be
            overwhelming. Our "Parenting with Purpose" workshops equip parents
            with tools and wisdom derived from the Qur'an and Sunnah. Topics
            include nurturing self-discipline through love, teaching adab
            (manners) through example, and establishing prophetic routines at
            home.
          </p>
          <p className="text-gray-700 mb-4">
            We also explore how to address digital challenges, emotional
            outbursts, and peer influence while maintaining strong Islamic
            values. With live Q&A sessions, group support, and resources for
            different age groups, this program empowers you to raise confident
            Muslim children ready to face modern-day tests with a firm spiritual
            foundation.
          </p>
          <p className="text-gray-700">
            Our certified counselors and Islamic educators are passionate about
            bridging the gap between tradition and today's parenting struggles,
            ensuring that every home becomes a place of peace, growth, and
            barakah.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Family Qur'an & Story Sessions
          </h2>
          <p className="text-gray-700 mb-4">
            Turn your family time into spiritually uplifting moments. Our weekly
            online sessions invite parents and children to explore the Qur'an
            together through age-appropriate tafsir, reflections on the stories
            of the Prophets, and shared journaling activities that promote
            bonding and mindfulness.
          </p>
          <p className="text-gray-700 mb-4">
            Each session is designed to foster conversation and reflection, not
            just listening. Children love the engaging questions, while parents
            gain insights into how to talk about tough topics with clarity and
            compassion rooted in the Deen.
          </p>
          <p className="text-gray-700">
            These sessions serve as an anchor in busy family lives - a time to
            slow down, connect, and grow together as one unit in the light of
            the Qur'an.
          </p>
        </div>

        {/* Quote */}
        <div className="bg-red-50 p-8 rounded-lg shadow-inner mb-16">
          <blockquote className="text-xl italic text-red-900 font-medium max-w-4xl mx-auto text-center">
            "The best of you are those who are best to their families." -
            Prophet Muhammad 
          </blockquote>
        </div>

        {/* Section 3 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Support for Every Stage of Family Life
          </h2>
          <p className="text-gray-700 mb-4">
            Every family goes through different seasons - from the early years
            of nurturing to the challenges of adolescence and beyond. Our
            services are designed to meet you at every stage, with topics such
            as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Islamic marriage principles, communication, and spousal support
            </li>
            <li>
              Tarbiyah (upbringing) of children through love and prophetic
              discipline
            </li>
            <li>
              Managing screen time and cultivating healthy digital habits at
              home
            </li>
            <li>
              Helping teens navigate identity, self-esteem, and friendships
            </li>
            <li>
              Establishing daily routines around salah, dhikr, and learning
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Our holistic approach recognizes that a healthy family is not built
            overnight. With ongoing learning, shared experiences, and guidance
            from experts, every household can become a garden of mercy,
            understanding, and mutual respect.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-900 transition">
            Join Our Family Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyFocused;
