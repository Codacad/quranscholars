import OnlineCourses from "../assets/icons/courses-online.svg";
import InteractiveLesson from "../assets/icons/interactive-lessons.svg";
import EduResources from "../assets/icons/educational-resources.svg";
import SpiritualDev from "../assets/icons/spiritual.svg";
import CommunityEngagement from "../assets/icons/community.svg";
import PersonalGuidance from "../assets/icons/guidance.svg";
import LanguageSupport from "../assets/icons/lang-support.svg";
import FamilyFocusedServices from "../assets/icons/family-focused-services.svg";
import YouthPrograms from "../assets/icons/youth-program.svg";
import IslamicEvents from "../assets/icons/islamic-events.svg";
import uuid from "react-uuid";
import "../css/Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="services bg-gray-50  p-px10p max-md:p-2 py-8 grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 font-guminert">
        <div className="service col-span-1 online-courses border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={OnlineCourses} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Online Courses
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <Link
              to={"/courses"}
              className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="service interactive-lesson  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={InteractiveLesson} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Interactive Lesson
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <Link
              to={"#"}
              className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="service educational-resources  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={EduResources} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Educational Resources
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service spiritual-development  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={SpiritualDev} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Spiritual Development
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service community-engagement  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={CommunityEngagement} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Community Engagements
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service personal-guidance  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={PersonalGuidance} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Personal Guidance
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service language-support  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={LanguageSupport} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Language Support
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service family-focus-services  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={FamilyFocusedServices} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Family-Focused Services
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service youth-program  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={YouthPrograms} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Youth Programs
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service islamic-events  border-2 border-red-600 bg-white p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={IslamicEvents} alt="" />
            </span>
            <h1 className="text-2xl font-bold text-red-600">
              Islamic Events
            </h1>
            <p className="text-md text-red-500 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-red-600 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
