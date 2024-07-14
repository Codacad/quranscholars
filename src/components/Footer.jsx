import React, { useEffect } from "react";
import WhiteBgLogo from "/whitebg-logo.svg";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <div className="footer min-h-[50vh] bg-primary p-px10p max-lg:p-8 pt-8">
        <div className="header flex justify-between max-lg:flex-col max-md:gap-4 items-center">
          <div className="logo md:w-[400px] sm:w-[200px]">
            <Link aria-current="page" to={"/"}>
              <img src={WhiteBgLogo} alt="" />
            </Link>
          </div>
          <div className="socail-icons"  aria-label="footer">
            <ul className="flex sm:gap-8 gap-4">
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
