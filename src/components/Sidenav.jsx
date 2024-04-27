import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidenavContext } from "../context/sidenavContext/SidenavContext";
const Sidenav = () => {
  const { showSideNav, handleToggleSideNav } = useContext(SidenavContext);
  return (
    <>
      <nav
        className={`sidenav max-md:flex hidden fixed w-full h-full top-12 transition-all duration-200 ease-[cubic-bezier(.5,.67,.78,.68)] bg-[rgba(0,0,0,.6)] ${
          showSideNav ? "opacity-1 visible z-20" : "opacity-0 hidden -z-10"
        }`}
      >
        <div
          className={`sidenav-contents absolute right-0 p-2 w-[300px] h-full transition-all duration-200 ease-[cubic-bezier(.5,.67,.78,.68)] bg-red-50 ${
            showSideNav ? "right-0" : "-right-[100%]"
          }`}
        >
          <div className="buttons flex justify-between py-4 gap-4 font-epilogue text-sm uppercase items-center">
            {/* <Link
              to={"#"}              
            >
              Register
            </Link> */}
            <Link
              onClick={handleToggleSideNav}
              to={"/login"}
              className="rounded-3xl px-2 text-[10px] py-[5px] text-primary bg-red-200 hover:ring-2 ring-primary font-bold hover:border-primary"
            >
              {" "}
              Log In
            </Link>
            <Link
              onClick={handleToggleSideNav}
              to={"/admission"}
              className="bg-primary rounded-3xl px-2 text-[8px] py-[5px] text-white hover:bg-white border-2 hover:border-primary hover:text-primary"
            >
              {" "}
              Admission
            </Link>
          </div>
          <div className="nav-items">
            <ul className="flex flex-col gap-4 p-2">
              <li>
                <Link onClick={handleToggleSideNav} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleSideNav} to={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleSideNav} to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleSideNav} to={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
