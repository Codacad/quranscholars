import React from "react";
import CourseImage from "/courses/course-vector.svg";
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Course from "../components/Course";
import { useSelector } from "react-redux";
const Courses = () => {
  const courses = useSelector((state) => state.course.courses);
  return (
    <>
      <div className="courses bg-gray-50 md:p-8">
        <div className="course-list-showcase rounded-xl md:order-2 p-4 bg-red-50 md:flex gap-4 items-center">
          <div className="text-content md:p-16 flex flex-col gap-6">
            <div className="navigation">
              <div className="links flex items-center gap-1">
                <Link className="text-red-700" to={"/"}>
                  Home
                </Link>
                <IoIosArrowForward className="text-red-600" />
                <span className="text-red-600 opacity-90">Courses</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-red-600">Course List</h1>
            <p className="leading-8 text-md text-red-400">
              Discover a rich collection of courses designed to deepen your
              understanding of Islamic teachings, history, and practices. From
              foundational studies to advanced topics, explore diverse subjects
              taught by expert scholars and educators. Enrich your knowledge and
              strengthen your faith through engaging and comprehensive learning
              experiences.
            </p>
            <button className="w-16 animate-bounce h-16 transition-all duration-100 ease-linear hover:shadow-[0px_5px_0px_0px_#f87171] hover:border-2 border-red-600 rounded-full flex justify-center items-center bg-red-600 text-white">
              <FaArrowDown size={30} className="" />
            </button>
          </div>
          <div className="images md:order-1">
            <img src={CourseImage} alt="" />
          </div>
        </div>

        <div className="course-listing m-auto grid lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 py-4">
          {courses.map((course, index) => (
            <Course key={index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
