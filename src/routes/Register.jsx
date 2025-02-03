import { useState } from "react";
import { FaUserEdit, FaEye, FaLongArrowAltRight } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlineMail, MdOutlineKey } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "../state/userApis/userAuthApis";
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await register({ fullname, email, password });
      if (response.data) {
        setSuccess("Registration successful, you are being redirected...");
        setError("")
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
      }
      if (response.error) {
        setError(response.error.data.message);
        setSuccess("")
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="register flex justify-center items-center bg-gray-50 p-8">
        <form
          onSubmit={handleRegister}
          className="lg:w-[500px] md:w-[80%] sm:w-[90%] p-6 bg-white rounded-md border-2 border-red-200"
        >
          <div className="form-header text-center mb-6">
            <h1 className="text-3xl font-bold text-red-600 leading-tight">
              Embark on Your Learning Journey: Register with Us
            </h1>
            <RiAccountPinCircleFill
              size={50}
              className="text-red-600 mx-auto mt-2"
            />
          </div>

          {error && (
            <div>
              <p className="flex gap-2 items-center justify-center text-red-600 p-2 bg-red-100 rounded-sm text-sm mb-6">
                <span>
                  <MdErrorOutline />
                </span>
                {error.split(",")[0]}
              </p>
            </div>
          )}
          {success && (
            <div>
              <p className="flex p-2 gap-2 items-center justify-center text-green-600 rounded-sm bg-green-100 text-sm mb-2">
                <span>
                  <span className="flex rounded-full items-center justify-center text-white w-4 h-4 bg-green-400 shadow-sm"><TiTick className="text-md" /></span>
                </span>
                {success}
              </p>
            </div>
          )}
          {/* Full Name Input */}
          <div className="fullname flex border border-red-300 rounded-md items-center w-full mb-4">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="p-2 w-full outline-none focus:ring-2 rounded-md ring-red-600"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
            <span className="absolute top-[50%] translate-y-[-50%] right-3 text-red-500">
              <FaEye />
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "opacity-20" : "opacity-100"
            } w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-all duration-200 ease-in-out flex items-center justify-center gap-2 mb-4`}
          >
            {isLoading ? (
              <span className="flex gap-4 items-center">
                <span className="spinner"></span>
                <span>Loading...</span>
              </span>
            ) : (
              <>
                <RiAccountPinCircleFill />
                <span>Register</span>
              </>
            )}
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
