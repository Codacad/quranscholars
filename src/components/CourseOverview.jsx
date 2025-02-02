import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdCheckbox } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {useSelector} from "react-redux"
const CourseOverview = () => {
  const courses = useSelector((state) => state.course.courses)
  const { courseName } = useParams();

  const course = courses.find((course) => courseName === course.course_name);
  const { course_overview } = course;
  return (
    <>
      <div className="course-overview bg-gray-50 md:p-12">
        <div className="grid md:grid-flow-col bg-gray-100 md:w-[80%] m-auto p-4 rounded-md md:my-4">
          <div className="text-content lg:p-12  max-md:order-2 p-4 flex flex-col gap-8">
            <div className="navigation max-md:hidden">
              <div className="links flex items-center gap-1 text-sm">
                <Link className="text-red-800" to={"/"}>
                  Home
                </Link>
                <IoIosArrowForward className="text-red-800" />
                <Link to={"/courses"}>
                  <span className="text-red-800">Courses</span>
                </Link>
                <IoIosArrowForward className="text-red-800" />
                <span className="text-red-600">{course_overview.course_name}</span>
              </div>
            </div>
            <h3 className="md:text-5xl text-2xl font-bold text-red-600">
              {course.course_name}
            </h3>
            <div className="flex gap-4 text-sm">
              <div className="level flex items-center gap-2">
                <span>
                  <SiLevelsdotfyi className="text-red-600" />
                </span>
                <span>{course_overview.level}</span>
              </div>
              <div className="duration flex items-center gap-2">
                <span>
                  <MdOutlineWatchLater className="text-red-600" />
                </span>
                <span>{course_overview.duration}</span>
              </div>
              <div className="rating flex items-center gap-2">
                <span>
                  <MdOutlineStarPurple500 className="text-red-600" />
                </span>
                <span>{course.rating}</span>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex items-end">
                <span className="flex text-md line-through">
                  <LiaRupeeSignSolid /> {course_overview.fee}
                </span>
                <span className="flex md:text-4xl text-2xl font-bold">
                  <LiaRupeeSignSolid />{" "}
                  {course_overview.fee - course_overview.discount}
                </span>
              </div>
              <Link
                to={"#"}
                className="flex items-center bg-red-600 rounded-md px-4 py-3 gap-2 transition-all duration-100 ease-linear hover:gap-3 my-4"
              >
                <span className="hover:underline text-white md:text-xl text-sm">
                  Buy Course
                </span>
                <span className="md:w-6 md:h-6 w-3 h-3  bg-white text-red-600 flex items-center md:text-sm text-[10px] rounded-full justify-center">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="image col-span-1 max-md:order-1 md:w-[400px] rounded-3xl md:relative max-md:mb-4">
            <img
              className="h-[100%] w-[100%] top-10 md:absolute border-2 border-red-800 rounded-xl shadow-[10px_10px_0px_#991b1b]"
              src={course_overview.course_image}
              alt=""
            />
          </div>
        </div>

        <div className="md:w-[80%] m-auto md:mt-24 md:mb-8 md:grid max-md:flex max-md:flex-col max:md:gap-4 grid-cols-3 gap-8 p-4">
          <div className="what-u-wil-learn col-span-2">
            <h1 className="md:text-4xl text-2xl text-red-600 max-md:mt-4">What you will learn</h1>
            <ul className="mt-6 flex flex-col gap-4">
              {course_overview.what_to_learn.map((wtl, index) => (
                <li
                  key={index}
                  className="flex max-md:text-sm gap-2 items-start font-epilogue"
                >
                  <span>
                    {" "}
                    <IoMdCheckbox className="mt-1 text-red-600 text-xl" />{" "}
                  </span>
                  <span>{wtl}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="course-format transition-all duration-200 ease-in-out hover:bg-red-50 shadow-[10px_10px_0px_#dc2626] mb-8 rounded-xl col-span-1 p-4 border-2 flex flex-col gap-4 border-red-600">
            <h2>
              <FaDesktop className="text-red-600 text-[100px]" />
            </h2>
            <ul className="flex flex-col gap-4">
              <h2 className="md:text-2xl text-xl text-red-600">
                Course Format
              </h2>
              {course_overview.course_format.map((cf, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>
                    {" "}
                    <IoMdCheckbox className="mt-1 text-red-600" />{" "}
                  </span>
                  <span>{cf}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOverview;
