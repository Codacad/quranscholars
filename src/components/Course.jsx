import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Course = ({ course, index = 0 }) => {
  const discountedFee =
    typeof course.discount === "number"
      ? course.fee - course.discount
      : course.fee;

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-md"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-br from-red-50/80 via-white to-amber-50 pointer-events-none" />
        <div className="flex flex-col h-full p-4">
          <div className="relative overflow-hidden rounded-xl h-52 bg-gray-50">
            <img
              className="h-full w-full object-cover"
              src={course.course_image}
              alt={course.course_name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold text-red-700 border border-red-100 shadow-sm">
              <SiLevelsdotfyi className="text-red-600" />
              {course.level || "All levels"}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 border border-red-200">
                {course.category || "General"}
              </span>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-slate-900 flex items-center gap-1">
                  <LiaRupeeSignSolid />
                  {discountedFee}
                </div>
                {course.discount ? (
                  <div className="text-xs text-gray-500 line-through flex items-center gap-1 justify-end">
                    <LiaRupeeSignSolid />
                    {course.fee}
                  </div>
                ) : null}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {course.course_name}
            </h3>
            <p className="text-sm text-slate-600">
              {course.description ||
                "Engaging, instructor-led lessons with live Q&A and practice assignments."}
            </p>

            <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-2">
                <MdOutlineWatchLater className="text-red-600 text-lg" />
                <span>{course.duration || "Self-paced"}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-2">
                <MdOutlineStarPurple500 className="text-amber-500 text-lg" />
                <span>{course.rating || "4.8"} ★</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-2">
                <FaArrowRight className="text-red-600 text-sm" />
                <span>{course.lessons || "12"} lessons</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t pt-3 border-dashed border-gray-200">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-red-300 to-amber-200"
                />
              ))}
              <span className="ml-3 text-xs font-semibold text-slate-600">
                Cohort {index + 1} • New seats
              </span>
            </div>
            <Link
              to={`/services/courses/${course.course_name}`}
              className="inline-flex items-center justify-between gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-red-700 min-w-[155px] whitespace-nowrap"
            >
              <span className="leading-none">View Course</span>
              <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Course;
