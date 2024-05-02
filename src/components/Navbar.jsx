import Logo from "/logo2.svg";
import WhiteBgLogo from "/whitebg-logo.svg";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import { useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { SidenavContext } from "../context/sidenavContext/SidenavContext";
import { CgLogIn } from "react-icons/cg";
const Navbar = () => {
  const { showSideNav, handleToggleSideNav } = useContext(SidenavContext);
  const location = useLocation();
  const pathName = location.pathname;
  const handleChangeNavbarBg = () => {
    if (
      pathName === "/login" ||
      pathName === "/admission" ||
      pathName === "/signup"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div
        className={`navbar p-px10p py-2 max-md:px-4 sticky top-0 ${
          pathName === "/login" ||
          pathName === "/admission" ||
          pathName === "signup"
            ? "bg-primary"
            : "bg-white"
        } z-50`}
      >
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            {" "}
            <h1 className="uppercase md:text-2xl text-xl font-bold">
              <img
                src={
                  pathName === "/login" ||
                  pathName === "/admission" ||
                  pathName === "signup"
                    ? WhiteBgLogo
                    : Logo
                }
                alt=""
                width={200}
                height={100}
              />
              {/* <span className="text-primary">Quran</span>{" "}
              <span className="text-navlinks">Scholar</span> */}
            </h1>
          </Link>
          <ul className="nav-list max-md:hidden flex text-center font-epilogue text-navlinks text-sm uppercase">
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/"}
              >
                Home
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/services"}
              >
                Services
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/courses"}
              >
                Courses
              </NavLink>{" "}
            </li>
          
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/contact"}
              >
                Contact
              </NavLink>{" "}
            </li>
            {/* <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/donate"}
              >
                Donate
              </NavLink>{" "}
            </li> */}
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5 transition-all ease-linear duration-150 ${
                    pathName === "/login" ||
                    pathName === "/admission" ||
                    pathName === "signup"
                      ? "text-white"
                      : ""
                  }
                  ${
                    isActive
                      ? "text-primary relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-primary after:-bottom-0"
                      : "text-navlinks"
                  }
                  `;
                }}
                to={"/about"}
              >
                About
              </NavLink>{" "}
            </li>
          </ul>
          <div className="buttons md:flex hidden gap-4 font-epilogue text-sm uppercase items-center">
            {/* <Link
              to={"#"}              
            >
              Register
            </Link> */}
            <Link
              to={"/login"}
              className={`rounded-3xl flex gap-1 justify-center items-center px-4 py-2 text-primary bg-red-200 hover:ring-2 ring-primary transition-all duration-200 ease-linear hover:border-primary ${
                pathName === "/login" ? "hidden" : ""
              }`}
            >
              {" "}
              <span>Log In</span>
              <CgLogIn />
            </Link>
            <Link
              to={"/admission"}
              className="bg-primary transition-all duration-200 ease-linear rounded-3xl px-4 py-2 text-white hover:bg-white border-2 hover:border-primary hover:text-primary"
            >
              {" "}
              Admission
            </Link>
          </div>
          <button
            className={`sidenav-toggle ${
              pathName === "/login" ? "text-white" : "gray-red-600"
            }`}
            onClick={() => handleToggleSideNav()}
          >
            {!showSideNav ? (
              <GiHamburgerMenu className="text-xl max-md:block hidden" />
            ) : (
              <IoClose className="text-xl max-md:block hidden" />
            )}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
