// import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar p-px10p max-sm:px-2 py-2 sticky top-0 backdrop-blur-[20px] sepia-0 bg-gray-100 z-10">
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            {" "}
            <h1 className="uppercase md:text-2xl text-xl font-bold">
              <span className="text-primary">Quran</span>{" "}
              <span className="text-navlinks">Scholar</span>
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
              to={"#"}
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
          <GiHamburgerMenu className="text-xl max-md:block hidden"/>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
