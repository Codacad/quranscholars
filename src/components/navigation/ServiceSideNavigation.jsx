import { NavLink } from "react-router-dom";
const ServiceSideNavigation = () => {
  return (
    <>
      <div className="navigation-wrapper sticky top-10">
        <nav>
          <h2 className="border-b-[1px] text-right text-red-900 font-[600] pb-2 mb-4 border-gray-100 text-xl px-4">
            Services
          </h2>
          <ul className="flex items-end text-sm font-[400] flex-col gap-4 px-4">
            <li className="flex">
              <NavLink
                to={"/services/courses"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Courses
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/services/interactive-lesson"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 w-full text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Interactive Lessons
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/services/educational-resources"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 w-full text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Educational Resources
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/services/spiritual-development"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Spiritual Development
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/services/community-engagements"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Community Engagement
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
              to={"/services/personal-guidance"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Personal Guidance
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
              to={"/services/language-support"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Language Support
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
              to={"/services/family-focused-services"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Famili Focused Services
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
              to={"/services/youth-programs"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Youth Programs
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
              to={"/services/islamic-events"}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 bg-red-900 text-gray-50 rounded-md"
                    : "text-gray-400"
                }
              >
                Islamic Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ServiceSideNavigation;
