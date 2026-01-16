import React from "react";
import Logo from "/images/Logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-t-gray-100 text-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <Link to="/" className="inline-block text-3xl">
            <img src={Logo} alt="Logo" className="" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            Elevating your experience with quality service and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-600">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-red-500 text-gray-700">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 text-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 text-gray-700">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-500 text-gray-700">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-600">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="#"
              className="p-3 group bg-gray-200 rounded-full hover:bg-red-600 transition"
            >
              <FaFacebook className="text-xl group-hover:text-white" />
            </Link>
            <Link
              to="#"
              className="p-3 group bg-gray-200 rounded-full hover:bg-red-600 transition"
            >
              <FaInstagram className="text-xl group-hover:text-white" />
            </Link>
            <Link
              to="#"
              className="p-3 group bg-gray-200 rounded-full hover:bg-red-600 transition"
            >
              <FaTwitter className="text-xl group-hover:text-white" />
            </Link>
            <Link
              to="#"
              className="p-3 group bg-gray-200 rounded-full hover:bg-red-600 transition"
            >
              <FaYoutube className="text-xl group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Quranscholar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
