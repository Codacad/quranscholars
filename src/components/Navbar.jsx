import Logo from "/images/Logo.svg";
import { useEffect, useMemo, useState, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { MdDashboard, MdSubject } from "react-icons/md";
import { MdOutlineConnectWithoutContact, MdOutlineRoundaboutRight } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import {
  User,
  LogOut,
  Settings,
  Sparkles,
  UserCircle2,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLogoutMutation } from "../state/userApis/userAuthApis";
import { setUser } from "../state/slices/userSlice";
import useClickOutside from "../hooks/useClickOutside";
import { useGetProfilePicutreUrlQuery } from "../state/userApis/fileUploadApis";
import { useGetCoursesQuery } from "../state/courseApis/courses.api";
import { Button } from "./ui/button";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { data } = useGetProfilePicutreUrlQuery();
  const { data: coursesData, isLoading: isCoursesLoading } = useGetCoursesQuery();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const mobileMenuRef = useRef();
  const mobileMenuButtonRef = useRef();
  const mobileMenuWrapperRef = useRef();
  const userProfileDropdownRef = useRef();
  const dropwdownButtonRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsloading] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [isServicesOpen, setIsServicesOpen] = useState(
    location.pathname.startsWith("/services"),
  );
  const [isCoursesOpen, setIsCoursesOpen] = useState(
    location.pathname.startsWith("/courses") ||
      location.pathname.startsWith("/services/courses"),
  );

  useEffect(() => {
    setIsServicesOpen(location.pathname.startsWith("/services"));
  }, [location.pathname]);

  useEffect(() => {
    setIsCoursesOpen(
      location.pathname.startsWith("/courses") ||
        location.pathname.startsWith("/services/courses"),
    );
    setOpenDesktopDropdown(null);
  }, [location.pathname]);

  const courseLinks = useMemo(
    () =>
      (coursesData?.data || [])
        .filter((course) => course?.slug)
        .map((course) => ({
          to: `/courses/${course.slug}`,
          label: course.title || "Course",
        })),
    [coursesData],
  );

  const serviceLinks = [
    { to: "/services/courses", label: "Courses" },
    { to: "/services/interactive-lessons", label: "Interactive Lessons" },
    { to: "/services/educational-resources", label: "Educational Resources" },
    { to: "/services/spiritual-development", label: "Spiritual Development" },
    { to: "/services/community-engagement", label: "Community Engagement" },
    { to: "/services/personal-guidance", label: "Personal Guidance" },
    { to: "/services/language-support", label: "Language Support" },
    {
      to: "/services/family-focused-services",
      label: "Family Focused Services",
    },
    { to: "/services/youth-programs", label: "Youth Programs" },
    { to: "/services/islamic-events", label: "Islamic Events" },
  ];
  const navLinks = [
    { to: "/", label: "Home", icon: IoHomeOutline },
    { to: "/services", label: "Services", icon: FaServicestack },
    { to: "/courses", label: "Courses", icon: MdSubject },
    { to: "/blogs", label: "Blogs", icon: MdSubject },
    { to: "/contact", label: "Contact", icon: MdOutlineConnectWithoutContact },
    { to: "/about", label: "About", icon: MdOutlineRoundaboutRight },
  ];

  const handleToggleSideNav = () => {
    mobileMenuRef.current?.classList.toggle("active");
  };
  useClickOutside(mobileMenuRef, mobileMenuButtonRef, "active");
  useClickOutside(
    userProfileDropdownRef,
    dropwdownButtonRef,
    "dropdown-active",
  );
  const handleUserProfileDropdownToggle = () => {
    userProfileDropdownRef.current?.classList.toggle("dropdown-active");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await logout();
      if (response.data) {
        localStorage.removeItem("user");
        setIsloading(false);
        dispatch(setUser(null));
        navigate("/");
        if (mobileMenuRef.current) {
          mobileMenuRef.current.classList.remove("active");
        }
        if (userProfileDropdownRef.current) {
          userProfileDropdownRef.current.classList.remove("dropdown-active");
        }
      }
    } catch (error) {
      console.log(error.message);
      setIsloading(false);
    }
  };
  return (
    <div className="navbar relative z-30">
      {isLoading && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
      <nav className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border border-gray-100">
        {/* Logo Section */}
        <Link
          to={"/"}
          className="text-primary flex items-center text-xl md:text-2xl font-bold"
          aria-label="QuranScholars home"
        >
          <img src={Logo} alt="Logo" className="h-[50px] md:h-[50px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-8 gap-2 text-sm font-semibold">
          {navLinks.map((link) => (
            link.to === "/services" ? (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown("services")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar-list flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                      isActive ? "bg-primary/10 text-primary" : ""
                    }`
                  }
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </NavLink>

                <div
                  className={`absolute left-0 top-full z-40 w-72 pt-2 transition-all duration-200 ${
                    openDesktopDropdown === "services"
                      ? "pointer-events-auto visible opacity-100"
                      : "pointer-events-none invisible opacity-0"
                  }`}
                >
                  <div
                    className={`origin-top-left rounded-2xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-200 ${
                      openDesktopDropdown === "services"
                        ? "translate-y-0 scale-100"
                        : "translate-y-1 scale-95"
                    }`}
                  >
                    <div className="grid gap-1">
                      {serviceLinks.map((serviceLink) => (
                        <NavLink
                          key={serviceLink.to}
                          to={serviceLink.to}
                          onClick={() => setOpenDesktopDropdown(null)}
                          className={({ isActive }) =>
                            `rounded-xl px-3 py-2 text-sm font-semibold transition ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-slate-700 hover:bg-gray-50"
                            }`
                          }
                        >
                          {serviceLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ) : link.to === "/courses" ? (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown("courses")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar-list flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                      isActive ? "bg-primary/10 text-primary" : ""
                    }`
                  }
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </NavLink>

                <div
                  className={`absolute left-0 top-full z-40 w-80 pt-2 transition-all duration-200 ${
                    openDesktopDropdown === "courses"
                      ? "pointer-events-auto visible opacity-100"
                      : "pointer-events-none invisible opacity-0"
                  }`}
                >
                  <div
                    className={`origin-top-left rounded-2xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-200 ${
                      openDesktopDropdown === "courses"
                        ? "translate-y-0 scale-100"
                        : "translate-y-1 scale-95"
                    }`}
                  >
                    <div className="mb-1 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                      All Courses
                    </div>
                    <div className="grid max-h-80 gap-1 overflow-y-auto pr-1">
                      {isCoursesLoading && (
                        <div className="rounded-xl px-3 py-2 text-sm text-slate-500">
                          Loading courses...
                        </div>
                      )}
                      {!isCoursesLoading && courseLinks.length === 0 && (
                        <div className="rounded-xl px-3 py-2 text-sm text-slate-500">
                          No courses available
                        </div>
                      )}
                      {courseLinks.map((courseLink) => (
                        <NavLink
                          key={courseLink.to}
                          to={courseLink.to}
                          onClick={() => setOpenDesktopDropdown(null)}
                          className={({ isActive }) =>
                            `rounded-xl px-3 py-2 text-sm font-semibold transition ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-slate-700 hover:bg-gray-50"
                            }`
                          }
                        >
                          {courseLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar-list flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                      isActive ? "bg-primary/10 text-primary" : ""
                    }`
                  }
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </NavLink>
              </li>
            )
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden ml-auto md:flex gap-4 font-semibold items-center justify-end">
          {!user && (
            <Link to={"/register"} className="text-gray-500 underline font-sm-400">
              Register
            </Link>
          )}
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/50 hover:bg-primary/10"
          >
            Donate
          </Link>
          {user ? (
            <div className="relative z-20">
              <Button
                variant="ghost"
                ref={dropwdownButtonRef}
                onClick={handleUserProfileDropdownToggle}
                className="flex items-center gap-3 px-3"
              >
                {data?.url ? (
                  <img className="h-8 w-8 rounded-full object-cover" src={data.url} alt="" />
                ) : (
                  <UserCircle2 className="h-6 w-6 text-primary" />
                )}
                <div className="text-left">
                  <p className="text-sm font-semibold text-secondary leading-tight">
                    {user?.fullname}
                  </p>
                  <p className="text-[11px] text-muted-foreground">My account</p>
                </div>
              </Button>
              <div
                ref={userProfileDropdownRef}
                className="dropdown-menu absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
              >
                <div className="bg-gradient-to-r from-primary/10 via-white to-white px-4 py-3">
                  <p className="text-sm font-semibold text-secondary">{user?.fullname}</p>
                  <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                </div>
                <div className="flex flex-col p-2 text-sm text-gray-700">
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/dashboard"}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-primary/5"
                  >
                    <MdDashboard />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/profile"}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-primary/5"
                  >
                    <User />
                    <span>Profile</span>
                  </Link>
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/admission"}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-primary/5"
                  >
                    <Sparkles />
                    <span>Admission</span>
                  </Link>
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/settings"}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-primary/5"
                  >
                    <Settings />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white shadow-sm transition hover:bg-primary/90"
            >
              <span className="font-sm-400">Log In</span>
              <CgLogIn />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuButtonRef}
          className="w-10 flex justify-end text-2xl text-gray-600 md:hidden"
        >
          <RxHamburgerMenu className="" onClick={handleToggleSideNav} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <>
        <div ref={mobileMenuWrapperRef}>
          <nav
            ref={mobileMenuRef}
            className="mobile-menu fixed top-0 -right-[100%] z-30 h-full w-[min(86vw,320px)] bg-white shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {user ? (
                  <>
                    {data?.url ? (
                      <img src={data.url} className="h-9 w-9 rounded-full object-cover" alt="" />
                    ) : (
                      <UserCircle2 className="h-8 w-8 text-primary" />
                    )}
                    <div className="text-left">
                      <p className="text-sm font-semibold text-secondary">{user.fullname}</p>
                      <p className="text-[11px] text-muted-foreground">Account</p>
                    </div>
                  </>
                ) : (
                  <div className="text-left">
                    <p className="text-sm font-semibold text-secondary">Welcome</p>
                    <p className="text-[11px] text-muted-foreground">Sign in to continue</p>
                  </div>
                )}
              </div>
              <IoMdClose
                onClick={handleToggleSideNav}
                className="text-2xl text-gray-600 cursor-pointer hover:opacity-70 transition"
              />
            </div>

            <div className="overflow-y-auto px-5 py-5 space-y-6">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  link.to === "/services" ? (
                    <div
                      key={link.to}
                      className="rounded-xl border border-transparent bg-white/70"
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          location.pathname.startsWith("/services")
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-transparent hover:bg-gray-100"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <link.icon className="h-4 w-4" />
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 grid gap-1 rounded-xl border border-gray-100 bg-gray-50 p-2">
                              {serviceLinks.map((serviceLink) => (
                                <NavLink
                                  key={serviceLink.to}
                                  onClick={handleToggleSideNav}
                                  to={serviceLink.to}
                                  className={({ isActive }) =>
                                    `rounded-lg px-3 py-2 text-xs font-semibold transition ${
                                      isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-700 hover:bg-white"
                                    }`
                                  }
                                >
                                  {serviceLink.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.to === "/courses" ? (
                    <div
                      key={link.to}
                      className="rounded-xl border border-transparent bg-white/70"
                    >
                      <button
                        type="button"
                        onClick={() => setIsCoursesOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          location.pathname.startsWith("/courses") ||
                          location.pathname.startsWith("/services/courses")
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-transparent hover:bg-gray-100"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <link.icon className="h-4 w-4" />
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isCoursesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 grid max-h-64 gap-1 overflow-y-auto rounded-xl border border-gray-100 bg-gray-50 p-2">
                              {isCoursesLoading && (
                                <div className="rounded-lg px-3 py-2 text-xs text-slate-500">
                                  Loading courses...
                                </div>
                              )}
                              {!isCoursesLoading && courseLinks.length === 0 && (
                                <div className="rounded-lg px-3 py-2 text-xs text-slate-500">
                                  No courses available
                                </div>
                              )}
                              {courseLinks.map((courseLink) => (
                                <NavLink
                                  key={courseLink.to}
                                  onClick={handleToggleSideNav}
                                  to={courseLink.to}
                                  className={({ isActive }) =>
                                    `rounded-lg px-3 py-2 text-xs font-semibold transition ${
                                      isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-700 hover:bg-white"
                                    }`
                                  }
                                >
                                  {courseLink.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.to}
                      onClick={handleToggleSideNav}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-transparent hover:bg-gray-100"
                        }`
                      }
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </NavLink>
                  )
                ))}
              </div>

              <div className="grid gap-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={handleToggleSideNav}
                      className="flex items-center justify-between rounded-xl bg-secondary text-white px-4 py-3 text-sm font-semibold shadow-sm hover:opacity-90"
                    >
                      Dashboard <MdDashboard />
                    </Link>
                    <Link
                      to="/donate"
                      onClick={handleToggleSideNav}
                      className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
                    >
                      Donate
                      <Sparkles className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/admission"
                      onClick={handleToggleSideNav}
                      className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary"
                    >
                      Admission <Sparkles className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-100"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      onClick={handleToggleSideNav}
                      to="/login"
                      className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                    >
                      Login <CgLogIn />
                    </Link>
                    <Link
                      onClick={handleToggleSideNav}
                      to="/donate"
                      className="flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
                    >
                      Donate <Sparkles className="h-4 w-4" />
                    </Link>
                    <Link
                      onClick={handleToggleSideNav}
                      to="/register"
                      className="flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
                    >
                      Register <Sparkles className="h-4 w-4" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </>
    </div>
  );
};

export default Navbar;
