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
  // const services = [
  //   {
  //     id: uuid(),
  //     icon_url: "../assets/icons/courses-online.svg",
  //     title: "Online Courses",
  //     body: "Dive into the Quran's essence. Analyze verses, themes, and context, gaining deep insights into Islamic teachings for practical application in daily life.",
  //     courses: [
  //       {
  //         id: uuid(),
  //         title: "Quranic Studies",
  //         body: "Explore the divine revelations of the Quran, delving into its verses, themes, and historical context. This course provides in-depth analysis, helping students understand the Quran's profound teachings and their relevance to modern life.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Hadith Studies",
  //         body: "Delve into the sayings and actions of Prophet Muhammad (peace be upon him). This course examines the Hadith literature, exploring authentic narrations and their interpretations. Students gain insight into the Sunnah, guiding principles for daily living.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Fiqh (Jurisprudence)",
  //         body: "Unravel the principles of Islamic law. Fiqh studies cover the practical application of Quranic teachings, addressing various aspects of life, including prayer, fasting, marriage, and ethical conduct. Students learn to navigate legal rulings and ethical dilemmas.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Islamic History",
  //         body: "Journey through the rich tapestry of Islamic civilizations. This course chronicles the history of Islamic empires, scholars, and contributions to art, science, and philosophy. Students gain a comprehensive understanding of Islam's historical context and its impact on the world.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Arabic Language Learning",
  //         body: "Master the language of the Quran. This course focuses on Arabic grammar, vocabulary, and pronunciation. Students develop reading, writing, and conversational skills, enhancing their ability to engage with Islamic texts directly.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Islamic Ethics and Morality",
  //         body: "Explore the moral teachings of Islam. This course examines ethical principles, virtues, and moral dilemmas from an Islamic perspective. Students learn how to apply these teachings in personal and societal contexts, fostering character development.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Comparative Religion Studies",
  //         body: "Understand Islam in a global context. This course compares Islamic beliefs and practices with other world religions. Students explore commonalities and differences, promoting interfaith dialogue and mutual understanding.",
  //       },
  //     ],
  //   },
  //   {
  //     id: uuid(),
  //     icon_url: "../assets/icons/interactive-lessons.svg",
  //     title: "Interactive Lesson",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus asperiores molestiae suscipit eveniet nemo repudiandae Dolores rerum beatae sequi",
  //     courses: [
  //       {
  //         id: uuid(),
  //         title: "Authentic Narrations Exploration",
  //         body: "Delve into verified Hadiths, comprehending their meanings and applications. Gain profound insights into the Prophet's sayings, elucidating essential principles for moral conduct and spiritual growth.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Contextual Understanding",
  //         body: "Contextualize Hadiths within historical and cultural contexts, deciphering nuanced meanings. Learn how the Prophet's actions and words address diverse situations, offering timeless guidance for contemporary challenges.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Practical Application in Daily Life",
  //         body: "Translate Hadith teachings into practical actions for modern living. Apply the wisdom of the Prophet to navigate ethical dilemmas, fostering a righteous lifestyle aligned with Islamic principles.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Impact on Islamic Jurisprudence",
  //         body: "Explore Hadith's influence on Fiqh (Islamic jurisprudence). Understand how authentic narrations shape legal rulings, offering a profound understanding of Islamic law and ethics grounded in the Prophet's teachings.",
  //       },
  //     ],
  //   },
  //   {
  //     id: uuid(),
  //     icon_url: "../assets/icons/educational-resources.svg",
  //     title: "Educational Resources",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus asperiores molestiae suscipit eveniet nemo repudiandae Dolores rerum beatae sequi",
  //     courses: [
  //       {
  //         id: uuid(),
  //         title: "Articles on Islamic Topics",
  //         body: "Explore a curated collection of articles covering diverse Islamic subjects. From theology to contemporary issues, deepen your knowledge and gain valuable insights from expert perspectives and scholarly analyses.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Videos Explaining Islamic Concepts",
  //         body: "Engage with visually compelling videos elucidating complex Islamic concepts. From Quranic interpretations to ethical guidelines, enrich your knowledge through dynamic visual narratives, promoting comprehensive understanding and spiritual growth.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Infographics and Visual Guides",
  //         body: "Grasp intricate concepts with user-friendly infographics and visual guides. Simplify complex topics like Islamic rituals and historical events, enhancing learning through visually appealing and informative resources.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Recommended Reading Lists",
  //         body: "Grasp intricate concepts with user-friendly infographics and visual guides. Simplify complex topics like Islamic rituals and historical events, enhancing learning through visually appealing and informative resources.",
  //       },
  //     ],
  //   },
  //   {
  //     id: uuid(),
  //     icon_url: "../assets/icons/spiritual.svg",
  //     title: "Spiritual Development",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus asperiores molestiae suscipit eveniet nemo repudiandae Dolores rerum beatae sequi",
  //     courses: [
  //       {
  //         id: uuid(),
  //         title: "Daily Reminders and Duas (Supplications)",
  //         body: "Elevate your daily life with spiritual practices. Explore powerful supplications and daily reminders to enhance your connection with the Divine and find inner peace.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Spiritual Counseling Services",
  //         body: "Navigate life's challenges with faith-based guidance. Our counseling services provide support and advice, helping individuals strengthen their spirituality and emotional well-being.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Meditation and Reflection Sessions",
  //         body: "Embrace serenity through meditation. Our sessions offer moments of introspection and deep reflection, creating inner tranquility and a profound connection with the Divine.",
  //       },
  //     ],
  //   },
  //   {
  //     id: uuid(),
  //     icon_url: "../assets/icons/spiritual.svg",
  //     title: "Spiritual Development",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus asperiores molestiae suscipit eveniet nemo repudiandae Dolores rerum beatae sequi",
  //     courses: [
  //       {
  //         id: uuid(),
  //         title: "Daily Reminders and Duas (Supplications)",
  //         body: "Elevate your daily life with spiritual practices. Explore powerful supplications and daily reminders to enhance your connection with the Divine and find inner peace.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Spiritual Counseling Services",
  //         body: "Navigate life's challenges with faith-based guidance. Our counseling services provide support and advice, helping individuals strengthen their spirituality and emotional well-being.",
  //       },
  //       {
  //         id: uuid(),
  //         title: "Meditation and Reflection Sessions",
  //         body: "Embrace serenity through meditation. Our sessions offer moments of introspection and deep reflection, creating inner tranquility and a profound connection with the Divine.",
  //       },
  //     ],
  //   },
  // ];
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
            <Link to={"/courses"} className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
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
            <Link to={"#"} className="bg-orange-800 mt-4 py-2 px-4 text-white rounded-sm">
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
