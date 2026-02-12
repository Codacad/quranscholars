import { useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const itemRefs = useRef({});

  useEffect(() => {
    if (!condensed) return;
    const activeEl = itemRefs.current[pathname];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [condensed, pathname]);

  return (
    <div
      className={`navigation-wrapper ${
        condensed ? "sticky top-2 z-40" : "sticky top-10"
      }`}
    >
      <nav
        className={`rounded-2xl border border-red-100 bg-white/90 backdrop-blur ${
          condensed
            ? "p-2.5"
            : "p-4"
        }`}
        aria-label="Services navigation"
      >
        <div
          className={`flex items-center justify-between ${
            condensed ? "mb-2" : "mb-3"
          }`}
        >
          <h2 className="text-lg font-bold text-slate-900">Services</h2>
          {!condensed && (
            <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Navigation
            </span>
          )}
        </div>
        {condensed && (
          <div className="mb-2">
            <label htmlFor="services-mobile-select" className="sr-only">
              Select a service
            </label>
            <select
              id="services-mobile-select"
              value={pathname}
              onChange={(e) => navigate(e.target.value)}
              className="w-full rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
            >
              {links.map((item) => (
                <option key={item.to} value={item.to}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <ul
          className={`${
            condensed
              ? "flex overflow-x-auto gap-2 pb-1 hide-scrollbar"
              : "flex flex-col gap-2"
          }`}
        >
          {links.map(({ to, label, icon: Icon }) => (
            <li
              key={to}
              className={`relative ${condensed ? "min-w-max" : "w-full"}`}
              ref={(el) => {
                itemRefs.current[to] = el;
              }}
            >
              <NavLink
                to={to}
                className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2"
              >
                {({ isActive }) => (
                  <motion.div
                    className={`relative z-10 flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-white border-transparent shadow-md"
                        : "bg-white text-slate-700 border-gray-200 hover:border-red-200 hover:text-red-700"
                    }`}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId={
                          condensed
                            ? "services-active-pill-mobile"
                            : "services-active-pill-desktop"
                        }
                        className="absolute inset-0 rounded-xl border border-red-600 bg-red-600"
                        transition={{
                          type: "tween",
                          duration: 0.17,
                          ease: "easeOut",
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-lg ${
                        isActive ? "bg-white/15" : "bg-red-50"
                      }`}
                    >
                      <Icon
                        className={isActive ? "text-white" : "text-red-700"}
                      />
                    </span>
                    <span className="relative z-10">{label}</span>
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
