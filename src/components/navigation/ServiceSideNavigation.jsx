import { NavLink } from "react-router-dom";
import {
  FiBookOpen,
  FiLayers,
  FiCompass,
  FiHeart,
  FiUsers,
  FiHeadphones,
  FiGlobe,
  FiHome,
  FiSun,
  FiStar,
} from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { to: "/services/courses", label: "Courses", icon: FiBookOpen },
  {
    to: "/services/interactive-lessons",
    label: "Interactive Lessons",
    icon: FiLayers,
  },
  {
    to: "/services/educational-resources",
    label: "Educational Resources",
    icon: FiCompass,
  },
  {
    to: "/services/spiritual-development",
    label: "Spiritual Development",
    icon: FiHeart,
  },
  {
    to: "/services/community-engagement",
    label: "Community Engagement",
    icon: FiUsers,
  },
  {
    to: "/services/personal-guidance",
    label: "Personal Guidance",
    icon: FiHeadphones,
  },
  {
    to: "/services/language-support",
    label: "Language Support",
    icon: FiGlobe,
  },
  {
    to: "/services/family-focused-services",
    label: "Family Focused Services",
    icon: FiHome,
  },
  {
    to: "/services/youth-programs",
    label: "Youth Programs",
    icon: FiSun,
  },
  { to: "/services/islamic-events", label: "Islamic Events", icon: FiStar },
];

const ServiceSideNavigation = ({ condensed = false }) => {
  return (
    <div
      className={`navigation-wrapper ${
        condensed
          ? "sticky top-3 z-30"
          : "sticky top-10"
      }`}
    >
      <nav
        className={`rounded-2xl border border-red-100 bg-white/90 backdrop-blur shadow-md ${
          condensed
            ? "p-3 overflow-x-auto flex gap-2 items-center hide-scrollbar"
            : "p-4"
        }`}
        aria-label="Services navigation"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-900">Services</h2>
          {!condensed && (
            <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Navigation
            </span>
          )}
        </div>
        <ul
          className={`${
            condensed
              ? "flex overflow-x-auto gap-2 pb-2 pr-2"
              : "flex flex-col gap-2"
          }`}
        >
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to} className={condensed ? "min-w-max" : "w-full"}>
              <NavLink to={to} className="group block">
                {({ isActive }) => (
                  <motion.div
                    layout
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-red-600 text-white border-red-600 shadow-md"
                        : "bg-white text-slate-700 border-gray-200 hover:border-red-200 hover:text-red-700"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        isActive ? "bg-white/15" : "bg-red-50"
                      }`}
                    >
                      <Icon className={isActive ? "text-white" : "text-red-700"} />
                    </span>
                    <span>{label}</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ServiceSideNavigation;
