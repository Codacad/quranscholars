import Logo from "/images/Logo.svg";
import { useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { MdDashboard, MdSubject } from "react-icons/md";
import { MdOutlineConnectWithoutContact, MdOutlineRoundaboutRight } from "react-icons/md";
import { CgLogIn, CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { User, LogOut, Settings, Sparkles, UserCircle2 } from "lucide-react";
import { useLogoutMutation } from "../state/userApis/userAuthApis";
import { setUser } from "../state/slices/userSlice";
import useClickOutside from "../hooks/useClickOutside";
import { useGetProfilePicutreUrlQuery } from "../state/userApis/fileUploadApis";
import { Button } from "./ui/button";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { data } = useGetProfilePicutreUrlQuery();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const mobileMenuRef = useRef();
  const mobileMenuButtonRef = useRef();
  const mobileMenuWrapperRef = useRef();
  const userProfileDropdownRef = useRef();
  const dropwdownButtonRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
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
            className="mobile-menu fixed top-0 -right-[100%] z-30 h-full w-[320px] bg-gradient-to-b from-white via-white to-primary/5 shadow-2xl transition-all duration-300"
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
                  <NavLink
                    key={link.to}
                    onClick={handleToggleSideNav}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        isActive ? "border-primary/40 bg-primary/10 text-primary" : "border-transparent hover:bg-gray-100"
                      }`
                    }
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </NavLink>
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
