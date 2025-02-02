import React, {useState } from "react";
import ContactUs from "/contact-us.svg";
import { MdClose } from "react-icons/md";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const contactMessageData = { firstName, lastName, email, message };

    const response = await fetch("")

    setSubmitMessage(true);


  };

  const handleCloseSubmitMessage = () => {
    setSubmitMessage(false);
  };

  return (
    <>
      <div
        className={`alert fixed top-8 ${
          submitMessage ? "left-2" : "-left-96"
        }  z-50 p-4 gap-4 transition-all duration-300 ease-[cubic-bezier(0.455, 0.03, 0.515, 0.955] rounded-md shadow-2xl bg-red-200 text-red-600 flex items-center`}
      >
        <span className="message text-sm">Something went wrote...</span>
        <button
          onClick={() => handleCloseSubmitMessage()}
          className="w-6 h-6 hover:bg-[rgba(0,0,0,.1)] flex justify-center items-center rounded-full"
        >
          <span>
            <MdClose className="ml-auto" size={15} />
          </span>
        </button>

        {/* <span className="timeline w-full p-1 bg-red-500"></span> */}
      </div>
      <div className="contact md:p-16 md:min-h-screen p-4 grid md:grid-cols-2 justify-center items-center">
        <div className="contact-form max-md:order-2 max-md:px-4 py-8">
          <div className="header flex flex-col gap-2 mb-8 max-md:items-center max-md:text-center">
            <h1 className="md:text-4xl text-2xl text-bold text-red-600 max-md:mb-4">
              Get in Touch with us
            </h1>
            <p className="text-gray-400">
              Our team is here to assist you. Please fill out the form below
              with your inquiries, feedback, or any questions related to our
              Islamic education platform. We value your input and look forward
              to hearing from you.
            </p>
          </div>
          <form
            onSubmit={(e) => handleContactSubmit(e)}
            className="grid grid-cols-2 md:gap-12 gap-4"
          >
            <div className="form-group relative">
              <input
                type="text"
                className="firstname py-2 w-full border-b-2 placeholder:text-red-600 placeholder:opacity-70 border-red-600 outline-none"
                id="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className="lastname py-2 w-full border-b-2 placeholder:text-red-600 placeholder:opacity-70 border-red-600 outline-none"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group col-span-2">
              <input
                type="email"
                placeholder="Email"
                className="email py-2 border-b-2 outline-none placeholder:text-red-600 placeholder:opacity-70 border-red-600 w-full"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-span-2">
              <textarea
                placeholder="Message"
                rows={5}
                cols={20}
                className="message py-2 border-b-2 placeholder:text-red-600 placeholder:opacity-70 border-red-600 outline-none w-full"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="button flex">
              <button className="border-none p-2 bg-red-600 text-white w-24 rounded-md">
                Submit
              </button>
            </div>
          </form>
          <div className="contact-address my-8 p-4 bg-red-50 rounded-sm text-red-600 flex flex-col gap-4">
            <div className="address flex gap-3 items-start">
              <span>
                <FaAddressBook size={20} />
              </span>
              <span>
                244601, Faridnagar, Thakurdwara, Moradabd, Uttar Pradesh,
                (India)
              </span>
            </div>
            <div className="contact-number flex gap-3 items-start">
              <span>
                <FaPhone size={20} />
              </span>
              <Link
                to={"Tel:+918057121113"}
                className="transition-all duration-200 ease-in-out hover:text-red-900"
              >
                +91 8057121113
              </Link>
            </div>
            <div className="email flex gap-3 items-start">
              <span>
                <MdEmail size={20} />
              </span>
              <Link
                to={"mailto:farman@quranscholar.in"}
                className="transition-all duration-200 ease-in-out hover:text-red-900 hover:opacity-80"
              >
                farman@quranscholar.in
              </Link>
            </div>
          </div>
        </div>
        <div className="img flex justify-center max-md:order-1 max-md:mb-8">
          <img src={ContactUs} alt="" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default Contact;
