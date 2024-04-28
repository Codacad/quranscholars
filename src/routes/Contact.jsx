import React from "react";
import ContactUs from "/contact-us.svg";
const Contact = () => {
  return (
    <>
      <div className="contact md:p-px10p md:min-h-screen p-4 grid md:grid-cols-2 justify-center items-center">
        <div className="contact-form max-md:order-2 max-md:px-8">
          <div className="header flex flex-col gap-2 mb-8 max-md:items-center max-md:text-center">
            <h1 className="md:text-4xl text-2xl text-bold text-primary max-md:mb-4">Get in Touch with us</h1>
            <p className="text-gray-400">
              Our team is here to assist you. Please fill out the form below
              with your inquiries, feedback, or any questions related to our
              Islamic education platform. We value your input and look forward
              to hearing from you.
            </p>
          </div>
          <form className="grid grid-cols-2 md:gap-12 gap-4">
            <div className="form-group relative">
              <input
                type="text"
                className="firstname py-2 w-full border-b-2 placeholder:text-primary placeholder:opacity-70 border-red-800 outline-none"
                id="firstname"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className="lastname py-2 w-full border-b-2 placeholder:text-primary placeholder:opacity-70 border-red-800 outline-none"
                id="lastname"
              />
            </div>
            <div className="form-group col-span-2">
              <input
                type="email"
                placeholder="Email"
                className="email py-2 border-b-2 outline-none placeholder:text-primary placeholder:opacity-70 border-red-800 w-full"
                id="email"
              />
            </div>
            <div className="form-group col-span-2">
              <textarea
                placeholder="Message"
                rows={5}
                cols={20}
                className="message py-2 border-b-2 placeholder:text-primary placeholder:opacity-70 border-red-800 outline-none w-full"
                id="message"
              />
            </div>
            <div className="button flex">
              <button className="border-none p-2 bg-primary text-white w-24 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="img flex justify-center max-md:order-1 max-md:mb-8">
          <img src={ContactUs} alt="" className="w-[100%] max-md:w-[70%]" />
        </div>
      </div>
    </>
  );
};

export default Contact;
