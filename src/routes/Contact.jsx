import React, { useState } from "react";
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

    const response = await fetch("");

    setSubmitMessage(true);
  };

  const handleCloseSubmitMessage = () => {
    setSubmitMessage(false);
  };

  return (
    <>
      {/* Floating Alert */}
      <div
        className={`fixed top-8 ${
          submitMessage ? "left-4" : "-left-[420px]"
        } z-50 flex items-center gap-4 rounded-xl bg-red-100 text-red-700 p-4 shadow-2xl transition-all duration-300`}
      >
        <span className="text-sm font-medium">
          Something went wrong. Please try again.
        </span>
        <button
          onClick={handleCloseSubmitMessage}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-200 transition"
        >
          <MdClose size={16} />
        </button>
      </div>

      {/* Page Wrapper */}
      <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 md:p-16 overflow-hidden">
        {/* Decorative Blurs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-100 blur-3xl opacity-70" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left – Content */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 border border-red-100 w-fit">
              🕌 Contact Quran Scholars
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              We’re Here to Support Your Islamic Learning Journey
            </h1>

            <p className="text-slate-600 leading-relaxed">
              Whether you have questions about Quran classes, Tajweed programs,
              one-to-one sessions, or technical support — our team is always
              happy to help. Reach out and we’ll respond with care and clarity,
              In shaa Allah.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl bg-white/80 backdrop-blur border border-red-100 p-4 flex gap-3 text-red-700">
                <FaAddressBook size={22} />
                <span className="text-sm leading-relaxed">
                  244601, Faridnagar, Thakurdwara, Moradabad, Uttar Pradesh,
                  India
                </span>
              </div>

              <div className="rounded-xl bg-white/80 backdrop-blur border border-red-100 p-4 flex gap-3 text-red-700">
                <FaPhone size={20} />
                <Link
                  to="tel:+918057121113"
                  className="text-sm font-medium hover:text-red-900 transition"
                >
                  +91 80571 21113
                </Link>
              </div>

              <div className="rounded-xl bg-white/80 backdrop-blur border border-red-100 p-4 flex gap-3 text-red-700 sm:col-span-2">
                <MdEmail size={20} />
                <Link
                  to="mailto:farman@quranscholar.in"
                  className="text-sm font-medium hover:text-red-900 transition"
                >
                  farman@quranscholar.in
                </Link>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="bg-white/90 backdrop-blur rounded-2xl border border-red-100 shadow-[0_20px_70px_-28px_rgba(220,38,38,0.45)] p-6 md:p-8">
            <form
              onSubmit={handleContactSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl font-semibold transition-all duration-200 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
