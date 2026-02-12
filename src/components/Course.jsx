import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater, MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const Course = ({ course, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  const priceAmount = course?.price?.amount || 0;
  const discount = course?.price?.discount || 0;
  const finalPrice = Math.max(0, priceAmount - discount);
  const durationText =
    course?.duration?.value && course?.duration?.unit
      ? `${course.duration.value} ${course.duration.unit}`
      : "Self-paced";

  return (
    <motion.div
      variants={
        shouldReduceMotion
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-md"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50/80 via-white to-amber-50 opacity-0 transition duration-300 hover:opacity-100" />

      <div className="flex h-full flex-col p-4">
        <div className="relative h-52 overflow-hidden rounded-xl bg-gray-50">
          <img
            className="h-full w-full object-cover"
            src={course?.thumbnail}
            alt={course?.title || "Course thumbnail"}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/85 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm backdrop-blur">
            <SiLevelsdotfyi className="text-red-600" />
            {course?.level || "All levels"}
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              {course?.category || "General"}
            </span>

            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-2xl font-extrabold text-slate-900">
                <LiaRupeeSignSolid />
                {finalPrice}
              </div>
              {discount > 0 && (
                <div className="flex items-center justify-end gap-1 text-xs text-gray-500 line-through">
                  <LiaRupeeSignSolid />
                  {priceAmount}
                </div>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold leading-snug text-slate-900">
            {course?.title || "Course"}
          </h3>
          <p className="text-sm text-slate-600">
            {course?.description ||
              "Engaging, instructor-led lessons with live Q and A and practice assignments."}
          </p>

          <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-slate-700 sm:grid-cols-3 sm:gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
              <MdOutlineWatchLater className="text-lg text-red-600" />
              <span>{durationText}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
              <MdOutlineStarPurple500 className="text-lg text-amber-500" />
              <span>{course?.rating || "4.8"} ?</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
              <FaArrowRight className="text-sm text-red-600" />
              <span>{course?.lessons || "12"} lessons</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">
          <div className="flex items-center -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-red-300 to-amber-200 font-bold text-red-900"
              >
                <span className="text-xs">{i}</span>
              </div>
            ))}
            <span className="ml-3 text-xs font-semibold text-slate-600">
              Cohort {index + 1} • New seats
            </span>
          </div>

          <Link
            to={`/services/courses/${course?.slug || ""}`}
            className="inline-flex w-36 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-red-600 p-2 text-[12px] font-semibold text-white shadow-md transition hover:bg-red-700"
          >
            <span className="leading-none">View Course</span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Course;

