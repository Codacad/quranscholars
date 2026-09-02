import Logo from "/images/Logo-2.svg";
import { useEffect, useMemo, useState, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { MdDashboard, MdSubject } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineRoundaboutRight,
} from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import {
  User,
  LogOut,
  Settings,
  Sparkles,
  ShieldCheck,
  UserCircle2,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLogoutMutation } from "@/services/api/user/userAuthApis.js";
import { setUser } from "@/store/slices/userSlice.js";
import useClickOutside from "@/hooks/useClickOutside.jsx";
import { useGetProfilePicutreUrlQuery } from "@/services/api/user/fileUploadApis.js";
import { useGetCoursesQuery } from "@/services/api/courses/courses.api.js";
import admissionApis from "@/services/api/user/admissionApis.js";
import { cn } from "@/lib/utils.js";

const desktopNavLinkClass = ({ isActive } = {}) =>
  cn(
    "inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold leading-none text-foreground no-underline transition-colors duration-200 hover:bg-primary/20 hover:text-primary active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0",
    isActive && "bg-surface-alt text-foreground",
  );

const desktopDropdownLinkClass = ({ isActive } = {}) =>
  cn(
    "flex min-h-9 items-center rounded-md px-3 py-2 text-sm font-semibold leading-snug text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface hover:text-primary [&_svg]:size-4",
    isActive && "bg-surface text-foreground",
  );

const mobileNavLinkClass = ({ isActive } = {}) =>
  cn(
    "flex min-h-11 w-full items-center gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem] [&_svg]:shrink-0",
    isActive && "bg-surface-alt text-foreground",
  );

