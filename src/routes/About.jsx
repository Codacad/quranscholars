import React from "react";
import AboutIllustration from "/woman_ill_2.svg";
import { Link } from "react-router-dom";
import ChildWithQuran from "/child-with-quran.svg";
import { IoMdCheckmark } from "react-icons/io";
const About = () => {
  return (
    <>
      <div className="about bg-gray-50 md:py-16">
        <div className="about-showcase min-h-screen w-full">
          <div className="md:px-40 md:py-8 p-4">
            <div className="text-content">
              <h1 className="md:text-4xl text-xl text-red-600 mb-4">
                <span className="font-bold">Quran Scholars</span>: Illuminating
                Hearts with Islamic Knowledge
              </h1>
              <p className="leading-8">
                Welcome to Quran Scholars, your premier destination for
                comprehensive Islamic education online. We are dedicated to
                providing a transformative learning experience that encompasses
                the teachings of the Quran, Hadith, Islamic studies, and more.
                Our platform is designed to cater to learners of all ages and
                backgrounds, offering a range of services to support your
                journey of spiritual growth and intellectual development.
              </p>
              <Link
                to={"#"}
                className="block w-40 bg-red-600 text-center p-4 rounded-md mt-4 text-white text-md font-bold"
              >
                Get Started
              </Link>
            </div>
            <div className="what-we-do my-8 grid md:grid-cols-2 p-2 bg-red-100 rounded-xl">
              <div className="img">
                <img className="rounded-xl" src={ChildWithQuran} alt="" />
              </div>
              <div className="text-content flex flex-col justify-center md:px-8 p-4 gap-4">
                <div className="tags">
                  <span className="text-gray-500 uppercase">
                    Quran, Hadith, Islamic Studies
                  </span>
                </div>
                <h1 className="text-4xl text-red-600">What we do</h1>
                <p className="text-gray-700">
                  At Quran Scholars, we focus on these core services to support
                  your journey of spiritual growth and Islamic education:
                </p>
                <div className="we-do flex flex-col gap-4">
                  <div className="quran flex items-center text-red-700 gap-2">
                    <span>
                      <IoMdCheckmark size={20} />
                    </span>
                    <span>Quranic Studies</span>
                  </div>
                  <div className="hadith quran flex items-center text-red-700 gap-2">
                    <span>
                      <IoMdCheckmark size={20} />
                    </span>
                    <span>Hadith Studies</span>
                  </div>
                  <div className="islamic-studies quran flex items-center text-red-700 gap-2">
                    <span>
                      <IoMdCheckmark size={20} />
                    </span>
                    <span>Islamic Studies</span>
                  </div>
                  <div className="islamic-educational-resources quran flex items-center text-red-700 gap-2">
                    <span>
                      <IoMdCheckmark size={20} />
                    </span>
                    <span>Islamic Educational Resources</span>
                  </div>
                  <Link
                    to={"#"}
                    className="p-4 text-center text-white rounded-xl mt-8 bg-red-600 text-md text-bold w-48"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
