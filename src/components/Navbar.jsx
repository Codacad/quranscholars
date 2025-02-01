import Logo from "/logo2.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-gray-900 py-4 px-6 md:px-16">
      <nav className="flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-48" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <li>
            <NavLink
              to={"/"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
              activeClassName="text-red-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
              activeClassName="text-red-700"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
              activeClassName="text-red-700"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
              activeClassName="text-red-700"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="text-red-600 transition-all duration-200 hover:text-red-700"
              activeClassName="text-red-700"
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-6 font-semibold items-center">
          <Link to={'/register'} className="text-red-600 underline">
          Register
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
        <button className="md:hidden block text-xl text-red-800">
          <GiHamburgerMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
