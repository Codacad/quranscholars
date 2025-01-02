import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlineKey } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <>
        <div className="register lg:p-16 md:p-8 p-4 w-[100%]justify-center items-center">
          <form className="lg:w-[500px] shadow-xl rounded-md md:w-[70%] m-auto flex justify-start flex-col max-sm:items-center gap-4 sm:p-4 p-4 border-2 border-gray-100">
            <div className="form-header flex flex-col gap-4 w-[100%] leading-10 text-center">
              <h1 className="text-primary text-3xl leading-[3rem] font-bold">
                Embark on Your Learning Journey: Register with Us
              </h1>
              <RiAccountPinCircleFill
                size={50}
                className="mb-0 text-primary m-auto"
              />
              {/* <p>Access Your Account: Islamic Education Platform</p> */}
            </div>
            <div className="fullname flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
              <FaUserEdit
                size={40}
                className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800"
              />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="p-2 w-[100%] rounded-lg outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="create-password relative flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
              <MdOutlineKey
                size={40}
                className="py-2 px-1 bg-gray-200 rounded-bl-lg rounded-tl-lg text-red-800"
              />
              <input
                type="text"
                placeholder="Create Password"
                className="p-2 w-[100%] rounded-lg outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="absolute top-[50%] translate-y-[-50%] right-3 text-primary">
                <FaEye />
              </button>
            </div>

            <button
              type="submit"
              className={`submit flex items-center justify-center gap-2 text-gray-100 bg-primary p-2 w-[100%] max-md:w-full rounded-md`}
            >
              <RiAccountPinCircleFill />
              <span>Register</span>
            </button>
            <p className="flex flex-col items-center gap-4">
              <span>Already Registered with us?</span>{" "}
              <Link
                className="p-2 w-28 flex items-center justify-center transition-all duration-200 ease-linear gap-2 md:hover:gap-3 text-center hover:ring-red-800 hover:ring-2 bg-red-300 text-red-800 rounded-md"
                to={"/login"}
              >
                <span>Login</span>
                <FaLongArrowAltRight />
              </Link>
            </p>
          </form>
        </div>kl
    </>
  );
};

export default Register;
