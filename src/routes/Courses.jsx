import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiFilter, FiSearch, FiGrid, FiSliders } from "react-icons/fi";
import { Link } from "react-router-dom";
import Course from "../components/Course";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Courses = () => {
  const courses = useSelector((state) => state.course.courses);
  const serviceContentRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const location = useLocation();

  const categories = useMemo(() => {
    const set = new Set();
    courses.forEach((c) => {
      if (c?.category) set.add(c.category);
      if (Array.isArray(c?.tags)) c.tags.forEach((t) => set.add(t));
    });
    if (!set.size) return ["All", "Tajweed", "Quran", "Arabic", "Fiqh"];
    return ["All", ...Array.from(set)];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" ||
        course?.category === selectedCategory ||
        (Array.isArray(course?.tags) &&
          course.tags.some((tag) => tag === selectedCategory));

      if (!matchesCategory) return false;
      if (!term) return true;

      const haystack = [
        course?.title,
        course?.name,
        course?.description,
        Array.isArray(course?.tags) ? course.tags.join(" ") : "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [courses, selectedCategory, searchTerm]);

  const sortedCourses = useMemo(() => {
    const list = [...filteredCourses];
    if (sortBy === "alphabetical") {
      list.sort((a, b) =>
        (a?.title || a?.name || "").localeCompare(b?.title || b?.name || ""),
      );
    }
    if (sortBy === "difficulty") {
      const order = { Beginner: 1, Intermediate: 2, Advanced: 3 };
      list.sort(
        (a, b) =>
          (order[a?.level] || Number.MAX_SAFE_INTEGER) -
          (order[b?.level] || Number.MAX_SAFE_INTEGER),
      );
    }
    return list;
  }, [filteredCourses, sortBy]);

  useEffect(() => {
    if (serviceContentRef.current) {
      gsap.fromTo(
        serviceContentRef.current,
        {
          opacity: 1,
          y: -30,
          duration: 0.5,
        },
        { opacity: 1, y: 0, duration: 0.5 },
      );
    }
  }, [location.pathname]);
  return (
    <>
      <div
        ref={serviceContentRef}
        className="courses bg-gradient-to-br from-amber-50 via-white to-rose-50 min-h-screen md:p-8"
      >
        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.14),transparent_30%)] pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-6 p-6 md:p-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Course Library
              </div>
              <div className="flex items-center gap-2 text-sm text-red-700">
                <Link className="font-semibold" to={"/"}>
                  Home
                </Link>
                <IoIosArrowForward className="text-red-600" />
                <span className="opacity-80">Courses</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
              >
                Learn with a clear, curated pathway.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="text-lg text-slate-700 max-w-2xl"
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
                  Live & recorded access
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700">
                  Explore Tracks
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-700 border border-red-200 shadow-sm transition hover:border-red-300">
                  View Syllabus PDF
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-red-100 blur-2xl" />
              <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-amber-100 blur-2xl" />
              <div className="relative grid gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white p-6 shadow-xl">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                    At a glance
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-3xl font-bold">{sortedCourses.length}</p>
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
                <div className="rounded-2xl border border-red-100 bg-white/80 backdrop-blur p-5 shadow-lg">
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
                    <div className="h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">
                      4.9
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Guided by certified Qaris
                      </p>
                      <p className="text-xs text-slate-500">
                        Live sessions · recordings included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 max-w-6xl mx-auto px-2 md:px-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search courses, tags, topics..."
                  className="pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-100 text-sm w-72"
                />
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <FiFilter />
                Smart filters tuned for your path.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSortBy("featured")}
                className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                  sortBy === "featured"
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setSortBy("alphabetical")}
                className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                  sortBy === "alphabetical"
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                A–Z
              </button>
              <button
                onClick={() => setSortBy("difficulty")}
                className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                  sortBy === "difficulty"
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                By Level
              </button>
              <div className="hidden md:block px-3 py-2 rounded-full bg-red-50 text-red-800 border border-red-100 text-sm font-semibold">
                <FiGrid className="inline mr-2" />
                {sortedCourses.length} courses
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white border-red-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-red-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="course-listing mt-6 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto px-2 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.07, duration: 0.4 },
            },
          }}
        >
          {sortedCourses.map((course, index) => (
            <Course key={index} course={course} index={index} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Courses;
