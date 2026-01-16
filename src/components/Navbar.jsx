import Logo from "/images/logo.png";
import { useEffect } from "react";
import Quranscholar from "/quranscholar100x70.svg";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CgLogIn, CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { MdDashboard, MdSubject } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../state/userApis/userAuthApis";
import { setUser } from "../state/slices/userSlice";
import { IoIosLogOut } from "react-icons/io";
import useClickOutside from "../hooks/useClickOutside";
import { useGetProfilePicutreUrlQuery } from "../state/userApis/fileUploadApis";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const {
    data,
    isLoading: isImageLoadding,
    error: imageLoadingError,
  } = useGetProfilePicutreUrlQuery();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const mobileMenuRef = useRef();
  const mobileMenuButtonRef = useRef();
  const mobileMenuWrapperRef = useRef();
  const userProfileDropdownRef = useRef();
  const dropwdownButtonRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const handleToggleSideNav = () => {
    mobileMenuRef.current.classList.toggle("active");
  };
  useClickOutside(mobileMenuRef, mobileMenuButtonRef, "active");
  useClickOutside(
    userProfileDropdownRef,
    dropwdownButtonRef,
    "dropdown-active"
  );
  const handleUserProfileDropdownToggle = () => {
    userProfileDropdownRef.current.classList.toggle("dropdown-active");
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
    <div className="navbar">
      {isLoading && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to={"/"}
          className="text-primary flex items-center text-xl md:text-2xl font-bold"
        >
          {/* <span className="">QURAN</span>
          <span className="">SCHOLAR</span> */}
          <img src={Logo} alt="Logo" className="h-[50px] md:h-full" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-8 gap-8 text-md font-semibold">
          <li>
            <NavLink to={"/"} className="navbar-list">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/services"} className="navbar-list">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/courses"} className="navbar-list">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blogs"} className="navbar-list">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="navbar-list">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="navbar-list">
              About
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden ml-auto md:flex gap-6 font-semibold items-center justify-end">
          {!user && (
            <Link
              to={"/register"}
              className="text-gray-500 underline font-sm-400"
            >
              Register
            </Link>
          )}
          {user && (
            <div className="flex items-center relative">
              <button
                onClick={handleUserProfileDropdownToggle}
                ref={dropwdownButtonRef}
                className="flex text-gray-500 gap-2 items-center rounded-sm hover:bg-[rgba(0,0,0,.2)] p-2"
              >
                {data?.url ? (
                  <img
                    className="rounded-full w-6 h-6"
                    src={data && data.url}
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="cursor-pointer" size={25} />
                )}

                <span className="font-sm-400">{user && user.fullname}</span>
              </button>

              <div
                ref={userProfileDropdownRef}
                className={`dropdown-menu rounded-md -left-[50px] top-12 bg-white shadow-md text-gray-500 text-sm min-w-[250px] absolute`}
              >
                <div className="flex flex-col px-4 pt-4 pb-2">
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/dashboard"}
                    className="p-2 hover:bg-red-50 hover:text-red-900"
                  >
                    <span className="">Dashboard</span>
                  </Link>
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    to={"/profile"}
                    className="p-2 hover:bg-red-50 hover:text-red-900"
                  >
                    <span className="">Profile</span>
                  </Link>
                  <Link
                    onClick={handleUserProfileDropdownToggle}
                    className="p-2 hover:bg-red-50 hover:text-red-900"
                  >
                    Join Quran Scholar
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-red-50 hover:text-red-900 flex justify-center items-center gap-2"
                  >
                    <IoIosLogOut />
                    <Link className="">Logout</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
          {!user && (
            <Link
              to={"/login"}
              className="flex bg-red-700 hover:opacity-80 items-center px-4 py-2 text-gray-50 rounded-md transition-all duration-200 ease-in-out"
            >
              <span className="font-sm-400">Log In</span>
              <CgLogIn />
            </Link>
          )}
          {/* <Link
            to={"/admission"}
            className="bg-red-500 hover:bg-red-900 text-white rounded-md px-6 py-2 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-red-900"
          >
            Admission
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuButtonRef}
          className="w-10 flex justify-end text-2xl text-gray-600"
        >
          <RxHamburgerMenu className="" onClick={handleToggleSideNav} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <>
        <div ref={mobileMenuWrapperRef}>
          <nav
            ref={mobileMenuRef}
            className={`mobile-menu shadow-lg fixed w-[300px] h-full top-0 -right-[100%] z-10 bg-gray-50`}
          >
            <div className="header flex justify-between p-4">
              {user && (
                <button
                  // onClick={handleUserProfileDropdownToggle}
                  className="flex text-gray-600 gap-2 items-center rounded-sm hover:bg-[rgba(0,0,0,.2)] p-2"
                >
                  {data?.url ? (
                    <img
                      className="rounded-full w-6 h-6"
                      src={data && data.url}
                      alt=""
                    />
                  ) : (
                    <FaUserCircle className="cursor-pointer" size={20} />
                  )}
                  <span className="font-sm-400">{user && user.fullname}</span>
                </button>
              )}
              <IoMdClose
                onClick={handleToggleSideNav}
                className="text-2xl ml-auto text-gray-600 cursor-pointer hover:opacity-60 transition-all"
              />
            </div>
            <ul className="text-md font-semibold mt-4 flex flex-col gap-4 p-4">
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/"}
                  className={`sidebar-list`}
                >
                  <IoHomeOutline />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/dashboard"}
                  className="sidebar-list"
                >
                  <MdDashboard />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/profile"}
                  className="sidebar-list"
                >
                  <CgProfile />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/services"}
                  className="sidebar-list"
                >
                  <FaServicestack />
                  <span>Services</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/courses"}
                  className="sidebar-list"
                >
                  <MdSubject />
                  <span>Courses</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/contact"}
                  className="sidebar-list"
                >
                  <MdOutlineConnectWithoutContact />
                  <span>Contact</span>
                </NavLink>
              </li>
              <li className="flex w-full">
                <NavLink
                  onClick={handleToggleSideNav}
                  to={"/about"}
                  className="sidebar-list"
                >
                  <MdOutlineRoundaboutRight />
                  <span>About</span>
                </NavLink>
              </li>
            </ul>
            <div className="buttons text-center flex flex-col gap-4 px-6 mt-4">
              {!user && (
                <>
                  <Link
                    onClick={handleToggleSideNav}
                    to={"/login"}
                    className="bg-gray-950 text-white p-2 rounded-md font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={handleToggleSideNav}
                    to={"register"}
                    className="bg-red-700 hover:opacity-90 text-gray-50 rounded-md font-semibold p-2"
                  >
                    Register
                  </Link>
                </>
              )}

              {user && (
                <Link
                  to={"/admission"}
                  onClick={handleToggleSideNav}
                  className="bg-gray-950 text-white p-2 rounded-md font-bold font-sm-400 uppercase"
                >
                  Join Quran Scholar
                </Link>
              )}
              {user && (
                <NavLink
                  onClick={handleLogout}
                  className="flex items-center justify-center w-full gap-2 text-red-900 p-2 rounded-sm transition-all duration-200 hover:opacity-90 bg-gray-100"
                >
                  <IoIosLogOut />
                  <span>Logout</span>
                </NavLink>
              )}
            </div>

            {/* <div className="flex mt-8 p-8">
              <Link className="text-gray-100 underline" to={'/howitworks'}>How It works</Link>
            </div> */}
          </nav>
        </div>
      </>
    </div>
  );
};

export default Navbar;
