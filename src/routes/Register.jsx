import React, { useState } from "react";
import LoginIllustration from "/login.svg";
import { FaUserEdit } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlineKey } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
const Register = () => {
  const navigate = useNavigate();
  const [disabledRegiterBtn, setDisabledRegiterBtn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createPasswordType, setCreatePasswordType] = useState(true);
  const [confirmPasswordType, setConfirmPasswordType] = useState(true);
  const [registerationMessage, setRegisterationMessage] = useState();
  const [messageClasses, setMessageClasses] = useState(
    "bg-red-50 text-red-500"
  );
  const [alertClasses, setAlertClasses] = useState(
    "block scale-0 h-0 overflow-hidden m-auto"
  );
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const registerData = {
      fullName,
      email,
      createPassword,
      confirmPassword,
    };
    const registerAPIUrl = import.meta.env.VITE_REGISTER;
    console.log(registerAPIUrl);
    const response = await fetch(registerAPIUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    const data = await response.json();
    console.log(data.message);
    setRegisterationMessage(data.message);
    setAlertClasses("block scale-1 h-auto overflow-hidden m-auto");
    if (data.success) {
      setFullName(""), setEmail("");
      setCreatePassword(""), setConfirmPassword("");
      setDisabledRegiterBtn(true);
      setShowSpinner(true)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      setMessageClasses("bg-green-50 text-green-500");
    } else {
      setMessageClasses("bg-red-50 text-red-500");
    }
  };
  const handleChangeCreatePasswordType = () => {
    setCreatePasswordType((prev) => !prev);
  };
  const handleChangeConfirmPasswordType = () => {
    setConfirmPasswordType((prev) => !prev);
  };
  return (
    <>
      <div className="register lg:p-16 md:p-8 p-4 w-[100%]justify-center items-center">
        {/* <div className="illustration max-sm:hidden">
          <img src={LoginIllustration} alt="" />
        </div> */}
        <form
          onSubmit={(e) => handleRegisterSubmit(e)}
          className="lg:w-[500px] shadow-xl rounded-md md:w-[70%] m-auto flex justify-start flex-col max-sm:items-center gap-4 sm:p-4 p-4 border-2 border-gray-100"
        >
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
          <div
            className={`${alertClasses} transition-all duration-200 ease-in-out w-full`}
          >
            <span
              className={`flex w-full ${messageClasses} p-2 rounded-lg items-center text-sm transition-all duration-200 ease-in-out`}
            >
              <span className={`${showSpinner ? "flex" : "hidden"} justify-center items-center mr-4`}>
                <span
                  className={`animate-spin transition-all duration-200 rounded-full h-4 w-4 border-t-2 border-green-500`}
                ></span>
              </span>
              <span>{registerationMessage}</span>
              <span className="ml-auto">
                <MdClose className="ml-auto" size={15} />
              </span>
            </span>
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
              type={`${createPasswordType ? "password" : "text"}`}
              placeholder="Create Password"
              className="p-2 w-[100%] rounded-lg outline-none"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
            />
            <button
              onClick={handleChangeCreatePasswordType}
              className="absolute top-[50%] translate-y-[-50%] right-3 text-primary"
            >
              <FaEye />
            </button>
          </div>
          <div className="confirm-password relative flex border border-gray-400 rounded-lg items-center w-[100%] max-md:w-full">
            <GiConfirmed
              size={40}
              className="py-2 px-1 text-primary bg-gray-200 rounded-bl-lg rounded-tl-lg"
            />
            <input
              type={`${confirmPasswordType ? "password" : "text"}`}
              placeholder="Confirm Password"
              className="p-2 w-[100%] rounded-lg outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={handleChangeConfirmPasswordType}
              className="absolute top-[50%] translate-y-[-50%] right-3 text-primary"
            >
              <FaEye />
            </button>
          </div>
          <button
            type="submit"
            disabled={disabledRegiterBtn}
            className={`${
              disabledRegiterBtn ? "opacity-25" : "opacity-100"
            } submit flex items-center justify-center gap-2 text-gray-100 bg-primary p-2 w-[100%] max-md:w-full rounded-md`}
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
      </div>
    </>
  );
};

export default Register;
