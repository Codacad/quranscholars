import { FiFilter, FiSearch, FiGrid, FiSliders } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Course from "@/features/courses/components/Course.jsx";
import { useGetCoursesQuery } from "@/services/api/courses/courses.api.js";
import AppLoader from "@/components/feedback/AppLoader.jsx";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";

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
    [courses]
  );

  const selectedCourses = useMemo(() => {
    let result = [...courses];

    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      result = result.filter((course) =>
      (course.title || "").toLowerCase().includes(query)
      );
    }

    if (category !== "All") {
      result = result.filter((course) => category === course.category);
    }

    if (sortBy === "alphabetical") {
      result.sort((a, b) =>
      (a.title || "").localeCompare(b.title || "", undefined, {
        sensitivity: "base"
      })
      );
    }

    if (sortBy === "level") {
      const levelOrder = {
        Basic: 1,
        Intermediate: 2,
        Advanced: 3
      };

      result.sort(
        (a, b) => (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99)
      );
    }

    return result;
  }, [category, courses, searchTerm, sortBy]);

  if (isLoading) {
    return (
      <div>





        
        <div>
          <AppLoader label="Loading courses..." />
        </div>
      </div>);

  }

  return (
    <div
      ref={serviceContentRef}>





      
      <div>
        {isServicesView && <ServiceBreadcrumb currentLabel="Courses" />}
        <div>
          <div />
          <div>
            <div>
              <div>
                <span />
                Course Library
              </div>
              {!isServicesView &&
              <div>
                  <Link to="/">
                    Home
                  </Link>
                  <span>/</span>
                  <span>Courses</span>
                </div>
              }

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}>

                
                Learn with a clear, curated pathway.
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}>

                
                Explore focused tracks crafted by scholars. Filter by category,
                search instantly, and jump into the next lesson with confidence.
              </motion.p>

              <div>
                <span>
                  <FiSliders />
                  Personalized pacing
                </span>
                <span>
                  Live and recorded access
                </span>
              </div>

              <div>
                <button>
                  Explore Tracks
                </button>
                <button>
                  View Syllabus PDF
                </button>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <p>
                    At a glance
                  </p>
                  <div>
                    <div>
                      <p>{count}</p>
                      <p>Active courses</p>
                    </div>
                    <div>
                      <p>
                        {categories.length - 1}
                      </p>
                      <p>Categories</p>
                    </div>
                    <div>
                      <p>4.8</p>
                      <p>Avg rating</p>
                    </div>
                  </div>
                  <div>
                    <div />
                  </div>
                  <p>
                    78% learners finish their pathway within 6 weeks.
                  </p>
                </div>

                <div>
                  <div>
                    <p>
                      Next live cohort
                    </p>
                    <span>
                      Enrolling
                    </span>
                  </div>
                  <p>
                    Tajweed Mastery
                  </p>
                  <p>Starts Sep 20, 2026</p>
                  <div>
                    <div>
                      4.9
                    </div>
                    <div>
                      <p>
                        Guided by certified Qaris
                      </p>
                      <p>
                        Live sessions and recordings included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <FiSearch />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, tags, topics..." />

              
            </div>
            <div>
              <FiFilter />
              Smart filters tuned for your path.
            </div>
          </div>

          <div>
            <button
              onClick={() => setSortBy("featured")}>





              
              Featured
            </button>
            <button
              onClick={() => setSortBy("alphabetical")}>





              
              A-Z
            </button>
            <button
              onClick={() => setSortBy("level")}>





              
              By Level
            </button>
            <div>
              <FiGrid />
              {count} courses
            </div>
          </div>
        </div>

        <div>
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setCategory(cat)}>





            
              {cat}
            </button>
          )}
        </div>
      </div>

      <motion.div

        initial="hidden"
        animate="visible"
        variants={
        shouldReduceMotion ?
        {
          hidden: { opacity: 1 },
          visible: { opacity: 1 }
        } :
        {
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.045, duration: 0.3 }
          }
        }
        }>
        
        {selectedCourses.map((course, index) =>
        <Course
          key={course?._id || course?.slug || index}
          course={course}
          index={index} />

        )}
      </motion.div>
    </div>);

};

export default Courses;
