import OnlineCourses from "@/assets/icons/courses-online.svg";
import InteractiveLesson from "@/assets/icons/interactive-lessons.svg";
import EduResources from "@/assets/icons/educational-resources.svg";
import SpiritualDev from "@/assets/icons/spiritual.svg";
import CommunityEngagement from "@/assets/icons/community.svg";
import PersonalGuidance from "@/assets/icons/guidance.svg";
import LanguageSupport from "@/assets/icons/lang-support.svg";
import FamilyFocusedServices from "@/assets/icons/family-focused-services.svg";
import YouthPrograms from "@/assets/icons/youth-program.svg";
import IslamicEvents from "@/assets/icons/islamic-events.svg";

import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <span>
              <img src={OnlineCourses} alt="" />
            </span>
            <h1>Online Courses</h1>
            <p>
              Structured Islamic education accessible from anywhere, covering
              Quran, Hadith, Fiqh, and more through expert-led video lessons and
              live sessions.
            </p>
            <Link
              to={"/services/courses"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={InteractiveLesson} alt="" />
            </span>
            <h1>
              Interactive Lesson
            </h1>
            <p>
              Engaging, two-way learning sessions that encourage active
              participation and ensure better understanding through discussions,
              quizzes, and feedback.
            </p>
            <Link
              to={"/services/interactive-lesson"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={EduResources} alt="" />
            </span>
            <h1>
              Educational Resources
            </h1>
            <p>
              A rich library of Islamic study materials, including eBooks,
              worksheets, audio lectures, and reference guides to support
              independent learning.
            </p>
            <Link
              to={"/services/educational-resources"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={SpiritualDev} alt="" />
            </span>
            <h1>
              Spiritual Development
            </h1>
            <p>
              Programs designed to nurture the heart and soul through teachings
              on prayer, mindfulness, sincerity (ikhlas), and closeness to
              Allah.
            </p>
            <Link
              to={"/services/spiritual-development"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={CommunityEngagement} alt="" />
            </span>
            <h1>
              Community Engagements
            </h1>
            <p>
              Building a strong online Muslim community through group
              discussions, shared learning experiences, and collaborative
              projects.
            </p>
            <Link
              to={"/services/community-engagements"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={PersonalGuidance} alt="" />
            </span>
            <h1>
              Personal Guidance
            </h1>
            <p>
              One-on-one sessions with qualified scholars or mentors to address
              individual questions on faith, practice, or personal spiritual
              growth.
            </p>
            <Link
              to={"/services/personal-guidance"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={LanguageSupport} alt="" />
            </span>
            <h1>
              Language Support
            </h1>
            <p>
              Learn and improve in Arabic, Urdu, and English to better
              understand Islamic teachings. We offer support for reading,
              translation, and comprehension of study materials in all three
              languages.
            </p>
            <Link
              to={"/services/language-support"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={FamilyFocusedServices} alt="" />
            </span>
            <h1>
              Family-Focused Services
            </h1>
            <p>
              Courses and workshops tailored for family members of all ages,
              helping parents and children grow together in Islamic knowledge
              and practice.
            </p>
            <Link
              to={"/services/family-focused-services"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={YouthPrograms} alt="" />
            </span>
            <h1>Youth Programs</h1>
            <p>
              Specialized programs for young Muslims focusing on identity,
              values, leadership, and navigating modern challenges through
              Islamic guidance.
            </p>
            <Link
              to={"/services/youth-programs"}>

              
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={IslamicEvents} alt="" />
            </span>
            <h1>Islamic Events</h1>
            <p>
              Regular online events including webinars, guest lectures, and
              special sessions during Ramadan and Islamic holidays to deepen
              communal faith.
            </p>
            <Link
              to={"/services/islamic-events"}>

              
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>);

};

export default Services;
