import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Compass,
  HandHeart,
  GraduationCap,
  MessageCircle,
  HeartHandshake,
  Globe,
  Smile,
  CalendarDays,
} from "lucide-react"; // Icons from lucide-react

const services = [
  {
    title: "Courses",
    icon: <BookOpen className="w-7 h-7 text-red-900" />,
    description: "Structured Quran & Islamic Studies courses for all levels.",
    link: "/services/courses",
  },
  {
    title: "Interactive Lessons",
    icon: <MessageCircle className="w-7 h-7 text-red-900" />,
    description: "Live, engaging classes with Q&A and real-time participation.",
    link: "/services/interactive-lessons",
  },
  {
    title: "Educational Resources",
    icon: <GraduationCap className="w-7 h-7 text-red-900" />,
    description: "Downloadable PDFs, guides, and media for deeper learning.",
    link: "/services/educational-resources",
  },
  {
    title: "Spiritual Development",
    icon: <HandHeart className="w-7 h-7 text-red-900" />,
    description: "Tazkiyah, self-purification, and building spiritual habits.",
    link: "/services/spiritual-development",
  },
  {
    title: "Community Engagement",
    icon: <Users className="w-7 h-7 text-red-900" />,
    description: "Group sessions, forums, and Islamic networking circles.",
    link: "/services/community-engagement",
  },
  {
    title: "Personal Guidance",
    icon: <Compass className="w-7 h-7 text-red-900" />,
    description: "One-on-one mentorship for faith, practice, and lifestyle.",
    link: "/services/personal-guidance",
  },
  {
    title: "Language Support",
    icon: <Globe className="w-7 h-7 text-red-900" />,
    description: "Learn Quran and Deen in Arabic, English, and Urdu.",
    link: "/services/language-support",
  },
  {
    title: "Family Focused Services",
    icon: <HeartHandshake className="w-7 h-7 text-red-900" />,
    description: "Islamic learning designed for entire households.",
    link: "/services/family-focused-services",
  },
  {
    title: "Youth Programs",
    icon: <Smile className="w-7 h-7 text-red-900" />,
    description: "Fun, age-appropriate programs for young Muslims.",
    link: "/services/youth-programs",
  },
  {
    title: "Islamic Events",
    icon: <CalendarDays className="w-7 h-7 text-red-900" />,
    description: "Workshops, webinars, and religious gatherings online.",
    link: "/services/islamic-events",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-900 uppercase mb-4 tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
          We provide a wide range of services to support your journey in faith,
          knowledge, and community life. From beginner-friendly courses to
          spiritual guidance and family programs — there's something here for
          everyone.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-50 hover:bg-red-100 border border-red-100 shadow-sm rounded-xl p-6 text-left transition duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-red-900 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
