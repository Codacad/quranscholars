import Logo from "/logo2.svg";
import WhiteBgLogo from "/whitebg-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
const Navbar = () => {
 

  return (
    <>
      <div
        className={`navbar p-px10p py-2 max-md:px-4 sticky top-0 
            bg-primary
        z-50`}
      >
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            {" "}
            <h1 className="uppercase md:text-2xl text-xl font-bold">
              <img src={WhiteBgLogo} alt="" width={200} height={100} />
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
                  p-5 transition-all ease-linear duration-150 "text-white"
                  ${
                    isActive
                      ? "text-white relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-white after:-bottom-0"
                      : "text-white"
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
                  p-5 transition-all ease-linear duration-150 "text-white"                  
                  ${
                    isActive
                      ? "text-white relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-white after:-bottom-0"
                      : "text-white"
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
                  p-5 transition-all ease-linear duration-150 "text-white"
                  ${
                    isActive
                      ? "text-white relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-white after:-bottom-0"
                      : "text-white"
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
                  p-5 transition-all ease-linear duration-150 text-white
                  ${
                    isActive
                      ? "text-white relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-white after:-bottom-0"
                      : "text-white"
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
                  p-5 transition-all ease-linear duration-150 text-white
                  ${
                    isActive
                      ? "text-white relative font-bold after:contents-[''] after:absolute after:w-full after:h-[3px] after:block after:rounded-sm after:bg-white after:-bottom-0"
                      : "text-white"
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
              className={`rounded-3xl flex gap-1 justify-center items-center px-4 py-2 text-primary bg-red-200 hover:ring-2 ring-primary transition-all duration-200 ease-linear hover:border-primary`}
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
         
          <button className="md:hidden block">
            <GiHamburgerMenu className="text-xl"/>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
