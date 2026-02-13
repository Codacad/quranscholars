import React, { useState } from "react";
import { MdClose, MdEmail, MdSupportAgent } from "react-icons/md";
import { FaAddressBook, FaClock, FaGlobe, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const helpTopics = [
  {
    title: "Admissions and Course Guidance",
    detail:
      "Get help selecting the right track for age, level, and learning goals.",
  },
  {
    title: "Schedule and Class Timing",
    detail:
      "Share your timezone and preferred timing, and we will suggest suitable slots.",
  },
  {
    title: "Technical and Platform Support",
    detail:
      "Assistance for login, class access, live session issues, and student dashboard help.",
  },
  {
    title: "Parent and Student Counseling",
    detail:
      "Guidance for consistency, motivation, and stronger Islamic learning routines.",
  },
];

const quickStats = [
  { label: "Average Response", value: "Within 24 Hours", icon: FaClock },
  { label: "Support Coverage", value: "Global Time Zones", icon: FaGlobe },
  {
    label: "Dedicated Team",
    value: "Admissions + Support",
    icon: MdSupportAgent,
  },
];

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(true);
  };

  const handleCloseSubmitMessage = () => {
    setSubmitMessage(false);
  };

  return (
    <>
      <div
        className={`fixed top-8 ${
          submitMessage ? "left-4" : "-left-[420px]"
        } z-50 flex items-center gap-4 rounded-xl bg-red-100 p-4 text-red-700 shadow-2xl transition-all duration-300`}
      >
        <span className="text-sm font-medium">
          Message received. Our team will contact you soon.
        </span>
        <button
          onClick={handleCloseSubmitMessage}
          className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-red-200"
        >
          <MdClose size={16} />
        </button>
      </div>

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 md:p-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-100 opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800">
              Contact Quran Scholars
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              We are here to support your learning journey
            </h1>

            <p className="leading-relaxed text-slate-600">
              Whether you have questions about Quran classes, Tajweed programs,
              one-to-one sessions, or technical support, our team is ready to
              help with clear and practical guidance.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {quickStats.map(({ label, value, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-xl border border-red-100 bg-white/85 p-3"
                >
                  <Icon className="text-red-700" size={18} />
                  <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {value}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-red-100 bg-white/80 p-4 text-red-700 backdrop-blur">
                <FaAddressBook size={22} />
                <span className="text-sm leading-relaxed">
                  244601, Faridnagar, Thakurdwara, Moradabad, Uttar Pradesh,
                  India
                </span>
              </div>

              <div className="flex gap-3 rounded-xl border border-red-100 bg-white/80 p-4 text-red-700 backdrop-blur">
                <FaPhone size={20} />
                <a
                  href="tel:+918057121113"
                  className="text-sm font-medium transition hover:text-red-900"
                >
                  +91 80571 21113
                </a>
              </div>

              <div className="flex gap-3 rounded-xl border border-red-100 bg-white/80 p-4 text-red-700 backdrop-blur sm:col-span-2">
                <MdEmail size={20} />
                <a
                  href="mailto:farman@quranscholar.in"
                  className="text-sm font-medium transition hover:text-red-900"
                >
                  farman@quranscholar.in
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-700">
                Working Hours
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Monday to Saturday: 9:00 AM to 8:00 PM (IST)
              </p>
              <p className="text-sm text-slate-700">
                Sunday: Limited support for urgent learning issues
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white/90 p-6 shadow-[0_20px_70px_-28px_rgba(220,38,38,0.45)] backdrop-blur md:p-8">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-700">
                Send Us a Message
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                We will get back to you soon
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Share your question in detail so we can guide you faster.
              </p>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-red-100 bg-slate-50/60 p-3 outline-none transition focus:border-red-300 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 p-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <section className="relative z-10 mx-auto mt-10 max-w-6xl">
          <div className="rounded-2xl border border-red-100 bg-white/85 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              What can we help you with?
            </h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Reach out for admissions, schedules, technical support, and
              student progress guidance.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {helpTopics.map((topic) => (
                <article
                  key={topic.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <h4 className="text-base font-semibold text-slate-900">
                    {topic.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{topic.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Start Admission
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;