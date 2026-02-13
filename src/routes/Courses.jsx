import { IoIosArrowForward } from "react-icons/io";
import { FiFilter, FiSearch, FiGrid, FiSliders } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Course from "../components/Course";
import { useGetCoursesQuery } from "../state/courseApis/courses.api";
import AppLoader from "../components/ui/AppLoader";

const Courses = () => {
  const { pathname } = useLocation();
  const isServicesView = pathname.startsWith("/services");
  const { data, isLoading } = useGetCoursesQuery();
  const courses = useMemo(() => data?.data || [], [data]);
  const count = data?.count || 0;
  const serviceContentRef = useRef();
  const shouldReduceMotion = useReducedMotion();

  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(
    () => ["All", ...new Set(courses.map((course) => course.category))],
    [courses],
  );

  const selectedCourses = useMemo(() => {
    let result = [...courses];

    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      result = result.filter((course) =>
        (course.title || "").toLowerCase().includes(query),
      );
    }

    if (category !== "All") {
      result = result.filter((course) => category === course.category);
    }

    if (sortBy === "alphabetical") {
      result.sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, {
          sensitivity: "base",
        }),
      );
    }

    if (sortBy === "level") {
      const levelOrder = {
        Basic: 1,
        Intermediate: 2,
        Advanced: 3,
      };

      result.sort(
        (a, b) => (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99),
      );
    }

    return result;
  }, [category, courses, searchTerm, sortBy]);

  if (isLoading) {
    return (
      <div
        className={`courses ${
          isServicesView
            ? "min-h-0 bg-transparent p-0"
            : "min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 px-2 py-4 md:p-8"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <AppLoader label="Loading courses..." />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={serviceContentRef}
      className={`courses ${
        isServicesView
          ? "min-h-0 bg-transparent p-0"
          : "min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 px-2 py-4 md:p-8"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.14),transparent_30%)]" />
          <div className="relative grid items-center gap-6 p-4 sm:p-6 md:grid-cols-2 md:p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Course Library
              </div>
              <div className="flex items-center gap-2 text-sm text-red-700">
                <Link className="font-semibold" to="/">
                  Home
                </Link>
                <IoIosArrowForward className="text-red-600" />
                <span className="opacity-80">Courses</span>
              </div>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl"
              >
                Learn with a clear, curated pathway.
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                className="max-w-2xl text-lg text-slate-700"
              >
                Explore focused tracks crafted by scholars. Filter by category,
                search instantly, and jump into the next lesson with confidence.
              </motion.p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800 shadow-sm">
                  <FiSliders />
                  Personalized pacing
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900 shadow-sm">
                  Live and recorded access
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700">
                  Explore Tracks
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 shadow-sm transition hover:border-red-300">
                  View Syllabus PDF
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-red-100 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-amber-100 blur-2xl" />
              <div className="relative grid gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 p-6 text-white shadow-xl">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                    At a glance
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-3xl font-bold">{count}</p>
                      <p className="text-xs text-white/80">Active courses</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">
                        {categories.length - 1}
                      </p>
                      <p className="text-xs text-white/80">Categories</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">4.8</p>
                      <p className="text-xs text-white/80">Avg rating</p>
                    </div>
                  </div>
                  <div className="mt-5 h-2 w-full rounded-full bg-white/25">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>
                  <p className="mt-2 text-sm text-white/90">
                    78% learners finish their pathway within 6 weeks.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-white/80 p-5 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-red-700">
                      Next live cohort
                    </p>
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                      Enrolling
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    Tajweed Mastery
                  </p>
                  <p className="text-sm text-slate-600">Starts Feb 20, 2026</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-700">
                      4.9
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Guided by certified Qaris
                      </p>
                      <p className="text-xs text-slate-500">
                        Live sessions . recordings included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl space-y-4 px-2 md:mt-10 md:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative w-full md:w-auto">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, tags, topics..."
                className="w-full max-w-md rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-100"
              />
            </div>
            <div className="hidden items-center gap-2 text-sm text-gray-600 md:flex">
              <FiFilter />
              Smart filters tuned for your path.
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSortBy("featured")}
              className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold transition ${
                sortBy === "featured"
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-gray-200 bg-white text-gray-700"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSortBy("alphabetical")}
              className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold transition ${
                sortBy === "alphabetical"
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-gray-200 bg-white text-gray-700"
              }`}
            >
              A-Z
            </button>
            <button
              onClick={() => setSortBy("level")}
              className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold transition ${
                sortBy === "level"
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-gray-200 bg-white text-gray-700"
              }`}
            >
              By Level
            </button>
            <div className="hidden rounded-full border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-800 md:block">
              <FiGrid className="mr-2 inline" />
              {count} courses
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                category === cat
                  ? "border-red-600 bg-red-600 text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-700 hover:border-red-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="course-listing mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 px-2 md:grid-cols-2 md:px-0 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={
          shouldReduceMotion
            ? {
                hidden: { opacity: 1 },
                visible: { opacity: 1 },
              }
            : {
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.045, duration: 0.3 },
                },
              }
        }
      >
        {selectedCourses.map((course, index) => (
          <Course
            key={course?._id || course?.slug || index}
            course={course}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;