const mobileSubnavLinkClass = ({ isActive } = {}) =>
  cn(
    "block rounded-md px-3 py-2 text-sm font-semibold leading-snug text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground",
    isActive && "bg-surface-alt text-foreground",
  );

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const isAdmin =
    String(user?.role || "")
      .trim()
      .toLowerCase() === "admin";

  const { data } = useGetProfilePicutreUrlQuery();

  const { data: coursesData, isLoading: isCoursesLoading } =
    useGetCoursesQuery();

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
    { to: "/mission", label: "Mission", icon: Sparkles },
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
        dispatch(admissionApis.util.resetApiState());
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
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 font-body backdrop-blur-xl">
      <nav className="mx-auto flex min-h-19 w-full max-w-7xl items-center justify-between gap-4 px-6 max-xl:px-4 max-sm:min-h-16">
        {/* Logo Section */}
        <Link
          className="inline-flex shrink-0 items-center no-underline"
          to={"/"}
          aria-label="QuranScholars home"
        >
          <img
            className="h-auto w-36 object-contain sm:w-40 lg:w-44"
            src={Logo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="m-0 flex list-none items-center justify-center gap-1 p-0 max-xl:hidden">
          {navLinks.map((link) =>
            link.to === "/services" ? (
              <li
                className="group relative"
                key={link.to}
                onMouseEnter={() => setOpenDesktopDropdown("services")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <NavLink className={desktopNavLinkClass} to={link.to}>
                  <link.icon />
                  <span>{link.label}</span>
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                <div
                  className={cn(
                    "invisible pointer-events-none absolute left-1/2 top-[calc(100%+0.75rem)] min-w-60 -translate-x-1/2 -translate-y-1 pt-1 opacity-0 transition-all duration-200",
                    openDesktopDropdown === "services" &&
                      "visible pointer-events-auto translate-y-0 opacity-100",
                  )}
                >
                  <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-raised">
                    <div className="grid gap-1 p-2">
                      {serviceLinks.map((serviceLink) => (
                        <NavLink
                          className={desktopDropdownLinkClass}
                          key={serviceLink.to}
                          to={serviceLink.to}
                          onClick={() => setOpenDesktopDropdown(null)}
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
                className="group relative"
                key={link.to}
                onMouseEnter={() => setOpenDesktopDropdown("courses")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <NavLink className={desktopNavLinkClass} to={link.to}>
                  <link.icon />
                  <span>{link.label}</span>
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>

                <div
                  className={cn(
                    "invisible pointer-events-none absolute left-1/2 top-[calc(100%+0.75rem)] min-w-60 -translate-x-1/2 -translate-y-1 pt-1 opacity-0 transition-all duration-200",
                    openDesktopDropdown === "courses" &&
                      "visible pointer-events-auto translate-y-0 opacity-100",
                  )}
                >
                  <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-raised">
                    <div className="px-4 pb-1 pt-3 text-xs font-bold uppercase text-faint-foreground">
                      All Courses
                    </div>
                    <div className="grid gap-1 p-2">
                      {isCoursesLoading && (
                        <div className="flex min-h-9 items-center rounded-md px-3 py-2 text-sm font-semibold leading-snug text-faint-foreground">
                          Loading courses...
                        </div>
                      )}
                      {!isCoursesLoading && courseLinks.length === 0 && (
                        <div className="flex min-h-9 items-center rounded-md px-3 py-2 text-sm font-semibold leading-snug text-faint-foreground">
                          No courses available
                        </div>
                      )}
                      {courseLinks.map((courseLink) => (
                        <NavLink
                          className={desktopDropdownLinkClass}
                          key={courseLink.to}
                          to={courseLink.to}
                          onClick={() => setOpenDesktopDropdown(null)}
                        >
                          {courseLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="relative" key={link.to}>
                <NavLink className={desktopNavLinkClass} to={link.to}>
                  <link.icon />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ),
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="flex shrink-0 items-center justify-end gap-2 max-xl:hidden">
          {!user && (
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-border bg-surface px-4 text-sm font-bold leading-none text-foreground no-underline transition-transform duration-200 hover:-translate-y-px"
              to={"/register"}
            >
              Register
            </Link>
          )}
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-primary bg-primary px-4 text-sm font-bold leading-none text-primary-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover"
            to="/donate"
          >
            Donate
          </Link>
          {user ? (
            <div className="relative">
              <Button
                className="min-h-11 gap-2 rounded-lg border-border bg-surface py-1 pl-1.5 pr-2 text-foreground hover:border-border-strong hover:bg-surface-alt"
                type="button"
                ref={dropwdownButtonRef}
                onClick={handleUserProfileDropdownToggle}
              >
                {data?.url ? (
                  <img
                    className="size-8 rounded-full object-cover"
                    src={data.url}
                    alt=""
                  />
                ) : (
                  <UserCircle2 className="size-8 text-primary" />
                )}
                <div className="grid gap-0.5 text-left">
                  <p className="m-0 max-w-34 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-extrabold text-foreground">
                    {user?.fullname}
                  </p>
                  <p className="m-0 text-[0.72rem] font-semibold text-faint-foreground">
                    My account
                  </p>
                </div>
              </Button>
              <div
                className="profile-dropdown invisible pointer-events-none absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2rem))] -translate-y-1 overflow-hidden rounded-lg border border-border bg-surface opacity-0 shadow-raised transition-all duration-200"
                ref={userProfileDropdownRef}
              >
                <div className="border-b border-border bg-surface-alt p-4">
                  <p className="m-0 overflow-hidden text-ellipsis whitespace-nowrap font-extrabold text-foreground">
                    {user?.fullname}
                  </p>
                  <p className="m-0 mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
                <div className="grid gap-1 p-2">
                  <Link
                    className="flex min-h-9 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold leading-none text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-4"
                    onClick={handleUserProfileDropdownToggle}
                    to={"/dashboard"}
                  >
                    <MdDashboard />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    className="flex min-h-9 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold leading-none text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-4"
                    onClick={handleUserProfileDropdownToggle}
                    to={"/profile"}
                  >
                    <User />
                    <span>Profile</span>
                  </Link>
                  <Link
                    className="flex min-h-9 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold leading-none text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-4"
                    onClick={handleUserProfileDropdownToggle}
                    to={"/admission"}
                  >
                    <Sparkles />
                    <span>Admission</span>
                  </Link>
                  {isAdmin && (
                    <Link
                      className="flex min-h-9 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold leading-none text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-4"
                      onClick={handleUserProfileDropdownToggle}
                      to={"/admin/admissions"}
                    >
                      <ShieldCheck />
                      <span>Admin Admissions</span>
                    </Link>
                  )}
                  <Link
                    className="flex min-h-9 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold leading-none text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-4"
                    onClick={handleUserProfileDropdownToggle}
                    to={"/settings"}
                  >
                    <Settings />
                    <span>Settings</span>
                  </Link>
                  <button
                    className="flex min-h-9 w-full items-center gap-3 rounded-md border-0 bg-transparent px-3 py-2 text-left font-body text-sm font-semibold leading-none text-danger transition-colors duration-200 hover:bg-surface-alt [&_svg]:size-4"
                    onClick={handleLogout}
                  >
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 text-sm font-bold leading-none text-primary-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover"
              to={"/login"}
            >
              <span>Log In</span>
              <CgLogIn />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hidden size-10 place-items-center rounded-md border border-border bg-surface text-foreground max-xl:grid [&_svg]:size-5"
          ref={mobileMenuButtonRef}
          onClick={handleToggleSideNav}
          type="button"
          aria-label="Open navigation menu"
        >
          <RxHamburgerMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <>
        <div
          className="mobile-menu-wrapper pointer-events-none fixed inset-0 z-[60] transition-colors duration-200"
          ref={mobileMenuWrapperRef}
        >
          <nav
            className="mobile-menu-panel pointer-events-auto fixed right-0 top-0 flex h-dvh w-[min(88vw,24rem)] translate-x-[105%] flex-col border-l border-border bg-surface shadow-raised transition-transform duration-200"
            ref={mobileMenuRef}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border bg-surface-alt p-4">
              <div className="flex min-w-0 items-center gap-3">
                {user ? (
                  <>
                    {data?.url ? (
                      <img
                        className="size-8 rounded-full object-cover"
                        src={data.url}
                        alt=""
                      />
                    ) : (
                      <UserCircle2 className="size-8 text-primary" />
                    )}
                    <div className="grid min-w-0 gap-0.5">
                      <p className="m-0 overflow-hidden text-ellipsis whitespace-nowrap font-display text-base font-extrabold text-foreground">
                        {user.fullname}
                      </p>
                      <p className="m-0 text-sm font-semibold text-muted-foreground">
                        Account
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="grid min-w-0 gap-0.5">
                    <p className="m-0 font-display text-base font-extrabold text-foreground">
                      Welcome
                    </p>
                    <p className="m-0 text-sm font-semibold text-muted-foreground">
                      Sign in to continue
                    </p>
                  </div>
                )}
              </div>
              <button
                className="grid size-10 place-items-center rounded-md border border-border bg-surface text-foreground [&_svg]:size-5"
                onClick={handleToggleSideNav}
                type="button"
                aria-label="Close navigation menu"
              >
                <IoMdClose />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 overflow-y-auto p-3">
              <div className="grid gap-1">
                {navLinks.map((link) =>
                  link.to === "/services" ? (
                    <div key={link.to}>
                      <button
                        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-md border-0 bg-transparent px-3 py-2 text-left font-body text-[0.95rem] font-bold text-muted-foreground transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                      >
                        <span className="flex items-center gap-3">
                          <link.icon />
                          {link.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "transition-transform duration-200",
                            isServicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="grid gap-1 pb-2 pl-9 pt-1">
                              {serviceLinks.map((serviceLink) => (
                                <NavLink
                                  className={mobileSubnavLinkClass}
                                  key={serviceLink.to}
                                  onClick={handleToggleSideNav}
                                  to={serviceLink.to}
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
                    <div key={link.to}>
                      <button
                        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-md border-0 bg-transparent px-3 py-2 text-left font-body text-[0.95rem] font-bold text-muted-foreground transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                        type="button"
                        onClick={() => setIsCoursesOpen((prev) => !prev)}
                      >
                        <span className="flex items-center gap-3">
                          <link.icon />
                          {link.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "transition-transform duration-200",
                            isCoursesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="grid gap-1 pb-2 pl-9 pt-1">
                              {isCoursesLoading && (
                                <div className="rounded-md px-3 py-2 text-sm font-semibold leading-snug text-faint-foreground">
                                  Loading courses...
                                </div>
                              )}
                              {!isCoursesLoading &&
                                courseLinks.length === 0 && (
                                  <div className="rounded-md px-3 py-2 text-sm font-semibold leading-snug text-faint-foreground">
                                    No courses available
                                  </div>
                                )}
                              {courseLinks.map((courseLink) => (
                                <NavLink
                                  className={mobileSubnavLinkClass}
                                  key={courseLink.to}
                                  onClick={handleToggleSideNav}
                                  to={courseLink.to}
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
                      className={mobileNavLinkClass}
                      key={link.to}
                      onClick={handleToggleSideNav}
                      to={link.to}
                    >
                      <link.icon />
                      {link.label}
                    </NavLink>
                  ),
                )}
              </div>

              <div className="grid gap-1 border-t border-border pt-3">
                {user ? (
                  <>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      to="/dashboard"
                      onClick={handleToggleSideNav}
                    >
                      Dashboard <MdDashboard />
                    </Link>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      to="/donate"
                      onClick={handleToggleSideNav}
                    >
                      Donate
                      <Sparkles />
                    </Link>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      to="/admission"
                      onClick={handleToggleSideNav}
                    >
                      Admission <Sparkles />
                    </Link>
                    {isAdmin && (
                      <Link
                        className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                        to="/admin/admissions"
                        onClick={handleToggleSideNav}
                      >
                        Admin Admissions <ShieldCheck />
                      </Link>
                    )}
                    <button
                      className="flex min-h-11 w-full items-center justify-between gap-3 rounded-md border-0 bg-transparent px-3 py-2 text-left font-body text-[0.95rem] font-bold text-danger transition-colors duration-200 hover:bg-surface-alt [&_svg]:size-[1.1rem]"
                      onClick={handleLogout}
                    >
                      <LogOut />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      onClick={handleToggleSideNav}
                      to="/login"
                    >
                      Login <CgLogIn />
                    </Link>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      onClick={handleToggleSideNav}
                      to="/donate"
                    >
                      Donate <Sparkles />
                    </Link>
                    <Link
                      className="flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-[0.95rem] font-bold text-muted-foreground no-underline transition-colors duration-200 hover:bg-surface-alt hover:text-foreground [&_svg]:size-[1.1rem]"
                      onClick={handleToggleSideNav}
                      to="/register"
                    >
                      Register <Sparkles />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </>
    </header>
  );
};

export default Navbar;
