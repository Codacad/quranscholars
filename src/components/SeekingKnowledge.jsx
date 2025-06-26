import SeekingKnowledgeImg from "../assets/images/seeking-knowledge.svg";
import "../css/SeekingKnowledge.css";
import { useState } from "react";

const SeekingKnowledge = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="seeking-knowledge min-h-[100vh] py-16 px-6 flex items-center bg-white">
      <div className="seeking-knowledge-content max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="image flex justify-center">
          <img
            className="w-full rounded-lg"
            src={SeekingKnowledgeImg}
            alt="Seeking Knowledge"
          />
        </div>

        {/* Text Section */}
        <div className="text flex flex-col justify-center items-start md:items-start gap-6 md:px-6 text-left">
          <h3 className="text-red-900 bg-red-100 w-fit rounded-3xl font-semibold px-4 py-2 text-sm md:text-base tracking-wide uppercase">
            Seeking Knowledge
          </h3>

          <h1 className="text-3xl md:text-4xl font-extrabold text-red-900 leading-snug">
            Seeking Knowledge is an Obligation for Every Muslim
          </h1>

          <p className="text-navlinks text-base md:text-lg leading-relaxed">
            Islam places great emphasis on education and the pursuit of
            knowledge. The very first revelation to Prophet Muhammad ﷺ was
            <strong className="text-red-800"> "Iqra" (Read)</strong>, marking
            the beginning of an intellectual revolution in the Muslim world.
            Within a few decades, Muslims became global leaders in science,
            philosophy, and ethics — driven by this divine command.
          </p>

          <blockquote className="italic text-red-900 text-md md:text-lg leading-snug border-l-4 border-red-800 pl-4">
            “Seeking knowledge is an obligation upon every Muslim.”
            <br />
            <span className="text-gray-600 text-sm">
              — Prophet Muhammad ﷺ (Ibn Majah)
            </span>
          </blockquote>

          {readMore && (
            <p className="text-navlinks text-base md:text-lg leading-relaxed mt-2">
              At Quran Scholar, we aim to revive that golden tradition by making
              authentic Islamic education accessible to everyone — children,
              adults, and reverts alike. Our curriculum is rooted in the Quran
              and Sunnah, taught by experienced scholars in a flexible and
              supportive online environment.
            </p>
          )}

          <button
            className="w-40 bg-red-900 text-white p-3 rounded-full mt-4 hover:bg-red-700 transition duration-200"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeekingKnowledge;
