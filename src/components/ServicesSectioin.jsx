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
} from "lucide-react";

const services = [
  {
    title: "Courses",
    icon: <BookOpen className="w-8 h-8 text-red-900" />,
    description: "Structured Qur'an & Islamic Studies tracks with mentor feedback.",
    link: "/services/courses",
  },
  {
    title: "Interactive Lessons",
    icon: <MessageCircle className="w-8 h-8 text-red-900" />,
    description: "Live circles, breakout rooms, and real-time Q&A.",
    link: "/services/interactive-lessons",
  },
  {
    title: "Educational Resources",
    icon: <GraduationCap className="w-8 h-8 text-red-900" />,
    description: "Downloadable tafsir notes, cheat-sheets, and practice decks.",
    link: "/services/educational-resources",
  },
  {
    title: "Spiritual Development",
    icon: <HandHeart className="w-8 h-8 text-red-900" />,
    description: "Tazkiyah labs, dhikr trackers, and akhlaq workshops.",
    link: "/services/spiritual-development",
  },
  {
    title: "Community Engagement",
    icon: <Users className="w-8 h-8 text-red-900" />,
    description: "Volunteer squads, halaqahs, and peer-led khidmah projects.",
    link: "/services/community-engagement",
  },
  {
    title: "Personal Guidance",
    icon: <Compass className="w-8 h-8 text-red-900" />,
    description: "One-on-one mentorship for ibadah, habits, and career balance.",
    link: "/services/personal-guidance",
  },
  {
    title: "Language Support",
    icon: <Globe className="w-8 h-8 text-red-900" />,
    description: "Qur'anic Arabic, spoken Arabic, English, and Urdu support.",
    link: "/services/language-support",
  },
  {
    title: "Family Focused Services",
    icon: <HeartHandshake className="w-8 h-8 text-red-900" />,
    description: "Household study plans, parent coaching, and kid-friendly halaqahs.",
    link: "/services/family-focused-services",
  },
  {
    title: "Youth Programs",
    icon: <Smile className="w-8 h-8 text-red-900" />,
    description: "Story-driven seerah, skills clubs, and teen leadership tracks.",
    link: "/services/youth-programs",
  },
  {
    title: "Islamic Events",
    icon: <CalendarDays className="w-8 h-8 text-red-900" />,
    description: "Workshops, webinars, khatm gatherings, and retreats.",
    link: "/services/islamic-events",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-16 md:py-20 px-4 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.1),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Guided pathways for every seeker.
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Build your journey with Qur'an-first learning, live mentorship, family programs, and community khidmah.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/60 bg-white/80 backdrop-blur shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-red-100/60 via-white to-amber-100/60" />
              <div className="relative p-6 space-y-4 h-full flex flex-col">
                <div className="h-12 w-12 rounded-2xl bg-red-100 text-red-900 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-6">{service.description}</p>
                </div>
                <div className="flex-1" />
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-red-900 font-semibold hover:text-red-700"
                >
                  Learn More →
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
