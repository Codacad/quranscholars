import { useCallback, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../state/userApis/userAuthApis";
import { useSelector, useDispatch } from "react-redux";
import { SlLogin } from "react-icons/sl";
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { setUser } from "../state/slices/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/admission");
        setIsLoading(false);
      }
      if (response.error) {
        setError(response.error.data.message);
        setSuccess("");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError("");
      setSuccess("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative login flex justify-center items-start md:items-center bg-gradient-to-br from-amber-50 via-white to-rose-50 px-4 py-6 md:p-12 min-h-[calc(100vh-140px)] overflow-hidden">
        {/* Decorative Blurs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-70" />

        <form
          onSubmit={handleLoginSubmit}
          className="relative z-10 lg:w-[520px] md:w-[80%] sm:w-[90%] p-7 md:p-8 bg-white/90 backdrop-blur rounded-2xl border border-red-100 shadow-[0_20px_70px_-28px_rgba(220,38,38,0.45)]"
        >
          {/* Header */}
          <div className="form-header text-center mb-6 space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100">
              <SlLogin />
              Welcome back
            </p>

            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Login to Quran Scholars
            </h1>

            <p className="text-sm text-slate-600">
              Continue your learning journey with us.
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="flex gap-2 items-center justify-center text-red-600 p-2 bg-red-100 rounded-sm text-sm mb-6">
              <MdErrorOutline />
              {error.split(",")[0]}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="flex gap-2 items-center justify-center text-green-600 p-2 bg-green-100 rounded-sm text-sm mb-4">
              <span className="flex rounded-full items-center justify-center text-white w-4 h-4 bg-green-500">
                <TiTick />
              </span>
              {success}
            </p>
          )}

          {/* Email */}
          <div className="w-full mb-4">
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

          {/* Password */}
          <div className="w-full mb-6">
            <label className="text-sm font-semibold text-slate-700 mb-1 block">
              Password
            </label>

            <div className="relative flex border border-red-100 rounded-xl items-center w-full bg-slate-50/60 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition">
              <span className="px-3 text-red-500">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

            <div className="text-right mt-1">
              <Link
                to="#"
                className="text-xs font-medium text-red-500 hover:text-red-700 transition"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "opacity-30" : "opacity-100"
            } w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition-all duration-200 ease-in-out flex items-center justify-center gap-2 mb-4 shadow-md`}
          >
            {isLoading ? (
              <span className="flex gap-3 items-center">
                <span className="spinner"></span>
                <span>Signing in...</span>
              </span>
            ) : (
              <>
                <SlLogin />
                <span>Login</span>
              </>
            )}
          </button>

          {/* Register */}
          <p className="text-center text-slate-700 text-sm">
            <span>New to Quran Scholars?</span>
            <Link
              to="/register"
              className="ml-2 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition"
            >
              <FaLongArrowAltLeft />
              <span>Create account</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
