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
      <div className="services p-px10p max-md:p-2 py-8 grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 font-guminert">
        <div className="service col-span-1 online-courses bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={OnlineCourses} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Online Courses
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <Link
              to={"/courses"}
              className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="service interactive-lesson bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={InteractiveLesson} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Interactive Lesson
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <Link
              to={"#"}
              className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="service educational-resources bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={EduResources} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Educational Resources
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service spiritual-development bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={SpiritualDev} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Spiritual Development
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service community-engagement bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={CommunityEngagement} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Community Engagements
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service personal-guidance bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={PersonalGuidance} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Personal Guidance
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service language-support bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={LanguageSupport} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Language Support
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service family-focus-services bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={FamilyFocusedServices} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Family-Focused Services
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service youth-program bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={YouthPrograms} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Youth Programs
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="service islamic-events bg-orange-100 p-4 rounded-md ">
          <div className="flex flex-col items-center gap-2 text-center">
            <span>
              <img className="w-24" src={IslamicEvents} alt="" />
            </span>
            <h1 className="text-2xl font-tommyBlack text-orange-800">
              Islamic Events
            </h1>
            <p className="text-md text-orange-700 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus asperiores molestiae suscipit eveniet nemo repudiandae.
              Dolores rerum beatae sequi.
            </p>
            <button className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
