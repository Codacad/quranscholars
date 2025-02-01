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
    // Your login logic here
    // Example: navigate('/dashboard'); after successful login
  };

  return (
    <>
      <div className="login bg-neutral-100 min-h-screen flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-xl">
          {/* Left Section: Illustration */}
          <div className="illustration hidden md:block">
            <img src={LoginIllustration} alt="Login illustration" className="w-full h-auto object-cover" />
          </div>

          {/* Right Section: Form */}
          <form
            onSubmit={handleLoginSubmit}
            className="w-full  p-8 bg-white rounded-xl border border-gray-300 flex flex-col gap-6 justify-center items-center mx-auto"
          >
            <div className="form-header text-center mb-6">
              <h1 className="text-red-600 text-3xl font-semibold leading-tight mb-2">
                Embark on Your Learning Journey: Sign in Below
              </h1>
              <p className="text-gray-600">Access Your Account: Islamic Education Platform</p>
            </div>

            {/* Email Input */}
            <div className="email flex border border-gray-300 rounded-lg items-center w-full mb-4">
             
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 w-full outline-none rounded-md focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="password flex border border-gray-300 rounded-lg items-center w-full mb-6">
              
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-3 w-full outline-none rounded-md focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit bg-red-600 text-white p-3 w-full rounded-lg hover:opacity-95 transition duration-200 ease-in-out flex items-center justify-center gap-2"
            >
              <SlLogin />
              <span>Login</span>
            </button>

            {/* Register Link */}
            <p className="text-center mt-4 text-sm text-gray-600">
              <span>New to Quran Scholars?</span>
              <Link
                className="ml-2 inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-all duration-200 ease-linear"
                to="/register"
              >
                <FaLongArrowAltLeft />
                <span>Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
