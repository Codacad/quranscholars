import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 lg:p-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl text-red-600 mb-4 relative">
          Privacy Policy
          <div className="w-24 h-1 bg-red-600 mx-auto mt-3"></div>
        </h1>
        <p className="text-gray-600 italic">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to{" "}
            <Link to={"/"} className="text-blue-600 underline">
              Quran Scholar
            </Link>
            , an online Islamic education platform. We are committed to
            protecting your privacy and ensuring the security of your personal
            information in accordance with Islamic principles and applicable
            data protection laws.
          </p>
        </section>

        {/* Information Collection Section */}
        <section className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] bg-[length:150px] opacity-10 -z-0"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl text-red-600 mb-4">
              Information We Collect
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl text-red-600">Personal Information</h3>
              <ul className="list-none pl-4 space-y-2">
                {[
                  "Name",
                  "Email address",
                  "Contact Number (WhatsApp Number)",
                  "National ID (e.g Adhar Card)",
                  "Permanent Address"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center before:content-['*'] before:text-red-600 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-red-600">Usage Data</h3>
              <ul className="list-none pl-4 space-y-2">
                {[
                  "IP address",
                  "Browser type",
                  "Pages visited",
                  "Time spent on platform",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center before:content-['*'] before:text-red-600 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-none pl-4 space-y-3">
            {[
              "Provide and improve our educational services",
              "Process course enrollments and payments",
              "Communicate important platform updates",
              "Personalize your learning experience",
              "Maintain platform security and prevent fraud",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start before:content-['*'] before:text-red-600 before:mr-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Data Protection Section */}
        <section className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] bg-[length:150px] opacity-10 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl text-red-600 mb-4">Data Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "SSL encryption for all data transmissions",
                "Regular security audits",
                "Restricted access to personal data",
                "Secure payment processing partners",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#f0eee6] rounded-lg flex items-center"
                >
                  <span className="text-red-600 mr-2">*</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Rights Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">Your Rights</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Access your personal data",
              "Request correction of inaccurate information",
              "Delete your account and data",
              "Opt-out of marketing communications",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-[#f8f5f0] rounded"
              >
                <span className="text-red-600 mr-2">*</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Cookies Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-none pl-4 space-y-2">
            {[
              "Maintain user sessions",
              "Remember preferences",
              "Analyze platform usage",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center before:content-['*'] before:text-red-600 before:mr-2"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600 italic">
            You can manage cookies through your browser settings.
          </p>
        </section>

        {/* Children's Privacy Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">Children's Privacy</h2>
          <div className="space-y-3">
            <p>For students under 13:</p>
            <ul className="list-none pl-4 space-y-2">
              {[
                "We require parental consent",
                "Collect minimal necessary information",
                "Provide parental access/control options",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center before:content-['*'] before:text-red-600 before:mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Policy Changes Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-red-600 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy periodically. Significant changes will be
            notified through platform announcements or email.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
          <h2 className="text-2xl text-red-600 mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@example.com"
                className="text-red-600 hover:underline"
              >
                contact@quranscholar.in
              </a>
            </p>
            <p>Address: Moradabad, Uttar Pradesh, India</p>
            <p>Phone: +91-805-712-1113</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
