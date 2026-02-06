import { useState } from "react";
import { FaEye, FaEyeSlash, FaLongArrowAltRight } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../state/userApis/userAuthApis";
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        setError("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      if (response.error) {
        setError(response.error.data.message);
        setSuccess("");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative register flex justify-center items-center bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 md:p-12 min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-70" />
        <form
          onSubmit={handleRegister}
          className="relative z-10 lg:w-[520px] md:w-[80%] sm:w-[90%] p-7 md:p-8 bg-white/90 backdrop-blur rounded-2xl border border-red-100 shadow-[0_20px_70px_-28px_rgba(220,38,38,0.45)]"
        >
          <div className="form-header text-center mb-6 space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
              <RiAccountPinCircleFill />
              Create your learning profile
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Join Quran Scholars
            </h1>
            <p className="text-sm text-slate-600">
              Unlock cohorts, recordings, and community support.
            </p>
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
                  <span className="flex rounded-full items-center justify-center text-white w-4 h-4 bg-green-400 shadow-sm">
                    <TiTick className="text-md" />
                  </span>
                </span>
                {success}
              </p>
            </div>
          )}
          {/* Full Name Input */}
          <div className="fullname w-full mb-4">
            <label className="text-sm font-semibold text-slate-700 mb-1 block">
              Full name
            </label>
            <div className="flex border border-red-100 rounded-xl items-center w-full bg-slate-50/60 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition">
              <span className="px-3 text-red-500">👤</span>
              <input
                type="text"
                placeholder="e.g. Aisha Siddiqui"
                className="p-3 w-full bg-transparent outline-none rounded-xl"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="email w-full mb-4">
            <label className="text-sm font-semibold text-slate-700 mb-1 block">
              Email
            </label>
            <div className="flex border border-red-100 rounded-xl items-center w-full bg-slate-50/60 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition">
              <span className="px-3 text-red-500">@</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="p-3 w-full bg-transparent outline-none rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="create-password w-full mb-6">
            <label className="text-sm font-semibold text-slate-700 mb-1 block">
              Password
            </label>
            <div className="relative flex border border-red-100 rounded-xl items-center w-full bg-slate-50/60 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition">
              <span className="px-3 text-red-500">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="p-3 w-full bg-transparent outline-none rounded-xl pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 text-red-500 hover:text-red-700 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Use 8+ characters with a mix of letters and numbers.
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "opacity-20" : "opacity-100"
            } w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition-all duration-200 ease-in-out flex items-center justify-center gap-2 mb-4 shadow-md`}
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
          <p className="text-center text-slate-700 text-sm">
            <span>Already registered?</span>
            <Link
              className="ml-2 inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-all duration-200 ease-linear font-semibold"
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
