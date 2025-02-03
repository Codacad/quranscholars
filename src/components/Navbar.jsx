import Logo from "/logo2.svg";
import Quranscholar from "/quranscholar100x70.svg";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { MdSubject } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { useRef } from "react";
const Navbar = () => {
  const mobileMenuRef = useRef();
  const handleToggleSideNav = () => {
    mobileMenuRef.current.classList.toggle("active");
  };
  return (
    <div className="navbar relative bg-white text-gray-900 p-4 md:px-8">
      <nav className="flex items-center">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center text-2xl font-bold">
          <span className="bg-red-600 text-white">QURAN</span>
          <span className="text-red-600">SCHOLAR</span>
          {/* <img src={Quranscholar} alt="Logo" className="" /> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-8 gap-8 text-md font-semibold">
          <li>
            <NavLink
              to={"/"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden ml-auto md:flex gap-6 font-semibold items-center justify-end">
          <Link to={"/register"} className="text-red-600 underline">
            Register
          </Link>
          <Link
            to={"/admission"}
            className="text-red-600 ring-2 ring-red-600 p-[6px] hover:bg-red-600 hover:text-white rounded-md"
          >
            Admission
          </Link>
          <Link
            to={"/login"}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-200 ease-in-out"
          >
            <span>Log In</span>
            <CgLogIn />
          </Link>
          {/* <Link
            to={"/admission"}
            className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-2 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-red-600"
          >
            Admission
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="w-16 flex justify-end text-3xl text-red-600">
          <GiHamburgerMenu className="" onClick={handleToggleSideNav} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <>
        <nav
          ref={mobileMenuRef}
          className={`mobile-menu fixed w-[300px] h-full top-0 -right-[100%] z-10 bg-red-600`}
        >
          <div className="header flex justify-end p-4">
            <IoMdClose
              onClick={handleToggleSideNav}
              className="text-4xl text-white cursor-pointer hover:opacity-60 transition-all"
            />
          </div>
          <ul className="text-lg font-semibold mt-4 flex flex-col gap-4 p-4">
            <li className="flex w-full">
              <NavLink
                onClick={handleToggleSideNav}
                to={"/"}
                className={`text-gray-100 flex items-center gap-4 w-full p-2 rounded-sm transition-all duration-200 hover:opacity-80 hover:bg-gray-100 hover:text-red-600`}
              >
                <IoHomeOutline />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="flex w-full">
              <NavLink
                onClick={handleToggleSideNav}
                to={"/services"}
                className="flex items-center gap-4 text-gray-100 w-full p-2 rounded-sm transition-all duration-200 hover:opacity-80 hover:bg-gray-100 hover:text-red-600"
              >
                <FaServicestack />
                <span>Services</span>
              </NavLink>
            </li>
            <li className="flex w-full">
              <NavLink
                onClick={handleToggleSideNav}
                to={"/courses"}
                className="flex items-center gap-4 text-gray-100 w-full p-2 rounded-sm transition-all duration-200 hover:opacity-80 hover:bg-gray-100 hover:text-red-600"
              >
                <MdSubject />
                <span>Courses</span>
              </NavLink>
            </li>
            <li className="flex w-full">
              <NavLink
                onClick={handleToggleSideNav}
                to={"/contact"}
                className="flex items-center gap-4 text-gray-100 w-full p-2 rounded-sm transition-all duration-200 hover:opacity-80 hover:bg-gray-100 hover:text-red-600"
              >
                <MdOutlineConnectWithoutContact />
                <span>Contact</span>
              </NavLink>
            </li>
            <li className="flex w-full">
              <NavLink
                onClick={handleToggleSideNav}
                to={"/about"}
                className="flex items-center gap-4 text-gray-100 w-full p-2 rounded-sm transition-all duration-200 hover:opacity-80 hover:bg-gray-100 hover:text-red-600"
              >
                <MdOutlineRoundaboutRight />
                <span>About</span>
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center flex flex-col gap-4 px-6 mt-4">
            <Link
              onClick={handleToggleSideNav}
              to={"/login"}
              className="text-white underline font-bold"
            >
              Login
            </Link>
            <Link
              onClick={handleToggleSideNav}
              to={"register"}
              className="bg-white hover:bg-[rgba(255,255,255,.9)] text-red-600 rounded-md font-semibold p-2"
            >
              Register
            </Link>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
