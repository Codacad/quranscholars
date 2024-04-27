import React from "react";
import LoginIllustration from "/login.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
const Login = () => {
  
  
  return (
    <>
      <div className="login md:min-h-screen md:p-px10p max-md:px-4 max-md:py-8 md:grid block md:grid-cols-2 items-center justify-center">
        <div className="illustration max-sm:hidden">
          <img src={LoginIllustration} alt="" />
        </div>
        <form
          action=""
          className="w-full flex justify-start flex-col max-sm:items-center gap-4  p-2"
        >
          <div className="form-header flex flex-col gap-4 md:w-[70%] max-sm:text-center">
            <h1 className="text-red-800 text-2xl leading-10">Embark on Your Learning Journey: Sign in Below</h1>
            <p>Access Your Account: Islamic Education Platform</p>
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center md:w-[80%] max-md:w-full">
            <MdOutlineMail size={40} className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800" />
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-2 w-[100%] rounded-lg outline-none"
            />
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center md:w-[80%] max-md:w-full">
            <MdOutlinePassword size={40} className="py-2 px-1 text-red-800 bg-gray-200 rounded-bl-lg rounded-tl-lg" />
            <input
              type="password"
              placeholder="Enter your Password"
              className="p-2 w-[100%] rounded-lg outline-none"
            />
          </div>
          <button className="submit text-gray-100 bg-red-800 p-2 md:w-[80%] max-md:w-full rounded-md">
            Login
          </button>
          <p className="flex flex-col max-sm:items-center gap-4">
            <span>New to Quran Scholars?</span> <Link className="p-2 w-24 text-center hover:ring-red-800 hover:ring-2 bg-red-300 text-red-800 rounded-md" to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
