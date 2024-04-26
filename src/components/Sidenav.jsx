import React from "react";
import {IoClose} from 'react-icons/io5'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidenavContext } from "../context/sidenavContext/SidenavContext";
const Sidenav = () => {
  const {showSideNav} = useContext(SidenavContext)
  return (
    <>
      <nav className={`max-md:flex hidden fixed w-full h-full top-12 transition-all duration-200 bg-[rgba(0,0,0,.6)] z-10 ${showSideNav ? "" : "opacity-0"}`}>
        <div className={`nav-contents absolute right-0 p-2 w-[300px] h-full transition-all duration-300 bg-gray-50 ${showSideNav ? "" : "-right-[350px]"}`}>
          <div className="buttons flex justify-between py-4 gap-4 font-epilogue text-sm uppercase items-center">
            {/* <Link
              to={"#"}              
            >
              Register
            </Link> */}
            <Link
              to={"#"}
              className="rounded-3xl px-2 text-[10px] py-[5px] text-primary bg-red-200 hover:ring-2 ring-primary font-bold hover:border-primary"
            >
              {" "}
              Log In
            </Link>
            <Link
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
