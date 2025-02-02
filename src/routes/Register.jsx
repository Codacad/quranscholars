import { useState } from "react";
import { FaUserEdit, FaEye, FaLongArrowAltRight } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlineMail, MdOutlineKey } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="register flex justify-center items-center bg-gray-50 p-8">
        <form className="lg:w-[500px] md:w-[80%] sm:w-[90%] p-6 bg-white rounded-md border-2 border-red-200">
          <div className="form-header text-center mb-6">
            <h1 className="text-3xl font-bold text-red-600 leading-tight">
              Embark on Your Learning Journey: Register with Us
            </h1>
            <RiAccountPinCircleFill size={50} className="text-red-600 mx-auto mt-2" />
          </div>

          {/* Full Name Input */}
          <div className="fullname flex border border-red-300 rounded-md items-center w-full mb-4">
            
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="p-2 w-full outline-none focus:ring-2 rounded-md ring-red-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="email flex border border-red-300 rounded-lg items-center w-full mb-4">
          
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 w-full focus:ring-2 rounded-md ring-red-600 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="create-password relative flex border border-red-300 rounded-lg items-center w-full mb-6">
          
            <input
              type="password"
              placeholder="Create Password"
              className="p-2 w-full focus:ring-2 rounded-md ring-red-600 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="absolute top-[50%] translate-y-[-50%] right-3 text-red-500">
              <FaEye />
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-all duration-200 ease-in-out flex items-center justify-center gap-2 mb-4"
          >
            <RiAccountPinCircleFill />
            <span>Register</span>
          </button>

          {/* Already Registered Link */}
          <p className="text-center">
            <span>Already Registered?</span>
            <Link
              className="ml-2 inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-all duration-200 ease-linear"
              to="/login"
            >
              <span>Login</span>
              <FaLongArrowAltRight />
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
