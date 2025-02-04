import { useState } from "react";
import LoginIllustration from "/login.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../state/userApis/userAuthApis";
import { useSelector, useDispatch } from "react-redux";
import { SlLogin } from "react-icons/sl";
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { setUser } from "../state/slices/useSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      return setError("Please enter the email and password...");
    }
    try {
      const response = await login({ email, password });
      if (response.data) {
        setSuccess(response.data.message);
        setError("");
        dispatch(setUser(response.data));
        localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );
      }
      if (response.error) {
        setError(response.error.data.message);
        setSuccess("");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("");
      setSuccess("");
    }
  };

  return (
    <>
      <div className="login bg-gray-100 flex items-center justify-center p-6 md:py-16">
        <div className="w-full">
          <form
            onSubmit={handleLoginSubmit}
            className="md:w-[500px] w-full p-8 mx-auto bg-gray-50 rounded-xl flex flex-col gap-6 justify-center items-center"
          >
            <div className="form-header text-center mb-6">
              <h1 className="text-red-600 text-2xl md:text-3xl font-semibold leading-tight mb-2">
                Embark on Your Learning Journey: Sign in Below
              </h1>
              <p className="text-gray-600">
                Access Your Account: Islamic Education Platform
              </p>
            </div>

            {/* Email Input */}
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
                    <span className="flex rounded-full items-center justify-center text-white w-4 h-4 bg-green-400 shadow-sm">
                      <TiTick className="text-md" />
                    </span>
                  </span>
                  {success}
                </p>
              </div>
            )}
            <div className="email flex border border-gray-300 rounded-lg items-center w-full mb-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 w-full outline-none rounded-md focus:ring-2 focus:ring-red-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="password flex border border-gray-300 rounded-lg items-center w-full mb-6">
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-3 w-full outline-none rounded-md focus:ring-2 focus:ring-red-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
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
                  {" "}
                  <SlLogin />
                  <span>Login</span>
                </>
              )}
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              <span>New to Quran Scholars?</span>
              <Link
                className="ml-2 inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-all duration-200 ease-linear"
                to="/register"
              >
                <FaLongArrowAltLeft />
                <span>Register</span>
              </Link>
            </p>
            <p>
              <Link className="text-red-400 hover:text-red-700" to={"#"}>
                Forgot Password?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
