import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  return (
    <>
      <div className="course border-2 shadow-[8px_8px_0px_#dc2626] rounded-lg border-red-600 md:py-2 p-4 max md:p-4">
        <div className="image col-span-1 rounded-3xl h-60 max-md:mb-4">
          <img className="h-[100%] w-[100%]" src={course.course_image} alt="" />
        </div>
        <div className="text-content col-span-2 flex mt-4 flex-col gap-4">
          <div className="flex justify-between">
            <div className="category bg-red-100 px-2 border-2 border-red-600 text-red-500 flex justify-center items-center text-sm rounded-md">
              <span>{course.category}</span>
            </div>
            <div className="price flex items-end">
              <span className="flex items-center text-2xl font-bold">
                <LiaRupeeSignSolid /> {course.fee - course.discount}
              </span>
              <span className="text-sm flex items-center line-through">
                <LiaRupeeSignSolid /> {course.fee}
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="level flex items-center gap-2">
              <span>
                <SiLevelsdotfyi className="text-red-600" />
              </span>
              <span>{course.level}</span>
            </div>
            <div className="duration flex items-center gap-2">
              <span>
                <MdOutlineWatchLater className="text-red-600" />
              </span>
              <span>{course.duration}</span>
            </div>

            <div className="rating flex items-center gap-2">
              <span>
                <MdOutlineStarPurple500 className="text-red-600" />
              </span>
              <span>{course.rating}</span>
            </div>
          </div>
          <h3 className="md:text-2xl text-xl font-bold text-red-600">
            {course.course_name}
          </h3>
          <Link
            to={`/services/courses/${course.course_name}`}
            className="flex w-44 gap-2 transition-all duration-100 ease-linear hover:gap-3 my-4 ml-auto"
          >
            <span className="hover:underline text-red-500 text-xl">
              View Course
            </span>
            <span className="w-6 h-6 bg-red-600 text-white flex items-center text-sm rounded-full justify-center">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
