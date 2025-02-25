import SeekingKnowledgeImg from "../assets/images/seeking-knowledge.svg";
import SeekingKnowledgeReadMore from "./read-more/SeekingKnowledgeReadMore";
import "../css/SeekingKnowledge.css";
import { useState } from "react";

const SeekingKnowledge = () => {
  return (
    <div className="seeking-knowledge min-h-[100vh] py-16 px-6 flex items-center">
      <div className="seeking-knowledge-content max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="image flex justify-center">
          <img
            className="w-full max-w-md rounded-lg"
            src={SeekingKnowledgeImg}
            alt="Seeking Knowledge"
          />
        </div>

        {/* Text Section */}
        <div className="text flex flex-col justify-center items-start md:items-center text-center gap-6 md:px-8 md:py-2">
          <h3 className="text-red-600 bg-red-200 w-fit rounded-3xl text-center font-bold p-3 text-sm md:text-base">
            Seeking Knowledge
          </h3>
          <h1 className="text-3xl font-extrabold text-red-600 leading-tight">
            Seeking Knowledge is a Duty of Every Muslim
          </h1>
          <p className="leading-relaxed text-navlinks text-lg">
            The rise of Muslims to the zenith of civilization in a period of
            four decades was based on Islam's emphasis on learning. This is
            obvious when one takes a look at the Quran and the traditions of
            Prophet Muhammad, which are filled with references to learning,
            education, and observation.
          </p>
          <button className="w-40 bg-red-600 text-white p-3 rounded-full mt-6 transform hover:scale-105 transition duration-200">
            Read More
          </button>
        </div>
      </div>

      {/* Read More Section */}
      {/* <SeekingKnowledgeReadMore readMoreToggle={readMoreToggle} setReadMoreToggle={setReadMoreToggle} /> */}
    </div>
  );
};

export default SeekingKnowledge;
