import React from "react";
import WhiteBgLogo from "/whitebg-logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & About */}
        <div>
          <Link to="/" className="inline-block">
            <img src="/logo-white.png" alt="Logo" className="h-12" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">
            Elevating your experience with quality service and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-red-500 text-gray-700">About Us</Link></li>
            <li><Link to="/services" className="hover:text-red-500 text-gray-700">Services</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 text-gray-700">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-red-500 text-gray-700">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="#" className="p-3 bg-gray-200 rounded-full hover:bg-blue-500 transition">
              <FaFacebook className="text-xl text-gray-700" />
            </Link>
            <Link to="#" className="p-3 bg-gray-200 rounded-full hover:bg-pink-500 transition">
              <FaInstagram className="text-xl text-gray-700" />
            </Link>
            <Link to="#" className="p-3 bg-gray-200 rounded-full hover:bg-blue-400 transition">
              <FaTwitter className="text-xl text-gray-700" />
            </Link>
            <Link to="#" className="p-3 bg-gray-200 rounded-full hover:bg-red-500 transition">
              <FaYoutube className="text-xl text-gray-700" />
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
