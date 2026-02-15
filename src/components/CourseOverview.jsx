import { Link, useLocation, useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useGetCoursesQuery } from "../state/courseApis/courses.api";
import AppLoader from "./ui/AppLoader";
import ServiceBreadcrumb from "./navigation/ServiceBreadcrumb";
// import { useCoursePaymentMutation } from "../state/userApis/paymentApi";
const CourseOverview = () => {
  const { data, isLoading, isError } = useGetCoursesQuery();
  const courses = data?.data;
  const { slug } = useParams();
  const { pathname } = useLocation();
  const isServicesView = pathname.startsWith("/services");
  const course = courses && courses.find((course) => slug === course.slug);
  const handleCoursePayment = async () => {
    console.log("HandlePayment");
  };
  return (
    <>
      <div className="course-overview min-h-screen">
        <div className="relative mx-auto max-w-6xl">
          {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(248,113,113,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.1),transparent_32%)]" /> */}
          {isLoading ? (
            <AppLoader label="Loading course details..." />
          ) : (
            <div className="relative space-y-4">
              {isServicesView && (
                <ServiceBreadcrumb
                  currentLabel={course?.title || "Course Details"}
                />
              )}
              <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-2xl  bg-white/90 p-5 backdrop-blur space-y-4 md:p-6"
                >
                  {!isServicesView && (
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <Link className="font-semibold" to={"/"}>
                        Home
                      </Link>
                      <span className="text-red-600">/</span>
                      <Link className="font-semibold" to={"/courses"}>
                        Courses
                      </Link>
                      <span className="text-red-600">/</span>
                      <span className="opacity-80">{course.title}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                      <SiLevelsdotfyi className="text-red-700" />
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                      <MdOutlineWatchLater className="text-amber-700" />
                      {`${course.duration.value} ${course.duration.unit}`}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      <MdOutlineStarPurple500 className="text-amber-300" />
                      {course.rating} rating
                    </span>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl"
                  >
                    {course.title}
                  </motion.h1>

                  <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                    {course.overview.description ||
                      "Structured mentorship with live sessions, guided practice, and concise resources to master each concept with clarity."}
                  </p>

                  <div className="grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-3">
                    {[
                      {
                        label: "Live + Recorded",
                        value: course.mode || "Blended",
                      },
                      { label: "Cohort Size", value: "12–18 learners" },
                      {
                        label: "Language",
                        value: course.language || "EN",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base font-bold text-slate-900">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                  className="w-full space-y-4 lg:max-w-lg"
                >
                  <div className="rounded-2xl overflow-hidden md:mt-4 bg-white">
                    <div className="relative h-56 bg-gray-100">
                      <img
                        className="h-full w-full object-cover"
                        src={course.thumbnail}
                        alt={course.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm">
                        Guided by certified instructors
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-slate-500">
                            Limited offer
                          </p>
                          <div className="flex items-end gap-2">
                            <span className="flex items-center text-3xl font-extrabold text-slate-900">
                              <LiaRupeeSignSolid />
                              {course.price.amount - course.price.discount}
                            </span>
                            <span className="flex items-center text-sm text-slate-500 line-through">
                              <LiaRupeeSignSolid />
                              {course.price.amount}
                            </span>
                          </div>
                        </div>
                        <div className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                          Save {course.price.discount}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <IoMdCheckbox className="text-red-600" />
                        <span>Includes resources & recordings</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <IoMdCheckbox className="text-red-600" />
                        <span>Certificate on completion</span>
                      </div>

                      <Link
                        to={"#"}
                        onClick={() => handleCoursePayment()}
                        className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white font-bold shadow-md transition hover:bg-red-700"
                      >
                        Buy Course
                        <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                          <FaArrowRight />
                        </span>
                      </Link>
                      <p className="text-xs text-center text-slate-500">
                        Secure checkout • Instant access after purchase
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>

        {isLoading ? (
          "Loading..."
        ) : (
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 shadow-sm flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-700 font-semibold">
                Upcoming live session
              </p>
              <p className="text-lg md:text-xl font-bold text-slate-900">
                Next Q&A · Feb 18, 2026 — 8:00 PM
              </p>
              <p className="text-sm text-slate-700">
                Join live or watch the recording; submit questions in advance.
                Recording available within 24 hours.
              </p>
            </div>
          </div>
        )}

        {isLoading ? (
          "Loading..."
        ) : (
          <div className="max-w-6xl mx-auto px-4 pb-14">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-2xl bg-white/90 backdrop-blur border border-red-100 shadow-md p-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  What you will learn
                </h2>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {course.overview.whatYouWillLearn.map((wtl, index) => (
                    <li
                      key={index}
                      className="flex gap-3 items-start rounded-xl bg-slate-50 px-3 py-3 border border-slate-100"
                    >
                      <IoMdCheckbox className="mt-1 text-red-600 text-lg" />
                      <span>{wtl}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                className="rounded-2xl bg-white/90 backdrop-blur border border-red-100 shadow-md p-6"
              >
                <div className="flex items-center gap-3">
                  <FaDesktop className="text-red-600 text-4xl" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Course format
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      Designed for immersion
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {course.overview.courseFormat.map((cf, index) => (
                    <li
                      key={index}
                      className="flex gap-3 items-start rounded-xl bg-red-50/60 px-3 py-3 border border-red-100"
                    >
                      <IoMdCheckbox className="mt-1 text-red-600" />
                      <span>{cf}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseOverview;
