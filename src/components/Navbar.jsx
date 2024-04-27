import Logo from "/logo2.svg";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { SidenavContext } from "../context/sidenavContext/SidenavContext";
const Navbar = () => {
  const { showSideNav, handleToggleSideNav } = useContext(SidenavContext)
  return (
    <>
      <div className="navbar md:p-px10p max-md:px-4 py-4 sticky top-0 backdrop-blur-[20px] sepia-0 bg-white z-10">
        <nav className="flex justify-between p-2 items-center">
          <Link to={"/"}>
            {" "}
            <h1 className="uppercase md:text-2xl text-xl font-bold">
              <img src={Logo} alt="" width={200} height={100} />
              {/* <span className="text-primary">Quran</span>{" "}
              <span className="text-navlinks">Scholar</span> */}
            </h1>
          </Link>
          <ul className="nav-list max-md:hidden flex gap-4 text-center font-epilogue text-navlinks text-sm uppercase">
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5
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
                  p-5
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
                  p-5
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
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5
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
            <li className="nav-item">
              {" "}
              <NavLink
                className={({ isActive }) => {
                  return `
                  p-5
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
              className="rounded-3xl px-4 py-2 text-primary bg-red-200 hover:ring-2 ring-primary font-bold hover:border-primary"
            >
              {" "}
              Log In
            </Link>
            <Link
              to={"/admission"}
              className="bg-primary rounded-3xl px-4 py-2 text-white hover:bg-white border-2 hover:border-primary hover:text-primary"
            >
              {" "}
              Admission
            </Link>
          </div>
          <div className="sidenav-toggle" onClick={handleToggleSideNav}>
          {!showSideNav ? (
            <GiHamburgerMenu className="text-xl max-md:block hidden" />
          ) : (
            <IoClose className="text-xl max-md:block hidden" />
          )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
