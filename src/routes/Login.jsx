import { useState } from "react";
import LoginIllustration from "/login.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { SlLogin } from "react-icons/sl";


import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
   
  };

  
  return (
    <>
      <div className="login md:min-h-screen md:p-px10p max-md:px-4 max-md:py-8 md:grid block md:grid-cols-2 items-center justify-center">
        <div className="illustration max-sm:hidden">
          <img src={LoginIllustration} alt="" />
        </div>
        <form
          onSubmit={(e) => handleLoginSubmit(e)}
          action=""
          className="w-full flex justify-start flex-col max-sm:items-center gap-4  p-2"
        >
          <div className="form-header flex flex-col gap-4 w-[100%] leading-10 max-sm:text-center">
            <h1 className="text-primary text-3xl leading-10 font-bold">
              Embark on Your Learning Journey: Sign in Below
            </h1>
            <p>Access Your Account: Islamic Education Platform</p>
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center md:w-[80%] max-md:w-full">
            <MdOutlineMail
              size={40}
              className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 w-[100%] rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email flex border border-gray-400 rounded-lg items-center md:w-[80%] max-md:w-full">
            <MdOutlinePassword
              size={40}
              className="py-2 px-1 text-primary bg-gray-200 rounded-bl-lg rounded-tl-lg"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="p-2 w-[100%] rounded-lg outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit flex items-center justify-center gap-2 text-gray-100 bg-primary p-2 md:w-[80%] max-md:w-full rounded-md"
          >
            <SlLogin />
            <span>Login</span>
          </button>
          <p className="flex flex-col max-sm:items-center gap-4">
            <span>New to Quran Scholars?</span>{" "}
            <Link
              className="p-2 flex items-center transition-all duration-200 ease-linear md:hover:gap-3 justify-center gap-2 w-32 text-center hover:ring-red-800 hover:ring-2 bg-red-300 text-red-800 rounded-md"
              to={"/register"}
            >
              <FaLongArrowAltLeft />
              <span>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
