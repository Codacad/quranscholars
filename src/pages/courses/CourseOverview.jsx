import { Link, useLocation, useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useGetCoursesQuery } from "@/services/api/courses/courses.api.js";
import AppLoader from "@/components/feedback/AppLoader.jsx";
import ServiceBreadcrumb from "@/components/navigation/ServiceBreadcrumb.jsx";
// import { useCoursePaymentMutation } from "@/services/api/user/paymentApi.js";
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
      <div>
        <div>
          {isLoading ?
          <AppLoader label="Loading course details..." /> :

          <div>
              {isServicesView &&
            <ServiceBreadcrumb
              currentLabel={course?.title || "Course Details"} />

            }
              <div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}>

                
                  {!isServicesView &&
                <div>
                      <Link to={"/"}>
                        Home
                      </Link>
                      <span>/</span>
                      <Link to={"/courses"}>
                        Courses
                      </Link>
                      <span>/</span>
                      <span>{course.title}</span>
                    </div>
                }

                  <div>
                    <span>
                      <SiLevelsdotfyi />
                      {course.level}
                    </span>
                    <span>
                      <MdOutlineWatchLater />
                      {`${course.duration.value} ${course.duration.unit}`}
                    </span>
                    <span>
                      <MdOutlineStarPurple500 />
                      {course.rating} rating
                    </span>
                  </div>

                  <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}>

                  
                    {course.title}
                  </motion.h1>

                  <p>
                    {course.overview.description ||
                  "Structured mentorship with live sessions, guided practice, and concise resources to master each concept with clarity."}
                  </p>

                  <div>
                    {[
                  {
                    label: "Live + Recorded",
                    value: course.mode || "Blended"
                  },
                  { label: "Cohort Size", value: "12–18 learners" },
                  {
                    label: "Language",
                    value: course.language || "EN"
                  }].
                  map((item, idx) =>
                  <div
                    key={idx}>

                    
                        <p>
                          {item.label}
                        </p>
                        <p>
                          {item.value}
                        </p>
                      </div>
                  )}
                  </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}>

                
                  <div>
                    <div>
                      <img

                      src={course.thumbnail}
                      alt={course.title} />
                    
                      <div />
                      <div>
                        Guided by certified instructors
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <p>
                            Limited offer
                          </p>
                          <div>
                            <span>
                              <LiaRupeeSignSolid />
                              {course.price.amount - course.price.discount}
                            </span>
                            <span>
                              <LiaRupeeSignSolid />
                              {course.price.amount}
                            </span>
                          </div>
                        </div>
                        <div>
                          Save {course.price.discount}
                        </div>
                      </div>

                      <div>
                        <IoMdCheckbox />
                        <span>Includes resources & recordings</span>
                      </div>
                      <div>
                        <IoMdCheckbox />
                        <span>Certificate on completion</span>
                      </div>

                      <Link
                      to={"#"}
                      onClick={() => handleCoursePayment()}>

                      
                        Buy Course
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                      <p>
                        Secure checkout • Instant access after purchase
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          }
        </div>

        {isLoading ?
        "Loading..." :

        <div>
            <div>
              <p>
                Upcoming live session
              </p>
              <p>
                Next Q&A · Feb 18, 2026 — 8:00 PM
              </p>
              <p>
                Join live or watch the recording; submit questions in advance.
                Recording available within 24 hours.
              </p>
            </div>
          </div>
        }

        {isLoading ?
        "Loading..." :

        <div>
            <div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}>

              
                <h2>
                  What you will learn
                </h2>
                <ul>
                  {course.overview.whatYouWillLearn.map((wtl, index) =>
                <li
                  key={index}>

                  
                      <IoMdCheckbox />
                      <span>{wtl}</span>
                    </li>
                )}
                </ul>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}>

              
                <div>
                  <FaDesktop />
                  <div>
                    <p>
                      Course format
                    </p>
                    <p>
                      Designed for immersion
                    </p>
                  </div>
                </div>
                <ul>
                  {course.overview.courseFormat.map((cf, index) =>
                <li
                  key={index}>

                  
                      <IoMdCheckbox />
                      <span>{cf}</span>
                    </li>
                )}
                </ul>
              </motion.div>
            </div>
          </div>
        }
      </div>
    </>);

};

export default CourseOverview;
