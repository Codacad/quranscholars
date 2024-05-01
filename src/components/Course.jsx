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
      <div className="course bg-white md:grid grid-cols-3 border-2 hover:shadow-[5px_5px_0px_#991b1b] md:rounded-lg border-gray-100 md:my-10 md:py-10 p-4 md:p-2">
        <div className="image col-span-1 rounded-3xl border-2 border-red-300 h-[300px] max-md:mb-4">
          <img className="h-[100%] w-[100%]" src={course.course_image} alt="" />
        </div>
        <div className="text-content col-span-2 flex flex-col gap-4 md:py-10">
          <div className="flex justify-between">
            <div className="category bg-red-300 text-red-800 w-24 flex justify-center items-center text-sm rounded-md">
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
          <div className="flex gap-4">
            <div className="level flex items-center gap-2">
              <span>
                <SiLevelsdotfyi className="text-primary" />
              </span>
              <span>{course.level}</span>
            </div>
            <div className="duration flex items-center gap-2">
              <span>
                <MdOutlineWatchLater className="text-primary" />
              </span>
              <span>{course.duration}</span>
            </div>

            <div className="rating flex items-center gap-2">
              <span>
                <MdOutlineStarPurple500 className="text-primary" />
              </span>
              <span>{course.rating}</span>
            </div>
          </div>
          <h3 className="text-4xl text-primary">{course.course_name}</h3>
          <Link t={"#"} className="flex gap-2 transition-all duration-100 ease-linear hover:gap-3 md:mt-8 mt-4">
            <span className="hover:underline text-black text-xl">View Course</span>
            <span className="w-6 h-6 bg-primary text-white flex items-center text-sm rounded-full justify-center">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
