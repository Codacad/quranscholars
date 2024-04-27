import React from "react";
import WhiteBgLogo from "/whitebg-logo.svg";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer min-h-[50vh] bg-red-900 p-px10p pt-8">
        <div className="header flex justify-between items-center">
          <div className="logo md:w-[400px]">
            <Link to={"/"}>
              <img src={WhiteBgLogo} alt="" />
            </Link>
          </div>
          <div className="socail-icons">
            <ul className="flex gap-8">
              <li>
                <Link className="flex w-12 h-12 justify-center items-center rounded-full transition-all duration-200 hover:bg-red-600">
                  <FaInstagramSquare className="md:text-xl text-red-200  hover:text-red-200" />
                </Link>
              </li>
              <li>
                <Link className="flex w-12 h-12 justify-center items-center rounded-full transition-all duration-200 hover:bg-red-600">
                  <FaFacebookSquare className="md:text-xl text-red-200  hover:text-red-200" />
                </Link>
              </li>
              <li>
                <Link className="flex w-12 h-12 justify-center items-center rounded-full transition-all duration-200 hover:bg-red-600">
                  <FaTwitterSquare className="md:text-xl text-red-200  hover:text-red-200" />
                </Link>
              </li>
              <li>
                <Link className="flex w-12 h-12 justify-center items-center rounded-full transition-all duration-200 hover:bg-red-600">
                  <FaYoutubeSquare className="md:text-xl text-red-200  hover:text-red-200" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
