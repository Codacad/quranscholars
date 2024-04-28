import React, { useState } from "react";
import LoginIllustration from "/login.svg";

import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlineKey } from "react-icons/md";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const LoginData = {
      email,
      password,
    };
    console.log(LoginData);
  };

  return (
    <>
      <div className="register p-16 w-[100%]justify-center items-center">
        {/* <div className="illustration max-sm:hidden">
          <img src={LoginIllustration} alt="" />
        </div> */}
        <form
          onSubmit={(e) => handleRegisterSubmit(e)}
          className="lg:w-[500px] shadow-xl rounded-md md:w-[70%] max-sm:w-[100%] m-auto flex justify-start flex-col max-sm:items-center gap-4 sm:p-4 p-2 border-2 border-gray-100"
        >
          <div className="form-header flex flex-col gap-4 w-[100%] leading-10 text-center">
            <h1 className="text-primary text-3xl leading-[3rem] font-bold mb-4">
              Embark on Your Learning Journey: Register with Us
            </h1>
            {/* <p>Access Your Account: Islamic Education Platform</p> */}
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
            <MdOutlineMail
              size={40}
              className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 w-[100%] rounded-lg outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
            <MdOutlineKey
              size={40}
              className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800"
            />
            <input
              type="text"
              placeholder="Create Password"
              className="p-2 w-[100%] rounded-lg outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
            <MdOutlineKey
              size={40}
              className="py-2 px-1 text-primary bg-gray-200 rounded-bl-lg rounded-tl-lg"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="p-2 w-[100%] rounded-lg outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit text-gray-100 bg-primary p-2 w-[100%] max-md:w-full rounded-md"
          >
            Login
          </button>
          <p className="flex flex-col items-center gap-4">
            <span>Already Registered with us?</span>{" "}
            <Link
              className="p-2 w-24 text-center hover:ring-red-800 hover:ring-2 bg-red-300 text-red-800 rounded-md"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
